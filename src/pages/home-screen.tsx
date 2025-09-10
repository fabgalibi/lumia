import { Header } from "@/components/lumia/header";
import { StatsCards } from "@/components/lumia/stats-cards";
import { SprintSection } from "@/components/lumia/sprint-section";
import StudyConsistencyCalendar from "@/components/lumia/study-consistency-calendar";
import { GoalsTable } from "@/components/lumia/goals-table";
import { Sidebar } from "@/components/lumia/sidebar";
import { SprintProvider, useSprint } from "@/contexts/sprint-context";

const HomeScreenContent = () => {
  const { progress } = useSprint();
  
  return (
    <div className="min-h-screen flex overflow-hidden" style={{ background: 'rgba(25, 25, 35, 1)' }}>
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden pt-6">
        <Header />
        <main className="flex-1 p-4 sm:p-6 lg:p-8 space-y-4 sm:space-y-6 overflow-x-auto overflow-y-auto">
          <StatsCards />
          
          <SprintSection externalProgress={progress} />
          <StudyConsistencyCalendar />
          
          <GoalsTable />
        </main>
      </div>
    </div>
  );
};

export const HomeScreen = () => {
  return (
    <SprintProvider>
      <HomeScreenContent />
    </SprintProvider>
  );
};
