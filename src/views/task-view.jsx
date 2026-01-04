'use client'

import React, { useState } from 'react'
import { Card, CardContent, CardHeader } from '../components/ui/card'
import { Button } from '../components/ui/button'
import { Input } from '../components/ui/input'
import { Progress } from '../components/ui/progress'
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '../components/ui/table'
import { Search, Download, Plus, CheckCircle2, TrendingUp, Target, Star, ChevronLeft, ChevronRight, Activity } from 'lucide-react'
import { cn } from '../lib/utils'
import { OutlineButton, PrimaryButton } from '../components/common/button'
import Pagination from '../components/tasks/pagination'
import { Checkbox } from '../components/ui/checkbox'
import TaskDetails from '../components/tasks/task-details'
import { useRouter } from 'next/navigation'

const taskStats = [
  {
    id: 1,
    label: "Total Tasks",
    value: 30,
    icon: CheckCircle2,
    iconColor: "text-green-400",
    iconBg: "bg-green-500/10"
  },
  {
    id: 2,
    label: "In Progress",
    value: 12,
    icon: Activity,
    iconColor: "text-blue-400",
    iconBg: "bg-blue-500/10"
  },
  {
    id: 3,
    label: "Completed",
    value: 14,
    icon: TrendingUp,
    iconColor: "text-purple-400",
    iconBg: "bg-purple-500/10"
  },
  {
    id: 4,
    label: "Overdue",
    value: 2,
    icon: Target,
    iconColor: "text-orange-400",
    iconBg: "bg-orange-500/10"
  }
]

const tasks = [
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
    rating: 8.2
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
    rating: 7.8
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
    rating: 9.1
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
    rating: null
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
    rating: 8.5
  }
]

const getStatusClasses = (status) => {
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

const getDueDateClasses = (status) => {
  switch (status) {
    case 'danger':
      return 'text-red-400 bg-red-500/10 border-red-500/20 text-xs';
    case 'warning':
      return 'text-orange-400 bg-orange-500/10 border-orange-500/20 text-xs';
    default:
      return 'text-gray-400  bg-gray-500/10 border-gray-500/20 text-xs';
  }
}

const TaskView = () => {

  const router = useRouter()
  const [showTaskDetails, setShowTaskDetails] = useState(false)
  const [selectedTasks, setSelectedTasks] = useState(1)


  const handleSelectTask = (taskId) => {
    setSelectedTasks(taskId)
    setShowTaskDetails(true)
  }



  return (
    <div className='w-full h-full flex flex-col gap-6 p-3 sm:p-4'>
      {/* Header Section */}
      <div className='w-full flex flex-col sm:flex-row md:flex-col lg:flex-row items-start sm:items-center md:items-start lg:items-center justify-between gap-2'>
        <div className='flex flex-col gap-1'>
          <h1 className='text-2xl font-semibold text-white'>Tasks & Training Plans</h1>
          <p className='text-sm text-gray-400'>Manage all training assignments and track progress</p>
        </div>

        {/* Action Buttons */}
        <div className='flex items-center gap-3 mt-2'>
          <OutlineButton className='bg-gray-800/60 border-gray-700 text-gray-300 hover:bg-gray-700/80'>
            <Download className='w-4 h-4' />
            Export Report
          </OutlineButton>
          <PrimaryButton 
          onClick={() => router.push('/add-task')}
          className='bg-blue-600 hover:bg-blue-700 text-white'>
            <Plus className='w-4 h-4' />
            Add Task
          </PrimaryButton>
        </div>
      </div>

      {/* Task Summary Cards */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
        {taskStats.map((stat) => {
          const Icon = stat.icon
          return (
            <Card key={stat.id} className='w-full flex flex-row items-center gap-4 bg-gray-800/60 border-gray-700 rounded-xl p-4'>
              <div className='flex items-center justify-between'>
                <div className={cn('size-10 lg:size-12 flex items-center justify-center rounded-full', stat.iconBg)}>
                  <Icon className={cn('size-5 sm:size-6 md:size-5 lg:size-6', stat.iconColor)} />
                </div>
              </div>
              <div className='flex flex-col gap-1'>
                <p className='text-sm text-gray-400'>{stat.label}</p>
                <h2 className='text-3xl font-bold text-white mb-1'>{stat.value}</h2>
              </div>
            </Card>
          )
        })}
      </div>


      {/* search and filters */}


      <div className='w-full flex flex-col md:flex-col lg:flex-row items-start sm:items-center md:items-start lg:items-center justify-between gap-4'>
        <h2 className='text-xl font-semibold text-white'>All Tasks</h2>

        {/* Search and Filters */}
        <div className='flex  sm:flex-row items-start sm:items-center justify-between gap-4'>
          <div className='w-full  lg:w-[350px] relative'>
            <Search className='size-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400' />
            <Input
              placeholder='Search tasks...'
              className='w-full pl-9 bg-gray-800/60 border-gray-700 text-gray-300 placeholder:text-gray-500'
            />
          </div>
          <OutlineButton className='bg-gray-800/60 border-gray-700 text-gray-300 hover:bg-gray-700/80'>
            All Positions
          </OutlineButton>
          <OutlineButton className='bg-gray-800/60 border-gray-700 text-gray-300 hover:bg-gray-700/80'>
            All Status
          </OutlineButton>
        </div>
      </div>


      {/* All Tasks Section */}
      <Card className='bg-gray-800/60 border-gray-700 py-0 px-0'>
        <CardContent className='p-0'>
          <Table className='min-w-full'>
            <TableHeader className={'hover:bg-purple-500/5'}>
              <TableRow className='border-b border-gray-700 hover:bg-purple-700/5'>
                <TableHead className='py-3 px-4 text-left text-sm font-medium text-gray-400 flex items-center gap-2'>
                  <Checkbox className='size-4 border-gray-500/50 text-gray-500 bg-blue-500/10 checked:bg-blue-500 checked:text-white' />
                  <p className='text-white'>Task Name</p>
                </TableHead>
                <TableHead className='py-3 px-4 text-left text-sm font-medium text-gray-400'>Assigned To</TableHead>
                <TableHead className='py-3 px-4 text-left text-sm font-medium text-gray-400 hidden lg:table-cell'>Created By</TableHead>
                <TableHead className='py-3 px-4 text-left text-sm font-medium text-gray-400'>Start Date</TableHead>
                <TableHead className='py-3 px-4 text-left text-sm font-medium text-gray-400'>Due Date</TableHead>
                <TableHead className='py-3 px-4 text-left text-sm font-medium text-gray-400'>Progress</TableHead>
                <TableHead className='py-3 px-4 text-left text-sm font-medium text-gray-400 hidden sm:table-cell'>Status</TableHead>
                <TableHead className='py-3 px-4 text-left text-sm font-medium text-gray-400'>Rating</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {tasks.map((task) => (
                <TableRow onClick={() => handleSelectTask(task.id)} key={task.id} className='border-b border-gray-700/50 hover:bg-gray-800/30 transition-colors'>
                  {/* Task Name */}
                  <TableCell className='py-3 px-4'>
                    <div className='flex items-center gap-3'>
                      <Checkbox className='size-4 border-gray-500/50 text-gray-500 bg-blue-500/10 checked:bg-blue-500 checked:text-white' />
                      <div className='flex flex-col gap-1'>
                        <span className='text-white font-medium text-sm'>{task.taskName}</span>
                        <span className={`inline-block w-fit text-[10px] font-semibold px-2 py-0.5 rounded-full border ${getCategoryClasses(task.category)}`}>
                          {task.category}
                        </span>
                      </div>
                    </div>
                  </TableCell>

                  {/* Assigned To */}
                  <TableCell className='py-3 px-4'>
                    <div className='flex items-center gap-2'>
                      <div className='flex -space-x-2'>
                        {task.assignedTo.initials.slice(0, 3).map((initial, idx) => (
                          <div
                            key={idx}
                            className='size-8 rounded-full bg-blue-500/50 text-blue-200 border-2 border-gray-800 flex items-center justify-center text-xs font-semibold'
                          >
                            {initial}
                          </div>
                        ))}
                      </div>
                      <div className='flex flex-col'>
                        <span className='text-white text-sm font-medium'>
                          {task.assignedTo.initials.join(' ')}
                          {task.assignedTo.count > 3 && ` +${task.assignedTo.count - 3}`}
                        </span>
                        <span className='text-gray-400 text-xs'>
                          {task.assignedTo.name || task.assignedTo.team}
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

                  {/* Start Date */}
                  <TableCell className='py-3 px-4 text-gray-400 text-sm'>{task.startDate}</TableCell>

                  {/* Due Date */}
                  <TableCell className='py-3 px-4'>
                    <span className={cn(
                      'text-sm px-2 py-1 rounded-md border',
                      task.dueDateStatus !== 'normal' ? getDueDateClasses(task.dueDateStatus) : 'text-gray-400 bg-gray-500/10 border-gray-500/20 text-xs'
                    )}>
                      {task.dueDate}
                    </span>
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
                      {task.status}
                    </span>
                  </TableCell>

                  {/* Rating */}
                  <TableCell className='py-3 px-4'>
                    {task.rating ? (
                      <div className='flex items-center gap-1'>
                        <Star className='w-4 h-4 text-yellow-400 fill-yellow-400' />
                        <span className='text-white font-medium'>{task.rating}</span>
                      </div>
                    ) : (
                      <span className='text-gray-500'>N/A</span>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          {/* Pagination */}
          <Pagination />
        </CardContent>
      </Card>


      {showTaskDetails && <TaskDetails task={tasks[selectedTasks - 1]} open={showTaskDetails} onOpenChange={setShowTaskDetails} />}

    </div>
  )
}

export default TaskView
