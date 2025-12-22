'use client'
import BorderB from '@/assets/border-b.png'
import BorderL from '@/assets/border-l.png'
import BorderR from '@/assets/border-r.png'
import BorderT from '@/assets/border-t.png'
import { ReactNode } from 'react'
import Portal from './portal'
interface DialogProps {
  isOpen: boolean
  onClose: () => void
  title?: string
  children: ReactNode
  size?: 'sm' | 'md' | 'lg' | 'xl'
}

export default function Dialog({ isOpen, onClose, title, children, size = 'md' }: DialogProps) {
  if (!isOpen) return null

  const sizeClasses = {
    sm: 'max-w-sm',
    md: 'max-w-2xl',
    lg: 'max-w-4xl',
    xl: 'max-w-6xl',
  }

  return (
    <Portal>
      <div className='fixed inset-0  flex items-center justify-center z-50 p-4'>
        <div className='fixed inset-0 bg-black/50' onClick={onClose}></div>
        <div
          className={` rounded-lg ${sizeClasses[size]} w-full max-h-[90vh] flex flex-col border-[3px] rounded-sm border-black bg-[#F5EACE] relative`}
          onClick={(e) => e.stopPropagation()}>
          <div className='p-12 h-full w-full overflow-auto relative min-h-0 max-h-none relative'>
            {title && <h2 className='text-3xl font-bold text-[#62513F] mb-6'>{title}</h2>}
            <div className='mb-8'>{children}</div>
          </div>
          <div
            className='absolute top-0 left-0 w-full h-8 opacity-50'
            style={{
              backgroundImage: `url(${BorderT.src})`,
              backgroundSize: 'auto 100%',
              backgroundRepeat: 'repeat-x',
            }}
          />
          <div
            className='absolute bottom-0 left-0 w-full h-8 opacity-50'
            style={{
              backgroundImage: `url(${BorderB.src})`,
              backgroundSize: 'auto 100%',
              backgroundRepeat: 'repeat-x',
            }}
          />
          <div
            className='absolute top-0 left-0 w-8 h-full opacity-50'
            style={{
              backgroundImage: `url(${BorderL.src})`,
              backgroundSize: '100% auto',
              backgroundRepeat: 'repeat-y',
            }}
          />
          <div
            className='absolute top-0 right-0 w-8 h-full opacity-50'
            style={{
              backgroundImage: `url(${BorderR.src})`,
              backgroundSize: '100% auto',
              backgroundRepeat: 'repeat-y',
            }}
          />
        </div>
      </div>
    </Portal>
  )
}
