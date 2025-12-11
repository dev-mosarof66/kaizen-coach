/* eslint-disable react-hooks/set-state-in-effect */
'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import { FiHome, FiShield } from "react-icons/fi";
import { LuUsers } from "react-icons/lu";
import { MdAssessment } from "react-icons/md";
import { GiTrophyCup, GiChessKnight } from "react-icons/gi";
import { RiTaskLine } from "react-icons/ri";
import { cn } from '@/lib/utils';
import { usePathname, useRouter } from 'next/navigation';

const sidebarItems = [
    {
        label: "Dashboard",
        icon: FiHome,
        href: "/",
    },
    {
        label: "Players",
        icon: LuUsers,
        href: "/players",
    },
    {
        label: "Teams",
        icon: FiShield,
        href: "/teams",
    },
    {
        label: "Matches",
        icon: GiTrophyCup,
        href: "/matches",
    },
    {
        label: "Tasks",
        icon: RiTaskLine,
        href: "/tasks",
    },
    {
        label: "Reports",
        icon: MdAssessment,
        href: "/reports",
    },
    {
        label: "Game Plans",
        icon: GiChessKnight,
        href: "/game-plans",
    }
];


const SideBar = ({ onClick }) => {
    const router = useRouter()
    const pathname = usePathname()
    const [activeItem, setActiveItem] = useState(0)

    useEffect(() => {
        if (pathname === '/') {
            setActiveItem(0)
        } else if (pathname === '/players' || pathname === '/add-player' || pathname === '/player-profile') {
            setActiveItem(1)
        } else if (pathname === '/teams' || pathname === '/add-team' || pathname === '/team-profile') {
            setActiveItem(2)
        }
        else if (pathname === '/matches' || pathname === '/add-match' || pathname === '/match-profile') {
            setActiveItem(3)
        }
        else if (pathname === '/tasks' || pathname === '/add-task' || pathname === '/task-profile') {
            setActiveItem(4)
        }
        else if (pathname === '/reports' || pathname === '/add-report' || pathname === '/report-profile') {
            setActiveItem(5)
        }
    }, [pathname]);

    return (
        <div className='w-60 lg:w-64 h-full flex flex-col justify-between bg-linear-to-b from-gray-800 border-r border-r-gray-500/20'>
            {/* logo + sidebarItems  */}
            <div className='w-full'>
                {/* logo  */}
                <div className='w-full flex flex-col gap-2 px-4 pt-4 pb-2'>
                    <div className='w-full flex items-center gap-1'>
                        <Image src="/logo.png" alt="logo" width={30} height={30} />
                        <p className='text-base-content'>CoachHub</p>
                    </div>
                    <p className='text-xs text-gray-500'>ELITE ANALYTICS</p>
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
                                onClick();
                            }}

                            className={
                                cn('flex items-center gap-2 text-gray-400 px-2 py-2  rounded-lg cursor-pointer hover:bg-blue-500/5 transition-colors duration-300 delay-75', activeItem === index && "relative overflow-hidden text-white bg-linear-to-r from-blue-500 to-purple-700 transition-transform duration-200")
                            }>
                            <item.icon size={19} />
                            {item.label}
                            <span className={
                                cn(
                                    activeItem === index && 'absolute -right-1 h-[34px] w-[9px] bg-white rounded-tl-lg rounded-bl-lg'
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
                        <p>Last Sync</p>
                        <p className='text-green-400'>10 mins ago</p>
                    </div>
                    <div className='w-full flex items-center justify-between text-xs'>
                        <p>AI Mode</p>
                        <div className='flex items-center gap-1 text-green-400'>
                            <div className='w-2 h-2 rounded-full bg-green-400' />
                            <p>Active</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SideBar


