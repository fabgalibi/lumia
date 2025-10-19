import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { UserMenu } from '@/components/lumia/user-menu';

interface AdminHeaderProps {
  currentPage?: string;
}

export const AdminHeader: React.FC<AdminHeaderProps> = ({ 
  currentPage 
}) => {
  const location = useLocation();
  
  const navItems = [
    { name: 'Início', path: '/admin/dashboard' },
    { name: 'Alunos', path: '/admin/students' },
    { name: 'Disciplinas', path: '/admin/disciplines' },
    { name: 'Planos', path: '/admin/plans' },
    { name: 'Sprints', path: '/admin/sprints' },
    { name: 'Permissões', path: '/admin/permissions' },
  ];

  return (
    <header
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        alignSelf: 'stretch',
        background: '#252532',
        borderBottom: '1px solid #22262F',
        padding: '0 32px',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
          maxWidth: '1280px',
          height: '72px',
        }}
      >
        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img 
            src="/images/lumia-logo-admin.svg" 
            alt="Lumia Logo" 
            style={{ 
              width: '141px',
              height: '44px'
            }} 
          />
        </div>

        {/* Navigation */}
        <nav
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
          }}
        >
          {navItems.map((item) => {
            const isActive = location.pathname === item.path || currentPage === item.name.toLowerCase();
            return (
              <Link
                key={item.name}
                to={item.path}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: '8px 12px',
                  borderRadius: '6px',
                  gap: '12px',
                  textDecoration: 'none',
                  color: isActive ? '#F7F7F7' : '#F0F0F1',
                  background: isActive ? '#4B3532' : 'transparent',
                  fontFamily: 'Sora',
                  fontWeight: isActive ? 600 : 400,
                  fontSize: '16px',
                  lineHeight: '1.5em',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.background = 'rgba(75, 53, 50, 0.5)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.background = 'transparent';
                  }
                }}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* Profile Dropdown */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <UserMenu />
        </div>
      </div>
    </header>
  );
};
