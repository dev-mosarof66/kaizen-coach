'use client'
import { ArrowLeft, ChevronRight } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React from 'react'
import { useTranslation } from '../../contexts/translation-context'

const Navigation = () => {
    const router = useRouter();
    const { t } = useTranslation()
    
    return (
        <div className="flex text-gray-500 gap-4 px-0 md:px-6">
            <div className="flex items-center gap-2 text-gray-400 text-base">
                <div className="flex items-center gap-1">
                    <p onClick={() => router.back()} className="hover:text-white transition-colors cursor-pointer">{t('playerProfilePage.navigation.players')}</p>
                    <ChevronRight className="w-4 h-4" />
                </div>
                <div className="flex items-center gap-1">
                    <p onClick={() => router.back()} className="hover:text-white transition-colors cursor-pointer">U16 Eagles</p>
                    <ChevronRight className="w-4 h-4" />
                </div>
                <p className="text-gray-400 font-semibold">Lionel Messi</p>
            </div>
        </div>
    )
}

export default Navigation