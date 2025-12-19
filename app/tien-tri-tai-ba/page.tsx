"use client";

import { useState } from 'react';
import Header from './components/header'
import DecorImage7 from '@/assets/decor_image_7.png'
import Divider from '@/assets/Divider.png'
import Image from 'next/image'
import DecorImage19 from '@/assets/decor_image_19.png'
import DecorImage20 from '@/assets/decor_image_20.jpg'
import Avatar from '@/assets/Avatar.svg'
import { Inter } from 'next/font/google'
import Chart from './components/chart'
import CommunityPrize from './components/community-prize'
import GuidePopup from './components/guide-popup'
import RewardRedemption from './components/reward-redemption'
import CheckinSuccessPopup from './components/checkin-success-popup';
import QuizPopup from './components/quiz-popup';
const inter = Inter({ subsets: ['latin'] })

export default function Page() {
  const [isCheckinSuccessOpen, setIsCheckinSuccessOpen] = useState(false);
  const [isQuizOpen, setIsQuizOpen] = useState(false);

  const openCheckinSuccessPopup = () => setIsCheckinSuccessOpen(true);
  const closeCheckinSuccessPopup = () => setIsCheckinSuccessOpen(false);

  const openQuizPopup = () => setIsQuizOpen(true);
  const closeQuizPopup = () => setIsQuizOpen(false);

  return (
    <div className={`${inter.className} overflow-x-hidden`}>
      <GuidePopup />
      <CheckinSuccessPopup isOpen={isCheckinSuccessOpen} onClose={closeCheckinSuccessPopup} />
      <QuizPopup isOpen={isQuizOpen} onClose={closeQuizPopup} />
      <Header />
      <div className='h-45 z-40 bg-[#345EB0] relative p-6'>
        <div
          className='origin-center absolute inset-0 pointer-events-none opacity-15'
          style={{ backgroundImage: `url(${DecorImage7.src})`, backgroundSize: '100% auto' }}></div>
        <Image
          src={DecorImage19}
          alt='Decor Image 19'
          className='absolute hidden md:block right-0 bottom-0 w-auto h-[110%]'
        />
        <div
          className='h-10 absolute bottom-0 left-0 right-0 scale-y-[-1] bg-repeat'
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
      <div className='grid grid-cols-1 lg:grid-cols-[1fr_460px] gap-8 mt-4 px-3'>
        <div className='space-y-2.5'>
          <div className='pb-2.5 px-3 flex flex-col gap-2.5 md:flex-row md:items-center md:justify-between border-b border-black/20'>
            <div className='flex items-center gap-4'>
              <Image
                src={Avatar}
                alt='Avatar'
                className='w-14 h-14 rounded-full overflow-hidden border border-[#D73930]'
              />
              <div className='font-grenze font-bold text-2xl'>Username</div>
            </div>
            <div className='flex shrink-0'>
              <div className='py-3 px-6 flex flex-col items-center gap-1 border-r border-black/20 flex-1 text-center shrink-0'>
                <div className='font-grenze text-[#D73930] font-bold text-4xl  whitespace-nowrap'>00</div>
                <div className='text-[#323239] font-semibold text-sm  whitespace-nowrap'>TOTAL POINT</div>
              </div>
              <div className='py-3 px-6 flex flex-col items-center gap-1 flex-1 shrink-0'>
                <div className='font-grenze text-[#D73930] font-bold text-4xl  whitespace-nowrap'>Top 100</div>
                <div className='text-[#323239] font-semibold text-sm  whitespace-nowrap'>EVENT RANK</div>
              </div>
            </div>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-[492px_1fr] lg:grid-cols-1 xl:grid-cols-[492px_1fr] px-3 gap-4'>
            <div className='space-y-2'>
              <div className='rounded-sm p-4 md:h-23.5 flex flex-col md:flex-row md:justify-between md:items-center bg-[#D73930] gap-4'>
                <div className='flex items-center gap-4'>
                  <div className='w-16 h-16 flex flex-col items-center justify-center text-[#FFFF7C]'>
                    <div className='font-bold text-3xl'>10</div>
                    <div className='font-semibold text-sm'>Points</div>
                  </div>
                  <div className='space-y-1'>
                    <div className='font-grenze font-bold text-white'>Daily Check-in</div>
                    <div className='text-[#D9D9DE] text-sm font-semibold'>07/12/2025 - 01/01/2026</div>
                  </div>
                </div>
                <button 
                  onClick={openCheckinSuccessPopup}
                  className='bg-[#F5BC41] rounded-sm h-10 w-full md:w-fit px-3.5 grid place-items-center font-grenze text-xl font-semibold cursor-pointer'>
                  Check-in
                </button>
              </div>
              <div className='rounded-sm p-4 md:h-23.5 flex flex-col md:flex-row md:justify-between md:items-center bg-[#D73930] gap-4'>
                <div className='flex items-center gap-4'>
                  <div className='w-16 h-16 flex flex-col items-center justify-center text-[#FFFF7C]'>
                    <div className='font-bold text-3xl'>10</div>
                    <div className='font-semibold text-sm'>Points</div>
                  </div>
                  <div className='space-y-1'>
                    <div className='font-grenze font-bold text-white'>Đố vui mỗi ngày</div>
                    <div className='text-[#D9D9DE] text-sm font-semibold'>07/12/2025 - 01/01/2026</div>
                  </div>
                </div>
                <button 
                  onClick={openQuizPopup}
                  className='bg-[#F5BC41] rounded-sm h-10 w-full md:w-fit px-3.5 grid place-items-center font-grenze text-xl font-semibold cursor-pointer'>
                  Giải đố
                </button>
              </div>
            </div>
            <div className='w-full h-49 relative rounded-sm overflow-hidden'>
              <Image src={DecorImage20} alt='Decor Image 20' fill />
              <div className='bg-linear-to-b from-transparent to-black absolute inset-0 p-6 flex flex-col justify-end items-center gap-4'>
                <div className='space-y-1.5 text-center w-full text-white'>
                  <div className='w-full font-grenze text-[28px] font-semibold'>Dự đoán Team Đoạt giải</div>
                  <div className='font-semibold text-sm'>07/12/2025 - 01/01/2026</div>
                </div>
                <button className='bg-[#BCBCBC] text-[#0A0A0B] rounded-sm h-11 px-3.5 grid place-items-center w-fit font-grenze text-xl font-semibold cursor-pointer'>
                  CTA
                </button>
              </div>
            </div>
          </div>
          <div className='pt-4 space-y-4 px-3'>
            <div className='font-grenze font-bold text-[32px]'>Rankings</div>
            <Chart />
          </div>
          <div className='pt-4 space-y-4 px-3'>
            <RewardRedemption />
          </div>
        </div>
        <CommunityPrize />
      </div>
    </div>
  )
}
