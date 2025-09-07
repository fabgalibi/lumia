import { useState, useEffect } from "react";

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
      className="w-full"
      style={{
        background: 'transparent',
        padding: '24px 32px 24px 32px',
        borderBottom: '1px solid #272737',
        borderLeft: '1px solid #272737'
      }}
    >
      <div className="flex items-center justify-between w-full">
        {/* Mensagem de boas-vindas */}
        <div className="flex-shrink-0 flex items-center">
          <h1 
            className="text-white"
            style={{ 
              fontFamily: 'var(--font-sora)', 
              fontWeight: 400, 
              fontSize: '14px',
              lineHeight: '1.4285714285714286em',
              textAlign: 'left',
              margin: 0
            }}
          >
            Bem-vindo de volta!<br />
            Max William
          </h1>
        </div>

        {/* Cronômetro e Menu do usuário */}
        <div className="flex items-center" style={{ gap: '24px' }}>
          {/* Cronômetro */}
          <div className="flex items-center" style={{ gap: '16px' }}>
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
                <svg width="20" height="20" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11 5V11L15 13M21 11C21 16.5228 16.5228 21 11 21C5.47715 21 1 16.5228 1 11C1 5.47715 5.47715 1 11 1C16.5228 1 21 5.47715 21 11Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span 
                className="text-white"
                style={{ 
                  fontFamily: 'var(--font-sora)', 
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
                    <div className="flex items-center justify-center" style={{ gap: '4px' }}>
                      {/* Primeira barra do pause */}
                      <svg width="5" height="14" viewBox="0 0 5 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_i_pause1)">
                          <path d="M0 1.16666C0 0.522333 0.522333 0 1.16666 0H3.49999C4.14432 0 4.66665 0.522333 4.66665 1.16666V12.8333C4.66665 13.4776 4.14432 14 3.49999 14H1.16666C0.522333 14 0 13.4776 0 12.8333V1.16666Z" fill="url(#paint0_linear_pause1)"/>
                          <path d="M0 1.16666C0 0.522333 0.522333 0 1.16666 0H3.49999C4.14432 0 4.66665 0.522333 4.66665 1.16666V12.8333C4.66665 13.4776 4.14432 14 3.49999 14H1.16666C0.522333 14 0 13.4776 0 12.8333V1.16666Z" fill="url(#paint1_linear_pause1)"/>
                        </g>
                        <defs>
                          <filter id="filter0_i_pause1" x="0" y="0" width="4.66667" height="14.3281" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                            <feOffset dy="0.3125"/>
                            <feGaussianBlur stdDeviation="0.15625"/>
                            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"/>
                            <feBlend mode="normal" in2="shape" result="effect1_innerShadow_pause1"/>
                          </filter>
                          <linearGradient id="paint0_linear_pause1" x1="2.33333" y1="0" x2="2.33333" y2="14" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#161616"/>
                            <stop offset="1" stopColor="#707070"/>
                          </linearGradient>
                          <linearGradient id="paint1_linear_pause1" x1="2.5419" y1="-0.826855" x2="2.5419" y2="14.8269" gradientUnits="userSpaceOnUse">
                            <stop stopColor="white"/>
                            <stop offset="1" stopColor="#CECECE"/>
                          </linearGradient>
                        </defs>
                      </svg>
                      {/* Segunda barra do pause */}
                      <svg width="5" height="14" viewBox="0 0 5 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_i_pause2)">
                          <path d="M0 1.16666C0 0.522333 0.522333 0 1.16666 0H3.49999C4.14432 0 4.66665 0.522333 4.66665 1.16666V12.8333C4.66665 13.4776 4.14432 14 3.49999 14H1.16666C0.522333 14 0 13.4776 0 12.8333V1.16666Z" fill="url(#paint0_linear_pause2)"/>
                          <path d="M0 1.16666C0 0.522333 0.522333 0 1.16666 0H3.49999C4.14432 0 4.66665 0.522333 4.66665 1.16666V12.8333C4.66665 13.4776 4.14432 14 3.49999 14H1.16666C0.522333 14 0 13.4776 0 12.8333V1.16666Z" fill="url(#paint1_linear_pause2)"/>
                        </g>
                        <defs>
                          <filter id="filter0_i_pause2" x="0" y="0" width="4.66667" height="14.3281" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                            <feOffset dy="0.3125"/>
                            <feGaussianBlur stdDeviation="0.15625"/>
                            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"/>
                            <feBlend mode="normal" in2="shape" result="effect1_innerShadow_pause2"/>
                          </filter>
                          <linearGradient id="paint0_linear_pause2" x1="2.33333" y1="0" x2="2.33333" y2="14" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#161616"/>
                            <stop offset="1" stopColor="#707070"/>
                          </linearGradient>
                          <linearGradient id="paint1_linear_pause2" x1="2.5419" y1="-0.826855" x2="2.5419" y2="14.8269" gradientUnits="userSpaceOnUse">
                            <stop stopColor="white"/>
                            <stop offset="1" stopColor="#CECECE"/>
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                  ) : (
                    <svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g filter="url(#filter0_i_0_38)">
                        <path d="M1.68152 0.153997L11.7619 6.03421C12.5015 6.46567 12.5015 7.53438 11.7619 7.96584L1.68152 13.846C0.936115 14.2809 0 13.7432 0 12.8802V1.11982C0 0.256852 0.936114 -0.280825 1.68152 0.153997Z" fill="url(#paint0_linear_0_38)"/>
                      </g>
                      <defs>
                        <filter id="filter0_i_0_38" x="0" y="0" width="12.3166" height="15.0063" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                          <feOffset dy="1"/>
                          <feGaussianBlur stdDeviation="0.5"/>
                          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"/>
                          <feBlend mode="normal" in2="shape" result="effect1_innerShadow_0_38"/>
                        </filter>
                        <linearGradient id="paint0_linear_0_38" x1="6.70878" y1="-0.82686" x2="6.70878" y2="14.827" gradientUnits="userSpaceOnUse">
                          <stop stopColor="white"/>
                          <stop offset="1" stopColor="#CECECE"/>
                        </linearGradient>
                      </defs>
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
                  <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 10.8333V2.16667C0 1.57083 0.212333 1.06094 0.637 0.637C1.06167 0.213055 1.57156 0.000722222 2.16667 0H10.8333C11.4292 0 11.9394 0.212333 12.3641 0.637C12.7887 1.06167 13.0007 1.57156 13 2.16667V10.8333C13 11.4292 12.788 11.9394 12.3641 12.3641C11.9401 12.7887 11.4299 13.0007 10.8333 13H2.16667C1.57083 13 1.06094 12.788 0.637 12.3641C0.213055 11.9401 0.000722222 11.4299 0 10.8333Z" fill="black"/>
                    <path d="M0 10.8333V2.16667C0 1.57083 0.212333 1.06094 0.637 0.637C1.06167 0.213055 1.57156 0.000722222 2.16667 0H10.8333C11.4292 0 11.9394 0.212333 12.3641 0.637C12.7887 1.06167 13.0007 1.57156 13 2.16667V10.8333C13 11.4292 12.788 11.9394 12.3641 12.3641C11.9401 12.7887 11.4299 13.0007 10.8333 13H2.16667C1.57083 13 1.06094 12.788 0.637 12.3641C0.213055 11.9401 0.000722222 11.4299 0 10.8333Z" fill="url(#paint0_linear_0_55)"/>
                    <defs>
                      <linearGradient id="paint0_linear_0_55" x1="7.08102" y1="-0.767796" x2="7.08102" y2="13.7679" gradientUnits="userSpaceOnUse">
                        <stop stopColor="white"/>
                        <stop offset="1" stopColor="#CECECE"/>
                      </linearGradient>
                    </defs>
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
                <svg width="17" height="12" viewBox="0 0 17 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.850037 5.95001H16.15M0.850037 0.850037H16.15M0.850037 11.05H16.15" stroke="#F48E2F" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
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