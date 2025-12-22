'use client'
import Dialog from '@/components/dialog'

interface RoundDetailDialogProps {
  roundNumber: number
  isOpen: boolean
  onClose: () => void
}

export default function RoundDetailDialog({ roundNumber, isOpen, onClose }: RoundDetailDialogProps) {
  const roundDetails = {
    1: {
      title: 'Vòng 1: Sow Yourself',
      subtitle: '"Gửi tôi, hoạ sĩ truyện tranh tương lai"',
      tagline: '(Gieo hạt giống, ươm mầm tài năng)',
      time: '25/11/2025 - 10/12/2025',
      objective:
        'Nhận được nhiều bài đăng ký dự thi nhất có thể, mở rộng quy mô tiếp cận của cuộc thi, qua đó chọn ra 40 thí sinh ưu tú nhất để tiến vào vòng tiếp theo.',
      topic: 'Vẽ truyện ngắn từ 1-3 trang với chủ đề: "Gửi tôi, hoạ sĩ truyện tranh tương lai"',
      topicExplanation: `Trong tương lai, có thể bạn đã trở thành một hoạ sĩ truyện tranh chuyên nghiệp. Khi đó bạn đã thành công xuất bản tác phẩm đầu tay của mình. Nếu như tất cả điều trên là sự thật, thì khi đó bạn sẽ có cảm xúc và suy nghĩ thế nào? Tác phẩm xuất bản đó theo bạn sẽ trông như thế nào?`,
      criteria: [
        'Có sự đầu tư, chỉn chu trong tác phẩm hoàn thiện.',
        'Ý tưởng và cách thể hiện sáng tạo, độc đáo, truyền tải được cảm xúc và làm rõ được tính cá nhân của người sáng tác.',
        'Thể hiện tinh thần và quyết tâm cao mong muốn trở thành người dành chiến thắng.',
      ],
      scoringCriteria:
        'Ban cố vấn và ban tổ chức cùng tham gia chấm điểm, 40 thí sinh có điểm tổng tốt nhất trên thang điểm 100 sẽ tiến vào vòng trong.',
      submission:
        'Nộp bài lên group cộng đồng hoạ sĩ truyện tranh PunkgaMe kèm theo giới thiệu bản thân, động lực tham gia cuộc thi kèm hashtag. #PunkgaMe #WoW2v1 #truyentranh',
      benefits: 'Chắc chắn có cơ hội tham gia triển lãm nghệ thuật truyện tranh diễn ra tại Đà Nẵng 2026',
      prizes: [
        'Giải "Cá thể nổi bật": Top 3 bài thi có tương tác cao nhất (share, like, comment) sẽ nhận giải thưởng là 1 triệu VNĐ mỗi bài. Tổng 3 triệu.',
      ],
    },
    2: {
      title: 'Vòng 2: Flow Yourself',
      subtitle: '"Hải lưu khát vọng"',
      tagline: '(Hòa mình vào dòng chảy của đại dương tri thức)',
      time: '12/12/2025 - 22/12/2025',
      objective:
        'Sau khi chọn ra top 40 chính thức tham gia vòng chung kết, ban tổ chức sẽ tiến hành phân nhóm cho các cố vấn. Các nhóm sau đó cùng tham gia một mini-game để dành cơ hội lựa chọn chủ đề phụ, nhằm giới thiệu nhóm và thể hiện tinh thần đoàn kết.',
      groupSelection: [
        'Các cố vấn sẽ được truyền thông về khả năng cố vấn và điểm mạnh của họ.',
        '40 thí sinh sẽ đưa ra các lựa chọn với ban tổ chức về cố vấn mà họ cảm thấy mong muốn nhận được sự đồng hành nhất.',
        'Mỗi cố vấn chỉ có tối đa 5 thành viên trong nhóm của mình.',
        'Trong trường hợp một cố vấn có nhiều hơn 5 thành viên, cố vấn sẽ có quyền đưa ra lựa chọn giữ lại 5 thành viên phù hợp nhất.',
        'Thành viên không được giữ lại sẽ tiếp tục lựa chọn lần 2, dĩ nhiên trong lần này cố vấn nào đã có đủ 5 thành viên sẽ không được lựa chọn nữa.',
        'Tiến trình này sẽ diễn ra liên tục cho đến khi mỗi nhóm đảm bảo có đủ 5 thành viên.',
        'Trong trường hợp các bạn không tìm được cố vấn mong muốn và có ý định ngừng tham gia cuộc thi, ban tổ chức sẽ liên hệ và bổ sung thêm các bạn thí sinh khác nằm trong bảng điểm vòng 1.',
      ],
      topic:
        'Cả nhóm sẽ cùng tham gia vẽ một poster giới thiệu nhóm với tỉ lệ 16:9 (khổ ngang) kèm theo tên nhóm và slogan của nhóm, sau đó ban tổ chức sẽ đăng tải lên fanpage PunkgaMe để tiến hành bình chọn.',
      scoringCriteria:
        'Nhóm có lượt bình chọn cao nhất sẽ nhận về cơ hội lựa chọn chủ đề đầu tiên, thứ tự lựa chọn chủ đề tiếp theo sẽ dành cho các nhóm có thứ tự bình chọn giảm dần.',
      votingTime: '18/12/2025 - 22/12/2025',
      resultAnnouncement:
        'Kết quả và chủ đề phụ sẽ được công bố vào ngày 16/12/2025. Các nhóm sẽ có 1 ngày để trao đổi và kết quả công bố chủ đề phụ sẽ công khai vào ngày 24/12/2025.',
      prizes: [
        'Giải "Cá may mắn" dành cho khán giả có phần dự đoán kết quả top 8 tác giả chung cuộc chính xác nhất và trong thời gian sớm nhất (dự đoán trên post của PunkgaMe trên fanpage): 1 triệu VNĐ',
      ],
    },
    3: {
      title: 'Vòng 3: Glow Yourself',
      subtitle: '"Tinh hoa Vũ môn"',
      tagline: '(Tỏa sáng trở thành tinh hoa của trời đất)',
      time: '25/12/2025 - 08/02/2026',
      objective:
        '40 tác phẩm one-shot có chất lượng cao, concept ấn tượng, giàu tính hình tượng và có khả năng truyền đạt thông điệp qua tuyển tập và triển lãm nghệ thuật.',
      topic:
        'Mỗi thí sinh sáng tác và hoàn chỉnh one-shot có độ dài từ 15-30 trang về chủ đề: "Sóng xô sống sao" - When the Waves Push, How do You live? Thí sinh sẽ cần kết hợp chủ đề chính với chủ đề phụ tại vòng 2 để hoàn thiện tác phẩm.',
      topicExplanation: `Hình ảnh "Sóng" là đại diện cho những điều sắp đến, những khó khăn và thử thách hay chỉ đơn giản là bước ngoặt thay đổi trong cuộc sống của bạn, khi đó liệu bạn sẽ lựa chọn cách sống như thế nào, thay đổi ra làm sao? Bạn sẽ hòa cùng tinh thần kiên trì phản kháng trước khó khăn - áp lực và kể câu chuyện "vượt sóng" đó như thế nào? Trong cuộc đời ai cũng có một ngọn sóng lớn phải vượt qua, là tác giả hay người đọc, cho dù là ai đi chăng nữa, đều sẽ thấy một phần của chính mình trong đó.`,
      criteria: [
        'Bài thi tuần thủ chất lượng xuất bản theo hướng dẫn chi tiết của đối tác xuất bản.',
        'Toàn bộ bài thi sẽ được gửi riêng cho ban tổ chức.',
      ],
      scoringCriteria: [
        'Các cố vấn cùng ban tổ chức tham gia chấm chung để lấy điểm tổng giống như vòng 1 và không chấm điểm của đội mình quản lí.',
        '8 thí sinh có tổng điểm cao nhất sẽ được tham gia vào vòng chấm chuyên môn tiếp theo. 8 thí sinh này đảm bảo 100% cơ hội xuất hiện trong tuyển tập đồng thời cũng sẽ không được công khai nội dung phục vụ xuất bản trong thời gian đầu.',
        'Ban giám khảo bao gồm hoạ sĩ Thành Phong và hoạ sĩ Lâm Hoàng Trúc sẽ là người chọn ra top 1, top 2 và top 3.',
        '32 thí sinh còn lại sẽ được công khai bài thi trên website để có thêm 2 cơ hội tham gia tuyển tập, cơ hội này sẽ đến từ phần bình chọn của khán giả trên website cuộc thi.',
      ],
      resultAnnouncement: [
        'Thời gian công bố kết quả chấm top 40: 10/02/2026',
        'Thời gian công bố kết quả chấm top 8: 14/02/2026',
      ],
      prizes: {
        individual: [
          '01 Giải "Cá nhân" xuất sắc nhất: 15 triệu VNĐ',
          '01 Giải "Cá nhân" về nhì: 10 triệu VNĐ',
          '01 Giải "Cá nhân" về ba: 5 triệu VNĐ',
          '05 Giải "Cá nhân" nằm trong top 8: Mỗi giải 1 triệu VNĐ',
        ],
        team: ['01 Giải "Đàn cá" có tổng điểm nhóm cao nhất tại vòng chấm top 40: 5 triệu VNĐ'],
        advisor: [
          '01 Giải "Huyền thoại Vũ môn" cho cố vấn có tổng điểm nhóm cao nhất: 10 triệu VNĐ',
          '01 Giải "Bậc thầy Vũ môn" cho cố vấn có tổng điểm đứng thứ nhì: 8 triệu VNĐ',
          '01 Giải "Cao thủ Vũ môn" cho cố vấn có tổng điểm đứng thứ ba: 6 triệu VNĐ',
          '05 Giải "Đại sư Vũ môn" cho cố vấn có tổng điểm nằm trong top 8: Mỗi giải 1 triệu VNĐ',
        ],
      },
    },
  }

  const detail = roundDetails[roundNumber as keyof typeof roundDetails]

  return (
    <Dialog isOpen={isOpen} onClose={onClose} size='lg'>
      <div className='mb-6'>
        <h2 className='text-3xl font-bold text-[#62513F] mb-2'>{detail.title}</h2>
        <p className='text-xl text-[#917D6B] mb-1'>{detail.subtitle}</p>
        <p className='text-sm text-[#917D6B] mb-3'>{detail.tagline}</p>
        <p className='text-lg font-semibold text-[#62513F] mb-4'>Thời gian: {detail.time}</p>
      </div>

      <div className='space-y-6'>
        <section>
          <h3 className='text-lg font-bold text-[#62513F] mb-2'>Mục tiêu</h3>
          <p className='text-[#62513F]'>{detail.objective}</p>
        </section>

        {roundNumber === 2 && 'groupSelection' in detail && (
          <section>
            <h3 className='text-lg font-bold text-[#62513F] mb-2'>Cách chọn nhóm</h3>
            <ul className='list-disc list-inside space-y-1 text-[#62513F]'>
              {detail.groupSelection.map((item: string, idx: number) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </section>
        )}

        <section>
          <h3 className='text-lg font-bold text-[#62513F] mb-2'>Đề bài</h3>
          <p className='text-[#62513F]'>{detail.topic}</p>
        </section>

        {'topicExplanation' in detail && (
          <section>
            <h3 className='text-lg font-bold text-[#62513F] mb-2'>Giải thích chủ đề</h3>
            <p className='text-[#62513F]'>{detail.topicExplanation}</p>
          </section>
        )}

        {'criteria' in detail && Array.isArray(detail.criteria) && (
          <section>
            <h3 className='text-lg font-bold text-[#62513F] mb-2'>Tiêu chí bài thi</h3>
            <ul className='list-disc list-inside space-y-1 text-[#62513F]'>
              {detail.criteria.map((item: string, idx: number) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </section>
        )}

        {'scoringCriteria' in detail && typeof detail.scoringCriteria === 'string' && (
          <section>
            <h3 className='text-lg font-bold text-[#62513F] mb-2'>Tiêu chí chấm điểm</h3>
            <p className='text-[#62513F]'>{detail.scoringCriteria}</p>
          </section>
        )}

        {'scoringCriteria' in detail && Array.isArray(detail.scoringCriteria) && (
          <section>
            <h3 className='text-lg font-bold text-[#62513F] mb-2'>Tiêu chí chấm điểm</h3>
            <ul className='list-disc list-inside space-y-1 text-[#62513F]'>
              {detail.scoringCriteria.map((item: string, idx: number) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </section>
        )}

        {'submission' in detail && (
          <section>
            <h3 className='text-lg font-bold text-[#62513F] mb-2'>Cách thức nộp bài</h3>
            <p className='text-[#62513F]'>{detail.submission}</p>
          </section>
        )}

        {'benefits' in detail && (
          <section>
            <h3 className='text-lg font-bold text-[#62513F] mb-2'>Quyền lợi dành cho top 40</h3>
            <p className='text-[#62513F]'>{detail.benefits}</p>
          </section>
        )}

        {'votingTime' in detail && (
          <section>
            <h3 className='text-lg font-bold text-[#62513F] mb-2'>Thời gian bình chọn</h3>
            <p className='text-[#62513F]'>{detail.votingTime}</p>
          </section>
        )}

        {'resultAnnouncement' in detail &&
          (typeof detail.resultAnnouncement === 'string' ? (
            <section>
              <h3 className='text-lg font-bold text-[#62513F] mb-2'>Công bố kết quả</h3>
              <p className='text-[#62513F]'>{detail.resultAnnouncement}</p>
            </section>
          ) : (
            <section>
              <h3 className='text-lg font-bold text-[#62513F] mb-2'>Công bố kết quả</h3>
              <ul className='list-disc list-inside space-y-1 text-[#62513F]'>
                {detail.resultAnnouncement.map((item: string, idx: number) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </section>
          ))}

        <section>
          <h3 className='text-lg font-bold text-[#62513F] mb-2'>Giải thưởng</h3>
          {typeof detail.prizes === 'object' && !Array.isArray(detail.prizes) ? (
            <div className='space-y-4'>
              {'individual' in detail.prizes && (
                <div>
                  <h4 className='font-semibold text-[#62513F] mb-1'>Giải cho thí sinh: (Tổng 35 triệu)</h4>
                  <ul className='list-disc list-inside space-y-1 text-[#62513F]'>
                    {detail.prizes.individual.map((item: string, idx: number) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}
              {'team' in detail.prizes && (
                <div>
                  <h4 className='font-semibold text-[#62513F] mb-1'>Giải nhóm: (Tổng 5 triệu)</h4>
                  <ul className='list-disc list-inside space-y-1 text-[#62513F]'>
                    {detail.prizes.team.map((item: string, idx: number) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}
              {'advisor' in detail.prizes && (
                <div>
                  <h4 className='font-semibold text-[#62513F] mb-1'>Giải cho cố vấn: (Tổng 29 triệu)</h4>
                  <ul className='list-disc list-inside space-y-1 text-[#62513F]'>
                    {detail.prizes.advisor.map((item: string, idx: number) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ) : (
            <ul className='list-disc list-inside space-y-1 text-[#62513F]'>
              {detail.prizes.map((item: string, idx: number) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          )}
        </section>
      </div>
    </Dialog>
  )
}
