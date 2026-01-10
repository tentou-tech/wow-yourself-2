/* eslint-disable react-hooks/set-state-in-effect */
import Advisor1Mascot from '@/assets/advisors/advisor_9_mascot.png'
import DecorImage18 from '@/assets/decor_image_18.png'
import Aids from '@/assets/teams/aids.png'
import Dasacda from '@/assets/teams/dasacda.png'
import Demongang from '@/assets/teams/demongang.png'
import F1long from '@/assets/teams/f1long.png'
import Kado from '@/assets/teams/kado.png'
import Milyhaisan from '@/assets/teams/milyhaisan.png'
import Sixpieces from '@/assets/teams/sixpieces.png'
import Taomong from '@/assets/teams/taomong.png'
import { useSignInDialog } from '@/components/signin-dialog'
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { useLoggedIn } from '@/hooks/useLoggedIn'
import { getTeamPoints, giveTeamPoints } from '@/services/tttb'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { toast } from 'sonner'
import ModalBorder from './modal-border'
import Team1Banner from '@/assets/teams/banner/team-1.png'
import Team2Banner from '@/assets/teams/banner/team-2.jpg'
import Team3Banner from '@/assets/teams/banner/team-3.jpg'
import Team4Banner from '@/assets/teams/banner/team-4.jpg'
import Team5Banner from '@/assets/teams/banner/team-5.png'
import Team6Banner from '@/assets/teams/banner/team-6.png'
import Team7Banner from '@/assets/teams/banner/team-7.jpg'
import Team8Banner from '@/assets/teams/banner/team-8.png'
import { X } from 'lucide-react'
const teams = [
  {
    id: 'milyhaisan',
    name: 'Mì Ly Hải Sản',
    members: 'Truc Tien Nguyen, Nguyễn Miêu, Vũ Mạnh Đức, Kieu Minh, Chuồn Chuồn Trắng',
    advisor: 'Mai Phương Quỳnh',
    topic: 'Lựa Chọn Tốt Nhất',
    points: 0,
    avatar: Milyhaisan,
    banner: Team1Banner,
  },
  {
    id: 'dasacda',
    name: 'ĐA SẮC, ĐÁ',
    members: 'Mira Agamede, Sứa Có Não, Trà My, Tí Chạch, Đẹp Trai Anh Len, Quyy Tranh, Hoa Cúc Xanh',
    advisor: 'Nguyễn Quốc Trung',
    topic: 'Tình Yêu Ở Kia',
    points: 0,
    avatar: Dasacda,
    banner: Team2Banner,
  },
  {
    id: 'demongang',
    name: 'DEMON GANG',
    members: "Ngũ Vị Nhân Sinh, Awame Tran, YattaD, 'Anh Kiệt, Võ Vũ Mai Ly",
    advisor: 'Dương Minh Ngọc',
    topic: 'Hi Sinh Thầm Lặng',
    points: 0,
    avatar: Demongang,
    banner: Team3Banner,
  },
  {
    id: 'f1long',
    name: 'F1LONG',
    members: 'SDP Indie Comic, Supper Orange Cat, Lê Đăng Bảo, Sin Vector, Bành Chủ Tịch',
    advisor: 'Linh Rab Nguyễn',
    topic: 'Khoành Khắc Vàng',
    points: 0,
    avatar: F1long,
    banner: Team4Banner,
  },
  {
    id: 'sixpieces',
    name: 'Six pieces',
    members: 'Phát Lê Nguyễn, Ginger Devill, Chuyện Mây Xanh, Grey, Quy Hai Gạch',
    advisor: 'Vũ Hồng Hải',
    topic: 'Những Thứ Ở Lại',
    points: 0,
    avatar: Sixpieces,
    banner: Team5Banner,
  },
  {
    id: 'kado',
    name: 'Ká Độ',
    members: 'Hoàng Huy Hưng Rau Muống, Gia Huy, Ghi Minh, Linh Ba Kí',
    advisor: 'Xi Xu',
    topic: 'Sự Chuộc Tội',
    points: 0,
    avatar: Kado,
    banner: Team6Banner,
  },
  {
    id: 'taomong',
    name: 'Tảo Mộng',
    members: 'Xavia Ngn, Bạch Đan Thủy Luyện, Nhok Chara, Duy Long, Jessie Mai',
    advisor: 'Lục Hải Minh',
    topic: 'Kết Nối Vô Hình',
    points: 0,
    avatar: Taomong,
    banner: Team7Banner,
  },
  {
    id: 'aids',
    name: 'AIDS - Artificial Intelligence-Doom Slayers',
    members: 'Càu Nhàu, Lỏ nữa nè, Mai Thuỷ Tiên, Mark scenius, Tiếng Truyện Tranh',
    advisor: 'Nam Thanh',
    topic: 'Ký Ức Trân Quý',
    points: 0,
    avatar: Aids,
    banner: Team8Banner,
  },
]
const CommunityPrize = ({ refreshUserRankData }: { refreshUserRankData: () => void }) => {
  const [displayTeams, setDisplayTeams] = useState(teams)

  const fetchTeamsPoints = async () => {
    try {
      const pointsData = await getTeamPoints()
      const updatedTeams = teams
        .map((team) => {
          const teamPoints = pointsData.find((p) => p.id === team.id)
          return {
            ...team,
            points: teamPoints?.points ?? 0,
          }
        })
        .sort((a, b) => b.points - a.points)
      setDisplayTeams(updatedTeams)
    } catch (error) {
      console.error('Error fetching teams points:', error)
    }
  }
  useEffect(() => {
    fetchTeamsPoints()
  }, [])
  return (
    <div className='p-4 rounded-sm'>
      <div className='relative'>
        <h2 className='text-[32px] font-paytone-one font-bold mb-4'>Cổ vũ nhóm bạn yêu thích</h2>
        <div className='relative bg-[#345EB0] rounded-md'>
          <div
            className='rounded-lg mb-4 absolute  w-full h-full'
            style={{
              backgroundImage: `url(${DecorImage18.src})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'center center',
              opacity: 0.1,
            }}></div>
          <div className='p-4'>
            <div className='text-sm font-semibold text-[#D9D9DE]'>11/01/2026 - 15/03/2026</div>
            <div className='text-2xl font-bold text-[#F5BC41] font-paytone-one pt-1'>
              Team Top 01 <span className='text-[#D9D9DE]'>nhận</span>
            </div>
            <div className='text-[42px] font-bold text-[#F5BC41] font-paytone-one'>5.000.000vnđ</div>
          </div>
        </div>
        <div className='w-30.5 h-32 md:w-30 md:h-auto absolute right-0 bottom-0 md:-top-5 md:-right-5'>
          <Image src={Advisor1Mascot} alt='Prize illustration' layout='fill' objectFit='contain' />
        </div>
      </div>
      <div className='space-y-4'>
        {displayTeams.map((team, index) => (
          <Team
            key={index}
            {...team}
            index={index + 1}
            fetchTeamsPoints={fetchTeamsPoints}
            refreshUserRankData={refreshUserRankData}
          />
        ))}
      </div>
    </div>
  )
}

const Team = (
  props: (typeof teams)[0] & { index: number; fetchTeamsPoints: () => Promise<void>; refreshUserRankData: () => void }
) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isGiveDialogOpen, setIsGiveDialogOpen] = useState(false)
  const [isConfirmDialogOpen, setIsConfirmDialogOpen] = useState(false)
  const [pointsAmount, setPointsAmount] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const { isLoggedIn } = useLoggedIn()
  const { setOpenSignInDialog } = useSignInDialog()

  const handleGiveClick = () => {
    if (!isLoggedIn) {
      setOpenSignInDialog(true)
      return
    }
    setIsGiveDialogOpen(true)
  }

  const handleConfirmGive = () => {
    if (!pointsAmount || isNaN(Number(pointsAmount)) || Number(pointsAmount) <= 0) {
      toast.error('Vui lòng nhập số điểm hợp lệ')
      return
    }
    setIsGiveDialogOpen(false)
    setIsConfirmDialogOpen(true)
  }

  const handleSubmitPoints = async () => {
    try {
      setIsLoading(true)
      await giveTeamPoints(Number(pointsAmount), props.id)
      setIsConfirmDialogOpen(false)
      setPointsAmount('')
      await props.fetchTeamsPoints()
      props.refreshUserRankData()
      toast.success('Tặng điểm thành công!')
      // Optionally refresh team points here
    } catch (error) {
      console.error('Error giving points:', error)
      toast.error('Có lỗi xảy ra khi tặng điểm')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div>
      <div key={props.id} className='flex items-center gap-5 justify-between py-4 border-b border-black/20'>
        <div className='flex items-center gap-2 flex-1'>
          <div className='w-4 shrink-0 font-bold'>{props.index}</div>
          <div className='w-12 h-12 bg-gray-300 rounded-full border-2 border-[#D3A667] mr-4 relative overflow-hidden shrink-0'>
            <Image src={props.avatar} alt={props.name} layout='fill' objectFit='cover' />
          </div>
          <div>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <p className='font-bold font-paytone-one cursor-pointer'>{props.name}</p>
                </TooltipTrigger>
                <TooltipContent className='w-xl'>
                  <Image
                    src={props.banner}
                    alt={`${props.name} banner`}
                    width={400}
                    height={200}
                    className='rounded-md w-full'
                  />
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <button
              onClick={() => setIsModalOpen(true)}
              className='text-xs underline cursor-pointer hover:text-blue-500'>
              Thông tin nhóm
            </button>
          </div>
        </div>
        <div className='flex items-center'>
          <p className='mr-4 font-bold'>{props.points} Star</p>
        </div>
        <div className='w-full md:w-auto pt-4 md:pt-0'>
          <button
            disabled
            className='bg-gray-400 text-white px-4 py-2 rounded-md font-semibold cursor-not-allowed w-full md:w-auto opacity-50'>
            Tặng
          </button>
        </div>
      </div>

      {/* Info Modal */}
      {isModalOpen && (
        <div className='fixed inset-0 flex items-center justify-center z-50 bg-black/50'>
          <ModalBorder>
            <div className='bg-white rounded-lg p-6 max-w-2xl w-full max-h-[80vh] overflow-y-auto'>
              <div className='absolute top-4 right-4 z-10 cursor-pointer' onClick={() => setIsModalOpen(false)}>
                <X />
              </div>
              <div className='flex items-center gap-4 mb-6'>
                <div className='w-20 h-20 bg-gray-300 rounded-full border-2 border-[#D3A667] relative overflow-hidden shrink-0'>
                  <Image src={props.avatar} alt={props.name} layout='fill' objectFit='cover' />
                </div>
                <div>
                  <h3 className='text-2xl font-bold font-paytone-one'>{props.name}</h3>
                  <p className='text-gray-600'>Cố vấn: {props.advisor}</p>
                </div>
              </div>

              <div className='mb-4'>
                <Image src={props.banner} alt={`${props.name} banner`} className='rounded-md w-full h-auto' />
              </div>

              <div className='space-y-4'>
                <div>
                  <h4 className='font-bold text-lg mb-2'>Chủ đề phụ đã chọn</h4>
                  <p className='text-gray-700'>{props.topic}</p>
                </div>

                <div>
                  <h4 className='font-bold text-lg mb-2'>Thành viên</h4>
                  <div className='bg-gray-100 p-3 rounded'>
                    <p className='text-gray-700'>{props.members}</p>
                  </div>
                </div>

                <div>
                  <h4 className='font-bold text-lg mb-2'>Điểm</h4>
                  <p className='text-xl font-bold text-[#345EB0]'>{props.points} Star</p>
                </div>
              </div>
            </div>
          </ModalBorder>
        </div>
      )}

      {/* Give Points Dialog */}
      <Dialog open={isGiveDialogOpen} onOpenChange={setIsGiveDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Tặng Star cho {props.name}</DialogTitle>
          </DialogHeader>
          <div className='space-y-4 py-4'>
            <div>
              <label className='block text-sm font-medium mb-2'>Số Star muốn tặng</label>
              <Input
                type='number'
                min='1'
                value={pointsAmount}
                onChange={(e) => setPointsAmount(e.target.value)}
                placeholder='Nhập số Star'
                className='w-full'
              />
            </div>
          </div>
          <DialogFooter>
            <button
              onClick={() => setIsGiveDialogOpen(false)}
              className='px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100 transition'>
              Hủy
            </button>
            <button
              onClick={handleConfirmGive}
              className='px-4 py-2 bg-[#345EB0] text-white rounded-md hover:bg-[#2847a3] transition'>
              Tiếp tục
            </button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Confirmation Dialog */}
      <Dialog open={isConfirmDialogOpen} onOpenChange={setIsConfirmDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Xác nhận tặng Star</DialogTitle>
          </DialogHeader>
          <div className='space-y-4 py-4'>
            <p>
              Bạn sắp tặng <span className='font-bold text-[#345EB0]'>{pointsAmount} Star</span> cho nhóm{' '}
              <span className='font-bold'>{props.name}</span>
            </p>
            <p className='text-sm text-gray-600'>Vui lòng xác nhận hành động này.</p>
          </div>
          <DialogFooter>
            <button
              onClick={() => setIsConfirmDialogOpen(false)}
              disabled={isLoading}
              className='px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100 transition disabled:opacity-50'>
              Hủy
            </button>
            <button
              onClick={handleSubmitPoints}
              disabled={isLoading}
              className='px-4 py-2 bg-[#345EB0] text-white rounded-md hover:bg-[#2847a3] transition disabled:opacity-50'>
              {isLoading ? 'Đang xử lý...' : 'Xác nhận'}
            </button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
export default CommunityPrize
