'use client'
import React from "react"
import { PiUsers } from "react-icons/pi"
import { GoTrophy } from "react-icons/go"
import { IoCalendarNumberOutline } from "react-icons/io5"
import { MdOutlineShowChart } from "react-icons/md"
import { Card } from "../ui/card"
import { cn } from "../../lib/utils"
import { useTranslation } from "../../contexts/translation-context"

const Stats = () => {
    const { t } = useTranslation()
    
    const stats = [
        {
            label: t('stats.activePlayers'),
            value: 127,
            icon: PiUsers,
            percentage: "+12%",
        },
        {
            label: t('stats.matchesWon'),
            value: 30,
            icon: GoTrophy,
            percentage: "+68%",
        },
        {
            label: t('stats.upcomingEvents'),
            value: 8,
            icon: IoCalendarNumberOutline,
            time: t('stats.thisWeek'),
        },
        {
            label: t('stats.taskCompletion'),
            value: "82%",
            icon: MdOutlineShowChart,
            percentage: "+8%",
        },
    ]
    
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {stats.map((item, i) => (
                <StatCard key={i} {...item} index={i} />
            ))}
        </div>
    )
}

const StatCard = ({ label, value, icon: Icon, percentage, time, index }) => {
    const isPositive = String(percentage)?.includes("+")

    const iconColor = index === 0 ? 'text-blue-400' : index === 1 ? "text-green-400" : index === 2 ? "text-amber-400" : "text-blue-400"

    return (
        <Card className="bg-gray-800/60 flex flex-col gap-4 lg:gap-4 border border-gray-500/20 rounded-md p-4 text-white shadow-md hover:shadow-xl transition-all duration-300">
            <div className="flex items-center justify-between">
                {/* Icon */}
                <div className={cn("size-10 flex items-center justify-center rounded-full bg-gray-700/30  text-2xl", iconColor)}>
                    <Icon />
                </div>

                {/* Percentage badge */}
                {percentage ? (
                    <span
                        className={`px-2 py-1 rounded-md text-xs font-medium ${isPositive
                            ? "bg-green-700/20 text-green-400"
                            : "bg-red-700/20 text-red-400"
                            }`}
                    >
                        {percentage}
                    </span>
                ) : time && (
                    <p className="text-[10px] px-2 py-0.5 bg-amber-500/20 text-amber-300 rounded-md">
                        {time}
                    </p>
                )}
            </div>


            {/* Value */}
            <h2 className="text-3xl font-bold text-gray-300">{value}</h2>
            {/* Label */}
            <p className="text-sm text-gray-400">{label}</p>
        </Card>
    )
}

export default Stats
