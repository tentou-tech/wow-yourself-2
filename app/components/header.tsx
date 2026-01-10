'use client'
import Logo from '@/assets/Logo.svg'
import { Inter } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { SwiperClass } from 'swiper/react'

const inter = Inter({ subsets: ['latin'] })

const navItems = [
  { label: 'Lời Ngỏ', href: '#loi-ngo', index: 1 },
  { label: 'Giải Thưởng', href: '#giai-thuong', index: 2 },
  { label: 'Ban Cố Vấn', href: '#ban-co-van', index: 3 },
  { label: 'Đối Tác', href: '#doi-tac', index: 5 },
  { label: 'Đang Diễn Ra', href: '#dang-dien-ra', index: 6 },
  { label: 'Đọc truyện', href: 'https://punkga.me' },
]

export default function Header({ swiperRef }: { swiperRef?: React.RefObject<SwiperClass | null> }) {
  const [isOpen, setIsOpen] = useState(false)
  const isBeforeLaunch = new Date() < new Date('2026-01-11T20:00:00')

  return (
    <>
      <header
        className={`px-3 lg:px-6 fixed z-20 top-0 w-screen pt-3.5 lg:pt-5 pb-16 flex justify-between items-center bg-linear-to-b from-black/72 to-transparent transition-transform duration-300`}>
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
              <div
                key={item.label}
                onClick={() =>
                  item.index !== undefined
                    ? swiperRef?.current?.slideTo(item.index)
                    : item.href
                    ? (window.location.href = item.href)
                    : undefined
                }
                className={`text-white uppercase cursor-pointer font-semibold ${inter.className}`}>
                {item.label}
              </div>
            ))}
          </nav>
        </div>
        <div className='flex items-center gap-6'>
          {isBeforeLaunch ? (
            <button
              disabled
              className={`flex items-center gap-1 bg-gray-400 text-gray-600 rounded-xs lg:rounded-sm h-9 lg:h-10 px-2.5 lg:px-4 text-sm font-semibold cursor-not-allowed ${inter.className}`}>
              <svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M12.3528 1.16675C12.7015 1.16675 13.0133 1.38385 13.1343 1.71088L14.5266 5.47336L18.289 6.8656C18.6161 6.98661 18.8332 7.29844 18.8332 7.64714C18.8332 7.99584 18.6161 8.30767 18.289 8.42868L14.5266 9.82092L13.1343 13.5834C13.0133 13.9104 12.7015 14.1275 12.3528 14.1275C12.0041 14.1275 11.6922 13.9104 11.5712 13.5834L10.179 9.82092L6.41652 8.42868C6.08949 8.30767 5.87239 7.99584 5.87239 7.64714C5.87239 7.29844 6.08949 6.98661 6.41652 6.8656L10.179 5.47336L11.5712 1.71088C11.6922 1.38385 12.0041 1.16675 12.3528 1.16675ZM12.3528 4.40137L11.6091 6.41112C11.5247 6.63922 11.3449 6.81906 11.1168 6.90347L9.10701 7.64714L11.1168 8.39082C11.3449 8.47522 11.5247 8.65506 11.6091 8.88316L12.3528 10.8929L13.0965 8.88316C13.1809 8.65506 13.3607 8.47522 13.5888 8.39082L15.5986 7.64714L13.5888 6.90347C13.3607 6.81906 13.1809 6.63922 13.0965 6.41112L12.3528 4.40137ZM5.29396 10.5785C5.57004 10.5785 5.82821 10.7153 5.98333 10.9437L7.22623 12.7737L9.05627 14.0166C9.28467 14.1717 9.42141 14.4299 9.42141 14.706C9.42141 14.9821 9.28467 15.2402 9.05627 15.3953L7.22623 16.6382L5.98333 18.4683C5.82821 18.6967 5.57004 18.8334 5.29396 18.8334C5.01787 18.8334 4.7597 18.6967 4.60458 18.4683L3.36168 16.6382L1.53164 15.3953C1.30325 15.2402 1.1665 14.9821 1.1665 14.706C1.1665 14.4299 1.30325 14.1717 1.53164 14.0166L3.36168 12.7737L4.60458 10.9437C4.7597 10.7153 5.01787 10.5785 5.29396 10.5785ZM5.29396 12.8951L4.65097 13.8418C4.59187 13.9288 4.51682 14.0039 4.4298 14.063L3.48307 14.706L4.4298 15.3489C4.51682 15.4081 4.59187 15.4831 4.65097 15.5701L5.29396 16.5169L5.93694 15.5701C5.99604 15.4831 6.07109 15.4081 6.15811 15.3489L7.10484 14.706L6.15811 14.063C6.07109 14.0039 5.99604 13.9288 5.93694 13.8418L5.29396 12.8951Z'
                  fill='currentColor'
                />
              </svg>
              <span className='lg:hidden'>TIÊN TRI</span>
              <span className='hidden lg:inline'>TIÊN TRI TÀI BA</span>
            </button>
          ) : (
            <Link
              href='/tien-tri-tai-ba'
              className={`flex items-center gap-1 bg-[#F5BC41] text-[#0A0A0B] rounded-xs lg:rounded-sm h-9 lg:h-10 px-2.5 lg:px-4 text-sm font-semibold ${inter.className}`}>
              <svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M12.3528 1.16675C12.7015 1.16675 13.0133 1.38385 13.1343 1.71088L14.5266 5.47336L18.289 6.8656C18.6161 6.98661 18.8332 7.29844 18.8332 7.64714C18.8332 7.99584 18.6161 8.30767 18.289 8.42868L14.5266 9.82092L13.1343 13.5834C13.0133 13.9104 12.7015 14.1275 12.3528 14.1275C12.0041 14.1275 11.6922 13.9104 11.5712 13.5834L10.179 9.82092L6.41652 8.42868C6.08949 8.30767 5.87239 7.99584 5.87239 7.64714C5.87239 7.29844 6.08949 6.98661 6.41652 6.8656L10.179 5.47336L11.5712 1.71088C11.6922 1.38385 12.0041 1.16675 12.3528 1.16675ZM12.3528 4.40137L11.6091 6.41112C11.5247 6.63922 11.3449 6.81906 11.1168 6.90347L9.10701 7.64714L11.1168 8.39082C11.3449 8.47522 11.5247 8.65506 11.6091 8.88316L12.3528 10.8929L13.0965 8.88316C13.1809 8.65506 13.3607 8.47522 13.5888 8.39082L15.5986 7.64714L13.5888 6.90347C13.3607 6.81906 13.1809 6.63922 13.0965 6.41112L12.3528 4.40137ZM5.29396 10.5785C5.57004 10.5785 5.82821 10.7153 5.98333 10.9437L7.22623 12.7737L9.05627 14.0166C9.28467 14.1717 9.42141 14.4299 9.42141 14.706C9.42141 14.9821 9.28467 15.2402 9.05627 15.3953L7.22623 16.6382L5.98333 18.4683C5.82821 18.6967 5.57004 18.8334 5.29396 18.8334C5.01787 18.8334 4.7597 18.6967 4.60458 18.4683L3.36168 16.6382L1.53164 15.3953C1.30325 15.2402 1.1665 14.9821 1.1665 14.706C1.1665 14.4299 1.30325 14.1717 1.53164 14.0166L3.36168 12.7737L4.60458 10.9437C4.7597 10.7153 5.01787 10.5785 5.29396 10.5785ZM5.29396 12.8951L4.65097 13.8418C4.59187 13.9288 4.51682 14.0039 4.4298 14.063L3.48307 14.706L4.4298 15.3489C4.51682 15.4081 4.59187 15.4831 4.65097 15.5701L5.29396 16.5169L5.93694 15.5701C5.99604 15.4831 6.07109 15.4081 6.15811 15.3489L7.10484 14.706L6.15811 14.063C6.07109 14.0039 5.99604 13.9288 5.93694 13.8418L5.29396 12.8951Z'
                  fill='currentColor'
                />
              </svg>
              <span className='lg:hidden'>TIÊN TRI</span>
              <span className='hidden lg:inline'>TIÊN TRI TÀI BA</span>
            </Link>
          )}
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
