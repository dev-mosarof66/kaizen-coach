'use client'
import NavButtons from '../components/player-profile/nav-buttons'
import Navigation from '../components/player-profile/navigation'
import ProfileCard from '../components/player-profile/profile-card'
import ProfileContent from '../components/player-profile/profile-content'
import ProfileTabs from '../components/player-profile/profile-tabs'
import React, { useState } from 'react'

const PlayerProfileView = () => {
    const [selectedTab, setSelectedTab] = useState("Overview")
    return (
        <div className='w-full flex flex-col gap-4 p-3'>
            <Navigation />
            <NavButtons />
            <ProfileCard selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
            <ProfileContent selectedTab={selectedTab} />
        </div>
    )
}

export default PlayerProfileView