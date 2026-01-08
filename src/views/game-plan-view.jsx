'use client'

import React from 'react'
import { Card, CardContent } from '../components/ui/card'
import { Input } from '../components/ui/input'
import { Progress } from '../components/ui/progress'
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '../components/ui/table'
import { Search, Plus, ChevronDown, ArrowRight } from 'lucide-react'
import { cn } from '../lib/utils'
import { OutlineButton, PrimaryButton } from '../components/common/button'
import Pagination from '../components/common/pagination'
import { Checkbox } from '../components/ui/checkbox'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useTranslation } from '../contexts/translation-context'

export const game_plans = [
    {
        id: 1,
        taskName: "Dribbling Drill",
        category: "Fitness",
        assignedTo: {
            initials: ["MS", "AR"],
            count: 2,
            team: "Team C - U16"
        },
        createdBy: {
            initials: "CS",
            name: "Coach Saleh"
        },
        startDate: "Nov 1",
        dueDate: "Nov 14",
        dueDateStatus: "warning", // orange
        progress: 65,
        status: "In Progress",
        rating: 8.2,
        type: "Plan"
    },
    {
        id: 2,
        taskName: "Passing Accuracy",
        category: "Technical",
        assignedTo: {
            initials: ["TA"],
            count: 1,
            team: "Team A - U18"
        },
        createdBy: {
            initials: "CT",
            name: "Coach Thompson"
        },
        startDate: "Nov 5",
        dueDate: "Nov 20",
        dueDateStatus: "normal",
        progress: 40,
        status: "In Progress",
        rating: 7.8,
        type: "Task"
    },
    {
        id: 3,
        taskName: "Defensive Formation",
        category: "Tactical",
        assignedTo: {
            initials: ["DC", "TW", "MH"],
            count: 3,
            team: "Team C - U16"
        },
        createdBy: {
            initials: "CS",
            name: "Coach Saleh"
        },
        startDate: "Nov 8",
        dueDate: "Nov 15",
        dueDateStatus: "normal",
        progress: 100,
        status: "Completed",
        rating: 9.1,
        type: "Task"
    },
    {
        id: 4,
        taskName: "Sprint Recovery",
        category: "Recovery",
        assignedTo: {
            initials: ["JA"],
            count: 1,
            name: "James Anderson",
            team: "Team C - U16"
        },
        createdBy: {
            initials: "CW",
            name: "Coach Williams"
        },
        startDate: "Nov 3",
        dueDate: "Nov 10",
        dueDateStatus: "danger", // red
        progress: 20,
        status: "Not Started",
        rating: null,
        type: "Plan"
    },
    {
        id: 5,
        taskName: "Set Piece Practice",
        category: "Tactical",
        assignedTo: {
            initials: ["TB"],
            count: 1,
            team: "Team B - U14"
        },
        createdBy: {
            initials: "CM",
            name: "Coach Martinez"
        },
        startDate: "Nov 6",
        dueDate: "Nov 12",
        dueDateStatus: "warning", // orange
        progress: 85,
        status: "In Progress",
        rating: 8.5,
        type: "Plan"
    }
]

const GamePlanView = () => {
    const router = useRouter()
    const { t, language } = useTranslation()
    const isRTL = language === 'ar'
    const [selectedTasks, setSelectedTasks] = useState([])

    const getStatusClasses = (status) => {
        const statusKey = status === 'Completed' ? 'completed' : status === 'In Progress' ? 'inProgress' : 'notStarted'
        switch (status) {
            case 'Completed':
                return 'text-green-400 bg-green-500/10 border-green-500/20';
            case 'In Progress':
                return 'text-blue-400 bg-blue-500/10 border-blue-500/20';
            case 'Not Started':
                return 'text-gray-400 bg-gray-500/10 border-gray-500/20';
            default:
                return 'text-gray-300 bg-gray-600/20 border-gray-600/20';
        }
    }

const getCategoryClasses = (category) => {
    switch (category) {
        case 'Fitness':
            return 'text-blue-300 border-blue-700/50 bg-blue-500/10';
        case 'Technical':
            return 'text-green-300 border-green-700/50 bg-green-500/10';
        case 'Tactical':
            return 'text-orange-300 border-orange-700/50 bg-orange-500/10';
        case 'Recovery':
            return 'text-purple-300 border-purple-700/50 bg-purple-500/10';
        default:
            return 'text-gray-300 border-gray-700 bg-gray-500/10';
    }
}


    const handleSelectTask = (taskId) => {
        setSelectedTasks((prev) => [...prev, taskId])
    }

    const handleDeselectTask = (taskId) => {
        setSelectedTasks((prev) => prev.filter((id) => id !== taskId))
    }

    const handleSelectAllTasks = () => {
        setSelectedTasks(game_plans.map((task) => task.id))
    }

    const handleDeselectAllTasks = () => {
        setSelectedTasks([])
    }

    const getStatusText = (status) => {
        if (status === 'Completed') return t('gamePlansPage.status.completed')
        if (status === 'In Progress') return t('gamePlansPage.status.inProgress')
        if (status === 'Not Started') return t('gamePlansPage.status.notStarted')
        return status
    }

    const getTypeText = (type) => {
        if (type === 'Plan') return t('gamePlansPage.types.plan')
        if (type === 'Task') return t('gamePlansPage.types.task')
        return type
    }
    return (
        <div className='w-full h-full flex flex-col gap-6 p-3 sm:p-4'>
            {/* Header Section */}
            <div className='w-full flex flex-col sm:flex-row md:flex-col lg:flex-row items-start sm:items-center md:items-start lg:items-center justify-between gap-2'>
                <div className='flex flex-col gap-1'>
                    <h1 className='text-2xl font-semibold text-white'>{t('gamePlansPage.title')}</h1>
                    <p className='text-sm text-gray-400'>{t('gamePlansPage.subtitle')}</p>
                </div>

                {/* Action Buttons */}
                <div className='flex items-center gap-3 mt-2'>
                    <OutlineButton className='bg-gray-800/60 border-gray-700 text-gray-300 hover:bg-gray-700/80'>
                        {t('gamePlansPage.thisSeason')}
                        <ChevronDown className='size-4' />
                    </OutlineButton>
                    <PrimaryButton
                        onClick={() => router.push('/add-task')}
                        className='bg-blue-600 hover:bg-blue-700 text-white'>
                        <Plus className='w-4 h-4' />
                        {t('gamePlansPage.addNewPlan')}
                    </PrimaryButton>
                </div>
            </div>

            {/* search and filters */}


            <div className='w-full flex flex-col md:flex-col lg:flex-row items-start md:items-center lg:items-center justify-between gap-4'>
                <h2 className='text-xl font-semibold text-white'>{t('gamePlansPage.allTasks')}</h2>

                {/* Search and Filters */}
                <div className='flex  sm:flex-row items-start sm:items-center justify-between gap-4'>
                    <div className='w-full  lg:w-[350px] relative'>
                        <Search className='size-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400' />
                        <Input
                            placeholder={t('gamePlansPage.searchTasks')}
                            className='w-full pl-9 bg-gray-800/60 border-gray-700 text-gray-300 placeholder:text-gray-500'
                        />
                    </div>
                    <OutlineButton className='bg-gray-800/60 border-gray-700 text-gray-300 hover:bg-gray-700/80'>
                        {t('gamePlansPage.allPositions')}
                    </OutlineButton>
                    <OutlineButton className='bg-gray-800/60 border-gray-700 text-gray-300 hover:bg-gray-700/80'>
                        {t('gamePlansPage.allStatus')}
                    </OutlineButton>
                </div>
            </div>


            {/* All Tasks Section */}
            <Card className='bg-gray-800/60 border-gray-700 py-0 px-0'>
                <CardContent className='p-0 px-2'>
                    <Table className='min-w-full'>
                        <TableHeader>
                            <TableRow className='border-b border-gray-700 hover:bg-transparent'>
                                <TableHead className='py-3 px-4 text-left text-sm font-medium text-gray-400 flex items-center gap-2'>
                                    <Checkbox
                                        checked={selectedTasks.length === game_plans.length} onClick={() =>
                                            selectedTasks.length > 0 ?
                                                handleDeselectAllTasks() :
                                                handleSelectAllTasks()
                                        } className='size-4 border-gray-500/50 text-gray-500 bg-blue-500/10 checked:bg-blue-500 checked:text-white cursor-pointer active:scale-95 transition-all duration-300 delay-75' />
                                    <p className='text-white'>{t('gamePlansPage.tableHeaders.taskPlanName')}</p>
                                </TableHead>
                                <TableHead className='py-3 px-4 text-left text-sm font-medium text-gray-400 hidden lg:table-cell'>{t('gamePlansPage.tableHeaders.createdBy')}</TableHead>
                                <TableHead className='py-3 px-4 text-left text-sm font-medium text-gray-400'>{t('gamePlansPage.tableHeaders.assignedTo')}</TableHead>
                                <TableHead className='py-3 px-4 text-left text-sm font-medium text-gray-400'>{t('gamePlansPage.tableHeaders.type')}</TableHead>
                                <TableHead className='py-3 px-4 text-left text-sm font-medium text-gray-400'>{t('gamePlansPage.tableHeaders.startDueDate')}</TableHead>
                                <TableHead className='py-3 px-4 text-left text-sm font-medium text-gray-400'>{t('gamePlansPage.tableHeaders.progress')}</TableHead>
                                <TableHead className='py-3 px-4 text-left text-sm font-medium text-gray-400 hidden sm:table-cell'>{t('gamePlansPage.tableHeaders.status')}</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {game_plans.map((task) => {

                                const isSelected = selectedTasks.includes(task.id)


                                return (
                                    <TableRow onClick={() => router.push(`/game-plans/${task.id}`)} key={task.id} className='border-b border-gray-700/50 hover:bg-gray-800/30 active:scale-95 transition-all duration-300 delay-75  cursor-pointer relative'>
                                        {/* Task Name */}
                                        <TableCell className='py-3 px-4'>
                                            <div className='flex items-center gap-1 relative'>
                                                <Checkbox
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        isSelected ? handleDeselectTask(task.id) : handleSelectTask(task.id)
                                                    }}
                                                    checked={isSelected}
                                                    className='size-4  transform -translate-y-1/2 border-gray-500/50 text-gray-500 bg-blue-500/10 checked:bg-blue-500 checked:text-white backdrop-blur-sm cursor-pointer active:scale-95 transition-all duration-300 delay-75' />
                                                <div className='flex flex-col gap-1 ml-2'>
                                                    <span className='text-white font-medium text-sm'>{task.taskName}</span>
                                                    <span className={`inline-block w-fit text-[10px] font-semibold px-2 py-0.5 rounded-full border ${getCategoryClasses(task.category)}`}>
                                                        {task.category}
                                                    </span>
                                                </div>
                                            </div>
                                        </TableCell>

                                        {/* Created By */}
                                        <TableCell className='py-3 px-4 hidden lg:table-cell'>
                                            <div className='flex items-center gap-2'>
                                                <div className='size-8 rounded-full bg-linear-to-br from-blue-500 to-purple-500 text-purple-100 border border-gray-700 flex items-center justify-center text-xs font-semibold'>
                                                    {task.createdBy.initials}
                                                </div>
                                                <span className='text-gray-300 text-sm'>{task.createdBy.name}</span>
                                            </div>
                                        </TableCell>


                                        {/* Assigned To */}
                                        <TableCell className='py-3 px-4'>
                                            <div className='flex items-center gap-2'>
                                                <div className='flex -space-x-2'>
                                                    {task.assignedTo.initials.slice(0, 2).map((initial, idx) => (
                                                        <div
                                                            key={idx}
                                                            className='size-8 rounded-full bg-blue-500/50 text-blue-200 border-2 border-gray-800 flex items-center justify-center text-xs font-semibold'
                                                        >
                                                            {initial}{idx + 1}
                                                        </div>
                                                    ))}
                                                </div>
                                                <div className='flex flex-col'>
                                                    <span className='text-gray-300 text-sm'>
                                                        {task.assignedTo.team}
                                                    </span>
                                                </div>
                                            </div>
                                        </TableCell>


                                        {/* Type */}
                                        <TableCell className='py-3 px-4 text-gray-400 text-sm'>{getTypeText(task.type)}</TableCell>

                                        {/* Start/Due Date */}
                                        <TableCell className='py-3 px-4 flex flex-col gap-1'>
                                            <p className={cn(
                                                'text-sm text-gray-400')}>
                                                {task.startDate}
                                            </p>
                                            <p className={cn('pl-3 text-sm text-orange-400 flex items-center gap-1', isRTL && 'flex-row-reverse pr-3 pl-0')}>
                                                <ArrowRight className={cn('size-4', isRTL && 'rotate-180')} /> {task.dueDate}
                                            </p>
                                        </TableCell>

                                        {/* Progress */}
                                        <TableCell className='py-3 px-4'>
                                            <div className='flex flex-col items-start gap-2 min-w-[120px]'>
                                                <p className='text-xs text-blue-400'>{task.progress}%</p>
                                                <Progress
                                                    value={task.progress}
                                                    className='w-full h-2 bg-gray-700'
                                                />
                                            </div>
                                        </TableCell>

                                        {/* Status */}
                                        <TableCell className='py-3 px-4 hidden sm:table-cell'>
                                            <span className={cn('inline-block text-[10px] font-semibold px-2 py-1 rounded-md border', getStatusClasses(task.status))}>
                                                {getStatusText(task.status)}
                                            </span>
                                        </TableCell>
                                    </TableRow>
                                )
                            })}
                        </TableBody>
                    </Table>

                    {/* Pagination */}
                    <Pagination />
                </CardContent>
            </Card>

        </div>
    )
}

export default GamePlanView
