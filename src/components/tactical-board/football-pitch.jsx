import React, { useRef } from 'react'
import { Stage, Layer, Line, Rect, Circle, Arrow, Text } from 'react-konva'
import FootballPitchBackground from './football-pitch-background'


const FootballPitch = ({ stageRef, handleMouseDown, handleMouseMove, handleMouseUp, objects, editingText, setEditingText, commitText }) => {
    const containerRef = useRef(null)

    return (
        <div ref={containerRef} style={{ position: 'relative' }} className='w-full  h-full'>

            <div className='w-full max-w-4xl mx-auto h-full relative z-50'>
                <Stage
                    ref={stageRef}
                    width={window.innerWidth * 0.95}
                    // eslint-disable-next-line react-hooks/refs
                    height={containerRef.current?.clientHeight || 450}
                    onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUp}
                >
                    <Layer>
                        {objects.map((obj, i) => {
                            if (obj.type === 'line')
                                return (
                                    <Line
                                        key={i}
                                        points={obj.points}
                                        stroke={obj.tool === 'eraser' ? '#0f172a' : obj.color}
                                        strokeWidth={obj.tool === 'eraser' ? 20 : 2}
                                        tension={0.5}
                                        lineCap="round"
                                        globalCompositeOperation={
                                            obj.tool === 'eraser' ? 'destination-out' : 'source-over'
                                        }
                                    />
                                )

                            if (obj.type === 'rect')
                                return <Rect key={i} {...obj} stroke={obj.color} strokeWidth={2} />

                            if (obj.type === 'circle')
                                return <Circle key={i} {...obj} stroke={obj.color} strokeWidth={2} />

                            if (obj.type === 'arrow')
                                return <Arrow key={i} {...obj} stroke={obj.color} strokeWidth={2} />

                            if (obj.type === 'text')
                                return <Text key={i} {...obj} fill={obj.color} fontSize={16} />

                            return null
                        })}
                    </Layer>
                </Stage>
                {editingText && (
                    <textarea
                        autoFocus
                        value={editingText.value || ''}
                        onChange={(e) =>
                            setEditingText({ ...editingText, value: e.target.value })
                        }
                        onBlur={commitText}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter' && !e.shiftKey) {
                                e.preventDefault()
                                commitText()
                            }
                        }}
                        style={{
                            position: 'absolute',
                            top: editingText.y,
                            left: editingText.x,
                            color: editingText.color,
                            background: 'transparent',
                            border: '1px dashed #64748b',
                            outline: 'none',
                            fontSize: '16px',
                            fontFamily: 'sans-serif',
                            resize: 'none',
                            whiteSpace: 'pre',
                            zIndex: 10,
                        }}
                    />
                )}
            </div>

        </div>
    )
}

export default FootballPitch