'use client'
import React from 'react'
import { Icon } from '@iconify/react'
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react'

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
]

const FAQ = () => {
  return (
    <section
      id='FAQ'
      className='relative bg-cover bg-center overflow-hidden dark:bg-darkmode'>
      <div className='container mx-auto max-w-7xl px-4'>
        <div className='relative rounded-2xl py-12 sm:py-16 lg:py-24 px-3 sm:px-6 bg-faq-bg bg-no-repeat bg-cover bg-primary'>
          <p className='text-base sm:text-lg font-normal text-white text-center mb-4 sm:mb-6'>
            FAQ
          </p>
          <h2 className='text-white text-center max-w-3xl mx-auto px-2'>
            Câu hỏi thường gặp.
          </h2>
          <div className='w-full pt-8 sm:pt-12 lg:pt-16 space-y-3 sm:space-y-4'>
            {faqItems.map((item, index) => (
              <div
                key={index}
                className='mx-auto w-full max-w-5xl rounded-xl sm:rounded-2xl p-5 sm:p-8 bg-white'>
                <Disclosure>
                  {({ open }) => (
                    <div>
                      <DisclosureButton className='flex w-full justify-between items-start gap-3 text-left text-base sm:text-lg lg:text-xl font-medium focus:outline-hidden hover:cursor-pointer'>
                        <span className='text-black'>{item.question}</span>
                        <div
                          className={`h-5 w-5 shrink-0 transform transition-transform duration-300 mt-1 ${
                            open ? 'rotate-180' : ''
                          }`}>
                          <Icon
                            icon='lucide:chevron-up'
                            width='20'
                            height='20'
                          />
                        </div>
                      </DisclosureButton>
                      <DisclosurePanel className='text-sm sm:text-base text-black/50 font-normal text-left pt-4 mt-4 sm:mt-6 border-t border-border'>
                        {item.answer}
                      </DisclosurePanel>
                    </div>
                  )}
                </Disclosure>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQ
