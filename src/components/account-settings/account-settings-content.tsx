import React, { useState, useEffect } from 'react';
import {
  PageHeader,
  HorizontalTabs,
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
  const { 
    data, 
    isLoading: _isLoading, 
    activeTab, 
    setActiveTab, 
    actions 
  } = useAccountSettings();
  const [screenSize, setScreenSize] = useState<'mobile' | 'tablet' | 'desktop'>('desktop');

  // Detectar tamanho da tela
  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      const newScreenSize = width < 768 ? 'mobile' : width < 1024 ? 'tablet' : 'desktop';
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

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
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
          />
        );
      
      case 'password':
        return (
          <PasswordTab
            onSave={actions.updatePassword}
            onCancel={() => console.log('Cancelar alteração de senha')}
          />
        );
      
      case 'notifications':
        return (
          <NotificationsTab
            initialData={data.notifications}
            onSave={actions.updateNotifications}
            onCancel={() => console.log('Cancelar alterações de notificação')}
          />
        );
      
      case 'content':
        return (
          <ContentTab
            initialData={data.content}
            onSave={actions.updateContent}
            onCancel={() => console.log('Cancelar alterações de conteúdo')}
          />
        );
      
      default:
        return <ProfileTab initialData={data.profile} />;
    }
  };


  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: screenSize === 'mobile' || screenSize === 'tablet' ? '20px' : '32px', // Mobile/Tablet: gap 20px conforme Figma
      padding: screenSize === 'mobile' ? '8px 4px' : screenSize === 'tablet' ? '12px 8px' : '16px 16px', // Padding mínimo conforme Figma
      maxWidth: 'none', // Header e footer podem expandir totalmente
      width: '100%'
    }}>

      {/* Page Header */}
      <PageHeader
        userName={data.profile.username}
        userRole="INSS - Analista de seguro social"
        onDeleteAccount={onDeleteAccount}
        onUpdatePhoto={onUpdatePhoto}
        screenSize={screenSize}
      />

      {/* Container */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: screenSize === 'mobile' ? '24px' : '24px' // Gap conforme Figma mobile
      }}>
        {/* Tabs */}
        <HorizontalTabs
          activeTab={activeTab}
          onTabChange={handleTabChange}
          screenSize={screenSize}
        />

        {/* Content based on active tab */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '20px'
        }}>
          {renderTabContent()}
        </div>
      </div>
    </div>
  );
};
