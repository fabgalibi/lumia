import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

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
    <header className="bg-gray-800 border-b border-gray-700 px-8 py-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-white text-lg font-medium">
            Bem-vindo de volta!<br />
            <span className="text-orange-500">Max William</span>
          </h1>
        </div>

        <div className="flex items-center gap-6">
          {/* Cronômetro */}
          <div className="flex items-center" style={{ gap: '16px' }}>
            {/* Container do cronômetro */}
            <div 
              className="flex items-center bg-[#2D2D45] relative rounded-full" 
              style={{ 
                borderRadius: '64px',
                padding: '8px 12px',
                gap: '8px',
                boxShadow: '0px 1px 2px 0px rgba(255, 255, 255, 0), inset 0px -2px 0px 0px rgba(12, 14, 18, 0.05), inset 0px 0px 0px 1px rgba(12, 14, 18, 0.18)'
              }}
            >
              {/* Borda gradiente */}
              <div 
                className="absolute inset-0 rounded-full pointer-events-none"
                style={{
                  background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0) 100%)',
                  padding: '1px',
                  borderRadius: '64px'
                }}
              >
                <div 
                  className="w-full h-full rounded-full"
                  style={{
                    background: '#2D2D45',
                    borderRadius: '64px'
                  }}
                ></div>
              </div>
              {/* Conteúdo do cronômetro */}
              <div className="relative z-10 flex items-center gap-2">
                {/* Ícone do relógio */}
                <div className="w-6 h-6 flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-white">
                    <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="2"/>
                    <path d="M10 6v4l3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <span className="text-white font-semibold text-sm">{time}</span>
              </div>
            </div>
            
            {/* Botões de controle */}
            <div className="flex items-center" style={{ gap: '12px' }}>
              <button
                onClick={toggleTimer}
                className="w-10 h-10 p-0 rounded-full relative overflow-hidden"
                style={{
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
                    <div className="flex items-center gap-0.5">
                      <div className="w-1 h-3 bg-gradient-to-b from-white to-gray-300 rounded-sm"></div>
                      <div className="w-1 h-3 bg-gradient-to-b from-white to-gray-300 rounded-sm"></div>
                    </div>
                  ) : (
                    <div className="w-0 h-0 border-l-[8px] border-l-white border-y-[6px] border-y-transparent ml-1"></div>
                  )}
                </div>
              </button>
              <button
                onClick={resetTimer}
                className={`w-10 h-10 p-0 rounded-full relative overflow-hidden ${!isRunning && time === "00:00:00" ? "opacity-50" : "opacity-100"}`}
                style={{
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
                  <div className="w-3 h-3 bg-gradient-to-b from-white to-gray-300 rounded-sm"></div>
                </div>
              </button>
            </div>
          </div>

          {/* Container do Menu e Avatar */}
          <div 
            className="flex items-center gap-1 bg-[#46372D] pl-2 pr-0 relative"
            style={{
              borderRadius: '24px'
            }}
          >
            {/* Borda gradiente */}
            <div 
              className="absolute inset-0 pointer-events-none"
              style={{
                background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0) 100%)',
                padding: '1px',
                borderRadius: '24px'
              }}
            >
              <div 
                className="w-full h-full"
                style={{
                  background: '#46372D',
                  borderRadius: '24px'
                }}
              ></div>
            </div>
            {/* Conteúdo do menu */}
            <div className="relative z-10 flex items-center gap-1">
              {/* Botão de menu */}
              <Button
                color="tertiary"
                size="sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="w-8 h-8 p-2 text-orange-500 hover:bg-orange-500/10 rounded-lg bg-transparent border-0"
              >
                <span className="text-lg font-bold">☰</span>
              </Button>

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
                <span className="text-white text-lg">👤</span>
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
                        <svg viewBox="0 0 16 16" fill="currentColor">
                          <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zM4.5 7.5a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1h-7zM8 9a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
                        </svg>
                      </div>
                      <span className="text-[#CECFD2] text-sm">Configurações de conta</span>
                    </div>
                  </button>
                  
                  <button className="w-full px-4 py-2 text-left hover:bg-gray-700/50 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 text-[#94979C]">
                        <svg viewBox="0 0 16 16" fill="currentColor">
                          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                          <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z"/>
                        </svg>
                      </div>
                      <span className="text-[#CECFD2] text-sm">Ajuda e Suporte</span>
                    </div>
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
