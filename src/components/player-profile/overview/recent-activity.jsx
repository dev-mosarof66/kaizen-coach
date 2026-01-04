'use client'
import { Card, CardContent, CardHeader } from '../../ui/card'
import { CheckCircle, FileText, MessageCircle, ClipboardList } from 'lucide-react'
import React from 'react'

const activities = [
  {
    id: 1,
    icon: CheckCircle,
    iconColor: "bg-green-600/20 text-green-400",
    title: "Completed: Dribbling Drills",
    time: "2 hours ago",
  },
  {
    id: 2,
    icon: FileText,
    iconColor: "bg-blue-600/20 text-blue-400",
    title: "Match Report: vs LA Galaxy",
    time: "1 day ago",
  },
  {
    id: 3,
    icon: MessageCircle,
    iconColor: "bg-purple-600/20 text-purple-400",
    title: "Coach Note: Outstanding playmaking ability.",
    time: "2 days ago",
  },
  {
    id: 4,
    icon: ClipboardList,
    iconColor: "bg-amber-600/20 text-amber-400",
    title: "Assigned: Tactical Review Session",
    time: "3 days ago",
  },
]

const RecentActivity = () => {
  return (
    <Card className="w-full bg-gray-800 border border-gray-700 rounded-2xl p-4 text-white">
      <CardHeader className={'p-0'}>
        <h2 className="text-lg font-semibold">Recent Activity</h2>
      </CardHeader>

      <div className="w-full h-px bg-gray-700" />
      <CardContent className={'p-0'}>
        <div className="flex flex-col gap-5">
          {activities.map((item) => (
            <div key={item.id} className="flex items-start gap-3">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${item.iconColor}`}>
                <item.icon size={20} />
              </div>
              <div className="flex flex-col leading-tight">
                <p className="text-sm">{item.title}</p>
                <span className="text-xs text-gray-400">{item.time}</span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>

    </Card>
  )
}

export default RecentActivity
