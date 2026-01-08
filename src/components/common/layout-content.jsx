'use client'
import React from 'react'
import SideBar from "./sidebar";
import Header from "./header";
import AIAssistant from "./ai-assistant";
import { useTranslation } from "../../contexts/translation-context";

export default function LayoutContent({ children }) {
  const { language } = useTranslation();
  const isRTL = language === 'ar';

  return (
    <div className={`w-full h-screen flex bg-background text-white ${isRTL ? 'flex-row' : ''}`}>
      <div className="hidden md:block">
        <SideBar />
      </div>
      <div className="w-full h-screen overflow-y-scroll scrollbar-hidden">
        <Header />
        <div className="w-full flex-1 h-[89%] overflow-auto scrollbar-hidden">
          {children}
        </div>
        <AIAssistant />
      </div>
    </div>
  );
}


