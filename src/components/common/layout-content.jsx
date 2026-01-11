'use client'
import React from 'react'
import SideBar from "./sidebar";
import Header from "./header";
import AIAssistant from "./ai-assistant";
import { useTranslation } from "../../contexts/translation-context";
import VoiceAssistant from './voice-assistant';
import { cn } from '../../lib/utils';

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
        <div className="w-full flex-1 h-[90%] overflow-auto scrollbar-hidden">
          {children}
        </div>
        <div className={cn('fixed bottom-8 xl:bottom-12 z-40 flex flex-col gap-3', isRTL ? 'left-8 xl:left-18 items-start' : 'right-8 xl:right-18 items-end')}>
          <VoiceAssistant />
          <AIAssistant />
        </div>
      </div>
    </div>
  );
}


