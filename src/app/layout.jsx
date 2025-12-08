import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SideBar from "@/components/common/sidebar";
import Header from "@/components/common/header";
import AIAssistant from "../components/common/ai-assistant";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Takteeki App",
  description: "Takteeki App for managing your tasks",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="w-full h-screen flex bg-gray-900 text-white">
          <div>
            <div className="hidden md:block w-full h-screen">
              <SideBar />
            </div>
          </div>
          <div className="w-full h-screen overflow-y-scroll scrollbar-hidden">
            <Header />
            <div className="w-full flex-1">
              {children}
            </div>
       
          </div>
        </div>
      </body>
    </html>
  );
}
