import "./globals.css";
import SideBar from "../components/common/sidebar";
import Header from "../components/common/header";
import AIAssistant from "../components/common/ai-assistant";
import { TranslationProvider } from "../contexts/translation-context";

export const metadata = {
  title: "Takteeki AI",
  description: "Takteeki App for managing your tasks",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <TranslationProvider>
          <div className="w-full h-screen flex bg-background text-white">
            <div>
              <div className="hidden md:block w-full h-screen">
                <SideBar />
              </div>
            </div>
            <div className="w-full h-screen overflow-y-scroll scrollbar-hidden">
              <Header />
              <div className="w-full flex-1 h-[89%] overflow-auto scrollbar-hidden">
                {children}
              </div>
              <AIAssistant />
            </div>
          </div>
        </TranslationProvider>
      </body>
    </html>
  );
}
