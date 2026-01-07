'use client'
import React from 'react'
import { Card } from '../ui/card'
import { useTranslation } from '../../contexts/translation-context'

const Roaster = () => {
    const { t } = useTranslation()
    return (
        <Card className='w-full col-span-1 flex flex-col gap-4 border border-gray-800 bg-gray-800/50 rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300'>
            <div>
                <h1 className='text-gray-300 text-base sm:text-lg font-semibold'>{t('teamsOverviewPage.roaster.title')}</h1>
            </div>
            <div className='w-full h-full flex flex-col gap-2'>
                <div className='w-full h-full flex flex-col gap-2'>
                    <div className='w-full flex items-center justify-between'>
                        <p className='text-green-500 text-sm font-semibold'>{t('teamsOverviewPage.roaster.fit')}</p>
                        <p className='text-gray-400 text-sm font-semibold'>7</p>
                    </div>
                    <div className='w-full h-1.5 bg-gray-700 rounded-full overflow-hidden'>
                        <div className='h-full bg-blue-500 rounded-full transition-all' style={{ width: '70%' }} />
                    </div>
                </div>
                <div className='w-full h-full flex flex-col gap-2'>
                    <div className='w-full flex items-center justify-between'>
                        <p className='text-amber-500 text-sm font-semibold'>{t('teamsOverviewPage.roaster.doubtful')}</p>
                        <p className='text-gray-400 text-sm font-semibold'>1</p>
                    </div>
                    <div className='w-full h-1.5 bg-gray-700 rounded-full overflow-hidden'>
                        <div className='h-full bg-blue-500 rounded-full transition-all' style={{ width: '50%' }} />
                    </div>
                </div>
                <div className='w-full h-full flex flex-col gap-2'>
                    <div className='w-full flex items-center justify-between'>
                        <p className='text-red-500 text-sm font-semibold'>{t('teamsOverviewPage.roaster.injured')}</p>
                        <p className='text-gray-400 text-sm font-semibold'>1</p>
                    </div>
                    <div className='w-full h-1.5 bg-gray-700 rounded-full overflow-hidden'>
                        <div className='h-full bg-blue-500 rounded-full transition-all' style={{ width: '30%' }} />
                    </div>
                </div>
            </div>
        </Card>
    )
}

export default Roaster
