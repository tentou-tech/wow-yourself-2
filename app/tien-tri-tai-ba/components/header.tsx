'use client'
import Avatar from '@/assets/Avatar.svg'
import Logo from '@/assets/Logo.svg'
import { Inter } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

const navItems = [
  { label: 'Lời Ngỏ', href: '#' },
  { label: 'Giải Thưởng', href: '#' },
  { label: 'Ban Cố Vấn', href: '#' },
  { label: 'Đối Tác', href: '#' },
  { label: 'Đang Diễn Ra', href: '#' },
  { label: 'Team', href: '#' },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <header
        className={`px-3 border-b-[3px] border-black bg-[#D73930] lg:px-6 sticky z-20 top-0 w-screen py-3.5 lg:py-5 flex justify-between items-center transition-transform duration-300`}>
        <div className='flex items-center gap-6 lg:gap-10'>
          <button onClick={() => setIsOpen(!isOpen)} className='lg:hidden p-2' aria-label='Toggle menu'>
            <svg width='20' height='17' viewBox='0 0 20 17' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <rect width='20' height='3' fill='#D9D9D9' />
              <rect y='7' width='20' height='3' fill='#D9D9D9' />
              <rect y='14' width='20' height='3' fill='#D9D9D9' />
            </svg>
          </button>
          <Link href='/'>
            <Image src={Logo} alt='Logo' className='h-10.5' />
          </Link>
          <nav className='hidden lg:flex gap-8 items-center'>
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`text-white uppercase font-semibold ${inter.className}`}>
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className='flex items-center gap-6'>
          <Image src={Avatar} alt='Avatar' className='h-10' />
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-50 lg:hidden transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}>
        {/* Backdrop */}
        <div className='absolute inset-0 bg-black/30' onClick={() => setIsOpen(false)} />
        {/* Sidebar */}
        <nav
          className={`absolute left-0 top-0 h-screen w-64 bg-black/50 pt-24 px-6 space-y-6 transition-transform duration-300 ease-out ${
            isOpen ? 'translate-x-0' : '-translate-x-full'
          }`}>
          {navItems.map((item, index) => (
            <Link
              key={item.label}
              href={item.href}
              className={`block text-white uppercase font-semibold text-lg ${
                inter.className
              } transition-all duration-300 ease-out transform ${
                isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
              }`}
              style={{
                transitionDelay: isOpen ? `${(index + 1) * 50}ms` : '0ms',
              }}
              onClick={() => setIsOpen(false)}>
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </>
  )
}
