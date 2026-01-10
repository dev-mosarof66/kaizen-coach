/* eslint-disable react-hooks/set-state-in-effect */
import React, { useEffect, useState } from 'react'
import { cn } from '../../lib/utils'
import { useTranslation } from '../../contexts/translation-context'
import { MdKeyboardVoice } from "react-icons/md";
import { useRouter } from 'next/navigation'

const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition

const recognition = SpeechRecognition ? new SpeechRecognition() : null

if (recognition) {
    recognition.continuous = true
    recognition.interimResults = true
    recognition.lang = "en-US"
}


const commands = [
    {
        command: "dashboard",
        page: "/"
    },
    {
        command: "tasks",
        page: "/tasks"
    },
    {
        command: "teams",
        page: "/teams"
    },
    {
        command: "players",
        page: "/players"
    },
    {
        command: "matches",
        page: "/matches"
    },
    {
        command: "reports",
        page: "/reports"
    },
    {
        command: "game plans",
        page: "/game-plans"
    }
]

const VoiceAssistant = () => {
    const router = useRouter()
    const [isRecording, setIsRecording] = useState(false)
    const [transcript, setTranscript] = useState("")

    const { language } = useTranslation()
    const isRTL = language === 'ar'


    const handleRecording = () => {
        if (!recognition) {
            alert("Speech recognition is not supported in this browser")
            return
        }

        if (isRecording) {
            recognition.stop()
            setIsRecording(false)
        } else {
            setTranscript("")
            recognition.start()
            setIsRecording(true)
        }
    }


    useEffect(() => {
        if (!recognition) return

        recognition.onresult = (event) => {
            let transcript = Array.from(event.results)
                .map(result => result[0])
                .map(result => result.transcript)
                .join("")
            setTranscript(transcript)
        }
        recognition.onend = () => {
            setIsRecording(false)
        }
        recognition.onerror = (event) => {
            console.error("Speech recognition error:", event.error)
        }
    }, [])


    useEffect(() => {
        console.log(transcript)

        if (transcript.length > 0) {

            const command = commands.find(comm => transcript.toLowerCase().includes(comm.command.toLowerCase()));

            console.log(command)

            if (command) {
                router.push(command.page)
                setTranscript("")
                setIsRecording(false)
                recognition.stop()
            }
        }
    }, [transcript, router])

    return (
        <div
            onClick={handleRecording}
            className="fixed bottom-24 xl:bottom-28 right-8 xl:right-18 z-40 flex flex-col gap-3"
        >
            <div className='relative'>
                {/* Rotating ring */}
                {isRecording && (
                    <div className="absolute inset-0 -z-10 flex items-center justify-center">
                        <div className="voice-ring" />
                    </div>
                )}

                {/* Button */}
                <div
                    className={cn(
                        'size-14 rounded-full flex items-center justify-center active:scale-95 cursor-pointer transition-all',
                        isRecording
                            ? 'bg-red-500 p-2 shadow-lg shadow-red-500/50'
                            : 'bg-linear-to-b from-blue-600 via-blue-600 to-purple-500'
                    )}
                >
                    <div className="text-2xl text-white">
                        <MdKeyboardVoice />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default VoiceAssistant