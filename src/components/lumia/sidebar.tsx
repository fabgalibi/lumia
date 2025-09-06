import { useState, useEffect } from "react";
import {
  Calendar,
  Bell01,
  BarChart01,
  Trophy01,
  Play
} from "@untitledui/icons";

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
              <img 
                src="/images/home-icon.png" 
                alt="Início" 
                className="w-6 h-6"
                style={{
                  filter: activeItem === "Início" ? 'none' : 'brightness(0) invert(1)'
                }}
              />
            ), 
      label: "Início", 
      path: "/",
      isEmoji: false 
    },
    { 
      icon: () => (
        <Calendar 
          className="w-6 h-6" 
          style={{ 
            color: activeItem === "Mentorias" ? '#F66649' : '#F0F0F1'
          }} 
        />
      ), 
      label: "Mentorias", 
      path: "/mentorias",
      isEmoji: false 
    },
    { 
                  icon: () => (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="w-6 h-6">
                <path
                  d="M7 8.5H12M7 12H15M9.68375 18H16.2C17.8802 18 18.7202 18 19.362 17.673C19.9265 17.3854 20.3854 16.9265 20.673 16.362C21 15.7202 21 14.8802 21 13.2V7.8C21 6.11984 21 5.27976 20.673 4.63803C20.3854 4.07354 19.9265 3.6146 19.362 3.32698C18.7202 3 17.8802 3 16.2 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V20.3355C3 20.8684 3 21.1348 3.10923 21.2716C3.20422 21.3906 3.34827 21.4599 3.50054 21.4597C3.67563 21.4595 3.88367 21.2931 4.29976 20.9602L6.68521 19.0518C7.17252 18.662 7.41617 18.4671 7.68749 18.3285C7.9282 18.2055 8.18443 18.1156 8.44921 18.0613C8.74767 18 9.0597 18 9.68375 18Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{
                    color: activeItem === "Mensagens" ? '#F66649' : '#F0F0F1'
                  }}
                />
              </svg>
            ), 
      label: "Mensagens", 
      path: "/mensagens",
      isEmoji: false 
    },
    { 
                  icon: () => (
              <Bell01
                className="w-6 h-6"
                style={{
                  color: activeItem === "Notificações" ? '#F66649' : '#F0F0F1'
                }}
              />
            ), 
      label: "Notificações", 
      path: "/notificacoes",
      isEmoji: false 
    },
    { 
                  icon: () => (
              <BarChart01
                className="w-6 h-6"
                style={{
                  color: activeItem === "Estatísticas" ? '#F66649' : '#F0F0F1'
                }}
              />
            ), 
      label: "Estatísticas", 
      path: "/estatisticas",
      isEmoji: false 
    },
    { 
                  icon: () => (
              <Trophy01
                className="w-6 h-6"
                style={{
                  color: activeItem === "Ranking" ? '#F66649' : '#F0F0F1'
                }}
              />
            ), 
      label: "Ranking", 
      path: "/ranking",
      isEmoji: false 
    },
    { 
      icon: () => (
        <Play 
          className="w-6 h-6" 
          style={{ 
            color: activeItem === "Tutoriais" ? '#F66649' : '#F0F0F1'
          }} 
        />
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
        className="transition-all duration-300 shadow-lg flex flex-col"
        style={{
          background: '#252532',
          borderRight: '1px solid #272737',
          borderRadius: isCollapsed ? '0px' : '0px 16px 16px 0px',
          width: isCollapsed ? '80px' : '204px',
          minHeight: '100vh',
          opacity: 1
        }}
      >
      {/* Header */}
      <div className="p-6 mb-6">
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
      <nav className="flex-1 px-4 pb-4 mb-6">
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
                    width: isCollapsed ? '48px' : '100%',
                    justifyContent: isCollapsed ? 'center' : 'flex-start',
                    opacity: isCollapsed ? 1 : 1,
                    transform: isCollapsed ? 'scale(1)' : 'scale(1)',
                    cursor: 'pointer',
                    marginBottom: '12px'
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
