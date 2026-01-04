'use client'
import { Card, CardContent, CardHeader } from '../../ui/card'
import React from 'react'

const LastMatchSummary = () => {
  return (
    <Card className="w-full bg-gray-800 border border-gray-700 text-white p-4 rounded-xl">

      <CardHeader className="p-0">
        <h1 className="text-lg font-semibold">Last Match Summary</h1>
      </CardHeader>

      <div className="w-full h-px bg-gray-700" />

      <CardContent className="p-0">
        <div className="w-full flex flex-col gap-6">

          <div className="flex flex-col gap-1">
            <p className="text-gray-400 text-sm">2025-10-28</p>

            <div className="flex items-center gap-3">
              <p className="text-base">vs <span className="font-semibold">LA Galaxy</span></p>
              <span className="px-2 py-0.5 bg-green-600/30 text-green-400 text-sm rounded-md">
                W 4-2
              </span>
            </div>
          </div>

          {/* STATS GRID */}
          <div className="grid grid-cols-3 bg-gray-900/40 p-3 rounded-lg border border-gray-700 text-center gap-2">

            <div>
              <p className="text-gray-400 text-sm">Minutes</p>
              <p className="text-xl font-semibold">90</p>
            </div>

            <div>
              <p className="text-gray-400 text-sm">Rating</p>
              <p className="text-xl font-semibold text-blue-400">9.0</p>
            </div>

            <div>
              <p className="text-gray-400 text-sm">Goal + Assist</p>
              <p className="text-xl font-semibold">3</p>
            </div>

          </div>

        </div>
      </CardContent>
    </Card>
  )
}

export default LastMatchSummary
