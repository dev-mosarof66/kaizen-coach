import React from 'react'
import Overview from './overview/overview'
import Attendence from './attendence/attendence'
import Tasks from './tasks/tasks'

const ProfileContent = ({ selectedTab }) => {
    return (
        <div className='w-full flex flex-col py-2'>
            <Overview selectedTab={selectedTab} />
            <Attendence selectedTab={selectedTab} />
            <Tasks selectedTab={selectedTab} />
        </div>
    )
}

export default ProfileContent