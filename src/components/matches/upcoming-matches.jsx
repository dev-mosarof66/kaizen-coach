'use client'
import React from 'react'
import { Card, CardContent } from '../ui/card'
import { Badge } from '../ui/badge'
import { Button } from '../ui/button'
import { Calendar, MapPin, Play } from 'lucide-react'
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '../ui/select'
import { OutlineButton, PrimaryButton } from '../common/button'
import { useTranslation } from '../../contexts/translation-context'

const UpcomingMatches = () => {
  const { t } = useTranslation()

  const upcomingMatches = [
    {
      id: 1,
      type: t('matchesPage.upcomingMatches.friendlyMatchType'),
      team1: 'U18 Tigers',
      team1Badge: 'U18',
      team2: 'Hawks United',
      team2Badge: 'HAW',
      date: 'Nov 7, 2025',
      time: '6:30 PM',
      venue: 'Away',
      status: t('matchesPage.upcomingMatches.upcoming')
    },
    {
      id: 2,
      type: t('matchesPage.upcomingMatches.friendlyMatchType'),
      team1: 'U18 Tigers',
      team1Badge: 'U18',
      team2: 'Hawks United',
      team2Badge: 'HAW',
      date: 'Nov 7, 2025',
      time: '6:30 PM',
      venue: 'Away',
      status: t('matchesPage.upcomingMatches.upcoming')
    }
  ]


  return (
    <div className='w-full flex flex-col gap-4'>
      <div className='w-full flex flex-col sm:flex-row items-start xl:items-center justify-between gap-4'>
        <div className='flex items-center gap-2'>
          <h2 className='text-lg font-semibold text-white'>{t('matchesPage.upcomingMatches.title')}</h2>
          <Badge variant='secondary' className='bg-blue-500/20 text-blue-400 border-blue-500/30'>
            2 {t('matchesPage.upcomingMatches.matches')}
          </Badge>
        </div>

        <Select defaultValue='league'>
          <SelectTrigger className='w-[180px] bg-gray-800/60 border-gray-700 text-gray-300'>
            <SelectValue placeholder={t('matchesPage.upcomingMatches.leagueMatch')} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value='league'>{t('matchesPage.upcomingMatches.leagueMatch')}</SelectItem>
            <SelectItem value='friendly'>{t('matchesPage.upcomingMatches.friendlyMatch')}</SelectItem>
            <SelectItem value='cup'>{t('matchesPage.upcomingMatches.cupMatch')}</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        {upcomingMatches.map((match) => (
          <MatchCard key={match.id} match={match} />
        ))}
      </div>
    </div>
  )
}


const MatchCard = ({ match }) => {
  const { t } = useTranslation()
  
  return (
    <Card key={match.id} className='bg-gray-800/60 border-gray-800 hover:shadow-inner cursor-pointer transition-all duration-300 hover:bg-gray-800/70'>
      <CardContent className='p-4 sm:p-6 py-3 flex flex-col gap-6'>
        <div className='flex items-center justify-between'>
          <Badge className='bg-purple-500/10 text-purple-400 border-purple-500/10'>
            {match.type}
          </Badge>
          <Badge className='bg-yellow-500/10 text-yellow-400 border-yellow-500/10'>
            {match.status}
          </Badge>
        </div>

        <div className='w-full max-w-sm mx-auto flex items-center justify-between'>
          <div className='flex flex-col items-center gap-1'>
            <p className='text-gray-300 font-medium'>{match.team1}</p>
            <div className='bg-blue-500/10 text-blue-400 border-blue-500/10 p-6 rounded-md text-xs'>
              {match.team1Badge}
            </div>
          </div>
          <span className='text-gray-300 text-3xl font-bold'>{t('matchesPage.upcomingMatches.vs')}</span>
          <div className='flex flex-col items-center gap-1'>
            <p className='text-gray-300 font-medium'>{match.team2}</p>
            <div className='bg-gray-600/10 text-gray-300 border-gray-600/10 p-6 rounded-md text-xs'>
              {match.team2Badge}
            </div>
          </div>
        </div>

        {/* border  */}
        <div className='w-full h-px bg-gray-700' />


        <div className='flex flex-col gap-2'>
          <div className='flex items-center gap-2 text-gray-400 text-sm'>
            <Calendar className='w-4 h-4' />
            <span>{match.date} • {match.time}</span>
          </div>
          <div className='flex items-center gap-2 text-gray-400 text-sm'>
            <MapPin className='w-4 h-4' />
            <span>{t('matchesPage.upcomingMatches.venue')}: {match.venue}</span>
          </div>
        </div>

        {/* border  */}
        <div className='w-full h-px bg-gray-700' />

        <div className='w-full flex  items-center justify-between gap-3'>
          <PrimaryButton className='flex-1 bg-blue-500 hover:bg-blue-600 text-white'>
            <Play className='w-4 h-4' />
            {t('matchesPage.upcomingMatches.record')}
          </PrimaryButton>
          <OutlineButton className='flex-1 bg-transparent border-gray-600 hover:bg-white/5 text-white'>
            {t('matchesPage.upcomingMatches.editDetails')}
          </OutlineButton>
        </div>
      </CardContent>
    </Card>
  )
}


export default UpcomingMatches
