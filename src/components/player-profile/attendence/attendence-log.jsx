'use client'
import React from 'react'
import { Button } from '../../ui/button'
import { Card, CardContent, CardHeader } from '../../ui/card'
import { OutlineButton } from '../../common/button';


const activityData = [
    { date: "2025-11-01", session: "Training", status: "Present", note: "—", editedBy: "Coach Thompson" },
    { date: "2025-10-30", session: "Match", status: "Present", note: "90 mins played", editedBy: "System" },
    { date: "2025-10-28", session: "Training", status: "Present", note: "—", editedBy: "Coach Thompson" },
    { date: "2025-10-26", session: "Training", status: "Late", note: "10 mins", editedBy: "Coach Thompson" },
    { date: "2025-10-24", session: "Training", status: "Present", note: "—", editedBy: "Coach Thompson" },
];

const AttendenceLogs = () => {

    return (
        <Card className="w-full col-span-2 bg-gray-800 border border-gray-700 text-white rounded-2xl p-4">

            {/* Header */}
            <CardHeader className="p-0">
                <div className='w-full flex items-center justify-between'>
                    <p className="text-lg font-semibold">Attendence Log</p>
                    <OutlineButton onClick={() => console.log('export csv')}>
                        Export CSV
                    </OutlineButton>
                </div>
            </CardHeader>

            {/* Divider */}
            <div className="w-full h-px bg-gray-700" />

            {/* Calendar */}
            <CardContent className="p-0">
                <div className="overflow-x-auto text-gray-400">
                    <table className="min-w-full">
                        <thead>
                            <tr>
                                <th className="py-2 px-4 border-b border-b-gray-600 text-left">Date</th>
                                <th className="hidden sm:block py-2 px-4 border-b border-b-gray-600 text-left">Session</th>
                                <th className="py-2 px-4 border-b border-b-gray-600 text-left">Status</th>
                                <th className="hidden sm:block py-2 px-4 border-b border-b-gray-600 text-left">Note</th>
                                <th className="py-2 px-4 border-b border-b-gray-600 text-left">Edited By</th>
                            </tr>
                        </thead>
                        <tbody>
                            {activityData.map((item, index) => (
                                <tr key={index} className='text-gray-300'>
                                    <td className="py-2 px-4 border-b border-b-gray-600">{item.date}</td>
                                    <td className="hidden sm:block py-2 px-4 border-b border-b-gray-600">{item.session}</td>
                                    <td className="py-2 px-4 border-b border-b-gray-600">{item.status}</td>
                                    <td className="hidden sm:block py-2 px-4 border-b border-b-gray-600">{item.note}</td>
                                    <td className="py-2 px-4 border-b border-b-gray-600">{item.editedBy}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </CardContent>
        </Card>
    )
}

export default AttendenceLogs
