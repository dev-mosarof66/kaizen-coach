'use client'
import { PrimaryButton } from '../../common/button'
import { Button } from '../../ui/button'
import { Card, CardContent, CardHeader } from '../../ui/card'
import { Progress } from '../../ui/progress'
import { ChevronDown } from 'lucide-react'
import React from 'react'
import { FaPlus } from 'react-icons/fa'

const task_list = [
  {
    "Task": "Sprint Training (5x200m)",
    "Category": "Speed",
    "Assigned By": "Coach Thompson",
    "Due": "2025-11-08",
    "Progress": "100%",
    "Status": "Completed",
    "Rating": 8.5
  },
  {
    "Task": "Defensive Positioning Drills",
    "Category": "Defense",
    "Assigned By": "Coach Thompson",
    "Due": "2025-11-10",
    "Progress": "60%",
    "Status": "In Progress",
    "Rating": null
  },
  {
    "Task": "1v1 Defending Practice",
    "Category": "Defense",
    "Assigned By": "Assistant Coach",
    "Due": "2025-11-12",
    "Progress": "0%",
    "Status": "Not Started",
    "Rating": null
  },
  {
    "Task": "Recovery & Stretching",
    "Category": "Fitness",
    "Assigned By": "Physio",
    "Due": "2025-11-09",
    "Progress": "100%",
    "Status": "Completed",
    "Rating": null
  }
]

const getStatusClasses = (status) => {
  switch (status) {
    case 'Completed':
      return 'text-green-400 bg-green-500/10';
    case 'In Progress':
      return 'text-blue-400 bg-blue-500/10';
    case 'Not Started':
      return 'text-gray-400 bg-gray-500/10';
    default:
      return 'text-gray-300 bg-gray-600/20';
  }
}

const getCategoryClasses = (category) => {
  switch (category) {
    case 'Speed':
      return 'text-orange-300 border-orange-700/50';
    case 'Defense':
      return 'text-cyan-300 border-cyan-700/50';
    case 'Fitness':
      return 'text-lime-300 border-lime-700/50';
    default:
      return 'text-gray-300 border-gray-700';
  }
}

const TaskList = () => {
  return (
    <Card className="w-full bg-gray-800 border border-gray-700/50 text-white rounded-xl p-2 sm:p-4">

      <CardHeader className="p-0">
        <div className='w-full flex flex-col gap-4 sm:flex-row items-center justify-between'>
          <p className="text-xl font-bold">Tasks</p>
          <div className='flex flex-wrap justify-end gap-2'>
            <Button
              size={'sm'}
              className={'bg-gray-700/50 border border-gray-600 hover:bg-gray-700/80 text-white flex items-center gap-1'}
            >
              All Categories
              <ChevronDown className='w-4 h-4 text-gray-400' />
            </Button>

            <Button
              size={'sm'}
              className={'bg-gray-700/50 border border-gray-600 hover:bg-gray-700/80 text-white flex items-center gap-1'}
            >
              All Status
              <ChevronDown className='w-4 h-4 text-gray-400' />
            </Button>

            <PrimaryButton
              onClick={() => console.log('assign task')}
            >
              <FaPlus className='w-3 h-3' />
              Assign Task
            </PrimaryButton>
          </div>
        </div>
      </CardHeader>

      <CardContent className="p-0">
        <div className="overflow-x-auto">
          <table className="min-w-full table-fixed">
            <thead>
              <tr className='text-sm text-gray-400'>
                <th className="py-3 px-2 border-b border-gray-700/70 text-left w-[25%] font-medium">Task</th>
                <th className="py-3 px-2 border-b border-gray-700/70 text-left w-[12%] font-medium">Category</th>
                <th className="hidden lg:table-cell py-3 px-2 border-b border-gray-700/70 text-left w-[15%] font-medium">Assigned By</th>
                <th className="py-3 px-2 border-b border-gray-700/70 text-left w-[12%] font-medium">Due</th>
                <th className="py-3 px-2 border-b border-gray-700/70 text-left w-[12%] font-medium">Progress</th>
                <th className="hidden sm:table-cell py-3 px-2 border-b border-gray-700/70 text-left w-[12%] font-medium">Status</th>
                <th className="py-3 px-2 border-b border-gray-700/70 text-left w-[10%] font-medium">Rating</th>
              </tr>
            </thead>
            <tbody>
              {task_list.map((item, index) => (
                <tr key={index} className='text-gray-200 border-b border-gray-700/30 last:border-b-0 text-sm'>
                  <td className="py-3 px-2 font-medium">{item.Task}</td>

                  <td className="py-3 px-2">
                    <span className={`inline-block text-xs font-semibold px-2 py-0.5 rounded-full border ${getCategoryClasses(item.Category)}`}>
                      {item.Category}
                    </span>
                  </td>

                  <td className="hidden lg:table-cell py-3 px-2 text-gray-400">{item['Assigned By']}</td>

                  <td className="py-3 px-2 text-gray-400">{item.Due}</td>

                  {/* Progress (Progress Bar) */}
                  <td className="py-3 px-2">
                    <div className='flex items-center gap-2'>
                      <span className='text-xs text-blue-400 w-8'>{item.Progress}</span>

                      <Progress
                        value={parseInt(item.Progress)}
                        className="h-1.5 w-full bg-gray-700"
                        indicatorClassName={item.Status === 'Completed' ? 'bg-green-500' : 'bg-blue-500'}
                      />
                    </div>
                  </td>

                  {/* Status (Styled Badge) */}
                  <td className="hidden sm:table-cell py-3 px-2">
                    <span className={`inline-block text-xs font-semibold px-2 py-0.5 rounded ${getStatusClasses(item.Status)}`}>
                      {item.Status}
                    </span>
                  </td>

                  {/* Rating */}
                  <td className="py-3 px-2 font-medium">
                    {item.Rating !== null ? item.Rating : '—'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  )
}

export default TaskList