import React from 'react'
import { Input } from '../ui/input'
import { OutlineButton } from '../common/button'

const TeamsTab = () => {
    return (
        <div className="w-full flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
            
            {/* Title */}
            <h1 className="text-xl font-semibold whitespace-nowrap">All Teams</h1>

            {/* Controls */}
            <div className="flex flex-col sm:flex-row md:flex-row w-full xl:w-auto gap-3">
                
                {/* Search Box */}
                <div className="w-full sm:w-72 md:w-full xl:w-72">
                    <Input 
                        placeholder="Search players..." 
                        className="w-full"
                    />
                </div>

                {/* Buttons */}
                <div className="flex items-center gap-2">
                    <OutlineButton>
                        All Positions
                    </OutlineButton>

                    <OutlineButton>
                        All Status
                    </OutlineButton>
                </div>
            </div>
        </div>
    )
}

export default TeamsTab
