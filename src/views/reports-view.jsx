'use client'

import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'
import { Button } from '../components/ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select'
import {
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
    ChartLegend,
    ChartLegendContent,
} from '../components/ui/chart'
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Cell,
} from 'recharts'
import {
    Users,
    Download,
    TrendingUp,
    Shield,
    BarChart3,
    Sparkles,
    ChevronRight,
} from 'lucide-react'
import { cn } from '../lib/utils'
import ReportStats from '../components/reports/report-stats'
import { useTranslation } from '../contexts/translation-context'

// Match Results Data
const matchResultsData = [
    { month: 'Jun', wins: 5, draws: 1, losses: 0 },
    { month: 'Jul', wins: 4, draws: 2, losses: 1 },
    { month: 'Aug', wins: 6, draws: 0, losses: 1 },
    { month: 'Sep', wins: 5, draws: 1, losses: 1 },
    { month: 'Oct', wins: 4, draws: 2, losses: 0 },
    { month: 'Nov', wins: 5, draws: 1, losses: 1 },
]

const ReportsView = () => {
    const { t, language } = useTranslation()
    const isRTL = language === 'ar'
    
    const matchResultsConfig = {
        wins: {
            label: t('reportsPage.chartLabels.wins'),
            color: '#22c55e', // green
        },
        draws: {
            label: t('reportsPage.chartLabels.draws'),
            color: '#f97316', // orange
        },
        losses: {
            label: t('reportsPage.chartLabels.losses'),
            color: '#ef4444', // red
        },
        color: [
            '#22c55e', // green
            '#f97316', // orange
            '#ef4444', // red
        ]
    }

    // Goals by Time Period Data
    const goalsByTimeData = [
        { period: '0-15', goals: 8 },
        { period: '16-30', goals: 12 },
        { period: '31-45', goals: 15 },
        { period: '46-60', goals: 10 },
        { period: '61-75', goals: 18 },
        { period: '76-90', goals: 14 },
    ]

    const goalsConfig = {
        goals: {
            label: t('reportsPage.chartLabels.goals'),
            color: '#3b82f6', // blue
        },
    }

    // Key Insights
    const insights = [
        {
            title: t('reportsPage.insights.strongLateGame'),
            text: t('reportsPage.insights.strongLateGameText'),
            icon: TrendingUp,
            iconColor: 'text-green-400',
            iconBg: 'bg-green-500/20',
        },
        {
            title: t('reportsPage.insights.homeAdvantage'),
            text: t('reportsPage.insights.homeAdvantageText'),
            icon: Shield,
            iconColor: 'text-blue-400',
            iconBg: 'bg-blue-500/20',
        },
        {
            title: t('reportsPage.insights.trainingImpact'),
            text: t('reportsPage.insights.trainingImpactText'),
            icon: BarChart3,
            iconColor: 'text-orange-400',
            iconBg: 'bg-orange-500/20',
        },
    ]
    
    return (
        <div className='w-full flex flex-col gap-6 p-4 md:p-6'>
            {/* Header Section */}
            <div className='flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4'>
                <div className='flex flex-col gap-1'>
                    <h1 className='text-3xl font-bold text-white'>{t('reportsPage.title')}</h1>
                    <p className='text-sm text-gray-400'>{t('reportsPage.subtitle')}</p>
                </div>
                <div className='flex items-center gap-3'>
                    <Select defaultValue="this-season">
                        <SelectTrigger className="w-[140px] bg-gray-800/50 border-gray-700 text-white">
                            <SelectValue placeholder={t('reportsPage.thisSeason')} />
                        </SelectTrigger>
                        <SelectContent className="bg-gray-800 border-gray-700">
                            <SelectItem value="this-season" className="text-white hover:bg-gray-700">
                                {t('reportsPage.thisSeason')}
                            </SelectItem>
                            <SelectItem value="last-season" className="text-white hover:bg-gray-700">
                                {t('reportsPage.lastSeason')}
                            </SelectItem>
                        </SelectContent>
                    </Select>
                    <Select defaultValue="all-teams">
                        <SelectTrigger className="w-[140px] bg-gray-800/50 border-gray-700 text-white">
                            <SelectValue placeholder={t('reportsPage.allTeams')} />
                        </SelectTrigger>
                        <SelectContent className="bg-gray-800 border-gray-700">
                            <SelectItem value="all-teams" className="text-white hover:bg-gray-700">
                                {t('reportsPage.allTeams')}
                            </SelectItem>
                            <SelectItem value="u16" className="text-white hover:bg-gray-700">
                                U16
                            </SelectItem>
                        </SelectContent>
                    </Select>
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                        <Download className="h-4 w-4 mr-2" />
                        {t('reportsPage.exportPdf')}
                    </Button>
                </div>
            </div>

            {/* Key Metrics Cards */}
            <ReportStats />

            {/* Charts Section */}
            <div className='flex flex-col lg:flex-row gap-6'>
                {/* Match Results Trend Chart */}
                <Card className="w-full bg-gray-800/50 border-gray-700 ">
                    <CardHeader className="flex flex-row items-center justify-between pb-4">
                        <CardTitle className="text-base lg:text-lg font-semibold text-gray-400">
                            {t('reportsPage.matchResultsTrend')}
                        </CardTitle>
                        <span className="text-xs px-2 py-1 bg-green-500/20 text-green-400 rounded-md">
                            {t('reportsPage.season')} 2025/26
                        </span>
                    </CardHeader>
                    <CardContent>
                        <ChartContainer config={matchResultsConfig} className="h-[300px] w-full">
                            <BarChart
                                data={matchResultsData}
                                margin={{ top: 20, right: 30, left: 20, bottom: 40 }}
                            >
                                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                                <XAxis
                                    dataKey="month"
                                    tick={{ fill: '#9ca3af' }}
                                    axisLine={{ stroke: '#4b5563' }}
                                />
                                <YAxis
                                    tick={{ fill: '#9ca3af' }}
                                    axisLine={{ stroke: '#4b5563' }}
                                    domain={[0, 8]}
                                />
                                <ChartTooltip
                                    content={<ChartTooltipContent />}
                                    cursor={{ fill: 'transparent' }}
                                />
                                <ChartLegend
                                    content={<ChartLegendContent />}
                                    wrapperStyle={{ paddingTop: '20px' }}
                                />
                                <Bar dataKey="wins" stackId="a" fill="#22c55e" radius={[0, 0, 0, 0]} />
                                <Bar dataKey="draws" stackId="a" fill="#f97316" radius={[0, 0, 0, 0]} />
                                <Bar dataKey="losses" stackId="a" fill="#ef4444" radius={[4, 4, 0, 0]} />
                            </BarChart>
                        </ChartContainer>
                    </CardContent>
                </Card>

            </div>

            <div className='w-full grid grid-cols-1 lg:grid-cols-2 gap-6'>
                {/* Goals by Time Period Chart */}
                <Card className="w-full bg-gray-800/50 border-gray-700">
                    <CardHeader>
                        <CardTitle className="text-base lg:text-lg font-semibold text-gray-400">
                            {t('reportsPage.goalsByTimePeriod')}
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ChartContainer config={goalsConfig} className="h-48 w-full">
                            <BarChart
                                data={goalsByTimeData}
                                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                            >
                                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                                <XAxis
                                    dataKey="period"
                                    tick={{ fill: '#9ca3af' }}
                                    axisLine={{ stroke: '#4b5563' }}
                                />
                                <YAxis
                                    tick={{ fill: '#9ca3af' }}
                                    axisLine={{ stroke: '#4b5563' }}
                                    domain={[0, 20]}
                                />
                                <ChartTooltip
                                    content={<ChartTooltipContent />}
                                    cursor={{ fill: 'rgba(59, 130, 246, 0.2)' }}
                                />
                                <Bar dataKey="goals" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                            </BarChart>
                        </ChartContainer>
                    </CardContent>
                </Card>
                {/* Key Insights Section */}
                <Card className="bg-gray-800/50 border-gray-700">
                    <CardHeader className="flex flex-row items-center justify-between border-b border-gray-700">
                        <CardTitle className="text-base lg:text-lg font-semibold text-gray-400">
                            {t('reportsPage.keyInsights')}
                        </CardTitle>
                        <Button
                            variant="ghost"
                            className={cn("text-blue-400 hover:text-blue-300 hover:bg-transparent p-0 h-auto flex items-center gap-1", isRTL && "flex-row-reverse")}
                        >
                            {t('reportsPage.viewAll')}
                            <ChevronRight className={cn("h-4 w-4", isRTL && "rotate-180")} />
                        </Button>
                    </CardHeader>
                    <CardContent className={cn('p-0 px-2')}>
                        <div className='w-full flex flex-col gap-2 h-48 overflow-y-auto scrollbar-hidden'>
                            {insights.map((insight, index) => {
                                const Icon = insight.icon
                                return (
                                    <Card
                                        key={index}
                                        className="w-full bg-gray-900/50 border-gray-700 hover:bg-gray-900/70 transition-colors"
                                    >
                                        <CardContent className="px-2 py-0 flex items-start gap-3">
                                            <div className={cn('size-8 flex items-center justify-center rounded-full', insight.iconBg)}>
                                                <Icon className={cn('size-4 text-white', insight.iconColor)} />
                                            </div>
                                            <div className='flex flex-col gap-1'>
                                                <h3 className='text-sm font-semibold text-gray-400'>
                                                    {insight.title}
                                                </h3>
                                                <p className='text-xs text-gray-300'>
                                                    {insight.text}
                                                </p>
                                            </div>
                                        </CardContent>
                                    </Card>
                                )
                            })}
                        </div>
                    </CardContent>
                </Card>

            </div>
        </div>
    )
}

export default ReportsView
