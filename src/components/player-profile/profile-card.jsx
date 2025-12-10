import React from 'react'
import { Card } from '../ui/card'
import Messi from '../../../public/image 10.png'
import Image from 'next/image'
import { RiHeart3Line } from "react-icons/ri";
import { TrendingUp } from 'lucide-react';
import ProfileTabs from './profile-tabs';

const ProfileCard = ({ selectedTab, setSelectedTab }) => {
    return (
        <Card className="w-full flex flex-col items-start p-0 bg-gray-800 border border-gray-700 rounded-xl overflow-hidden shadow-lg">
            <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row gap-6 items-center w-full px-6 py-6">
                {/* Profile Image */}
                <div className="flex items-center justify-center size-20 sm:size-20 rounded-full overflow-hidden ring-2 ring-blue-400 shadow-md">
                    <Image src={Messi} alt="messi" width={250} height={250} className="object-cover" />
                </div>

                {/* Player Basic Info */}
                <div className="w-full sm:w-fit flex flex-col text-left gap-4 text-gray-300">
                    <div className="flex flex-wrap items-center gap-2 text-sm sm:text-lg font-semibold">
                        <span className="text-blue-400 bg-blue-400/10 px-2 rounded-md text-xs sm:text-sm">#10</span>
                        <p className="text-lg sm:text-xl font-bold">Lionel Messi</p>
                        <span className="mx-1 text-gray-500">•</span>
                        <p>Forward</p>
                        <span className="mx-1 text-gray-500">•</span>
                        <p>36 years</p>
                    </div>

                    {/* Player Stats */}
                    <div className="w-full sm:w-fit grid grid-cols-1 xl:grid-cols-2 gap-4 xl:gap-6 text-sm text-gray-300">
                        <div className='flex-1  flex items-center gap-2 justify-between'>
                            <div className='text-xs sm:text-sm px-2 py-0.5 bg-green-600/10 rounded-md text-green-500'>
                                <p>Available </p>
                            </div>
                            <div className="flex items-center gap-2">
                                <RiHeart3Line className="w-4 h-4 text-red-400" />
                                <span>Fitness: <b className="text-white">95%</b></span>
                            </div>
                            <div className="flex items-center gap-2">
                                <TrendingUp className="w-5 h-5 text-green-400" />
                                <span>Form: <b className="text-white">9.5</b></span>
                            </div>
                            <p className='hidden sm:block'><span className="text-gray-400">Team: </span>Inter Miami</p>
                        </div>
                        <div className='flex-1 flex items-center gap-3 justify-between'>
                            <p><span className="text-gray-400">Coach: </span>Coach Martino</p>
                            <p><span className="text-gray-400">Foot: </span>Left</p>
                            <p className='hidden sm:block'><span className="text-gray-400">Height/Weight: </span>170cm / 72kg</p>
                        </div>
                    </div>
                </div>

            </div>
            {/* Tabs */}
            <div className="w-full">
                <ProfileTabs selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
            </div>
        </Card>
    );
};

export default ProfileCard;
