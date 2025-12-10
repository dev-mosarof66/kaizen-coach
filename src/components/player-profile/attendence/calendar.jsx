'use client'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import React, { useState } from 'react'

const days = ['M', 'T', 'W', 'T', 'F', 'S', 'S']

// Example activity mapping for December 2025
const activityDays = {
  1: 'training',
  2: 'match',
  3: 'rest',
  5: 'training',
  7: 'match',
  12: 'training',
  18: 'match',
  25: 'rest',
}

const PlayerCalendar = () => {
  const [date] = useState(new Date())
  const today = date.getDate()

  const getDayStyle = (day) => {
    if (day === today) return 'bg-blue-500/20 text-white font-bold'
    switch (activityDays[day]) {
      case 'training':
        return 'bg-green-500/20 text-white'
      case 'match':
        return 'bg-red-500/20 text-white'
      case 'rest':
        return 'bg-gray-600/20 text-white'
      default:
        return 'text-gray-400'
    }
  }

  return (
    <Card className="w-full bg-gray-800 border border-gray-700 text-white rounded-2xl p-4 mb-4 xl:mb-0">
      <CardHeader className="p-0">
        <p className="text-lg font-semibold">December 2025</p>
      </CardHeader>

      <div className="w-full h-px bg-gray-700 mb-2" />

      <CardContent className="px-3 py-2 w-full">
        <div className="w-full flex flex-col items-center justify-center gap-3">
          {/* Weekdays */}
          <div className="w-full grid grid-cols-7 text-gray-400 text-center font-medium">
            {days.map((d, i) => (
              <p key={i}>{d}</p>
            ))}
          </div>

          {/* Days */}
          <div className="w-full grid grid-cols-7 gap-1">
            {Array.from({ length: 30 }).map((_, index) => {
              const day = index + 1
              return (
                <div
                  key={index}
                  className={`flex items-center justify-center h-10 w-10 rounded-full cursor-pointer transition-all hover:scale-110 ${getDayStyle(
                    day
                  )}`}
                >
                  {day}
                </div>
              )
            })}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default PlayerCalendar
