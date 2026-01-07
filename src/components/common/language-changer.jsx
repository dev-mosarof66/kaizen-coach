'use client'
import React, { useState, useEffect } from 'react'
import { Globe } from 'lucide-react'
import { useTranslation } from '../../contexts/translation-context'

const languages = [
    { id: 2, name: 'Arabic', code: 'ar' },
    { id: 1, name: 'English', code: 'en' },
]

const LanguageConverter = () => {
    const [open, setOpen] = useState(false)
    const { language, changeLanguage, t } = useTranslation()

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
            <div className='flex items-center gap-1 cursor-pointer relative border border-gray-600 rounded-md px-2 py-1 md:px-3 hover:bg-gray-950/10 active:scale-95 transition-all duration-300 delay-75' onClick={() => setOpen(!open)}>
                <Globe size={16} />
                <span className='text-base'>{language.toUpperCase()}</span>
            </div>
            {open && (
                <div className='absolute top-12 right-20 lg:right-24 md:top-16 z-50 w-40 bg-gray-900 rounded-md shadow-md flex flex-col gap-2 py-4
                '>
                    {languages.map((lang) => (
                        <div key={lang.id} className=' px-4 py-2 hover:bg-gray-800/50 active:scale-95 transition-all duration-300 delay-75 cursor-pointer text-sm' onClick={() => {
                            handleLanguageChange(lang.code)
                        }}>{getLanguageName(lang.code)}</div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default LanguageConverter