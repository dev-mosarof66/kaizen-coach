'use client'
import React from 'react'
import { CardContent } from '../ui/card'
import { PrimaryButton } from '../common/button'
import { Download, Save, Paperclip } from 'lucide-react'
import { useTranslation } from '../../contexts/translation-context'

const BottomAction = () => {
    const { t } = useTranslation()
    return (
        <CardContent className="w-full max-w-6xl mx-auto flex flex-col gap-2 pb-2 px-0">
        <div className="w-full flex flex-col xl:flex-row items-start xl:items-center justify-between gap-4">
            {/* Auto-save Status */}
            <div className="flex items-center gap-2 text-sm text-gray-400">
                <span className="text-green-400">{t('tacticalBoard.bottomAction.autoSaveEnabled')}</span>
                <span>•</span>
                <span>{t('tacticalBoard.bottomAction.lastSavedMinutes').replace('{minutes}', '2')}</span>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-2">
                <PrimaryButton
                    className="flex-1 sm:flex-none w-full sm:w-fit bg-gray-700/50 border-gray-600 text-white hover:bg-gray-700"
                >
                    <Download className="size-4" />
                    <span className=" text-xs sm:text-sm">{t('tacticalBoard.bottomAction.export')}</span>
                </PrimaryButton>
                <PrimaryButton
                    className="bg-blue-600 hover:bg-blue-700 text-white"
                >
                    <Save className="size-4" />
                    <span className="text-xs sm:text-sm">{t('tacticalBoard.bottomAction.savePlan')}</span>
                </PrimaryButton>
                <PrimaryButton
                    className="flex-1 sm:flex-none w-full sm:w-fit bg-gray-700/50 border-gray-600 text-white hover:bg-gray-700"
                >
                    <Paperclip className="size-4" />
                    <span className="text-xs sm:text-sm">{t('tacticalBoard.bottomAction.attachToTask')}</span>
                </PrimaryButton>
            </div>
        </div>
    </CardContent>
    )
}

export default BottomAction