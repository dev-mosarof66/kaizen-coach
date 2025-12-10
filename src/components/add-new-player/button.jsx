'use client'
import React from 'react'
import { Button } from '../ui/button'
import { FaSave } from 'react-icons/fa'
import { OutlineButton, PrimaryButton } from '../common/button'
import { useRouter } from 'next/navigation'



export const TopButtons = () => {

    const router = useRouter();

    return (
        <div className='flex items-center gap-2 py-2'>
            <OutlineButton onClick={() => router.back()}>
                Cancel
            </OutlineButton>
            <PrimaryButton>
                <FaSave />
                Save Player
            </PrimaryButton>
        </div>
    )
}
export const SubmitButtons = () => {
    const router = useRouter();

    const handleSubmit = () => {
        console.log('submit');
    }


    return (
        <div className='w-full flex items-end justify-center gap-2'>
            <OutlineButton onClick={() => router.back()}>
                Cancel
            </OutlineButton>
            <PrimaryButton className='bg-linear-to-br from-blue-500 via-blue-500 to-purple-500' onClick={handleSubmit}>
                <FaSave />
                Save Player
            </PrimaryButton>
        </div>
    );
};
