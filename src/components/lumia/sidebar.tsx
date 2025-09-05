import { useState, useEffect } from "react";
import { 
  Calendar 
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
      icon: (props: any) => (
        <img 
          src="/images/home-icon.png" 
          alt="Início" 
          className="w-6 h-6"
          style={{ 
            filter: activeItem === "Início" ? 'none' : 'brightness(0) invert(1)',
            opacity: activeItem === "Início" ? 1 : 0.7
          }}
        />
      ), 
      label: "Início", 
      path: "/",
      isEmoji: false 
    },
    { 
      icon: (props: any) => (
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
      icon: (props: any) => (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
          <path d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ), 
      label: "Mensagens", 
      path: "/mensagens",
      isEmoji: false 
    },
    { 
      icon: (props: any) => (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
          <path d="M18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M13.73 21C13.5542 21.3031 13.3019 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6982 21.5547 10.4458 21.3031 10.27 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ), 
      label: "Notificações", 
      path: "/notificacoes",
      isEmoji: false 
    },
    { 
      icon: (props: any) => (
        <img 
          src="/images/stats-icon-correct.png" 
          alt="Estatísticas" 
          className="w-6 h-6"
          style={{ 
            filter: activeItem === "Estatísticas" 
              ? 'brightness(0) saturate(100%) invert(27%) sepia(51%) saturate(2878%) hue-rotate(346deg) brightness(104%) contrast(97%)' 
              : 'brightness(0) invert(1)',
            opacity: activeItem === "Estatísticas" ? 1 : 0.7
          }}
        />
      ), 
      label: "Estatísticas", 
      path: "/estatisticas",
      isEmoji: false 
    },
    { 
      icon: (props: any) => (
        <img 
          src="/images/ranking-icon-correct.png" 
          alt="Ranking" 
          className="w-6 h-6"
          style={{ 
            filter: activeItem === "Ranking" 
              ? 'brightness(0) saturate(100%) invert(27%) sepia(51%) saturate(2878%) hue-rotate(346deg) brightness(104%) contrast(97%)' 
              : 'brightness(0) invert(1)',
            opacity: activeItem === "Ranking" ? 1 : 0.7
          }}
        />
      ), 
      label: "Ranking", 
      path: "/ranking",
      isEmoji: false 
    },
    { 
      icon: (props: any) => (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
          <path d="M8 5V19L19 12L8 5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
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
                    <item.icon 
                      className="w-6 h-6" 
                      style={{ 
                        color: activeItem === item.label ? '#F66649' : '#F0F0F1'
                      }} 
                    />
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
              className="group-hover:text-red-400 transition-colors duration-200"
              style={{ color: '#F0F0F1' }}
            >
              <path 
                d="M9 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H9" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
              <path 
                d="M16 17L21 12L16 7" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
              <path 
                d="M21 12H9" 
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
