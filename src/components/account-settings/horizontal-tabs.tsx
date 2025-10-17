import React from 'react';
import { useLocation, useNavigate } from 'react-router';
import { Tabs } from '@/components/ui/design-system';

interface HorizontalTabsProps {
  screenSize?: 'mobile' | 'tablet' | 'desktop';
  activeTab?: string;
  onTabChange?: (tabId: string) => void;
  userType?: 'aluno' | 'admin';
}

export function HorizontalTabs({ 
  screenSize = 'desktop', 
  activeTab: externalActiveTab,
  onTabChange: externalOnTabChange,
  userType = 'aluno'
}: HorizontalTabsProps) {
  const location = useLocation();
  const navigate = useNavigate();
  
  const getActiveTab = () => {
    const basePath = userType === 'admin' ? '/admin/settings' : '/account-settings';
    
    if (location.pathname === basePath || location.pathname === `${basePath}/profile`) {
      return 'profile';
    }
    if (location.pathname === `${basePath}/password`) {
      return 'password';
    }
    if (location.pathname === `${basePath}/notifications`) {
      return 'notifications';
    }
    if (location.pathname === `${basePath}/content`) {
      return 'content';
    }
    return 'profile'; // default
  };
  
  const activeTab = externalActiveTab || getActiveTab();
  const tabs = [
    { id: 'profile', label: 'Dados de perfil' },
    { id: 'password', label: 'Alterar senha' },
    { id: 'notifications', label: 'Notificações' },
    { id: 'content', label: 'Bagagem de conteúdo' }
  ];

  const handleTabChange = (tabId: string) => {
    if (externalOnTabChange) {
      // Se há callback externo, usar ele (não navegar)
      externalOnTabChange(tabId);
    } else {
      // Comportamento padrão: navegar para nova rota
      const basePath = userType === 'admin' ? '/admin/settings' : '/account-settings';
      navigate(`${basePath}/${tabId}`);
    }
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
