import React from 'react';

interface Tab {
  id: string;
  label: string;
}

interface SettingsTabsProps {
  tabs: Tab[];
  activeTab: string;
  onTabChange: (tabId: string) => void;
}

export const SettingsTabs: React.FC<SettingsTabsProps> = ({
  tabs,
  activeTab,
  onTabChange
}) => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '8px',
      borderBottom: '1px solid #22262F'
    }}>
      <div style={{
        display: 'flex',
        gap: '0px'
      }}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              padding: '0px 4px 12px',
              height: '32px',
              borderBottom: activeTab === tab.id ? '2px solid #F48E2F' : '2px solid transparent',
              backgroundColor: 'transparent',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              position: 'relative'
            }}
            onMouseEnter={(e) => {
              if (activeTab !== tab.id) {
                e.currentTarget.style.borderBottom = '2px solid rgba(244, 142, 47, 0.5)';
              }
            }}
            onMouseLeave={(e) => {
              if (activeTab !== tab.id) {
                e.currentTarget.style.borderBottom = '2px solid transparent';
              }
            }}
          >
            <span style={{
              fontFamily: 'Sora',
              fontWeight: activeTab === tab.id ? '600' : '400',
              fontSize: '14px',
              lineHeight: '1.43em',
              color: activeTab === tab.id ? '#F48E2F' : '#CECFD2',
              transition: 'all 0.2s ease'
            }}>
              {tab.label}
            </span>
            {activeTab === tab.id && (
              <div style={{
                position: 'absolute',
                bottom: '-1px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '20px',
                height: '2px',
                backgroundColor: '#F48E2F',
                borderRadius: '1px'
              }} />
            )}
          </button>
        ))}
      </div>
    </div>
  );
};
