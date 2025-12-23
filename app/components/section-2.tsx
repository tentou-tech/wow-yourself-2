import WoodTable2 from '@/assets/wood_table_2.png'
import WoodTable3 from '@/assets/wood_table_3.png'
import DecorImage15 from '@/assets/decor_image_15.png'
import DecorImage29 from '@/assets/decor_image_29.png'
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
          <h2 className='text-center text-2xl font-extrabold w-full font-paytone-one'>Thư gửi Rô con</h2>
          <p className='font-medium'>
            Gửi con, Rô!
            <br />
            <br /> Ta biết con đã lên đường lần nữa để tìm kiếm ngôi sao ước vọng, ta biết con sẽ đi đến cùng, con đã
            nhìn thấy Vũ Môn một lần và nó đã gọi con. Chuyến hành trình lần này, con sẽ gặp gỡ thêm những người bạn
            đáng quý…
            <br />
            <br /> Câu chuyện của <strong> WoW Yourself</strong> sẽ tiếp tục và bạn sẽ đồng hành cùng chú Cá Chép trong
            hành trình Vũ Môn của mùa 2 với chủ đề <strong>“Sóng xô sống sao?”</strong>
            <br />
            <br />
            Bạn! Chính bạn, trên con đường vượt qua bản thân mình từng ngày, từng thông điệp bạn gửi gắm, từng nét vẽ tỉ
            mẩn được hoà quyện để tạo nên câu chuyện của riêng bạn, bất chấp gian nan, chúng ta sẽ kể câu chuyện của
            chính mình.
            <br />
            <br />
            <strong>Rồi sẽ đến khoảnh khắc chú Cá Chép nhỏ bé vượt Vũ Môn hoá Rồng!</strong>
            <br />
            <br /> Chúng mình tổ chức mùa thi tâm huyết này thay lời cảm ơn dành cho mọi cố gắng không ngừng học hỏi của
            các bạn, chúng mình vinh dự mời bạn cùng tham gia vào hành trình này, đồng hành với các Cố vấn và Nhà tài
            trợ cùng nhau chung tay nuôi dưỡng <strong> Truyện Tranh Việt!</strong>
            <br />
            <br />
            <strong>PunkgaMe.</strong>
          </p>
        </div>
      </div>
      <Image src={DecorImage29} alt='' unoptimized className='absolute bottom-0 left-0 w-[40vw] h-auto' />
    </section>
  )
}
