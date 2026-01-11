'use client'
import React from 'react'
import { Card, CardContent } from '../ui/card'
import { Badge } from '../ui/badge'
import { Button } from '../ui/button'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table'
import { Input } from '../ui/input'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '../ui/dropdown-menu'
import { Search } from 'lucide-react'
import { cn } from '../../lib/utils'
import { Video } from 'lucide-react'
import { BarChart3 } from 'lucide-react'
import { Upload } from 'lucide-react'
import { MoreVertical } from 'lucide-react'
import { OutlineButton, PrimaryButton } from '../common/button'
import { BsThreeDots } from 'react-icons/bs'
import { useTranslation } from '../../contexts/translation-context'

const MatchHistory = () => {
    const { t } = useTranslation()

    const matchHistory = [
        {
            id: 1,
            fixture: 'U16 Eagles vs Lions FC',
            location: 'Home Stadium',
            date: 'Nov 6, 2025',
            time: '4:00 PM',
            competition: 'League',
            result: 'W 3-1',
            resultType: 'win',
            hasVideo: true,
            hasAnalysis: true,
            status: 'Ready',
            statusKey: 'ready',
            statusColor: 'text-green-400'
        },
        {
            id: 2,
            fixture: 'Sharks FC vs U16 Eagles',
            location: 'Away',
            date: 'Nov 3, 2025',
            time: '2:00 PM',
            competition: 'League',
            result: 'D 2-2',
            resultType: 'draw',
            hasVideo: true,
            hasAnalysis: false,
            status: 'Processing',
            statusKey: 'processing',
            statusColor: 'text-orange-400'
        },
        {
            id: 3,
            fixture: 'U14 Juniors vs Bears United',
            location: 'Home Stadium',
            date: 'Nov 1, 2025',
            time: '3:00 PM',
            competition: 'Friendly',
            result: 'L 1-2',
            resultType: 'loss',
            hasVideo: false,
            hasAnalysis: false,
            status: 'Ready',
            statusKey: 'ready',
            statusColor: 'text-green-400'
        }
    ]


    return (
        <div className='w-full flex flex-col gap-4'>
            <div className='w-full flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4'>
                <h2 className='text-2xl font-semibold text-white'>{t('matchesPage.matchHistory.title')}</h2>

                <div className='flex flex-col items-start gap-2 sm:flex-row flex-wrap md:flex-col lg:flex-row w-full sm:w-auto'>
                    <div className='relative flex-1 sm:flex-initial sm:w-[200px]'>
                        <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400' />
                        <Input
                            placeholder={t('matchesPage.matchHistory.searchPlayers')}
                            className='pl-9 bg-gray-800/60 border-gray-700 text-gray-300 placeholder:text-gray-500'
                        />
                    </div>
                    <div className='flex items-center gap-2'>

                        <OutlineButton>
                            {t('matchesPage.matchHistory.allPositions')}
                        </OutlineButton>



                        <OutlineButton>
                            {t('matchesPage.matchHistory.allStatus')}
                        </OutlineButton>
                    </div>
                </div>
            </div>

            <Card className='bg-gray-800/60 border-gray-700'>
                <CardContent className='p-0'>
                    <div className='p-4 border-b border-gray-700 flex items-center justify-between'>
                        <h3 className='text-base font-semibold text-white'>{t('matchesPage.matchHistory.title')}</h3>
                        <Badge variant='secondary' className='bg-gray-600/50 text-gray-300 border-gray-600'>
                            3 {t('matchesPage.matchHistory.matches')}
                        </Badge>
                    </div>

                    <div className='overflow-x-auto'>
                        <Table>
                            <TableHeader>
                                <TableRow className='border-gray-700 hover:bg-transparent'>
                                    <TableHead className='text-gray-400 font-medium'>{t('matchesPage.matchHistory.tableHeaders.fixture')}</TableHead>
                                    <TableHead className='text-gray-400 font-medium'>{t('matchesPage.matchHistory.tableHeaders.dateTime')}</TableHead>
                                    <TableHead className='text-gray-400 font-medium'>{t('matchesPage.matchHistory.tableHeaders.competition')}</TableHead>
                                    <TableHead className='text-gray-400 font-medium'>{t('matchesPage.matchHistory.tableHeaders.result')}</TableHead>
                                    <TableHead className='text-gray-400 font-medium'>{t('matchesPage.matchHistory.tableHeaders.video')}</TableHead>
                                    <TableHead className='text-gray-400 font-medium'>{t('matchesPage.matchHistory.tableHeaders.analysis')}</TableHead>
                                    <TableHead className='text-gray-400 font-medium'>{t('matchesPage.matchHistory.tableHeaders.status')}</TableHead>
                                    <TableHead className='text-gray-400 font-medium'>{t('matchesPage.matchHistory.tableHeaders.action')}</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {matchHistory.map((match) => (
                                    <TableRow key={match.id} className='border-gray-700 hover:bg-gray-800/40'>
                                        <TableCell>
                                            <div className='flex flex-col gap-1'>
                                                <span className='text-white font-medium'>{match.fixture}</span>
                                                <span className='text-gray-400 text-sm'>{match.location}</span>
                                            </div>
                                        </TableCell>
                                        <TableCell>
                                            <div className='flex flex-col gap-1'>
                                                <span className='text-white'>{match.date}</span>
                                                <span className='text-gray-400 text-sm'>{match.time}</span>
                                            </div>
                                        </TableCell>
                                        <TableCell>
                                            <span className='bg-gray-600/10 text-gray-400 border-gray-600/10 p-2 rounded-md text-xs'>{match.competition}</span>
                                        </TableCell>
                                        <TableCell>
                                            <Badge
                                                className={cn(
                                                    match.resultType === 'win' && 'bg-green-500/10 text-green-400 border-green-500/30',
                                                    match.resultType === 'draw' && 'bg-orange-500/10 text-orange-400 border-orange-500/30',
                                                    match.resultType === 'loss' && 'bg-red-500/10 text-red-400 border-red-500/30'
                                                )}
                                            >
                                                {match.result}
                                            </Badge>
                                        </TableCell>
                                        <TableCell>
                                            {match.hasVideo ? (
                                                <Video className='w-5 h-5 text-gray-400' />
                                            ) : (
                                                <OutlineButton
                                                    className='bg-transparent border-gray-600 hover:bg-white/5 text-white'
                                                >
                                                    <Upload className='w-4 h-4' />
                                                    {t('matchesPage.matchHistory.actions.upload')}
                                                </OutlineButton>
                                            )}
                                        </TableCell>
                                        <TableCell>
                                            {match.hasAnalysis ? (
                                                <PrimaryButton
                                                    onClick={() => { console.log('View Analysis') }}
                                                >
                                                    <BarChart3 className='w-4 h-4' />
                                                    {t('matchesPage.matchHistory.actions.view')}
                                                </PrimaryButton>
                                            ) : (
                                                <OutlineButton
                                                    onClick={() => { console.log('View Analysis') }}
                                                >
                                                    <BarChart3 className='w-4 h-4' />
                                                    {t('matchesPage.matchHistory.actions.view')}
                                                </OutlineButton>
                                            )}
                                        </TableCell>
                                        <TableCell>
                                            <div className='flex items-center gap-2'>
                                                {match.statusKey === 'processing' && (
                                                    <div className='w-2 h-2 rounded-full bg-orange-400' />
                                                )}
                                                <span className={cn('text-sm', match.statusColor)}>
                                                    {match.statusKey === 'ready' ? t('matchesPage.matchHistory.status.ready') : match.statusKey === 'processing' ? t('matchesPage.matchHistory.status.processing') : match.status}
                                                </span>
                                            </div>
                                        </TableCell>
                                        <TableCell>
                                            <DropdownMenu>
                                                <DropdownMenuTrigger asChild>
                                                    <div
                                                        className='flex items-center justify-center w-8 h-8 rounded-md bg-gray-600/10 text-gray-400 border-gray-600/10 cursor-pointer hover:bg-white/5 hover:text-white'
                                                    >
                                                        <BsThreeDots className='w-4 h-4' />
                                                    </div>
                                                </DropdownMenuTrigger>
                                                <DropdownMenuContent className='bg-gray-800 border-gray-700'>
                                                    <DropdownMenuItem className='text-gray-300 hover:bg-gray-700 hover:text-white'>
                                                        {t('matchesPage.matchHistory.actions.viewDetails')}
                                                    </DropdownMenuItem>
                                                    <DropdownMenuItem className='text-gray-300 hover:bg-gray-700 hover:text-white'>
                                                        {t('matchesPage.matchHistory.actions.editMatch')}
                                                    </DropdownMenuItem>
                                                    <DropdownMenuItem className='text-gray-300 hover:bg-gray-700 hover:text-white'>
                                                        {t('matchesPage.matchHistory.actions.deleteMatch')}
                                                    </DropdownMenuItem>
                                                </DropdownMenuContent>
                                            </DropdownMenu>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

export default MatchHistory