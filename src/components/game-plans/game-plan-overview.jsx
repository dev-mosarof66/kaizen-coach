'use client'

import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'
import { Badge } from '../ui/badge'
import { Avatar, AvatarFallback } from '../ui/avatar'
import { Progress } from '../ui/progress'
import {
    Send,
    Download,
    Clock,
    FileText,
    Image as ImageIcon,
    Star,
} from 'lucide-react'
import { cn } from '../../lib/utils'
import CircularProgress from '../common/circular-progress'
import { PrimaryButton } from '../common/button'



const GamePlanOverview = ({ gamePlan, comment, setComment, coachNote, setCoachNote, onSendComment, onSaveNote }) => {
    // Extended game plan data with additional fields
    const extendedData = {
        ...gamePlan,
        description: 'Focus on defensive positioning and counter-attack transitions. Players should understand their roles in both defensive and offensive phases.',
        startDateFull: 'Nov 6, 2025',
        dueDateFull: 'Nov 9, 2025',
        priority: 'High',
        assignedPlayers: [
            { initials: 'AA', name: 'Ahmed Ali', position: 'Forward' },
            { initials: 'MH', name: 'Mohammed Hassan', position: 'Midfielder' },
            { initials: 'KI', name: 'Khalid Ibrahim', position: 'Defender' },
            { initials: 'OY', name: 'Omar Youssef', position: 'Goalkeeper' },
            { initials: 'SA', name: 'Salem Ahmed', position: 'Midfielder' },
            { initials: 'AM', name: 'Ali Mohammed', position: 'Forward' },
        ],
        comments: [
            {
                author: { initials: 'CS', name: 'Coach Saleh' },
                text: 'Great progress today! Focus on maintaining shape during transitions.',
                time: '2 hours ago'
            },
            {
                author: { initials: 'CA', name: 'Coach Ahmed' },
                text: 'Players are responding well to the drills. Consider adding more intensity.',
                time: '5 hours ago'
            }
        ],
        attachments: [
            { name: 'Training_Plan.pdf', size: '2.4 MB', type: 'pdf' },
            { name: 'Field_Setup.jpg', size: '1.2 MB', type: 'image' }
        ],
        nextEvents: [
            { title: 'Team Training Session', time: 'Tomorrow, 10:00 AM', iconColor: 'text-red-400' },
            { title: 'Team Training Session', time: 'Tomorrow, 10:00 AM', iconColor: 'text-blue-400' }
        ],
        history: [
            { text: 'Progress updated to 75% by Coach Saleh', time: '3 hours ago' },
            { text: 'Task assigned to Team A by Coach Saleh', time: '2 days ago' },
            { text: 'Task created' }
        ]
    }

    return (
        <div className="w-full flex flex-col gap-6">

            {/* overview + progress tracker  */}
            <div className='w-full grid grid-cols-1 lg:grid-cols-3 gap-0 xl:gap-6 space-y-3 xl:space-y-0'>
                {/* Overview Card */}
                <Card className="w-full col-span-2 bg-gray-800/50 border-gray-700">
                    <CardHeader>
                        <CardTitle className="text-lg font-semibold text-gray-400">Overview</CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-col gap-4">
                        <p className="text-sm text-gray-300 leading-relaxed">
                            {extendedData.description}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <div className="flex flex-col gap-1">
                                <span className="text-xs text-gray-400">Start Date</span>
                                <span className="text-sm text-gray-300">{extendedData.startDateFull}</span>
                            </div>
                            <div className="flex flex-col gap-1">
                                <span className="text-xs text-gray-400">Due Date</span>
                                <span className="text-sm text-orange-400">{extendedData.dueDateFull}</span>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Progress Tracker Card */}
                <Card className="w-full col-span-1  bg-gray-800/50 border-gray-700">
                    <CardHeader>
                        <CardTitle className="text-lg font-semibold text-gray-400">Progress Tracker</CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-col items-center gap-2 py-0">
                        <CircularProgress value={gamePlan.progress} size={80} />
                        <p className="text-sm text-gray-400">Complete</p>
                        <PrimaryButton className="w-full bg-blue-600 hover:bg-blue-700 text-gray-300">
                            Update Progress
                        </PrimaryButton>
                    </CardContent>
                </Card>
            </div>

            {/* asigned players + quick info  */}
            <div className='w-full grid grid-cols-1 lg:grid-cols-3 gap-0 xl:gap-6 space-y-3 xl:space-y-0'>

                {/* Assigned Players Card */}
                <Card className="w-full col-span-2 bg-gray-800/50 border-gray-700">
                    <CardHeader className="flex flex-row items-center justify-between">
                        <CardTitle className="text-lg font-semibold text-gray-400">
                            Assigned Players ({extendedData.assignedPlayers.length})
                        </CardTitle>
                        <Button
                            variant="outline"
                            className="bg-blue-600 hover:bg-blue-700 text-gray-300 border-blue-600"
                        >
                            Manage
                        </Button>
                    </CardHeader>
                    <CardContent>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {extendedData.assignedPlayers.map((player, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-3 p-3 bg-gray-900/50 rounded-lg border border-gray-700"
                                >
                                    <Avatar className="h-10 w-10">
                                        <AvatarFallback className="bg-blue-500/50 text-blue-200 text-sm border-2 border-gray-700">
                                            {player.initials}
                                        </AvatarFallback>
                                    </Avatar>
                                    <div className="flex-1 flex flex-col">
                                        <span className="text-sm font-medium text-white">{player.name}</span>
                                        <span className="text-xs text-gray-400">{player.position}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
                {/* Quick Info Card */}
                <Card className="bg-gray-800/50 border-gray-700">
                    <CardHeader>
                        <CardTitle className="text-lg font-semibold text-white">Quick Info</CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-col gap-4">
                        <div className="flex flex-col gap-2">
                            <span className="text-xs text-gray-400">Priority</span>
                            <Badge
                                variant="outline"
                                className="w-fit text-xs font-semibold px-2 py-1 rounded-full border text-gray-300 border-gray-700 bg-gray-700/50"
                            >
                                {extendedData.priority}
                            </Badge>
                        </div>
                        <div className="flex flex-col gap-2">
                            <span className="text-xs text-gray-400">Task Rating</span>
                            <div className="flex items-center gap-2">
                                <Progress value={(gamePlan.rating / 10) * 100} className="flex-1 h-2 bg-gray-700" />
                                <span className="text-sm text-yellow-400 font-semibold">{gamePlan.rating}/10</span>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <span className="text-xs text-gray-400">Created By</span>
                            <div className="flex items-center gap-2">
                                <Avatar className="h-8 w-8">
                                    <AvatarFallback className="bg-blue-500/50 text-blue-200 text-xs border border-gray-700">
                                        {gamePlan.createdBy.initials}
                                    </AvatarFallback>
                                </Avatar>
                                <span className="text-sm text-white">{gamePlan.createdBy.name}</span>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* comment notes  + next event  */}
            <div className='w-full grid grid-cols-1 lg:grid-cols-3 gap-0 xl:gap-6 space-y-3 xl:space-y-0'>

                {/* Comments & Notes Card */}
                <Card className="w-full col-span-2 bg-gray-800/50 border-gray-700">
                    <CardHeader>
                        <CardTitle className="text-lg font-semibold text-white">Comments & Notes</CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-col gap-4">
                        <div className="flex flex-col gap-4">
                            {extendedData.comments.map((commentItem, index) => (
                                <div key={index} className="flex flex-col gap-2 p-3 bg-gray-900/50 rounded-lg border border-gray-700">
                                    <div className="flex items-center gap-2">
                                        <Avatar className="h-8 w-8">
                                            <AvatarFallback className="bg-blue-500/50 text-blue-200 text-xs border border-gray-700">
                                                {commentItem.author.initials}
                                            </AvatarFallback>
                                        </Avatar>
                                        <div className="flex-1 flex items-center gap-2">
                                            <span className="text-sm font-medium text-white">{commentItem.author.name}</span>
                                            <span className="text-xs text-gray-500">{commentItem.time}</span>
                                        </div>
                                    </div>
                                    <p className="text-sm text-gray-300 pl-10">{commentItem.text}</p>
                                </div>
                            ))}
                        </div>
                        <div className="flex items-center gap-2">
                            <Input
                                value={comment}
                                onChange={(e) => setComment(e.target.value)}
                                placeholder="Add a comment..."
                                className="flex-1 bg-gray-900/50 border-gray-700 text-white placeholder:text-gray-500"
                                onKeyPress={(e) => {
                                    if (e.key === 'Enter') {
                                        onSendComment()
                                    }
                                }}
                            />
                            <Button
                                onClick={onSendComment}
                                className="bg-blue-600 hover:bg-blue-700 text-white"
                            >
                                <Send className="h-4 w-4" />
                            </Button>
                        </div>
                    </CardContent>
                </Card>

                {/* Next Event Card */}
                <Card className="w-full col-span-1 bg-gray-800/50 border-gray-700">
                    <CardHeader>
                        <CardTitle className="text-lg font-semibold text-white">Next Event</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="flex flex-col gap-3">
                            {extendedData.nextEvents.map((event, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-3 p-3 bg-gray-900/50 rounded-lg border border-gray-700"
                                >
                                    <Clock className={cn('h-5 w-5', event.iconColor)} />
                                    <div className="flex-1 flex flex-col">
                                        <span className="text-sm font-medium text-white">{event.title}</span>
                                        <span className="text-xs text-gray-400">{event.time}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* attachments + task history + add coach note */}
            <div className='w-full grid grid-cols-1 lg:grid-cols-3 gap-0 xl:gap-6 space-y-3 xl:space-y-0'>
                {/* Attachments Card */}
                <Card className="bg-gray-800/50 border-gray-700">
                    <CardHeader>
                        <CardTitle className="text-lg font-semibold text-white">Attachments</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="flex flex-col gap-3">
                            {extendedData.attachments.map((file, index) => (
                                <div
                                    key={index}
                                    className="flex items-center justify-between p-3 bg-gray-900/50 rounded-lg border border-gray-700"
                                >
                                    <div className="flex items-center gap-3">
                                        {file.type === 'pdf' ? (
                                            <FileText className="h-5 w-5 text-red-400" />
                                        ) : (
                                            <ImageIcon className="h-5 w-5 text-blue-400" />
                                        )}
                                        <div className="flex flex-col">
                                            <span className="text-sm text-white">{file.name}</span>
                                            <span className="text-xs text-gray-400">{file.size}</span>
                                        </div>
                                    </div>
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        className="bg-gray-800 border-gray-700 text-white hover:bg-gray-700"
                                    >
                                        <Download className="h-4 w-4 mr-2" />
                                        Download
                                    </Button>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                {/* Task History Card */}
                <Card className="bg-gray-800/50 border-gray-700">
                    <CardHeader>
                        <CardTitle className="text-lg font-semibold text-white">Task History</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="flex flex-col gap-3">
                            {extendedData.history.map((item, index) => (
                                <div key={index} className="flex items-start gap-2">
                                    <div className="w-2 h-2 rounded-full bg-blue-500 mt-1.5" />
                                    <div className="flex-1 flex flex-col">
                                        <span className="text-sm text-gray-300">{item.text}</span>
                                        {item.time && (
                                            <span className="text-xs text-gray-500">{item.time}</span>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                {/* Add Coach Note Card */}
                <Card className="bg-gray-800/50 border-gray-700">
                    <CardHeader>
                        <CardTitle className="text-lg font-semibold text-white">Add Coach Note</CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-col gap-3">
                        <Textarea
                            value={coachNote}
                            onChange={(e) => setCoachNote(e.target.value)}
                            placeholder="Add your observations..."
                            className="min-h-24 bg-gray-900/50 border-gray-700 text-white placeholder:text-gray-500"
                        />
                        <Button
                            onClick={onSaveNote}
                            className="w-full bg-green-600 hover:bg-green-700 text-white"
                        >
                            Save Note
                        </Button>
                    </CardContent>
                </Card>
            </div>

        </div>
    )
}

export default GamePlanOverview

