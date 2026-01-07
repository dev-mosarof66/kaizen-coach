'use client'
import { cn } from '../../lib/utils'
import React from 'react'
import { useTranslation } from '../../contexts/translation-context'

const GamePlanTabs = ({ selectedTab, setSelectedTab }) => {
    const { t } = useTranslation()
    const tabs = [
        t('gamePlanDetailsPage.tabs.overview'),
        t('gamePlanDetailsPage.tabs.tacticalBoard'),
        t('gamePlanDetailsPage.tabs.aiAnalytics')
    ]
    return (
        <div className="w-full grid grid-cols-3 border-t border-gray-700 overflow-hidden rounded-b-lg">
            {tabs.map((tab, index) => {
                const active = selectedTab === tab

                return (
                    <div
                        key={index}
                        onClick={() => setSelectedTab(tab)}
                        className={cn(
                            "relative py-2 text-center cursor-pointer select-none transition-all duration-300 text-xs sm:text-sm",
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

export default GamePlanTabs
