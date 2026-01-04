'use client'

import React from 'react'
import GamePlanOverview from './game-plan-overview'
import TacticalDashboard from '../../views/tactical-dashboard'
import AIAnalytics from './ai-analytics'

const GamePlanContent = ({ gamePlan, selectedTab, comment, setComment, coachNote, setCoachNote, onSendComment, onSaveNote }) => {
    if (selectedTab === 'Overview') {
        return (
            <GamePlanOverview
                gamePlan={gamePlan}
                comment={comment}
                setComment={setComment}
                coachNote={coachNote}
                setCoachNote={setCoachNote}
                onSendComment={onSendComment}
                onSaveNote={onSaveNote}
            />
        )
    }

    if (selectedTab === 'Tactical Board') {
        return <TacticalDashboard />
    }

    if (selectedTab === 'AI Analytics') {
        return <AIAnalytics />
    }

    return null
}

export default GamePlanContent
