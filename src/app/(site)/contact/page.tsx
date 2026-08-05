'use client'

import { useState, FormEvent } from 'react'
import PageHero from '@/app/components/SharedComponent/PageHero'

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <main>
      <PageHero
        title='Liên hệ với chúng tôi'
        description='Để lại thông tin, đội ngũ G Project sẽ liên hệ tư vấn miễn phí trong vòng 24 giờ.'
        breadcrumb='Liên hệ'
      />

      <section className='bg-white'>
        <div className='container mx-auto max-w-7xl px-4'>
          <div className='grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12'>
            <div className='lg:col-span-2 space-y-6 sm:space-y-8'>
              <div>
                <h5 className='mb-2'>Email</h5>
                <a
                  href='mailto:giangpc727@gmail.com'
                  className='text-base sm:text-lg text-primary hover:underline break-all'>
                  giangpc727@gmail.com
                </a>
              </div>
              <div>
                <h5 className='mb-2'>Điện thoại / Zalo</h5>
                <a
                  href='tel:+84346980569'
                  className='text-base sm:text-lg text-primary hover:underline'>
                  0346 980 569
                </a>
              </div>
              <div>
                <h5 className='mb-2'>Địa chỉ</h5>
                <p className='text-base sm:text-lg text-black/60'>
                  513 nhà tập thể H9, Ng. 475 Đ. Nguyễn Trãi, Thanh Liệt, Hà Nội
                </p>
              </div>
              <div>
                <h5 className='mb-2'>Giờ làm việc</h5>
                <p className='text-base sm:text-lg text-black/60'>
                  Thứ 2 – Thứ 6: 8:30 – 17:30
                </p>
              </div>
            </div>

            <div className='lg:col-span-3'>
              {submitted ? (
                <div className='bg-grey rounded-2xl sm:rounded-3xl p-8 sm:p-12 text-center'>
                  <h3 className='mb-4'>Cảm ơn bạn đã liên hệ!</h3>
                  <p className='text-base sm:text-lg text-black/60'>
                    Chúng tôi đã nhận được thông tin và sẽ phản hồi trong vòng
                    24 giờ.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className='bg-grey rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 space-y-5 sm:space-y-6'>
                  <div>
                    <label
                      htmlFor='name'
                      className='block text-sm font-semibold mb-2'>
                      Họ và tên *
                    </label>
                    <input
                      id='name'
                      name='name'
                      type='text'
                      required
                      className='w-full rounded-xl border border-border bg-white px-5 py-4 text-lg focus:outline-none focus:border-primary'
                      placeholder='Nguyễn Văn A'
                    />
                  </div>
                  <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
                    <div>
                      <label
                        htmlFor='email'
                        className='block text-sm font-semibold mb-2'>
                        Email *
                      </label>
                      <input
                        id='email'
                        name='email'
                        type='email'
                        required
                        className='w-full rounded-xl border border-border bg-white px-5 py-4 text-lg focus:outline-none focus:border-primary'
                        placeholder='email@congty.vn'
                      />
                    </div>
                    <div>
                      <label
                        htmlFor='phone'
                        className='block text-sm font-semibold mb-2'>
                        Số điện thoại
                      </label>
                      <input
                        id='phone'
                        name='phone'
                        type='tel'
                        className='w-full rounded-xl border border-border bg-white px-5 py-4 text-lg focus:outline-none focus:border-primary'
                        placeholder='0346 980 569'
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor='service'
                      className='block text-sm font-semibold mb-2'>
                      Dịch vụ quan tâm
                    </label>
                    <select
                      id='service'
                      name='service'
                      className='w-full rounded-xl border border-border bg-white px-5 py-4 text-lg focus:outline-none focus:border-primary'>
                      <option value=''>Chọn dịch vụ</option>
                      <option value='app'>Thiết kế & phát triển App</option>
                      <option value='website'>Website doanh nghiệp</option>
                      <option value='erp'>Hệ thống ERP / CRM</option>
                      <option value='consulting'>Tư vấn chuyển đổi số</option>
                      <option value='other'>Khác</option>
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor='message'
                      className='block text-sm font-semibold mb-2'>
                      Nội dung *
                    </label>
                    <textarea
                      id='message'
                      name='message'
                      required
                      rows={5}
                      className='w-full rounded-xl border border-border bg-white px-5 py-4 text-lg focus:outline-none focus:border-primary resize-none'
                      placeholder='Mô tả ngắn về dự án hoặc nhu cầu của bạn...'
                    />
                  </div>
                  <button
                    type='submit'
                    className='w-full sm:w-auto bg-primary text-white text-lg font-semibold py-4 px-12 rounded-full hover:bg-darkmode transition-colors cursor-pointer'>
                    Gửi yêu cầu
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
