import React from "react"
import { Card } from "../ui/card"
import { cn } from "../../lib/utils"
import { Button } from "../ui/button"
import { getInitials } from "../../utils/utils"

const requests = [
    {
        id: 1,
        name: "Jenny Wilson",
        label: "Join Request",
        time: "Today",
    },
    {
        id: 2,
        name: "Brooklyn Simmonson",
        label: "Transfer Request",
        time: "Today",
    },
    {
        id: 3,
        name: "Robert Fox",
        label: "Join Request",
        time: "Yesterday",
    },
]

const PlayerRequests = () => {
    return (
        <Card className="w-full border border-gray-800 bg-gray-800/50 rounded-xl p-0 overflow-hidden">
            <div className="w-full flex flex-col gap-1">
                {/* Header */}
                <div className="w-full flex items-center justify-between px-4 py-3">
                    <h1 className="text-base md:text-lg text-white font-semibold">
                        Player Requests
                    </h1>

                    <p className="bg-red-700/20 text-xs sm:text-sm px-3 py-1 text-red-300 rounded-full">
                        {requests.length}
                    </p>
                </div>

                {/* Divider */}
                <div className="w-full h-px bg-gray-700" />

                {/* Requests List */}
                <div className="flex flex-col">
                    {requests.map((r) => {
                        const badgeColor =
                            r.label.toLowerCase() === 'today'
                                ? "text-blue-400 bg-blue-700/20"
                                : "text-amber-400 bg-amber-700/20"

                        return (
                            <div
                                key={r.id}
                                className="sm:m-2 p-3 rounded-xl hover:bg-purple-500/5 transition-all duration-300"
                            >
                                <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between">

                                    {/* Left */}
                                    <div className="flex gap-2">
                                        {/* profile  */}
                                        <div className="px-3 rounded-full flex items-center justify-center text-base font-semibold bg-blue-500 text-white">
                                            {getInitials(r.name)}
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <p className="text-white font-semibold text-sm">
                                                {r.name}
                                            </p>
                                            <div className="flex gap-2">
                                                <p
                                                    className={cn(
                                                        "text-xs rounded-md text-gray-400")}
                                                >
                                                    {r.label}
                                                </p>

                                                <p className={cn("bg-blue-700/30 text-[10px] px-2 py-0.5 rounded-xl text-white", badgeColor)}>{r.time}</p>
                                            </div>
                                        </div>

                                    </div>



                                    {/* Right (Actions) */}
                                    <div className="w-full sm:w-fit flex items-center justify-center gap-3 sm:gap-2">

                                        {/* Accept */}
                                        <Button className="flex-1 sm:w-fit text-xs rounded-md bg-blue-500/30 text-blue-300 border border-blue-700 hover:bg-blue-600/40 transition-all">
                                            <span>

                                            </span>
                                            Accept
                                        </Button>

                                        {/* Deny */}
                                        <Button className="flex-1 sm:w-fit text-xs rounded-md border border-gray-700 bg-transparent text-gray-300 hover:bg-gray-800 transition-all">
                                            Deny
                                        </Button>
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

export default PlayerRequests
