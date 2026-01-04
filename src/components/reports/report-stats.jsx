"use client"
import React from "react"
import { PiUsers } from "react-icons/pi"
import { Card } from "../ui/card"
import { cn } from "../../lib/utils"

const stats = [
    { label: "Total Players", value: 127, icon: PiUsers },
    { label: "Active Players", value: 118, icon: PiUsers },
    { label: "Avg Rating", value: 7.6, icon: PiUsers },
    { label: "Task Completion", value: "82%", icon: PiUsers },
]

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
        icon: "text-yellow-400",
        iconBg: "bg-yellow-900/20",
        label: "text-yellow-400",
    },
    {
        icon: "text-green-400",
        iconBg: "bg-green-900/20",
        label: "text-green-400",
    }
]

const ReportStats = () => {
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
                        "size-10 flex items-center justify-center rounded-full text-2xl px-2",
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

export default ReportStats
