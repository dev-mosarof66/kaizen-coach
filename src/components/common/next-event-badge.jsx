'use client'
import React from 'react'
import { IoCalendarNumberOutline } from "react-icons/io5";
import { useTranslation } from '../../contexts/translation-context';

const NextEventBadge = () => {
    const { t } = useTranslation()
    
    return (
        <div className='hidden md:flex items-center gap-3 px-3 py-1.5 border border-gray-600 bg-gray-900 rounded-xl'>
            <div className='text-blue-500'>
                <IoCalendarNumberOutline />
            </div>
            <div className='text-sm flex flex-col gap-px'>
                <p className='text-xs text-gray-500'>{t('header.nextEvent.label')}</p>
                <p>{t('header.nextEvent.event')}</p>
            </div>
        </div>
    )
}

export default NextEventBadge
