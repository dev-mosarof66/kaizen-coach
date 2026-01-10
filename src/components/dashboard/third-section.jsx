import React from 'react'
import UpcomingEvents from './upcoming-events'
import PlayerRequests from './player-requests'

const ThirdSection = () => {
    return (
        <div className='w-full grid grid-cols-1 xl:grid-cols-3 space-y-4 xl:space-y-0 xl:gap-2 my-6'>
            <UpcomingEvents />
            <PlayerRequests />
        </div>
    )
}

export default ThirdSection