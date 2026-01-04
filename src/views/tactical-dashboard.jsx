'use client'

import React, { useState } from 'react'
import { Button } from '../components/ui/button'
import { Card, CardContent } from '../components/ui/card'
import {
    Pencil,
    Square,
    Circle,
    ArrowRight,
    Type,
    Users,
    Diamond,
    Settings,
    Lightbulb,
    Palette,
    Undo2,
    Redo2,
    ZoomIn,
    ZoomOut,
    Mic,
    Video,
    Trash2,
    Download,
    Save,
    Paperclip,
} from 'lucide-react'
import { cn } from '../lib/utils'
import { PrimaryButton } from '../components/common/button'

// Football Pitch Component
const FootballPitch = () => {
    // Mock player positions - teal circles (team 1) and green triangles (team 2)
    const team1Players = [
        { x: 15, y: 20 }, // Left penalty box
        { x: 75, y: 50 }, // Center
        { x: 25, y: 30 },
        { x: 35, y: 40 },
        { x: 60, y: 40 },
        { x: 20, y: 60 },
        { x: 30, y: 70 },
        { x: 45, y: 60 },
        { x: 50, y: 75 },
        { x: 55, y: 35 },
    ]

    const team2Players = [
        { x: 45, y: 25 }, // Right penalty box
        { x: 60, y: 50 },
        { x: 75, y: 30 },
        { x: 45, y: 40 },
        { x: 30, y: 60 },
        { x: 55, y: 70 },
        { x: 75, y: 55 },
    ]

    return (
        <div className="relative w-full aspect-2/1 rounded-lg">
            {/* Grid Overlay */}
            <div className="absolute inset-0 opacity-10 border border-gray-700/20 rounded-lg">
                <svg className="w-full h-full">
                    <defs>
                        <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#9ca3af" strokeWidth="0.5" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
            </div>

            {/* Pitch Lines */}
            <svg className="absolute inset-0 w-full h-full overflow-hidden" viewBox="0 0 100 50" preserveAspectRatio="xMidYMid meet">
                {/* Outer boundary */}
                <rect x="0" y="0" width="100" height="50" fill="none" stroke="#9ca3af" strokeWidth="0.2" />

                {/* Center line */}
                <line x1="50" y1="0" x2="50" y2="50" stroke="#9ca3af" strokeWidth="0.2" />

                {/* Center circle */}
                <circle cx="50" cy="25" r="9.15" fill="none" stroke="#9ca3af" strokeWidth="0.2" />
                <circle cx="50" cy="25" r="0.5" fill="#9ca3af" />

                {/* Left penalty box */}
                <rect x="0" y="10.25" width="16.5" height="29.5" fill="none" stroke="#9ca3af" strokeWidth="0.3" />
                <rect x="0" y="18.25" width="5.5" height="13.5" fill="none" stroke="#9ca3af" strokeWidth="0.3" />
                <circle cx="11" cy="25" r="0.5" fill="#9ca3af" />

                {/* Right penalty box */}
                <rect x="83.5" y="10.25" width="16.5" height="29.5" fill="none" stroke="#9ca3af" strokeWidth="0.3" />
                <rect x="94.5" y="18.25" width="5.5" height="13.5" fill="none" stroke="#9ca3af" strokeWidth="0.3" />
                <circle cx="89" cy="25" r="0.5" fill="#9ca3af" />

                {/* Corner arcs */}
                <path d="M 0 0 Q 0 1 1 0" fill="none" stroke="#9ca3af" strokeWidth="0.3" />
                <path d="M 100 0 Q 99 0 100 1" fill="none" stroke="#9ca3af" strokeWidth="0.3" />
                <path d="M 0 50 Q 0 49 1 50" fill="none" stroke="#9ca3af" strokeWidth="0.3" />
                <path d="M 100 50 Q 99 50 100 49" fill="none" stroke="#9ca3af" strokeWidth="0.3" />
            </svg>

            {/* Team 1 Players (Teal Circles) */}
            {team1Players.map((player, index) => (
                <div
                    key={`team1-${index}`}
                    className="absolute transform -translate-x-1/2 -translate-y-1/2"
                    style={{ left: `${player.x}%`, top: `${player.y}%` }}
                >
                    <div className="w-4 h-4 rounded-full bg-teal-400 border-2 border-teal-600 shadow-lg" />
                </div>
            ))}

            {/* Team 2 Players (Green Triangles) */}
            {team2Players.map((player, index) => (
                <div
                    key={`team2-${index}`}
                    className="absolute transform -translate-x-1/2 -translate-y-1/2"
                    style={{ left: `${player.x}%`, top: `${player.y}%` }}
                >
                    <svg width="16" height="16" viewBox="0 0 16 16" className="drop-shadow-lg">
                        <polygon points="8,2 14,14 2,14" fill="#22c55e" stroke="#16a34a" strokeWidth="1" />
                    </svg>
                </div>
            ))}
        </div>
    )
}

const TacticalDashboard = () => {
    const [activeTool, setActiveTool] = useState('pencil')

    const drawingTools = [
        { id: 'pencil', icon: Pencil, label: 'Pencil' },
        { id: 'square', icon: Square, label: 'Square' },
        { id: 'circle', icon: Circle, label: 'Circle' },
        { id: 'arrow', icon: ArrowRight, label: 'Arrow' },
        { id: 'text', icon: Type, label: 'Text' },
        { id: 'players', icon: Users, label: 'Players' },
        { id: 'diamond', icon: Diamond, label: 'Diamond' },
        { id: 'settings', icon: Settings, label: 'Settings' },
        { id: 'lightbulb', icon: Lightbulb, label: 'Suggestions' },
        { id: 'palette', icon: Palette, label: 'Colors' },
    ]

    const actionTools = [
        { id: 'undo', icon: Undo2, label: 'Undo' },
        { id: 'redo', icon: Redo2, label: 'Redo' },
        { id: 'zoomIn', icon: ZoomIn, label: 'Zoom In' },
        { id: 'zoomOut', icon: ZoomOut, label: 'Zoom Out' },
        { id: 'mic', icon: Mic, label: 'Microphone' },
        { id: 'video', icon: Video, label: 'Video' },
        { id: 'trash', icon: Trash2, label: 'Clear' },
    ]

    return (
        <Card className="w-full bg-gray-800/50 border-gray-700/20 p-2">
            {/* Toolbar */}
            <CardContent className="w-full p-3 border-b border-gray-700/40">
                <div className="flex items-center justify-between gap-2 flex-wrap">
                    {/* Drawing Tools */}
                    <div className="flex items-center gap-1 flex-wrap">
                        {drawingTools.map((tool) => {
                            const Icon = tool.icon
                            const isActive = activeTool === tool.id
                            return (
                                <Button
                                    key={tool.id}
                                    variant="ghost"
                                    size="icon"
                                    onClick={() => setActiveTool(tool.id)}
                                    className={cn(
                                        "size-5 sm:size-8",
                                        isActive
                                            ? "bg-blue-600 text-white hover:bg-blue-700"
                                            : "text-gray-400 hover:text-white hover:bg-gray-700 bg-gray-950/20 rounded-full"
                                    )}
                                    title={tool.label}
                                >
                                    <Icon className="size-3.5 sm:size-4" />
                                </Button>
                            )
                        })}
                    </div>

                    {/* Action Tools */}
                    <div className="flex items-center gap-1 flex-wrap">
                        {actionTools.map((tool) => {
                            const Icon = tool.icon


                            return (
                                <Button
                                    key={tool.id}
                                    variant="ghost"
                                    size="icon"
                                    className="size-5 sm:size-8 text-gray-400 hover:text-white hover:bg-gray-700 bg-gray-950/20 rounded-full"
                                    title={tool.label}
                                >
                                    <Icon className="size-3.5 sm:size-4" />
                                </Button>
                            )
                        })}
                    </div>
                </div>
            </CardContent>
            {/* Football Pitch */}
            <CardContent className="w-full max-w-4xl mx-auto">
                <FootballPitch />
            </CardContent>
            {/* Bottom Bar */}

            <CardContent className="w-full flex flex-col gap-2 pb-4 px-0">
                <div className="w-full flex flex-col xl:flex-row items-start xl:items-center justify-between gap-4">
                    {/* Auto-save Status */}
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                        <span className="text-green-400">Auto-save enabled</span>
                        <span>•</span>
                        <span>Last saved: 2 minutes ago</span>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center gap-2">
                        <PrimaryButton
                            className="flex-1 sm:flex-none w-full sm:w-fit bg-gray-700/50 border-gray-600 text-white hover:bg-gray-700"
                        >
                            <Download className="size-4" />
                            <span className=" text-xs sm:text-sm">Export</span>
                        </PrimaryButton>
                        <PrimaryButton
                            className="bg-blue-600 hover:bg-blue-700 text-white"
                        >
                            <Save className="size-4" />
                            <span className="text-xs sm:text-sm">Save Plan</span>
                        </PrimaryButton>
                        <PrimaryButton
                            className="flex-1 sm:flex-none w-full sm:w-fit bg-gray-700/50 border-gray-600 text-white hover:bg-gray-700"
                        >
                            <Paperclip className="size-4" />
                            <span className="text-xs sm:text-sm">Attach to Task</span>
                        </PrimaryButton>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

export default TacticalDashboard
