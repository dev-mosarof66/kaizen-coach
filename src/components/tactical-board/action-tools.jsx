import React from 'react'
import { Button } from '../ui/button'
import { cn } from '../../lib/utils'

const ActionTools = ({ actionTools, handleAction }) => {
    return (
        <div className='flex flex-wrap gap-1'>
            {
                actionTools.map((tool) => {

                    const isDelete = tool.id === 'trash';

                    return (
                        <ActionTool key={tool.id} icon={tool.icon} onClick={() => handleAction(tool.id)} danger={isDelete} label={tool.label} />
                    )
                })
            }
        </div>
    )
}

export default ActionTools



const ActionTool = ({ icon: Icon, onClick, danger, label }) => (
    <Button variant="ghost" size="icon-sm" onClick={onClick} className={cn('rounded-md transition ', danger ? 'bg-red-700 hover:bg-red-800 hover:text-white' : 'text-gray-400 hover:text-white bg-gray-900 hover:bg-gray-900')} title={label}>
        <Icon size={16} className='cursor-pointer' />
    </Button>
)