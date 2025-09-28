import React, { useState, useEffect, useMemo } from 'react';
import { useLocation } from 'react-router';
import {
  AccountSettingsLayout,
  ProfileTab,
  PasswordTab,
  NotificationsTab,
  ContentTab
} from './index';
import { useMainContent } from '../../contexts/main-content-context';
import { useAccountSettings } from '../../hooks/useAccountSettings';

interface AccountSettingsContentProps {
  onDeleteAccount: () => void;
  onUpdatePhoto: () => void;
}

export const AccountSettingsContent: React.FC<AccountSettingsContentProps> = ({
  onDeleteAccount,
  onUpdatePhoto
}) => {
  const { setCurrentContent: _setCurrentContent } = useMainContent();
  const location = useLocation();
  const { 
    data, 
    isLoading: _isLoading, 
    actions 
  } = useAccountSettings();
  
  // Detectar aba ativa baseada na URL (memoizada)
  const activeTab = useMemo(() => {
    if (location.pathname === '/account-settings' || location.pathname === '/account-settings/profile') {
      return 'profile';
    }
    if (location.pathname === '/account-settings/password') {
      return 'password';
    }
    if (location.pathname === '/account-settings/notifications') {
      return 'notifications';
    }
    if (location.pathname === '/account-settings/content') {
      return 'content';
    }
    return 'profile'; // default
  }, [location.pathname]);
  
  // Debug log
  console.log('AccountSettingsContent Debug:', {
    pathname: location.pathname,
    activeTab
  });
  
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
      const newScreenSize = width < 640 ? 'mobile' : width < 1024 ? 'tablet' : 'desktop';
      setScreenSize(newScreenSize);
      
      // Limpar qualquer debug visual que possa ter ficado
      document.body.style.borderTop = 'none';
      document.body.style.border = 'none';
      document.documentElement.style.borderTop = 'none';
      document.documentElement.style.border = 'none';
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Cleanup adicional no mount para remover linha azul
  useEffect(() => {
    // Garantir que não há bordas debug
    document.body.style.removeProperty('border-top');
    document.body.style.removeProperty('border');
    document.documentElement.style.removeProperty('border-top');
    document.documentElement.style.removeProperty('border');
    
    return () => {
      // Cleanup no unmount também
      document.body.style.removeProperty('border-top');
      document.body.style.removeProperty('border');
    };
  }, []);

  // Navegação é feita pelos Links do HorizontalTabs, não precisamos mais desta função

  const handleFormDataChange = (formData: any, isValid: boolean, isLoading: boolean) => {
    setCurrentFormData(formData);
    setIsFormValid(isValid);
    setIsFormLoading(isLoading);
  };

  const handleSave = async () => {
    if (!isFormValid || !currentFormData) return;

    setIsFormLoading(true);
    try {
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
          await actions.updateContent(currentFormData);
          break;
        default:
          console.log('Salvando dados:', currentFormData);
      }
    } catch (error) {
      console.error('Erro ao salvar:', error);
    } finally {
      setIsFormLoading(false);
    }
  };

  const handleCancel = () => {
    console.log('Cancelando alterações');
    // Reset form or navigate away
  };

  const getSaveButtonText = () => {
    switch (activeTab) {
      case 'password':
        return 'Atualizar senha';
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


  return (
    <AccountSettingsLayout
      userName={data.profile.username}
      userRole="INSS - Analista de seguro social"
      onDeleteAccount={onDeleteAccount}
      onUpdatePhoto={onUpdatePhoto}
      onCancel={handleCancel}
      onSave={handleSave}
      isLoading={isFormLoading}
      saveButtonText={getSaveButtonText()}
    >
      {renderTabContent()}
    </AccountSettingsLayout>
  );
};
