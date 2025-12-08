'use client'
import React, { useState, useEffect } from 'react'
import { LuSparkles } from "react-icons/lu";

const AIAssistant = () => {
    const [showBubble, setShowBubble] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => setShowBubble(true), 1500)
        return () => clearTimeout(timer)
    }, [])

    return (
        <div className='fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3'>

            {/* Bubble Message */}
            {showBubble && (
                <div className="
          bg-gray-900 text-white text-sm px-4 py-2 rounded-xl shadow-lg 
          border border-gray-700 animate-in fade-in duration-300
        ">
                    How can I assist you?
                </div>
            )}

            {/* Main Button */}
            <div className='size-14 rounded-full bg-linear-to-b from-blue-600 via-blue-600 to-purple-500 flex items-center justify-center active:scale-95 cursor-pointer'>
                <div className='text-3xl text-white'>
                    <LuSparkles />
                </div>
            </div>

        </div>
    )
}

export default AIAssistant
