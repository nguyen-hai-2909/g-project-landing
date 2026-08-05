'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Digital = () => {
  return (
    <section className='relative bg-cover bg-center overflow-hidden'>
      <div className='container mx-auto max-w-7xl px-4'>
        <div className="rounded-2xl sm:rounded-3xl bg-primary bg-[url('/images/digital/bg.svg')] bg-no-repeat bg-right-top pb-14 sm:pb-20 lg:pb-28 relative overflow-hidden">
          <div className='pt-12 sm:pt-16 lg:pt-20 px-6 sm:px-10 lg:pl-20 xl:max-w-[55%]'>
            <p className='text-sm sm:text-lg font-normal text-white mb-4 sm:mb-5 tracking-widest text-center lg:text-start uppercase'>
              Chúng tôi là ai
            </p>
            <h2 className='text-white mb-6 sm:mb-8 leading-tight text-center lg:text-start'>
              Đối tác công nghệ tin cậy cho hành trình chuyển đổi số.
            </h2>
            <div className='text-center lg:text-start'>
              <Link
                href='/about'
                className='inline-flex text-base sm:text-lg lg:text-xl font-semibold text-white bg-deep-slate/80 hover:bg-deep-slate py-3.5 sm:py-4 px-8 sm:px-12 rounded-full'>
                Tìm hiểu thêm
              </Link>
            </div>
          </div>
          <div className='absolute -bottom-16 -right-20 xl:block hidden pointer-events-none'>
            <Image
              src='/images/digital/girldoodle.svg'
              alt=''
              width={815}
              height={691}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
export default Digital
