
import React from 'react'
import  TextInput  from '../common/text-input'
import NextEventBadge from './next-event-badge'
import NotificationBadge from './notification-badge'
import ProfileButton from './profile-button'
import DrawerSidebar from './drawer-sidebar'
import LanguageConverter from './language-changer'

const Header = () => {
  return (
    <div className='w-full flex items-center justify-between bg-gray-800 border-b border-gray-500/20 px-2 sm:px-4 md:px-3 py-2.5'>
      <div className='block md:hidden relative z-50'>
        <DrawerSidebar />
      </div>

      <div className='flex items-center md:w-full md:justify-end gap-2'>
        {/* search bar  */}
        <div className='flex-1'>
          <TextInput />
        </div>
        {/* profile + notification button  */}
        <div className='flex items-center gap-2'>
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
