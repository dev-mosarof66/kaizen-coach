'use client'
import React from 'react'
import { IoCalendarNumberOutline } from "react-icons/io5";
import { useTranslation } from '../../contexts/translation-context';

const NextEventBadge = () => {
    const { t } = useTranslation()
    
    return (
        <div className='hidden md:flex items-center gap-2 px-3 py-1 border border-gray-700 bg-gray-900 rounded-md'>
            <div className='text-blue-500'>
                <IoCalendarNumberOutline size={16} />
            </div>
            <div className='text-sm flex flex-col gap-0.5'>
                <p className='text-xs text-gray-500'>{t('header.nextEvent.label')}</p>
                <p className='text-xs text-white'>{t('header.nextEvent.event')}</p>
            </div>
        </div>
    );
};

export default NextEventBadge;
