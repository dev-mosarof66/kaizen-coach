'use client'
import { cn } from '@/lib/utils'
import React from 'react'

const tabs = ["Overview", "Attendance", "Tasks"]

const ProfileTabs = ({ selectedTab, setSelectedTab }) => {
    return (
        <div className="w-full grid grid-cols-3 border-t border-gray-700">
            {tabs.map((tab, index) => {
                const active = selectedTab === tab

                return (
                    <div
                        key={index}
                        onClick={() => setSelectedTab(tab)}
                        className={cn(
                            "relative py-2 text-center cursor-pointer select-none transition-all duration-300 text-sm sm:text-base",
                            active
                                ? "text-white bg-blue-500/20"
                                : "text-gray-400 hover:text-white hover:bg-gray-600/10"
                        )}
                    >
                        {tab}

                        {/* ACTIVE TAB UNDERLINE */}
                        {active && (
                            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 transition-all" />
                        )}
                    </div>
                )
            })}
        </div>
    )
}

export default ProfileTabs
