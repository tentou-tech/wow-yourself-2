import Image from 'next/image'
import RewardImage1 from '@/assets/rewards/r1.png'
import RewardImage2 from '@/assets/rewards/r2.png'
import RewardImage3 from '@/assets/rewards/r3.png'
import RewardImage4 from '@/assets/rewards/r4.png'
import RewardImage5 from '@/assets/rewards/r5.png'
const RewardRedemption = () => {
  const rewards = [
    {
      name: 'Áo thun PunkgaMe limited',
      points: '???',
      image: RewardImage1,
      preOrder: true,
      redeemable: false,
    },
    {
      name: 'Merchandise',
      points: '???',
      image: RewardImage2,
      preOrder: true,
      redeemable: false,
    },
    {
      name: 'Limited Edition Merchandise',
      points: '???',
      image: RewardImage3,
      preOrder: true,
      redeemable: false,
    },
    {
      name: 'Mô hình Cybero-01',
      points: '???',
      image: RewardImage4,
      preOrder: true,
      redeemable: false,
    },
    {
      name: 'Tuyển tập Wow Yourself 2 limited',
      points: '???',
      image: RewardImage5,
      preOrder: true,
      redeemable: false,
    },
  ]

  return (
    <div className='bg-[#D73930] text-white p-4 rounded-sm'>
      <h2 className='text-3xl font-paytone-one font-bold mb-2 text-[#F5BC41]'>Đổi Star</h2>
      <p className='text-sm mb-4 text-[#D9D9DE] font-semibold'>11/01/2026 - 15/03/2026</p>
      <p className='mb-8 text-[#D9D9DE] font-semibold'>
        Star sau vòng Tiên tri có thể dùng để đổi các phần thưởng dưới đây
      </p>
      <div className='grid grid-cols-2 md:grid-cols-5 gap-4'>
        {rewards.map((reward, index) => (
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
              <button
                className={`w-full mt-4 py-2 rounded-sm font-paytone-one text-xl font-semibold ${
                  reward.redeemable ? 'bg-[#F5BC41] text-black' : 'bg-[#BCBCBC] text-[#0A0A0B] cursor-not-allowed'
                }`}
                disabled={!reward.redeemable}>
                {reward.points} Star
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RewardRedemption
