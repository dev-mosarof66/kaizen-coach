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
import {
    Sheet,
    SheetContent,
    SheetHeader,
} from '../ui/sheet';
import { useTranslation } from '../../contexts/translation-context';

const PlayerModal = ({ player, onClose, open, onOpenChange }) => {
    const router = useRouter()
    const { t } = useTranslation()

    // Support both old (onClose) and new (open/onOpenChange) prop patterns
    const isOpen = open !== undefined ? open : !!player;
    const handleOpenChange = onOpenChange || ((value) => !value && onClose && onClose());

    if (!player) return null;

    return (
        <Sheet open={isOpen} onOpenChange={handleOpenChange}>
            <SheetContent
                side="right"
                className="w-96 bg-gray-900 border-gray-800 text-white overflow-y-auto p-0"
            >
                <SheetHeader className="border-b border-gray-700">
                    {/* Close Button */}
                    <div
                        onClick={() => handleOpenChange(false)}
                        className="w-full flex items-center gap-2 text-gray-400 hover:text-white active:scale-95 cursor-pointer transition-all duration-300 delay-75"
                    >
                        <FaTimes />
                        <p>{t('playersPage.playerModal.close')}</p>
                    </div>
                </SheetHeader>

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
                                {t('playersPage.playerModal.forward')}
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
                            <p className="text-gray-400">{t('playersPage.playerModal.gamesPlayed')}</p>
                        </div>
                        <div className='size-1.5 rounded-full bg-gray-400' />
                        <div className='flex items-center gap-2'>
                            <p className="font-medium text-2xl sm:text-3xl">{player.goals || 25}</p>
                            <p className="text-gray-400">{t('playersPage.playerModal.goalsScored')}</p>
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
                            <p className='uppercase'>{t('playersPage.playerModal.joinedTeam')}</p>
                            <p>{player.joined || "08/10/2021"}</p>
                        </div>
                        {/* Games */}
                        <div className="w-full flex justify-between text-gray-400 text-base">
                            <p className='uppercase'>{t('playersPage.playerModal.games')}</p>
                            <p>{player.games || 36} {t('playersPage.playerModal.total')}</p>
                        </div>
                        {/* Goals */}
                        <div className="w-full flex justify-between text-gray-400 text-base">
                            <p className='uppercase'>{t('playersPage.playerModal.goals')}</p>
                            <p>{player.games || 25} {t('playersPage.playerModal.total')}</p>
                        </div>
                        {/* Assists */}
                        <div className="w-full flex justify-between text-gray-400 text-base">
                            <p className='uppercase'>{t('playersPage.playerModal.assists')}</p>
                            <p>{player.games || 10} {t('playersPage.playerModal.total')}</p>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="w-full flex flex-col gap-3 pt-8">
                        <Button onClick={() => router.push('/player-profile')} className="flex-1 bg-blue-600 hover:bg-blue-700 rounded-lg py-2 text-white font-semibold">
                            {t('playersPage.playerModal.viewProfile')}
                        </Button>
                        <div className='w-full flex items-center justify-between gap-3'>
                            <Button className="flex-1 border border-gray-500 bg-transparent hover:bg-gray-600/20 rounded-lg py-2 text-blue-600 font-semibold">
                                {t('playersPage.playerModal.switchTeam')}
                            </Button>
                            <Button className="flex-1 bg-red-500 hover:bg-red-600 rounded-lg py-2 text-white font-semibold">
                                {t('playersPage.playerModal.removed')}
                            </Button>
                        </div>
                    </div>

                    <div className='w-full border border-gray-600' />


                    {/* Market Value */}
                    <div className="w-full flex flex-col gap-2">
                        <div className='w-full flex items-center justify-between'>
                            <p className="text-gray-300">{t('playersPage.playerModal.marketValue')}</p>
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
                                {t('playersPage.playerModal.comparedToLastMonth')}
                            </p>
                        </div>
                    </div>

                    {/* Bottom Actions */}
                    <div className="flex gap-2 pb-20">
                        <Button className="flex-1 bg-transparent border border-gray-600 hover:bg-gray-600/10 rounded-lg py-2 text-white font-semibold">
                            {t('playersPage.playerModal.assignTask')}
                        </Button>
                        <Button className="flex-1 bg-transparent border border-gray-600 hover:bg-gray-600/10 rounded-lg py-2 text-white font-semibold">
                            {t('playersPage.playerModal.addNote')}
                        </Button>
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    );
};

export default PlayerModal;
