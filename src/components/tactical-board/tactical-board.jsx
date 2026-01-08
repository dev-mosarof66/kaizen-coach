/* eslint-disable react-hooks/immutability */
'use client'
import React, { useRef, useState } from 'react'
import { Pencil, Square, Circle as CircleIcon, ArrowRight, Type, Eraser, Undo, Redo, ZoomIn, ZoomOut, Trash, Users, Mic, Video } from 'lucide-react'
import DrawingTools from './drawing-tools'
import ActionTools from './action-tools'
import FootballPitch from './football-pitch'
import { CardContent } from '../ui/card'
import BottomAction from './bottom-action'
import FootballPitchBackground from './football-pitch-background'
import { useTranslation } from '../../contexts/translation-context'


const TacticalBoard = () => {
    const { t } = useTranslation()
    const stageRef = useRef(null)
    const startPos = useRef({ x: 0, y: 0 })
    const [color, setColor] = useState('#ffffff')

    const [tool, setTool] = useState('pencil')
    const [isDrawing, setIsDrawing] = useState(false)
    const [zoom, setZoom] = useState(1)

    const [history, setHistory] = useState([])
    const [step, setStep] = useState(-1)

    const [objects, setObjects] = useState([])

    const [editingText, setEditingText] = useState(null)



    // audio state
    const [audioStream, setAudioStream] = useState(null)
    const [audioChunks, setAudioChunks] = useState([])
    const [isRecording, setIsRecording] = useState(false)
    const [mediaRecorder, setMediaRecorder] = useState(null)

    const drawingTools = [
        { id: 'pencil', icon: Pencil, label: t('tacticalBoard.drawingTools.pencil') },
        { id: 'square', icon: Square, label: t('tacticalBoard.drawingTools.square') },
        { id: 'circle', icon: CircleIcon, label: t('tacticalBoard.drawingTools.circle') },
        { id: 'arrow', icon: ArrowRight, label: t('tacticalBoard.drawingTools.arrow') },
        { id: 'text', icon: Type, label: t('tacticalBoard.drawingTools.text') },
        // { id: 'players', icon: Users, label: t('tacticalBoard.drawingTools.players') },
        { id: 'eraser', icon: Eraser, label: t('tacticalBoard.drawingTools.eraser') },
    ]

    const actionTools = [
        { id: 'undo', icon: Undo, label: t('tacticalBoard.actionTools.undo') },
        { id: 'redo', icon: Redo, label: t('tacticalBoard.actionTools.redo') },
        { id: 'zoomIn', icon: ZoomIn, label: t('tacticalBoard.actionTools.zoomIn') },
        { id: 'zoomOut', icon: ZoomOut, label: t('tacticalBoard.actionTools.zoomOut') },
        { id: 'mic', icon: Mic, label: t('tacticalBoard.actionTools.microphone') },
        { id: 'video', icon: Video, label: t('tacticalBoard.actionTools.video') },
        { id: 'trash', icon: Trash, label: t('tacticalBoard.actionTools.clear') },
    ]



    /* ------------------ History helpers ------------------ */
    const commit = (newObjects) => {
        const updated = history.slice(0, step + 1)
        updated.push(newObjects)
        setHistory(updated)
        setStep(step + 1)
        setObjects(newObjects)
    }

    console.log('step', step)

    /* ------------------ Mouse handlers ------------------ */
    const handleMouseDown = (e) => {
        const pos = e.target.getStage().getPointerPosition()
        startPos.current = pos
        setIsDrawing(true)

        let newObj = null

        switch (tool) {
            case 'pencil':
            case 'eraser':
                newObj = {
                    type: 'line',
                    tool,
                    color,
                    strokeWidth: tool === 'eraser' ? 20 : 2,
                    points: [pos.x, pos.y],
                }
                break

            case 'square':
                newObj = { type: 'rect', x: pos.x, y: pos.y, width: 0, height: 0, color }
                break

            case 'circle':
                newObj = { type: 'circle', x: pos.x, y: pos.y, radius: 0, color }
                break

            case 'arrow':
                newObj = { type: 'arrow', points: [pos.x, pos.y, pos.x, pos.y], color }
                break

            case 'text':
                setEditingText({
                    x: pos.x,
                    y: pos.y,
                    text: '',
                    color,
                })
                setIsDrawing(false)
                return
        }

        commit([...objects, newObj])
    }

    const handleMouseMove = (e) => {
        if (!isDrawing) return
        const pos = e.target.getStage().getPointerPosition()
        const last = objects[objects.length - 1]

        if (!last) return

        if (last.type === 'line') {
            last.points = last.points.concat([pos.x, pos.y])
        }

        if (last.type === 'rect') {
            last.width = pos.x - startPos.current.x
            last.height = pos.y - startPos.current.y
        }

        if (last.type === 'circle') {
            last.radius = Math.hypot(
                pos.x - startPos.current.x,
                pos.y - startPos.current.y
            )
        }

        if (last.type === 'arrow') {
            last.points = [
                startPos.current.x,
                startPos.current.y,
                pos.x,
                pos.y,
            ]
        }

        setObjects(objects.slice())
    }

    const handleMouseUp = () => {
        setIsDrawing(false)
    }

    /* ------------------ Actions ------------------ */
    const undo = () => {
        if (step <= 0) {
            setObjects([])
            return
        }
        setStep(step - 1)
        setObjects(history[step - 1])
    }

    const redo = () => {
        if (step >= history.length - 1) return
        setStep(step + 1)
        setObjects(history[step + 1])
    }

    const clearBoard = () => {
        commit([])
    }

    const commitText = () => {
        if (!editingText) return

        if (editingText.value.trim() !== '') {
            commit([
                ...objects,
                {
                    type: 'text',
                    x: editingText.x,
                    y: editingText.y,
                    text: editingText.value,
                    color,
                },
            ])
        }

        setEditingText(null)
    }

    const zoomStage = (delta) => {
        const newZoom = Math.max(1, Math.min(2, zoom + delta))
        setZoom(newZoom)
        stageRef.current.scale({ x: newZoom, y: newZoom })
        stageRef.current.batchDraw()
    }


    const handleMicrophone = async () => {
        try {

            const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
            const mediaRecorder = new MediaRecorder(stream)
            setAudioStream(stream)
            setMediaRecorder(mediaRecorder)
            setIsRecording(true)
            mediaRecorder.start()
            mediaRecorder.addEventListener('dataavailable', (event) => {
                setAudioChunks(prev => [...prev, event.data])
            })
            mediaRecorder.addEventListener('stop', () => {
                setIsRecording(false)
                mediaRecorder.stop()
                stream.getTracks().forEach(track => track.stop())
                setAudioStream(null)
                setMediaRecorder(null)
                setAudioChunks([])
            })
        } catch (error) {
            console.error('Error accessing microphone:', error)
            setIsRecording(false)
            setAudioStream(null)
            setMediaRecorder(null)
            setAudioChunks([])
        }
    }

    const handleVideo = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ video: true })
            setVideoStream(stream)
        } catch (error) {
            console.error('Error accessing video:', error)
        }
    }


    const stopRecording = () => {
        if (mediaRecorder) {
            mediaRecorder.stop()
            mediaRecorder.getTracks().forEach(track => track.stop())
            setIsRecording(false)
            setAudioStream(null)
            setMediaRecorder(null)
            setAudioChunks([])
        }
    }

    const handleAction = (actionId) => {
        switch (actionId) {
            case 'undo':
                undo()
                break
            case 'redo':
                redo()
                break
            case 'zoomIn':
                zoomStage(0.1)
                break
            case 'zoomOut':
                zoomStage(-0.1)
                break
            case 'trash':
                clearBoard()
                break
            case 'mic':
                handleMicrophone()
                break
            case 'video':
                handleVideo()
                break
            case 'stop':
                stopRecording()
                break
        }
    }
    return (
        <CardContent className='w-full h-full p-2 flex flex-col gap-4 bg-gray-800 rounded-md'>
            <div className='flex items-center justify-between gap-2 flex-wrap'>
                <DrawingTools tool={tool} setTool={setTool} color={color} setColor={setColor} drawingTools={drawingTools} />
                <ActionTools actionTools={actionTools} handleAction={handleAction} />
            </div>
            <div className='w-full max-w-5xl mx-auto h-full bg-gray-900 relative rounded-md p-2 md:p-6'>
                <div className='w-full max-w-4xl mx-auto relative'>
                    <div>
                        <FootballPitchBackground />
                    </div>
                    <div className='w-full h-full absolute top-0 left-0 z-50'>
                        <FootballPitch stageRef={stageRef} handleMouseDown={handleMouseDown} handleMouseMove={handleMouseMove} handleMouseUp={handleMouseUp} objects={objects} editingText={editingText} setEditingText={setEditingText} commitText={commitText} />
                    </div>
                </div>
            </div>
            <BottomAction />
        </CardContent>
    )
}

export default TacticalBoard