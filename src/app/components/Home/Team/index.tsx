import React from 'react'
import Image from 'next/image'

const Team = () => {
  return (
    <section className='overflow-x-hidden'>
      <div className='container mx-auto max-w-7xl px-4 relative'>
        <h2 className='text-center max-w-5xl mx-auto'>
          Đội ngũ chuyên gia cam kết mang đến giải pháp tốt nhất cho bạn.
        </h2>
        <h5 className='font-medium text-center pt-6 sm:pt-10 text-black/50 max-w-3xl mx-auto text-base sm:text-xl'>
          Hơn 30 kỹ sư và chuyên gia tư vấn với kinh nghiệm triển khai dự án
          cho doanh nghiệp vừa và lớn.
        </h5>
        <div className='mt-8 sm:mt-12 lg:mt-16'>
          <Image
            src='/images/team/team.webp'
            alt='Đội ngũ G Project'
            height={684}
            width={1296}
            className='relative z-1 rounded-2xl sm:rounded-3xl w-full h-auto object-cover'
          />
        </div>
      </div>
    </section>
  )
}

export default Team
