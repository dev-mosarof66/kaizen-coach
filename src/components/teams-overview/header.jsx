'use client'
import React from 'react'
import { FaPlus } from 'react-icons/fa'
import { useRouter } from 'next/navigation'
import { PrimaryButton } from '../common/button'
import { useTranslation } from '../../contexts/translation-context'

const Header = () => {
    const { t } = useTranslation()
    const router = useRouter()
    return (
        <div className="w-full flex  items-center justify-between">

            <div className="w-full flex flex-col">
                <h1 className="text-2xl font-semibold tracking-tight">
                    {t('teamsOverviewPage.header.title')}
                </h1>
                <p className="text-gray-500 text-sm">
                    {t('teamsOverviewPage.header.subtitle')}
                </p>
            </div>

            <div>
                <PrimaryButton onClick={() => router.push("/add-player")}>
                    <FaPlus className="text-sm" />
                    <p className='flex items-center gap-1'>{t('teamsOverviewPage.header.addPlayer')}</p>
                </PrimaryButton>


            </div>
        </div>
    )
}

export default Header
