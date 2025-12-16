import Divider from '@/assets/Divider.png'
import DecorImage16 from '@/assets/decor_image_16.png'
import DecorImage7 from '@/assets/decor_image_7.png'
import DecorImage8 from '@/assets/decor_image_8.png'
import Button from '@/components/button'
import Image from 'next/image'
import { useRef, useState } from 'react'
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react'
export default function Section3() {
  const swiperRef = useRef<SwiperClass>(null)
  const [activeSlide, setActiveSlide] = useState(0)
  return (
    <section className='relative h-screen w-screen'>
      <div
        className='absolute inset-0 pointer-events-none'
        style={{
          backgroundImage: `url(${DecorImage7.src})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          opacity: 0.03,
        }}></div>
      <Image src={Divider} alt='Divider' className='absolute top-0 left-0 w-screen' />
      <Image src={Divider} alt='Divider' className='absolute bottom-0 left-0 w-screen scale-[-1]' />
      <div className='relative'>
        <Swiper
          spaceBetween={50}
          onSlideChange={(swiper) => {
            setActiveSlide(swiper.activeIndex)
          }}
          onSwiper={(swiper) => (swiperRef.current = swiper)}>
          <SwiperSlide>
            <div className='h-screen flex w-screen items-center justify-center'>
              <div className='flex items-center gap-16 w-screen max-w-300 mx-auto'>
                <Image src={DecorImage16} alt='Decor Image 16' className='w-full max-w-101.25' />
                <div className='flex-1'>
                  <div className='space-y-7'>
                    <div>
                      <h2 className='text-[42px] font-extrabold font-grenze leading-none'>
                        WoW Yourself 2<br /> Tồng Giải Thưởng Đến
                      </h2>
                      <div className='text-[#345EB1] text-[70px] font-grenze font-extrabold leading-10.5'>
                        80.000.000 vnđ
                      </div>
                    </div>
                    <p className='font-semibold text-lg max-w-2xl'>
                      Hệ thống giải thưởng &quot;khủng&quot; bao gồm tiền mặt và hiện vật giá trị, trải dài qua 3 vòng
                      thi. Vinh danh xứng đáng cho các Cá nhân xuất sắc, Nhóm đoàn kết và cả Ban cố vấn tận tâm.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='h-screen flex w-screen items-center justify-center'>
              <div className='flex items-center gap-16 w-screen max-w-300 mx-auto'>
                <Image src={DecorImage8} alt='Decor Image 16' className='w-full max-w-119' />
                <div className='flex-1'>
                  <div className='space-y-9'>
                    <h3 className='text-[42px] font-extrabold font-grenze'>
                      Cơ hội tham gia <span className='text-[#D73930]'>Triển Lãm Tranh</span>
                      <br />
                      <span className='text-[#D73930] text-[70px] leading-none'>tại Đà Nẵng 2026</span>
                    </h3>
                    <p className='text-lg font-semibold max-w-2xl'>
                      Top 40 thí sinh vượt qua Vòng 1 sẽ được vinh danh và trưng bày tác phẩm tại sự kiện nghệ thuật quy
                      mô lớn thứ 2 của PunkgaMe, dự kiến tổ chức tại TP.Đà Nẵng.
                    </p>
                    <Button className='px-10!'>Thể lệ cuộc thi</Button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        <div className='flex gap-9 items-center z-20 absolute bottom-[15vh] w-screen max-w-300 px-5 left-1/2  -translate-x-1/2'>
          <div className='w-full h-px bg-black/30'></div>
          <div className='flex items-center gap-7 h-5.5'>
            <div
              className={`${
                activeSlide == 0 ? 'size-4 bg-[#345EB0]' : 'size-2.5 bg-[#968E7A]'
              } rotate-45 transition-all cursor-pointer`}
              onClick={() => swiperRef.current?.slideTo(0)}></div>
            <div
              className={`${
                activeSlide == 1 ? 'size-4 bg-[#345EB0]' : 'size-2.5 bg-[#968E7A]'
              } rotate-45 transition-all cursor-pointer`}
              onClick={() => swiperRef.current?.slideTo(1)}></div>
            <div
              className={`${
                activeSlide == 2 ? 'size-4 bg-[#345EB0]' : 'size-2.5 bg-[#968E7A]'
              } rotate-45 transition-all cursor-pointer`}
              onClick={() => swiperRef.current?.slideTo(2)}></div>
          </div>
          <div className='w-full h-px bg-black/30'></div>
        </div>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='62'
          height='56'
          viewBox='0 0 62 56'
          fill='none'
          className='absolute top-1/2 -translate-y-1/2 left-14 cursor-pointer z-20'
          onClick={() => swiperRef.current?.slidePrev()}>
          <path
            d='M29.1331 52.7736C25.1 48.0115 9.14536 35.1289 4.37795 32.3599C-3.81767 27.5999 1.77602 24.0386 3.01001 23.1795C9.7819 17.5091 23.3257 8.69642 30.9848 0.941612C33.3833 -1.48686 45.1608 0.941608 39.7431 6.39111L18.9148 17.4797C22.2645 16.1604 25.4778 15.8815 29.285 17.3619C35.4971 19.7773 34.8484 21.633 43.065 23.1795C48.4825 23.7932 59.2976 23.8569 61.6095 19.2029C62.524 17.3619 62.6596 25.9446 52.3664 28.5221C44.1317 30.584 38.4332 28.4591 35.0924 27.5999L25.8539 23.1795C18.9917 22.0012 17.836 26.567 18.9917 29.2181C20.4364 32.5319 25.8539 31.7955 25.8539 29.2181C25.8539 27.1561 24.65 26.6406 24.0481 26.6406C25.9743 25.4378 31.145 25.3298 32.084 29.2181C33.2578 34.0784 25.8539 36.6558 17.9082 34.2257C22.0616 39.896 33.5574 46.8087 35.0924 48.8706C36.6273 50.9326 37.0788 61.0951 29.1331 52.7736Z'
            fill='#345EB0'
          />
        </svg>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='62'
          height='56'
          viewBox='0 0 62 56'
          fill='none'
          className='absolute top-1/2 -translate-y-1/2 right-14 cursor-pointer z-20'
          onClick={() => swiperRef.current?.slideNext()}>
          <path
            d='M32.8669 52.7736C36.9 48.0115 52.8546 35.1289 57.6221 32.3599C65.8177 27.5999 60.224 24.0386 58.99 23.1795C52.2181 17.5091 38.6743 8.69642 31.0152 0.941612C28.6167 -1.48686 16.8392 0.941608 22.2569 6.39111L43.0852 17.4797C39.7355 16.1604 36.5222 15.8815 32.715 17.3619C26.5029 19.7773 27.1516 21.633 18.935 23.1795C13.5175 23.7932 2.70245 23.8569 0.390523 19.2029C-0.524008 17.3619 -0.659641 25.9446 9.63364 28.5221C17.8683 30.584 23.5668 28.4591 26.9076 27.5999L36.1461 23.1795C43.0083 22.0012 44.164 26.567 43.0083 29.2181C41.5636 32.5319 36.1461 31.7955 36.1461 29.2181C36.1461 27.1561 37.35 26.6406 37.9519 26.6406C36.0257 25.4378 30.855 25.3298 29.916 29.2181C28.7422 34.0784 36.1461 36.6558 44.0918 34.2257C39.9384 39.896 28.4426 46.8087 26.9076 48.8706C25.3727 50.9326 24.9212 61.0951 32.8669 52.7736Z'
            fill='#345EB0'
          />
        </svg>
      </div>
    </section>
  )
}
