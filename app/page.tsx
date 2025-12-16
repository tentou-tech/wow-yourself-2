import DecorImage1 from '@/assets/decor_image_1.png'
import DecorImage10 from '@/assets/decor_image_10.png'
import DecorImage11 from '@/assets/decor_image_11.png'
import DecorImage12 from '@/assets/decor_image_12.png'
import DecorImage2 from '@/assets/decor_image_2.png'
import DecorImage3 from '@/assets/decor_image_3.png'
import DecorImage4 from '@/assets/decor_image_4.png'
import DecorImage5 from '@/assets/decor_image_5.png'
import DecorImage6 from '@/assets/decor_image_6.png'
import DecorImage7 from '@/assets/decor_image_7.png'
import DecorImage8 from '@/assets/decor_image_8.png'
import DecorImage9 from '@/assets/decor_image_9.png'
import Letter from '@/assets/letter.png'
import LiveNow from '@/assets/live-now.png'
import WoodTable1 from '@/assets/wood_table_1.png'
import WoodTable2 from '@/assets/wood_table_2.png'
import WoodTable3 from '@/assets/wood_table_3.png'
import Button from '@/components/button'
import Image from 'next/image'
import Link from 'next/link'
import Header from './components/header'
import SectionSwiper from './components/section-swiper'
import Sponsors from '@/assets/sponsors.png'

export default function Home() {
  return (
    <>
      <Header />
      <main className='hidden relative lg:block'>
        <SectionSwiper />
      </main>
      <main className='relative z-10 w-screen overflow-hidden lg:hidden'>
        <section className='relative min-h-screen w-screen'>
          <div className='absolute inset-0 flex flex-col'>
            <Image src={WoodTable1} alt='Wood Table 1' className='w-full h-auto object-cover shrink-0' />
            <div
              className='flex-1 h-full'
              style={{
                backgroundImage: `url(${WoodTable2.src})`,
                backgroundSize: '100% auto',
                backgroundRepeat: 'repeat-y',
              }}></div>
            <Image src={WoodTable3} alt='Wood Table 3' className='w-full h-auto object-cover shrink-0' />
          </div>
          <div className='relative z-10 min-h-screen'>
            <Image
              src={Letter}
              alt='Letter'
              className='absolute top-1/2 left-1/2 -translate-x-1/2 w-[90vw] sm:w-[80vw] -translate-y-3/4'
            />
            <Image src={DecorImage1} alt='Decor Image 1' className='absolute top-0 right-0 w-48' />
            <Image
              src={DecorImage2}
              alt='Decor Image 2'
              className='absolute bottom-1/8 right-0 translate-x-[45%] w-48 blur-[2.5px]'
            />
            <Image
              src={DecorImage3}
              alt='Decor Image 3'
              className='absolute bottom-1/5 -translate-x-1/4 left-0 w-32 scale-x-[-1]'
            />
            <Image
              src={DecorImage5}
              alt='Decor Image 5'
              className='absolute top-0 left-1/2 -translate-x-1/2 min-w-7xl opacity-80'
            />
            <Image src={DecorImage11} alt='Decor Image 11' className='absolute top-0 left-0 w-screen' />
            <Image src={DecorImage4} alt='Decor Image 4' className='absolute top-0 inset-x-0 blur-[2.5px]' />
            <Button className='absolute! left-1/2 -translate-x-1/2 bottom-1/6'>Tìm hiểu</Button>
          </div>
          <div className='p-3 relative pb-48'>
            <div className='rounded-xs border-4 border-black bg-[linear-gradient(207deg,#FFF5D3_33.1%,#DEBF97_97.67%)] py-8 px-4 space-y-4'>
              <h2 className='text-center text-2xl font-extrabold w-full font-grenze'>Lời Ngỏ Đến Hành Trình mới</h2>
              <p className='font-medium'>
                <span className='font-semibold'>Thân gửi: </span>
                Các Họa sĩ, Tác giả và Cộng đồng Yêu mến Truyện tranh Việt Nam,
                <br />
                <br /> Bản hùng ca của niềm đam mê và khát vọng sáng tạo lại ngân vang. Nếu WoW Yourself mùa 1 là hình
                tượng Cá Chép vượt Vũ Môn, là lời hiệu triệu &quot;Show Yourself - Know Yourself - Grow Yourself,&quot;
                thì nay, chúng ta cùng nhau đứng trước ngưỡng cửa của một hải trình mới. <br />
                <br /> <strong>WoW Yourself 2</strong> không chỉ là một cuộc thi—đó là lời hẹn ước cùng ánh trăng đại
                dương, là hành trình &quot;Vươn mình ra biển lớn&quot;. Đây là nơi tài năng được gieo mầm (Sow
                Yourself), hòa mình vào dòng chảy nghệ thuật (Flow Yourself), và cuối cùng, tỏa sáng rực rỡ bằng chính
                bản thể sáng tạo (Glow Yourself). Chúng tôi đặt niềm tin vào từng nét vẽ, từng câu chuyện One-shot tối
                thiểu 15 trang, nơi tinh hoa và chuyên môn được đề cao. Với sự dẫn dắt của Ban Cố Vấn, với{' '}
                <strong>mục tiêu vươn tới Triển lãm Truyện tranh & Nghệ thuật 2026 tại Đà Nẵng,</strong> chúng tôi khao
                khát khẳng định: <strong> Truyện tranh Việt là một vũ trụ nghệ thuật độc lập, giàu sức sống.</strong>{' '}
                <br />
                <br />
                Cảm ơn vì đã cùng PunkgaMe kiến tạo nên những bước tiến lịch sử. Hãy can đảm cất cánh, vươn mình khỏi
                dòng sông quen thuộc, để ngọn lửa sáng tạo của Việt Nam rực cháy trên bầu trời bao la.
                <br />
                <br /> Trân trọng và Hẹn ngày Tỏa Sáng,
                <br />
                <br />
                <strong>PunkgaMe.</strong>
              </p>
            </div>
            <Image
              src={DecorImage6}
              alt='Decor Image 6'
              className='absolute top-0 -translate-y-[60%] opacity-90 right-0 w-48'
            />
          </div>
        </section>
        <section className='px-3 pt-48 relative pb-40'>
          <div
            className='absolute inset-0 pointer-events-none'
            style={{
              backgroundImage: `url(${DecorImage7.src})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'auto 100%',
              backgroundPosition: 'center center',
              opacity: 0.03,
            }}></div>
          <div className='relative z-10'>
            <div className='space-y-7'>
              <div>
                <h2 className='text-3xl font-extrabold font-grenze leading-none'>
                  WoW Yourself 2<br /> Tồng Giải Thưởng Đến
                </h2>
                <div className='text-[#345EB1] text-[50px] font-grenze font-extrabold leading-10.5'>80.000.000 vnđ</div>
              </div>
              <p className='font-semibold text-sm'>
                Hệ thống giải thưởng &quot;khủng&quot; bao gồm tiền mặt và hiện vật giá trị, trải dài qua 3 vòng thi.
                Vinh danh xứng đáng cho các Cá nhân xuất sắc, Nhóm đoàn kết và cả Ban cố vấn tận tâm.
              </p>
            </div>
            <div className='space-y-6'>
              <Image src={DecorImage8} alt='Decor Image 8' className='w-full h-auto max-w-sm' />
              <div className='space-y-9 pb-20'>
                <h3 className='text-3xl font-extrabold font-grenze'>
                  Cơ hội tham gia
                  <br /> <span className='text-[#D73930]'>Triển Lãm Tranh</span>
                  <br />
                  <span className='text-[#D73930] text-[50px] leading-none'>tại Đà Nẵng 2026</span>
                </h3>
                <p className='text-sm font-semibold'>
                  Top 40 thí sinh vượt qua Vòng 1 sẽ được vinh danh và trưng bày tác phẩm tại sự kiện nghệ thuật quy mô
                  lớn thứ 2 của PunkgaMe, dự kiến tổ chức tại TP.Đà Nẵng.
                </p>
                <Button className='px-10!'>Thể lệ cuộc thi</Button>
              </div>
            </div>
            <div className='space-y-6 flex flex-col items-end'>
              <Image src={DecorImage9} alt='Decor Image 9' className='w-full h-auto max-w-sm' />
              <div className='space-y-9 pb-20'>
                <h3 className='text-3xl font-extrabold font-grenze'>
                  Cơ hội
                  <br /> <span className='text-[#345EB1]'>Xuất Bản lần Đầu Tiên</span>
                  <br />
                  <span className='text-[#345EB1] text-[50px] leading-none'>Ngay Trong Tầm Tay</span>
                </h3>
                <p className='text-sm font-semibold'>
                  Tác phẩm của Top 10 chung cuộc (8 BGK chọn + 2 Khán giả bình chọn) sẽ được xuất bản trong Tuyển tập
                  truyện tranh WoW Yourself Mùa 2 (Ấn phẩm vật lý) và cơ hội được Ren Animation Studio chuyển thể thành
                  phim hoạt hình.
                </p>
                <Button className='px-10!'>Tham gia ngay</Button>
              </div>
            </div>
          </div>
          <div
            className='w-full absolute bottom-0 left-0 h-12.5'
            style={{
              backgroundImage: `url(${DecorImage10.src})`,
              backgroundRepeat: 'repeat',
              backgroundSize: 'auto 100%',
            }}></div>
        </section>
        <section className='bg-[#D73930] py-16 space-y-8 px-3'>
          <h2 className='text-center w-full text-[#FFFF7C] font-extrabold text-[50px] font-grenze'>Ban Cố Vấn</h2>
          <div className='grid gap-x-3 gap-y-8 grid-cols-2'>
            <div className='flex flex-col gap-3 items-center'>
              <div className='w-full aspect-square border-4 border-black rounded-sm bg-gray-200'></div>
              <div className='text-[#FFFF7C] font-extrabold font-grenze text-2xl'>Dương Minh Ngọc</div>
            </div>
            <div className='flex flex-col gap-3 items-center'>
              <div className='w-full aspect-square border-4 border-black rounded-sm bg-gray-200'></div>
              <div className='text-[#FFFF7C] font-extrabold font-grenze text-2xl'>Dương Minh Ngọc</div>
              <div className='tex-sm font-medium text-white'>BLUE QUILIN</div>
            </div>
            <div className='flex flex-col gap-3 items-center'>
              <div className='w-full aspect-square border-4 border-black rounded-sm bg-gray-200'></div>
              <div className='text-[#FFFF7C] font-extrabold font-grenze text-2xl'>Dương Minh Ngọc</div>
            </div>
            <div className='flex flex-col gap-3 items-center'>
              <div className='w-full aspect-square border-4 border-black rounded-sm bg-gray-200'></div>
              <div className='text-[#FFFF7C] font-extrabold font-grenze text-2xl'>Dương Minh Ngọc</div>
              <div className='tex-sm font-medium text-white'>BLUE QUILIN</div>
            </div>
          </div>
        </section>
        <section className='bg-[#D73930] pt-40 pb-80 relative'>
          <div className='w-screen overflow-hidden'>
            <div
              className='flex animate-scroll max-w-none w-max min-w-0'
              style={{ animation: `scroll 10s linear infinite` }}>
              <div className='shrink-0 '>
                <Image src={Sponsors} alt={`Sponsors`} className='h-12.5 w-auto' />
              </div>
              <div className='shrink-0 '>
                <Image src={Sponsors} alt={`Sponsors`} className='h-12.5 w-auto' />
              </div>
            </div>
          </div>
          <div
            className='w-full absolute bottom-0 left-0 h-12.5'
            style={{
              backgroundImage: `url(${DecorImage10.src})`,
              backgroundRepeat: 'repeat',
              backgroundSize: 'auto 100%',
            }}></div>
          <Image
            src={DecorImage12}
            alt='Decor Image 12'
            className='absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/3 w-screen max-w-md'
          />
        </section>
        <section className='py-40 px-3 space-y-24'>
          <div>
            <div className='flex gap-4 border-b border-black pb-8'>
              <div className='font-grenze font-extrabold text-[#D73930] text-[122px] leading-12'>01</div>
              <div className='flex text-[#4D3B2B] font-grenze text-[50px] leading-8.25 font-extrabold'>
                <div className='w-14'>
                  <div>25</div>
                  <div>10</div>
                </div>
                <div className='w-14'>
                  <div>11</div>
                  <div>12</div>
                </div>
              </div>
              <div className='flex text-[#4D3B2B] font-grenze text-[50px] leading-8.25 font-extrabold'>
                <div className='w-14'>
                  <div>20</div>
                  <div>25</div>
                </div>
              </div>
            </div>
            <div className='pt-8 space-y-7'>
              <div className='flex gap-4'>
                <Image src={LiveNow} alt='Live Now' className='h-14 w-auto' />
                <div className='space-y-2 text-[#4D3B2B] font-extrabold font-grenze text-2xl leading-6'>
                  <div>Vòng 1</div>
                  <div>25/11/2025 - 10/12/2025</div>
                </div>
              </div>
              <div className='text-[#D73930] font-grenze text-4xl font-extrabold leading-7.5'>
                Gửi tôi, họa sĩ truyện tranh tương lai
              </div>
              <div className='space-y-4'>
                <p className='text-sm font-semibold'>
                  Đề bài: Vẽ truyện ngắn từ 1-3 trang với chủ đề: “Gửi tôi, hoạ sĩ truyện tranh tương lai”. Hình thức
                  thể hiện đa dạng, không giới hạn cách trình bày tuy nhiên khổ giấy thể hiện bắt buộc phải là kích
                  thước A4.
                </p>
                <Link href={'#'} className='text-[#4D3B2B] font-semibold w-full block text-end text-sm underline'>
                  Chi tiết
                </Link>
              </div>
            </div>
          </div>
          <div>
            <div className='flex gap-4 border-b border-black pb-8'>
              <div className='font-grenze font-extrabold text-[#B6A690] text-[122px] leading-12'>02</div>
              <div className='flex text-[#917D6B] font-grenze text-[50px] leading-8.25 font-extrabold'>
                <div className='w-14'>
                  <div>12</div>
                  <div>22</div>
                </div>
                <div className='w-14'>
                  <div>12</div>
                  <div>12</div>
                </div>
              </div>
              <div className='flex text-[#917D6B] font-grenze text-[50px] leading-8.25 font-extrabold'>
                <div className='w-14'>
                  <div>20</div>
                  <div>25</div>
                </div>
              </div>
            </div>
            <div className='pt-8 space-y-7'>
              <div className='flex gap-4'>
                <div className='space-y-2 text-[#4D3B2B] font-extrabold font-grenze text-2xl leading-6'>
                  <div>Vòng 2</div>
                  <div>12/12/2025 - 22/12/2025</div>
                </div>
              </div>
              <div className='text-[#4D3B2B] font-grenze text-4xl font-extrabold leading-7.5'>Hải lưu khát vọng</div>
              <div className='space-y-4'>
                <p className='text-sm font-semibold'>
                  Đề bài: Vẽ truyện ngắn từ 1-3 trang với chủ đề: “Gửi tôi, hoạ sĩ truyện tranh tương lai”. Hình thức
                  thể hiện đa dạng, không giới hạn cách trình bày tuy nhiên khổ giấy thể hiện bắt buộc phải là kích
                  thước A4.
                </p>
              </div>
            </div>
          </div>
        </section>
        <footer className='w-screen bg-[#345EB0] p-4 flex justify-center items-center gap-16'>
          <Link href={'#'}>
            <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'>
              <path
                d='M24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 17.9895 4.3882 22.954 10.125 23.8542V15.4688H7.07812V12H10.125V9.35625C10.125 6.34875 11.9166 4.6875 14.6576 4.6875C15.9701 4.6875 17.3438 4.92188 17.3438 4.92188V7.875H15.8306C14.34 7.875 13.875 8.80008 13.875 9.75V12H17.2031L16.6711 15.4688H13.875V23.8542C19.6118 22.954 24 17.9895 24 12Z'
                fill='white'
              />
            </svg>
          </Link>
          <Link href={'#'}>
            <svg xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 18 18' fill='none'>
              <path
                d='M10.7124 7.62177L17.4133 0H15.8254L10.0071 6.61788L5.35992 0H0L7.02738 10.0074L0 18H1.58799L7.73237 11.0113L12.6401 18H18L10.7121 7.62177H10.7124ZM8.53747 10.0956L7.82546 9.09906L2.16017 1.16971H4.59922L9.17118 7.56895L9.8832 8.56546L15.8262 16.8835H13.3871L8.53747 10.096V10.0956Z'
                fill='white'
              />
            </svg>
          </Link>
          <Link href={'#'}>
            <svg xmlns='http://www.w3.org/2000/svg' width='24' height='17' viewBox='0 0 24 17' fill='none'>
              <path
                d='M23.7609 3.64219C23.7609 3.64219 23.5266 1.9875 22.8047 1.26094C21.8906 0.304688 20.8688 0.3 20.4 0.24375C17.0438 -1.3411e-07 12.0047 0 12.0047 0H11.9953C11.9953 0 6.95625 -1.3411e-07 3.6 0.24375C3.13125 0.3 2.10938 0.304688 1.19531 1.26094C0.473438 1.9875 0.24375 3.64219 0.24375 3.64219C0.24375 3.64219 0 5.5875 0 7.52813V9.34687C0 11.2875 0.239062 13.2328 0.239062 13.2328C0.239062 13.2328 0.473437 14.8875 1.19062 15.6141C2.10469 16.5703 3.30469 16.5375 3.83906 16.6406C5.76094 16.8234 12 16.8797 12 16.8797C12 16.8797 17.0438 16.8703 20.4 16.6313C20.8688 16.575 21.8906 16.5703 22.8047 15.6141C23.5266 14.8875 23.7609 13.2328 23.7609 13.2328C23.7609 13.2328 24 11.2922 24 9.34687V7.52813C24 5.5875 23.7609 3.64219 23.7609 3.64219ZM9.52031 11.5547V4.80937L16.0031 8.19375L9.52031 11.5547Z'
                fill='white'
              />
            </svg>
          </Link>
        </footer>
      </main>
    </>
  )
}
