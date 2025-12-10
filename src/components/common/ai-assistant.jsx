'use client'
import React, { useState, useEffect } from 'react'
import { LuSparkles } from "react-icons/lu";

const AIAssistant = () => {
    const [showBubble, setShowBubble] = useState(false);
    const [currentMSG, setCurrentMSG] = useState('How can I assist you?');

    // useEffect(() => {
    //     // Show bubble after initial delay
    //     const initialTimer = setTimeout(() => setShowBubble(true), 1500);

    //     // Then start loop: show → hide → show
    //     const loop = setInterval(() => {
    //         setShowBubble(prev => !prev);
    //     }, 4000); // 4-sec cycle

    //     return () => {
    //         clearTimeout(initialTimer);
    //         clearInterval(loop);
    //     };
    // }, []);

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
            <div className='size-16 rounded-full bg-linear-to-b from-blue-600 via-blue-600 to-purple-500 flex items-center justify-center active:scale-95 cursor-pointer'>
                <div className='text-2xl text-white'>
                    <LuSparkles />
                </div>
            </div>

        </div>
    )
}

export default AIAssistant
