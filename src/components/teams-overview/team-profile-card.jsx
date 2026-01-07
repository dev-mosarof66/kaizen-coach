'use client'
import React from 'react'
import { FaArrowLeft } from 'react-icons/fa'
import { FaFootball } from 'react-icons/fa6'
import { FaUsers } from 'react-icons/fa'
import { FaHeart } from 'react-icons/fa'
import { BarChart, TrendingUp } from 'lucide-react'
import { Card } from '../ui/card'
import { useTranslation } from '../../contexts/translation-context'

const TeamProfileCard = () => {
    const { t } = useTranslation()
    return (
        <Card className='w-full flex flex-col gap-4 border border-gray-800 bg-gray-800/50 rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300'>
            <div className='w-full h-full flex flex-col gap-4'>
                {/* back button and team profile  */}
                <div className='w-full flex items-center justify-start gap-8'>
                    <div className='flex items-center gap-2 text-gray-400 cursor-pointer group hover:text-white transition-all duration-300'>
                        <FaArrowLeft className='size-4 group-hover:-translate-x-1 transition-all duration-300' />
                        <p className='text-gray-400 text-sm group-hover:text-white transition-all duration-300'>{t('teamsOverviewPage.teamProfileCard.back')}</p>
                    </div>
                    {/* team profile  */}
                    <div className='flex items-center gap-2'>
                        <div className='size-10 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center'>
                            <FaFootball className='size-5' />
                        </div>
                        <div className='flex flex-col'>
                            <h1 className='flex items-center gap-2 text-white text-sm font-semibold'>
                                Team C
                                <div className='w-4 h-px bg-gray-200' />
                                U16
                            </h1>
                            <p className='text-blue-700 text-xs'>{t('teamsOverviewPage.teamProfileCard.coach')} Coach Saleh</p>
                        </div>
                    </div>
                </div>



                {/* stats  */}
                <div className='w-full grid grid-cols-2 sm:grid-cols-4 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-2'>
                    {/* palyers count  */}
                    <div className='flex items-center gap-2 text-sm text-gray-400 border border-gray-400/20 rounded-full px-3 py-1'>
                        <FaUsers className='size-4 text-blue-400' />
                        <p className='text-gray-400'>{t('teamsOverviewPage.teamProfileCard.players')} <span className='text-gray-200'>18</span></p>
                    </div>

                    {/* avg fitness  */}
                    <div className='flex items-center gap-2 text-sm text-gray-400 border border-gray-400/20 rounded-full px-3 py-1'>
                        <FaHeart className='size-4 text-red-400' />
                        <p className='text-gray-400'>{t('teamsOverviewPage.teamProfileCard.avgFitness')} <span className='text-gray-200'>70%</span></p>
                    </div>


                    {/* win rate  */}
                    <div className='flex items-center gap-2 text-sm text-gray-400 border border-gray-400/20 rounded-full px-3 py-1'>
                        <TrendingUp className='size-4 text-green-400' />
                        <p className='text-gray-400'>{t('teamsOverviewPage.teamProfileCard.winRate')} <span className='text-gray-200'>67%</span></p>
                    </div>
                    {/* avg form  */}
                    <div className='flex items-center gap-2 text-sm text-gray-400 border border-gray-400/20 rounded-full px-3 py-1'>
                        <BarChart className='size-4 text-yellow-400' />
                        <p className='text-gray-400'>{t('teamsOverviewPage.teamProfileCard.avgForm')} <span className='text-gray-200'>6.7</span></p>
                    </div>
                </div>

                {/* red border  */}
                <div className='w-full h-[2px] bg-red-400' />
            </div>
        </Card>
    )
}

export default TeamProfileCard
