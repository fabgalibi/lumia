import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { UserMenu } from '@/components/lumia/user-menu';

export const AdminDashboardHeader: React.FC = () => {
  console.log('AdminDashboardHeader rendered');
  const location = useLocation();
  const [isMobile, setIsMobile] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const navItems = [
    { name: 'Início', path: '/admin/dashboard' },
    { name: 'Alunos', path: '/admin/students' },
    { name: 'Disciplinas', path: '/admin/disciplines' },
    { name: 'Planos', path: '/admin/plans' },
    { name: 'Sprints', path: '/admin/sprints' },
    { name: 'Permissões', path: '/admin/permissions' },
  ];

  // Detectar se é mobile/tablet
  useEffect(() => {
    const checkIsMobile = () => {
      const mobile = window.innerWidth < 1025;
      console.log('Screen width:', window.innerWidth, 'Is mobile:', mobile);
      setIsMobile(mobile);
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  const toggleMobileMenu = () => {
    console.log('Toggle mobile menu:', !isMobileMenuOpen);
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Fechar menu ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isMobileMenuOpen && !(event.target as Element).closest('.admin-mobile-menu-dropdown') && 
          !(event.target as Element).closest('.admin-mobile-menu-btn')) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* Debug info */}
      <div style={{
        position: 'fixed',
        top: '10px',
        left: '10px',
        background: 'red',
        color: 'white',
        padding: '10px',
        zIndex: 10000,
        borderRadius: '4px',
        fontSize: '12px'
      }}>
        Mobile: {isMobile ? 'Yes' : 'No'} | Menu: {isMobileMenuOpen ? 'Open' : 'Closed'} | Width: {typeof window !== 'undefined' ? window.innerWidth : 'N/A'}
        <br />
        Button: {isMobile ? 'Visible' : 'Hidden'}
      </div>
      
      <header
        className="admin-main-header"
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
      <div className="admin-header-content" style={{ position: 'relative' }}>
        {/* Logo */}
        <div className="admin-header-logo" style={{ display: 'flex', alignItems: 'center' }}>
          <img 
            src="/images/lumia-logo-admin.svg" 
            alt="Lumia Logo" 
            style={{ 
              width: '141px',
              height: '44px'
            }} 
          />
        </div>

        {/* Mobile Menu Button */}
        {isMobile && (
          <button 
            onClick={() => {
              console.log('Button clicked!');
              toggleMobileMenu();
            }}
            className="admin-mobile-menu-btn"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: '#24212D',
              border: '1px solid #272737',
              borderRadius: '40px',
              padding: '10px',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              position: 'relative'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#2A2B3A';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#24212D';
            }}
          >
            <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 6H15M3 1H15M3 11H15" stroke="#F66649" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            {/* Debug indicator */}
            {isMobileMenuOpen && (
              <div style={{
                position: 'absolute',
                top: '-5px',
                right: '-5px',
                width: '10px',
                height: '10px',
                background: 'red',
                borderRadius: '50%'
              }} />
            )}
          </button>
        )}
        

        {/* Navigation - Desktop */}
        {!isMobile && (
          <nav
            className="admin-header-nav"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
            }}
          >
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
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
        )}

        {/* Profile Dropdown */}
        <div className="admin-header-profile" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <UserMenu />
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobile && isMobileMenuOpen && (
        <div 
          style={{
            position: 'absolute',
            top: '100%',
            right: '0',
            background: '#252532',
            border: '2px solid red', // Debug border
            borderRadius: '12px',
            padding: '8px',
            minWidth: '200px',
            maxWidth: '280px',
            boxShadow: '0 10px 25px rgba(0, 0, 0, 0.3)',
            zIndex: 9999,
            marginTop: '8px',
            animation: 'slideDown 0.2s ease-out',
            display: 'block',
            visibility: 'visible',
            opacity: 1
          }}
        >
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    padding: '12px 16px',
                    borderRadius: '8px',
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
        </div>
      )}
    </header>
    </>
  );
};