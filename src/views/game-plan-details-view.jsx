'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import {
    Breadcrumb,
    BreadcrumbList,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from '../components/ui/breadcrumb'
import {
    ArrowLeft,
} from 'lucide-react'
import GamePlanCard from '../components/game-plans/game-plan-card'
import { game_plans } from './game-plan-view'
import GamePlanContent from '../components/game-plans/game-plan-content'
import EditPlanModal from '../components/game-plans/edit-plan-modal'



const GamePlanDetailsView = ({ id }) => {

    const [activeTab, setActiveTab] = useState('Overview')
    const [comment, setComment] = useState('')
    const [coachNote, setCoachNote] = useState('')
    const [editMode, setEditMode] = useState(false)

    const gamePlan = game_plans.find(game_plan => game_plan.id === parseInt(id))

    console.log('gamePlan', gamePlan)

    const handleSendComment = () => {
        if (!comment.trim()) return
        // Handle comment submission
        setComment('')
    }

    const handleSaveNote = () => {
        if (!coachNote.trim()) return
        // Handle note saving
        setCoachNote('')
    }

    return (
        <div className='w-full flex flex-col gap-6 p-2 md:p-6 relative'>
            {/* Breadcrumb Navigation */}
            <Breadcrumb className="px-2">
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink
                            asChild
                            className="flex items-center gap-1 text-gray-400 hover:text-white transition-colors"
                        >
                            <Link href="/game-plans">
                                <ArrowLeft className="h-4 w-4" />
                                <span>Back</span>
                            </Link>
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbLink asChild className="text-gray-400 hover:text-white transition-colors">
                            <Link href="/game-plans">Game Plans</Link>
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbPage className="text-white">{gamePlan.taskName}</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>

            <GamePlanCard selectedTab={activeTab} setSelectedTab={setActiveTab} gamePlan={gamePlan} setEditMode={setEditMode} />

            <GamePlanContent
                gamePlan={gamePlan}
                selectedTab={activeTab}
                comment={comment}
                setComment={setComment}
                coachNote={coachNote}
                setCoachNote={setCoachNote}
                onSendComment={handleSendComment}
                onSaveNote={handleSaveNote}
            />

            {editMode && (
                <EditPlanModal open={editMode} onOpenChange={setEditMode} />
            )}
        </div>
    )
}

export default GamePlanDetailsView
