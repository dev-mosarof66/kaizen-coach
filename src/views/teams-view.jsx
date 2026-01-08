'use client'
import Header from '../components/teams/header'
import Pagination from '../components/common/pagination'
import Stats from '../components/teams/stats'
import TeamList from '../components/teams/team-list'
import TeamModal from '../components/teams/team-modal'
import TeamsTab from '../components/teams/teams-tab'
import React, { useState } from 'react'

const TeamView = () => {
    const [showModal, setShowModal] = useState(null);

    return (
        <div className='w-full h-full flex flex-col gap-4 p-3 sm:p-4 relative'>
            <Header />
            <Stats />
            <TeamsTab />
            <TeamList setShowModal={setShowModal} />
            <Pagination />
            <TeamModal showModal={showModal} setShowModal={setShowModal} teamId={showModal} />
        </div>
    )
}

export default TeamView