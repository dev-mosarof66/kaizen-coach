'use client'
import React from 'react'
import { FaPlus } from 'react-icons/fa'
import { useRouter } from 'next/navigation'
import {  PrimaryButton } from '../common/button'
import { useTranslation } from '../../contexts/translation-context'

const Header = () => {
    const router = useRouter()
    const { t } = useTranslation()
    
    return (
        <div className="w-full flex flex-col gap-4 sm:flex-row md:flex-col xl:flex-row items-center justify-between">

            <div className="w-full flex flex-col">
                <h1 className="text-2xl font-semibold tracking-tight text-gray-300">
                    {t('pages.teams.title')}
                </h1>
                <p className="text-gray-400 text-sm">
                    {t('pages.teams.subtitle')}
                </p>
            </div>

            <div className="w-full flex items-center sm:justify-end md:justify-start lg:justify-end gap-4">
                <PrimaryButton onClick={() => router.push("/add-player")}>
                    <FaPlus className="text-sm" />
                    <p className='flex items-center gap-1'>{t('pages.teams.createNewTeam')}</p>
                </PrimaryButton>


            </div>
        </div>
    )
}

export default Header
