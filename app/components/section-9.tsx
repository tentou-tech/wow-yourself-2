import DecorImage17 from '@/assets/decor_image_17.png'
import DecorImage25 from '@/assets/decor_image_25.png'
import Button from '@/components/button'
import Image from 'next/image'
import Link from 'next/link'

export default function Section9() {
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
            <div className='w-fit space-y-8 shrink-0'>
              <div className='flex gap-3 font-paytone-one font-extrabold text-[#917D6B]'>
                <div className='text-[122px] text-[#B6A690] leading-21'>Cđ</div>
                <div className='grid grid-cols-2 gap-x-2 text-5xl'>
                  <div>21</div>
                  <div>12</div>
                  <div>09</div>
                  <div>02</div>
                </div>
                <div className='grid grid-cols-1 text-5xl'>
                  <div>25</div>
                  <div>26</div>
                </div>
              </div>
              <Image src={DecorImage25} alt='Decor Image 25' className='w-full h-auto' />
            </div>
            <div className='flex-1 mt-10 border-t border-[#242429] pt-6'>
              <div className='text-[#62513F] font-paytone-one font-extrabold'>
                <h2 className='text-[44px] leading-9'>Sự kiện cộng đồng</h2>
                <div className='text-2xl leading-5 mt-4'>11/01/2026 - 31/03/2026</div>
                <h3 className='mt-6 text-[50px] leading-none'>
                  Tiên tri tài ba <br />& Giấc mơ trong tầm tay
                </h3>
              </div>
              <div className='max-w-173 font-semibold text-lg mt-6'>
                Khán giả có thể tiến hành tạo tài khoản và đăng nhập điểm danh mỗi ngày và trả lời câu hỏi từ ban tổ
                chức để nhận Star points. Khán giả sẽ nhận về những phần quà giá trị cho mình từ ban tổ chức. 
              </div>
              <div className='mt-8 flex gap-4'>
                <Link href={'/tien-tri-tai-ba'}>
                  <Button className='text-2xl! h-11! w-fit!'>Tham gia ngay</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
