'use client'
import React, { useState, useEffect } from 'react'
import { Globe } from 'lucide-react'
import { useTranslation } from '../../contexts/translation-context'
import { useIsMobile } from '../../hooks/use-mobile'
import { cn } from '../../lib/utils'

const languages = [
    { id: 2, name: 'Arabic', code: 'ar' },
    { id: 1, name: 'English', code: 'en' },
]



const LanguageConverter = () => {
    const [open, setOpen] = useState(false)
    const { language, changeLanguage, t } = useTranslation()

    const isRTL = language === 'ar'
    const isMobile = useIsMobile()


    useEffect(() => {
        // Load language from localStorage on mount
        const savedLanguage = localStorage.getItem('language') || 'en'
        if (savedLanguage !== language) {
            changeLanguage(savedLanguage)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const handleLanguageChange = (code) => {
        changeLanguage(code)
        setOpen(false)
    }

    const getLanguageName = (code) => {
        if (code === 'en') {
            return t('header.language.english')
        } else if (code === 'ar') {
            return t('header.language.arabic')
        }
        return code.toUpperCase()
    }

    return (
        <div>
            <div className='flex items-center gap-1 cursor-pointer relative border border-gray-700 rounded-md p-1.5 md:p-2.5 xl:p-3 hover:bg-gray-950/10 active:scale-95 transition-all duration-300 delay-75' onClick={() => setOpen(!open)}>
                <Globe size={17} className='text-gray-400' />
                <span className='text-base hidden text-gray-400'>{language.toUpperCase()}</span>
            </div>
            {open && (
                <div className={cn('absolute top-14 z-50 w-40 bg-gray-900 rounded-md shadow-md flex flex-col gap-2 py-4', isRTL ? (isMobile ? 'left-0' : 'left-0') : 'right-0')}
                >
                    {languages.map((lang) => (
                        <div key={lang.id} className={cn('px-4 py-2 hover:bg-gray-800/50 active:scale-95 transition-all duration-300 delay-75 cursor-pointer text-sm', isRTL && 'text-right')} onClick={() => {
                            handleLanguageChange(lang.code)
                        }}>{getLanguageName(lang.code)}</div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default LanguageConverter