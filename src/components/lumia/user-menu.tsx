import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";

export const UserMenu: React.FC = () => {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const navigate = useNavigate();

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

  return (
    <div 
      className="flex items-center relative user-menu-container"
      style={{
        background: '#46372D',
        borderRadius: '24px',
        padding: '0px 0px 0px 8px',
        gap: '4px'
      }}
    >
      {/* Botão hamburger */}
      <button
        onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
        className="flex items-center justify-center hover:bg-[#333346] transition-all duration-200"
        style={{
          padding: '8px',
          borderRadius: '8px',
          cursor: 'pointer'
        }}
      >
        <svg width="15" height="10" viewBox="0 0 15 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2.5 5H12.5M2.5 1H12.5M2.5 9H12.5" stroke="#F48E2F" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      {/* Avatar */}
      <button
        onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
        className="w-10 h-10 rounded-full flex items-center justify-center relative overflow-hidden hover:shadow-lg transition-all duration-200"
        style={{
          background: '#D6B3B3',
          border: '1.5px solid #F48E2F',
          borderRadius: '9999px',
          cursor: 'pointer'
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
        <div className="absolute right-0 top-12 w-62 bg-[#252532] border border-[#22262F] rounded-lg shadow-lg z-50">
          {/* Header */}
          <div className="bg-[#2D2D45] px-4 py-3 rounded-t-lg">
            <span className="text-[#CECFD2] text-sm font-semibold">Opções</span>
          </div>
          
          {/* Menu Items */}
          <div className="py-1">
            <button
              onClick={() => {
                setIsUserMenuOpen(false);
                navigate('/account-settings');
              }}
              className="w-full text-left px-4 py-2 text-[#F7F7F7] hover:bg-[#333346] transition-colors duration-200"
              style={{ cursor: 'pointer' }}
            >
              Configurações
            </button>
            <button
              onClick={() => {
                setIsUserMenuOpen(false);
                // Aqui você pode adicionar a lógica de logout
                console.log('Logout');
              }}
              className="w-full text-left px-4 py-2 text-[#F7F7F7] hover:bg-[#333346] transition-colors duration-200"
              style={{ cursor: 'pointer' }}
            >
              Sair
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
