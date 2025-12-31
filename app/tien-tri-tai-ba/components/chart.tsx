/* eslint-disable react-hooks/set-state-in-effect */
/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import { getDistributionRankings } from '@/services/tttb'
import { useEffect, useState } from 'react'
import { CartesianGrid, Label, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

export default function Chart() {
  const [chartData, setChartData] = useState<any[]>([])
  const [xAxisDomain, setXAxisDomain] = useState<[number, number]>([0, 100])
  const [xAxisTicks, setXAxisTicks] = useState<number[]>([0, 20, 40, 60, 80, 100])
  const [yAxisDomain, setYAxisDomain] = useState<[number, number]>([0, 120])
  const [yAxisTicks, setYAxisTicks] = useState<number[]>([0, 45, 90, 120])

  const getRanking = async () => {
    try {
      const res = await getDistributionRankings()
      // Convert ranking data to chart format (x: xp level, y: number of users)
      const convertedData = res
        .map((item: { users: number; xp: number }) => ({
          x: item.xp,
          y: item.users,
          name: 'user',
        }))
        .sort((a: any, b: any) => a.x - b.x)
      setChartData(convertedData)

      // Calculate dynamic domain and ticks based on data
      if (convertedData.length > 0) {
        const xpValues = convertedData.map((d) => d.x)
        const userValues = convertedData.map((d) => d.y)
        const minXp = Math.min(...xpValues)
        const maxXp = Math.max(...xpValues)
        const minUsers = Math.min(...userValues)
        const maxUsers = Math.max(...userValues)

        // X-axis: Set domain with some padding
        const xPadding = maxXp === minXp ? maxXp * 0.1 : (maxXp - minXp) * 0.1
        const xDomain: [number, number] = [Math.max(0, minXp - xPadding), maxXp + xPadding]
        setXAxisDomain(xDomain)

        // X-axis: Generate ticks (approximately 5-6 ticks)
        const xTickCount = 5
        const xTickInterval = xDomain[0] === xDomain[1] ? 1 : Math.ceil((xDomain[1] - xDomain[0]) / xTickCount)
        const xTicks = []
        for (let i = xDomain[0]; i <= xDomain[1]; i += xTickInterval) {
          xTicks.push(Math.round(i))
        }
        if (!xTicks.includes(Math.round(xDomain[1]))) {
          xTicks.push(Math.round(xDomain[1]))
        }
        setXAxisTicks(xTicks)

        // Y-axis: Set domain from 0 to max users rounded to nearest 10
        const maxUsersRounded = Math.ceil(maxUsers / 10) * 10
        const yDomain: [number, number] = [0, maxUsersRounded]
        setYAxisDomain(yDomain)

        // Y-axis: Generate ticks (approximately 4-5 ticks)
        const yTickCount = 4
        const yTickInterval = yDomain[0] === yDomain[1] ? 1 : Math.ceil((yDomain[1] - yDomain[0]) / yTickCount)
        const yTicks = []
        for (let i = yDomain[0]; i <= yDomain[1]; i += yTickInterval) {
          yTicks.push(Math.round(i))
        }
        if (!yTicks.includes(Math.round(yDomain[1]))) {
          yTicks.push(Math.round(yDomain[1]))
        }
        setYAxisTicks(yTicks)
      }
    } catch (error) {
      console.error('Error fetching rankings:', error)
    }
  }

  useEffect(() => {
    const id = setInterval(() => {
      getRanking()
    }, 30 * 1000) // Update every 30 seconds
    getRanking()
    return () => clearInterval(id)
  }, [])

  return (
    <div className='w-full'>
      <ResponsiveContainer width='100%' height={350} className={'bg-[#E9D5B9] rounded-sm'}>
        <LineChart data={chartData} margin={{ top: 32, right: 16, left: 16, bottom: 16 }}>
          <defs>
            <clipPath id='avatarClip'>
              <circle cx='20' cy='20' r='20' />
            </clipPath>
          </defs>
          <CartesianGrid strokeDasharray='0' stroke='#E5E5E5' vertical={false} />
          <XAxis
            dataKey='x'
            stroke='#323239'
            style={{ fontSize: '14px', fontWeight: '600' }}
            type='number'
            domain={xAxisDomain}
            ticks={xAxisTicks}
            label={{ value: 'XP', position: 'insideBottomRight', offset: -5 }}
          />
          <YAxis
            stroke='#323239'
            style={{ fontSize: '14px', fontWeight: '600' }}
            domain={yAxisDomain}
            ticks={yAxisTicks}
            width={50}
            label={{ value: 'Người tham gia', angle: -90, position: 'insideLeft' }}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: '#fff',
              border: 'none',
              borderRadius: '8px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            }}
            cursor={false}
            content={({ active, payload }: any) => {
              if (active && payload && payload.length) {
                const data = payload[0].payload
                return (
                  <div className='bg-white p-3 rounded-lg shadow-md'>
                    <p className='font-bold text-lg'>{data.x} XP</p>
                    <p className='text-red-600 font-semibold'>Người tham gia : {data.y}</p>
                  </div>
                )
              }
              return null
            }}
          />
          <Line
            type='monotone'
            dataKey='y'
            name='User'
            stroke='#D73930'
            strokeWidth={3}
            dot={({ cx, cy, payload }: any) => {
              const isActive = payload.x === 0 || payload.x === 100
              // const isAvatarPoint = payload.x === 50

              // if (isAvatarPoint) {
              //   return (
              //     <g key={`avatar-${payload.x}`}>
              //       <circle cx={cx} cy={cy} r={24} fill='transparent' stroke='#D73930' strokeWidth={4} />
              //       <image
              //         x={cx - 20}
              //         y={cy - 20}
              //         width={40}
              //         height={40}
              //         href={Avatar.src}
              //         clipPath='url(#avatarClip)'
              //       />
              //     </g>
              //   )
              // }

              // return (
              //   <circle
              //     key={`dot-${payload.x}`}
              //     cx={cx}
              //     cy={cy}
              //     r={isActive ? 12 : 0}
              //     fill={isActive ? '#D73930' : 'none'}
              //   />
              // )
              return <circle key={`dot-${payload.x}`} cx={cx} cy={cy} r={3} fill={'#D73930'} />
            }}
            activeDot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
