import WelcomeCard from "../components/dashboard/coach-welcome-card";
import FourthSection from "../components/dashboard/fourth-section";
import StatsCard from "../components/dashboard/stat-card";
import ThirdSection from "../components/dashboard/third-section";

export default function Home() {
  return (
    <div className="w-full flex flex-col px-4 md:px-5 relative">
      <WelcomeCard />
      <StatsCard />
      <ThirdSection />
      <FourthSection />
    </div>
  );
}
