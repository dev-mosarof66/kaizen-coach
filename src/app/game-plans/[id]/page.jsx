import React from 'react'
import GamePlanDetailsView from '../../../views/game-plan-details-view'

export default async function GamePlanDetailsPage({ params }) {
    const { id } = await params
    return <GamePlanDetailsView id={id} />
}