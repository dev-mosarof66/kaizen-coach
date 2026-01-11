import React from 'react'
import { Card, CardHeader, CardTitle, CardContent } from '../ui/card'
import { Button } from '../ui/button'
import { ChevronRight } from 'lucide-react'
import { cn } from '../../lib/utils'
import { useTranslation } from '../../contexts/translation-context'

const KeyInsights = ({insights}) => {
    const { t, language } = useTranslation()
    const isRTL = language === 'ar'

    return (
        <Card className="bg-gray-800/50 border-gray-700">
        <CardHeader className="flex flex-row items-center justify-between border-b border-gray-700">
            <CardTitle className="text-base lg:text-lg font-semibold text-gray-400">
                {t('reportsPage.keyInsights')}
            </CardTitle>
            <Button
                variant="ghost"
                className={cn("text-blue-400 hover:text-blue-300 hover:bg-transparent p-0 h-auto flex items-center gap-1")}
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
    )
}

export default KeyInsights