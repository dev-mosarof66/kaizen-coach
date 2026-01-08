'use client'
import React from 'react'
import { FaArrowRight, FaTimes, FaTrophy, FaUsers } from 'react-icons/fa';
import { PrimaryButton } from '../common/button';
import { useRouter } from 'next/navigation';
import {
  Sheet,
  SheetContent,
  SheetHeader,
} from '../ui/sheet';
import { Button } from '../ui/button';
import { useTranslation } from '../../contexts/translation-context';
import { cn } from '../../lib/utils';


const TeamModal = ({ showModal, setShowModal, teamId, open, onOpenChange }) => {
  const { t, language } = useTranslation()
  const router = useRouter()
  const isRTL = language === 'ar'

  const isOpen = open !== undefined ? open : showModal;
  const handleOpenChange = onOpenChange || ((value) => {
    if (setShowModal) setShowModal(value);
  });


  return (
    <Sheet open={isOpen} onOpenChange={handleOpenChange}>
      <SheetContent
        side={isRTL ? "left" : "right"}
        className="w-80 md:w-96 bg-gray-900 border-gray-800 text-white overflow-y-auto p-0"
      >
        <SheetHeader className="border-b border-gray-800 py-0">
          {/* header  */}
          <div className='w-full flex items-center justify-between px-2 py-6'>
            <div className='flex items-center gap-2'>
              <div className='p-3 rounded-full bg-red-500/20 text-red-400'>
                <FaTrophy className='size-4' />
              </div>
              <div className='flex flex-col'>
                <h1 className='text-white text-sm font-semibold'>Team C -- U16</h1>
                <p className='text-gray-400 text-xs'>U16</p>
              </div>
            </div>
            <Button variant="ghost" size="icon" className="bg-gray-800/10 rounded-full hover:bg-gray-800/20" onClick={() => handleOpenChange(false)}>
              <FaTimes className='size-4 text-gray-400' />
            </Button>
          </div>
        </SheetHeader>

        {/* content  */}

        <div className='w-full h-full flex flex-col gap-6 px-4 overflow-y-scroll scrollbar-hidden'>

          {/* content header  */}
          <div className='w-full grid grid-cols-2 gap-4'>
            {/* win rate  */}
            <div className='w-full h-full flex flex-col gap-6 justify-between border border-gray-800 px-3 py-3 rounded-xl '>
              <h2 className='text-gray-400 text-sm font-semibold'>{t('teamsPage.teamModal.winRate')}</h2>
              <p className='text-gray-200 text-xl'>67%</p>
            </div>

            {/* players  */}
            <div className='w-full h-full flex flex-col gap-6 justify-between border border-gray-800 px-3 py-3 rounded-xl '>
              <h2 className='text-gray-400 text-sm font-semibold'>{t('teamsPage.teamModal.players')}</h2>
              <p className='text-gray-200 text-xl'>18 / 18</p>
            </div>
          </div>

          {/* border  */}
          <div className='w-full border-b border-b-gray-800' />

          {/* last match results  */}
          <div className='w-full flex flex-col gap-3'>
            <h2 className='text-gray-400 text-lg font-semibold'>{t('teamsPage.teamModal.seasonRecord')}</h2>
            {/* season record  */}
            <div className='w-full flex flex-col gap-2 text-gray-400 border-b border-gray-800 pb-3 text-sm'>
              {/* wins  */}
              <div className='w-full flex items-center justify-between'>
                <p>{t('teamsPage.teamModal.wins')}</p>
                <p className='text-green-500'>18</p>
              </div>
              {/* draws */}
              <div className='w-full flex items-center justify-between'>
                <p>{t('teamsPage.teamModal.draws')}</p>
                <p className='text-amber-500'>3</p>
              </div>
              {/* losses */}
              <div className='w-full flex items-center justify-between'>
                <p>{t('teamsPage.teamModal.losses')}</p>
                <p className='text-red-500'>2</p>
              </div>
            </div>
            {/* goals history  */}
            <div className='w-full flex flex-col py-3 gap-2 text-gray-400 text-sm'>
              <div className='w-full flex items-center justify-between'>
                <p>{t('teamsPage.teamModal.goalsFor')}</p>
                <p className='text-white'>45</p>
              </div>
              <div className='w-full flex items-center justify-between'>
                <p>{t('teamsPage.teamModal.goalsAgainst')}</p>
                <p className='text-white'>18</p>
              </div>
              <div className='w-full flex items-center justify-between'>
                <p>{t('teamsPage.teamModal.goalDifference')}</p>
                <p className='text-green-500'>+27</p>
              </div>
            </div>
            {/* player roaster  */}
            <div className='w-full flex flex-col text-sm text-gray-400 gap-2 border-b border-b-gray-800 pb-5'>
              <h2 className='text-gray-400 text-lg font-semibold'>18 {t('teamsPage.teamModal.playerRoaster')}</h2>
              <div className='w-full flex flex-col gap-2'>
                <div className='w-full flex items-center justify-between'>
                  <p>RW</p>
                  <p className='text-green-500'>12</p>
                </div>
                <div className='w-full flex items-center justify-between'>
                  <p>MF</p>
                  <p className='text-amber-500'>3</p>
                </div>
                <div className='w-full flex items-center justify-between'>
                  <p>FW</p>
                  <p className='text-red-500'>2</p>
                </div>
              </div>
            </div>
          </div>

          {/* button  */}

          <div className='w-full flex justify-center border-b border-b-gray-800 pb-6'>
            <PrimaryButton onClick={() => router.push(`/teams/${teamId}`)} className={cn('w-full flex items-center gap-6 bg-linear-to-br from-blue-500 via-blue-500 to-purple-500 group', isRTL && 'flex-row-reverse')}>
              <p>{t('teamsPage.teamModal.openFullTeamPage')}</p>
              <FaArrowRight className={cn('transition-all duration-300')} />
            </PrimaryButton>
          </div>

          {/* coach details  */}
          <div className='w-full flex flex-col gap-2 pb-10'>
            <h2 className='text-gray-400 text-xs font-semibold'>{t('teamsPage.teamModal.headCoach')}</h2>
            <div onClick={() => router.push('/coaches/coach-details')} className={cn('w-full flex items-center gap-4 bg-gray-950/50 p-3 rounded-xl  group hover:bg-gray-950/70 active:scale-95 cursor-pointer transition-all duration-300 hover:shadow-lg', isRTL && 'flex-row-reverse')}>
              <div className='p-3 rounded-full bg-blue-500/20 text-blue-400'>
                <FaUsers />
              </div>
              <div className={cn('flex-1 flex items-center', isRTL ? 'justify-between flex-row-reverse' : 'justify-between')}>
                <div className={cn('flex flex-col', isRTL && 'text-right')}>
                  <h1 className='text-white text-sm font-semibold'>Coach Saleh</h1>
                  <p className='text-gray-400 text-xs'>{t('teamsPage.teamModal.viewProfile')}</p>
                </div>
                <div className='text-gray-400 hover:text-white cursor-pointer'>
                  <FaArrowRight className={cn('size-4 transition-all duration-300')} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default TeamModal
