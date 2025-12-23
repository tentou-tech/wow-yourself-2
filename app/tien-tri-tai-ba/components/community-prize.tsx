
import Image from "next/image";
import Advisor1Mascot from '@/assets/advisors/advisor_9_mascot.png'
import Avatar from '@/assets/Avatar.svg'
import DecorImage18 from '@/assets/decor_image_18.png'

const CommunityPrize = () => {
  const users = [
    {
      name: "Bubble Baby",
      members: "name1, name2, name3",
      points: "00 P",
      avatar: Avatar,
    },
    {
      name: "Bubble Baby",
      members: "name1, name2, name3",
      points: "00 P",
      avatar: Avatar,
    },
    {
      name: "Bubble Baby",
      members: "name1, name2, name3",
      points: "00 P",
      avatar: Avatar,
    },
    {
      name: "Bubble Baby",
      members: "name1, name2, name3",
      points: "00 P",
      avatar: Avatar,
    },
  ];

  return (
    <div className='p-4 rounded-sm'>
      <div className='relative'>
        <h2 className='text-[32px] font-paytone-one font-bold mb-4'>Giải Cộng đồng</h2>
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
            <div className='text-sm font-semibold text-[#D9D9DE]'>07/12/2025 - 01/01/2026</div>
            <div className='text-2xl font-bold text-[#F5BC41] font-paytone-one pt-1'>
              Team Top 01 <span className='text-[#D9D9DE]'>nhận</span>
            </div>
            <div className='text-[42px] font-bold text-[#F5BC41] font-paytone-one'>1.000.000vnd</div>
          </div>
        </div>
        <div className='w-30.5 h-32 md:w-44.25 md:h-47 absolute right-0 bottom-0 md:top-0'>
          <Image src={Advisor1Mascot} alt='Prize illustration' layout='fill' objectFit='contain' />
        </div>
      </div>
      <div className='space-y-4'>
        {users.map((user, index) => (
          <div key={index} className='flex flex-wrap items-center justify-between py-4 border-b border-black/20'>
            <div className='flex items-center gap-2'>
              <div className='w-4'>-</div>
              <div className='w-12 h-12 bg-gray-300 rounded-full mr-4 relative overflow-hidden'>
                <Image src={user.avatar} alt={user.name} layout='fill' objectFit='cover' />
              </div>
              <div>
                <p className='font-bold'>{user.name}</p>
                <p className='text-sm text-gray-500'>{user.members}</p>
              </div>
            </div>
            <div className='flex items-center'>
              <p className='mr-4 font-bold'>{user.points}</p>
            </div>
            <div className='w-full md:w-auto pt-4 md:pt-0'>
              <button className='bg-[#345EB0] text-white px-4 py-2 rounded-md font-semibold cursor-pointer w-full md:w-auto'>
                Tặng
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
};

export default CommunityPrize;
