import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { UserMenu } from '@/components/lumia/user-menu';
import './admin-header.css';

const NAV_ITEMS = [
  { name: 'Início', path: '/admin/dashboard' },
  { name: 'Alunos', path: '/admin/students' },
  { name: 'Disciplinas', path: '/admin/disciplines' },
  { name: 'Planos', path: '/admin/plans' },
  { name: 'Sprints', path: '/admin/sprints' },
  { name: 'Permissões', path: '/admin/permissions' },
];

export const AdminHeader: React.FC = () => {
  const location = useLocation();
  const [isMobile, setIsMobile] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Detectar se é mobile/tablet
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 1025);
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  // Fechar menu ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (isMobileMenuOpen && 
          !target.closest('.admin-mobile-menu-dropdown') && 
          !target.closest('.admin-mobile-menu-btn')) {
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

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const renderNavLink = (item: typeof NAV_ITEMS[0], isMobile = false) => {
    const isActive = location.pathname === item.path;
    const baseClass = isMobile ? 'admin-mobile-nav-link' : 'admin-nav-link';
    const activeClass = isMobile ? 'admin-mobile-nav-link--active' : 'admin-nav-link--active';
    const inactiveClass = isMobile ? 'admin-mobile-nav-link--inactive' : 'admin-nav-link--inactive';
    
    return (
      <Link
        key={item.name}
        to={item.path}
        onClick={isMobile ? closeMobileMenu : undefined}
        className={`${baseClass} ${isActive ? activeClass : inactiveClass}`}
      >
        {item.name}
      </Link>
    );
  };

  return (
    <header className="admin-main-header">
      <div className="admin-header-content">
        {/* Logo */}
        <div className="admin-header-logo">
          <img 
            src="/images/lumia-logo-admin.svg" 
            alt="Lumia Logo" 
            className="admin-logo-img"
          />
        </div>

        {/* Navigation - Desktop */}
        {!isMobile && (
          <nav className="admin-header-nav">
            {NAV_ITEMS.map(item => renderNavLink(item))}
          </nav>
        )}

        {/* Mobile Menu Button */}
        {isMobile && (
          <button 
            onClick={toggleMobileMenu}
            className="admin-mobile-menu-btn"
            aria-label="Menu"
          >
            <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 6H15M3 1H15M3 11H15" stroke="#F66649" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        )}

        {/* Profile Dropdown */}
        <div className="admin-header-profile">
          <UserMenu />
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobile && isMobileMenuOpen && (
        <div className="admin-mobile-menu-dropdown">
          <nav className="admin-mobile-nav">
            {NAV_ITEMS.map(item => renderNavLink(item, true))}
          </nav>
        </div>
      )}
    </header>
  );
};
