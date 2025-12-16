import WoodTable2 from '@/assets/wood_table_2.png'
import WoodTable3 from '@/assets/wood_table_3.png'
import DecorImage15 from '@/assets/decor_image_15.png'
import Image from 'next/image'
export default function Section2() {
  return (
    <section className='relative h-screen w-screen flex justify-center items-center overflow-hidden'>
      <div className='absolute inset-0 flex flex-col'>
        {/* <Image src={WoodTable1} alt='Wood Table 1' className='w-full h-auto object-cover shrink-0' /> */}
        <div
          className='flex-1 h-full'
          style={{
            backgroundImage: `url(${WoodTable2.src})`,
            backgroundSize: '100% auto',
            backgroundRepeat: 'repeat-y',
          }}></div>
        <Image src={WoodTable3} alt='Wood Table 3' className='w-full h-auto object-cover shrink-0' />
      </div>
      <div className='relative'>
        <Image
          src={DecorImage15}
          alt='Decor Image 15'
          className='absolute top-0 left-0 w-[150%] max-w-none -translate-x-[12%] -translate-y-[8%]'
        />
        <div className='rounded-xs relative border-4 border-black max-w-3xl mx-auto bg-[linear-gradient(207deg,#FFF5D3_33.1%,#DEBF97_97.67%)] py-8 px-4 space-y-4'>
          <h2 className='text-center text-2xl font-extrabold w-full font-grenze'>Lời Ngỏ Đến Hành Trình mới</h2>
          <p className='font-medium'>
            <span className='font-semibold'>Thân gửi: </span>
            Các Họa sĩ, Tác giả và Cộng đồng Yêu mến Truyện tranh Việt Nam,
            <br />
            <br /> Bản hùng ca của niềm đam mê và khát vọng sáng tạo lại ngân vang. Nếu WoW Yourself mùa 1 là hình tượng
            Cá Chép vượt Vũ Môn, là lời hiệu triệu &quot;Show Yourself - Know Yourself - Grow Yourself,&quot; thì nay,
            chúng ta cùng nhau đứng trước ngưỡng cửa của một hải trình mới. <br />
            <br /> <strong>WoW Yourself 2</strong> không chỉ là một cuộc thi—đó là lời hẹn ước cùng ánh trăng đại dương,
            là hành trình &quot;Vươn mình ra biển lớn&quot;. Đây là nơi tài năng được gieo mầm (Sow Yourself), hòa mình
            vào dòng chảy nghệ thuật (Flow Yourself), và cuối cùng, tỏa sáng rực rỡ bằng chính bản thể sáng tạo (Glow
            Yourself). Chúng tôi đặt niềm tin vào từng nét vẽ, từng câu chuyện One-shot tối thiểu 15 trang, nơi tinh hoa
            và chuyên môn được đề cao. Với sự dẫn dắt của Ban Cố Vấn, với{' '}
            <strong>mục tiêu vươn tới Triển lãm Truyện tranh & Nghệ thuật 2026 tại Đà Nẵng,</strong> chúng tôi khao khát
            khẳng định: <strong> Truyện tranh Việt là một vũ trụ nghệ thuật độc lập, giàu sức sống.</strong> <br />
            <br />
            Cảm ơn vì đã cùng PunkgaMe kiến tạo nên những bước tiến lịch sử. Hãy can đảm cất cánh, vươn mình khỏi dòng
            sông quen thuộc, để ngọn lửa sáng tạo của Việt Nam rực cháy trên bầu trời bao la.
            <br />
            <br /> Trân trọng và Hẹn ngày Tỏa Sáng,
            <br />
            <br />
            <strong>PunkgaMe.</strong>
          </p>
        </div>
      </div>
    </section>
  )
}
