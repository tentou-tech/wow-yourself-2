'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Mousewheel } from 'swiper/modules'

import 'swiper/css'
export default function SectionSwiper() {
  return (
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
      simulateTouch={true}
      touchRatio={1}
      touchAngle={45}
      modules={[Mousewheel]}
      className='page-swiper'>
      {Array.from({ length: 5 }).map((_, i) => (
        <SwiperSlide key={i}>
          <section className='section'>
            <h1>Section {i + 1}</h1>
            <p>Scrollable HTML content</p>
          </section>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}