'use client'
import React from 'react'
import { Play } from 'lucide-react'
import { OutlineButton, PrimaryButton } from '../common/button'
import { useTranslation } from '../../contexts/translation-context'

const Header = () => {
    const { t } = useTranslation()
    
    return (
        <div className='w-full flex flex-col gap-4'>
            <div className='w-full flex flex-col xl:flex-row items-start xl:justify-between gap-4'>
                <div className='flex flex-col'>
                    <h1 className='text-2xl font-semibold text-gray-200'>{t('pages.matches.title')}</h1>
                    <p className='text-sm text-gray-400'>{t('pages.matches.subtitle')}</p>
                </div>

                <div className='flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4'>
                    <div className='flex items-center gap-3'>
                        <OutlineButton onClick={() => { console.log('Switch Team') }}>
                            {t('pages.matches.switchTeam')}
                        </OutlineButton>
                        <PrimaryButton onClick={() => { console.log('Record Match') }}>

                            <Play className='w-4 h-4' />
                            {t('pages.matches.recordMatch')}
                        </PrimaryButton>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
