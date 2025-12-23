import type { Metadata } from 'next'
import { Grenze_Gotisch, Playpen_Sans } from 'next/font/google'
import './globals.css'
import localFont from 'next/font/local'

const playpenSans = Playpen_Sans({
  variable: '--font-playpen-sans',
  subsets: ['latin'],
})

const grenze = Grenze_Gotisch({
  weight: ['400', '600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-grenze',
})

const brigast = localFont({
  src: '../public/assets/fonts/1FTV-VIP-Brigast.ttf',
  variable: '--font-brigast',
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
      <body className={`${playpenSans.className} ${grenze.variable} ${brigast.variable} antialiased`}>{children}</body>
    </html>
  )
}
