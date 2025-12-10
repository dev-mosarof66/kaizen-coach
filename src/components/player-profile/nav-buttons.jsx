import React from 'react'
import { Button } from '../ui/button'
import { FaCheck, FaFile, FaPlus } from 'react-icons/fa'
import { ChevronDown } from 'lucide-react'

const NavButtons = () => {
    return (
        <div className='w-full flex items-center justify-end'>
            <div className='flex flex-wrap gap-2'>
                <Button size={'sm'} className={'w-fit bg-transparent border border-gray-600 hover:bg-gray-600/10'}>
                    <FaPlus />
                    <p className='hidden sm:block'>Assign Task</p>
                </Button>
                <Button size={'sm'} className={'w-fit bg-transparent border border-gray-600 hover:bg-gray-600/10'}>
                    <FaCheck />
                    <p className='hidden sm:block'>Mark Attendence</p>
                </Button>
                <Button size={'sm'} className={'w-fit bg-transparent border border-gray-600 hover:bg-gray-600/10'}>
                    <FaFile />
                    <p className='hidden sm:block'>Add Note</p>
                </Button>
                <Button size={'sm'} className={'w-fit bg-transparent border border-gray-600 hover:bg-gray-600/10'}>
                    <p className='hidden sm:block'>Match Report</p>
                    <ChevronDown />
                </Button>
            </div>
        </div>
    )
}

export default NavButtons