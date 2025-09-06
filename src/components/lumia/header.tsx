import { useState, useEffect } from "react";
import { 
  Clock,
  Menu01,
  Settings01,
  HelpCircle
} from "@untitledui/icons";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [time, setTime] = useState("00:00:00");
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isRunning) {
      interval = setInterval(() => {
        setTime(prev => {
          const [hours, minutes, seconds] = prev.split(':').map(Number);
          let totalSeconds = hours * 3600 + minutes * 60 + seconds + 1;
          
          const newHours = Math.floor(totalSeconds / 3600);
          const newMinutes = Math.floor((totalSeconds % 3600) / 60);
          const newSeconds = totalSeconds % 60;
          
          return `${newHours.toString().padStart(2, '0')}:${newMinutes.toString().padStart(2, '0')}:${newSeconds.toString().padStart(2, '0')}`;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

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

  const toggleTimer = () => {
    setIsRunning(!isRunning);
  };

  const resetTimer = () => {
    setTime("00:00:00");
    setIsRunning(false);
  };

  return (
    <header 
      className="w-full px-4 sm:px-8 lg:px-8"
      style={{
        background: 'transparent',
        paddingTop: '24px',
        paddingBottom: '24px',
        borderBottom: '1px solid #272737'
      }}
    >
      <div className="flex items-center justify-between w-full flex-wrap gap-4">
        {/* Mensagem de boas-vindas */}
        <div className="flex-shrink-0">
          <h1 
            className="text-white"
            style={{ 
              fontFamily: 'Sora', 
              fontWeight: 400, 
              fontStyle: 'Regular',
              fontSize: '14px',
              lineHeight: '1.25em',
              letterSpacing: '0%',
              verticalAlign: 'middle',
              textAlign: 'left'
            }}
          >
            <span className="hidden sm:inline">Bem-vindo de volta!</span>
            <span className="sm:hidden">Olá!</span><br />
            <span style={{ color: '#FFFFFF' }}>Max William</span>
          </h1>
        </div>

        {/* Cronômetro e Menu do usuário */}
        <div className="flex items-center justify-center flex-wrap" style={{ gap: '16px' }}>
          {/* Cronômetro */}
          <div className="flex items-center justify-center flex-wrap" style={{ gap: '16px' }}>
            {/* Container do cronômetro */}
            <div 
              className="flex items-center relative" 
              style={{ 
                background: '#2D2D45',
                borderRadius: '64px',
                padding: '8px 12px',
                gap: '8px',
                boxShadow: '0px 1px 2px 0px rgba(255, 255, 255, 0), inset 0px -2px 0px 0px rgba(12, 14, 18, 0.05), inset 0px 0px 0px 1px rgba(12, 14, 18, 0.18)'
              }}
            >
              {/* Ícone do relógio */}
              <div className="w-6 h-6 flex items-center justify-center">
                <Clock className="w-5 h-5 text-white" strokeWidth={2} />
              </div>
              <span 
                className="text-white"
                style={{ 
                  fontFamily: 'Sora', 
                  fontWeight: 600, 
                  fontSize: '14px',
                  lineHeight: '1.4285714285714286em',
                  textAlign: 'left'
                }}
              >
                {time}
              </span>
            </div>
          
            {/* Botões de controle */}
            <div className="flex items-center flex-wrap" style={{ gap: '12px' }}>
              <button
                onClick={toggleTimer}
                className="p-0 rounded-full relative overflow-hidden"
                style={{
                  width: '40px',
                  height: '40px',
                  background: 'linear-gradient(180deg, rgba(65, 60, 122, 1) 40%, rgba(45, 45, 69, 1) 100%)',
                  boxShadow: '0px 1px 2px 0px rgba(0, 0, 0, 0.2)'
                }}
              >
                {/* Camada interna */}
                <div 
                  className="absolute inset-0 rounded-full"
                  style={{
                    background: 'linear-gradient(180deg, rgba(45, 45, 69, 1) 0%, rgba(45, 45, 69, 1) 100%)',
                    boxShadow: 'inset 0px 1px 1px 0px rgba(0, 0, 0, 0.1)',
                    margin: '3.33px'
                  }}
                ></div>
                {/* Camada mais interna */}
                <div 
                  className="absolute inset-0 rounded-full"
                  style={{
                    background: 'linear-gradient(180deg, rgba(45, 45, 69, 1) 0%, rgba(45, 45, 69, 1) 100%)',
                    boxShadow: '0px 1px 1px 0px rgba(0, 0, 0, 0.2)',
                    margin: '4.44px'
                  }}
                ></div>
                {/* Ícone */}
                <div className="relative z-10 flex items-center justify-center h-full">
                  {isRunning ? (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="w-4 h-4 text-white">
                      <rect x="8" y="6" width="3" height="12" rx="1" fill="currentColor"/>
                      <rect x="13" y="6" width="3" height="12" rx="1" fill="currentColor"/>
                    </svg>
                  ) : (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="w-4 h-4 text-white">
                      <path
                        d="M5 4.98951C5 4.01835 5 3.53277 5.20249 3.2651C5.37889 3.03191 5.64852 2.88761 5.9404 2.87018C6.27544 2.85017 6.67946 3.11953 7.48752 3.65823L18.0031 10.6686C18.6708 11.1137 19.0046 11.3363 19.1209 11.6168C19.2227 11.8621 19.2227 12.1377 19.1209 12.383C19.0046 12.6635 18.6708 12.886 18.0031 13.3312L7.48752 20.3415C6.67946 20.8802 6.27544 21.1496 5.9404 21.1296C5.64852 21.1122 5.37889 20.9679 5.20249 20.7347C5 20.467 5 19.9814 5 19.0103V4.98951Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </div>
              </button>
              
              <button
                onClick={resetTimer}
                className={`p-0 rounded-full relative overflow-hidden ${!isRunning && time === "00:00:00" ? "opacity-50" : "opacity-100"}`}
                style={{
                  width: '40px',
                  height: '40px',
                  background: 'linear-gradient(180deg, rgba(65, 60, 122, 1) 40%, rgba(45, 45, 69, 1) 100%)',
                  boxShadow: '0px 0.3125px 0.625px 0px rgba(0, 0, 0, 0.2)'
                }}
              >
                {/* Camada interna */}
                <div 
                  className="absolute inset-0 rounded-full"
                  style={{
                    background: 'linear-gradient(180deg, rgba(45, 45, 69, 1) 0%, rgba(45, 45, 69, 1) 100%)',
                    boxShadow: 'inset 0px 0.3125px 0.3125px 0px rgba(0, 0, 0, 0.1)',
                    margin: '3.33px'
                  }}
                ></div>
                {/* Camada mais interna */}
                <div 
                  className="absolute inset-0 rounded-full"
                  style={{
                    background: 'linear-gradient(180deg, rgba(45, 45, 69, 1) 0%, rgba(45, 45, 69, 1) 100%)',
                    boxShadow: '0px 0.3125px 0.3125px 0px rgba(0, 0, 0, 0.2)',
                    margin: '4.44px'
                  }}
                ></div>
                {/* Ícone */}
                <div className="relative z-10 flex items-center justify-center h-full">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="w-4 h-4 text-white">
                    <path
                      d="M3 7.8C3 6.11984 3 5.27976 3.32698 4.63803C3.6146 4.07354 4.07354 3.6146 4.63803 3.32698C5.27976 3 6.11984 3 7.8 3H16.2C17.8802 3 18.7202 3 19.362 3.32698C19.9265 3.6146 20.3854 4.07354 20.673 4.63803C21 5.27976 21 6.11984 21 7.8V16.2C21 17.8802 21 18.7202 20.673 19.362C20.3854 19.9265 19.9265 20.3854 19.362 20.673C18.7202 21 17.8802 21 16.2 21H7.8C6.11984 21 5.27976 21 4.63803 20.673C4.07354 20.3854 3.6146 19.9265 3.32698 19.362C3 18.7202 3 17.8802 3 16.2V7.8Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </button>
            </div>
          </div>

          {/* Container do Menu e Avatar */}
          <div 
            className="flex items-center relative"
            style={{
              background: '#46372D',
              borderRadius: '24px',
              padding: '0px 0px 0px 8px'
            }}
          >
            {/* Conteúdo do menu */}
            <div className="flex items-center" style={{ gap: '4px' }}>
              {/* Botão de menu */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="flex items-center justify-center"
                style={{
                  padding: '8px',
                  borderRadius: '8px'
                }}
              >
                <Menu01 className="w-5 h-5" style={{ color: '#F48E2F', strokeWidth: '1.67' }} />
              </button>

              {/* Avatar com Menu Dropdown */}
              <div className="relative user-menu-container">
                <button
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                  className="w-10 h-10 rounded-full flex items-center justify-center relative overflow-hidden"
                  style={{
                    background: '#D6B3B3',
                    border: '1.5px solid #F48E2F',
                    borderRadius: '9999px'
                  }}
                >
                  <img 
                    src="https://www.untitledui.com/images/avatars/jay-shepard" 
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
                      <button className="w-full px-4 py-2 text-left hover:bg-gray-700/50 transition-colors">
                        <div className="flex items-center gap-3">
                          <div className="w-4 h-4 text-[#94979C]">
                            <Settings01 className="w-4 h-4" />
                          </div>
                          <span className="text-[#CECFD2] text-sm">Configurações de conta</span>
                        </div>
                      </button>
                      
                      <button className="w-full px-4 py-2 text-left hover:bg-gray-700/50 transition-colors">
                        <div className="flex items-center gap-3">
                          <div className="w-4 h-4 text-[#94979C]">
                            <HelpCircle className="w-4 h-4" />
                          </div>
                          <span className="text-[#CECFD2] text-sm">Ajuda e Suporte</span>
                        </div>
                      </button>
                      
                      <div className="border-t border-[#22262F] my-1"></div>
                      
                      <button className="w-full px-4 py-2 text-left hover:bg-red-500/10 transition-colors">
                        <span className="text-red-400 text-sm">Sair</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};