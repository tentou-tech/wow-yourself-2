import Header from './components/header'
import DecorImage7 from '@/assets/decor_image_7.png'
import Divider from '@/assets/Divider.png'
import Image from 'next/image'
import DecorImage19 from '@/assets/decor_image_19.png'
export default function Page() {
  return (
    <>
      <Header />
      <div className='w-screen h-45 z-40 bg-[#345EB0] relative p-6'>
        <div
          className='origin-center absolute inset-0 pointer-events-none opacity-15'
          style={{ backgroundImage: `url(${DecorImage7.src})`, backgroundSize: '100% auto' }}></div>
        <Image src={DecorImage19} alt='Decor Image 19' className='absolute hidden md:block right-0 bottom-0 w-auto h-[110%]' />
        <div
          className='h-10 w-screen absolute bottom-0 left-0 scale-y-[-1] bg-repeat'
          style={{ backgroundImage: `url(${Divider.src})`, backgroundSize: 'auto 100%' }}></div>
        <div className='relative'>
          <div className='w-25 h-25 rounded-full bg-[#FF9548]'></div>
          <div className='font-extrabold absolute top-0 left-7 font-grenze text-[50px] leading-none text-white'>
            Tiên tri
            <br />
            Tài ba
          </div>
        </div>
      </div>
    </>
  )
}
