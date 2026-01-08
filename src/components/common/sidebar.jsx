/* eslint-disable react-hooks/set-state-in-effect */
'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import { FiHome, FiShield } from "react-icons/fi";
import { LuUsers } from "react-icons/lu";
import { MdAssessment } from "react-icons/md";
import { GiTrophyCup, GiChessKnight } from "react-icons/gi";
import { RiTaskLine } from "react-icons/ri";
import { cn } from '../../lib/utils';
import { usePathname, useRouter } from 'next/navigation';
import { useTranslation } from '../../contexts/translation-context';


const SideBar = ({ closeDrawer }) => {
    const router = useRouter()
    const pathname = usePathname()
    const [activeItem, setActiveItem] = useState(0)
    const { t, language } = useTranslation()
    const isRTL = language === 'ar'

    const sidebarItems = [
        {
            label: t('sidebar.menu.dashboard'),
            icon: FiHome,
            href: "/",
        },
        {
            label: t('sidebar.menu.players'),
            icon: LuUsers,
            href: "/players",
        },
        {
            label: t('sidebar.menu.teams'),
            icon: FiShield,
            href: "/teams",
        },
        {
            label: t('sidebar.menu.matches'),
            icon: GiTrophyCup,
            href: "/matches",
        },
        {
            label: t('sidebar.menu.tasks'),
            icon: RiTaskLine,
            href: "/tasks",
        },
        {
            label: t('sidebar.menu.reports'),
            icon: MdAssessment,
            href: "/reports",
        },
        {
            label: t('sidebar.menu.gamePlans'),
            icon: GiChessKnight,
            href: "/game-plans",
        }
    ];

    useEffect(() => {
        if (pathname === '/') {
            setActiveItem(0)
        } else if (pathname === '/players' || pathname === '/add-player' || pathname === '/player-profile') {
            setActiveItem(1)
        } else if (pathname === '/teams' || pathname === '/add-team' || pathname === '/team-profile' || pathname.includes('/teams')) {
            setActiveItem(2)
        }
        else if (pathname === '/matches' || pathname === '/add-match' || pathname === '/match-profile') {
            setActiveItem(3)
        }
        else if (pathname === '/tasks' || pathname === '/add-task' || pathname === '/task-profile' || pathname.includes('/tasks')) {
            setActiveItem(4)
        }
        else if (pathname === '/reports' || pathname === '/add-report' || pathname === '/report-profile') {
            setActiveItem(5)
        }
        else if (pathname === '/game-plans' || pathname.includes('/game-plans')) {
            setActiveItem(6)
        }
    }, [pathname]);

    return (
        <div className={cn('w-60 lg:w-64 h-full flex flex-col justify-between bg-linear-to-b from-gray-900 to-gray-800', isRTL ? 'border-l border-l-gray-700' : 'border-r border-r-gray-700')}>
            {/* logo + sidebarItems  */}
            <div className='w-full'>
                {/* logo  */}
                <div className='w-full flex flex-col gap-2 px-4 pt-4 pb-2'>
                    <div className='w-full flex items-center gap-1'>
                        <Image src="/logo.png" alt="logo" width={30} height={30} />
                        <p className='text-base-content'>{t('sidebar.logo.brand')}</p>
                    </div>
                    <p className='text-xs text-gray-500'>{t('sidebar.logo.tagline')}</p>
                </div>
                {/* border  */}
                <div className='w-full h-px bg-gray-500/20' />
                {/* sidebar items  */}
                <div className='flex flex-col gap-2 py-4 px-2 transition-transform duration-300'>
                    {sidebarItems.map((item, index) => (
                        <button

                            key={item.label}

                            onClick={() => {
                                setActiveItem(index);
                                router.push(item.href);
                                closeDrawer?.()
                            }}

                            className={
                                cn('flex items-center gap-2 text-gray-400 px-2 py-2  rounded-lg cursor-pointer hover:bg-blue-500/5 transition-colors duration-300 delay-75', activeItem === index && "relative overflow-hidden text-white bg-linear-to-r from-blue-500 to-purple-700 transition-transform duration-200")
                            }>
                            <item.icon size={19} />
                            {item.label}
                            <span className={
                                cn(
                                    activeItem === index && isRTL 
                                        ? 'absolute -left-1 h-[34px] w-[9px] bg-white rounded-tr-lg rounded-br-lg'
                                        : activeItem === index 
                                        ? 'absolute -right-1 h-[34px] w-[9px] bg-white rounded-tl-lg rounded-bl-lg'
                                        : ''
                                )
                            }></span>
                        </button>
                    ))}
                </div>
            </div>
            {/* account status  */}
            <div className='w-full border-t border-t-gray-500/20 p-4'>
                <div className='w-full flex flex-col gap-2 border border-gray-500 bg-gray-950/50 text-gray-500 p-2 rounded-lg'>
                    <div className='w-full flex items-center justify-between text-xs'>
                        <p>{t('sidebar.status.lastSync')}</p>
                        <p className='text-green-400'>{t('sidebar.status.lastSyncTime')}</p>
                    </div>
                    <div className='w-full flex items-center justify-between text-xs'>
                        <p>{t('sidebar.status.aiMode')}</p>
                        <div className='flex items-center gap-1 text-green-400'>
                            <div className='w-2 h-2 rounded-full bg-green-400' />
                            <p>{t('sidebar.status.active')}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SideBar


