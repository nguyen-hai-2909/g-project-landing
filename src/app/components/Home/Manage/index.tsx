'use client'
import Image from 'next/image'
import Link from 'next/link'
import { PlansData } from '@/data/site'

const Manage = () => {
  return (
    <section id='services-section' className='bg-grey'>
      <div className='container mx-auto max-w-7xl px-4'>
        <div className='text-center max-w-3xl mx-auto'>
          <p className='text-primary text-sm sm:text-base tracking-widest uppercase font-semibold mb-3'>
            Báo giá
          </p>
          <h2>Gói dịch vụ rõ ràng, phù hợp mọi quy mô.</h2>
          <p className='text-black/55 text-base sm:text-lg mt-4'>
            Giá tham khảo theo dự án. Nhận báo giá chi tiết miễn phí sau khi
            khảo sát nhu cầu.
          </p>
        </div>

        <div className='flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-8 justify-center mt-8 sm:mt-10'>
          {['Tư vấn miễn phí', 'Bảo hành dài hạn', 'Bàn giao source code'].map(
            (label) => (
              <div
                key={label}
                className='flex gap-3 items-center justify-center'>
                <Image
                  src='/images/manage/right.svg'
                  alt=''
                  width={21}
                  height={14}
                />
                <p className='text-base sm:text-lg font-semibold'>{label}</p>
              </div>
            )
          )}
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mt-10 sm:mt-14 items-stretch'>
          {PlansData.map((items, i) => {
            const popular = items.popular || items.heading === 'Doanh nghiệp'
            return (
              <div
                key={i}
                className={`relative flex flex-col rounded-3xl p-7 sm:p-8 lg:p-9 text-center transition-shadow ${
                  popular
                    ? 'bg-darkmode text-white shadow-xl scale-[1.02] md:-translate-y-2'
                    : 'bg-white border border-border shadow-manage-shadow'
                }`}>
                {popular && (
                  <span className='absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold tracking-wide uppercase px-4 py-1.5 rounded-full'>
                    Phổ biến nhất
                  </span>
                )}
                <h5
                  className={`mb-5 ${popular ? 'text-white' : 'text-black'}`}>
                  {items.heading}
                </h5>
                <div className='mb-2'>
                  <span
                    className={`text-sm font-medium ${
                      popular ? 'text-white/70' : 'text-black/50'
                    }`}>
                    từ
                  </span>
                  <p
                    className={`text-5xl sm:text-6xl font-extrabold leading-none mt-1 ${
                      popular ? 'text-white' : 'text-black'
                    }`}>
                    {items.price.monthly}
                  </p>
                </div>
                <p
                  className={`text-sm font-medium mb-7 ${
                    popular ? 'text-white/70' : 'text-black/50'
                  }`}>
                  {items.user}
                </p>
                <Link href='/contact' className='mb-8'>
                  <button
                    className={`w-full text-sm font-bold rounded-full py-3.5 px-6 transition-colors cursor-pointer ${
                      popular
                        ? 'bg-primary text-white hover:bg-white hover:text-darkmode'
                        : 'text-primary border-2 border-primary bg-transparent hover:bg-primary hover:text-white'
                    }`}>
                    Nhận báo giá
                  </button>
                </Link>
                <ul className='space-y-3 text-left mt-auto'>
                  {Object.values(items.features).map((value, index) => (
                    <li
                      key={index}
                      className={`flex items-start gap-3 text-sm font-medium ${
                        popular ? 'text-white/85' : 'text-black/65'
                      }`}>
                      <span className='mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 bg-primary' />
                      {value}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Manage
