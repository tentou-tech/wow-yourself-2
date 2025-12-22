import Divider from '@/assets/Divider.png'
import DecorImage17 from '@/assets/decor_image_17.png'
import Image from 'next/image'
import Advisor1 from '@/assets/advisors/advisor_1.png'
import Advisor2 from '@/assets/advisors/advisor_2.jpg'
import Advisor3 from '@/assets/advisors/advisor_3.jpg'
import Advisor4 from '@/assets/advisors/advisor_4.png'
import Advisor5 from '@/assets/advisors/advisor_5.jpg'
import Advisor6 from '@/assets/advisors/advisor_6.jpg'
import Advisor7 from '@/assets/advisors/advisor_7.jpg'
import Advisor8 from '@/assets/advisors/advisor_8.jpg'
import Advisor1Mascot from '@/assets/advisors/advisor_1_mascot.png'
import Advisor2Mascot from '@/assets/advisors/advisor_2_mascot.png'
import Advisor3Mascot from '@/assets/advisors/advisor_3_mascot.png'
import Advisor4Mascot from '@/assets/advisors/advisor_4_mascot.png'
import Advisor5Mascot from '@/assets/advisors/advisor_5_mascot.png'
import Advisor6Mascot from '@/assets/advisors/advisor_6_mascot.png'
import Advisor7Mascot from '@/assets/advisors/advisor_7_mascot.png'
import Advisor8Mascot from '@/assets/advisors/advisor_8_mascot.png'
import { useState, useEffect } from 'react'

const advisors = [
  {
    name: 'Dương Minh Ngọc',
    description:
      'Cố vấn Dương Minh Ngọc là một họa sĩ có khả năng tạo ra những nội dung cực kỳ viral, thú vị nhưng cũng vô cùng duyên dáng.',
    image: Advisor1,
    mascot: Advisor1Mascot,
  },
  {
    name: 'Nguyễn Quốc Trung',
    description:
      'Cố vấn Nguyễn Quốc Trung là một họa sĩ với kỹ năng vẽ nổi bật và là một trong những trụ cột chính tại Rover Studio.',
    image: Advisor2,
    mascot: Advisor2Mascot,
  },
  {
    name: 'Linh Rab Nguyen',
    description:
      'Cố vấn Linh Rab Nguyen là một họa sĩ có nhiều trải nghiệm và được coi là một trong những người kể chuyện xuất sắc nhất trong thế hệ của mình.',
    image: Advisor3,
    mascot: Advisor3Mascot,
  },
  {
    name: 'Mai Phương Quỳnh',
    subName: 'Phyllocactus',
    description:
      'Cố vấn Mai Phương Quỳnh chính là cố vấn có thí sinh dành chiến thắng tại mùa 1, lần này Mai Phương Quỳnh tiếp tục quay trở lại với bộ kỹ năng kể chuyện bằng hình ảnh cực kỳ vượt trội.',
    image: Advisor4,
    mascot: Advisor4Mascot,
  },
  {
    name: 'Lục Hải Minh',
    subName: 'Blue Quilin',
    description:
      'Cố vấn Lục Hải Minh là một trong những thí sinh từng tham gia nhiều cuộc thi của PunkgaMe và dành được nhiều giải thưởng cá nhân xuất sắc. Một họa sĩ trẻ với bộ kỹ năng cực kỳ toàn diện từ vẽ cho đến kể chuyện.',
    image: Advisor5,
    mascot: Advisor5Mascot,
  },
  {
    name: 'Nam Thanh',
    description:
      'Cố vấn Nam Thanh là người sở hữu nền tảng kiến thức vững chắc và đam mê mạnh mẽ với thể loại khoa học - viễn tưởng, có khả năng giúp bạn xây dung thế giới quan sống động và đầy chiều sâu.',
    image: Advisor6,
    mascot: Advisor6Mascot,
  },
  {
    name: 'Vũ Hồng Hải',
    subName: 'Hariv',
    description:
      'Cố vấn Vũ Hồng Hải là một trong những họa sĩ trẻ tài năng với khả năng vẽ không chỉ nằm ở tốc độ mà còn nằm ở mức độ hoàn thiện rất tốt. Hồng Hải rất có duyên với các nội dung liên quan đến chủ đề học đường.',
    image: Advisor7,
    mascot: Advisor7Mascot,
  },
  {
    name: 'XiXu',
    description:
      'Cố vấn XiXu là một ẩn số trong cuộc thi lần này, XiXu là một họa sĩ vô cùng tài năng và được nhiều người biết đến. Nếu bạn có tư duy của một con bạc thì đây sẽ là cố vấn phù hợp nhất dành cho hành trình của bạn.',
    image: Advisor8,
    mascot: Advisor8Mascot,
  },
]

const renderWordsWithAnimation = (text: string, delay: number, animationKey: string) => {
  const words = text.split(' ')
  return words.map((word, idx) => (
    <span
      key={`${animationKey}-${idx}`}
      className='inline-block slide-up'
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
  const [shuffledAdvisors, setShuffledAdvisors] = useState(advisors)

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setShuffledAdvisors([...advisors].sort(() => 0.5 - Math.random()))
  }, [])

  const handleIndexChange = (newIndex: number) => {
    setIndex(newIndex)
  }

  return (
    <section className='relative h-screen w-screen bg-[#D73930]'>
      <div
        className='absolute inset-0 pointer-events-none'
        style={{
          backgroundImage: `url(${DecorImage17.src})`,
          backgroundRepeat: 'repeat',
          backgroundSize: '60%',
          backgroundPosition: 'center center',
          opacity: 0.05,
        }}></div>
      <Image src={Divider} alt='Divider' className='absolute bottom-0 left-0 w-screen scale-[-1]' />
      <div className='relative flex flex-col justify-start pt-[10vh] items-center gap-15.5 h-full w-full px-10'>
        <h1 className='font-grenze font-extrabold text-[70px] text-[#FFFF7C]'>Ban Cố Vấn</h1>
        <div className='w-full max-w-300 mx-auto flex gap-24'>
          <div className='w-auto h-[50vh] max-h-105 max-w-105 aspect-square relative'>
            <div className='w-full h-full absolute top-0 left-0 rotate-45 origin-center bg-[#A6231C]'></div>
            <div className='rounded-sm border-4 border-black relative h-full w-full'>
              <Image
                src={shuffledAdvisors[index].image}
                alt={shuffledAdvisors[index].name}
                className='w-full h-full object-cover'
              />
            </div>
            <Image
              key={`mascot-${index}`}
              src={shuffledAdvisors[index].mascot}
              alt={`${shuffledAdvisors[index].name} Mascot`}
              className='absolute bottom-0 right-0 translate-x-1/6 translate-y-1/4 w-full h-auto slide-from-right'
            />
          </div>
          <div className='flex flex-col justify-between relative'>
            <div key={`text-${index}`} className='pt-6'>
              <div className='font-grenze font-extrabold text-[42px] text-[#FFFF7C]'>
                {renderWordsWithAnimation(shuffledAdvisors[index].name, 0, `name-${index}`)}
              </div>
              {shuffledAdvisors[index].subName && (
                <div className='font-medium text-white'>
                  {renderWordsWithAnimation(shuffledAdvisors[index].subName, 0.3, `subname-${index}`)}
                </div>
              )}
              <p className='mt-4 font-semibold text-lg text-white'>
                {renderWordsWithAnimation(shuffledAdvisors[index].description, 0.6, `desc-${index}`)}
              </p>
            </div>
            <div className='grid grid-cols-8 gap-2.5'>
              {shuffledAdvisors.map((advisor, idx) => (
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
