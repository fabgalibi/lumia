import React, { useState } from 'react';
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
  const { setCurrentContent } = useMainContent();
  const { 
    data, 
    isLoading, 
    activeTab, 
    setActiveTab, 
    actions 
  } = useAccountSettings();

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
