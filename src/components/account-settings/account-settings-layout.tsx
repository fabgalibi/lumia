import React, { useState, useEffect } from 'react';
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
  const [screenSize, setScreenSize] = useState<'mobile' | 'desktop'>('desktop');

  // Detectar tamanho da tela
  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      setScreenSize(width < 768 ? 'mobile' : 'desktop');
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: screenSize === 'mobile' ? '20px' : '32px', // Mobile: gap 20px conforme Figma
      padding: screenSize === 'mobile' ? '20px 16px' : '24px 32px', // Mobile: padding 20px 16px conforme Figma
      maxWidth: '1196px',
      width: '100%'
    }}>
      {/* Page Header */}
      <PageHeader
        userName={userName}
        userRole={userRole}
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
          onTabChange={onTabChange}
          screenSize={screenSize}
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
