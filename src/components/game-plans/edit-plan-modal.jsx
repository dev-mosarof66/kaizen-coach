'use client'

import React, { useState } from 'react'
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
} from '../ui/sheet'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { Label } from '../ui/label'
import { Textarea } from '../ui/textarea'
import { Checkbox } from '../ui/checkbox'
import { RadioGroup, RadioGroupItem } from '../ui/radio-group'
import { X } from 'lucide-react'
import { cn } from '../../lib/utils'
import { FaCheck, FaUser, FaUsers } from 'react-icons/fa'
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '../ui/select'
import { OutlineButton, PrimaryButton } from '../common/button'
import { useTranslation } from '../../contexts/translation-context'

const EditPlanModal = ({ open, onOpenChange }) => {
    const { t } = useTranslation()
    const [assignTo, setAssignTo] = useState('Team')
    const [selectedTeam, setSelectedTeam] = useState('team-a')
    const [selectedPlayers, setSelectedPlayers] = useState([])
    const [notifyAssignees, setNotifyAssignees] = useState(false)
    const [startDate, setStartDate] = useState('')
    const [dueDate, setDueDate] = useState('')
    const [priority, setPriority] = useState('')
    const [category, setCategory] = useState('')
    const [notes, setNotes] = useState('')

    const teams = [
        { id: 'team-a', name: 'Team A', players: 15 },
        { id: 'team-b', name: 'Team B', players: 18 },
        { id: 'team-c', name: 'Team C', players: 12 },
    ]

    const players = [
        {
            id: 'player-1',
            name: "Ahmed Mohamed",
            position: "Forward",
            team: "Team A",
        },
        {
            id: 'player-2',
            name: "Mohamed Ali",
            position: "Midfielder",
            team: "Team A",
        },

        {
            id: 'player-3',
            name: "Youssef Ahmed",
            position: "Defender",
            team: "Team A",
        },



    ]
    const priorities = [
        {
            id: 'priority-1',
            name: t('addTaskPage.priorityLevels.low'),
        },
        {
            id: 'priority-2',
            name: t('addTaskPage.priorityLevels.medium'),
        },
        {
            id: 'priority-3',
            name: t('addTaskPage.priorityLevels.high'),
        },
    ]

    const categories = [
        {
            id: 'category-1',
            name: t('addTaskPage.categories.fitness'),
        },
        {
            id: 'category-2',
            name: t('addTaskPage.categories.technical'),
        },
        {
            id: 'category-3',
            name: t('addTaskPage.categories.tactical'),
        },
    ]

    const handleSave = () => {
        // Handle save logic here
        console.log('Saving task assignment:', {
            assignTo,
            selectedTeam,
            startDate,
            dueDate,
            notifyAssignees,
            priority,
            category,
            notes,
        })
        onOpenChange(false)
    }

    const handleCancel = () => {
        onOpenChange(false)
    }

    const handleSelectPlayer = (playerId) => {
        const isSelected = selectedPlayers.includes(playerId)
        if (isSelected) {
            setSelectedPlayers(selectedPlayers.filter(id => id !== playerId))
        } else {
            setSelectedPlayers([...selectedPlayers, playerId])
        }
    }

    const handleSelectTeam = (teamId) => {
        const isSelected = selectedTeam === teamId
        if (isSelected) {
            setSelectedTeam(null)
        } else {
            setSelectedTeam(teamId)
        }
    }

    return (
        <Sheet open={open} onOpenChange={onOpenChange}>
            <SheetContent
                side="right"
                className="w-96 bg-gray-900 border-gray-800 text-white overflow-y-auto"
            >
                <SheetHeader className="border-b border-gray-800 py-0">
                    <div className="w-full flex items-center justify-between px-1 py-3">
                        <SheetTitle className="text-gray-300 text-base font-semibold">{t('editPlanModal.assignTask')}</SheetTitle>
                        <Button variant="ghost" size="icon" className="bg-gray-800/10 rounded-full hover:bg-gray-800/20" onClick={() => onOpenChange(false)}>
                            <X className="size-4 text-gray-400" />
                        </Button>
                    </div>
                </SheetHeader>

                <div className="flex flex-col gap-6 px-4 py-2">
                    {/* Assign To Toggle */}
                    <div className="flex flex-col gap-3">
                        <Label className="text-sm font-medium text-gray-400">{t('editPlanModal.assignTo')}</Label>
                        <div className="flex gap-2">
                            <Button
                                type="button"
                                variant={assignTo === 'Team' ? 'default' : 'outline'}
                                className={cn(
                                    'flex-1 border',
                                    assignTo === 'Team'
                                        ? 'bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 border-blue-400/50'
                                        : 'bg-gray-800/50  text-gray-300 hover:bg-gray-800 border-gray-700/50'
                                )}
                                onClick={() => setAssignTo('Team')}
                            >
                                {t('editPlanModal.team')}
                            </Button>
                            <Button
                                type="button"
                                variant={assignTo === 'Players' ? 'default' : 'outline'}
                                className={cn(
                                    'flex-1 border',
                                    assignTo === 'Players'
                                        ? 'bg-blue-500/10 hover:bg-blue-500/20 text-blue-400    border-blue-400/50'
                                        : 'bg-gray-800/50  text-gray-300 hover:bg-gray-800 border-gray-700/50'
                                )}
                                onClick={() => setAssignTo('Players')}
                            >
                                {t('editPlanModal.players')}
                            </Button>
                        </div>
                    </div>

                    {/* Select Team */}
                    {assignTo === 'Team' && (
                        <div className="flex flex-col gap-3 border-b border-gray-700 pb-6">
                            <Label className="text-sm font-medium text-gray-400">{t('editPlanModal.selectTeam')}</Label>
                            <RadioGroup value={selectedTeam} onValueChange={setSelectedTeam}>
                                <div className="flex flex-col gap-3">
                                    {teams.map((team) => {
                                        const isSelected = selectedTeam === team.id
                                        return (
                                            <div
                                                key={team.id}
                                                className={cn("flex items-center gap-3 p-3 bg-gray-800/50 rounded-lg border border-gray-700 hover:bg-gray-800/70  cursor-pointer active:scale-95 transition-all duration-300 delay-75", isSelected && "bg-blue-500/10 border-blue-500/50 hover:bg-blue-500/10 relative")}
                                                onClick={() => handleSelectTeam(team.id)}
                                            >
                                                <div className='size-8 flex items-center justify-center bg-blue-500/10 rounded-full'>
                                                    <FaUsers className='size-4 text-blue-400' />
                                                </div>
                                                <div
                                                    className={cn("flex-1 cursor-pointer text-gray-300 font-normal", isSelected && "text-blue-400")}
                                                >
                                                    <div className="flex flex-col">
                                                        <span className={cn("text-sm font-medium", isSelected && "text-blue-400")}>
                                                            {team.name}
                                                        </span>
                                                        <span className={cn("text-xs text-gray-400", isSelected && "text-blue-400")}>
                                                            {team.players} {t('editPlanModal.playersCount')}
                                                        </span>
                                                    </div>
                                                </div>

                                                {/* label  */}
                                                {
                                                    isSelected && (

                                                        <div className='absolute right-2 top-1/2 transform -translate-y-1/2'>

                                                            <div className='size-6 rounded-full bg-purple-500/20 flex items-center justify-center'>
                                                                <FaCheck className='size-3 text-blue-400' />
                                                            </div>
                                                        </div>
                                                    )
                                                }
                                            </div>
                                        )
                                    })}
                                </div>
                            </RadioGroup>
                        </div>
                    )}

                    {/* select players  */}
                    {assignTo === 'Players' && (
                        <div className="flex flex-col gap-3 border-b border-gray-700 pb-6">
                            <Label className="text-sm font-medium text-gray-400">{t('editPlanModal.selectPlayers')}</Label>
                            <div className="flex flex-col gap-3">
                                {players.map((player) => {
                                    const getInitials = player.name.split(' ').map(name => name[0]).join('')
                                    const isSelected = selectedPlayers.includes(player.id)
                                    return (
                                        <div
                                            key={player.id}
                                            onClick={() => handleSelectPlayer(player.id)} className={cn('w-full flex items-center gap-3 p-3 bg-gray-800/50 rounded-lg border border-gray-700 hover:bg-gray-800/70  cursor-pointer active:scale-95 transition-all duration-300 delay-75', isSelected && 'bg-blue-500/10 border-blue-500/50 hover:bg-blue-500/10 relative')}>
                                            <div>
                                                <Checkbox checked={isSelected} onCheckedChange={() => handleSelectPlayer(player.id)} className={cn('size-4 border-gray-500/50 text-gray-500 bg-blue-500/10 checked:bg-blue-500 checked:text-white cursor-pointer active:scale-95 transition-all duration-300 delay-75', isSelected && 'bg-blue-500/10 border-blue-500/50 hover:bg-blue-500/10 relative')} />
                                            </div>
                                            <div className='size-9 flex items-center justify-center bg-blue-500/10 rounded-full'>
                                                <span className='text-xs text-blue-400'>{getInitials}</span>
                                            </div>
                                            <div className='flex flex-col gap-1'>
                                                <span className='text-sm font-medium text-gray-300'>{player.name}</span>
                                                <div className='flex items-center gap-1'>
                                                    <p className='text-xs text-gray-400'>{player.position}</p>
                                                    <span className='text-xs text-gray-400'>•</span>
                                                    <p className='text-xs text-gray-400'>{player.team}</p>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    )}
                    {/* Schedule */}
                    <div className="w-full flex flex-col gap-3">
                        <Label className="text-sm font-medium text-gray-400">{t('editPlanModal.schedule')}</Label>
                        <div className="w-full grid grid-cols-2 gap-2">
                            <div className="flex flex-col gap-2">
                                <Label
                                    htmlFor="start-date"
                                    className="text-xs text-gray-400 font-normal"
                                >
                                    {t('editPlanModal.startDate')}
                                </Label>
                                <Input
                                    id="start-date"
                                    type="date"
                                    value={startDate}
                                    onChange={(e) => setStartDate(e.target.value)}
                                    className="bg-gray-800/50 border-gray-700 text-gray-300 focus-visible:ring-blue-500/50"
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <Label
                                    htmlFor="due-date"
                                    className="text-xs text-gray-400 font-normal"
                                >
                                    {t('editPlanModal.dueDate')}
                                </Label>
                                <Input
                                    id="due-date"
                                    type="date"
                                    value={dueDate}
                                    onChange={(e) => setDueDate(e.target.value)}
                                    className="bg-gray-800/50 border-gray-700 text-gray-300 focus-visible:ring-blue-500/50"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Notify Assignees */}
                    <div className="flex items-center gap-3 border-b border-gray-700 pb-6">
                        <Checkbox
                            id="notify"
                            checked={notifyAssignees}
                            onCheckedChange={setNotifyAssignees}
                            className='size-4 border-gray-500/50 text-gray-500 bg-blue-500/10 checked:bg-blue-500 checked:text-white cursor-pointer active:scale-95 transition-all duration-300 delay-75'
                        />
                        <Label
                            htmlFor="notify"
                            className="text-sm text-gray-400 font-normal cursor-pointer"
                        >
                            {t('editPlanModal.notifyAssignees')}
                        </Label>
                    </div>

                    <div className='w-full flex items-center justify-between gap-2'>
                        {/* Priority */}
                        <div className="flex flex-col gap-2">
                            <Label htmlFor="priority" className="text-sm font-medium text-gray-400">{t('editPlanModal.priority')}</Label>
                            <Select id="priority" value={priority} onValueChange={(value) => setPriority(value)} className="min-h-[440px]">
                                <SelectTrigger className="bg-gray-800/50 border-gray-700 text-gray-300 placeholder:text-gray-500 focus-visible:ring-blue-500/50">
                                    <SelectValue placeholder={t('editPlanModal.selectPriority')} />
                                </SelectTrigger>
                                <SelectContent className="bg-gray-800 border-gray-700 text-gray-300 placeholder:text-gray-500 focus-visible:ring-blue-500/50">
                                    {priorities.map((priority) => {
                                        return (
                                            <SelectItem key={priority.id} value={priority.id} className="text-gray-300 hover:bg-blue-500/10 hover:text-gray-300 cursor-pointer active:scale-95 transition-all duration-300 delay-75">{priority.name}</SelectItem>
                                        )
                                    })}
                                </SelectContent>
                            </Select>
                        </div>

                        {/* Category */}
                        <div className="flex flex-col gap-2">
                            <Label htmlFor="category" className="text-sm font-medium text-gray-400">{t('editPlanModal.category')}</Label>
                            <Select id="category" value={category} onValueChange={(value) => setCategory(value)}>
                                <SelectTrigger className="bg-gray-800/50 border-gray-700 text-gray-300 placeholder:text-gray-500 focus-visible:ring-blue-500/50">
                                    <SelectValue placeholder={t('editPlanModal.selectCategory')} />
                                </SelectTrigger>
                                <SelectContent className="bg-gray-800 border-gray-700 text-gray-300 placeholder:text-gray-500 focus-visible:ring-blue-500/50">
                                    {categories.map((category) => {
                                        return (
                                            <SelectItem key={category.id} value={category.id} className="text-gray-300 hover:bg-blue-500/10 hover:text-gray-300 cursor-pointer active:scale-95 transition-all duration-300 delay-75">{category.name}</SelectItem>
                                        )
                                    })}
                                </SelectContent>
                            </Select>
                        </div>

                    </div>
                    {/* Additional Notes */}
                    <div className="flex flex-col gap-2">
                        <Label htmlFor="notes" className="text-sm font-medium text-gray-400">
                            {t('editPlanModal.additionalNotes')}
                        </Label>
                        <Textarea
                            id="notes"
                            placeholder={t('editPlanModal.notesPlaceholder')}
                            value={notes}
                            onChange={(e) => setNotes(e.target.value)}
                            className="min-h-24 bg-gray-800/50 border-gray-700 text-gray-300 placeholder:text-gray-500 focus-visible:ring-blue-500/50 resize-none"
                        />
                    </div>

                    {/* Action Buttons */}
                    <div className="w-full flex items-center justify-between gap-2 pb-6">
                        <PrimaryButton
                            onClick={handleSave}
                            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white"
                        >
                            {t('editPlanModal.saveAndNotify')}
                        </PrimaryButton>
                        <OutlineButton
                            onClick={handleCancel}
                            variant="outline"
                            className="flex-1 bg-gray-800/50 border-gray-700 text-gray-300 hover:bg-gray-800/70 hover:text-white"
                        >
                            {t('editPlanModal.cancel')}
                        </OutlineButton>
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    )
}

export default EditPlanModal
