"use client"
import { CartesianGrid, Line, LineChart, XAxis, YAxis, ResponsiveContainer } from "recharts"

import {
    Card,
    CardContent,
} from "../ui/card"
import {
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "../ui/chart"

export const description = "A linear line chart with improved design"

const chartData = [
    { label: "100M", valuation: 60 },
    { label: "90M", valuation: 75 },
    { label: "80M", valuation: 70 },
    { label: "70M", valuation: 80 },
    { label: "60M", valuation: 75 },
    { label: "50M", valuation: 100 },
]

const chartConfig = {
    valuation: {
        label: "Valuation",
        color: "var(--chart-2)",
    },
}

export function MarketValueChart() {
    return (
        <Card className="p-0 bg-gray-900 border-gray-700 shadow-lg rounded-2xl">
            <CardContent className={'p-2'}>
                <ChartContainer config={chartConfig}>
                    <ResponsiveContainer width="100%" height={300}>
                        <LineChart
                            accessibilityLayer
                            data={chartData}
                            margin={{ top: 20, left: 0, right: 0 }}
                        >
                            <CartesianGrid strokeDasharray="3 3" className="stroke-gray-700" />
                            <XAxis
                                dataKey="label"
                                tickLine={false}
                                axisLine={false}
                                tickMargin={10}
                                stroke="#aaa"
                                tickFormatter={(value) => value}
                            />

                            <ChartTooltip
                                cursor={{ stroke: "var(--chart-1)", strokeWidth: 1 }}
                                content={<ChartTooltipContent hideLabel />}
                            />
                            <Line
                                dataKey="valuation"
                                type="monotone"
                                stroke="var(--chart-1)"
                                strokeWidth={3}
                                dot={{ r: 4, fill: "var(--chart-1)" }}
                                activeDot={{ r: 6 }}
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </ChartContainer>
            </CardContent>
        </Card>
    )
}
