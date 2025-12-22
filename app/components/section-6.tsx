'use client'
import DecorImage17 from '@/assets/decor_image_17.png'
import DecorImage22 from '@/assets/decor_image_22.png'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import RoundDetailDialog from './round-detail-dialog'

export default function Section6() {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  return (
    <>
      <section className='relative h-screen w-screen '>
        <div
          className='absolute inset-0 pointer-events-none'
          style={{
            backgroundImage: `url(${DecorImage17.src})`,
            backgroundRepeat: 'repeat',
            backgroundSize: '60%',
            backgroundPosition: 'center center',
            opacity: 0.05,
          }}></div>
        <div className='py-18 relative'>
          <div className='px-6 flex gap-18.5'>
            <div className='w-77 space-y-8 shrink-0'>
              <div className='flex gap-7 font-grenze font-extrabold text-[#917D6B]'>
                <div className='text-[122px] text-[#B6A690] leading-14'>01</div>
                <div className='grid grid-cols-2 gap-x-2 text-[50px] leading-9'>
                  <div>25</div>
                  <div>11</div>
                  <div>10</div>
                  <div>12</div>
                </div>
                <div className='grid grid-cols-1 text-[50px] leading-9'>
                  <div>20</div>
                  <div>25</div>
                </div>
              </div>
              <Image src={DecorImage22} alt='Decor Image 22' className='w-full h-auto' />
            </div>
            <div className='flex-1 mt-10 border-t border-[#242429] pt-6'>
              <div className='text-[#62513F] font-grenze font-extrabold'>
                <h2 className='text-[44px] leading-9'>Vòng 1</h2>
                <div className='text-2xl leading-5 mt-2'>25/11/2025 - 10/12/2025</div>
                <h3 className='mt-6 text-[50px] leading-none'>Gửi tôi, họa sĩ truyện tranh tương lai</h3>
              </div>
              <div className='max-w-173 font-semibold text-lg mt-6'>
                Đề bài: Vẽ truyện ngắn từ 1-3 trang với chủ đề: “Gửi tôi, hoạ sĩ truyện tranh tương lai”. Hình thức thể
                hiện đa dạng, không giới hạn cách trình bày tuy nhiên khổ giấy thể hiện bắt buộc phải là kích thước A4.
              </div>
              <button
                onClick={() => setIsDialogOpen(true)}
                className='mt-4 font-semibold text-lg underline text-[#4D3B2B] inline-block hover:text-[#62513F] transition-colors cursor-pointer'>
                Chi tiết
              </button>
            </div>
          </div>
        </div>
      </section>
      <RoundDetailDialog roundNumber={1} isOpen={isDialogOpen} onClose={() => setIsDialogOpen(false)} />
    </>
  )
}
