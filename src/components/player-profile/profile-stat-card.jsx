import React from 'react'
import { cn } from '../../lib/utils'

const ProfileStatCard = ({ stats, colors }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4 w-full">
            {stats.map((item, index) => (
                <div
                    key={item.id}
                    className="w-full p-4 bg-gray-800 border border-gray-700 rounded-xl flex items-center gap-4 shadow-md hover:shadow-lg transition-all"
                >
                    {/* Icon Bubble */}
                    <div className={cn("p-2 rounded-full", colors[index])}>
                        <item.icon size={20} />
                    </div>

                    {/* Text Content */}
                    <div className="w-full flex flex-col">
                        <p className="text-gray-400 text-sm">{item.label}</p>

                        {/* MAIN VALUE: rate OR count */}
                        <p className="text-white text-base sm:text-lg font-semibold">
                            {item.rate ?? item.count}
                        </p>

                        {/* Optional: due */}
                        {item.due && (
                            <p className="text-xs text-gray-400">{item.due}</p>
                        )}
                        {/* rate bar  */}
                        {item.rate && (
                            <div className="w-full max-w-md mt-1">
                                <div className="w-full h-1 bg-green-900/20 rounded-full overflow-hidden border border-gray-700">
                                    <div
                                        className={cn(
                                            "h-full rounded-full transition-all duration-300 bg-green-600"
                                        )}
                                        style={{ width: `${item.rate}` }}
                                    />
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ProfileStatCard
