'use client'
import React from "react"
import { Card } from "../ui/card"
import { cn } from "../../lib/utils"
import { useTranslation } from "../../contexts/translation-context"

const status = [
  { id: 1, name: "J. Smith", inactive: 7, stamina: 60 },
  { id: 2, name: "A. Johnson", inactive: 3, stamina: 80 },
  { id: 3, name: "M. Brown", inactive: 1, stamina: 95 },
  { id: 4, name: "K. Lee", inactive: 5, stamina: 70 },
  { id: 5, name: "John Smith", inactive: 10, stamina: 50 },
]

const PlayerStatus = () => {
  const { t } = useTranslation()
  
  return (
    <Card className="w-full h-full col-span-2 border border-gray-800 bg-gray-800/50 rounded-xl p-0 overflow-hidden mb-6">
      <div className="w-full flex flex-col gap-1">

        {/* Header */}
        <div className="px-5 py-4">
          <h1 className="text-base md:text-lg text-white font-semibold">
            {t('dashboard.playerStatus.title')}
          </h1>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gray-700" />

        {/* Player List */}
        <div className="h-full max-h-96 overflow-y-auto scrollbar-hidden">
          {status.map((player, index) => (
            <div
              key={player.id}
              className="w-full flex flex-col gap-4 px-5 py-3 hover:bg-purple-500/5 transition-all duration-300 border-b border-gray-700 last:border-none"
            >
              {/* Player Info */}
              <div className="w-full flex items-center justify-between">
                <p className="text-white font-medium">{player.name}</p>
                <p className="text-gray-400 text-xs"> {player.inactive} {t('dashboard.playerStatus.days')}</p>
              </div>

              {/* Stamina Bar */}
              <div className="w-full flex flex-col items-end">
                <div className="w-full h-1 bg-gray-900 rounded-full overflow-hidden border border-gray-700">
                  <div
                    className={cn("h-full rounded-full transition-all", index % 2 === 0 ? "bg-green-500" : "bg-amber-500")}
                    style={{ width: `${player.stamina}%` }}
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

export default PlayerStatus
