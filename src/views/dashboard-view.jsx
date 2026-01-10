import WelcomeCard from "../components/dashboard/coach-welcome-card";
import FourthSection from "../components/dashboard/fourth-section";
import StatsCard from "../components/dashboard/stat-card";
import ThirdSection from "../components/dashboard/third-section";

export default function DashboardView() {
  return (
    <div className="w-full flex flex-col px-2 md:px-4 relative">
      <WelcomeCard />
      <StatsCard />
      <ThirdSection />  
      <FourthSection />
    </div>
  );
}
