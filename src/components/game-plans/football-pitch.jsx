import React, { useRef, useEffect, useState } from 'react'
import { Stage, Layer, Rect, Line, Circle, Group } from 'react-konva'

const FootballPitch = () => {
    const containerRef = useRef(null)
    const [dimensions, setDimensions] = useState({ width: 800, height: 400 })

    // Update canvas dimensions based on container size
    useEffect(() => {
        const updateDimensions = () => {
            if (containerRef.current) {
                const { width } = containerRef.current.getBoundingClientRect()
                setDimensions({
                    width,
                    height: width / 2, // Maintain 2:1 aspect ratio
                })
            }
        }

        updateDimensions()
        window.addEventListener('resize', updateDimensions)
        return () => window.removeEventListener('resize', updateDimensions)
    }, [])

    // Canvas dimensions (100x50 units for pitch)
    const pitchWidth = 100
    const pitchHeight = 50
    const scaleX = dimensions.width / pitchWidth
    const scaleY = dimensions.height / pitchHeight

    // Mock player positions - teal circles (team 1) and green triangles (team 2)
    // Positions are in percentage (0-100), convert to canvas coordinates
    const team1Players = [
        { x: 15, y: 20 }, // Left penalty box
        { x: 75, y: 50 }, // Center
        { x: 25, y: 30 },
        { x: 35, y: 40 },
        { x: 60, y: 40 },
        { x: 20, y: 60 },
        { x: 30, y: 70 },
        { x: 45, y: 60 },
        { x: 50, y: 75 },
        { x: 55, y: 35 },
    ]

    const team2Players = [
        { x: 45, y: 25 }, // Right penalty box
        { x: 60, y: 50 },
        { x: 75, y: 30 },
        { x: 45, y: 40 },
        { x: 30, y: 60 },
        { x: 55, y: 70 },
        { x: 75, y: 55 },
    ]

    // Convert percentage to canvas coordinates
    const toCanvasX = (percent) => (percent / 100) * pitchWidth
    const toCanvasY = (percent) => (percent / 100) * pitchHeight

    return (
        <div ref={containerRef} className="w-full aspect-2/1 rounded-lg overflow-hidden bg-gray-900">
            <Stage width={dimensions.width} height={dimensions.height}>
                <Layer>
                    {/* Grid Overlay */}
                    {Array.from({ length: Math.ceil(pitchWidth / 2) }).map((_, i) => (
                        <Line
                            key={`grid-v-${i}`}
                            points={[i * 2, 0, i * 2, pitchHeight]}
                            stroke="#9ca3af"
                            strokeWidth={0.5 * scaleX}
                            opacity={0.1}
                        />
                    ))}
                    {Array.from({ length: Math.ceil(pitchHeight / 2) }).map((_, i) => (
                        <Line
                            key={`grid-h-${i}`}
                            points={[0, i * 2, pitchWidth, i * 2]}
                            stroke="#9ca3af"
                            strokeWidth={0.5 * scaleY}
                            opacity={0.1}
                        />
                    ))}

                    {/* Outer boundary */}
                    <Rect
                        x={0}
                        y={0}
                        width={pitchWidth}
                        height={pitchHeight}
                        fill="none"
                        stroke="#9ca3af"
                        strokeWidth={0.2 * scaleX}
                    />

                    {/* Center line */}
                    <Line
                        points={[50, 0, 50, pitchHeight]}
                        stroke="#9ca3af"
                        strokeWidth={0.2 * scaleX}
                    />

                    {/* Center circle */}
                    <Circle
                        x={50}
                        y={25}
                        radius={9.15}
                        fill="none"
                        stroke="#9ca3af"
                        strokeWidth={0.2 * scaleX}
                    />
                    <Circle
                        x={50}
                        y={25}
                        radius={0.5 * scaleX}
                        fill="#9ca3af"
                    />

                    {/* Left penalty box */}
                    <Rect
                        x={0}
                        y={10.25}
                        width={16.5}
                        height={29.5}
                        fill="none"
                        stroke="#9ca3af"
                        strokeWidth={0.3 * scaleX}
                    />
                    <Rect
                        x={0}
                        y={18.25}
                        width={5.5}
                        height={13.5}
                        fill="none"
                        stroke="#9ca3af"
                        strokeWidth={0.3 * scaleX}
                    />
                    <Circle
                        x={11}
                        y={25}
                        radius={0.5 * scaleX}
                        fill="#9ca3af"
                    />

                    {/* Right penalty box */}
                    <Rect
                        x={83.5}
                        y={10.25}
                        width={16.5}
                        height={29.5}
                        fill="none"
                        stroke="#9ca3af"
                        strokeWidth={0.3 * scaleX}
                    />
                    <Rect
                        x={94.5}
                        y={18.25}
                        width={5.5}
                        height={13.5}
                        fill="none"
                        stroke="#9ca3af"
                        strokeWidth={0.3 * scaleX}
                    />
                    <Circle
                        x={89}
                        y={25}
                        radius={0.5 * scaleX}
                        fill="#9ca3af"
                    />

                    {/* Corner arcs - using small circles for simplicity */}
                    <Circle x={0} y={0} radius={1} fill="none" stroke="#9ca3af" strokeWidth={0.3 * scaleX} />
                    <Circle x={pitchWidth} y={0} radius={1} fill="none" stroke="#9ca3af" strokeWidth={0.3 * scaleX} />
                    <Circle x={0} y={pitchHeight} radius={1} fill="none" stroke="#9ca3af" strokeWidth={0.3 * scaleX} />
                    <Circle x={pitchWidth} y={pitchHeight} radius={1} fill="none" stroke="#9ca3af" strokeWidth={0.3 * scaleX} />

                    {/* Team 1 Players (Teal Circles) */}
                    {team1Players.map((player, index) => (
                        <Group
                            key={`team1-${index}`}
                            x={toCanvasX(player.x)}
                            y={toCanvasY(player.y)}
                        >
                            <Circle
                                x={0}
                                y={0}
                                radius={4 * scaleX}
                                fill="#2dd4bf"
                                stroke="#0d9488"
                                strokeWidth={1 * scaleX}
                                shadowBlur={4}
                                shadowColor="black"
                                shadowOpacity={0.3}
                            />
                        </Group>
                    ))}

                    {/* Team 2 Players (Green Triangles) */}
                    {team2Players.map((player, index) => (
                        <Group
                            key={`team2-${index}`}
                            x={toCanvasX(player.x)}
                            y={toCanvasY(player.y)}
                        >
                            <Line
                                points={[0, -6 * scaleY, -6 * scaleX, 6 * scaleY, 6 * scaleX, 6 * scaleY]}
                                closed
                                fill="#22c55e"
                                stroke="#16a34a"
                                strokeWidth={1 * scaleX}
                                shadowBlur={4}
                                shadowColor="black"
                                shadowOpacity={0.3}
                            />
                        </Group>
                    ))}
                </Layer>
            </Stage>
        </div>
    )
}


export default FootballPitch