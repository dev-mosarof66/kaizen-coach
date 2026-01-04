import PlayerProfileView from '../../views/player-profile-view'
import React from 'react'

export const metadata = {
  title: "Player Profile",
  description: "Takteeki App for managing your tasks",
};

const PlayerProfilePage = () => {
    return (
        <PlayerProfileView />
    )
}

export default PlayerProfilePage