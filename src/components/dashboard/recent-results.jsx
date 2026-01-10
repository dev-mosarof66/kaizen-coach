'use client'
import React from "react"
import { Card } from "../ui/card"
import { ChevronRight } from "lucide-react"
import { cn } from "../../lib/utils"
import { useTranslation } from "../../contexts/translation-context"

const results = [
    { id: 1, team1: "U16 Eagles", team2: "Lions FC", date: "Nov 3", results: "3 - 1", status: "W" },
    { id: 2, team1: "U18 Tigers", team2: "Hawks United", date: "Nov 2", results: "2 - 2", status: "D" },
    { id: 3, team1: "U16 Juniors", team2: "Wolves Academy", date: "Nov 1", results: "1 - 2", status: "L" },
    { id: 4, team1: "U16 Juniors", team2: "Wolves Academy", date: "Nov 1", results: "1 - 2", status: "L" },
]

const resultColor = {
    W: "bg-green-600/20 text-green-400 border border-green-600/40",
    D: "bg-yellow-600/20 text-yellow-300 border border-yellow-600/40",
    L: "bg-red-600/20 text-red-400 border border-red-600/40",
}

const RecentResults = () => {
    const { t, language } = useTranslation()
    const isRTL = language === 'ar'

    const handleViewAll = () => {
        console.log('view all')
    }

    return (
        <Card className="w-full col-span-3 border border-gray-800 bg-gray-800/50 rounded-md p-0 overflow-hidden">
            <div className="w-full flex flex-col gap-1">

                {/* Header */}
                <div className="w-full flex items-center justify-between p-4">
                    <h1 className="text-base md:text-lg text-gray-300 font-semibold">{t('dashboard.recentResults.title')}</h1>
                    <div onClick={handleViewAll} className="flex items-center gap-1 text-blue-500 hover:text-blue-600 text-xs sm:text-sm cursor-pointer transition-all group">
                        <p>{t('dashboard.recentResults.viewAll')}</p>
                        <ChevronRight size={18} className={cn("transition-transform", isRTL ? "rotate-180 group-hover:-translate-x-1" : "group-hover:translate-x-1")} />
                    </div>
                </div>

                {/* Divider */}
                <div className="w-full h-px bg-gray-500/20" />

                {/* Results List */}
                <div className="flex flex-col">
                    {results.map((m) => {
                        return (
                            <div
                                key={m.id}
                                className="flex items-center justify-between m-2 p-3 py-4 bg-gray-900 gap-2 rounded-md transition-colors duration-300 hover:bg-gray-900/80 active:scale-95 cursor-pointer "
                            >
                                {/* Left Section */}
                                <div className="flex items-center gap-3">
                                    {/* Status Badge */}
                                    <div className={cn("size-8 rounded-full flex items-center justify-center font-bold text-sm", resultColor[m.status])}>
                                        {m.status}
                                    </div>

                                    {/* Teams & Results */}
                                    <div className="flex flex-col gap-1">
                                        <p className="text-gray-300 font-semibold text-sm sm:text-base">
                                            {m.team1}
                                        </p>
                                        <p className="text-gray-400 text-xs"><span className="text-gray-400">{t('dashboard.recentResults.vs')}</span> {m.team2}</p>

                                    </div>
                                </div>

                                {/* Right Section: Date + Arrow */}
                                <div className="flex items-center gap-2">
                                    <div className="flex flex-col items-end justify-end">
                                        <p className="text-gray-300 font-semibold text-sm">{m.results}</p>
                                        <p className="text-gray-400 text-xs">{m.date}</p>
                                    </div>
                                    <ChevronRight size={18} className={cn("text-gray-400 group-hover:text-gray-300 transition-colors", isRTL ? "rotate-180 group-hover:-translate-x-1" : "group-hover:translate-x-1")} />
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </Card>
    )
}

export default RecentResults
