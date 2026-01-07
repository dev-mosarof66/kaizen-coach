'use client'
import React from 'react'
import { Card } from '../ui/card'
import { useTranslation } from '../../contexts/translation-context'



const performer = [
  {
    id: 1,
    name: "Marcus Sliva",
    position: "FW",
    performance: 8.5,
  },
  {
    id: 2,
    name: "Anthony Laid",
    position: "CAM",
    performance: 8.3,
  },
  {
    id: 3,
    name: "Anthony Laid",
    position: "RB",
    performance: 8.2,
  },
]

const TopPerformer = () => {
  const { t } = useTranslation()
  return (
    <Card className='w-full flex flex-col gap-4 border border-gray-800 bg-gray-800/50 rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300'>
      <div className='w-full h-full flex flex-col gap-4'>
        <h1 className='text-gray-300 text-base sm:text-lg font-semibold'>{t('teamsOverviewPage.topPerformer.title')}</h1>

        <div className='w-full flex flex-col gap-2'>
          {performer.map((item) => (
            <div key={item.id} className='w-full flex items-center justify-between'>
              <div className='flex items-center justify-between gap-2'>
                <div className='size-9 rounded-full bg-red-400 text-gray-200 flex items-center justify-center'>
                  <p className='text-sm font-semibold'>{item.id}</p>
                </div>
                <div className='flex flex-col gap-1'>
                  <h1 className='text-white text-sm font-semibold'>{item.name}</h1>
                  <p className='text-gray-400 text-xs'>{item.position}</p>
                </div>
              </div>
              <p className='text-blue-400 text-sm font-semibold'>{item.performance}</p>
            </div>
          ))}
        </div>
      </div>
    </Card>
  )
}

export default TopPerformer