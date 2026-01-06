import React from 'react'
import { Card, CardContent } from '../ui/card'
import GamePlanTabs from './game-plan-tabs';
import { Button } from '../ui/button'
import { Badge } from '../ui/badge'
import { Edit, Trash2 } from 'lucide-react'
import { PrimaryButton, OutlineButton } from '../common/button';
import CircularProgress from '../common/circular-progress';




const GamePlanCard = ({ selectedTab, setSelectedTab, gamePlan, setEditMode }) => {
    return (
        <Card className="w-full bg-gray-800/50 border-gray-700 py-0">
            <CardContent className="p-4">
                <div className="flex flex-col sm:flex-row items-start justify-between gap-8 sm:gap-4">
                    <div className="flex items-center gap-4 flex-1">
                        <CircularProgress value={gamePlan.progress} size={60} strokeWidth={4} />
                        <div className="flex flex-col gap-3">
                            <h1 className="text-lg sm:text-xl font-bold text-gray-300">{gamePlan.taskName}</h1>
                            <div className="flex items-center gap-2 flex-wrap">
                                <Badge
                                    variant="outline"
                                    className="text-[10px] font-semibold px-2 py-1 rounded-full border text-blue-300 border-blue-700/50 bg-blue-500/10"
                                >
                                    {gamePlan.category}
                                </Badge>
                                <Badge
                                    variant="outline"
                                    className="text-[10px] font-semibold px-2 py-1 rounded-full border text-blue-300 border-blue-700/50 bg-blue-500/10"
                                >
                                    {gamePlan.status}
                                </Badge>
                            </div>
                        </div>
                    </div>
                    <div className="w-full sm:w-fit flex items-center justify-end gap-3">
                        <PrimaryButton
                            onClick={() => setEditMode(true)}
                            className="flex-1 sm:flex-none w-full sm:w-fit bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm"
                        >
                            <Edit className="size-4" />
                            <span className="">Edit Plan</span>
                        </PrimaryButton>
                        <OutlineButton
                            className="flex-1 sm:flex-none w-full sm:w-fit  bg-gray-600/20 text-red-400 hover:text-red-500 hover:bg-gray-600/30 border border-red-400/20 flex items-center justify-center text-xs sm:text-sm"
                        >
                            <Trash2 className="size-4" />
                            <span className="lg:hidden">Delete Plan</span>
                        </OutlineButton>
                    </div>
                </div>
            </CardContent>
            {/* Tabs */}
            <GamePlanTabs selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
        </Card >
    );
};

export default GamePlanCard;
