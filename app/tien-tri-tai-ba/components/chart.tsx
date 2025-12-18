/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import Image from 'next/image'
import Avatar from '@/assets/Avatar.svg'

const data = [
  { x: 0, y: 10 },
  { x: 20, y: 70 },
  { x: 40, y: 95 },
  { x: 50, y: 100 },
  { x: 60, y: 60 },
  { x: 80, y: 35 },
  { x: 100, y: 15 },
]

export default function Chart() {
  return (
    <div className='w-full'>
      <ResponsiveContainer width='100%' height={350} className={'bg-[#E9D5B9] rounded-sm'}>
        <LineChart data={data} margin={{ top: 32, right: 16, left: 16, bottom: 16 }}>
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
            domain={[0, 100]}
            ticks={[0, 20, 40, 60, 80, 100]}
          />
          <YAxis
            stroke='#323239'
            style={{ fontSize: '14px', fontWeight: '600' }}
            domain={[0, 120]}
            ticks={[0, 45, 90, 120]}
            width={50}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: '#fff',
              border: 'none',
              borderRadius: '8px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            }}
            cursor={false}
          />
          <Line
            type='monotone'
            dataKey='y'
            stroke='#D73930'
            strokeWidth={3}
            dot={({ cx, cy, payload }: any) => {
              const isActive = payload.x === 0 || payload.x === 100
              const isAvatarPoint = payload.x === 50
              
              if (isAvatarPoint) {
                return (
                  <g key={`avatar-${payload.x}`}>
                    <circle
                      cx={cx}
                      cy={cy}
                      r={24}
                      fill='transparent'
                      stroke='#D73930'
                      strokeWidth={4}
                    />
                    <image
                      x={cx - 20}
                      y={cy - 20}
                      width={40}
                      height={40}
                      href={Avatar.src}
                      clipPath='url(#avatarClip)'
                    />
                  </g>
                )
              }
              
              return (
                <circle
                  key={`dot-${payload.x}`}
                  cx={cx}
                  cy={cy}
                  r={isActive ? 12 : 0}
                  fill={isActive ? '#D73930' : 'none'}
                />
              )
            }}
            activeDot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
