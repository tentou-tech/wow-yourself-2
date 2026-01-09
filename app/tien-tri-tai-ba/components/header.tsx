'use client'
import Logo from '@/assets/Logo.svg'
import { useSignInDialog } from '@/components/signin-dialog'
import { Avatar } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { useLoggedIn } from '@/hooks/useLoggedIn'
import { useUserStore } from '@/stores/user-store'
import { LogOut } from 'lucide-react'
import { Inter } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { useIsClient, useWindowSize } from 'usehooks-ts'
import { useAccount, useBalance, useDisconnect } from 'wagmi'

const inter = Inter({ subsets: ['latin'] })

const navItems = [{ label: 'Đọc truyện', href: 'https://punkga.me' }]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const { setOpenSignInDialog } = useSignInDialog()
  const { user, removeUser } = useUserStore()
  const { disconnect } = useDisconnect()
  const { data } = useBalance({ address: user?.active_wallet_address as `0x${string}` })
  const { isConnected, chain } = useAccount()
  const { width } = useWindowSize()
  const isClient = useIsClient()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { isLoggedIn } = useLoggedIn()
  const logoutHandler = () => {
    removeUser()
    if (isConnected) disconnect()
  }
  if (!isClient) return null
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
        {isLoggedIn ? (
          user && (
            <div className='flex gap-3'>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <div className='w-8 h-8 rounded-full overflow-hidden cursor-pointer border-2 border-Border-border-secondary'>
                    <Avatar src={user.picture} className='w-full h-full object-cover' />
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent align='end'>
                  <div className='divide-y divide-Border-border-secondary w-xs'>
                    <div className='p-4 space-y-2'>
                      <div className='text-Text-Brand-text-brand-primary font-bold text-sm'>{user.nickname}</div>
                    </div>

                    <div className='text-sm font-medium'>
                      <div className='p-4 flex items-center gap-3.5 cursor-pointer' onClick={logoutHandler}>
                        <LogOut className='size-4' />
                        Logout
                      </div>
                    </div>
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          )
        ) : (
          <Button
            onClick={() => setOpenSignInDialog(true)}
            className='bg-Surface-Background-bg-brand-primary text-Text-Default-On-white-text-primary'>
            Sign In
          </Button>
        )}
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
