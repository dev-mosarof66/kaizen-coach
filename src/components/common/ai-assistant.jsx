'use client'
import React, { useState } from 'react'
import { LuSparkles } from "react-icons/lu";
import { useRouter, usePathname } from 'next/navigation';
import { useTranslation } from '../../contexts/translation-context';
import { cn } from '../../lib/utils';

const AIAssistant = () => {
    const router = useRouter();
    const pathname = usePathname();
    const { t, language } = useTranslation();
    const [showBubble, setShowBubble] = useState(false);
    const currentMSG = t('aiAssistant.message');
    const isRTL = language === 'ar'


    if(pathname === '/ai-assistant' || pathname === '/add-task' || pathname === '/game-plans') {
        return null;
    }

    return (
        <div onClick={() => router.push('/ai-assistant')}>

            {/* Bubble Message */}
            {showBubble && (
                <div className={cn(
                    "bg-gray-900 text-white text-sm px-4 py-2 rounded-xl shadow-lg",
                    "border border-gray-700 animate-in fade-in duration-300",
                    isRTL && "text-right"
                )}>
                    {currentMSG}
                </div>
            )}

            {/* Main Button */}
            <div onClick={() => router.push('/ai-assistant')} className='size-14 rounded-full bg-linear-to-b from-blue-600 via-blue-600 to-purple-500 flex items-center justify-center active:scale-95 cursor-pointer'>
                <div className='text-2xl text-white'>
                    <LuSparkles />
                </div>
            </div>

        </div>
    )
}

export default AIAssistant
