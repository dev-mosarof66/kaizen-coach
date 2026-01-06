import React from 'react'
import { Button } from '../ui/button'
import { cn } from '../../lib/utils'
import { Palette } from 'lucide-react'


const DrawingTools = ({ tool, setTool, color, setColor, drawingTools }) => {
    return <div>
        <div className='flex items-center gap-3 px-1 py-1 bg-gray-900 rounded-md'>
            <div className="flex items-center gap-1">
                {
                    drawingTools.map((t) => {
                        const isActive = t.id === tool ? true : false;

                        return (
                            <DrawingTool key={t.id} icon={t.icon} active={isActive} onClick={() => setTool(t.id)} label={t.label} />
                        )
                    })
                }
            </div>
            <Divider />
            <div className='flex items-center gap-2'>
                <div className='size-4 ' style={{ backgroundColor: color }} />
                <div className='flex items-center gap-1 relative cursor-pointer active:scale-95 transition-all duration-300 delay-75'>
                    <label htmlFor="color-picker" className='cursor-pointer'>
                        <input type="color" value={color} onChange={(e) => setColor(e.target.value)} className='absolute top-0 left-0 w-full h-full opacity-0' />
                        <Palette
                            size={16}
                            className='cursor-pointer'
                        />
                    </label>
                </div>
            </div>
        </div>
    </div>;
}

export default DrawingTools;

const DrawingTool = ({ icon: Icon, onClick, active, label }) => {

    console.log(active)
    return <Button variant="ghost" size="icon-sm" onClick={onClick} className={cn('rounded-md transition hover:bg-transparent hover:text-white ', active && 'bg-blue-600 text-white hover:bg-blue-600 hover:text-white')} title={label}>
        <Icon size={16} />
    </Button>
}

const Divider = () => <div className="w-px h-6 bg-gray-600" />