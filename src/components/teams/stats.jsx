"use client"
import React from "react"
import { PiUsers } from "react-icons/pi"
import { Card } from "../ui/card"
import { cn } from "../../lib/utils"
import { useTranslation } from "../../contexts/translation-context"

const colors = [
    {
        icon: "text-blue-400",
        iconBg: "bg-blue-900/20",
        label: "text-blue-400",
    },
    {
        icon: "text-red-400",
        iconBg: "bg-red-900/20",
        label: "text-red-400",
    },
    {
        icon: "text-amber-400",
        iconBg: "bg-amber-900/20",
        label: "text-amber-400",
    },
    {
        icon: "text-green-400",
        iconBg: "bg-green-900/20",
        label: "text-green-400",
    }
]

const Stats = () => {
    const { t } = useTranslation()
    const stats = [
        { label: t('teamsPage.stats.teams'), value: 6, icon: PiUsers },
        { label: t('teamsPage.stats.players'), value: 118, icon: PiUsers },
        { label: t('teamsPage.stats.subCoaches'), value: 15, icon: PiUsers },
        { label: t('teamsPage.stats.nextMatch'), value: 2, icon: PiUsers },
    ]
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3">
            {stats.map((item, i) => (
                <StatCard key={i} {...item} index={i} />
            ))}
        </div>
    )
}

const StatCard = ({ label, value, icon: Icon, index }) => {
    const theme = colors[index]

    return (
        <Card
            className={cn(
                "flex flex-col gap-4 border border-gray-700 bg-blue-500/5 rounded-xl p-4 text-white shadow-md hover:shadow-lg transition-all duration-300",)}
        >
            <div className="flex items-center justify-between">
                <div className="w-full h-20 sm:h-24 flex flex-col justify-between">
                    <p className={cn("text-sm sm:text-base text-gray-400", "font-medium")}>{label}</p>
                    <h2 className={cn("text-2xl font-bold drop-shadow")}>
                        {value}
                    </h2>

                </div>
                <div
                    className={cn(
                        "size-10 flex items-center justify-center rounded-full text-2xl",
                        theme.iconBg,
                        theme.icon
                    )}
                >
                    <Icon />
                </div>
            </div>


        </Card>
    )
}

export default Stats
