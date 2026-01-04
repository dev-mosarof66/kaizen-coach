import React from "react"
import { Card } from "../ui/card"
import { cn } from "../../lib/utils"

const performance = [
    {
        id: 1,
        team: "U16 Eagles",
        completion: 87,
        label: ["W12", "D3", "L2"],
        subLabel: ["W", "W", "D", "W", "W"],
    },
    {
        id: 2,
        team: "U18 Tigers",
        completion: 76,
        label: ["W10", "D5", "L3"],
        subLabel: ["D", "W", "L", "W", "D"],
    },
    {
        id: 3,
        team: "U14 Juniors",
        completion: 68,
        label: ["W8", "D4", "L5"],
        subLabel: ["L", "W", "W", "L", "W"],
    },
]

const resultColor = {
    W: "bg-green-600/10 text-green-400 border-green-600/40",
    D: "bg-yellow-600/10 text-yellow-300 border-yellow-600/40",
    L: "bg-red-600/10 text-red-400 border-red-600/40",
}

const TopPerformance = () => {
    return (
        <Card className="w-full col-span-3 border border-gray-800 bg-gray-800/50 rounded-xl p-0 overflow-hidden">
            <div className="w-full h-full flex flex-col gap-2 py-3">

                {/* Section Header */}
                <div className="px-5 pb-2">
                    <h1 className="text-base md:text-lg text-white font-semibold">
                        Team Performance
                    </h1>
                </div>

                {/* Divider */}
                <div className="w-full h-px bg-gray-700" />

                {/* Performance List */}
                <div className="flex flex-col divide-y divide-gray-800">
                    {performance.map((team) => (
                        <div key={team.id} className="px-5 py-2 flex flex-col gap-1 sm:gap-3">
                            <div className="w-full flex flex-col sm:flex-row gap-1 items-start sm:items-center justify-between">
                                {/* team + W/D/L streak */}
                                <div className="flex-1 flex flex-col gap-1">
                                    <p className="text-white font-medium">{team.team}</p>
                                    <div className="flex items-center gap-2">
                                        {team.label.map((stat, i) => {
                                            const type = stat[0]
                                            return (
                                                <span
                                                    key={i}
                                                    className={cn(
                                                        "text-sm text-gray-500 font-medium")}
                                                >
                                                    {stat}
                                                </span>
                                            )
                                        })}
                                    </div>

                                </div>
                                {/* Last Results Pills */}
                                <div className="flex items-center gap-2">
                                    {team.subLabel.map((s, i) => (
                                        <span
                                            key={i}
                                            className={cn(
                                                "px-2 py-1 text-xs rounded-md border font-medium",
                                                resultColor[s]
                                            )}
                                        >
                                            {s}
                                        </span>
                                    ))}
                                </div>
                            </div>


                            {/* Progress Bar */}
                            <div className="w-full pb-4">
                                <p className="text-blue-300 justify-self-end px-4 py-0.5 font-semibold">{team.completion}%</p>
                                <div className="w-full h-1.5 bg-gray-900 rounded-full overflow-hidden border border-gray-700">
                                    <div
                                        className="h-full bg-blue-400 rounded-full transition-all"
                                        style={{ width: `${team.completion}%` }}
                                    />
                                </div>

                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </Card>
    )
}

export default TopPerformance
