'use client'
import React from 'react'
import { ChevronRight, Sparkles } from 'lucide-react'
import { Card, CardContent, CardHeader } from '../../ui/card'

const notes = [
  {
    id: 1,
    author: "Coach Martino",
    time: "2 days ago",
    text: "Excellent vision and passing in the last match. Keep improving on finishing."
  },
  {
    id: 2,
    author: "Coach Martino",
    time: "1 week ago",
    text: "Great progress in dribbling skills. Maintain your fitness routine."
  }
]

const CoachNotes = () => {
  return (
    <Card className="relative w-full bg-gray-800 border border-gray-700 rounded-2xl p-4 text-white">
      <CardHeader className={'p-0'}>
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">Coach Notes</h2>
          <button className="text-blue-400 text-sm hover:text-blue-500 flex items-center gap-1 group cursor-pointer">
            View All
            <ChevronRight className='w-4 h-4 group-hover:translate-x-1 transition-all duration-300 delay-75' />
          </button>
        </div>
      </CardHeader>


      <div className="w-full h-px bg-gray-700" />

      <CardContent className={'p-0'}>
        <div className="flex flex-col gap-4">
          {notes.map((item) => (
            <div
              key={item.id}
              className="bg-gray-900 border border-gray-700 rounded-xl p-4"
            >
              <div className="flex items-center justify-between mb-2">
                <p className="text-sm text-gray-400">{item.author}</p>
                <span className="text-xs text-gray-400">{item.time}</span>
              </div>

              <p className="text-sm leading-relaxed text-gray-200">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

export default CoachNotes
