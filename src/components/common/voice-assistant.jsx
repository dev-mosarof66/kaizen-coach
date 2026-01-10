/* eslint-disable react-hooks/set-state-in-effect */
import React, { useEffect, useRef, useState } from "react"
import { cn } from "../../lib/utils"
import { useTranslation } from "../../contexts/translation-context"
import { MdKeyboardVoice } from "react-icons/md"
import { useRouter } from "next/navigation"

const commands = [
    { command: "dashboard", page: "/" },
    { command: "tasks", page: "/tasks" },
    { command: "teams", page: "/teams" },
    { command: "players", page: "/players" },
    { command: "matches", page: "/matches" },
    { command: "reports", page: "/reports" },
    { command: "game plans", page: "/game-plans" },
]

const VoiceAssistant = () => {
    const router = useRouter()
    const { language } = useTranslation()

    const recognitionRef = useRef(null)

    const [isRecording, setIsRecording] = useState(false)
    const [transcript, setTranscript] = useState("")

    // Create speech recognizer safely (client only)
    useEffect(() => {
        if (typeof window === "undefined") return

        const SpeechRecognition =
            window.SpeechRecognition || window.webkitSpeechRecognition

        if (!SpeechRecognition) return

        const recognition = new SpeechRecognition()
        recognition.continuous = true
        recognition.interimResults = true
        recognition.lang = language === "ar" ? "ar-SA" : "en-US"

        recognitionRef.current = recognition
    }, [language])

    // Listen for speech
    useEffect(() => {
        const recognition = recognitionRef.current
        if (!recognition) return

        recognition.onresult = (event) => {
            const text = Array.from(event.results)
                .map((r) => r[0].transcript)
                .join("")

            setTranscript(text)
        }

        recognition.onend = () => setIsRecording(false)

        recognition.onerror = (e) => {
            console.error("Speech error:", e)
            setIsRecording(false)
        }
    }, [])

    // Detect commands
    useEffect(() => {
        if (!transcript) return

        const found = commands.find((c) =>
            transcript.toLowerCase().includes(c.command)
        )

        if (found) {
            recognitionRef.current?.stop()
            setIsRecording(false)
            setTranscript("")
            router.push(found.page)
        }
    }, [transcript, router])



    const handleRecording = () => {
        const recognition = recognitionRef.current
        if (!recognition) {
            alert("Speech recognition not supported")
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

    return (
        <div
            onClick={handleRecording}
            className="fixed bottom-24 xl:bottom-28 right-8 xl:right-18 z-40"
        >
            <div className="relative">
                {isRecording && (
                    <div className="absolute inset-0 -z-10 flex items-center justify-center">
                        <div className="voice-ring" />
                    </div>
                )}

                <div
                    className={cn(
                        "size-14 rounded-full flex items-center justify-center cursor-pointer transition-all",
                        isRecording
                            ? "bg-red-500 shadow-lg shadow-red-500/50"
                            : "bg-linear-to-b from-blue-600 via-blue-600 to-purple-500"
                    )}
                >
                    <MdKeyboardVoice className="text-2xl text-white" />
                </div>
            </div>
        </div>
    )
}

export default VoiceAssistant
