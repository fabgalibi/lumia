import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BarChart3, Users, BookOpen, CreditCard, Zap, Shield } from 'lucide-react';

interface AdminSidebarProps {
  isOpen: boolean;
  onToggle: () => void;
  currentPage?: string;
}

export const AdminSidebar: React.FC<AdminSidebarProps> = ({ 
  isOpen, 
  onToggle, 
  currentPage 
}) => {
  const location = useLocation();
  
  const navItems = [
    { name: 'Início', path: '/admin/dashboard', icon: BarChart3 },
    { name: 'Alunos', path: '/admin/students', icon: Users },
    { name: 'Disciplinas', path: '/admin/disciplines', icon: BookOpen },
    { name: 'Planos', path: '/admin/plans', icon: CreditCard },
    { name: 'Sprints', path: '/admin/sprints', icon: Zap },
    { name: 'Permissões', path: '/admin/permissions', icon: Shield },
  ];

  return (
    <aside
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: isOpen ? '280px' : '80px',
        height: '100vh',
        background: '#252532',
        borderRight: '1px solid #22262F',
        transition: 'width 0.3s ease',
        zIndex: 1000,
        overflow: 'hidden'
      }}
    >
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        padding: '24px 16px'
      }}>
        {/* Logo */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: isOpen ? 'flex-start' : 'center',
          marginBottom: '32px',
          padding: '0 8px'
        }}>
          {isOpen ? (
            <img 
              src="/images/lumia-logo-admin.svg" 
              alt="Lumia Logo" 
              style={{ 
                width: '120px',
                height: '36px'
              }} 
            />
          ) : (
            <div style={{
              width: '40px',
              height: '40px',
              background: '#C74228',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <span style={{
                color: '#FFFFFF',
                fontWeight: 'bold',
                fontSize: '18px'
              }}>
                L
              </span>
            </div>
          )}
        </div>

        {/* Navigation */}
        <nav style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
          flex: 1
        }}>
          {navItems.map((item) => {
            const isActive = location.pathname === item.path || currentPage === item.name.toLowerCase();
            const Icon = item.icon;
            
            return (
              <Link
                key={item.name}
                to={item.path}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: isOpen ? '12px' : '0',
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
                  justifyContent: isOpen ? 'flex-start' : 'center',
                  position: 'relative'
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
                title={!isOpen ? item.name : undefined}
              >
                <Icon size={20} color="currentColor" strokeWidth={1.5} />
                {isOpen && <span>{item.name}</span>}
              </Link>
            );
          })}
        </nav>
      </div>
    </aside>
  );
};
