import React from 'react'
import Header from '../components/teams-overview/header'
import TeamProfileCard from '../components/teams-overview/team-profile-card'
import TeamStats from '../components/teams-overview/team-stats'
import { Card } from '../components/ui/card'
import TabHeader from '../components/teams-overview/tab-header'
import TeamList from '../components/teams-overview/team-list'

const TeamsOverview = () => {
  return (
    <div className='w-full h-full flex flex-col gap-4 p-3 sm:p-4 pb-8'>
      <Header />
      <TeamProfileCard />
      <TeamStats />
      <TabHeader />
      <TeamList />
    </div>
  )
}


export default TeamsOverview
