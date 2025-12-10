'use client'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import React from 'react'

const data = [
  {
    id: 1,
    label: "Dribbling",
    value: 90
  },
  {
    id: 2,
    label: "Vision & Passing",
    value: 95
  },
  {
    id: 3,
    label: "Finishing",
    value: 88
  }
]

const DevelopmentFocus = () => {
  return (
    <Card className={'w-full bg-gray-800 border border-gray-700 text-white p-4'}>
      <CardHeader className={'p-0'}>
        <h1 className='text-lg font-semibold'>Development Focus</h1>
      </CardHeader>
      <div className="w-full h-px bg-gray-700" />
      <CardContent className={'p-0'}>
        <div className='w-full flex flex-col gap-4'>
          {
            data.map((d, index) => (
              <div key={index} className='w-full flex flex-col gap-2'>
                <div className='w-full flex items-center justify-between px-1'>
                  <p className='text-base'>{d.label}</p>
                  <p>{d.value}%</p>
                </div>
                <div>
                  <div className="w-full">
                    <div className="w-full h-2 bg-blue-600/20 rounded-md overflow-hidden border border-gray-700">
                      <div
                        className={cn(
                          "h-full rounded-md transition-all duration-300 bg-blue-600"
                        )}
                        style={{ width: `${d.value}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </CardContent>
    </Card>
  )
}

export default DevelopmentFocus