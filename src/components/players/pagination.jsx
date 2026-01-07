'use client'
import React, { useState } from 'react'
import { Button } from '../ui/button'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '../../lib/utils'
import { constClassName } from '../../constants/constants'
import { useTranslation } from '../../contexts/translation-context'

const Pagination = ({ totalItems = 127, itemsPerPage = 8 }) => {
    const { t } = useTranslation()
    const totalPages = Math.ceil(totalItems / itemsPerPage)
    const [currentPageIndex, setCurrentPageIndex] = useState(1)

    const getVisiblePages = () => {
        const pages = []
        const start = Math.max(currentPageIndex - 1, 1)
        const end = Math.min(currentPageIndex + 1, totalPages)
        for (let i = start; i <= end; i++) {
            pages.push(i)
        }
        return pages
    }

    const handlePrev = () => {
        if (currentPageIndex > 1) setCurrentPageIndex(currentPageIndex - 1)
    }

    const handleNext = () => {
        if (currentPageIndex < totalPages) setCurrentPageIndex(currentPageIndex + 1)
    }

    return (
        <div className='w-full flex flex-col gap-2 sm:flex-row items-center justify-between py-4'>
            <p className='text-sm sm:text-xs xl:text-xs'>
                {t('playersPage.pagination.showing')} {(currentPageIndex - 1) * itemsPerPage + 1} -{' '}
                {Math.min(currentPageIndex * itemsPerPage, totalItems)} {t('playersPage.pagination.of')} <span>{totalItems}</span> {t('playersPage.pagination.players')}
            </p>
            <div className='flex items-center gap-2'>
                <Button className={cn(constClassName.outlineButton)} onClick={handlePrev} disabled={currentPageIndex === 1}>
                    <ChevronLeft />
                </Button>
                <div className='flex items-center gap-3'>
                    {getVisiblePages().map((page) => (
                        <div
                            key={page}
                            className={cn(
                                page === currentPageIndex ? 'bg-blue-500 text-white px-2' : 'border border-gray-600 px-2'
                            )}
                        >
                            {page}
                        </div>
                    ))}
                </div>
                <Button className={cn(constClassName.outlineButton)} onClick={handleNext} disabled={currentPageIndex === totalPages}>
                    <ChevronRight />
                </Button>
            </div>
        </div>
    )
}

export default Pagination
