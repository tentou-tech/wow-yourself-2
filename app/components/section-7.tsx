'use client'
import DecorImage17 from '@/assets/decor_image_17.png'
import DecorImage23 from '@/assets/decor_image_23.png'
import LiveNow from '@/assets/live-now.png'
import Button from '@/components/button'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import RoundDetailDialog from './round-detail-dialog'

export default function Section7() {
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
                <div className='text-[122px] text-[#D73930] leading-14'>02</div>
                <div className='grid grid-cols-2 gap-x-2 text-[50px] leading-9'>
                  <div>12</div>
                  <div>12</div>
                  <div>22</div>
                  <div>12</div>
                </div>
                <div className='grid grid-cols-1 text-[50px] leading-9'>
                  <div>20</div>
                  <div>25</div>
                </div>
              </div>
              <Image src={DecorImage23} alt='Decor Image 23' className='w-full h-auto' />
            </div>
            <div className='flex-1 mt-10 border-t border-[#242429] pt-6'>
              <div className='text-[#62513F] font-grenze font-extrabold'>
                <div className='grid grid-cols-[auto_1fr] gap-4'>
                  <Image src={LiveNow} alt='Live Now' className='h-full w-auto' />

                  <div>
                    <h2 className='text-[44px] leading-9'>Vòng 2</h2>
                    <div className='text-2xl leading-5 mt-2'>12/12/2025 - 22/12/2025</div>
                  </div>
                </div>
                <div className='mt-6 text-[50px] leading-none text-[#D73930]'>
                  <h3>Hải lưu khát vọng </h3>
                </div>
              </div>
              <div className='max-w-173 font-semibold text-lg mt-6'>
                Các thí sinh vượt qua vòng đầu tiên sẽ tiến hành chia đội theo nguyện vọng ưu tiên và mức độ phù hợp.
                Mỗi đội sẽ có một Cố Vấn đồng hành cùng nhau phối hợp hoàn thiện thử thách đầu tiên và dành về lợi thế
                cho nhóm mình. Một chiến lược tốt để chọn chủ đề phụ phù hợp là điều vô cùng quan trọng!
              </div>
              <button
                onClick={() => setIsDialogOpen(true)}
                className='mt-4 font-semibold text-lg underline text-[#4D3B2B] inline-block hover:text-[#62513F] transition-colors cursor-pointer'>
                Chi tiết
              </button>
              <div className='mt-8 flex gap-4'>
                <Link
                  target='_blank'
                  href={
                    'https://www.facebook.com/PunkgaMeManga/posts/pfbid0PnFn5x1168xWESb1TX4zP3dvYxyDddA1AJes4LtXDPsuzqg9s5e46hLqKcLwjro2l'
                  }>
                  <Button className='text-2xl! h-11! w-fit!'>Xem các đội thi</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <RoundDetailDialog roundNumber={2} isOpen={isDialogOpen} onClose={() => setIsDialogOpen(false)} />
    </>
  )
}
