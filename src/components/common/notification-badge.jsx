'use client'
import React from 'react'
import { IoMdNotificationsOutline } from "react-icons/io";
import { useTranslation } from '../../contexts/translation-context';
import { cn } from '../../lib/utils';

const NotificationBadge = () => {
  const { language } = useTranslation()
  const isRTL = language === 'ar'

  return (
    <div className='relative p-[5px] md:p-2 xl:p-2.5 bg-gray-800/10 border border-gray-700 rounded-md hover:bg-gray-800/20 active:scale-95 cursor-pointer transition-all duration-300 delay-75'>
      <IoMdNotificationsOutline size={20} className='text-gray-400' />
      <div className={cn('size-1.5 md:size-2 bg-red-500 rounded-full absolute top-1', isRTL ? 'left-1' : 'right-1')} />
    </div>
  )
}

export default NotificationBadge
