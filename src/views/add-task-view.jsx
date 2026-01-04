'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Card, CardContent } from '../components/ui/card'
import { Button } from '../components/ui/button'
import { Input } from '../components/ui/input'
import { Textarea } from '../components/ui/textarea'
import { Label } from '../components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select'
import { ToggleGroup, ToggleGroupItem } from '../components/ui/toggle-group'
import { Checkbox } from '../components/ui/checkbox'
import { Avatar, AvatarFallback } from '../components/ui/avatar'
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
    Search,
    X,
    Dumbbell,
    FileText,
    Sparkles,
} from 'lucide-react'
import { cn } from '../lib/utils'
import { OutlineButton, PrimaryButton } from '../components/common/button'

const AddTaskView = () => {
    const router = useRouter()
    const [assignType, setAssignType] = useState('player')
    const [selectedPlayers, setSelectedPlayers] = useState(['Marcus Silva'])
    const [priority, setPriority] = useState('high')
    const [category, setCategory] = useState('Fitness')

    const categories = [
        { value: 'Fitness', label: 'Fitness', icon: Dumbbell },
        { value: 'Technical', label: 'Technical', icon: FileText },
        { value: 'Tactical', label: 'Tactical', icon: FileText },
        { value: 'Recovery', label: 'Recovery', icon: FileText },
    ]

    const removePlayer = (playerName) => {
        setSelectedPlayers(selectedPlayers.filter(p => p !== playerName))
    }

    return (
        <div className='w-full flex flex-col gap-6'>

            {/* header section */}
            <div className='w-full flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-3 sm:p-4'>
                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink
                                asChild
                                className="flex items-center gap-1 text-gray-400 hover:text-white transition-colors"
                            >
                                <Link href="/tasks">
                                    <ArrowLeft className="h-4 w-4" />
                                    <span>Back</span>
                                </Link>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbLink asChild className="text-gray-400 hover:text-white transition-colors">
                                <Link href="/tasks">Tasks</Link>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbPage className="text-white">Add Task</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>

                <div className='flex items-center gap-3'>
                    <OutlineButton
                        variant="outline"
                        onClick={() => router.back()}
                    >
                        Cancel
                    </OutlineButton>
                    <PrimaryButton
                        onClick={() => console.log('Save changes')}

                    >
                        Save Changes
                    </PrimaryButton>
                </div>
            </div>

            {/* Main Content Grid */}
            <div className='w-full grid grid-cols-1 lg:grid-cols-3 gap-6 p-2 sm:p-4'>
                {/* Task Details Section - Left Column */}
                <div className='lg:col-span-2 flex flex-col gap-6'>
                    <Card className="bg-gray-800/50 border-gray-700 py-0">
                        <CardContent className="p-6 flex flex-col gap-6">
                            <h2 className="text-lg font-semibold text-gray-400">Task Details</h2>

                            {/* Task Title */}
                            <div className="flex flex-col gap-2">
                                <Label htmlFor="task-title" className="text-sm font-medium text-gray-400">
                                    Task Title
                                </Label>
                                <Input
                                    id="task-title"
                                    placeholder="Enter task name"
                                    className="bg-gray-800/50 border-gray-700 text-gray-300 placeholder:text-gray-500 focus-visible:ring-blue-500/50"
                                />
                            </div>

                            {/* Category */}
                            <div className="flex flex-col gap-2">
                                <Label htmlFor="category" className="text-sm font-medium text-gray-400">
                                    Category
                                </Label>
                                <Select value={category} onValueChange={setCategory}>
                                    <SelectTrigger
                                        id="category"
                                        className="w-full bg-gray-800/50 border-gray-700 text-gray-300 focus:ring-blue-500/50"
                                    >
                                        <SelectValue>
                                            <div className="flex items-center gap-2">
                                                <Dumbbell className="h-4 w-4" />
                                                <span>{category}</span>
                                            </div>
                                        </SelectValue>
                                    </SelectTrigger>
                                    <SelectContent className="bg-gray-800 border-gray-700">
                                        {categories.map((cat) => {
                                            const Icon = cat.icon
                                            return (
                                                <SelectItem
                                                    key={cat.value}
                                                    value={cat.value}
                                                    className="text-gray-300 hover:bg-gray-700 hover:text-white focus:bg-gray-700 focus:text-white"
                                                >
                                                    <div className="flex items-center gap-2">
                                                        <Icon className="h-4 w-4" />
                                                        <span>{cat.label}</span>
                                                    </div>
                                                </SelectItem>
                                            )
                                        })}
                                    </SelectContent>
                                </Select>
                            </div>

                            {/* Description */}
                            <div className="flex flex-col gap-2">
                                <Label htmlFor="description" className="text-sm font-medium text-gray-400">
                                    Description
                                </Label>
                                <Textarea
                                    id="description"
                                    placeholder="Describe the task objectives and requirements..."
                                    className="min-h-32 bg-gray-800/50 border-gray-700 text-gray-300 placeholder:text-gray-500 focus-visible:ring-blue-500/50 resize-none"
                                />
                            </div>

                            {/* Date Fields */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="flex flex-col gap-2">
                                    <Label htmlFor="start-date" className="text-sm font-medium text-gray-400">
                                        Start Date
                                    </Label>
                                    <Input
                                        id="start-date"
                                        type="date"
                                        className="bg-gray-800/50 border-gray-700 text-gray-300 focus-visible:ring-blue-500/50"
                                    />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <Label htmlFor="due-date" className="text-sm font-medium text-gray-400">
                                        Due Date
                                    </Label>
                                    <Input
                                        id="due-date"
                                        type="date"
                                        className="bg-gray-800/50 border-gray-700 text-gray-300 focus-visible:ring-blue-500/50"
                                    />
                                </div>
                            </div>

                            {/* Priority */}
                            <div className="flex flex-col gap-2">
                                <Label className="text-sm font-medium text-gray-400">Priority</Label>
                                <div className="flex items-center gap-3">
                                    <PrimaryButton
                                        onClick={() => setPriority('high')}
                                        className={cn(
                                            "flex-1 bg-gray-700/20 hover:bg-gray-800/50 text-red-500 border-red-500/50", priority === 'high' && "bg-red-500/20 hover:bg-red-600/50 text-red-500 border-red-500/50"
                                        )}
                                    >
                                        High
                                    </PrimaryButton>
                                    <PrimaryButton
                                        onClick={() => setPriority('medium')}
                                        className={cn(
                                            "flex-1 bg-gray-700/20 hover:bg-gray-800/50 text-orange-600 border-orange-600/50", priority === 'medium' && "bg-orange-500/20 hover:bg-orange-600/50 text-orange-600 border-orange-600/50"
                                        )}
                                    >
                                        Medium
                                    </PrimaryButton>
                                    <PrimaryButton
                                        onClick={() => setPriority('low')}
                                        className={cn(
                                            "flex-1 bg-gray-700/20 hover:bg-gray-800/50 text-green-600 border-green-600/50", priority === 'low' && "bg-green-500/20 hover:bg-green-600/50 text-green-600 border-green-600/50"
                                        )}
                                    >
                                        Low
                                    </PrimaryButton>
                                </div>
                            </div>

                            {/* Attachments */}
                            <div className="flex flex-col gap-2">
                                <Label className="text-sm font-medium text-gray-400">Attachments</Label>
                                <div className="flex flex-col items-center justify-center gap-3 p-8 border-2 border-dashed border-gray-700 rounded-lg bg-gray-800/50 hover:border-gray-600 transition-colors cursor-pointer relative">
                                    <FileText className="h-8 w-8 text-gray-500" />
                                    <div className="text-center">
                                        <p className="text-sm text-gray-400">Drag & drop files or click to browse</p>
                                    </div>
                                    <Input type="file" className="opacity-0 absolute top-0 left-0 w-full h-full cursor-pointer" onChange={(e) => console.log(e.target.files)} />
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Assignment Section - Right Column */}
                <div className='lg:col-span-1 flex flex-col gap-6'>
                    <Card className="bg-gray-800/50 border-gray-700">
                        <CardContent className="p-6 flex flex-col gap-6">
                            <h2 className="text-lg font-semibold text-gray-400">Assignment</h2>

                            {/* Assign To Toggle */}
                            <div className="flex flex-col gap-2">
                                <Label className="text-sm font-medium text-gray-400">Assign to</Label>
                                <ToggleGroup
                                    type="single"
                                    value={assignType}
                                    onValueChange={(value) => value && setAssignType(value)}
                                    className="w-full"
                                >
                                    <ToggleGroupItem
                                        value="player"
                                        aria-label="Player"
                                        className={cn(
                                            "flex-1 bg-gray-700/20 hover:bg-gray-800/50 text-gray-400 border-gray-700/50 cursor-pointer",
                                            assignType === 'player'
                                                ? "bg-gray-700/20 hover:bg-gray-800/50 text-blue-400 border-blue-700/50 data-[state=on]:bg-gray-700/20 data-[state=on]:hover:bg-gray-800/50 data-[state=on]:text-blue-400 data-[state=on]:border-blue-700/50"
                                                : "bg-transparent text-gray-400 border-gray-700/50"
                                        )}
                                    >
                                        Player
                                    </ToggleGroupItem>
                                    <ToggleGroupItem
                                        value="team"
                                        aria-label="Team"
                                        className={cn(
                                            "flex-1 bg-gray-700/20 hover:bg-gray-800/50 text-gray-400 border-gray-700/50 cursor-pointer",
                                            assignType === 'team'
                                                ? "bg-gray-700/20 hover:bg-gray-800/50 text-green-400 border-green-700/50 data-[state=on]:bg-gray-700/20 data-[state=on]:hover:bg-gray-800/50 data-[state=on]:text-green-400 data-[state=on]:border-green-700/50"
                                                : "bg-transparent text-gray-400"
                                        )}
                                    >
                                        Team
                                    </ToggleGroupItem>
                                </ToggleGroup>
                            </div>

                            {/* Search Players */}
                            <div className="flex flex-col gap-2">
                                <Label htmlFor="search-players" className="text-sm font-medium text-gray-400">
                                    Search players...
                                </Label>
                                <div className="relative">
                                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
                                    <Input
                                        id="search-players"
                                        placeholder="Search players..."
                                        className="pl-9 bg-gray-800/50 border-gray-700 text-gray-300 placeholder:text-gray-500 focus-visible:ring-blue-500/50"
                                    />
                                </div>
                            </div>

                            {/* Selected Players */}
                            {selectedPlayers.length > 0 && (
                                <div className="flex flex-col gap-2">
                                    <div className="flex flex-wrap gap-2">
                                        {selectedPlayers.map((player) => (
                                            <div
                                                key={player}
                                                className="flex items-center gap-2 px-3 py-2 bg-gray-700/20 border border-gray-700/50 rounded-lg"
                                            >
                                                <Avatar className="h-6 w-6">
                                                    <AvatarFallback className="bg-blue-500/50 text-blue-200 text-xs">
                                                        {player.split(' ').map(n => n[0]).join('')}
                                                    </AvatarFallback>
                                                </Avatar>
                                                <span className="text-sm text-white">{player}</span>
                                                <button
                                                    onClick={() => removePlayer(player)}
                                                    className="ml-1 text-gray-400 hover:text-white transition-colors cursor-pointer active:scale-95"
                                                >
                                                    <X className="h-4 w-4" />
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Due Time */}
                            <div className="flex flex-col gap-2">
                                <Label htmlFor="due-time" className="text-sm font-medium text-gray-400">
                                    Due Time
                                </Label>
                                <Input
                                    id="due-time"
                                    type="time"
                                    className="bg-gray-800/50 border-gray-700 text-gray-300 focus-visible:ring-blue-500/50"
                                />
                            </div>

                            {/* Notify Checkbox */}
                            <div className="flex items-center gap-2">
                                <Checkbox
                                    id="notify"
                                    className="border-gray-600 data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600"
                                />
                                <Label
                                    htmlFor="notify"
                                    className="text-sm text-gray-400 cursor-pointer"
                                >
                                    Notify assignees via email/app
                                </Label>
                            </div>

                            {/* Save & Assign Button */}
                            <PrimaryButton
                                onClick={() => console.log('Save & Assign')}
                                className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                            >
                                Save & Assign
                            </PrimaryButton>
                        </CardContent>
                    </Card>

                    {/* AI Suggestion Section */}
                    <Card className="bg-gray-800/50 border-gray-700">
                        <CardContent className="p-6 flex flex-col gap-4">
                            <div className="flex items-start gap-3">
                                <div className="p-2 rounded-lg bg-purple-500/20">
                                    <Sparkles className="h-5 w-5 text-purple-400" />
                                </div>
                                <div className="flex-1 flex flex-col gap-3">
                                    <p className="text-sm text-gray-300 leading-relaxed">
                                        Based on player fitness history, consider adding a 10-minute warm-up before this drill to prevent injuries.
                                    </p>
                                    <Button
                                        variant="link"
                                        className="w-fit p-0 h-auto text-blue-400 hover:text-blue-300 text-sm font-medium"
                                    >
                                        Apply Suggestion
                                    </Button>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default AddTaskView
