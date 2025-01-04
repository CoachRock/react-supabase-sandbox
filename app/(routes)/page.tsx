import { PageHeader } from '@/components/page-header';
import { StatsCards } from '@/components/stats-cards';
import { InterviewChart } from '@/components/interview-chart';
import { RecentInterviews } from '@/components/recent-interviews';

export default function Home() {
  return (
    <div className="space-y-6">
      <PageHeader 
        heading=""
        description={
          <span className="text-lg text-black dark:text-white">
            Welcome to <strong className="text-blue-500">Alpha Interview</strong> - Your Virtual Interview Management System
          </span>
        }
      />
      <StatsCards />
      <div className="grid gap-6 md:grid-cols-2">
        <InterviewChart />
        <RecentInterviews />
      </div>
    </div>
  );
}