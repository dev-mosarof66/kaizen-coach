'use client'

import React, { useState } from 'react'
import { Card, CardContent } from '../components/ui/card'
import { Button } from '../components/ui/button'
import { Input } from '../components/ui/input'
import {
    Sparkles,
    X,
    TrendingUp,
    Target,
    Activity,
    Lightbulb,
    Send,
    User,
} from 'lucide-react'
import { cn } from '../lib/utils'
import { LuSparkles } from 'react-icons/lu'
import { RiRobot2Fill } from "react-icons/ri";
import { useTranslation } from '../contexts/translation-context'


const AiAssistantView = () => {
    const { t } = useTranslation()
    
    const chronologicalContent = {
        [t('aiAssistantPage.dateLabels.today')]: [
            'Explore the latest trends in global footbal...',
            'Subject: Follow-Up on Our Recent Discuss...',
            'Discover the pivotal insights from the 202...',
            'Subject: Following Up on Our Football Par...',
            'Get the latest insights from the 2025 Glo...',
            'Subject: Quick Follow-Up on Our Football...',
            'Review the essential insights from the 20...',
            'Subject: Following Up on Our Football Dis...',
            'Summarize the key findings from the 202...',
            'Subject: Quick Follow-Up on Our Football...',
        ],
        [t('aiAssistantPage.dateLabels.yesterday')]: [
            'Blockchain technology is like a digital ledg...',
            'Guía de Viaje de Fútbol: Descubre los mej...',
        ],
        [t('aiAssistantPage.dateLabels.august')]: [
            'SEO-Optimized Blog Outline:...',
            'Top Remote Work Tools for Football Tea...',
            '"Kickstart Your Green Game: Play for th..."',
        ]
    }

    const actionButtons = [
        {
            id: 1,
            label: t('aiAssistantPage.actionButtons.analyzePerformance'),
            icon: TrendingUp,
            description: t('aiAssistantPage.actionButtons.analyzePerformanceDesc')
        },
        {
            id: 2,
            label: t('aiAssistantPage.actionButtons.tacticalSuggestions'),
            icon: Target,
            description: t('aiAssistantPage.actionButtons.tacticalSuggestionsDesc')
        },
        {
            id: 3,
            label: t('aiAssistantPage.actionButtons.playerInsights'),
            icon: Activity,
            description: t('aiAssistantPage.actionButtons.playerInsightsDesc')
        },
        {
            id: 4,
            label: t('aiAssistantPage.actionButtons.trainingIdeas'),
            icon: Lightbulb,
            description: t('aiAssistantPage.actionButtons.trainingIdeasDesc')
        },
    ]

    const [message, setMessage] = useState('')
    const [messages, setMessages] = useState([
        {
            id: 1,
            text: "Hello! I&apos;m your AI Coach Assistant. I can help you analyze match performance, suggest tactical improvements, and provide insights on player development. How can I assist you today?",
            timestamp: '16:52',
            isAI: true
        },
        {
            id: 2,
            text: "What is the latest news in football?",
            timestamp: '16:53',
            isAI: false
        },
        {
            id: 3,
            text: "I understand your question. Let me analyze that for you...",
            timestamp: '16:54',
            isAI: true
        },
        {
            id: 4,
            text: "The latest news in football is that Manchester United is playing against Liverpool in the Premier League.",
            timestamp: '16:55',
            isAI: true
        },
        {
            id: 5,
            text: "Thank you for your question. I will get back to you soon.",
            timestamp: '16:56',
            isAI: false
        },
        {
            id: 6,
            text: "I understand your question. Let me analyze that for you...",
            timestamp: '16:57',
            isAI: true
        },
        {
            id: 7,
            text: "The latest news in football is that Manchester United is playing against Liverpool in the Premier League.",
            timestamp: '16:58',
            isAI: true
        },
        {
            id: 8,
            text: "Thank you for your question. I will get back to you soon.",
            timestamp: '16:59',
            isAI: false
        },
        {
            id: 9,
            text: "I understand your question. Let me analyze that for you...",
            timestamp: '17:00',
            isAI: true
        },
    ])

    const handleSend = () => {
        if (!message.trim()) return

        const newMessage = {
            id: messages.length + 1,
            text: message,
            timestamp: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false }),
            isAI: false
        }

        setMessages([...messages, newMessage])
        setMessage('')

        // Simulate AI response
        setTimeout(() => {
            const aiResponse = {
                id: messages.length + 2,
                text: "I understand your question. Let me analyze that for you...",
                timestamp: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false }),
                isAI: true
            }
            setMessages(prev => [...prev, aiResponse])
        }, 1000)
    }

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault()
            handleSend()
        }
    }

    return (
        <div className='w-full h-full grid grid-cols-1 xl:grid-cols-5 gap-6 p-3 md:p-4'>
            {/* Left Panel - Chronological Content */}
            <Card className='xl:col-span-2 w-full flex flex-col gap-6 overflow-y-auto bg-gray-800/50 border-gray-700 py-3 px-3'>
                <div className='flex flex-col gap-3'>
                    {Object.entries(chronologicalContent).map(([date, items]) => (
                        <div key={date} className='flex flex-col gap-3'>
                            <h2 className='text-base font-semibold text-gray-300 uppercase tracking-wide'>
                                {date}
                            </h2>
                            <div className='flex flex-col gap-2'>
                                {items.map((item, index) => (
                                    <p key={index} className='text-sm text-gray-300 leading-relaxed cursor-pointer hover:text-white transition-colors'>
                                        {item}
                                    </p>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </Card>

            {/* Right Panel - AI Coach Assistant */}
            <Card className="xl:col-span-3 w-full bg-gray-800/50 border-gray-700 flex-1 flex flex-col py-0">
                {/* Header */}
                <CardContent className="p-4 border-b border-gray-700">
                    <div className='flex items-center justify-between'>
                        <div className='flex items-center gap-3'>
                            {/* Main Button */}
                            <div className='size-10 rounded-full bg-linear-to-b from-blue-600 via-blue-600 to-purple-500 shadow-lg shadow-purple-500/50 flex items-center justify-center active:scale-95 cursor-pointer'>
                                <div className='text-base text-white'>
                                    <LuSparkles className='size-5' />
                                </div>
                            </div>

                            <div className='flex flex-col gap-1'>
                                <div className='flex items-center gap-2'>
                                    <h3 className='text-base font-semibold text-gray-400'>
                                        {t('aiAssistantPage.title')}
                                    </h3>
                                    <span className='text-xs text-green-400 font-medium bg-green-500/10 px-2 py-1 rounded-full'>
                                        {t('aiAssistantPage.online')}
                                    </span>
                                </div>
                                <p className='text-xs text-gray-500'>
                                    {t('aiAssistantPage.poweredBy')}
                                </p>
                            </div>
                        </div>

                    </div>
                </CardContent>

                {/* Action Buttons */}
                <CardContent className="px-3 border-b border-gray-700 py-0 pb-2">
                    <div className='grid grid-cols-2 gap-3'>
                        {actionButtons.map((action) => {
                            const Icon = action.icon
                            return (
                                <Button
                                    key={action.id}
                                    variant="outline"
                                    className="h-auto flex flex-col items-start gap-2 p-3 bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 hover:border-gray-600 text-left"
                                >
                                    <div className='flex items-center gap-2 w-full'>
                                        <Icon className="h-4 w-4 text-purple-400" />
                                        <span className='text-xs font-medium text-gray-400'>
                                            {action.label}
                                        </span>
                                    </div>
                                </Button>
                            )
                        })}
                    </div>
                </CardContent>

                <div className='w-full h-[370px] flex flex-col gap-4'>
                    {/* Chat Messages */}
                    <CardContent className="flex-1 overflow-y-scroll p-4 flex flex-col gap-4 overflow-x-hidden py-0">
                        {messages.map((msg) => (
                            <div
                                key={msg.id}
                                className={cn(
                                    "w-full flex items-center gap-2",
                                    msg.isAI ? "items-start" : "items-end justify-end"
                                )}
                            >
                                {msg.isAI && (
                                    <div className='size-10 rounded-full bg-purple-500/10 flex items-center justify-center shadow-lg shadow-purple-500/50'>
                                        <RiRobot2Fill className='size-5 text-purple-400' />

                                    </div>
                                )}
                                <div className='flex flex-col gap-1 w-full max-w-[85%]'>
                                    <div
                                        className={cn(
                                            "rounded-lg p-3",
                                            msg.isAI
                                                ? "bg-gray-800/50 text-gray-400 border border-gray-700/50"
                                                : "bg-blue-600 text-white"
                                        )}
                                    >
                                        <p className="text-sm leading-relaxed">
                                            {msg.text}
                                        </p>
                                    </div>
                                    <span className="text-xs text-gray-500 px-2">
                                        {msg.timestamp}
                                    </span>
                                </div>

                                {!msg.isAI && (
                                    <div className='size-10 rounded-full bg-blue-500/10 flex items-center justify-center shadow-lg shadow-blue-500/50'>
                                        <User className='size-5 text-blue-400' />
                                    </div>
                                )}
                            </div>
                        ))}
                    </CardContent>

                    {/* Input Area */}
                    <CardContent className="p-4 border-t border-gray-700">
                        <div className='flex flex-col gap-2'>
                            <div className='relative flex items-center gap-2'>
                                <Input
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    onKeyPress={handleKeyPress}
                                    placeholder={t('aiAssistantPage.inputPlaceholder')}
                                    className="flex-1 bg-gray-800/50 border border-gray-700 text-white placeholder:text-gray-500 focus-visible:ring-purple-500/50 pr-20"
                                />
                                <div className='absolute right-2 flex items-center gap-2'>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className="h-8 w-8 text-gray-400 hover:text-purple-400 hover:bg-purple-500/20"
                                    >
                                        <Sparkles className="h-4 w-4" />
                                    </Button>
                                    <Button
                                        onClick={handleSend}
                                        size="icon"
                                        className="h-8 w-8 bg-blue-600 hover:bg-blue-700 text-white"
                                    >
                                        <Send className="h-4 w-4" />
                                    </Button>
                                </div>
                            </div>
                            <p className='text-xs text-gray-500 px-1'>
                                {t('aiAssistantPage.inputHelper')}
                            </p>
                        </div>
                    </CardContent>
                </div>
            </Card>
        </div>
    )
}

export default AiAssistantView
