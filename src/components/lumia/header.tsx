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
                boxShadow: '0px 1px 2px 0px rgba(10, 13, 18, 0.05), inset 0px -2px 0px 0px rgba(10, 13, 18, 0.05), inset 0px 0px 0px 1px rgba(10, 13, 18, 0.18)'
              }}
            >
              {/* Ícone do relógio */}
              <div className="w-6 h-6 flex items-center justify-center">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                className="p-0 rounded-full relative overflow-hidden hover:shadow-lg transition-all duration-200 cursor-pointer"
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
                          <path d="M0 1.16667C0 0.522335 0.522335 0 1.16667 0H3.50001C4.14434 0 4.66667 0.522335 4.66667 1.16667V12.8334C4.66667 13.4777 4.14434 14 3.50001 14H1.16667C0.522335 14 0 13.4777 0 12.8334V1.16667Z" fill="url(#paint0_linear_pause1)"/>
                          <path d="M0 1.16667C0 0.522335 0.522335 0 1.16667 0H3.50001C4.14434 0 4.66667 0.522335 4.66667 1.16667V12.8334C4.66667 13.4777 4.14434 14 3.50001 14H1.16667C0.522335 14 0 13.4777 0 12.8334V1.16667Z" fill="url(#paint1_linear_pause1)"/>
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
                          <linearGradient id="paint0_linear_pause1" x1="2.33334" y1="0" x2="2.33334" y2="14" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#161616"/>
                            <stop offset="1" stopColor="#707070"/>
                          </linearGradient>
                          <linearGradient id="paint1_linear_pause1" x1="2.54191" y1="-0.826858" x2="2.54191" y2="14.8269" gradientUnits="userSpaceOnUse">
                            <stop stopColor="white"/>
                            <stop offset="1" stopColor="#CECECE"/>
                          </linearGradient>
                        </defs>
                      </svg>
                      {/* Segunda barra do pause */}
                      <svg width="5" height="14" viewBox="0 0 5 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_i_pause2)">
                          <path d="M0 1.16667C0 0.522335 0.522335 0 1.16667 0H3.50001C4.14434 0 4.66667 0.522335 4.66667 1.16667V12.8334C4.66667 13.4777 4.14434 14 3.50001 14H1.16667C0.522335 14 0 13.4777 0 12.8334V1.16667Z" fill="url(#paint0_linear_pause2)"/>
                          <path d="M0 1.16667C0 0.522335 0.522335 0 1.16667 0H3.50001C4.14434 0 4.66667 0.522335 4.66667 1.16667V12.8334C4.66667 13.4777 4.14434 14 3.50001 14H1.16667C0.522335 14 0 13.4777 0 12.8334V1.16667Z" fill="url(#paint1_linear_pause2)"/>
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
                          <linearGradient id="paint0_linear_pause2" x1="2.33334" y1="0" x2="2.33334" y2="14" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#161616"/>
                            <stop offset="1" stopColor="#707070"/>
                          </linearGradient>
                          <linearGradient id="paint1_linear_pause2" x1="2.54191" y1="-0.826858" x2="2.54191" y2="14.8269" gradientUnits="userSpaceOnUse">
                            <stop stopColor="white"/>
                            <stop offset="1" stopColor="#CECECE"/>
                          </linearGradient>
                        </defs>
                    </svg>
                    </div>
                  ) : (
                    <svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g filter="url(#filter0_i_0_38)">
                        <path d="M1.68152 0.153996L11.7618 6.03418C12.5015 6.46564 12.5015 7.53434 11.7618 7.9658L1.68152 13.846C0.936111 14.2808 0 13.7431 0 12.8802V1.11981C0 0.256851 0.93611 -0.280824 1.68152 0.153996Z" fill="url(#paint0_linear_0_38)"/>
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
                        <linearGradient id="paint0_linear_0_38" x1="6.70875" y1="-0.826856" x2="6.70875" y2="14.8269" gradientUnits="userSpaceOnUse">
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
                className={`p-0 rounded-full relative overflow-hidden hover:shadow-lg transition-all duration-200 cursor-pointer ${!isRunning && time === "00:00:00" ? "opacity-50" : "opacity-100"}`}
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
                className="flex items-center justify-center hover:bg-[#333346] transition-all duration-200 cursor-pointer"
                style={{
                  padding: '8px',
                  borderRadius: '8px'
                }}
              >
                <svg width="17" height="12" viewBox="0 0 17 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.850037 5.94998H16.15M0.850037 0.850006H16.15M0.850037 11.05H16.15" stroke="#F48E2F" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>

              {/* Avatar com Menu Dropdown */}
              <div className="relative user-menu-container">
                <button
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                  className="w-10 h-10 rounded-full flex items-center justify-center relative overflow-hidden hover:shadow-lg transition-all duration-200 cursor-pointer"
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
                      <button className="w-full px-4 py-2 text-left hover:bg-gray-700/50 transition-colors cursor-pointer">
                        <div className="flex items-center gap-3">
                          <div className="w-4 h-4 text-[#94979C]">
                            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M7.49998 9.52245C8.61696 9.52245 9.52245 8.61696 9.52245 7.49998C9.52245 6.383 8.61696 5.47751 7.49998 5.47751C6.383 5.47751 5.47751 6.383 5.47751 7.49998C5.47751 8.61696 6.383 9.52245 7.49998 9.52245Z" stroke="#94979C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M12.0352 9.33859C11.9536 9.52344 11.9293 9.72849 11.9653 9.9273C12.0014 10.1261 12.0962 10.3096 12.2375 10.454L12.2742 10.4908C12.3882 10.6046 12.4786 10.7398 12.5403 10.8886C12.602 11.0374 12.6337 11.1969 12.6337 11.358C12.6337 11.5191 12.602 11.6786 12.5403 11.8274C12.4786 11.9762 12.3882 12.1114 12.2742 12.2252C12.1604 12.3392 12.0252 12.4296 11.8764 12.4913C11.7276 12.5529 11.5681 12.5847 11.407 12.5847C11.2459 12.5847 11.0864 12.5529 10.9376 12.4913C10.7888 12.4296 10.6536 12.3392 10.5398 12.2252L10.503 12.1884C10.3586 12.0471 10.1751 11.9524 9.97633 11.9163C9.77752 11.8803 9.57247 11.9046 9.38762 11.9862C9.20635 12.0639 9.05175 12.1929 8.94286 12.3573C8.83397 12.5217 8.77553 12.7144 8.77475 12.9116V13.0158C8.77475 13.3409 8.64561 13.6527 8.41574 13.8825C8.18587 14.1124 7.87409 14.2415 7.54901 14.2415C7.22392 14.2415 6.91215 14.1124 6.68228 13.8825C6.45241 13.6527 6.32327 13.3409 6.32327 13.0158V12.9606C6.31853 12.7578 6.25286 12.561 6.13482 12.396C6.01678 12.231 5.85181 12.1052 5.66137 12.0352C5.47652 11.9536 5.27147 11.9293 5.07266 11.9653C4.87385 12.0014 4.69039 12.0962 4.54595 12.2375L4.50918 12.2742C4.39534 12.3882 4.26016 12.4786 4.11136 12.5403C3.96255 12.602 3.80305 12.6337 3.64197 12.6337C3.48089 12.6337 3.32139 12.602 3.17259 12.5403C3.02379 12.4786 2.8886 12.3882 2.77476 12.2742C2.6608 12.1604 2.57039 12.0252 2.5087 11.8764C2.44702 11.7276 2.41527 11.5681 2.41527 11.407C2.41527 11.2459 2.44702 11.0864 2.5087 10.9376C2.57039 10.7888 2.6608 10.6536 2.77476 10.5398L2.81153 10.503C2.95282 10.3586 3.0476 10.1751 3.08365 9.97633C3.1197 9.77752 3.09536 9.57247 3.01378 9.38762C2.93609 9.20635 2.80709 9.05175 2.64267 8.94286C2.47824 8.83397 2.28556 8.77553 2.08835 8.77475H1.98416C1.65908 8.77475 1.34731 8.64561 1.11744 8.41574C0.887565 8.18587 0.758425 7.87409 0.758425 7.54901C0.758425 7.22392 0.887565 6.91215 1.11744 6.68228C1.34731 6.45241 1.65908 6.32327 1.98416 6.32327H2.03932C2.24218 6.31853 2.43891 6.25286 2.60396 6.13482C2.769 6.01678 2.89471 5.85181 2.96475 5.66137C3.04633 5.47652 3.07067 5.27147 3.03462 5.07266C2.99857 4.87385 2.90379 4.69039 2.76251 4.54595L2.72573 4.50918C2.61177 4.39534 2.52136 4.26016 2.45968 4.11136C2.39799 3.96255 2.36624 3.80305 2.36624 3.64197C2.36624 3.48089 2.39799 3.32139 2.45968 3.17259C2.52136 3.02379 2.61177 2.8886 2.72573 2.77476C2.83957 2.6608 2.97476 2.57039 3.12356 2.5087C3.27236 2.44702 3.43186 2.41527 3.59294 2.41527C3.75402 2.41527 3.91352 2.44702 4.06233 2.5087C4.21113 2.57039 4.34631 2.6608 4.46015 2.77476L4.49692 2.81153C4.64136 2.95282 4.82482 3.0476 5.02363 3.08365C5.22244 3.1197 5.42749 3.09536 5.61234 3.01378H5.66137C5.84264 2.93609 5.99724 2.80709 6.10613 2.64267C6.21502 2.47824 6.27346 2.28556 6.27424 2.08835V1.98416C6.27424 1.65908 6.40338 1.34731 6.63325 1.11744C6.86312 0.887565 7.17489 0.758425 7.49998 0.758425C7.82507 0.758425 8.13684 0.887565 8.36671 1.11744C8.59658 1.34731 8.72572 1.65908 8.72572 1.98416V2.03932C8.7265 2.23653 8.78494 2.42921 8.89383 2.59364C9.00272 2.75807 9.15732 2.88706 9.33859 2.96475C9.52344 3.04633 9.72849 3.07067 9.9273 3.03462C10.1261 2.99857 10.3096 2.90379 10.454 2.76251L10.4908 2.72573C10.6046 2.61177 10.7398 2.52136 10.8886 2.45968C11.0374 2.39799 11.1969 2.36624 11.358 2.36624C11.5191 2.36624 11.6786 2.39799 11.8274 2.45968C11.9762 2.52136 12.1114 2.61177 12.2252 2.72573C12.3392 2.83957 12.4296 2.97476 12.4913 3.12356C12.5529 3.27236 12.5847 3.43186 12.5847 3.59294C12.5847 3.75402 12.5529 3.91352 12.4913 4.06233C12.4296 4.21113 12.3392 4.34631 12.2252 4.46015L12.1884 4.49692C12.0471 4.64136 11.9524 4.82482 11.9163 5.02363C11.8803 5.22244 11.9046 5.42749 11.9862 5.61234V5.66137C12.0639 5.84264 12.1929 5.99724 12.3573 6.10613C12.5217 6.21502 12.7144 6.27346 12.9116 6.27424H13.0158C13.3409 6.27424 13.6527 6.40338 13.8825 6.63325C14.1124 6.86312 14.2415 7.17489 14.2415 7.49998C14.2415 7.82507 14.1124 8.13684 13.8825 8.36671C13.6527 8.59658 13.3409 8.72572 13.0158 8.72572H12.9606C12.7634 8.7265 12.5707 8.78494 12.4063 8.89383C12.2419 9.00272 12.1129 9.15732 12.0352 9.33859Z" stroke="#94979C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </div>
                          <span className="text-[#CECFD2] text-sm">Configurações de conta</span>
                        </div>
                      </button>
                      
                      <button className="w-full px-4 py-2 text-left hover:bg-gray-700/50 transition-colors cursor-pointer">
                        <div className="flex items-center gap-3">
                          <div className="w-4 h-4 text-[#94979C]">
                            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M5.53819 5.47751C5.69668 5.02695 6.00952 4.64703 6.4213 4.40502C6.83308 4.16302 7.31721 4.07455 7.78796 4.1553C8.25871 4.23605 8.6857 4.48079 8.99329 4.84619C9.30088 5.21158 9.46923 5.67404 9.46851 6.15167C9.46851 7.49998 7.44605 8.17414 7.44605 8.17414M7.49998 10.8708H7.50672M14.2415 7.49998C14.2415 11.2232 11.2232 14.2415 7.49998 14.2415C3.77672 14.2415 0.758425 11.2232 0.758425 7.49998C0.758425 3.77672 3.77672 0.758425 7.49998 0.758425C11.2232 0.758425 14.2415 3.77672 14.2415 7.49998Z" stroke="#94979C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </div>
                          <span className="text-[#CECFD2] text-sm">Ajuda e Suporte</span>
                        </div>
                      </button>
                      
                      <div className="border-t border-[#22262F] my-1"></div>
                      
                      <button className="w-full px-4 py-2 text-left hover:bg-red-500/10 transition-colors cursor-pointer">
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