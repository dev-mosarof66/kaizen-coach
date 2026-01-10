'use client'
import React from "react"
import { Card } from "../ui/card"
import { ChevronRight } from "lucide-react"
import { cn } from "../../lib/utils"
import { useTranslation } from "../../contexts/translation-context"

const UpcomingEvents = () => {
    const { t, language } = useTranslation()

    const matches = [
        {
            id: 1,
            type: t('dashboard.upcomingEvents.league'),
            typeKey: 'league',
            team1: "U16 Eagles",
            team2: "Lions FC",
            date: t('dashboard.upcomingEvents.today'),
            time: "4:00 PM",
        },
        {
            id: 2,
            type: t('dashboard.upcomingEvents.cup'),
            typeKey: 'cup',
            team1: "U18 Tigers",
            team2: "Hawks United",
            date: t('dashboard.upcomingEvents.tomorrow'),
            time: "6:30 PM",
        },
        {
            id: 3,
            type: t('dashboard.upcomingEvents.friendly'),
            typeKey: 'friendly',
            team1: "U16 Eagles",
            team2: "Wolves Academy",
            date: "Sat, Nov 8",
            time: "2:00 PM",
        },
    ]

    const isRTL = language === 'ar'

    const handleViewAll = () => {
        console.log('view all')
    }

    return (
        <Card className="w-full col-span-2 border border-gray-800 bg-gray-800/50 rounded-md p-0 overflow-hidden">
            <div className="w-full flex flex-col gap-1">

                {/* Header */}
                <div className="w-full flex items-center justify-between p-4">
                    <h1 className="text-base md:text-lg text-gray-300 font-semibold">
                        {t('dashboard.upcomingEvents.title')}
                    </h1>

                    <div onClick={handleViewAll} className={cn("flex items-center gap-1 text-blue-500 hover:text-blue-600 text-xs sm:text-sm cursor-pointer transition-all group")}>
                        <p>{t('dashboard.upcomingEvents.viewAll')}</p>
                        <ChevronRight
                            size={18}
                            className={cn("transition-transform", isRTL ? "rotate-180 group-hover:-translate-x-0.5" : "group-hover:translate-x-0.5")}
                        />
                    </div>
                </div>

                {/* Divider */}
                <div className="w-full h-px bg-gray-500/20" />

                {/* Matches List */}
                <div className="flex flex-col">
                    {matches.map((m) => {
                        const typeColor = m.typeKey === 'league' ? "text-blue-400" : m.typeKey === 'cup' ? "text-amber-400" : "text-gray-400";



                        const typeBgColor = m.typeKey === 'league' ? "bg-blue-700/20" : m.typeKey === 'cup' ? "bg-amber-700/20" : "bg-gray-700/20"
                        return (
                            <div
                                key={m.id}
                                className="m-1 mx-2 py-2 px-4 bg-gray-900 hover:bg-gray-900/50 gap-2 rounded-md transition-colors duration-300 cursor-pointer group"
                            >
                                <div className="flex items-center justify-between">

                                    {/* Left Section */}
                                    <div className="flex flex-col gap-1" >
                                        {/* Match Type Badge */}
                                        <div className="flex gap-2">
                                            <span className={
                                                cn("px-1 py-1 text-xs rounded-md  border border-gray-500/20", typeColor, typeBgColor)
                                            }>
                                                {m.type}
                                            </span>
                                            <span className="text-gray-300 font-semibold text-sm">{m.team1}</span>
                                        </div>

                                        {/* Teams */}
                                        <p className="text-gray-300 font-semibold text-sm sm:text-base">
                                            <span className="text-gray-400">

                                                {m.typeKey === 'cup' ? t('dashboard.upcomingEvents.at') : t('dashboard.upcomingEvents.vs')}
                                            </span> {m.team2}
                                        </p>


                                    </div>
                                    <div className="flex items-center gap-1">
                                        {/* Date + Time */}
                                        <div>
                                            <p className="text-gray-400 text-xs mt-1">
                                                {m.date}
                                            </p>
                                            <p className="text-gray-400 text-xs mt-1">
                                                {m.time}
                                            </p>
                                        </div>
                                        {/* Arrow */}
                                        <ChevronRight
                                            size={18}
                                            className={cn("text-gray-500 group-hover:text-gray-300 duration-300 transition-transform", isRTL ? "rotate-180 group-hover:-translate-x-1" : "group-hover:translate-x-1")}
                                        />
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>

            </div>
        </Card>
    )
}

export default UpcomingEvents
