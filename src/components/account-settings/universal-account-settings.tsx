import React, { useState, useEffect, useMemo } from 'react';
import { useLocation } from 'react-router';
import {
  AccountSettingsLayout,
  ProfileTab,
  PasswordTab,
  NotificationsTab,
  ContentTab
} from './index';
import { useAccountSettings } from '../../hooks/useAccountSettings';

interface UniversalAccountSettingsProps {
  onDeleteAccount: () => void;
  onUpdatePhoto: () => void;
  userType?: 'aluno' | 'admin';
  userName?: string;
  userRole?: string;
}

export const UniversalAccountSettings: React.FC<UniversalAccountSettingsProps> = ({
  onDeleteAccount,
  onUpdatePhoto,
  userType = 'aluno',
  userName,
  userRole
}) => {
  const location = useLocation();
  const { 
    data, 
    isLoading: _isLoading, 
    actions 
  } = useAccountSettings();
  
  // Estado local para controlar a aba ativa
  const [activeTab, setActiveTab] = useState<'profile' | 'password' | 'notifications' | 'content'>('profile');
  
  // Detectar aba ativa baseada na URL apenas na inicialização
  useEffect(() => {
    const basePath = userType === 'admin' ? '/admin/settings' : '/account-settings';
    
    if (location.pathname === basePath || location.pathname === `${basePath}/profile`) {
      setActiveTab('profile');
    } else if (location.pathname === `${basePath}/password`) {
      setActiveTab('password');
    } else if (location.pathname === `${basePath}/notifications`) {
      setActiveTab('notifications');
    } else if (location.pathname === `${basePath}/content`) {
      setActiveTab('content');
    }
  }, [location.pathname, userType]);
  
  const [screenSize, setScreenSize] = useState<'mobile' | 'tablet' | 'desktop'>(() => {
    // Inicialização síncrona
    if (typeof window !== 'undefined') {
      const width = window.innerWidth;
      return width < 640 ? 'mobile' : width < 1024 ? 'tablet' : 'desktop';
    }
    return 'desktop';
  });
  const [isFormLoading, setIsFormLoading] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);
  const [currentFormData, setCurrentFormData] = useState<any>(null);

  // Detectar tamanho da tela
  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setScreenSize('mobile');
      } else if (width < 1024) {
        setScreenSize('tablet');
      } else {
        setScreenSize('desktop');
      }
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const handleFormDataChange = (formData: any, isValid: boolean) => {
    setCurrentFormData(formData);
    setIsFormValid(isValid);
  };

  const handleSave = async () => {
    if (!isFormValid || !currentFormData) return;
    
    setIsFormLoading(true);
    try {
      // Lógica de salvamento baseada na aba ativa
      switch (activeTab) {
        case 'profile':
          await actions.updateProfile(currentFormData);
          break;
        case 'password':
          await actions.updatePassword(currentFormData);
          break;
        case 'notifications':
          await actions.updateNotifications(currentFormData);
          break;
        case 'content':
          // Content tab não tem ação de save
          break;
      }
    } catch (error) {
      console.error('Erro ao salvar:', error);
    } finally {
      setIsFormLoading(false);
    }
  };

  const handleCancel = () => {
    setCurrentFormData(null);
    setIsFormValid(false);
  };

  const handleTabChange = (tab: 'profile' | 'password' | 'notifications' | 'content') => {
    setActiveTab(tab);
    // Limpar dados do formulário ao mudar de aba
    setCurrentFormData(null);
    setIsFormValid(false);
  };

  const getSaveButtonText = () => {
    switch (activeTab) {
      case 'profile':
        return 'Salvar perfil';
      case 'password':
        return 'Alterar senha';
      case 'notifications':
        return 'Salvar notificações';
      case 'content':
        return 'Salvar conteúdo';
      default:
        return 'Salvar alterações';
    }
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'profile':
        return (
          <ProfileTab
            initialData={data.profile}
            onSave={actions.updateProfile}
            onCancel={() => console.log('Cancelar alterações de perfil')}
            screenSize={screenSize}
            onFormDataChange={handleFormDataChange}
          />
        );
      
      case 'password':
        return (
          <PasswordTab
            onSave={actions.updatePassword}
            onCancel={() => console.log('Cancelar alteração de senha')}
            screenSize={screenSize}
            onFormDataChange={handleFormDataChange}
          />
        );
      
      case 'notifications':
        return (
          <NotificationsTab
            initialData={data.notifications}
            onSave={actions.updateNotifications}
            onCancel={() => console.log('Cancelar alterações de notificação')}
            screenSize={screenSize}
            onFormDataChange={handleFormDataChange}
          />
        );
      
      case 'content':
        return (
          <ContentTab
            initialData={data.content}
            screenSize={screenSize}
            onFormDataChange={handleFormDataChange}
          />
        );
      
      default:
        return <ProfileTab initialData={data.profile} />;
    }
  };

  // Valores padrão baseados no tipo de usuário
  const defaultUserName = userName || (userType === 'admin' ? 'Administrador' : data.profile.username);
  const defaultUserRole = userRole || (userType === 'admin' ? 'Administrador do Sistema' : 'INSS - Analista de seguro social');

  return (
    <AccountSettingsLayout
      userName={defaultUserName}
      userRole={defaultUserRole}
      onDeleteAccount={onDeleteAccount}
      onUpdatePhoto={onUpdatePhoto}
      onCancel={handleCancel}
      onSave={handleSave}
      isLoading={isFormLoading}
      saveButtonText={getSaveButtonText()}
      activeTab={activeTab}
      onTabChange={handleTabChange}
      userType={userType}
    >
      {renderTabContent()}
    </AccountSettingsLayout>
  );
};
