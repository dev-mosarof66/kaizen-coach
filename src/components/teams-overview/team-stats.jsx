'use client'
import React from 'react'
import Roaster from './roaster'
import FormTrend from './form-trend'
import TopPerformer from './top-performer'
import { useTranslation } from '../../contexts/translation-context'

const TeamStats = () => {
  const { t } = useTranslation()
  return (
    <div  className='w-full flex flex-col gap-4'>
      <div className='w-full h-full flex flex-col gap-4'>
        <div className='w-full flex items-center justify-between'>
          <h1 className='text-white text-xl font-semibold'>{t('teamsOverviewPage.teamStats.teamOverview')}</h1>
        </div>
        <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 p-0'>
            <Roaster />
            <FormTrend />
            <TopPerformer />
        </div>
      </div>
    </div>
  )
}

export default TeamStats
