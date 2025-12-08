import React from "react"
import { Card } from "../ui/card"
import { ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

const matches = [
    {
        id: 1,
        type: "League",
        team1: "U16 Eagles",
        team2: "Lions FC",
        date: "Today",
        time: "4:00 PM",
    },
    {
        id: 2,
        type: "Cup",
        team1: "U18 Tigers",
        team2: "Hawks United",
        date: "Tomorrow",
        time: "6:30 PM",
    },
    {
        id: 3,
        type: "Friendly",
        team1: "U16 Eagles",
        team2: "Wolves Academy",
        date: "Sat, Nov 8",
        time: "2:00 PM",
    },
]

const UpcomingEvents = () => {
    return (
        <Card className="w-full col-span-2 border border-gray-800 bg-gray-800/50 rounded-xl p-0 overflow-hidden">
            <div className="w-full flex flex-col gap-1">

                {/* Header */}
                <div className="w-full flex items-center justify-between px-5 py-3">
                    <h1 className="text-base md:text-lg text-white font-semibold">
                        Upcoming Matches
                    </h1>

                    <div className="flex items-center gap-1 text-blue-500 hover:text-blue-600 text-xs sm:text-sm cursor-pointer transition-all group">
                        <p>View All</p>
                        <ChevronRight
                            size={18}
                            className="group-hover:translate-x-1 transition-transform"
                        />
                    </div>
                </div>

                {/* Divider */}
                <div className="w-full h-px bg-gray-700" />

                {/* Matches List */}
                <div className="flex flex-col">
                    {matches.map((m) => {
                        const typeColor = m.type.toLowerCase() === 'league' ? "text-blue-400" : m.type.toLowerCase() === 'cup' ? "text-amber-400" : "text-gray-400";



                        const typeBgColor = m.type.toLowerCase() === 'league' ? "bg-blue-700/20" : m.type.toLowerCase() === 'cup' ? "bg-amber-700/20" : "bg-gray-700/20"
                        return (
                            <div
                                key={m.id}
                                className="m-1 mx-3 py-2 px-4 bg-gray-900 hover:bg-purple-600/5 gap-2 rounded-xl shadow-inset transition-colors duration-300 cursor-pointer group"
                            >
                                <div className="flex items-center justify-between">

                                    {/* Left Section */}
                                    <div className="flex flex-col gap-1" >
                                        {/* Match Type Badge */}
                                        <div className="flex gap-2">
                                            <span className={
                                                cn("px-1 py-1 text-xs rounded-md bg-gray-900  border border-gray-700", typeColor, typeBgColor)
                                            }>
                                                {m.type}
                                            </span>
                                            <span className="text-white font-semibold text-sm">{m.team1}</span>
                                        </div>

                                        {/* Teams */}
                                        <p className="text-white font-semibold text-sm sm:text-base">
                                            <span className="text-gray-400">

                                                {m.type.toLowerCase() === 'cup' ? "@" : "vs"}
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
                                        <ChevronRight className="text-gray-500 group-hover:text-gray-300 transition-all duration-300 group-hover:translate-x-1 " />
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
