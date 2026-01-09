/* eslint-disable react-hooks/set-state-in-effect */
'use client'

import Avatar from '@/assets/Avatar.svg'
import DecorImage19 from '@/assets/decor_image_19.png'
import DecorImage20 from '@/assets/decor_image_20.jpg'
import DecorImage7 from '@/assets/decor_image_7.png'
import Divider from '@/assets/Divider.png'
import { useSignInDialog } from '@/components/signin-dialog'
import { Web3Providers } from '@/components/web3-providers'
import { Spinner } from '@/components/ui/spinner'
import { useLoggedIn } from '@/hooks/useLoggedIn'
import { cn } from '@/lib/utils'
import { checkQuestStatus, claimQuest, getCurrentRank, getQuests, getRequestLog, Quest } from '@/services/tttb'
import { useUserStore } from '@/stores/user-store'
import { Inter } from 'next/font/google'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { toast } from 'sonner'
import Chart from './components/chart'
import CheckinSuccessPopup from './components/checkin-success-popup'
import CommunityPrize from './components/community-prize'
import GuidePopup from './components/guide-popup'
import Header from './components/header'
import QuizPopup from './components/quiz-popup'
import RewardRedemption from './components/reward-redemption'
import useSWR from 'swr'
import { AlertCircle } from 'lucide-react'
const inter = Inter({ subsets: ['latin'] })

export default function Page() {
  const [isCheckinSuccessOpen, setIsCheckinSuccessOpen] = useState(false)
  const [isQuizOpen, setIsQuizOpen] = useState(false)
  const [isCheckinLoading, setIsCheckinLoading] = useState(false)
  const [quests, setQuests] = useState<Quest[]>([])
  const { isLoggedIn } = useLoggedIn()
  const { setOpenSignInDialog } = useSignInDialog()
  const [isGuideOpen, setIsGuideOpen] = useState(false)
  const { user } = useUserStore()

  const closeCheckinSuccessPopup = () => setIsCheckinSuccessOpen(false)

  const openQuizPopup = () => setIsQuizOpen(true)
  const closeQuizPopup = () => setIsQuizOpen(false)

  const { data: userRank, mutate } = useSWR({ key: 'getRank', isLoggedIn }, async ({ isLoggedIn }) => {
    if (isLoggedIn) {
      const rank = await getCurrentRank()
      return rank
    }
    return null
  })

  const getRankTier = (rank: number | undefined): string => {
    if (!rank) return 'Top 100'
    if (rank <= 3) return 'Top 3'
    if (rank <= 5) return 'Top 5'
    if (rank <= 10) return 'Top 10'
    if (rank <= 20) return 'Top 20'
    if (rank <= 50) return 'Top 50'
    return 'Top 100'
  }

  const fetchQuests = async () => {
    try {
      const quests = await getQuests()
      setQuests(quests)
    } catch (error) {
      console.error('Error fetching quests:', error)
    }
  }
  useEffect(() => {
    fetchQuests()
    if (isLoggedIn) mutate()
  }, [isLoggedIn])

  const checkinQuest = quests.find((quest) => quest.quests_i18n.some((i18n) => i18n.data.name === 'Điểm danh'))
  const quizQuest = quests.find((quest) => quest.type == 'Quiz')
  const revealResult = async (id: number) => {
    try {
      const data = await getRequestLog(id)
      if (data?.status == 'SUCCEEDED') {
        fetchQuests()
        mutate()
        setIsCheckinLoading(false)
        setIsCheckinSuccessOpen(true)
        return
      }
      if (data?.status == 'FAILED') {
        setIsCheckinLoading(false)
        toast.error('Có lỗi xảy ra khi điểm danh. Vui lòng thử lại sau.')
        return
      }
      setTimeout(() => revealResult(id), 4000)
    } catch (error) {
      setIsCheckinLoading(false)
      toast.error('Có lỗi xảy ra khi điểm danh. Vui lòng thử lại sau.')
    }
  }

  const checkInHandler = async () => {
    try {
      if (!isLoggedIn) {
        setOpenSignInDialog(true)
        return
      }
      if (checkinQuest) {
        setIsCheckinLoading(true)
        await checkQuestStatus(checkinQuest?.id)
        const res = await claimQuest(checkinQuest.id)
        revealResult(res.requestId)
      }
    } catch (error) {
      setIsCheckinLoading(false)
      toast.error('Có lỗi xảy ra khi điểm danh. Vui lòng thử lại sau.')
    }
  }

  return (
    <Web3Providers>
      <div className={`${inter.className} overflow-x-hidden`}>
        <GuidePopup isOpen={isGuideOpen} setIsOpen={setIsGuideOpen} />
        <CheckinSuccessPopup isOpen={isCheckinSuccessOpen} onClose={closeCheckinSuccessPopup} />
        <QuizPopup
          isOpen={isQuizOpen}
          onClose={closeQuizPopup}
          quizQuest={quizQuest}
          callback={() => {
            fetchQuests()
            mutate()
          }}
        />
        <Header />
        <div className='h-45 z-40 bg-[#345EB0] relative p-6'>
          <div
            className='origin-center absolute inset-0 pointer-events-none opacity-15'
            style={{ backgroundImage: `url(${DecorImage7.src})`, backgroundSize: '100% auto' }}></div>
          <Image
            src={DecorImage19}
            alt='Decor Image 19'
            className='absolute hidden pointer-events-none md:block right-0 bottom-0 w-auto h-[130%]'
          />
          <div
            className='h-10 absolute bottom-0 left-0 right-0 scale-y-[-1] bg-repeat'
            style={{ backgroundImage: `url(${Divider.src})`, backgroundSize: 'auto 100%' }}></div>
          <div className='relative'>
            <h1 className='font-extrabold absolute top-0 left-7 font-paytone-one text-[50px] leading-none text-white'>
              Tiên tri
              <br />
              Tài ba
            </h1>
          </div>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-[1fr_460px] gap-8 mt-4 px-3'>
          <div className='space-y-2.5'>
            {user && (
              <div className='pb-2.5 px-3 flex flex-col gap-2.5 md:flex-row md:items-center md:justify-between border-b border-black/20'>
                <div className='flex items-center gap-4'>
                  <Image
                    src={user.picture || Avatar}
                    alt='Avatar'
                    width={56}
                    height={56}
                    className='w-14 h-14 rounded-full overflow-hidden border border-[#D73930]'
                  />
                  <div className='font-paytone-one font-bold text-2xl'>{user.nickname}</div>
                </div>
                <div className='flex shrink-0'>
                  <div className='py-3 px-6 flex flex-col items-center gap-1 border-r border-black/20 flex-1 text-center shrink-0'>
                    <div className='font-paytone-one text-[#D73930] font-bold text-4xl  whitespace-nowrap'>
                      {userRank?.dream}
                    </div>
                    <div className='text-[#323239] font-semibold text-sm  whitespace-nowrap'>STAR</div>
                  </div>
                  <div className='py-3 px-6 flex flex-col items-center gap-1 flex-1 shrink-0'>
                    <div className='font-paytone-one text-[#D73930] font-bold text-4xl  whitespace-nowrap'>
                      {getRankTier(userRank?.rank)}
                    </div>
                    <div className='text-[#323239] font-semibold text-sm  whitespace-nowrap'>EVENT RANK</div>
                  </div>
                </div>
              </div>
            )}
            <div
              onClick={() => setIsGuideOpen(true)}
              className='flex justify-end text-sm text-Text-Default-text-quaternary cursor-pointer underline px-3 gap-1 items-center'>
              <AlertCircle className='size-4' />
              <span>Thể lệ chương trình</span>
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
                      <div className='font-paytone-one font-bold text-white'>Daily Check-in</div>
                      <div className='text-[#D9D9DE] text-sm font-semibold'>07/12/2025 - 01/01/2026</div>
                    </div>
                  </div>
                  <button
                    onClick={checkInHandler}
                    disabled={isCheckinLoading || checkinQuest?.reward_status == 'CLAIMED'}
                    className={cn(
                      ' rounded-sm h-10 w-full md:w-fit px-3.5 grid place-items-center font-paytone-one text-lg font-semibold cursor-pointer flex items-center justify-center gap-2',
                      checkinQuest?.reward_status == 'CLAIMED' ? 'bg-[#F5BC41]/50 pointer-events-none' : 'bg-[#F5BC41]',
                      isCheckinLoading && 'opacity-50'
                    )}>
                    {isCheckinLoading && <Spinner className='w-4 h-4' />}
                    {checkinQuest?.reward_status == 'CLAIMED' ? 'Đã điểm danh' : 'Điểm danh'}
                  </button>
                </div>
                <div className='rounded-sm p-4 md:h-23.5 flex flex-col md:flex-row md:justify-between md:items-center bg-[#D73930] gap-4'>
                  <div className='flex items-center gap-4'>
                    <div className='w-16 h-16 flex flex-col items-center justify-center text-[#FFFF7C]'>
                      <div className='font-bold text-3xl'>10</div>
                      <div className='font-semibold text-sm'>Points</div>
                    </div>
                    <div className='space-y-1'>
                      <div className='font-paytone-one font-bold text-white'>Đố vui mỗi ngày</div>
                      <div className='text-[#D9D9DE] text-sm font-semibold'>07/12/2025 - 01/01/2026</div>
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      if (isLoggedIn) {
                        openQuizPopup()
                      } else {
                        setOpenSignInDialog(true)
                      }
                    }}
                    className={cn(
                      ' rounded-sm h-10 w-full md:w-fit px-3.5 grid place-items-center font-paytone-one text-lg font-semibold cursor-pointer',
                      quizQuest?.reward_status == 'CLAIMED' ? 'bg-[#F5BC41]/50 pointer-events-none' : 'bg-[#F5BC41]'
                    )}>
                    Giải đố
                  </button>
                </div>
              </div>
              <div className='w-full h-49 relative rounded-sm overflow-hidden'>
                <Image src={DecorImage20} alt='Decor Image 20' fill />
                <div className='bg-linear-to-b from-transparent to-black absolute inset-0 p-6 flex flex-col justify-end items-center gap-4'>
                  <div className='space-y-1.5 text-center w-full text-white'>
                    <div className='w-full font-paytone-one text-[28px] font-semibold'>Dự đoán Team Đoạt giải</div>
                    <div className='font-semibold text-sm'>07/12/2025 - 01/01/2026</div>
                  </div>
                  <button className='bg-[#BCBCBC] text-[#0A0A0B] rounded-sm h-11 px-3.5 grid place-items-center w-fit font-paytone-one text-xl font-semibold cursor-pointer'>
                    CTA
                  </button>
                </div>
              </div>
            </div>
            <div className='pt-4 space-y-4 px-3'>
              <h2 className='font-paytone-one font-bold text-[32px]'>Rankings</h2>
              <Chart />
            </div>
            <div className='py-4 space-y-4 px-3'>
              <RewardRedemption />
            </div>
          </div>
          <CommunityPrize refreshUserRankData={mutate} />
        </div>
      </div>
    </Web3Providers>
  )
}
