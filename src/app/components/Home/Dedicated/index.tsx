'use client'
import React from 'react'
import Image from 'next/image'

const Dedicated = () => {
  return (
    <section className='relative bg-cover bg-center overflow-hidden'>
      <div className='container mx-auto max-w-7xl px-4'>
        <Image
          src='/images/dedicated/spiral.svg'
          height={272}
          width={686}
          alt=''
          className='absolute left-0 top-0 hidden lg:block -z-10'
        />
        <div className='relative max-w-3xl mx-auto text-center'>
          <Image
            src='/images/dedicated/comma.svg'
            alt=''
            width={160}
            height={85}
            className='absolute -top-10 left-1/2 -translate-x-1/2 opacity-30 w-16 sm:w-24 h-auto pointer-events-none'
          />
          <h2 className='leading-tight'>
            &ldquo;Đồng hành cùng doanh nghiệp trên hành trình số hóa.&rdquo;
          </h2>
          <p className='text-base sm:text-lg lg:text-xl font-medium text-black/55 mt-5 mx-auto'>
            Chúng tôi tin rằng công nghệ phải phục vụ mục tiêu kinh doanh thực
            tế — giải pháp đơn giản, hiệu quả và bền vững.
          </p>
          <h5 className='mt-8 sm:mt-10 inline-block relative before:absolute before:bg-black before:h-0.5 before:w-12 before:-left-16 before:top-1/2 before:-translate-y-1/2 after:absolute after:bg-black after:h-0.5 after:w-12 after:-right-16 after:top-1/2 after:-translate-y-1/2 before:hidden sm:before:block after:hidden sm:after:block'>
            Phạm Công Giang, CEO
          </h5>
        </div>
      </div>
    </section>
  )
}
export default Dedicated
