import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface SidebarContextType {
  isCollapsed: boolean;
  toggleSidebar: () => void;
  sidebarWidth: number;
}

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

export const useSidebar = () => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error('useSidebar must be used within a SidebarProvider');
  }
  return context;
};

interface SidebarProviderProps {
  children: ReactNode;
}

export const SidebarProvider: React.FC<SidebarProviderProps> = ({ children }) => {
  // Inicializar como collapsed se for mobile/tablet
  const [isCollapsed, setIsCollapsed] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth < 1100; // Mobile/tablet = collapsed
    }
    return false;
  });
  
  // Ajustar automaticamente quando a tela mudar de tamanho
  useEffect(() => {
    const handleResize = () => {
      const isMobileOrTablet = window.innerWidth < 1100;
      if (isMobileOrTablet && !isCollapsed) {
        setIsCollapsed(true); // Colapsar quando mudar para mobile/tablet
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isCollapsed]);
  
  const toggleSidebar = () => {
    setIsCollapsed(prev => !prev);
  };

  const sidebarWidth = isCollapsed ? 96 : 244;

  return (
    <SidebarContext.Provider value={{ isCollapsed, toggleSidebar, sidebarWidth }}>
      {children}
    </SidebarContext.Provider>
  );
};
