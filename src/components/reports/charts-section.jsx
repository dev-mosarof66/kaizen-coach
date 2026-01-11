import React from 'react'
import { Card, CardHeader, CardContent, CardTitle } from '../ui/card'
import { ChartContainer, ChartTooltip, ChartTooltipContent, ChartLegend, ChartLegendContent } from '../ui/chart'
import { BarChart, CartesianGrid, XAxis, YAxis, Bar } from 'recharts'
import { useTranslation } from '../../contexts/translation-context'



export const MatchResultsTrendChart = ({ matchResultsConfig, matchResultsData }) => {
    const { t } = useTranslation()
    return (
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
    )
}

export const GoalsByTimePeriodChart = ({ goalsConfig, goalsByTimeData }) => {
    const { t } = useTranslation()
    return (
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
    )
}