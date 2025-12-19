import DecorImage17 from '@/assets/decor_image_17.png'
import DecorImage24 from '@/assets/decor_image_24.png'
import Image from 'next/image'
import Link from 'next/link'

export default function Section8() {
  return (
    <>
      <section className='relative h-screen w-screen '>
        <div
          className='absolute inset-0 pointer-events-none'
          style={{
            backgroundImage: `url(${DecorImage17.src})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            opacity: 0.03,
          }}></div>
        <div className='py-18 relative'>
          <div className='px-6 flex gap-18.5'>
            <div className='w-77 space-y-8 shrink-0'>
              <div className='flex gap-7 font-grenze font-extrabold text-[#917D6B]'>
                <div className='text-[122px] text-[#B6A690] leading-14'>03</div>
                <div className='grid grid-cols-2 gap-x-2 text-[50px] leading-9'>
                  <div>25</div>
                  <div>12</div>
                  <div>08</div>
                  <div>02</div>
                </div>
                <div className='grid grid-cols-1 text-[50px] leading-9'>
                  <div>25</div>
                  <div>26</div>
                </div>
              </div>
              <Image src={DecorImage24} alt='Decor Image 24' className='w-full h-auto' />
            </div>
            <div className='flex-1 mt-10 border-t border-[#242429] pt-6'>
              <div className='text-[#62513F] font-grenze font-extrabold'>
                <div className='text-[44px] leading-9'>Vòng 3</div>
                <div className='text-2xl leading-5 mt-2'>25/12/2025 - 08/02/2026</div>
                <div className='mt-6 text-[50px] leading-none'>Tinh Hoa Vũ Môn </div>
              </div>
              <div className='max-w-173 font-semibold text-lg mt-6'>
                Vòng tranh tài căng thẳng nhất! Mỗi thí sinh hoàn thiện một truyện ngắn có độ dài từ 15 - 30 trang theo
                chủ đề chính và chủ đề phụ đã chọn. Các thí sinh tiến tới vòng cuối với quyết tâm cao cùng sự chỉ bảo
                tận tình của các Cố Vấn. Trong đó 10 tác phẩm dự thi xuất sắc nhất sẽ được xuất hiện trong danh sách đề
                cử các tác phẩm xuất bản trong tuyển tập truyện ngắn WoW Yourself.
              </div>
              <Link href='#' className='mt-4 font-semibold text-lg underline text-[#4D3B2B] inline-block'>
                Chi tiết
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
