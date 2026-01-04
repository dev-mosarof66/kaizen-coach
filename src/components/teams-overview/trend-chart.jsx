"use client"

import { TrendingUp } from "lucide-react"
import { CartesianGrid, Line, LineChart, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "../ui/chart"

export const description = "A linear line chart"


const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--chart-3)",
  },
}

const TrendChart = ({ data }) => {

  const formTrend = [
    {
      label: 'M1',
      value: 5,
    },
    {
      label: 'M2',
      value: 4,
    },
    {
      label: 'M3',
      value: 3,
    },
    {
      label: 'M4',
      value: 2,
    },
    {
      label: 'M5',
      value: 1,
    },
  ]
  return (
    <Card className='w-full h-full bg-gray-800/50 rounded-xl p-4 border border-gray-800'>

      <CardContent className='w-full h-full'>
        <ChartContainer config={chartConfig}>
          <LineChart data={formTrend}>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Line
              dataKey="desktop"
              type="linear"
              stroke="var(--color-desktop)"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

export default TrendChart