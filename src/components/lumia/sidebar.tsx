import { useState, useEffect } from "react";

export const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [showTexts, setShowTexts] = useState(true);
  const [activeItem, setActiveItem] = useState("Início");

  const handleToggle = () => {
    if (isCollapsed) {
      // Expandindo: esconder textos primeiro, depois expandir
      setShowTexts(false);
      setIsCollapsed(false);
    } else {
      // Colapsando: esconder textos imediatamente
      setShowTexts(false);
      setIsCollapsed(true);
    }
  };

  // Controlar quando mostrar os textos
  useEffect(() => {
    if (!isCollapsed) {
      // Quando expandindo, aguardar 200ms para mostrar textos (bem próximo do sidebar)
      const timer = setTimeout(() => {
        setShowTexts(true);
      }, 200);
      return () => clearTimeout(timer);
    }
  }, [isCollapsed]);

  const menuItems = [
    { 
      icon: () => (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 13.3333H10.6667V0H0V13.3333ZM0 24H10.6667V16H0V24ZM13.3333 24H24V10.6667H13.3333V24ZM13.3333 0V8H24V0H13.3333Z" fill={activeItem === "Início" ? '#F66649' : '#F0F0F1'}/>
        </svg>
      ), 
      label: "Início", 
      path: "/",
      isEmoji: false 
    },
    { 
      icon: () => (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.3333 0C17.6599 4.30807e-05 17.9751 0.119942 18.2192 0.336954C18.4632 0.553966 18.6191 0.852998 18.6573 1.17733L18.6667 1.33333V2.66667H21.3333C22.0061 2.66645 22.6541 2.92054 23.1474 3.378C23.6407 3.83545 23.9429 4.46246 23.9933 5.13333L24 5.33333V21.3333C24.0002 22.0061 23.7461 22.6541 23.2887 23.1474C22.8312 23.6407 22.2042 23.9429 21.5333 23.9933L21.3333 24H2.66667C1.9939 24.0002 1.34591 23.7461 0.852603 23.2887C0.359294 22.8312 0.0571246 22.2042 0.00666695 21.5333L1.33691e-07 21.3333V5.33333C-0.000212772 4.66056 0.253875 4.01258 0.711329 3.51927C1.16878 3.02596 1.79579 2.72379 2.46667 2.67333L2.66667 2.66667H5.33333V1.33333C5.33371 0.993494 5.46384 0.666624 5.69713 0.419509C5.93042 0.172394 6.24927 0.0236867 6.58853 0.00377051C6.92778 -0.0161457 7.26184 0.0942328 7.52244 0.312353C7.78305 0.530474 7.95053 0.839872 7.99067 1.17733L8 1.33333V2.66667H16V1.33333C16 0.979711 16.1405 0.640573 16.3905 0.390524C16.6406 0.140476 16.9797 0 17.3333 0ZM21.3333 12H2.66667V21.3333H21.3333V12ZM21.3333 5.33333H2.66667V9.33333H21.3333V5.33333Z" fill={activeItem === "Mentorias" ? '#F66649' : '#F0F0F1'}/>
        </svg>
      ), 
      label: "Mentorias", 
      path: "/mentorias",
      isEmoji: false 
    },
    { 
      icon: () => (
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19.8 2.2H2.2V15.4H18.513L19.8 16.687V2.2ZM19.8 0C21.01 0 21.989 0.99 21.989 2.2L22 22L17.6 17.6H2.2C0.99 17.6 0 16.61 0 15.4V2.2C0 0.99 0.99 0 2.2 0H19.8ZM17.6 11H4.4V13.2H17.6V11ZM17.6 7.7H4.4V9.9H17.6V7.7ZM17.6 4.4H4.4V6.6H17.6V4.4Z" fill={activeItem === "Mensagens" ? '#F66649' : '#F0F0F1'}/>
        </svg>
      ), 
      label: "Mensagens", 
      path: "/mensagens",
      isEmoji: false 
    },
    { 
      icon: () => (
        <svg width="22" height="24" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21.5772 16.9823C20.6284 16.0092 18.8532 14.5453 18.8532 9.75C18.8532 6.10781 16.1778 3.19219 12.5704 2.47688V1.5C12.5704 0.671719 11.8672 0 11 0C10.1328 0 9.42956 0.671719 9.42956 1.5V2.47688C5.82216 3.19219 3.14681 6.10781 3.14681 9.75C3.14681 14.5453 1.37159 16.0092 0.422845 16.9823C0.128203 17.2847 -0.0024214 17.6461 3.3952e-05 18C0.00543572 18.7687 0.637443 19.5 1.57637 19.5H20.4236C21.3626 19.5 21.9951 18.7687 22 18C22.0024 17.6461 21.8718 17.2842 21.5772 16.9823ZM3.31623 17.25C4.35828 15.9389 5.49756 13.7658 5.50296 9.77719C5.50296 9.76781 5.50002 9.75937 5.50002 9.75C5.50002 6.85031 7.96224 4.5 11 4.5C14.0378 4.5 16.5 6.85031 16.5 9.75C16.5 9.75937 16.497 9.76781 16.497 9.77719C16.5024 13.7662 17.6417 15.9394 18.6838 17.25H3.31623ZM11 24C12.7345 24 14.1414 22.657 14.1414 21H7.85863C7.85863 22.657 9.26554 24 11 24Z" fill={activeItem === "Notificações" ? '#F66649' : '#F0F0F1'}/>
        </svg>
      ), 
      label: "Notificações", 
      path: "/notificacoes",
      isEmoji: false 
    },
    { 
      icon: () => (
        <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M12 2.04533C10.2341 2.20681 8.53335 2.79283 7.04278 3.75346C5.55221 4.71408 4.31598 6.02084 3.43944 7.56235C2.5629 9.10387 2.07204 10.8345 2.00868 12.6066C1.94533 14.3788 2.31135 16.14 3.07557 17.7402C3.83979 19.3404 4.97955 20.7321 6.39771 21.7967C7.81588 22.8613 9.47041 23.5673 11.2203 23.8544C12.9702 24.1416 14.7636 24.0015 16.4476 23.4459C18.1317 22.8904 19.6564 21.936 20.892 20.664L12.372 13.7773C12.256 13.6837 12.1623 13.5653 12.098 13.4308C12.0336 13.2963 12.0001 13.1491 12 13V2.04533ZM14 2.04533V12H23.9547C23.7209 9.43869 22.597 7.04027 20.7784 5.22163C18.9597 3.40298 16.5613 2.2791 14 2.04533ZM23.9547 14H15.828L22.1493 19.108C23.1701 17.5838 23.7909 15.8272 23.9547 14ZM0 13C0 5.82 5.82 0 13 0C20.18 0 26 5.82 26 13C26.0058 15.9757 24.9854 18.8624 23.1107 21.1733C21.8932 22.6822 20.3529 23.8991 18.6032 24.7344C16.8535 25.5696 14.9388 26.0021 13 26C9.55218 26 6.24558 24.6304 3.80761 22.1924C1.36964 19.7544 0 16.4478 0 13Z" fill={activeItem === "Estatísticas" ? '#F66649' : '#F0F0F1'}/>
        </svg>
      ), 
      label: "Estatísticas", 
      path: "/estatisticas",
      isEmoji: false 
    },
    { 
      icon: () => (
        <svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4.79831 13.4203H2.39378C1.62374 13.4203 1 14.0301 1 14.7799V23.6404C1 24.3903 1.62507 25 2.39378 25H4.79964C5.57101 25 6.19475 24.3903 6.19475 23.6391V14.7799C6.1944 14.4191 6.0473 14.0731 5.78574 13.818C5.52419 13.5629 5.16954 13.4194 4.79964 13.419M13.7023 1H11.2977C10.5264 1 9.90263 1.60973 9.90263 2.36086V23.6378C9.90263 24.3903 10.5277 24.9987 11.2991 24.9987H13.7023C14.4736 24.9987 15.0974 24.389 15.0974 23.6378V2.36216C15.0974 1.60973 14.4723 1.0013 13.7009 1.0013M22.6062 7.71611H20.2004C19.429 7.71611 18.8053 8.32584 18.8053 9.07827V23.6378C18.8053 24.3903 19.4303 24.9987 20.2004 24.9987H22.6049C22.9748 24.9984 23.3294 24.8549 23.591 24.5997C23.8526 24.3446 23.9996 23.9987 24 23.6378V9.07697C24 8.32454 23.3749 7.71611 22.6036 7.71611" stroke={activeItem === "Ranking" ? '#F66649' : '#F0F0F1'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ), 
      label: "Ranking", 
      path: "/ranking",
      isEmoji: false 
    },
    { 
      icon: () => (
        <svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M22.0747 9.82145C22.6562 10.1279 23.1425 10.5855 23.4817 11.145C23.8208 11.7045 24 12.345 24 12.9978C24 13.6505 23.8208 14.291 23.4817 14.8505C23.1425 15.4101 22.6562 15.8676 22.0747 16.1741L6.56497 24.5342C4.06757 25.8818 1 24.1298 1 21.3591V4.6376C1 1.86568 4.06757 0.114937 6.56497 1.4601L22.0747 9.82145Z" stroke={activeItem === "Tutoriais" ? '#F66649' : '#F0F0F1'} strokeWidth="2"/>
        </svg>
      ), 
      label: "Tutoriais", 
      path: "/tutoriais",
      isEmoji: false 
    },
  ];

  const handleItemClick = (item: any) => {
    setActiveItem(item.label);
    console.log(`Navegando para: ${item.path}`);
    console.log(`Item ativo agora: ${item.label}`);
    // TODO: Implementar navegação quando as páginas estiverem criadas
  };

  return (
    <div className="relative">
      {/* Main Sidebar */}
      <div 
        className="transition-all duration-300 shadow-lg"
        style={{
          background: '#252532',
          borderRight: '1px solid #272737',
          borderRadius: isCollapsed ? '0px' : '0px 16px 16px 0px',
          width: isCollapsed ? '96px' : '244px'
        }}
      >
      {/* Header */}
      <div className="p-6">
        <div className="flex items-center">
          {!isCollapsed && (
            <div className="flex items-center gap-3">
              <div className="w-44 h-12 flex items-center justify-center">
                <img 
                  src="/images/lumia-logo-718d50.png" 
                  alt="Lumia Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          )}
          {isCollapsed && (
            <div className="w-12 h-12 flex items-center justify-center">
              <img 
                src="/images/lumia-logo-icon-only.png" 
                alt="Lumia Logo" 
                className="w-full h-full object-contain"
              />
            </div>
          )}
        </div>
      </div>


                  {/* Navigation */}
            <nav className="p-4" style={{ gap: '12px', display: 'flex', flexDirection: 'column' }}>
              {menuItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => handleItemClick(item)}
                  className={`flex items-center transition-all duration-300 hover:bg-gray-700/20`}
                  style={{
                    padding: isCollapsed ? '8px' : '8px 14px',
                    gap: '10px',
                    borderRadius: '8px',
                    background: activeItem === item.label ? '#4B3532' : 'transparent',
                    color: '#F0F0F1',
                    width: isCollapsed ? '48px' : '204px',
                    justifyContent: isCollapsed ? 'center' : 'flex-start',
                    opacity: isCollapsed ? 1 : 1,
                    transform: isCollapsed ? 'scale(1)' : 'scale(1)',
                    cursor: 'pointer'
                  }}
                >
                  <div className="w-8 h-8 flex items-center justify-center">
                    <item.icon />
                  </div>
                  {!isCollapsed && showTexts && (
                    <span 
                      className="font-medium transition-all duration-200" 
                      style={{ 
                        fontSize: '14px',
                        fontWeight: activeItem === item.label ? '600' : '400',
                        color: '#F0F0F1',
                        opacity: 1,
                        transform: 'translateX(0)'
                      }}
                    >
                      {item.label}
                    </span>
                  )}
                </button>
              ))}
            </nav>

      {/* User section */}
      <div className="mt-auto p-4">
        <button 
          className="flex items-center transition-all duration-300 hover:bg-red-900/20 group"
          style={{
            padding: isCollapsed ? '8px' : '8px 14px',
            gap: '10px',
            borderRadius: '8px',
            background: 'transparent',
            color: '#F0F0F1',
            width: isCollapsed ? '48px' : '204px',
            justifyContent: isCollapsed ? 'center' : 'flex-start',
            border: '1px solid transparent',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(239, 68, 68, 0.1)';
            e.currentTarget.style.borderColor = 'rgba(239, 68, 68, 0.3)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'transparent';
            e.currentTarget.style.borderColor = 'transparent';
          }}
        >
                           <div className="w-8 h-8 flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                                     <svg 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    className="w-6 h-6 group-hover:text-red-400 transition-colors duration-200"
                    style={{ color: '#F0F0F1' }}
                  >
                    <path 
                      d="M9 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H9M16 17L21 12L16 7M21 12H9" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                  </svg>
                 </div>
          {!isCollapsed && showTexts && (
            <span 
              className="font-medium transition-all duration-200 group-hover:text-red-400" 
              style={{ 
                fontSize: '14px',
                fontWeight: '400',
                color: '#F0F0F1',
                opacity: 1,
                transform: 'translateX(0)'
              }}
            >
              Sair da conta
            </span>
          )}
        </button>
      </div>
      </div>

      {/* Collapse Button - Positioned absolutely outside sidebar */}
      <button
        onClick={handleToggle}
        className={`absolute top-24 transition-all duration-300 ${isCollapsed ? "rotate-180" : ""}`}
        style={{
          right: isCollapsed ? '-12px' : '-20px',
          background: '#24212D',
          border: '1px solid rgba(12, 14, 18, 0.1)',
          borderRadius: '24px',
          padding: '4px',
          width: '32px',
          height: '32px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          zIndex: 10
        }}
      >
        <img 
          src="/images/collapse-button.png" 
          alt="Collapse Button" 
          style={{
            width: '24px',
            height: '24px',
            objectFit: 'contain'
          }}
        />
      </button>
    </div>
  );
};
