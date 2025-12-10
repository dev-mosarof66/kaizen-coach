import React from 'react'
import ProfileStatCard from '../profile-stat-card'
import DevelopmentFocus from './development-focus'
import LastMatchSummary from './last-match-summary'
import RecentActivity from './recent-activity'
import CoachNotes from './coach-notes'


import { Heart, TrendingUp, Trophy } from 'lucide-react'
import { TbTarget } from "react-icons/tb";


const stats = [
    {
        id: 1,
        label: "Trophy",
        count: 42,
        icon: Trophy
    },
    {
        id: 2,
        label: "Health",
        count: "Good",
        icon: Heart
    },
    {
        id: 3,
        label: "Game Played",
        count: 187,
        icon: TrendingUp
    },
    {
        id: 4,
        label: "Tasks",
        count: "2 Active",
        due: "1 due soon",
        icon: TbTarget
    },
]

const colors = [
    "bg-green-500/10 text-green-400",
    "bg-blue-500/10 text-blue-400",
    "bg-purple-500/10 text-purple-400",
    "bg-amber-500/10 text-amber-400",
]


const Overview = ({selectedTab}) => {
    return (
        <div>
            {
                selectedTab === 'Overview' &&
                <div className='w-full flex flex-col gap-4'>
                    <ProfileStatCard colors={colors} stats={stats} />
                    <div className='w-full grid grid-cols-1 sm:grid-cols-2 gap-4'>
                        <DevelopmentFocus />
                        <LastMatchSummary />
                        <RecentActivity />
                        <CoachNotes />
                    </div>
                </div>
            }
        </div>
    )
}

export default Overview