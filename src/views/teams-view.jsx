'use client'
import Header from '@/components/teams/header'
import Pagination from '@/components/teams/pagination'
import Stats from '@/components/teams/stats'
import TeamList from '@/components/teams/team-list'
import TeamsTab from '@/components/teams/teams-tab'
import React from 'react'

const TeamView = () => {
    return (
        <div className='w-full h-full flex flex-col gap-4 p-3 sm:p-4'>
            <Header />
            <Stats />
            <TeamsTab />
            <TeamList />
            <Pagination />
        </div>
    )
}

export default TeamView