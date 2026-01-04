'use client'
import Header from '../components/matches/header'
import UpcomingMatches from '../components/matches/upcoming-matches'
import MatchHistory from '../components/matches/match-history'



const MatchesView = () => {



  return (
    <div className='w-full h-full flex flex-col gap-6'>
      {/* Header Section */}
      <Header />
      {/* Upcoming Matches Section */}
      <UpcomingMatches />

      {/* Match History Section */}
      <MatchHistory />

    </div>
  )
}

export default MatchesView
