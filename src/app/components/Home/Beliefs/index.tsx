'use client'
import React from 'react'
import Link from 'next/link'

const Beliefs = () => {
  return (
    <section className='bg-cover bg-center overflow-hidden'>
      <div className='container mx-auto max-w-7xl px-4'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
          <div className="bg-purple pt-10 sm:pt-12 px-6 sm:px-10 lg:px-16 pb-16 sm:pb-24 rounded-2xl sm:rounded-3xl bg-[url('/images/beliefs/swirls.svg')] bg-no-repeat bg-right-bottom bg-contain sm:bg-auto">
            <p className='text-sm sm:text-lg font-normal text-white tracking-widest mb-4 sm:mb-5 text-center sm:text-start uppercase'>
              Giá trị cốt lõi
            </p>
            <h3 className='text-white mb-4 sm:mb-5 text-center sm:text-start'>
              Chất lượng{' '}
              <span className='text-white/60'>
                và cam kết là kim chỉ nam của chúng tôi.
              </span>
            </h3>
            <p className='text-base sm:text-lg text-white/75 pt-2 mb-8 sm:mb-12 text-center sm:text-start'>
              Mỗi dự án đều được đầu tư tâm huyết, đúng tiến độ và vượt kỳ vọng
              của khách hàng.
            </p>
            <div className='text-center sm:text-start'>
              <Link
                href='/contact'
                className='inline-flex text-base sm:text-lg py-3.5 sm:py-4 px-8 sm:px-12 font-semibold text-white rounded-full duration-300 bg-primary border border-primary hover:bg-darkmode hover:border-darkmode'>
                Liên hệ ngay
              </Link>
            </div>
          </div>

          <div className="bg-[#D6FFEB] pt-10 sm:pt-12 px-6 sm:px-10 lg:px-16 pb-16 sm:pb-24 rounded-2xl sm:rounded-3xl bg-[url('/images/beliefs/bg.svg')] bg-no-repeat bg-bottom bg-contain sm:bg-auto">
            <p className='text-sm sm:text-lg font-normal text-primary tracking-widest mb-4 sm:mb-5 text-center sm:text-start uppercase'>
              XÂY DỰNG
            </p>
            <h3 className='text-black mb-4 sm:mb-5 text-center sm:text-start'>
              <span className='text-primary'>Biến ý tưởng</span> của bạn thành
              sản phẩm thực tế.
            </h3>
            <p className='pt-2 mb-8 sm:mb-12 text-center sm:text-start text-black/75 text-base sm:text-lg'>
              Từ thiết kế UI/UX, phát triển app/website đến triển khai hệ thống
              — chúng tôi lo tất cả.
            </p>
            <div className='text-center sm:text-start'>
              <Link
                href='/services'
                className='inline-flex text-base sm:text-lg py-3.5 sm:py-4 px-8 sm:px-12 font-semibold text-white rounded-full bg-primary border border-primary hover:bg-darkmode hover:border-darkmode'>
                Xem dịch vụ
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Beliefs
