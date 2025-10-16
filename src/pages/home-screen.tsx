import { useState, useEffect, useCallback } from "react";
import { useLocation } from "react-router";
import { Header } from "@/components/lumia/header";
import { StatsCards } from "@/components/lumia/stats-cards";
import { SprintSection } from "@/components/lumia/sprint-section";
import StudyConsistencyCalendar from "@/components/lumia/study-consistency-calendar";
import { GoalsTable } from "@/components/lumia/goals-table";
import { Sidebar } from "@/components/lumia/sidebar";
import { AccountSettingsContent } from "@/components/account-settings";
import { RankingContent } from "@/components/ranking";
import { TutorialsContent } from "@/components/tutorials";
import MessagesContent from "@/components/messages/messages-content";
import { MentoriasCalendar } from "@/components/mentorias";
import { NotificationsModal } from "@/components/notifications";
import { SprintsPage } from "@/pages/sprints-page";
import { BlockedSprintsPage } from "@/pages/blocked-sprints-page";
import { SprintDetailPage } from "@/pages/sprint-detail-page";
import { LockScreen } from "@/components/lumia/timer";
import { SprintProvider, useSprint } from "@/contexts/sprint-context";
import { SidebarProvider, useSidebar } from "@/contexts/sidebar-context";
import { MainContentProvider, useMainContent } from "@/contexts/main-content-context";
import { NotificationsModalProvider, useNotificationsModal } from "@/contexts/notifications-modal-context";

const HomeScreenContent = () => {
  const { progress } = useSprint();
  const { sidebarWidth } = useSidebar();
  const { } = useMainContent();
  const { isOpen: isNotificationsOpen, closeModal: closeNotifications } = useNotificationsModal();
  const location = useLocation();
  const [screenSize, setScreenSize] = useState<'mobile' | 'tablet' | 'desktop'>('desktop');
  
  // Lógica simplificada baseada na URL
  const isAccountSettingsRoute = location.pathname.startsWith('/account-settings');
  const isRankingRoute = location.pathname.startsWith('/ranking');
  const isTutorialsRoute = location.pathname.startsWith('/tutorials');
  const isMessagesRoute = location.pathname.startsWith('/messages');
  const isMentoriasRoute = location.pathname.startsWith('/mentorias');
  const isSprintsRoute = location.pathname.startsWith('/sprints');
  const isBlockedSprintsRoute = location.pathname === '/sprints/proximas';
  const isSprintDetailRoute = location.pathname.match(/^\/sprints\/[^\/]+$/) && !isBlockedSprintsRoute;
  
  // Funções memoizadas para evitar re-criação
  const handleDeleteAccount = useCallback(() => console.log('Deletar conta'), []);
  const handleUpdatePhoto = useCallback(() => console.log('Atualizar foto'), []);
  

  // Detectar tamanho da tela
  const checkScreenSize = useCallback(() => {
    const width = window.innerWidth;
    
    let newScreenSize: 'mobile' | 'tablet' | 'desktop';
    if (width < 768) {
      newScreenSize = 'mobile';
    } else if (width < 1100) {
      newScreenSize = 'tablet';
    } else {
      newScreenSize = 'desktop';
    }
    
    setScreenSize(newScreenSize);
  }, [screenSize]);

  useEffect(() => {
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, [checkScreenSize]);
  
  return (
    <div className="min-h-screen flex overflow-hidden" style={{ background: 'rgba(25, 25, 35, 1)' }}>
      <Sidebar />
      <div 
        className={`flex-1 flex flex-col min-w-0 overflow-hidden ${isRankingRoute || isMentoriasRoute || isSprintsRoute || isBlockedSprintsRoute || isSprintDetailRoute ? '' : 'pt-6'} transition-all duration-300`}
        style={{ 
          marginLeft: screenSize === 'mobile' ? '0px' : screenSize === 'tablet' ? '0px' : `${sidebarWidth}px`
        }}
      >
        {!isMessagesRoute && !isMentoriasRoute && !isSprintsRoute && !isBlockedSprintsRoute && !isSprintDetailRoute && (
          <Header 
            title={isAccountSettingsRoute ? 'Configurações de conta' : isRankingRoute ? 'Ranking' : isTutorialsRoute ? 'Tutoriais' : undefined}
          />
        )}
        <main className={`flex-1 ${isRankingRoute || isTutorialsRoute || isMessagesRoute || isMentoriasRoute || isSprintsRoute || isBlockedSprintsRoute || isSprintDetailRoute ? '' : 'p-4 sm:p-6 lg:p-8'} space-y-4 sm:space-y-6 overflow-x-auto overflow-y-auto`}>
          {!isAccountSettingsRoute && !isRankingRoute && !isTutorialsRoute && !isMessagesRoute && !isMentoriasRoute && !isSprintsRoute && !isBlockedSprintsRoute && !isSprintDetailRoute && (
            <>
              <StatsCards />
              <SprintSection externalProgress={progress} />
              <StudyConsistencyCalendar />
              <GoalsTable screenSize={screenSize} />
            </>
          )}
          {isAccountSettingsRoute && (
            <AccountSettingsContent
              onDeleteAccount={handleDeleteAccount}
              onUpdatePhoto={handleUpdatePhoto}
            />
          )}
          {isRankingRoute && <RankingContent />}
          {isTutorialsRoute && <TutorialsContent />}
          {isMessagesRoute && <MessagesContent />}
          {isMentoriasRoute && <MentoriasCalendar />}
          {isSprintsRoute && !isSprintDetailRoute && !isBlockedSprintsRoute && <SprintsPage />}
          {isBlockedSprintsRoute && <BlockedSprintsPage />}
          {isSprintDetailRoute && <SprintDetailPage />}
        </main>
      </div>
      
      {/* Notifications Modal */}
      <NotificationsModal isOpen={isNotificationsOpen} onClose={closeNotifications} />
      
      {/* Lock Screen do Timer */}
      <LockScreen />
    </div>
  );
};

export const HomeScreen = () => {
  return (
    <SprintProvider>
      <SidebarProvider>
        <MainContentProvider>
          <NotificationsModalProvider>
            <HomeScreenContent />
          </NotificationsModalProvider>
        </MainContentProvider>
      </SidebarProvider>
    </SprintProvider>
  );
};
