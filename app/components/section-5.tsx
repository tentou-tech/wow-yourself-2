import DecorImage12 from '@/assets/decor_image_12.png'
import DecorImage18 from '@/assets/decor_image_18.png'
import Sponsors from '@/assets/sponsors.png'
import Image from 'next/image'
export default function Section5() {
  return (
    <section className='relative h-screen w-screen bg-[#345EB0]'>
      <div
        className='absolute inset-0 pointer-events-none'
        style={{
          backgroundImage: `url(${DecorImage18.src})`,
          backgroundRepeat: 'repeat',
          backgroundSize: '60%',
          backgroundPosition: 'center center',
          opacity: 0.05,
        }}></div>
      <div className='relative flex flex-col justify-start pt-[5vh] items-center gap-15 h-full w-full'>
        <h1 className='font-grenze font-extrabold text-[70px] text-white'>Đồng hành cùng Chúng tôi</h1>
        <div className='w-screen overflow-hidden relative z-10 shrink-0'>
          <div
            className='flex animate-scroll max-w-none w-max min-w-0'
            style={{ animation: `scroll 15s linear infinite` }}>
            <div className='shrink-0 '>
              <Image src={Sponsors} alt={`Sponsors`} className='h-21.5 w-auto' />
            </div>
            <div className='shrink-0 '>
              <Image src={Sponsors} alt={`Sponsors`} className='h-21.5 w-auto' />
            </div>
            <div className='shrink-0 '>
              <Image src={Sponsors} alt={`Sponsors`} className='h-21.5 w-auto' />
            </div>
            <div className='shrink-0 '>
              <Image src={Sponsors} alt={`Sponsors`} className='h-21.5 w-auto' />
            </div>
          </div>
        </div>
        <Image
          src={DecorImage12}
          alt='Decor Image 12'
          className='absolute bottom-0 -translate-y-1/6 left-1/2 -translate-x-1/2 w-auto h-[50vh]'
        />
      </div>
    </section>
  )
}
