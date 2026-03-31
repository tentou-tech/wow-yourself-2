'use client'
import Image from 'next/image'
import { useState } from 'react'
import { toast } from 'sonner'
import RewardImage1 from '@/assets/rewards/r1.png'
import RewardImage2 from '@/assets/rewards/r2.png'
import RewardImage3 from '@/assets/rewards/r3.png'
import RewardImage4 from '@/assets/rewards/r4.png'
import RewardImage5 from '@/assets/rewards/r5.png'
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { useLoggedIn } from '@/hooks/useLoggedIn'
import { useSignInDialog } from '@/components/signin-dialog'
import { redeemReward } from '@/services/tttb'
import { useUserStore } from '@/stores/user-store'

const SHIRT_SIZES = ['S', 'M', 'L', 'XL', '2XL']

interface Reward {
  name: string
  points: number
  reward_type: string
  image: typeof RewardImage1
  preOrder: boolean
  redeemable: boolean
  maxPerAccount?: number
  requireSize?: boolean
}

const rewards: Reward[] = [
  {
    name: 'Mô hình Cybero-01',
    points: 800,
    reward_type: 'cybero_model',
    image: RewardImage4,
    preOrder: true,
    redeemable: true,
  },
  {
    name: 'Áo thun PunkgaMe limited',
    points: 500,
    reward_type: 'limited_tshirt',
    image: RewardImage1,
    preOrder: true,
    redeemable: true,
    requireSize: true,
  },
  {
    name: 'Limited Edition Merchandise',
    points: 200,
    reward_type: 'limited_merch',
    image: RewardImage3,
    preOrder: true,
    redeemable: true,
    maxPerAccount: 1,
  },
  {
    name: 'Tuyển tập Wow Yourself 2 limited',
    points: 100,
    reward_type: 'wow_yourself_2',
    image: RewardImage5,
    preOrder: true,
    redeemable: true,
    maxPerAccount: 1,
  },
  {
    name: 'Merchandise',
    points: 50,
    reward_type: 'normal_merch',
    image: RewardImage2,
    preOrder: true,
    redeemable: true,
    maxPerAccount: 1,
  },
]

const RewardRedemption = ({ userStars, onRedeemSuccess }: { userStars?: number; onRedeemSuccess?: () => void }) => {
  const { isLoggedIn } = useLoggedIn()
  const { setOpenSignInDialog } = useSignInDialog()
  const { user } = useUserStore()

  const [selectedReward, setSelectedReward] = useState<Reward | null>(null)
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [isConfirmOpen, setIsConfirmOpen] = useState(false)
  const [isSuccessOpen, setIsSuccessOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    size: '',
  })

  const handleRedeemClick = (reward: Reward) => {
    if (!isLoggedIn) {
      setOpenSignInDialog(true)
      return
    }
    if (userStars !== undefined && userStars < reward.points) {
      toast.error('Bạn không đủ Star để đổi phần thưởng này')
      return
    }
    setSelectedReward(reward)
    setForm({ name: user?.nickname || '', phone: '', email: user?.email || '', address: '', size: '' })
    setIsFormOpen(true)
  }

  const handleFormSubmit = () => {
    if (!form.name.trim() || !form.phone.trim() || !form.email.trim() || !form.address.trim()) {
      toast.error('Vui lòng điền đầy đủ thông tin')
      return
    }
    if (selectedReward?.requireSize && !form.size) {
      toast.error('Vui lòng chọn size áo')
      return
    }
    setIsFormOpen(false)
    setIsConfirmOpen(true)
  }

  const handleConfirmRedeem = async () => {
    if (!selectedReward) return
    try {
      setIsLoading(true)
      await redeemReward({
        reward_type: selectedReward.reward_type,
        name: form.name,
        phone: form.phone,
        email: form.email,
        address: form.address,
        ...(selectedReward.requireSize ? { size: form.size } : {}),
      })
      setIsConfirmOpen(false)
      setIsSuccessOpen(true)
      onRedeemSuccess?.()
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : 'Có lỗi xảy ra khi đổi quà'
      toast.error(message)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className='bg-[#D73930] text-white p-4 rounded-sm'>
      <h2 className='text-3xl font-paytone-one font-bold mb-2 text-[#F5BC41]'>Đổi Star</h2>
      <p className='text-sm mb-4 text-[#D9D9DE] font-semibold'>21/03/2026 - 30/03/2026</p>
      <p className='mb-8 text-[#D9D9DE] font-semibold'>
        Star sau vòng Tiên tri có thể dùng để đổi các phần thưởng dưới đây
      </p>
      <div className='grid grid-cols-2 md:grid-cols-5 gap-4'>
        {rewards.map((reward, index) => {
          const canAfford = userStars === undefined || userStars >= reward.points
          return (
            <div key={index} className='rounded-lg'>
              <div className='relative'>
                {reward.preOrder && (
                  <div className='absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded font-semibold'>
                    Pre order
                  </div>
                )}
                <div className='relative w-full' style={{ paddingTop: '100%' }}>
                  <div className='absolute inset-0 flex items-center justify-center bg-gray-300'>
                    <Image src={reward.image} alt={reward.name} className='w-full h-full object-cover' />
                  </div>
                </div>
              </div>
              <div className='py-4'>
                <h3 className='font-semibold text-white h-12'>{reward.name}</h3>
                <p className='text-xs text-[#D9D9DE] h-4'>
                  {reward.maxPerAccount ? `Giới hạn đổi ${reward.maxPerAccount} sản phẩm/tài khoản` : ''}
                </p>
                <button
                  className={`w-full mt-4 py-2 rounded-sm font-paytone-one text-xl font-semibold ${
                    reward.redeemable && canAfford
                      ? 'bg-[#F5BC41] text-black cursor-pointer hover:bg-[#f0b020]'
                      : 'bg-[#BCBCBC] text-[#0A0A0B] cursor-not-allowed'
                  }`}
                  disabled={!reward.redeemable || !canAfford}
                  onClick={() => handleRedeemClick(reward)}>
                  {reward.points} Star
                </button>
              </div>
            </div>
          )
        })}
      </div>

      {/* Form Dialog */}
      <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Đổi {selectedReward?.name}</DialogTitle>
          </DialogHeader>
          <div className='space-y-4 py-4'>
            <p className='text-sm text-gray-600'>
              Bạn đang đổi <span className='font-bold text-[#D73930]'>{selectedReward?.points} Star</span> lấy{' '}
              <span className='font-bold'>{selectedReward?.name}</span>. Vui lòng điền thông tin nhận quà.
            </p>
            <div>
              <label className='block text-sm font-medium mb-1'>Họ và tên *</label>
              <Input
                value={form.name}
                onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                placeholder='Nguyen Van A'
              />
            </div>
            <div>
              <label className='block text-sm font-medium mb-1'>Số điện thoại *</label>
              <Input
                value={form.phone}
                onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                placeholder='0901234567'
              />
            </div>
            <div>
              <label className='block text-sm font-medium mb-1'>Email *</label>
              <Input
                type='email'
                value={form.email}
                onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                placeholder='a@example.com'
              />
            </div>
            <div>
              <label className='block text-sm font-medium mb-1'>Địa chỉ nhận quà *</label>
              <Input
                value={form.address}
                onChange={(e) => setForm((f) => ({ ...f, address: e.target.value }))}
                placeholder='123 Nguyen Hue, Q1, HCM'
              />
            </div>
            {selectedReward?.requireSize && (
              <div>
                <label className='block text-sm font-medium mb-1'>Size áo *</label>
                <div className='flex gap-2'>
                  {SHIRT_SIZES.map((size) => (
                    <button
                      key={size}
                      type='button'
                      onClick={() => setForm((f) => ({ ...f, size }))}
                      className={`px-4 py-2 rounded-md border font-medium transition ${
                        form.size === size
                          ? 'bg-[#D73930] text-white border-[#D73930]'
                          : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'
                      }`}>
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
          <DialogFooter>
            <button
              onClick={() => setIsFormOpen(false)}
              className='px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100 transition'>
              Hủy
            </button>
            <button
              onClick={handleFormSubmit}
              className='px-4 py-2 bg-[#D73930] text-white rounded-md hover:bg-[#c0312a] transition'>
              Tiếp tục
            </button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Confirmation Dialog */}
      <Dialog open={isConfirmOpen} onOpenChange={setIsConfirmOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Xác nhận đổi quà</DialogTitle>
          </DialogHeader>
          <div className='space-y-3 py-4'>
            <p>
              Bạn sắp dùng <span className='font-bold text-[#D73930]'>{selectedReward?.points} Star</span> để đổi{' '}
              <span className='font-bold'>{selectedReward?.name}</span>
            </p>
            <div className='bg-gray-50 rounded-md p-4 space-y-1 text-sm'>
              <p>
                <span className='font-medium'>Họ tên:</span> {form.name}
              </p>
              <p>
                <span className='font-medium'>SĐT:</span> {form.phone}
              </p>
              <p>
                <span className='font-medium'>Email:</span> {form.email}
              </p>
              <p>
                <span className='font-medium'>Địa chỉ:</span> {form.address}
              </p>
              {selectedReward?.requireSize && (
                <p>
                  <span className='font-medium'>Size:</span> {form.size}
                </p>
              )}
            </div>
            <p className='text-sm text-gray-600'>Vui lòng kiểm tra thông tin trước khi xác nhận.</p>
          </div>
          <DialogFooter>
            <button
              onClick={() => {
                setIsConfirmOpen(false)
                setIsFormOpen(true)
              }}
              disabled={isLoading}
              className='px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100 transition disabled:opacity-50'>
              Quay lại
            </button>
            <button
              onClick={handleConfirmRedeem}
              disabled={isLoading}
              className='px-4 py-2 bg-[#D73930] text-white rounded-md hover:bg-[#c0312a] transition disabled:opacity-50'>
              {isLoading ? 'Đang xử lý...' : 'Xác nhận đổi quà'}
            </button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Success Dialog */}
      <Dialog open={isSuccessOpen} onOpenChange={setIsSuccessOpen}>
        <DialogContent>
          <div className='text-center py-6 space-y-4'>
            <div className='text-5xl'>🎉</div>
            <h3 className='text-2xl font-bold text-[#D73930]'>Đổi quà thành công!</h3>
            <p className='text-gray-600'>
              Bạn đã đổi thành công <span className='font-bold'>{selectedReward?.name}</span>. Ban tổ chức sẽ liên hệ
              với bạn để giao quà.
            </p>
            <button
              onClick={() => setIsSuccessOpen(false)}
              className='px-6 py-2 bg-[#D73930] text-white rounded-md hover:bg-[#c0312a] transition'>
              Đóng
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default RewardRedemption
