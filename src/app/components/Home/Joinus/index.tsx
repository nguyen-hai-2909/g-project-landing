'use client'
import React from 'react'
import Link from 'next/link'

const Join = () => {
  return (
    <section id='Contact' className='overflow-hidden bg-joinus'>
      <div className='container mx-auto max-w-7xl px-4'>
        <div className='text-center'>
          <p className='text-primary text-sm sm:text-lg font-normal tracking-widest uppercase'>
            Liên hệ
          </p>
          <h2 className='my-4 sm:my-6'>Sẵn sàng bắt đầu dự án của bạn?</h2>
          <p className='text-black/50 text-sm sm:text-base font-normal max-w-3xl mx-auto'>
            Để lại thông tin, đội ngũ G Project sẽ liên hệ tư vấn miễn phí trong
            vòng 24 giờ.
          </p>
        </div>

        <div className='mx-auto max-w-4xl pt-6 sm:pt-8 text-center'>
          <Link
            href='/contact'
            className='inline-flex w-full sm:w-auto justify-center text-base sm:text-xl text-white font-semibold rounded-full bg-primary py-3.5 sm:py-5 px-8 sm:px-12 hover:bg-darkmode duration-300'>
            Đến trang liên hệ
          </Link>
        </div>
      </div>
    </section>
  )
}
export default Join
