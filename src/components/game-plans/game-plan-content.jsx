'use client'

import React from 'react'
import GamePlanOverview from './game-plan-overview'
import TacticalDashboard from '../tactical-board/tactical-board'
import AIAnalytics from './ai-analytics'
import { useTranslation } from '../../contexts/translation-context'

const GamePlanContent = ({ gamePlan, selectedTab, comment, setComment, coachNote, setCoachNote, onSendComment, onSaveNote }) => {
    const { t } = useTranslation()
    const overviewTab = t('gamePlanDetailsPage.tabs.overview')
    const tacticalBoardTab = t('gamePlanDetailsPage.tabs.tacticalBoard')
    const aiAnalyticsTab = t('gamePlanDetailsPage.tabs.aiAnalytics')
    
    if (selectedTab === overviewTab) {
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

    if (selectedTab === tacticalBoardTab) {
        return <TacticalDashboard />
    }

    if (selectedTab === aiAnalyticsTab) {
        return <AIAnalytics />
    }

    return null
}

export default GamePlanContent
