'use client'
import React, { useState, useEffect } from 'react'
import { LuSparkles } from "react-icons/lu";
import { useRouter, usePathname } from 'next/navigation';

const AIAssistant = () => {
    const router = useRouter();
    const pathname = usePathname();
    const [showBubble, setShowBubble] = useState(false);
    const [currentMSG, setCurrentMSG] = useState('Based on player fitness history, consider adding a 10-minute warm-up before this drill to prevent injuries.');


    if(pathname === '/ai-assistant' || pathname === '/add-task' || pathname === '/game-plans') {
        return null;
    }

    return (
        <div className='fixed bottom-8 xl:bottom-12 right-8 xl:right-18 z-40 flex flex-col items-end gap-3'>

            {/* Bubble Message */}
            {showBubble && (
                <div className="
                    bg-gray-900 text-white text-sm px-4 py-2 rounded-xl shadow-lg 
                    border border-gray-700 animate-in fade-in duration-300
                ">
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
