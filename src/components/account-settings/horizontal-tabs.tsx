import React from 'react';
import { useLocation, useNavigate } from 'react-router';
import { Tabs } from '@/components/ui/design-system';

interface HorizontalTabsProps {
  screenSize?: 'mobile' | 'tablet' | 'desktop';
}

export function HorizontalTabs({ screenSize = 'desktop' }: HorizontalTabsProps) {
  const location = useLocation();
  const navigate = useNavigate();
  
  const getActiveTab = () => {
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
  };
  
  const activeTab = getActiveTab();
  const tabs = [
    { id: 'profile', label: 'Dados de perfil' },
    { id: 'password', label: 'Alterar senha' },
    { id: 'notifications', label: 'Notificações' },
    { id: 'content', label: 'Bagagem de conteúdo' }
  ];

  const handleTabChange = (tabId: string) => {
    navigate(`/account-settings/${tabId}`);
  };

  return (
    <div style={{
      alignSelf: 'stretch',
      width: '100%'
    }}>
      <Tabs
        tabs={tabs}
        activeTab={activeTab}
        onTabChange={handleTabChange}
        variant="underline"
        size="md"
        screenSize={screenSize}
      />
    </div>
  );
}
