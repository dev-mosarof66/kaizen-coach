import React from 'react'
import { BsFillHeartPulseFill } from "react-icons/bs";
import { Card, CardContent, CardHeader } from '../ui/card'
import { Input } from '../ui/input'
import { FaRegFileLines } from "react-icons/fa6";
import { Textarea } from "../ui/textarea"

const Notes = () => {
  return (
    <Card className="bg-gray-800/70 border-gray-700/50 shadow-md rounded-2xl">
      <CardHeader className="pb-2">
        <div className="w-full flex items-center gap-2">
          <FaRegFileLines className="text-blue-500 text-xl" />
          <p className="text-white font-medium text-lg">Additional Notes</p>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="w-full">
          {/* notes */}
          <div className="w-full flex flex-col gap-2">
            <label className="text-gray-300 text-sm">Notes</label>
            <Textarea placeholder="Any additional information about the player..."
            className={'w-full h-24 resize-none border border-gray-500'}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default Notes