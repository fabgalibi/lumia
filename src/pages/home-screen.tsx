import { Header } from "@/components/lumia/header";
import { StatsCards } from "@/components/lumia/stats-cards";
import { SprintSection } from "@/components/lumia/sprint-section";
import StudyConsistencyCalendar from "@/components/lumia/study-consistency-calendar";
import { GoalsTable } from "@/components/lumia/goals-table";
import { Sidebar } from "@/components/lumia/sidebar";

export const HomeScreen = () => {
  return (
    <div className="min-h-screen bg-gray-900 flex overflow-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden pt-6">
        <Header />
        <main className="flex-1 p-4 sm:p-6 lg:p-8 space-y-4 sm:space-y-6 overflow-x-auto overflow-y-auto">
          <StatsCards />
          
          <SprintSection />
          <StudyConsistencyCalendar />
          
          <GoalsTable />
        </main>
      </div>
    </div>
  );
};
