'use client';
import React, { useState } from 'react'

import Header from '../components/players/Header'
import PlayersList from '../components/players/players-list'
import Stats from '../components/players/stat-card'
import TabsFilter from '../components/players/tabs'
import Pagination from '../components/players/pagination'


const tabs = ["All Teams", "All Positions", "All Status", "More Filters"];



const PlayersView = () => {
    const [tab, setTab] = useState("All Teams")
    return (
        <div className='w-full h-full flex flex-col gap-6 p-3 sm:p-4'>
            <Header />
            <Stats />
            <TabsFilter tab={tab} setTab={setTab} tabs={tabs}/>
            <PlayersList tab={tab} />
            <Pagination />
        </div>
    )
}

export default PlayersView
