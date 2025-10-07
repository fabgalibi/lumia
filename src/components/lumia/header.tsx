import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { Timer } from "./timer";
import { UserMenu } from "./user-menu";
import { useSidebar } from "../../contexts/sidebar-context";
import { useMainContent } from "../../contexts/main-content-context";
import { useAuth } from "../../contexts/auth-context";

interface HeaderProps {
  title?: string;
  subtitle?: string;
}

export const Header = ({ title, subtitle: _subtitle }: HeaderProps = {}) => {
  const [initialTime] = useState("00:00:00");
  const [isMobile, setIsMobile] = useState(false);
  const { toggleSidebar } = useSidebar();
  const { setCurrentContent: _setCurrentContent } = useMainContent();
  const { user } = useAuth();
  const navigate = useNavigate();

  // Detectar se é mobile/tablet
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 1100);
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);


  return (
    <header 
        className="w-full"
        style={{
          background: 'transparent',
          padding: '20px 32px 24px 32px',
          borderBottom: '1px solid #272737',
          borderLeft: '1px solid #272737'
        }}
      >
      <div className="flex items-center justify-between w-full" style={{ gap: '25px' }}>
        {/* Lado esquerdo - Ícone de menu + Mensagem de boas-vindas */}
        <div className="flex items-center" style={{ gap: '12px' }}>
          {/* Ícone de menu (mobile) */}
          {isMobile && (
            <button 
              onClick={toggleSidebar}
              className="flex items-center justify-center cursor-pointer"
              style={{
                background: '#24212D',
                border: '1px solid #272737',
                borderRadius: '40px',
                padding: '10px',
                gap: '10px'
              }}
            >
              <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 6H15M3 1H15M3 11H15" stroke="#F66649" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          )}
          
          {/* Título da página ou mensagem de boas-vindas */}
          <h1 
            className="text-white"
            style={{ 
              fontFamily: 'Inter' /* MIGRATED */ /* TODO: Migrar para Design System */, 
              fontWeight: title ? 600 : 400, 
              fontSize: title ? '18px' : '14px',
              lineHeight: title ? '1.56em' : '1.4285714285714286em',
              textAlign: 'left',
              margin: 0
            }}
          >
            {title ? title : (
              <>
                Bem-vindo de volta!<br />
                {user?.name || 'Usuário'}
              </>
            )}
          </h1>
        </div>

        {/* Lado direito - Cronômetro (desktop) / Menu + Avatar (mobile) */}
        <div className="flex items-center" style={{ gap: '16px' }}>
          {/* Cronômetro - apenas no desktop */}
          <div className="hidden lg:block">
            <Timer 
              initialTime={initialTime}
              onTimeChange={() => {}}
              showControls={true}
            />
          </div>

          {/* User Menu Component */}
          <UserMenu />
        </div>
      </div>
    </header>
  );
};