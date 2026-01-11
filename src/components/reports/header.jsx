'use client'
import React from 'react'
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '../ui/select'
import { Button } from '../ui/button'
import { Download } from 'lucide-react'
import { useTranslation } from '../../contexts/translation-context'

const Header = () => {
    const { t } = useTranslation()
    return (
        <div className='flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4'>
            <div className='flex flex-col gap-1'>
                <h1 className='text-3xl font-bold text-white'>{t('reportsPage.title')}</h1>
                <p className='text-sm text-gray-400'>{t('reportsPage.subtitle')}</p>
            </div>
            <div className='w-full lg:w-fit flex flex-col items-start sm:flex-row sm:items-center gap-3 overflow-x-auto'>
                <div className='flex items-center gap-2'>
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
                </div>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                    <Download className="h-4 w-4 mr-2" />
                    {t('reportsPage.exportPdf')}
                </Button>
            </div>
        </div>

    )
}

export default Header