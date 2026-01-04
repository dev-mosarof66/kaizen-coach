'use client'
import React from 'react'
import { Button } from '../ui/button'
import { FaPlus } from 'react-icons/fa'
import { cn } from '../../lib/utils'
import { constClassName } from '../../constants/constants'
import { useRouter } from 'next/navigation'
import { OutlineButton, PrimaryButton } from '../common/button'

const Header = () => {
    const router = useRouter()
    return (
        <div className="w-full flex flex-col gap-4 sm:flex-row md:flex-col xl:flex-row items-center justify-between">

            <div className="w-full flex flex-col">
                <h1 className="text-2xl font-semibold tracking-tight">
                    Players
                </h1>
                <p className="text-gray-500 text-sm">
                    Manage and track all players across your teams
                </p>
            </div>

            <div className="w-full flex items-center sm:justify-end md:justify-start lg:justify-end gap-2">
                <OutlineButton>
                    Import Players
                </OutlineButton>

                <PrimaryButton onClick={() => router.push("/add-player")}>
                    <FaPlus className="text-sm" />
                    Add Players
                </PrimaryButton>


            </div>
        </div>
    )
}

export default Header
