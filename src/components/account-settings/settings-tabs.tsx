import React from 'react';
import { Tabs } from '@/components/ui/design-system';

interface Tab {
  id: string;
  label: string;
}

interface SettingsTabsProps {
  tabs?: Tab[];
  activeTab: string;
  onTabChange: (tabId: string) => void;
  screenSize?: 'mobile' | 'tablet' | 'desktop';
}

export const SettingsTabs: React.FC<SettingsTabsProps> = ({
  tabs = [
    { id: 'profile', label: 'Dados Pessoais' },
    { id: 'password', label: 'Alterar senha' },
    { id: 'notifications', label: 'Notificações' },
    { id: 'content', label: 'Bagagem de conteúdo' }
  ],
  activeTab,
  onTabChange,
  screenSize = 'desktop'
}) => {
  return (
    <Tabs
      tabs={tabs}
      activeTab={activeTab}
      onTabChange={onTabChange}
      variant="underline"
      size="md"
      screenSize={screenSize}
    />
  );
};

