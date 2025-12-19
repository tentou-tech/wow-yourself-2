import DecorImage27 from '@/assets/decor_image_27.png'
import DecorImage28 from '@/assets/decor_image_28.png'
import DecorImage26 from '@/assets/decor_image_26.png'
import Divider from '@/assets/Divider.png'
import Sponsors from '@/assets/sponsors.png'
import Image from 'next/image'
export default function Section4_5() {
  return (
    <section className='relative h-screen w-screen '>
      <div
        className='absolute inset-0 pointer-events-none'
        style={{
          backgroundImage: `url(${DecorImage26.src})`,
          backgroundSize: '100% 100%',
          backgroundRepeat: 'no-repeat',
        }}></div>
      <Image src={Divider} alt='Divider' className='absolute bottom-0 left-0 w-screen scale-[-1]' />

      <div className='relative flex flex-col justify-start pt-[5vh] items-center gap-15 h-full w-full'>
        <h1 className='font-grenze font-extrabold text-[70px] text-[#D73930]'>Ban Giám Khảo</h1>
        <div className='mx-auto px-3 w-screen max-w-300 grid grid-cols-2 gap-20'>
          <div>
            <Image src={DecorImage27} alt='' className='w-full h-auto' />
            <div className='font-grenze font-extrabold text-[42px] leading-15.5 text-[#4D3B2B] w-full text-center mt-10'>
              Lâm Hoàng Trúc
            </div>
            <div className='mt-4 font-semibold text-lg text-center max-w-125'>
              Tác giả của truyện tranh “Đường hoa” và “Mùa hè bất tận”. Họa sĩ Việt Nam đầu tiên xuất bản truyện tranh
              tại Ý
            </div>
          </div>
          <div>
            <Image src={DecorImage28} alt='' className='w-full h-auto' />
            <div className='font-grenze font-extrabold text-[42px] leading-15.5 text-[#4D3B2B] w-full text-center mt-10'>
              Nguyễn Thành Phong
            </div>
            <div className='mt-4 font-semibold text-lg text-center max-w-125'>
              Tác giả truyện “Long thần tướng”. Giải Bạc cuộc thi “INTERNAL MANGA AWARD” lần thứ 9
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
