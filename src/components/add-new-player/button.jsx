'use client'
import React from 'react'
import {  } from '../ui/'
import { FaSave } from 'react-icons/fa'
import { Outline, Primary } from '../common/'
import { useRouter } from 'next/navigation'



export const Tops = () => {

    const router = useRouter();

    return (
        <div className='flex items-center gap-2 py-2'>
            <Outline onClick={() => router.back()}>
                Cancel
            </Outline>
            <Primary>
                <FaSave />
                Save Player
            </Primary>
        </div>
    )
}
export const Submits = () => {
    const router = useRouter();

    const handleSubmit = () => {
        console.log('submit');
    }


    return (
        <div className='w-full flex items-end justify-center gap-2'>
            <Outline onClick={() => router.back()}>
                Cancel
            </Outline>
            <Primary className='bg-linear-to-br from-blue-500 via-blue-500 to-purple-500' onClick={handleSubmit}>
                <FaSave />
                Save Player
            </Primary>
        </div>
    );
};
