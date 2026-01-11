'use client'

import React from 'react'
import {
    TrendingUp,
    Shield,
    BarChart3,
} from 'lucide-react'
import ReportStats from '../components/reports/report-stats'
import { useTranslation } from '../contexts/translation-context'
import Header from '../components/reports/header'
import { GoalsByTimePeriodChart, MatchResultsTrendChart } from '../components/reports/charts-section'
import KeyInsights from '../components/reports/key-insights'

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
    const { t } = useTranslation()

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
            <Header />
            {/* Key Metrics Cards */}
            <ReportStats />

            {/* Charts Section */}
            <MatchResultsTrendChart matchResultsConfig={matchResultsConfig} matchResultsData={matchResultsData} />

            <div className='w-full grid grid-cols-1 lg:grid-cols-2 gap-6'>
                {/* Goals by Time Period Chart */}
                <GoalsByTimePeriodChart goalsConfig={goalsConfig} goalsByTimeData={goalsByTimeData} />
                {/* Key Insights Section */}
                <KeyInsights insights={insights} />

            </div>
        </div>
    )
}

export default ReportsView
