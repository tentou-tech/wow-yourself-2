import Divider from '@/assets/Divider.png'
import DecorImage17 from '@/assets/decor_image_17.png'
import Image from 'next/image'
import Advisor1 from '@/assets/advisors/advisor_1.png'
import Advisor1Mascot from '@/assets/advisors/advisor_1_mascot.png'
import Advisor2Mascot from '@/assets/advisors/advisor_2_mascot.png'
import { useState } from 'react'

const advisors = [
  {
    name: 'Dương Minh Ngọc',
    subName: 'Sub name',
    description:
      'Hệ thống giải thưởng "khủng" bao gồm tiền mặt và hiện vật giá trị, trải dài qua 3 vòng thi. Vinh danh xứng đáng cho các Cá nhân xuất sắc, Nhóm đoàn kết và cả Ban cố vấn tận tâm.',
    image: Advisor1,
    mascot: Advisor1Mascot
  },
  {
    name: 'Advisor 2',
    subName: 'Sub name',
    description:
      'Description for Advisor 2 goes here. This advisor brings a wealth of experience and knowledge to the team.',
    image: Advisor1,
    mascot: Advisor2Mascot
  },
]

const renderWordsWithAnimation = (text: string, delay: number, animationKey: string) => {
  const words = text.split(' ')
  return words.map((word, idx) => (
    <span
      key={`${animationKey}-${idx}`}
      className='inline-block slide-up opacity-0'
      style={{
        animationDelay: `${delay + idx * 0.05}s`,
        marginRight: '0.25em',
      }}>
      {word}
    </span>
  ))
}

export default function Section4() {
  const [index, setIndex] = useState(0)

  const handleIndexChange = (newIndex: number) => {
    setIndex(newIndex)
  }

  return (
    <section className='relative h-screen w-screen bg-[#D73930]'>
      <div
        className='absolute inset-0 pointer-events-none'
        style={{
          backgroundImage: `url(${DecorImage17.src})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          opacity: 0.03,
        }}></div>
      <Image src={Divider} alt='Divider' className='absolute bottom-0 left-0 w-screen scale-[-1]' />
      <div className='relative flex flex-col justify-start pt-[10vh] items-center gap-15.5 h-full w-full px-10'>
        <h1 className='font-grenze font-extrabold text-[70px] text-[#FFFF7C]'>Ban Cố Vấn</h1>
        <div className='w-full max-w-300 mx-auto flex gap-24'>
          <div className='w-auto h-[50vh] max-h-105 max-w-105 aspect-square relative'>
            <div className='w-full h-full absolute top-0 left-0 rotate-45 origin-center bg-[#A6231C]'></div>
            <div className='rounded-sm border-4 border-black relative h-full w-full'>
              <Image src={advisors[index].image} alt={advisors[index].name} className='w-full h-full object-cover' />
            </div>
            <Image key={`mascot-${index}`} src={advisors[index].mascot} alt={`${advisors[index].name} Mascot`} className='absolute bottom-0 right-0 translate-x-1/2 translate-y-1/4 w-3/5 h-auto slide-from-right' />
          </div>
          <div className='flex flex-col justify-between relative'>
            <div key={`text-${index}`} className='pt-6'>
              <div className='font-grenze font-extrabold text-[42px] text-[#FFFF7C]'>
                {renderWordsWithAnimation(advisors[index].name, 0, `name-${index}`)}
              </div>
              <div className='font-medium text-white'>
                {renderWordsWithAnimation(advisors[index].subName, 0.3, `subname-${index}`)}
              </div>
              <p className='mt-4 font-semibold text-lg text-white'>
                {renderWordsWithAnimation(advisors[index].description, 0.6, `desc-${index}`)}
              </p>
            </div>
            <div className='grid grid-cols-8 gap-2.5'>
              {advisors.map((advisor, idx) => (
                <div
                  key={idx}
                  className={`rounded-sm border-[3px] w-full aspect-square cursor-pointer ${
                    index === idx ? 'border-[#FFFF7C]' : 'border-black'
                  }`}
                  onClick={() => handleIndexChange(idx)}>
                  <Image src={advisor.image} alt={advisor.name} className='w-full h-full object-cover' />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
