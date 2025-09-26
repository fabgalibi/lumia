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
  const [screenSize, setScreenSize] = useState<'mobile' | 'desktop'>('desktop');

  // Detectar tamanho da tela
  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      const newScreenSize = width < 768 ? 'mobile' : 'desktop';
      setScreenSize(newScreenSize);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
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
      gap: '32px',
      padding: '24px 32px',
      maxWidth: '1196px',
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
        gap: '24px'
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
