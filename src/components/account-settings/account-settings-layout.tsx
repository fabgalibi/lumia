import React from 'react';
import { PageHeader, HorizontalTabs } from './index';

interface AccountSettingsLayoutProps {
  children: React.ReactNode;
  activeTab: string;
  onTabChange: (tabId: string) => void;
  userName?: string;
  userRole?: string;
  onDeleteAccount?: () => void;
  onUpdatePhoto?: () => void;
}


export const AccountSettingsLayout: React.FC<AccountSettingsLayoutProps> = ({
  children,
  activeTab,
  onTabChange,
  userName = 'Max William',
  userRole = 'INSS - Analista de seguro social',
  onDeleteAccount = () => {},
  onUpdatePhoto = () => {}
}) => {
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
        userName={userName}
        userRole={userRole}
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
          onTabChange={onTabChange}
        />

        {/* Content */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '20px'
        }}>
          {children}
        </div>
      </div>
    </div>
  );
};
