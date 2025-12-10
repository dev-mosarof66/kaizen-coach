import React from 'react'
import ProfileStatCard from '../profile-stat-card'


import { CiCircleCheck, CiClock2 } from 'react-icons/ci';
import { SlBadge } from 'react-icons/sl';
import { IoCalendarNumberOutline } from 'react-icons/io5';


const stats = [
    {
        id: 1,
        label: "Attendence Rate",
        rate: "92%",
        icon: CiCircleCheck
    },
    {
        id: 2,
        label: "Late Count",
        count: 2,
        icon: CiClock2
    },
    {
        id: 3,
        label: "Current Streak",
        count: "12 days",
        icon: SlBadge 
    },
    {
        id: 4,
        label: "Total Sessions",
        count: "18 month",
        icon: IoCalendarNumberOutline
    },
]

const colors = [
    "bg-green-500/10 text-green-400",
    "bg-amber-500/10 text-amber-400",
    "bg-purple-500/10 text-purple-400",
    "bg-blue-500/10 text-blue-400",
]


const Tasks = ({selectedTab}) => {
    return (
        <div>
            {
                selectedTab === 'Tasks' &&
                <div className='w-full flex flex-col gap-4'>
                    <ProfileStatCard colors={colors} stats={stats} />
                    <div className='w-full flex flex-col gap-4'>
  
                    </div>
                </div>
            }
        </div>
    )
}

export default Tasks