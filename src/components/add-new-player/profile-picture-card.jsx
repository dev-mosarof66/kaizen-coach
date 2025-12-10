'use client'
import React, { useState } from 'react'
import { Card, CardContent, CardHeader } from '../ui/card'
import { FiUser } from "react-icons/fi";
import { OutlineButton } from '../common/button';
import { Input } from '../ui/input';
import Image from 'next/image';

const ProfilePictureCard = () => {
    const [profilePicture, setProfilePicture] = useState(null);


    const handleProfilePictureChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setProfilePicture(file);
        }
    }

    return (
        <Card className={'bg-gray-800/70 border-gray-700/50 shadow-sm inset-0'}>
            <CardHeader>
                <div className='w-full flex items-center gap-2'>
                    <FiUser className='text-blue-500 text-xl' />
                    <p className='text-white'>Profile Picture</p>
                </div>
            </CardHeader>
            <CardContent>
                <div className='w-full flex items-center gap-4'>
                    <div className='size-16 sm:size-24 rounded-full bg-linear-to-br from-blue-500 via-blue-500 to-purple-500 text-white flex items-center justify-center overflow-hidden'>
                        {profilePicture ?
                            <Image
                                src={URL.createObjectURL(profilePicture)} alt='profile picture'
                                width={64}
                                height={64}
                                className='object-cover w-full h-full' />
                            : <FiUser className='text-white text-xl' />}
                    </div>
                    <div className='flex flex-col gap-2'>
                        <div className='relative cursor-pointer'>
                            <OutlineButton onClick={() => document.getElementById('profilePictureInput').click()}>
                                Upload Photo
                            </OutlineButton>
                            <Input
                                id='profilePictureInput'
                                type='file'
                                accept='image/*'
                                className='w-full hidden absolute inset-0 opacity-0 cursor-pointer'
                                onChange={handleProfilePictureChange}
                            />
                        </div>
                        <p className='text-xs sm:text-sm text-gray-300'>JPG or PNG. Max of 2MB</p>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

export default ProfilePictureCard