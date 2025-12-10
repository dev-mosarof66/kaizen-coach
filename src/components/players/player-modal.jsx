'use client';
import React from 'react';
import Image from 'next/image';
import { FaTimes } from 'react-icons/fa';
import LiverPool from '../../../public/liverpool.png'
import Argentian from '../../../public/argentina.png'
import { Button } from '../ui/button';
import { MarketValueChart } from './market-value-chart';
import { TrendingUp } from 'lucide-react';
import { useRouter } from 'next/navigation';

const PlayerModal = ({ player, onClose }) => {
    const router = useRouter()
    if (!player) return null;

    return (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-end justify-end">
            <div className="bg-gray-900 w-full h-screen max-w-md relative text-white">
                {/* Close Button */}
                <div
                    onClick={onClose}
                    className="w-full p-3 border-b border-gray-700 flex items-center gap-2 text-gray-400 hover:text-white cursor-pointer transition-all duration-300 delay-75"
                >
                    <FaTimes />
                    <p>Close</p>
                </div>

                <div className='w-full h-full flex flex-col gap-6 px-4 overflow-y-scroll scrollbar-hidden'>
                    {/* Player Image */}
                    <div className="w-full flex justify-center my-4">
                        <Image
                            src={player.image.src}
                            alt={player.name}
                            width={200}
                            height={200}
                            className="rounded-xl object-cover"
                        />
                    </div>

                    {/* Player Name & Position */}
                    <div className="w-full flex flex-col gap-3">
                        <h2 className="text-2xl font-bold">{player.name}</h2>
                        <div className='w-full flex gap-2'>
                            <p className="px-4 py-1 rounded-full bg-blue-600/30 text-purple-300 text-sm font-semibold">
                                Forward
                            </p>
                            <p className="px-4 py-1 rounded-full bg-gray-600/30 text-purple-100 text-sm font-semibold">
                                {player.position}
                            </p>
                        </div>

                    </div>


                    {/* goal played + scored  */}
                    <div className="w-full flex items-center gap-4">
                        <div className='flex items-center gap-2'>
                            <p className="font-medium text-2xl sm:text-3xl">{player.gamesPlayed || 36}</p>
                            <p className="text-gray-400">games Played</p>
                        </div>
                        <div className='size-1.5 rounded-full bg-gray-400' />
                        <div className='flex items-center gap-2'>
                            <p className="font-medium text-2xl sm:text-3xl">{player.goals || 25}</p>
                            <p className="text-gray-400">goals scored</p>
                        </div>
                    </div>

                    {/* teams owned  */}
                    <div className='w-full flex items-center gap-4'>
                        <div className='flex items-center gap-2'>
                            <Image src={LiverPool} width={25} height={25} alt='liver-pool' />
                            <p className='text-lg'>Paris Saint-Germain</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <Image src={Argentian} width={25} height={25} alt='liver-pool' />
                            <p className='text-lg'>Argentina</p>
                        </div>
                    </div>

                    <div className='w-full border border-gray-600' />

                    <div className='w-full flex flex-col gap-3'>
                        {/* Joined info */}
                        <div className="w-full flex justify-between text-gray-400 text-base">
                            <p className='uppercase'>Joined Team</p>
                            <p>{player.joined || "08/10/2021"}</p>
                        </div>
                        {/* Games */}
                        <div className="w-full flex justify-between text-gray-400 text-base">
                            <p className='uppercase'>GAMES</p>
                            <p>{player.games || 36} total</p>
                        </div>
                        {/* Goals */}
                        <div className="w-full flex justify-between text-gray-400 text-base">
                            <p className='uppercase'>GOALS</p>
                            <p>{player.games || 25} total</p>
                        </div>
                        {/* Assists */}
                        <div className="w-full flex justify-between text-gray-400 text-base">
                            <p className='uppercase'>ASSISTS</p>
                            <p>{player.games || 10} total</p>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="w-full flex flex-col gap-3 pt-8">
                        <Button onClick={() => router.push('/player-profile')} className="flex-1 bg-blue-600 hover:bg-blue-700 rounded-lg py-2 text-white font-semibold">
                            View Profile
                        </Button>
                        <div className='w-full flex items-center justify-between gap-3'>
                            <Button className="flex-1 border border-gray-500 bg-transparent hover:bg-gray-600/20 rounded-lg py-2 text-blue-600 font-semibold">
                                Switch Team
                            </Button>
                            <Button className="flex-1 bg-red-500 hover:bg-red-600 rounded-lg py-2 text-white font-semibold">
                                Removed
                            </Button>
                        </div>
                    </div>

                    <div className='w-full border border-gray-600' />


                    {/* Market Value */}
                    <div className="w-full flex flex-col gap-2">
                        <div className='w-full flex items-center justify-between'>
                            <p className="text-gray-300">Market Value</p>
                            <p className="text-green-400 font-medium">{player.value || "$80M"}</p>
                        </div>
                        {/* Placeholder chart */}
                        <div className='w-full pt-2'>
                            <MarketValueChart />
                        </div>
                        <div className='w-full flex items-center gap-3'>
                            <p className='text-green-500 text-sm flex items-center gap-1'>
                                <TrendingUp className="h-4 w-4" />
                                +15%</p>
                            <p className="text-gray-400">
                                compared to last month
                            </p>
                        </div>
                    </div>

                    {/* Bottom Actions */}
                    <div className="flex gap-2 pb-20">
                        <Button className="flex-1 bg-transparent border border-gray-600 hover:bg-gray-600/10 rounded-lg py-2 text-white font-semibold">
                            Assign Task
                        </Button>
                        <Button className="flex-1 bg-transparent border border-gray-600 hover:bg-gray-600/10 rounded-lg py-2 text-white font-semibold">
                            Add Note
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlayerModal;
