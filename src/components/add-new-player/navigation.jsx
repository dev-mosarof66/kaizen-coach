'use client'
import { ArrowLeft, ChevronRight } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React from 'react'
import { useTranslation } from '../../contexts/translation-context'
import { cn } from '../../lib/utils'

const Navigation = () => {
    const router = useRouter();
    const { language } = useTranslation()
    const isRTL = language === 'ar'
    
    return (
        <div className={cn("flex text-gray-500 gap-4 px-0 md:px-6", isRTL && "flex-row-reverse")}>
            {/* Back Button */}
            {/* <div className={cn("flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity", isRTL && "flex-row-reverse")}>
                <ArrowLeft className={cn("w-5 h-5", isRTL && "rotate-180")} />
                <p className="text-base font-medium">Back</p>
            </div> */}

            {/* Breadcrumbs */}
            <div className={cn("flex items-center gap-2 text-gray-400 text-base", isRTL && "flex-row-reverse")}>
                <div className={cn("flex items-center gap-1", isRTL && "flex-row-reverse")}>
                    <p onClick={() => router.back()} className="hover:text-white transition-colors cursor-pointer">Players</p>
                    <ChevronRight className={cn("w-4 h-4", isRTL && "rotate-180")} />
                </div>
                <p className="text-gray-400 font-semibold text-sm">New Player</p>
            </div>
        </div>
    )
}

export default Navigation