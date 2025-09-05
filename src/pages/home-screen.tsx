import { Header } from "@/components/lumia/header";
import { StatsCards } from "@/components/lumia/stats-cards";
import { SprintSection } from "@/components/lumia/sprint-section";
import { StudyCalendar } from "@/components/lumia/study-calendar";
import { GoalsTable } from "@/components/lumia/goals-table";
import { Sidebar } from "@/components/lumia/sidebar";

export const HomeScreen = () => {
  return (
    <div className="min-h-screen bg-gray-900 flex">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 p-8 space-y-6">
          <StatsCards />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <SprintSection />
            <StudyCalendar />
          </div>
          <GoalsTable />
        </main>
      </div>
    </div>
  );
};
