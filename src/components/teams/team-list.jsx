import React from 'react'
import { Card } from '../ui/card'
import { cn } from '@/lib/utils'
import { Trophy } from 'lucide-react'
import { FaRegCalendar } from 'react-icons/fa'
import { OutlineButton, PrimaryButton } from '../common/button'

const teams = [
  {
    id: 1,
    name: 'Team C - U16',
    coach: 'Coach Saleh',
    activePlayers: 18,
    winRate: 67,
    lastMatchResults: ['red', 'yellow', 'green', 'green', 'blue'],
    nextMatch: {
      opponent: 'Falcons FC',
      date: 'Nov 14',
      time: '4:00 PM'
    },
    borderColor: 'red'
  },
  {
    id: 2,
    name: 'Team A - U18',
    coach: 'Coach Thompson',
    activePlayers: 20,
    winRate: 73,
    lastMatchResults: ['red', 'orange', 'yellow', 'green', 'blue'],
    nextMatch: {
      opponent: 'City Academy',
      date: 'Nov 13',
      time: '3:00 PM'
    },
    borderColor: 'orange'
  },
  {
    id: 3,
    name: 'Team B - U14',
    coach: 'Coach Williams',
    activePlayers: 16,
    winRate: 53,
    lastMatchResults: ['red', 'orange', 'yellow', 'green', 'green'],
    nextMatch: {
      opponent: 'Rangers Youth',
      date: 'Nov 15',
      time: '2:00 PM'
    },
    borderColor: 'blue'
  },
  {
    id: 4,
    name: 'Eagles - U16',
    coach: 'Coach Ahmed',
    activePlayers: 19,
    winRate: 61,
    lastMatchResults: ['red', 'yellow', 'green', 'green', 'blue'],
    nextMatch: {
      opponent: 'Lions FC',
      date: 'Nov 16',
      time: '5:00 PM'
    },
    borderColor: 'purple'
  },
  {
    id: 5,
    name: 'Tigers - U18',
    coach: 'Coach Johnson',
    activePlayers: 21,
    winRate: 60,
    lastMatchResults: ['red', 'orange', 'yellow', 'green', 'green'],
    nextMatch: null,
    borderColor: 'green'
  },
  {
    id: 6,
    name: 'Juniors - U14',
    coach: 'Coach Martinez',
    activePlayers: 15,
    winRate: 44,
    lastMatchResults: ['red', 'orange', 'yellow', 'green', 'green'],
    nextMatch: {
      opponent: 'Wolves Academy',
      date: 'Nov 14',
      time: '1:00 PM'
    },
    borderColor: 'pink'
  }
]

const borderColors = {
  red: 'border-t-red-500',
  orange: 'border-t-orange-500',
  blue: 'border-t-blue-500',
  purple: 'border-t-purple-500',
  green: 'border-t-green-500',
  pink: 'border-t-pink-500'
}

const iconBgColors = {
  red: 'bg-red-500/20',
  orange: 'bg-orange-500/20',
  blue: 'bg-blue-500/20',
  purple: 'bg-purple-500/20',
  green: 'bg-green-500/20',
  pink: 'bg-pink-500/20'
}

const iconTextColors = {
  red: 'text-red-400',
  orange: 'text-orange-400',
  blue: 'text-blue-400',
  purple: 'text-purple-400',
  green: 'text-green-400',
  pink: 'text-pink-400'
}

const matchResultColors = {
  red: 'bg-red-500',
  orange: 'bg-orange-500',
  yellow: 'bg-yellow-500',
  green: 'bg-green-500',
  blue: 'bg-blue-500'
}

const TeamList = () => {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
        {teams.map((team) => (
          <TeamCard key={team.id} team={team} />
        ))}
      </div>
    </div>
  )
}

const TeamCard = ({ team }) => {
  const borderClass = borderColors[team.borderColor]
  const iconBgClass = iconBgColors[team.borderColor]
  const iconTextClass = iconTextColors[team.borderColor]

  return (
    <Card
      className={cn(
        'relative overflow-hidden border-0 border-t-4 bg-gray-800/70 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300',
        borderClass
      )}
    >
      <div className="p-4 flex flex-col gap-3">
        {/* Header with Trophy Icon */}
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <h3 className="text-gray-400 font-semibold text-lg mb-1">{team.name}</h3>
            <p className="text-gray-400 text-sm">{team.coach}</p>
          </div>
          <div className={cn('p-2.5 rounded-lg', iconBgClass)}>
            <Trophy className={cn('size-5', iconTextClass)} />
          </div>
        </div>

        {/* Active Players */}
        <div className="flex items-center gap-2">
          <span className="text-gray-400 text-sm">Active Players:</span>
          <span className="text-gray-200 font-medium">{team.activePlayers} Active</span>
        </div>

        {/* Win Rate */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <span className="text-gray-400 text-sm">Win Rate</span>
            <span className="text-gray-200 font-semibold">{team.winRate}%</span>
          </div>
          <div className="w-full h-1.5 bg-gray-700 rounded-full overflow-hidden">
            <div
              className="h-full bg-blue-600 rounded-full transition-all"
              style={{ width: `${team.winRate}%` }}
            />
          </div>
        </div>

        {/* Last Match Results */}
        <div className="w-full flex-col flex items-start justify-between gap-2">
          <p className="text-gray-400 text-sm">Last Match</p>
          <div className="w-full">
            <div className="flex items-center gap-1">
              {team.lastMatchResults.map((color, index) => (
                <div
                  key={index} className={cn('w-full h-1.5 rounded-sm', matchResultColors[color])} />
              ))}
            </div>
          </div>
        </div>

        {/* Next Match */}
        <div className="w-full bg-gray-900 p-2 rounded-lg">
          {team.nextMatch ? (
            <div className="flex flex-col gap-1">
              <p className="flex items-center gap-2">
                <FaRegCalendar className="size-3.5 text-gray-400" />
                <span className="text-gray-400 text-sm">Next Match</span>
              </p>
              <span className="text-gray-300 text-sm">
                vs {team.nextMatch.opponent}
              </span>
              <span className="text-gray-400 text-xs">{team.nextMatch.date} • {team.nextMatch.time}</span>
            </div>
          ) : (
            <div className="w-full h-16 flex items-center justify-center text-gray-500 text-sm">No upcoming matches</div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 pt-2">
          <PrimaryButton className='flex-1 bg-linear-to-br from-blue-500 via-blue-500 to-purple-500'>
            See Details
          </PrimaryButton>

          <OutlineButton className='flex-1 bg-transparent border-gray-600 hover:bg-white/5 text-white'>
            Add Player
          </OutlineButton>
        </div>
      </div>
    </Card>
  )
}

export default TeamList