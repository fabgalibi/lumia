import { useState, useEffect, useCallback } from "react";
import { useLocation } from "react-router";
import { Header } from "@/components/lumia/header";
import { StatsCards } from "@/components/lumia/stats-cards";
import { SprintSection } from "@/components/lumia/sprint-section";
import StudyConsistencyCalendar from "@/components/lumia/study-consistency-calendar";
import { GoalsTable } from "@/components/lumia/goals-table";
import { Sidebar } from "@/components/lumia/sidebar";
import { AccountSettingsContent } from "@/components/account-settings";
import { SprintProvider, useSprint } from "@/contexts/sprint-context";
import { SidebarProvider, useSidebar } from "@/contexts/sidebar-context";
import { MainContentProvider, useMainContent } from "@/contexts/main-content-context";

const HomeScreenContent = () => {
  const { progress } = useSprint();
  const { sidebarWidth } = useSidebar();
  const { currentContent } = useMainContent();
  const location = useLocation();
  const [isMobile, setIsMobile] = useState(false);
  
  // Lógica simplificada baseada na URL
  const isAccountSettingsRoute = location.pathname.startsWith('/account-settings');
  
  // Funções memoizadas para evitar re-criação
  const handleDeleteAccount = useCallback(() => console.log('Deletar conta'), []);
  const handleUpdatePhoto = useCallback(() => console.log('Atualizar foto'), []);
  
  // Debug logs
  console.log('HomeScreen Debug:', {
    pathname: location.pathname,
    currentContent,
    isAccountSettingsRoute
  });

  // Detectar se é mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024); // lg breakpoint
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  return (
    <div className="min-h-screen flex overflow-hidden" style={{ background: 'rgba(25, 25, 35, 1)' }}>
      <Sidebar />
      <div 
        className="flex-1 flex flex-col min-w-0 overflow-hidden pt-6 transition-all duration-300"
        style={{ 
          marginLeft: isMobile ? '0px' : `${sidebarWidth}px`
        }}
      >
        <Header 
          title={isAccountSettingsRoute ? 'Configurações de conta' : undefined}
        />
        <main className="flex-1 p-4 sm:p-6 lg:p-8 space-y-4 sm:space-y-6 overflow-x-auto overflow-y-auto">
          {!isAccountSettingsRoute && (
            <>
              <StatsCards />
              <SprintSection externalProgress={progress} />
              <StudyConsistencyCalendar />
              <GoalsTable />
            </>
          )}
          {isAccountSettingsRoute && (
            <AccountSettingsContent
              onDeleteAccount={handleDeleteAccount}
              onUpdatePhoto={handleUpdatePhoto}
            />
          )}
        </main>
      </div>
    </div>
  );
};

export const HomeScreen = () => {
  return (
    <SprintProvider>
      <SidebarProvider>
        <MainContentProvider>
          <HomeScreenContent />
        </MainContentProvider>
      </SidebarProvider>
    </SprintProvider>
  );
};
