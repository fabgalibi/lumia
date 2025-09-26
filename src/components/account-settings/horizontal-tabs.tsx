import React from 'react';

interface HorizontalTabsProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  screenSize?: 'mobile' | 'tablet' | 'desktop';
}

export function HorizontalTabs({ activeTab, onTabChange, screenSize = 'desktop' }: HorizontalTabsProps) {
  const tabs = [
    { id: 'profile', label: 'Dados de perfil' },
    { id: 'password', label: 'Alterar senha' },
    { id: 'notifications', label: 'Notificações' },
    { id: 'content', label: 'Bagagem de conteúdo' }
  ];

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignSelf: 'stretch',
      gap: '8px',
      width: '100%',
      borderBottom: '1px solid #22262F'
    }}>
      <div style={{
        display: 'flex',
               gap: screenSize === 'mobile' || screenSize === 'tablet' ? '8px' : '12px', // Mobile/Tablet: gap menor
               flexWrap: screenSize === 'mobile' || screenSize === 'tablet' ? 'wrap' : 'nowrap' // Mobile/Tablet: permite wrap se necessário
      }}>
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '8px',
                padding: '0px 4px 12px',
                height: '32px',
                backgroundColor: 'transparent',
                border: 'none',
                borderBottom: isActive ? '2px solid #F48E2F' : '2px solid transparent',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
            >
              <span style={{
                fontFamily: 'Sora',
                fontWeight: isActive ? '600' : '400', // Text sm Semibold vs Text sm Medium
                fontSize: '14px',
                lineHeight: '1.4285714285714286em', // 20px / 14px
                color: isActive ? '#F48E2F' : '#CECFD2',
                whiteSpace: 'nowrap'
              }}>
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
