'use client'

import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import {
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from '../ui/chart'
import {
    LineChart,
    Line,
    PieChart,
    Pie,
    Cell,
    XAxis,
    YAxis,
    CartesianGrid,
    ResponsiveContainer,
    AreaChart,
    Area,
} from 'recharts'
import {
    Clock,
    Users,
    Trophy,
    TrendingUp,
} from 'lucide-react'
import { cn } from '../../lib/utils'
import { useTranslation } from '../../contexts/translation-context'



const getinitials = (name) => {
    return name.split(' ').map(word => word[0]).join('')
}


// Completion Trend Data
const completionTrendData = [
    { day: 'Mon', value: 20 },
    { day: 'Tue', value: 10 },
    { day: 'Wed', value: 28 },
    { day: 'Thu', value: 45 },
    { day: 'Fri', value: 52 },
    { day: 'Sat', value: 48 },
    { day: 'Sun', value: 40 },
]



// Average Ratings Data (static data, no translation needed)
const averageRatings = [
    { name: 'Tactical Drill #2', rating: 8.5 },
    { name: 'Dribbling Drill', rating: 7.2 },
    { name: 'Passing & Control', rating: 9.1 },
    { name: '4-4-2 Formation', rating: 8.0 },
    { name: 'Sprint Training', rating: 6.8 },
]

// Player Participation Data
const playerParticipation = [
    { name: 'AA Ahmed Ali', percentage: 90 },
    { name: 'MH Mohammed Hassan', percentage: 85 },
    { name: 'KI Khalid Ibrahim', percentage: 78 },
    { name: 'OY Omar Youssef', percentage: 72 },
    { name: 'SA Salem Ahmed', percentage: 68 },
]

const AIAnalytics = () => {
    const { t } = useTranslation()

    // Stat Cards Data
    const statCards = [
        {
            label: t('aiAnalytics.stats.avgCompletionTime'),
            value: '4.2 days',
            change: '-12%',
            isPositive: false,
            icon: Clock,
            iconColor: 'text-blue-400',
        },
        {
            label: t('aiAnalytics.stats.playerEngagement'),
            value: '82%',
            change: '+8%',
            isPositive: true,
            icon: Users,
            iconColor: 'text-green-400',
        },
        {
            label: t('aiAnalytics.stats.successRate'),
            value: '94%',
            change: '+5%',
            isPositive: true,
            icon: Trophy,
            iconColor: 'text-yellow-400',
        },
        {
            label: t('aiAnalytics.stats.improvement'),
            value: '+18%',
            change: '+3%',
            isPositive: true,
            icon: TrendingUp,
            iconColor: 'text-purple-400',
        },
    ]

    const completionTrendConfig = {
        value: {
            label: t('aiAnalytics.completionTrend.progress'),
            color: '#22c55e',
        },
    }

    // Category Breakdown Data
    const categoryData = [
        { name: t('aiAnalytics.categoryBreakdown.tactical'), value: 40, color: '#3b82f6' },
        { name: t('aiAnalytics.categoryBreakdown.fitness'), value: 30, color: '#22c55e' },
        { name: t('aiAnalytics.categoryBreakdown.technical'), value: 20, color: '#a855f7' },
        { name: t('aiAnalytics.categoryBreakdown.recovery'), value: 10, color: '#f97316' },
    ]

    // Key Insights
    const keyInsights = [
        t('aiAnalytics.keyInsights.insight1'),
        t('aiAnalytics.keyInsights.insight2'),
        t('aiAnalytics.keyInsights.insight3'),
        t('aiAnalytics.keyInsights.insight4'),
    ]

    const overallAverage = averageRatings.reduce((sum, item) => sum + item.rating, 0) / averageRatings.length

    return (
        <div className="w-full flex flex-col gap-6 p-2 md:p-6">
            {/* Stat Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {statCards.map((stat, index) => {
                    const Icon = stat.icon
                    return (
                        <Card
                            key={index}
                            className="bg-gray-800/50 border-gray-700 rounded-xl"
                        >
                            <CardContent className="p-4">
                                <div className="flex items-center justify-between mb-4">
                                    <div className='w-full flex items-center justify-between gap-2'>
                                        <p className="text-base text-gray-400">{stat.label}</p>

                                        <div className={cn('p-2 rounded-full size-8 flex items-center justify-center bg-gray-900/50', stat.iconColor)}>
                                            <Icon className="h-5 w-5" />
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full flex items-center gap-2">
                                    <h3 className="text-xl font-bold text-gray-300">{stat.value}</h3>
                                    <p
                                        className={cn(
                                            'px-2 py-1 rounded-md text-sm font-medium',
                                            stat.isPositive
                                                ? ' text-green-400'
                                                : ' text-red-400'
                                        )}
                                    >
                                        {stat.change}
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                    )
                })}
            </div>

            {/* Completion Trend Chart */}
            <Card className="bg-gray-800/50 border-gray-700 rounded-xl">
                <CardHeader>
                    <CardTitle className="text-gray-400 text-lg font-semibold">
                        {t('aiAnalytics.completionTrend.title')}
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-col gap-4">
                        <ChartContainer config={completionTrendConfig} className="h-64 w-full">
                            <AreaChart
                                accessibilityLayer
                                data={completionTrendData}
                                margin={{
                                    left: 12,
                                    right: 12,
                                }}
                            >
                                <CartesianGrid vertical={false} />
                                <XAxis
                                    dataKey="day"
                                    tickLine={false}
                                    axisLine={false}
                                    tickMargin={8}
                                    tickFormatter={(value) => value.slice(0, 3)}
                                />
                                <ChartTooltip
                                    cursor={false}
                                    content={<ChartTooltipContent indicator="line" />}
                                />
                                <Area
                                    dataKey="value"
                                    type="natural"
                                    fill="var(--color-green-400)"
                                    fillOpacity={0.4}
                                    stroke="var(--color-green-400)"
                                />
                            </AreaChart>
                        </ChartContainer>
                        <div className="flex items-center justify-between text-sm">
                            <p className="text-gray-400">{t('aiAnalytics.completionTrend.progressOver7Days')}</p>
                            <p className="text-green-400 font-semibold">{t('aiAnalytics.completionTrend.overallGrowth')}</p>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Category Breakdown */}
                <Card className="bg-gray-800/50 border-gray-700 rounded-xl">
                    <CardHeader>
                        <CardTitle className="text-gray-400 text-lg font-semibold">
                            {t('aiAnalytics.categoryBreakdown.title')}
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="flex flex-col items-center gap-6">
                            <div className="relative">
                                <ChartContainer config={{}} className="h-48 w-48">
                                    <PieChart>
                                        <Pie
                                            data={categoryData}
                                            cx="50%"
                                            cy="50%"
                                            innerRadius={70}
                                            outerRadius={80}
                                            paddingAngle={2}
                                            dataKey="value"
                                        >
                                            {categoryData.map((entry, index) => (
                                                <Cell key={`cell-${index}`} fill={entry.color} />
                                            ))}
                                        </Pie>
                                        <ChartTooltip content={<ChartTooltipContent />} />
                                    </PieChart>
                                </ChartContainer>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="text-center">
                                        <p className="text-2xl font-bold text-white">100%</p>
                                        <p className="text-xs text-gray-400">{t('aiAnalytics.categoryBreakdown.total')}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full grid grid-cols-2 gap-3">
                                {categoryData.map((category, index) => (
                                    <div key={index} className="flex items-center gap-2">
                                        <div
                                            className="w-3 h-3 rounded-full"
                                            style={{ backgroundColor: category.color }}
                                        />
                                        <div className="flex-1">
                                            <p className="text-sm text-gray-300">{category.name}</p>
                                            <p className="text-xs text-gray-400">{category.value}%</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Average Ratings */}
                <Card className="bg-gray-800/50 border-gray-700 rounded-xl">
                    <CardHeader>
                        <CardTitle className="text-gray-400 text-lg font-semibold">
                            {t('aiAnalytics.averageRatings.title')}
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="flex flex-col gap-4">
                            {averageRatings.map((drill, index) => (
                                <div key={index} className="flex flex-col gap-2">
                                    <div className="flex items-center justify-between">
                                        <p className="text-sm text-gray-300">{drill.name}</p>
                                        <p className="text-sm font-semibold text-orange-600">
                                            {drill.rating}/10
                                        </p>
                                    </div>
                                    <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                                        <div
                                            className="h-full rounded-full transition-all duration-500 bg-orange-600"
                                            style={{
                                                width: `${(drill.rating / 10) * 100}%`,
                                            }}
                                        />
                                    </div>
                                </div>
                            ))}
                            <div className="pt-4 border-t border-gray-700">
                                <div className="flex items-center justify-between">
                                    <p className="text-sm font-semibold text-gray-300">
                                        {t('aiAnalytics.averageRatings.overallAverage')}
                                    </p>
                                    <p className="text-lg font-bold text-white">
                                        {overallAverage.toFixed(1)}/10
                                    </p>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Player Participation */}
                <Card className="bg-gray-800/50 border-gray-700 rounded-xl">
                    <CardHeader>
                        <CardTitle className="text-gray-400 text-lg font-semibold">
                            {t('aiAnalytics.playerParticipation.title')}
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="flex flex-col gap-4">
                            {playerParticipation.map((player, index) => (
                                <div key={index} className="flex flex-col gap-2">
                                    <div className='w-full flex items-center gap-2'>

                                        {/* image  */}
                                        <div className='size-7 flex items-center justify-center bg-blue-500/50 border border-gray-700 rounded-full'>
                                            <p className='text-sm text-blue-400'>{getinitials(player.name).slice(0, 2)}</p>
                                        </div>
                                        <div className="flex-1 flex items-center justify-between">
                                            <p className="text-sm text-gray-300">{player.name}</p>
                                            <p className="text-sm font-semibold text-green-400">
                                                {player.percentage}%
                                            </p>
                                        </div>
                                    </div>
                                    <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                                        <div
                                            className="h-full bg-green-500 rounded-full transition-all duration-500"
                                            style={{ width: `${player.percentage}%` }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                {/* Key Insights */}
                <Card className="bg-gray-800/50 border-gray-700 rounded-xl">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-gray-400 text-lg font-semibold">
                            <TrendingUp className='h-5 w-5 text-orange-600' />
                            <span>{t('aiAnalytics.keyInsights.title')}</span>
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ul className="flex flex-col gap-3">
                            {keyInsights.map((insight, index) => (
                                <li
                                    key={index}
                                    className="text-sm text-gray-300 leading-relaxed flex items-start gap-2"
                                >
                                    <span className="text-green-400 size-3">•</span>
                                    <span
                                        dangerouslySetInnerHTML={{
                                            __html: insight.replace(
                                                /\*\*(.*?)\*\*/g,
                                                '<strong class="text-white font-semibold">$1</strong>'
                                            ),
                                        }}
                                    />
                                </li>
                            ))}
                        </ul>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

export default AIAnalytics

