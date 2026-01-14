import type { Metadata } from 'next'
import { Grenze_Gotisch, Paytone_One, Playpen_Sans } from 'next/font/google'
import './globals.css'
import { Suspense } from 'react'
import { Toaster } from '@/components/ui/sonner'
import LoginCallback from '@/components/login-callback'
import SignInDialog from '@/components/signin-dialog'
import { Web3Providers } from '@/components/web3-providers'
import { GoogleTagManager } from '@next/third-parties/google'

const playpenSans = Playpen_Sans({
  variable: '--font-playpen-sans',
  subsets: ['latin'],
})

const grenze = Grenze_Gotisch({
  weight: ['400', '600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-grenze',
})

const paytone = Paytone_One({
  variable: '--font-paytone-one',
  subsets: ['latin'],
  weight: '400',
})
export const metadata: Metadata = {
  title: '[ WOW YOURSELF MÙA 2 | Huyền Thoại Vũ Môn ]',
  description:
    'CUỘC THI TRUYỆN TRANH HẤP DẪN NHẤT NĂM 2025 ĐÃ TRỞ LẠI CÙNG NHỮNG PHẦN THƯỞNG GIÁ TRỊ VÀ CƠ HỘI XUẤT BẢN LẦN ĐẦU TIÊN NGAY TRONG TẦM TAY!!!',
  openGraph: {
    images: '/thumbnail.jpg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <GoogleTagManager gtmId='GTM-TP4FLJKZ' />
      <body className={`${playpenSans.className} ${grenze.variable} ${paytone.variable} antialiased`}>
        <Suspense>
          <Web3Providers>
            <SignInDialog />
          </Web3Providers>
          <div>{children}</div>
          <Toaster expand />
          <LoginCallback />
        </Suspense>
      </body>
    </html>
  )
}
