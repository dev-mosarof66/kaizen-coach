import BasicInfoCard from '../components/add-new-player/basic-info-card'
import { SubmitButtons, TopButtons } from '../components/add-new-player/button'
import ContactInfoCard from '../components/add-new-player/contact-info-card'
import Header from '../components/add-new-player/header'
import Navigation from '../components/add-new-player/navigation'
import Notes from '../components/add-new-player/notes'
import PositionPhysicalInfoCard from '../components/add-new-player/position-physical-info-card'
import ProfilePictureCard from '../components/add-new-player/profile-picture-card'
import React from 'react'

const AddNewPlayerView = () => {
    return (
        <div className='w-full flex flex-col gap-2 p-3 pb-8'>
            {/* navigation + save button  */}
            <div className='w-full flex flex-col sm:flex-row items-start sm:items-center gap-2 justify-between'>
                <Navigation />
                <TopButtons />
            </div>
            <div className='w-full max-w-5xl mx-auto flex flex-col gap-8 py-4'>
                <Header />
                <ProfilePictureCard />
                <BasicInfoCard />
                <PositionPhysicalInfoCard />
                <ContactInfoCard />
                <Notes />
                <SubmitButtons />
            </div>
        </div>
    )
}

export default AddNewPlayerView