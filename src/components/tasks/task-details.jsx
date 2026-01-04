'use client'

import React from 'react'
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
} from '../ui/sheet'
import { Avatar, AvatarFallback } from '../ui/avatar'
import { Badge } from '../ui/badge'
import { Button } from '../ui/button'
import { cn } from '../../lib/utils'
import {
    X,
    Edit,
    CheckCircle2,
    Trash2,
    Star,
    Lightbulb,
    Target,
    Activity,
    Dumbbell,
    GitBranch
} from 'lucide-react'

// Mock task details data from the image
export const task_details = {
    id: 1,
    taskName: "Dribbling Drill",
    category: "Fitness",
    status: "In Progress",
    createdBy: {
        initials: "CS",
        name: "Coach Saleh"
    },
    startDate: "Nov 1",
    dueDate: "Nov 14",
    progress: 40,
    rating: 8.2,
    assignedPlayers: [
        {
            initials: "MS",
            name: "Marcus Silva",
            status: "Completed"
        },
        {
            initials: "AR",
            name: "Ali Rahman",
            status: "In Progress"
        }
    ],
    comments: [
        {
            id: 1,
            author: {
                initials: "CS",
                name: "Coach Saleh"
            },
            text: "Great progress! Keep it up.",
            time: "2h ago"
        },
        {
            id: 2,
            author: {
                initials: "AR",
                name: "Ali Rahman"
            },
            text: "Working on improving my technique.",
            time: "5h ago"
        },
        {
            id: 3,
            author: {
                initials: "MS",
                name: "Marcus Silva"
            },
            text: "Completed all drills successfully.",
            time: "1d ago"
        }
    ]
}






const renderCategoryIcon = (category) => {
    switch (category) {
        case 'Fitness':
            return <GitBranch className="h-5 w-5" />
        case 'Technical':
            return <Target className="h-5 w-5" />
        case 'Tactical':
            return <Lightbulb className="h-5 w-5" />
        case 'Recovery':
            return <Activity className="h-5 w-5" />
        default:
            return <Lightbulb className="h-5 w-5" />
    }
}

const getCategoryClasses = (category) => {
    switch (category) {
        case 'Fitness':
            return 'text-blue-300 border-blue-700/50 bg-blue-500/10'
        case 'Technical':
            return 'text-green-300 border-green-700/50 bg-green-500/10'
        case 'Tactical':
            return 'text-orange-300 border-orange-700/50 bg-orange-500/10'
        case 'Recovery':
            return 'text-purple-300 border-purple-700/50 bg-purple-500/10'
        default:
            return 'text-gray-300 border-gray-700 bg-gray-500/10'
    }
}

const getStatusClasses = (status) => {
    switch (status) {
        case 'Completed':
            return 'text-green-400 bg-green-500/10 border-green-500/20'
        case 'In Progress':
            return 'text-blue-400 bg-blue-500/10 border-blue-500/20'
        case 'Not Started':
            return 'text-gray-400 bg-gray-500/10 border-gray-500/20'
        default:
            return 'text-gray-300 bg-gray-600/20 border-gray-600/20'
    }
}

const CircularProgress = ({ value, size = 80, strokeWidth = 8 }) => {
    const radius = (size - strokeWidth) / 2
    const circumference = radius * 2 * Math.PI
    const offset = circumference - (value / 100) * circumference

    return (
        <div className="relative" style={{ width: size, height: size }}>
            <svg
                width={size}
                height={size}
                className="transform -rotate-90"
            >
                {/* Background circle */}
                <circle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    stroke="currentColor"
                    strokeWidth={strokeWidth}
                    fill="none"
                    className="text-gray-700"
                />
                {/* Progress circle */}
                <circle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    stroke="currentColor"
                    strokeWidth={strokeWidth}
                    fill="none"
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                    strokeLinecap="round"
                    className="text-blue-500 transition-all duration-500"
                />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-sm font-semibold text-white">{value}%</span>
            </div>
        </div>
    )
}

const TaskDetails = ({ open, onOpenChange, task }) => {
    const taskData = task || task_details

    if (!taskData) return null

    let assignedPlayers = []
    if (taskData.assignedPlayers && Array.isArray(taskData.assignedPlayers)) {
        assignedPlayers = taskData.assignedPlayers
    } else if (taskData.assignedTo && Array.isArray(taskData.assignedTo.initials)) {
        assignedPlayers = taskData.assignedTo.initials.map((initial, index) => ({
            initials: initial,
            name: taskData.assignedTo.names?.[index] || `${initial} Player`,
            status: index === 0 ? 'Completed' : 'In Progress' // Default status
        }))
    } else {
        assignedPlayers = [
            { initials: 'MS', name: 'Marcus Silva', status: 'Completed' },
            { initials: 'AR', name: 'Ali Rahman', status: 'In Progress' }
        ]
    }

    const comments = taskData.comments || [
        {
            id: 1,
            author: { initials: 'CS', name: 'Coach Saleh' },
            text: 'Great progress! Keep it up.',
            time: '2h ago'
        }
    ]

    return (
        <Sheet open={open} onOpenChange={onOpenChange} className='shadow-md shadow-black'>
            <SheetContent
                side="right"
                className="w-96 bg-gray-900 border-gray-800 text-white overflow-y-auto"
            >
                <SheetHeader className="border-b border-gray-800">
                    <div className="flex items-center justify-between">
                        <SheetTitle className="text-white text-base font-semibold">
                            Task Details
                        </SheetTitle>
                    </div>

                    <Button variant="ghost" className="absolute top-4 right-4 size-6 flex items-center justify-center hover:bg-gray-800/60 rounded-full hover:text-white" onClick={() => onOpenChange(false)}>
                        <X className="size-4" />
                    </Button>
                </SheetHeader>

                <div className="w-full px-4 flex flex-col gap-4">
                    {/* Task Title & Icon */}
                    <div className="w-full flex flex-col gap-3 border-b border-gray-800 pb-4">
                        <div className="flex items-center gap-3">
                            <div className="p-3 rounded-full bg-blue-500/20 text-blue-400 size-10 flex items-center justify-center">
                                <Dumbbell className="h-5 w-5" />
                            </div>
                            <div className="flex flex-col gap-1">
                                <h2 className="text-base font-semibold text-white">{task.taskName}</h2>
                                {/* Tags */}
                                <div className="flex items-center gap-2 flex-wrap">
                                    {task.category && (
                                        <Badge
                                            variant="outline"
                                            className={cn(
                                                'text-[9px] font-semibold px-2 py-0.5 rounded-full border',
                                                getCategoryClasses(task.category)
                                            )}
                                        >
                                            {task.category}
                                        </Badge>
                                    )}
                                    {task.status && (
                                        <Badge
                                            variant="outline"
                                            className={cn(
                                                'text-[9px] font-semibold px-2 py-0.5 rounded-md border',
                                                getStatusClasses(task.status)
                                            )}
                                        >
                                            {task.status}
                                        </Badge>
                                    )}
                                </div>
                            </div>
                        </div>
                        {/* Creator */}
                        {task.createdBy && (
                            <div className="w-full flex items-center gap-2 text-gray-400 text-sm">
                                <span>Created by</span>
                                <span className="text-gray-300 text-sm">{task.createdBy.name}</span>
                            </div>
                        )}
                    </div>





                    {/* Progress Summary */}
                    <div className="w-full flex flex-col gap-4 border-b border-gray-800 pb-4">
                        <h1 className="text-base font-semibold text-white">Progress Summary</h1>
                        <div className="w-full flex flex-col items-center justify-center gap-4 relative">
                            <div className=''>
                                <CircularProgress size={120} value={task.progress || 0} />
                                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                    <span className="text-xs text-gray-400">Completed</span>
                                </div>
                            </div>
                            <p className="text-xs font-semibold text-gray-400">
                                Due: {task.dueDate}
                            </p>
                        </div>
                    </div>

                    {/* Assigned Players */}
                    <div className="flex flex-col gap-3 border-b border-gray-800 pb-4">
                        <h3 className="text-base font-semibold text-white">Assigned Players</h3>
                        <div className="flex flex-col gap-3">
                            {assignedPlayers.map((player, index) => {

                                const statusColor = player.status === 'Completed' ? 'bg-green-500 text-white' : 'bg-orange-500 text-white'
                                return (
                                    player && (
                                        <div
                                            key={player.initials || `player-${index}`}
                                            className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-lg border border-gray-700 w-full"
                                        >
                                            <div className='relative'>
                                                <Avatar className="size-10">
                                                    <AvatarFallback className="bg-blue-500/50 text-blue-200 text-sm border-2 border-gray-700">
                                                        {player.initials || 'N/A'}
                                                    </AvatarFallback>
                                                </Avatar>
                                                <div className={cn('absolute right-0 bottom-1 size-2 rounded-full', statusColor)}></div>
                                            </div>
                                            <div className="flex flex-col gap-1">
                                                <span className="text-sm font-medium text-white">{player.name || 'Unknown Player'}</span>
                                                <span className="text-xs text-gray-400">{player.status || ''}</span>
                                            </div>
                                        </div>
                                    )
                                )
                            })}
                        </div>
                    </div>

                    {/* Average Rating */}
                    {taskData.rating && (
                        <div className="flex flex-col gap-2 border-b border-gray-800 pb-4">
                            <h3 className="text-base font-semibold text-white">Average Rating</h3>
                            <div className="flex flex-col items-start gap-3">
                                <div>
                                    <span className="text-xl font-semibold text-white">
                                        {taskData.rating}
                                    </span>
                                    <span className="text-sm text-gray-400">/ 10</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <Star
                                            key={star}
                                            className={cn(
                                                'h-4 w-4',
                                                star <= Math.round(taskData.rating / 2)
                                                    ? 'text-yellow-400 fill-yellow-400'
                                                    : 'text-gray-600'
                                            )}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Comments */}
                    <div className="flex flex-col gap-3">
                        <div className="flex items-center justify-between">
                            <h3 className="text-base font-semibold text-white">Comments</h3>
                            <span className="text-xs text-gray-400 font-semibold bg-blue-500/10 size-6 flex items-center justify-center rounded-full border border-blue-500/20">{comments.length}</span>
                        </div>
                        <div className="flex flex-col gap-3">
                            {comments.map((comment) => (
                                comment?.author && (
                                    <div
                                        key={comment.id || (comment.author?.initials || '') + (comment.time || '')}
                                        className="flex flex-col gap-2 items-start p-3 bg-gray-950 rounded-lg border border-gray-700/70"
                                    >
                                        <div className='flex items-center gap-2'>
                                            <Avatar className="size-8">
                                                <AvatarFallback className="bg-blue-500/50 text-blue-200 text-xs border border-gray-700">
                                                    {comment.author?.initials || 'N/A'}
                                                </AvatarFallback>
                                            </Avatar>
                                            <div className='flex items-center justify-between gap-1'>
                                                <p className="text-sm font-medium text-white">{comment.author?.name || 'Unknown'}</p>
                                                <p className="text-xs text-gray-400 px-2">{comment.time || ''}</p>
                                            </div>
                                        </div>
                                        <p className="text-sm text-gray-300">{comment.text || ''}</p>
                                    </div>
                                )
                            ))}
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col gap-2 pt-4 border-t border-gray-800 pb-16">
                        <Button
                            className="w-full bg-blue-700 hover:bg-blue-800 text-white"
                            onClick={() => {
                                console.log('Edit task')
                            }}
                        >
                            <Edit className="h-4 w-4 mr-2" />
                            Edit Task
                        </Button>
                        <Button
                            className="w-full bg-gray-700/40 hover:bg-gray-800/60 text-green-400 border border-green-500/10 hover:text-green-400/80"
                            onClick={() => {
                                console.log('Mark as completed')
                            }}
                        >
                            <CheckCircle2 className="h-4 w-4 mr-2" />
                            Mark as Completed
                        </Button>
                        <Button
                            variant="destructive"
                            className="w-full bg-gray-700/40 hover:bg-gray-800/60 text-red-400 border border-red-500/10 hover:text-red-400/80"
                            onClick={() => {
                                // Handle delete
                                console.log('Delete task')
                            }}
                        >
                            <Trash2 className="h-4 w-4 mr-2" />
                            Delete Task
                        </Button>
                    </div>
                </div>
            </SheetContent>
        </Sheet >
    )
}

export default TaskDetails
