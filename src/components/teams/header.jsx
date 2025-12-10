'use client'
import React from 'react'
import { FaPlus } from 'react-icons/fa'
import { useRouter } from 'next/navigation'
import { OutlineButton, PrimaryButton } from '../common/button'

const Header = () => {
    const router = useRouter()
    return (
        <div className="w-full flex flex-col gap-4 sm:flex-row md:flex-col xl:flex-row items-center justify-between">

            <div className="w-full flex flex-col">
                <h1 className="text-2xl font-semibold tracking-tight">
                    Teams
                </h1>
                <p className="text-gray-500 text-sm">
                    Manage all teams across your club
                </p>
            </div>

            <div className="w-full flex items-center sm:justify-end md:justify-start lg:justify-end gap-4">
                <PrimaryButton onClick={() => router.push("/add-player")}>
                    <FaPlus className="text-sm" />
                    <p className='flex items-center gap-1'>Create <span className='hidden sm:block md:hidden xl:block'>New</span> Team</p>
                </PrimaryButton>


            </div>
        </div>
    )
}

export default Header
