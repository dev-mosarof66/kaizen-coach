'use client'
import React from 'react'
import TextInput from '../common/text-input'
import NextEventBadge from './next-event-badge'
import NotificationBadge from './notification-badge'
import ProfileButton from './profile-button'
import DrawerSidebar from './drawer-sidebar'
import LanguageConverter from './language-changer'
import { useTranslation } from '../../contexts/translation-context'
import { cn } from '../../lib/utils'
import { useIsMobile } from '../../hooks/use-mobile'

const Header = () => {
  const isMobile = useIsMobile()
  const { language } = useTranslation()
  const isRTL = language === 'ar'

  return (
    <div className={cn('w-full flex items-center bg-gray-800 border-b border-gray-500/10 px-2 sm:px-4 md:px-3 py-2.5 relative z-50 justify-between', isRTL ? isMobile ? 'flex-row' : "flex-row-reverse" : 'flex-row')}>
      <div className='block md:hidden relative z-50'>
        <DrawerSidebar />
      </div>

      <div className={cn('flex items-center md:w-full gap-2')}>
        {/* search bar  */}
        <div className='flex-1'>
          <TextInput />
        </div>
        {/* profile + notification button  */}
        <div className={cn('flex items-center gap-2')}>
          <NextEventBadge />
          <LanguageConverter />
          <NotificationBadge />
          <ProfileButton />
        </div>
      </div>
    </div>
  )
}

export default Header
