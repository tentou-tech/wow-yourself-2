import DecorImage1 from '@/assets/decor_image_1.png'
import DecorImage11 from '@/assets/decor_image_11.png'
import DecorImage13 from '@/assets/decor_image_13.png'
import DecorImage14 from '@/assets/decor_image_14.png'
import DecorImage3 from '@/assets/decor_image_3.png'
import DecorImage4 from '@/assets/decor_image_4.png'
import DecorImage5 from '@/assets/decor_image_5.png'
import Letter from '@/assets/letter.png'
import WoodTable1 from '@/assets/wood_table_1.png'
import WoodTable2 from '@/assets/wood_table_2.png'
import Button from '@/components/button'
import Image from 'next/image'
import { useSwiper } from 'swiper/react'
import { useState, useEffect } from 'react'

export default function Section1() {
  const swiper = useSwiper()
  const [showButton, setShowButton] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowButton(true)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])
  return (
    <section className='relative h-screen w-screen origin-center show-up-animation'>
      <div className='absolute inset-0 flex flex-col w-screen h-screen overflow-hidden'>
        <Image src={WoodTable1} alt='Wood Table 1' className='w-full h-auto object-cover shrink-0' />
        <div
          className='flex-1 h-full'
          style={{
            backgroundImage: `url(${WoodTable2.src})`,
            backgroundSize: '100% auto',
            backgroundRepeat: 'repeat-y',
          }}></div>
      </div>
      <div className='relative z-10 min-h-screen'>
        <Image src={DecorImage1} alt='Decor Image 1' className='absolute top-0 right-0 w-1/5' />
        <Image
          src={Letter}
          alt='Letter'
          className='absolute top-1/2 left-1/2 -translate-x-1/2 h-1/2 w-auto -translate-y-3/5 letter-show-animation opacity-0'
        />
          <Image src={DecorImage13} alt='Decor Image 13' className='absolute bottom-0 left-0 w-1/6 translate-y-1/3' />
          <Image src={DecorImage14} alt='Decor Image 14' className='absolute bottom-0 right-0 w-1/6 translate-y-2/3' />
        <Image
          src={DecorImage5}
          alt='Decor Image 5'
          className='absolute top-0 left-1/2 -translate-x-1/2 w-screen opacity-80'
        />
        <Image src={DecorImage3} alt='Decor Image 3' className='absolute bottom-1/3 right-0 w-1/12' />
        <Image src={DecorImage11} alt='Decor Image 11' className='absolute top-0 left-0 w-screen' />
        <Image
          src={DecorImage4}
          alt='Decor Image 4'
          className='absolute top-0 w-screen left-0 -translate-y-1/12 blur-[2.5px] -translate-x-2 leaves-show-animation opacity-0'
        />
        <Button 
          className={`absolute! left-1/2 -translate-x-1/2 bottom-1/6 transition-all duration-500 ${
            showButton ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`} 
          onClick={() => swiper.slideTo(1)}>
          Mở thư
        </Button>
      </div>
    </section>
  )
}
