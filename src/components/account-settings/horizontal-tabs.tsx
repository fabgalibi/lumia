import React from 'react';
import { Link, useLocation } from 'react-router';

interface HorizontalTabsProps {
  screenSize?: 'mobile' | 'tablet' | 'desktop';
}

export function HorizontalTabs({ screenSize = 'desktop' }: HorizontalTabsProps) {
  const location = useLocation();
  
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
          const getTabPath = (tabId: string) => {
            return `/account-settings/${tabId}`;
          };
          
          return (
            <Link
              key={tab.id}
              to={getTabPath(tab.id)}
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
                transition: 'all 0.2s ease',
                textDecoration: 'none'
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
            </Link>
          );
        })}
      </div>
    </div>
  );
}
