import { getInitials } from "../../utils/utils"
import { Card } from "../ui/card"
import { cn } from "../../lib/utils"
import { HiOutlineDotsVertical } from "react-icons/hi";

const players = [
    {
        id: 1,
        name: "Ethan Carter",
        position: "GK",
        jerseyNumber: 1,
        status: "Fit",
        fitness: "90%",
        form: 7.9,
        tasks: 7,
        attendance: "98%",
    },
    {
        id: 2,
        name: "John Doe",
        position: "CB",
        jerseyNumber: 2,
        status: "Doubtful",
        fitness: "85%",
        form: 7.5,
        tasks: 6,
        attendance: "95%",
    },
    {
        id: 3,
        name: "Michael Brown",
        position: "RB",
        jerseyNumber: 3,
        status: "Injured",
        fitness: "88%",
        form: 7.8,
        tasks: 6,
        attendance: "97%",
    },
    {
        id: 4,
        name: "Emma Wilson",
        position: "CM",
        jerseyNumber: 6,
        status: "Fit",
        fitness: "90%",
        form: 7.9,
        tasks: 7,
        attendance: "98%",
    },
]

const TeamList = () => {
    return (
        <Card className="w-full h-full flex flex-col bg-gray-800/50 border border-gray-800 rounded-xl p-4">
            <table className="w-full text-left text-sm sm:text-base text-gray-300">
                <thead className="bg-gray-800/20 text-gray-200 border-b border-gray-700">
                    <tr>
                        <th className="p-2">Player</th>
                        <th className="p-2">Status</th>
                        <th className="p-2 hidden sm:block md:hidden xl:block">Fitness</th>
                        <th className="p-2 text-center">Form</th>
                        <th className="p-2 hidden sm:table-cell md:table-cell xl:table-cell">Tasks</th>
                        <th className="p-2 hidden sm:table-cell md:table-cell xl:table-cell text-center">Attendance</th>
                        <th className="p-2">Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {players.map((player) => {
                        const statusBgColor =
                            player.status === "Injured"
                                ? "bg-red-500/10"
                                : player.status === "Doubtful"
                                    ? "bg-yellow-500/10"
                                    : "bg-green-500/10";

                        const statusTextColor =
                            player.status === "Injured"
                                ? "text-red-500"
                                : player.status === "Doubtful"
                                    ? "text-yellow-500"
                                    : "text-green-500";

                        const statusCircleColor =
                            player.status === "Injured"
                                ? "bg-red-500"
                                : player.status === "Doubtful"
                                    ? "bg-yellow-500"
                                    : "bg-green-500";

                        return (
                            <tr key={player.id} className="border-b border-gray-700/40">
                                <td className="py-2">
                                    <div className="flex items-center gap-2">
                                        <div className="size-9 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold">
                                            {getInitials(player.name)}
                                        </div>

                                        <div className="flex flex-col">
                                            <p className="text-white text-sm font-semibold">{player.name}</p>
                                            <div className="flex items-center gap-2">
                                                <p className="text-gray-400 text-xs">{player.position}</p>
                                                <span className="text-gray-500">•</span>
                                                <p className="text-gray-400 text-xs">#{player.jerseyNumber}</p>
                                            </div>
                                        </div>
                                    </div>
                                </td>

                                <td>
                                    <div className={cn(
                                        "w-fit flex items-center gap-2 text-xs px-2 py-1 rounded-md",
                                        statusBgColor
                                    )}>
                                        <span className={cn("size-2.5 rounded-full", statusCircleColor)} />
                                        <span className={cn(statusTextColor, "text-xs")}>{player.status}</span>
                                    </div>
                                </td>

                                <td className="p-2 text-xs hidden sm:block md:hidden xl:block">
                                    <div className="w-full flex flex-col gap-1">
                                        <p className="text-sm text-right">{player.fitness}</p>

                                        <div className="w-full h-1 bg-gray-700 rounded-full overflow-hidden">
                                            <div
                                                className="h-full bg-green-500 rounded-full"
                                                style={{ width: player.fitness }}
                                            />
                                        </div>
                                    </div>
                                </td>

                                <td className="p-2 text-sm text-center font-medium">{player.form}</td>

                                <td className="p-2 hidden sm:table-cell md:table-cell xl:table-cell"> <div className="w-full flex flex-col gap-1">
                                    <p className="text-sm text-right">{player.tasks} / 7</p>

                                    <div className="w-full h-1 bg-gray-700 rounded-full overflow-hidden">
                                        <div
                                            className="h-full bg-green-500 rounded-full"
                                            style={{ width: `${player.tasks / 7 * 100}%` }}
                                        />
                                    </div>
                                </div></td>
                                <td className="p-2 hidden sm:table-cell md:table-cell xl:table-cell text-center font-medium">{player.attendance}</td>

                                <td className="p-2 ">
                                    <button className="text-white hover:text-blue-600 active:scale-95 cursor-pointer transition-all duration-300">
                                        <HiOutlineDotsVertical size={18} />
                                    </button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </Card>
    )
}

export default TeamList
