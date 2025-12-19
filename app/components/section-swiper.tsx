/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import 'swiper/css'
import { Mousewheel } from 'swiper/modules'
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react'
import { useRef, useState } from 'react'
import Section1 from './section-1'
import Section2 from './section-2'
import Section3 from './section-3'
import Section4 from './section-4'
import Section5 from './section-5'
import Header from './header'

export default function SectionSwiper() {
  const swiperRef = useRef<SwiperClass>(null)
  const [previousIndex, setPreviousIndex] = useState(0)

  const handleSlideChange = (swiper: any) => {
    const currentIndex = swiper.activeIndex

    if (currentIndex > previousIndex) {
      document.getElementsByTagName('header')[0].style.transform = 'translateY(-100%)'
    } else if (currentIndex < previousIndex) {
      document.getElementsByTagName('header')[0].style.transform = 'translateY(0)'
    }

    setPreviousIndex(currentIndex)
  }

  return (
    <>
      <Header swiperRef={swiperRef} />
      <Swiper
        direction='vertical'
        slidesPerView={1}
        speed={800}
        resistanceRatio={0}
        mousewheel={{
          forceToAxis: true,
          sensitivity: 1,
          thresholdDelta: 4,
          thresholdTime: 400,
          releaseOnEdges: false,
          invert: false,
        }}
        touchEventsTarget='container'
        onSlideChange={handleSlideChange}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        simulateTouch={true}
        touchRatio={1}
        touchAngle={45}
        modules={[Mousewheel]}
        className='page-swiper'>
        <SwiperSlide className='z-20'>
          <Section1 />
        </SwiperSlide>
        <SwiperSlide className='z-10'>
          <Section2 />
        </SwiperSlide>
        <SwiperSlide className='z-20'>
          <Section3 />
        </SwiperSlide>
        <SwiperSlide>
          <Section4 />
        </SwiperSlide>
        <SwiperSlide>
          <Section5 />
        </SwiperSlide>
      </Swiper>
    </>
  )
}
