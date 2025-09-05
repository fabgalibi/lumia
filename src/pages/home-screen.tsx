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
        <main className="flex-1" style={{ padding: '0' }}>
          <StatsCards />
          <div className="grid grid-cols-1 lg:grid-cols-2" style={{ gap: '24px', padding: '12px 32px' }}>
            <SprintSection />
            <StudyCalendar />
          </div>
          <div style={{ padding: '0 32px', marginTop: '12px' }}>
            <GoalsTable />
          </div>
        </main>
      </div>
    </div>
  );
};
