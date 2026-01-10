'use client'
import React from "react"
import { Card } from "../ui/card"
import { cn } from "../../lib/utils"
import { Button } from "../ui/button"
import { getInitials } from "../../utils/utils"
import { useTranslation } from "../../contexts/translation-context"
import { OutlineButton, PrimaryButton } from "../common/button"

const PlayerRequests = () => {
    const { t } = useTranslation()

    const requests = [
        {
            id: 1,
            name: "Jenny Wilson",
            label: t('dashboard.playerRequests.joinRequest'),
            time: t('dashboard.playerRequests.today'),
        },
        {
            id: 2,
            name: "Brooklyn Simmonson",
            label: t('dashboard.playerRequests.transferRequest'),
            time: t('dashboard.playerRequests.today'),
        },
        {
            id: 3,
            name: "Robert Fox",
            label: t('dashboard.playerRequests.joinRequest'),
            time: t('dashboard.playerRequests.yesterday'),
        },
    ]


    const handleAccept = (id) => {
        console.log('accept', id)
    }

    const handleDeny = (id) => {
        console.log('deny', id)
    }


    return (
        <Card className="w-full border border-gray-800 bg-gray-800/50 rounded-md p-0 overflow-hidden">
            <div className="w-full flex flex-col gap-1">
                {/* Header */}
                <div className="w-full flex items-center justify-between p-4">
                    <h1 className="text-base md:text-lg text-gray-300 font-semibold">
                        {t('dashboard.playerRequests.title')}
                    </h1>

                    <p className="bg-red-700/20 size-6 flex items-center justify-center text-xs sm:text-sm text-red-300 rounded-full">
                        {requests.length}
                    </p>
                </div>

                {/* Divider */}
                <div className="w-full h-px bg-gray-500/20" />

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
                                className="sm:m-2 p-3 py-4 rounded-md hover:bg-gray-900/50 transition-all duration-300"
                            >
                                <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center justify-between">

                                    {/* Left */}
                                    <div className="flex gap-2">
                                        {/* profile  */}
                                        <div className="px-3 rounded-full flex items-center justify-center text-base font-semibold bg-blue-500/30 text-blue-300">
                                            {getInitials(r.name)}
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <p className="text-gray-300 font-semibold text-sm">
                                                {r.name}
                                            </p>
                                            <div className="flex gap-2">
                                                <p
                                                    className={cn(
                                                        "text-xs rounded-md text-gray-500")}
                                                >
                                                    {r.label}
                                                </p>

                                                <p className={cn("bg-blue-700/30 text-[10px] px-2 py-0.5 rounded-md text-blue-300", badgeColor)}>{r.time}</p>
                                            </div>
                                        </div>

                                    </div>



                                    {/* Right (Actions) */}
                                    <div className="w-full sm:w-fit flex items-center justify-center gap-3 sm:gap-2">

                                        {/* Accept */}
                                        <PrimaryButton onClick={() => handleAccept(r.id)} className="flex-1 sm:w-fit text-sm rounded-md bg-blue-500/30 text-blue-300 border border-blue-700 hover:bg-blue-600/40 transition-all">
                                            {t('dashboard.playerRequests.accept')}
                                        </PrimaryButton>

                                        {/* Deny */}
                                        <OutlineButton onClick={() => handleDeny(r.id)} className="flex-1 sm:w-fit text-sm rounded-md border border-gray-700 bg-transparent text-gray-300 hover:bg-gray-800 transition-all">
                                            {t('dashboard.playerRequests.deny')}
                                        </OutlineButton>
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
