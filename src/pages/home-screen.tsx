import { useState, useEffect } from "react";
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
  const [isMobile, setIsMobile] = useState(false);

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
        <Header />
        <main className="flex-1 p-4 sm:p-6 lg:p-8 space-y-4 sm:space-y-6 overflow-x-auto overflow-y-auto">
          {currentContent === 'home' && (
            <>
              <StatsCards />
              <SprintSection externalProgress={progress} />
              <StudyConsistencyCalendar />
              <GoalsTable />
            </>
          )}
          {currentContent === 'account-settings' && (
            <AccountSettingsContent
              onDeleteAccount={() => console.log('Deletar conta')}
              onUpdatePhoto={() => console.log('Atualizar foto')}
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
