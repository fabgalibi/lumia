import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../../contexts/auth-context";
import { LogoutModal } from "@/components/modals/logout-modal";

export const UserMenu: React.FC = () => {
  
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const navigate = useNavigate();
  const { logout } = useAuth();

  // Fechar menu quando clicar fora
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isUserMenuOpen) {
        const target = event.target as HTMLElement;
        if (!target.closest('.user-menu-container')) {
          setIsUserMenuOpen(false);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isUserMenuOpen]);

  const handleLogoutClick = () => {
    console.log('🔍 UserMenu: Clicando em sair da conta');
    setIsUserMenuOpen(false);
    setShowLogoutModal(true);
    console.log('🔍 UserMenu: showLogoutModal definido como true');
  };

  const handleLogoutConfirm = () => {
    setShowLogoutModal(false);
    
    // Verifica se é admin ANTES de fazer logout
    const userData = JSON.parse(localStorage.getItem('user_data') || '{}');
    const isAdmin = userData.grupo?.nome === 'administrador' || userData.grupoId === 2;
    
    // Faz logout
    logout();
    
    // Navega para a página correta
    if (isAdmin) {
      navigate('/admin/login');
    } else {
      navigate('/login');
    }
  };

  const handleLogoutClose = () => {
    setShowLogoutModal(false);
  };

  const handleMenuToggle = () => {
    setIsUserMenuOpen(!isUserMenuOpen);
  };

  console.log('🔍 UserMenu: Renderizando', { isUserMenuOpen, showLogoutModal });

  return (
    <div 
      className="flex items-center relative user-menu-container"
      style={{
        background: '#46372D',
        borderRadius: '24px',
        padding: '0px 0px 0px 8px',
        gap: '4px',
        boxShadow: '0px 4px 12px 0px rgba(0, 0, 0, 0.25)',
        border: '1px solid rgba(244, 142, 47, 0.3)',
        backdropFilter: 'blur(8px)'
      }}
    >
      {/* Botão hamburger */}
             <button
               onClick={handleMenuToggle}
        className="flex items-center justify-center transition-all duration-200"
        style={{
          padding: '8px',
          borderRadius: '8px',
          cursor: 'pointer',
          background: isUserMenuOpen ? '#F48E2F' : 'transparent',
          color: isUserMenuOpen ? '#FFFFFF' : '#F48E2F',
          transform: isUserMenuOpen ? 'scale(1.05)' : 'scale(1)',
          boxShadow: isUserMenuOpen ? '0px 2px 8px rgba(244, 142, 47, 0.3)' : 'none'
        }}
        onMouseEnter={(e: React.MouseEvent<HTMLButtonElement>) => {
          if (!isUserMenuOpen) {
            e.currentTarget.style.background = 'rgba(244, 142, 47, 0.15)';
            e.currentTarget.style.transform = 'scale(1.02)';
          }
        }}
        onMouseLeave={(e: React.MouseEvent<HTMLButtonElement>) => {
          if (!isUserMenuOpen) {
            e.currentTarget.style.background = 'transparent';
            e.currentTarget.style.transform = 'scale(1)';
          }
        }}
      >
        <svg width="15" height="10" viewBox="0 0 15 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2.5 5H12.5M2.5 1H12.5M2.5 9H12.5" stroke="currentColor" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      {/* Avatar */}
             <button
               onClick={handleMenuToggle}
        className="w-10 h-10 rounded-full flex items-center justify-center relative overflow-hidden transition-all duration-200"
        style={{
          background: '#D6B3B3',
          border: '1.5px solid #F48E2F',
          borderRadius: '9999px',
          cursor: 'pointer',
          boxShadow: isUserMenuOpen ? '0px 0px 0px 2px rgba(244, 142, 47, 0.4), 0px 4px 12px rgba(244, 142, 47, 0.2)' : '0px 2px 8px rgba(0, 0, 0, 0.15)',
          transform: isUserMenuOpen ? 'scale(1.05)' : 'scale(1)'
        }}
        onMouseEnter={(e: React.MouseEvent<HTMLButtonElement>) => {
          e.currentTarget.style.boxShadow = '0px 0px 0px 2px rgba(244, 142, 47, 0.4), 0px 4px 12px rgba(244, 142, 47, 0.2)';
          e.currentTarget.style.transform = 'scale(1.02)';
        }}
        onMouseLeave={(e: React.MouseEvent<HTMLButtonElement>) => {
          if (!isUserMenuOpen) {
            e.currentTarget.style.boxShadow = '0px 2px 8px rgba(0, 0, 0, 0.15)';
            e.currentTarget.style.transform = 'scale(1)';
          }
        }}
      >
        <img 
          src="/images/account-settings/avatar-user.png" 
          alt="Avatar do usuário" 
          className="w-full h-full rounded-full object-cover"
          style={{
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center'
          }}
        />
        {/* Borda interna com contraste */}
        <div 
          className="absolute inset-0 rounded-full pointer-events-none"
          style={{
            border: '0.75px solid rgba(255, 255, 255, 0.12)',
            borderRadius: '9999px'
          }}
        ></div>
      </button>
    
      {/* Menu Dropdown */}
      {isUserMenuOpen && (
        <div 
          className="absolute top-full right-0 mt-2 w-64 bg-[#252532] border border-[#2C2C45] rounded-xl shadow-xl"
          style={{
            zIndex: 999999,
            boxShadow: '0px 12px 32px 0px rgba(0, 0, 0, 0.4), 0px 4px 16px 0px rgba(0, 0, 0, 0.2)',
            backdropFilter: 'blur(12px)',
            animation: 'fadeInUp 0.2s ease-out',
            minWidth: '256px',
            maxWidth: '320px'
          }}
        >
          {/* Header */}
          <div 
            className="px-4 py-3 rounded-t-xl"
            style={{
              background: 'linear-gradient(135deg, #2D2D45 0%, #363946 100%)',
              borderBottom: '1px solid #2C2C45'
            }}
          >
            <span 
              className="text-[#CECFD2] text-sm font-semibold"
              style={{
                fontFamily: 'Inter',
                fontWeight: 600,
                fontSize: '14px',
                lineHeight: '20px',
                letterSpacing: '0px'
              }}
            >
              Opções
            </span>
          </div>
          
          {/* Menu Items */}
          <div className="py-2">
            {/* Configurações de conta */}
            <button
              onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                e.preventDefault();
                e.stopPropagation();
                
                setIsUserMenuOpen(false);
                
                // Verificar se é admin para direcionar para a tela correta
                const userData = JSON.parse(localStorage.getItem('user_data') || '{}');
                const isAdmin = userData.grupo?.nome === 'administrador' || userData.grupoId === 2;
                
                if (isAdmin) {
                  navigate('/admin/settings');
                } else {
                  navigate('/account-settings');
                }
              }}
              className="w-full text-left px-4 py-3 text-[#F7F7F7] transition-all duration-200 flex items-center gap-3"
              style={{ 
                cursor: 'pointer',
                fontFamily: 'Inter',
                fontWeight: 500,
                fontSize: '14px',
                lineHeight: '20px',
                letterSpacing: '0px'
              }}
              onMouseEnter={(e: React.MouseEvent<HTMLButtonElement>) => {
                e.currentTarget.style.background = '#2D2D45';
              }}
              onMouseLeave={(e: React.MouseEvent<HTMLButtonElement>) => {
                e.currentTarget.style.background = 'transparent';
              }}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.99992 9.99998C9.10449 9.99998 9.99992 9.10455 9.99992 7.99998C9.99992 6.89541 9.10449 5.99998 7.99992 5.99998C6.89535 5.99998 5.99992 6.89541 5.99992 7.99998C5.99992 9.10455 6.89535 9.99998 7.99992 9.99998Z" stroke="#F7F7F7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12.4848 9.81816C12.4041 10.001 12.38 10.2037 12.4157 10.4003C12.4513 10.5969 12.545 10.7784 12.6848 10.9212L12.7211 10.9576C12.8338 11.0701 12.9232 11.2038 12.9842 11.351C13.0452 11.4981 13.0766 11.6558 13.0766 11.8151C13.0766 11.9744 13.0452 12.1322 12.9842 12.2793C12.9232 12.4265 12.8338 12.5601 12.7211 12.6727C12.6086 12.7854 12.4749 12.8748 12.3277 12.9358C12.1806 12.9968 12.0228 13.0282 11.8636 13.0282C11.7043 13.0282 11.5465 12.9968 11.3994 12.9358C11.2522 12.8748 11.1186 12.7854 11.006 12.6727L10.9696 12.6363C10.8268 12.4966 10.6454 12.4029 10.4488 12.3673C10.2522 12.3316 10.0494 12.3557 9.86659 12.4363C9.68733 12.5132 9.53445 12.6407 9.42677 12.8033C9.31909 12.9659 9.2613 13.1565 9.26052 13.3515V13.4545C9.26052 13.776 9.13282 14.0843 8.9055 14.3116C8.67819 14.5389 8.36988 14.6666 8.0484 14.6666C7.72693 14.6666 7.41862 14.5389 7.1913 14.3116C6.96399 14.0843 6.83628 13.776 6.83628 13.4545V13.4C6.83159 13.1994 6.76666 13.0048 6.64993 12.8416C6.53319 12.6784 6.37006 12.5541 6.18174 12.4848C5.99894 12.4042 5.79617 12.3801 5.59956 12.4157C5.40296 12.4514 5.22154 12.5451 5.07871 12.6848L5.04234 12.7212C4.92977 12.8339 4.79609 12.9233 4.64894 12.9843C4.50179 13.0453 4.34406 13.0767 4.18477 13.0767C4.02548 13.0767 3.86775 13.0453 3.7206 12.9843C3.57345 12.9233 3.43976 12.8339 3.32719 12.7212C3.21449 12.6086 3.12509 12.4749 3.06409 12.3278C3.00309 12.1806 2.97169 12.0229 2.97169 11.8636C2.97169 11.7043 3.00309 11.5466 3.06409 11.3994C3.12509 11.2523 3.21449 11.1186 3.32719 11.006L3.36356 10.9697C3.50327 10.8268 3.597 10.6454 3.63265 10.4488C3.6683 10.2522 3.64423 10.0494 3.56355 9.86665C3.48673 9.68739 3.35916 9.53452 3.19656 9.42683C3.03396 9.31915 2.84343 9.26136 2.6484 9.26059H2.54537C2.2239 9.26059 1.91559 9.13288 1.68827 8.90556C1.46096 8.67825 1.33325 8.36994 1.33325 8.04846C1.33325 7.72699 1.46096 7.41868 1.68827 7.19137C1.91559 6.96405 2.2239 6.83634 2.54537 6.83634H2.59992C2.80052 6.83165 2.99507 6.76672 3.15828 6.64999C3.32149 6.53325 3.44581 6.37012 3.51507 6.1818C3.59575 5.999 3.61981 5.79623 3.58416 5.59962C3.54852 5.40302 3.45479 5.2216 3.31507 5.07877L3.27871 5.0424C3.16601 4.92983 3.0766 4.79615 3.0156 4.649C2.9546 4.50185 2.92321 4.34412 2.92321 4.18483C2.92321 4.02554 2.9546 3.86781 3.0156 3.72066C3.0766 3.57351 3.16601 3.43983 3.27871 3.32725C3.39128 3.21455 3.52496 3.12515 3.67211 3.06415C3.81926 3.00315 3.97699 2.97175 4.13628 2.97175C4.29557 2.97175 4.4533 3.00315 4.60045 3.06415C4.7476 3.12515 4.88128 3.21455 4.99386 3.32725L5.03022 3.36362C5.17306 3.50334 5.35447 3.59706 5.55108 3.63271C5.74768 3.66836 5.95045 3.64429 6.13325 3.56362H6.18174C6.36099 3.48679 6.51387 3.35923 6.62155 3.19663C6.72923 3.03403 6.78702 2.84349 6.7878 2.64846V2.54543C6.7878 2.22396 6.9155 1.91565 7.14282 1.68834C7.37014 1.46102 7.67844 1.33331 7.99992 1.33331C8.32139 1.33331 8.6297 1.46102 8.85702 1.68834C9.08433 1.91565 9.21204 2.22396 9.21204 2.54543V2.59998C9.21282 2.795 9.27061 2.98554 9.37829 3.14814C9.48597 3.31074 9.63885 3.43831 9.8181 3.51513C10.0009 3.59581 10.2037 3.61987 10.4003 3.58422C10.5969 3.54858 10.7783 3.45485 10.9211 3.31513L10.9575 3.27877C11.0701 3.16607 11.2038 3.07666 11.3509 3.01566C11.4981 2.95467 11.6558 2.92327 11.8151 2.92327C11.9744 2.92327 12.1321 2.95467 12.2792 3.01566C12.4264 3.07666 12.5601 3.16607 12.6726 3.27877C12.7853 3.39134 12.8748 3.52502 12.9357 3.67217C12.9967 3.81932 13.0281 3.97705 13.0281 4.13634C13.0281 4.29563 12.9967 4.45336 12.9357 4.60051C12.8748 4.74766 12.7853 4.88135 12.6726 4.99392L12.6363 5.03028C12.4966 5.17312 12.4028 5.35453 12.3672 5.55114C12.3315 5.74774 12.3556 5.95052 12.4363 6.13331V6.1818C12.5131 6.36105 12.6407 6.51393 12.8033 6.62161C12.9659 6.72929 13.1564 6.78708 13.3514 6.78786H13.4545C13.7759 6.78786 14.0842 6.91556 14.3116 7.14288C14.5389 7.3702 14.6666 7.67851 14.6666 7.99998C14.6666 8.32145 14.5389 8.62976 14.3116 8.85708C14.0842 9.0844 13.7759 9.2121 13.4545 9.2121H13.3999C13.2049 9.21288 13.0144 9.27067 12.8518 9.37835C12.6892 9.48603 12.5616 9.63891 12.4848 9.81816Z" stroke="#F7F7F7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Configurações de conta
            </button>

            {/* Ajuda e Suporte */}
            <button
              onClick={() => {
                setIsUserMenuOpen(false);
                navigate('/help');
              }}
              className="w-full text-left px-4 py-3 text-[#F7F7F7] transition-all duration-200 flex items-center gap-3"
              style={{ 
                cursor: 'pointer',
                fontFamily: 'Inter',
                fontWeight: 500,
                fontSize: '14px',
                lineHeight: '20px',
                letterSpacing: '0px'
              }}
              onMouseEnter={(e: React.MouseEvent<HTMLButtonElement>) => {
                e.currentTarget.style.background = '#2D2D45';
              }}
              onMouseLeave={(e: React.MouseEvent<HTMLButtonElement>) => {
                e.currentTarget.style.background = 'transparent';
              }}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 14.6667C11.6819 14.6667 14.6667 11.6819 14.6667 8C14.6667 4.31814 11.6819 1.33334 8 1.33334C4.31814 1.33334 1.33334 4.31814 1.33334 8C1.33334 11.6819 4.31814 14.6667 8 14.6667Z" stroke="#F7F7F7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M6.06006 6.00001C6.21679 5.55446 6.52616 5.17875 6.93336 4.93943C7.34056 4.70011 7.81932 4.61264 8.28484 4.69248C8.75036 4.77233 9.1726 5.01436 9.47678 5.37569C9.78095 5.73702 9.95341 6.19436 9.96671 6.66668C9.96671 8.00001 7.96671 8.66668 7.96671 8.66668" stroke="#F7F7F7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M8 11.3333H8.00667" stroke="#F7F7F7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Ajuda e Suporte
            </button>
            
            {/* Sair da conta */}
            <button
              onClick={handleLogoutClick}
              className="w-full text-left px-4 py-3 transition-all duration-200 flex items-center gap-3"
              style={{ 
                cursor: 'pointer',
                fontFamily: 'Inter',
                fontWeight: 500,
                fontSize: '14px',
                lineHeight: '20px',
                letterSpacing: '0px',
                color: '#F97066'
              }}
              onMouseEnter={(e: React.MouseEvent<HTMLButtonElement>) => {
                e.currentTarget.style.background = '#2D2D45';
              }}
              onMouseLeave={(e: React.MouseEvent<HTMLButtonElement>) => {
                e.currentTarget.style.background = 'transparent';
              }}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 14H3.33333C2.97971 14 2.64057 13.8595 2.39052 13.6095C2.14048 13.3594 2 13.0203 2 12.6667V3.33333C2 2.97971 2.14048 2.64057 2.39052 2.39052C2.64057 2.14048 2.97971 2 3.33333 2H6" stroke="#F97066" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M10 11.3333L14 8L10 4.66667" stroke="#F97066" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M14 8H6" stroke="#F97066" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Sair da conta
            </button>
          </div>
        </div>
      )}

      {/* Logout Modal */}
      <LogoutModal
        isOpen={showLogoutModal}
        onClose={handleLogoutClose}
        onConfirm={handleLogoutConfirm}
      />
    </div>
  );
};
