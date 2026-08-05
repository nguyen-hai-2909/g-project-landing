'use client'

import { Icon } from '@iconify/react'
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react'
import Link from 'next/link'
import PageHero from '@/app/components/SharedComponent/PageHero'

const faqItems = [
  {
    question: 'G Project làm được những gì?',
    answer:
      'Chúng tôi giúp doanh nghiệp có website, ứng dụng điện thoại và phần mềm quản lý nội bộ — từ ý tưởng ban đầu đến khi sản phẩm chạy ổn định. Bạn chỉ cần nói rõ nhu cầu kinh doanh, phần còn lại chúng tôi lo.',
  },
  {
    question: 'Làm một dự án mất bao lâu?',
    answer:
      'Website giới thiệu thường khoảng 2–4 tuần. Ứng dụng hoặc phần mềm quản lý thường vài tháng, tùy mức độ phức tạp. Sau khi trao đổi, chúng tôi sẽ báo rõ thời gian cụ thể trước khi bắt đầu.',
  },
  {
    question: 'Làm việc với G Project như thế nào?',
    answer:
      'Bạn kể nhu cầu → chúng tôi đề xuất phương án và báo giá → thống nhất rồi bắt tay làm → bạn xem và góp ý theo từng giai đoạn → bàn giao, hướng dẫn sử dụng và hỗ trợ sau đó. Tiến độ được cập nhật thường xuyên để bạn luôn nắm được.',
  },
  {
    question: 'Xong dự án rồi còn được hỗ trợ không?',
    answer:
      'Có. Mỗi gói đều có thời gian bảo hành. Nếu sau này bạn muốn chỉnh sửa, nâng cấp hoặc cần người kèm vận hành, chúng tôi vẫn sẵn sàng đồng hành thêm.',
  },
  {
    question: 'Chi phí được tính ra sao?',
    answer:
      'Chúng tôi báo giá sau khi hiểu rõ bạn cần gì. Có thể thanh toán theo từng giai đoạn hoặc theo thỏa thuận riêng. Liên hệ để nhận báo giá phù hợp với ngân sách của bạn.',
  },
  {
    question: 'Ở tỉnh khác vẫn làm việc được không?',
    answer:
      'Được. Chúng tôi hỗ trợ khách hàng trên toàn quốc qua họp online và bàn giao từ xa. Nếu cần gặp trực tiếp tại Hà Nội, cứ sắp xếp trước với chúng tôi.',
  },
]

export default function FAQPage() {
  return (
    <main>
      <PageHero
        title='Câu hỏi thường gặp'
        description='Những thắc mắc phổ biến về dịch vụ và cách làm việc với G Project.'
        breadcrumb='FAQ'
      />

      <section className='bg-white'>
        <div className='container mx-auto max-w-4xl px-4'>
          <div className='space-y-4'>
            {faqItems.map((item, index) => (
              <div
                key={index}
                className='w-full rounded-xl sm:rounded-2xl p-5 sm:p-8 bg-grey border border-border'>
                <Disclosure>
                  {({ open }) => (
                    <div>
                      <DisclosureButton className='flex w-full justify-between items-start gap-3 text-left text-base sm:text-lg lg:text-xl font-medium focus:outline-hidden hover:cursor-pointer'>
                        <span className='text-black pr-2'>{item.question}</span>
                        <div
                          className={`h-5 w-5 shrink-0 transform transition-transform duration-300 ${
                            open ? 'rotate-180' : ''
                          }`}>
                          <Icon
                            icon='lucide:chevron-up'
                            width='20'
                            height='20'
                          />
                        </div>
                      </DisclosureButton>
                      <DisclosurePanel className='text-base text-black/50 font-normal text-left pt-4 mt-6 border-t border-border'>
                        {item.answer}
                      </DisclosurePanel>
                    </div>
                  )}
                </Disclosure>
              </div>
            ))}
          </div>

          <div className='text-center mt-16 p-10 bg-primary rounded-3xl'>
            <h3 className='text-white mb-4'>Vẫn còn thắc mắc?</h3>
            <p className='text-white/80 mb-8'>
              Đội ngũ G Project sẵn sàng giải đáp mọi câu hỏi của bạn.
            </p>
            <Link
              href='/contact'
              className='inline-block bg-white text-primary text-lg font-semibold py-4 px-10 rounded-full hover:bg-darkmode hover:text-white transition-colors'>
              Liên hệ ngay
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
