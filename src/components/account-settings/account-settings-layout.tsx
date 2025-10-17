import React, { useState, useEffect } from 'react';
import { PageHeader, HorizontalTabs, FormFooter } from './index';

interface AccountSettingsLayoutProps {
  children: React.ReactNode;
  userName?: string;
  userRole?: string;
  onDeleteAccount?: () => void;
  onUpdatePhoto?: () => void;
  // Footer props
  onCancel?: () => void;
  onSave?: () => void;
  isLoading?: boolean;
  saveButtonText?: string;
  // Tab control props
  activeTab?: string;
  onTabChange?: (tabId: string) => void;
  userType?: 'aluno' | 'admin';
}


export const AccountSettingsLayout: React.FC<AccountSettingsLayoutProps> = ({
  children,
  userName = 'Max William',
  userRole = 'INSS - Analista de seguro social',
  onDeleteAccount = () => {},
  onUpdatePhoto = () => {},
  // Footer props
  onCancel = () => {},
  onSave = () => {},
  isLoading = false,
  saveButtonText = 'Salvar alterações',
  // Tab control props
  activeTab,
  onTabChange,
  userType = 'aluno'
}) => {
  const [screenSize, setScreenSize] = useState<'mobile' | 'tablet' | 'desktop'>('desktop');

  // Detectar tamanho da tela
  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      setScreenSize(width < 640 ? 'mobile' : width < 1024 ? 'tablet' : 'desktop');
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh', // Garante altura mínima da viewport
      gap: screenSize === 'mobile' || screenSize === 'tablet' ? '20px' : '32px', // Mobile/Tablet: gap 20px conforme Figma
      padding: screenSize === 'mobile' ? '20px 16px' : screenSize === 'tablet' ? '12px 8px' : '16px 16px', // Padding conforme Figma mobile
      maxWidth: 'none', // Header e footer podem expandir totalmente
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

      {/* Container - Flex grow para empurrar footer para baixo */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        flex: 1, // Ocupa espaço restante
        gap: screenSize === 'mobile' || screenSize === 'tablet' ? '24px' : '24px' // Gap conforme Figma mobile/tablet
      }}>
        {/* Tabs */}
        <HorizontalTabs
          screenSize={screenSize}
          activeTab={activeTab}
          onTabChange={onTabChange}
          userType={userType}
        />

        {/* Content - Flex grow para empurrar footer para baixo */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          flex: 1, // Ocupa espaço restante, empurrando footer para baixo
          gap: '20px'
        }}>
          {children}
        </div>
      </div>

      {/* Footer centralizado */}
      <FormFooter
        onCancel={onCancel}
        onSave={onSave}
        isLoading={isLoading}
        screenSize={screenSize}
        saveButtonText={saveButtonText}
      />
    </div>
  );
};
