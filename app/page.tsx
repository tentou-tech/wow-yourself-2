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
import DecorImage21 from '@/assets/decor_image_21.png'
import DecorImage30 from '@/assets/decor_image_30.png'
import DecorImage27 from '@/assets/decor_image_27.png'
import DecorImage28 from '@/assets/decor_image_28.png'
import DecorImage26 from '@/assets/decor_image_26.png'
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
import Divider from '@/assets/Divider.png'
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
export default function Home() {
  return (
    <>
      <main className='hidden relative lg:block'>
        <SectionSwiper />
      </main>
      <main className='relative z-10 w-screen overflow-hidden lg:hidden'>
        <Header />
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
            <Link href='#loi-ngo'>
              <Button className='absolute! left-1/2 -translate-x-1/2 bottom-1/6'>Tìm hiểu</Button>
            </Link>
          </div>
          <div id='loi-ngo' className='p-3 relative pb-48'>
            <div className='rounded-xs border-4 border-black bg-[linear-gradient(207deg,#FFF5D3_33.1%,#DEBF97_97.67%)] py-8 px-4 space-y-4'>
              {/* <h1 className='text-center text-2xl font-extrabold w-full font-paytone-one'>Thư gửi Rô con</h1> */}
              <p className='font-medium'>
                <i>Thư gửi Rô con, từ Đấng Sáng tạo.</i>
                <br />
                <br />
                &quot;Gửi con, Rô!
                <br />
                <br /> Ta biết con đã lên đường lần nữa để tìm kiếm ngôi sao ước vọng, ta biết con sẽ đi đến cùng, con
                đã nhìn thấy Vũ Môn một lần và nó đã gọi con. Chuyến hành trình lần này, con sẽ gặp gỡ thêm những người
                bạn đáng quý, đừng bỏ cuộc con nhé, rồi sẽ đến khoảnh khắc chú Cá Chép nhỏ bé ngày nào của ta hóa
                Rồng!&quot;
                <br />
                <br />
                <i>Thư gửi các bạn thí sinh từ Ban tổ chức PunkgaMe.</i>
                <br />
                <br />
                &quot;Câu chuyện của <strong> WoW Yourself</strong> sẽ tiếp tục và bạn sẽ đồng hành cùng chú Cá Chép
                trong hành trình Vũ Môn của mùa 2 với chủ đề <strong>&quot;Sóng xô sống sao?&quot;</strong>
                <br />
                <br />
                Bạn! Chính bạn, trên con đường vượt qua bản thân mình từng ngày, từng thông điệp bạn gửi gắm, từng nét
                vẽ tỉ mẩn được hoà quyện để tạo nên câu chuyện của riêng bạn, bất chấp gian nan, chúng ta sẽ kể câu
                chuyện của chính mình.
                <br />
                <br /> Chúng mình tổ chức mùa thi tâm huyết này thay lời cảm ơn dành cho mọi cố gắng không ngừng học hỏi
                của các bạn, chúng mình vinh dự mời bạn cùng tham gia vào hành trình này, đồng hành với các{' '}
                <strong>Cố vấn</strong> và <strong>Nhà tài trợ</strong> cùng nhau chung tay nuôi dưỡng{' '}
                <strong> Truyện Tranh Việt!&quot;</strong>
                <br />
                <br />
              </p>
            </div>
            <Image
              src={DecorImage6}
              alt='Decor Image 6'
              className='absolute top-0 -translate-y-[60%] opacity-90 right-0 w-48'
            />
          </div>
          <Image
            src={DecorImage30}
            alt='Decor Image 30'
            className='absolute bottom-0 translate-y-1/2 right-0 w-[80vw] h-auto'
          />
        </section>
        <section id='giai-thuong' className='px-3 pt-48 relative pb-40'>
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
                <h1 className='text-2xl font-extrabold font-paytone-one'>
                  WoW Yourself 2<br /> Tồng Giải Thưởng Đến
                </h1>
                <div className='text-[#345EB1] text-5xl font-paytone-one font-extrabold mt-2'>80.000.000 vnđ</div>
              </div>
              <p className='font-semibold text-sm'>
                Hệ thống giải thưởng &quot;khủng&quot; bao gồm tiền mặt và hiện vật giá trị, trải dài qua 3 vòng thi.
                Vinh danh xứng đáng cho các Cá nhân xuất sắc, Nhóm đoàn kết và cả Ban cố vấn tận tâm.
              </p>
            </div>
            <div className='space-y-6'>
              <Image src={DecorImage8} alt='Decor Image 8' className='w-full h-auto max-w-sm' />
              <div className='space-y-9 pb-20'>
                <h3 className='text-2xl font-extrabold font-paytone-one'>
                  Cơ hội tham gia
                  <br /> <span className='text-[#D73930]'>Triển Lãm Tranh</span>
                  <br />
                  <div className='text-[#D73930] text-5xl mt-2'>tại Đà Nẵng 2026</div>
                </h3>
                <p className='text-sm font-semibold'>
                  Top 40 thí sinh chính thức cùng 10 thí sinh tiềm năng vượt qua vòng 1 sẽ được vinh danh và trưng bày
                  tác phẩm tại sự kiện nghệ thuật quy mô lớn thứ 2 của PunkgaMe, dự kiến tổ chức tại TP.Đà Nẵng.
                </p>
                <Button className='px-10!'>Thể lệ cuộc thi</Button>
              </div>
            </div>
            <div className='space-y-6 flex flex-col items-end'>
              <Image src={DecorImage21} alt='Decor Image 21' className='w-full h-auto max-w-sm' />
              <div className='space-y-9 pb-20'>
                <h3 className='text-2xl font-extrabold font-paytone-one'>
                  Cơ hội
                  <br /> <span className='text-[#345EB1]'>Xuất Bản lần Đầu Tiên</span>
                  <br />
                  <div className='text-[#345EB1] text-5xl mt-2'>Ngay Trong Tầm Tay</div>
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
        <section className='relative '>
          <div
            className='absolute inset-0 pointer-events-none'
            style={{
              backgroundImage: `url(${DecorImage26.src})`,
              backgroundSize: '100% 100%',
              backgroundRepeat: 'no-repeat',
            }}></div>
          <Image
            src={Divider}
            alt='Divider'
            className='absolute bottom-0 left-0 h-12.5 w-auto object-cover scale-[-1]'
          />
          <div className='relative flex flex-col justify-start pt-[5vh] pb-[10vh] items-center gap-15 h-full w-full'>
            <h1 className='font-paytone-one font-extrabold text-5xl text-[#D73930]'>Ban Giám Khảo</h1>
            <div className='mx-auto px-3 w-screen max-w-300 grid grid-cols-1 gap-20'>
              <div>
                <Image src={DecorImage27} alt='' className='w-full h-auto max-w-sm mx-auto' />
                <div className='font-paytone-one font-extrabold text-[32px] leading-15.5 text-[#4D3B2B] w-full text-center mt-10'>
                  Lâm Hoàng Trúc
                </div>
                <div className='mt-4 font-semibold text-sm text-center max-w-125 mx-auto'>
                  Tác giả của truyện tranh “Đường hoa” và “Mùa hè bất tận”. Họa sĩ Việt Nam đầu tiên xuất bản truyện
                  tranh tại Ý
                </div>
              </div>
              <div>
                <Image src={DecorImage28} alt='' className='w-full h-auto max-w-sm mx-auto' />
                <div className='font-paytone-one font-extrabold text-[32px] leading-15.5 text-[#4D3B2B] w-full text-center mt-10'>
                  Nguyễn Thành Phong
                </div>
                <div className='mt-4 font-semibold text-sm text-center max-w-125 mx-auto'>
                  Tác giả truyện “Long thần tướng”. Giải Bạc cuộc thi “INTERNAL MANGA AWARD” lần thứ 9
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id='ban-co-van' className='bg-[#D73930] py-16 space-y-8 px-3'>
          <h2 className='text-center w-full text-[#FFFF7C] font-extrabold text-5xl font-paytone-one'>Ban Cố Vấn</h2>
          <div className='grid gap-x-3 gap-y-8 grid-cols-2'>
            {advisors.map((advisor, idx) => (
              <div key={idx} className='flex flex-col gap-3 items-center'>
                <div className='w-full aspect-square border-4 border-black rounded-sm bg-gray-200'>
                  <Image src={advisor.image} alt={advisor.name} className='w-full h-full object-cover aspect-square' />
                </div>
                <div className='text-[#FFFF7C] font-extrabold font-paytone-one text-xl text-center'>{advisor.name}</div>
                {advisor.subName && (
                  <div className='text-sm font-medium text-white leading-none'>{advisor.subName}</div>
                )}
              </div>
            ))}
          </div>
        </section>
        <section id='doi-tac' className='bg-[#D73930] pt-40 pb-80 relative'>
          <h2 className='sr-only'>Đối Tác</h2>
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
        <section id='dang-dien-ra' className='py-40 px-3 space-y-24'>
          <h2 className='sr-only'>Đang Diễn Ra</h2>
          <div>
            <div className='flex gap-4 border-b border-black pb-8'>
              <div className='font-paytone-one font-extrabold text-[#B6A690] text-[118px] mr-2 leading-21'>01</div>
              <div className='flex text-[#917D6B] font-paytone-one text-5xl font-extrabold'>
                <div className='mr-1'>
                  <div>25</div>
                  <div>10</div>
                </div>
                <div className=''>
                  <div>11</div>
                  <div>12</div>
                </div>
              </div>
              <div className='flex text-[#917D6B] font-paytone-one text-5xl font-extrabold'>
                <div className=''>
                  <div>20</div>
                  <div>25</div>
                </div>
              </div>
            </div>
            <div className='pt-8 space-y-7'>
              <div className='flex gap-4'>
                <div className='space-y-2 text-[#4D3B2B] font-extrabold font-paytone-one text-2xl leading-6'>
                  <h3>Vòng 1</h3>
                  <div>25/11/2025 - 10/12/2025</div>
                </div>
              </div>
              <div className='text-[#4D3B2B] font-paytone-one text-4xl font-extrabold leading-7.5'>
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
              <div className='flex flex-col w-full gap-3'>
                <Button>Tác phẩm dự thi</Button>
                <Button>Họa sĩ đoạt giải</Button>
              </div>
            </div>
          </div>
          <div>
            <div className='flex gap-4 border-b border-black pb-8'>
              <div className='font-paytone-one font-extrabold text-[#D73930] text-[118px] leading-21'>02</div>
              <div className='flex text-[#4D3B2B] font-paytone-one text-5xl font-extrabold'>
                <div className='mr-1'>
                  <div>12</div>
                  <div>22</div>
                </div>
                <div className=''>
                  <div>12</div>
                  <div>12</div>
                </div>
              </div>
              <div className='flex text-[#4D3B2B] font-paytone-one text-5xl font-extrabold'>
                <div className=''>
                  <div>20</div>
                  <div>25</div>
                </div>
              </div>
            </div>
            <div className='pt-8 space-y-7'>
              <div className='flex gap-4'>
                <Image src={LiveNow} alt='Live Now' className='h-14 w-auto' />
                <div className='space-y-2 text-[#4D3B2B] font-extrabold font-paytone-one text-2xl leading-6'>
                  <h3>Vòng 2</h3>
                  <div>12/12/2025 - 22/12/2025</div>
                </div>
              </div>
              <div className='text-[#D73930] font-paytone-one text-4xl font-extrabold leading-7.5'>
                Hải lưu khát vọng
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
              <div className='font-paytone-one font-extrabold text-[#B6A690] text-[118px] leading-21'>03</div>
              <div className='flex text-[#917D6B] font-paytone-one text-5xl font-extrabold'>
                <div className='mr-1'>
                  <div>25</div>
                  <div>08</div>
                </div>
                <div className=''>
                  <div>12</div>
                  <div>02</div>
                </div>
              </div>
              <div className='flex text-[#917D6B] font-paytone-one text-5xl font-extrabold'>
                <div className=''>
                  <div>25</div>
                  <div>26</div>
                </div>
              </div>
            </div>
            <div className='pt-8 space-y-7'>
              <div className='flex gap-4'>
                <div className='space-y-2 text-[#4D3B2B] font-extrabold font-paytone-one text-2xl leading-6'>
                  <h3>Vòng 3</h3>
                  <div>25/12/2025 - 08/02/2026</div>
                </div>
              </div>
              <div className='text-[#4D3B2B] font-paytone-one text-4xl font-extrabold leading-7.5'>Tinh Hoa Vũ Môn</div>
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
              <div className='font-paytone-one font-extrabold text-[#B6A690] text-[118px] leading-21'>Cđ</div>
              <div className='flex text-[#917D6B] font-paytone-one text-5xl font-extrabold'>
                <div className='mr-1'>
                  <div>25</div>
                  <div>08</div>
                </div>
                <div className=''>
                  <div>12</div>
                  <div>02</div>
                </div>
              </div>
              <div className='flex text-[#917D6B] font-paytone-one text-5xl font-extrabold'>
                <div className='mr-1'>
                  <div>25</div>
                  <div>26</div>
                </div>
              </div>
            </div>
            <div className='pt-8 space-y-7'>
              <div className='flex gap-4'>
                <div className='space-y-2 text-[#4D3B2B] font-extrabold font-paytone-one text-2xl leading-6'>
                  <h3>Sự kiện cộng đồng</h3>
                  <div>11/01/2026 - 31/03/2026</div>
                </div>
              </div>
              <div className='text-[#4D3B2B] font-paytone-one text-4xl font-extrabold leading-7.5'>
                Tiên tri tài ba
                <br /> & Giấc mơ trong tầm tay
              </div>
              <div className='space-y-4'>
                <p className='text-sm font-semibold'>
                  Khán giả có thể tiến hành tạo tài khoản và đăng nhập điểm danh mỗi ngày và trả lời câu hỏi từ ban tổ
                  chức để nhận Star points. Khán giả sẽ nhận về những phần quà giá trị cho mình từ ban tổ chức. 
                </p>
                <Link href={'#'} className='text-[#4D3B2B] font-semibold w-full block text-end text-sm underline'>
                  Chi tiết
                </Link>
              </div>
              <div className='flex flex-col w-full gap-3'>
                <Link href={'/tien-tri-tai-ba'}>
                  <Button>Tham gia ngay</Button>
                </Link>
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
