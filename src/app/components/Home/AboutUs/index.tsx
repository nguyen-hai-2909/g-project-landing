'use client'
import Link from 'next/link'
import Image from 'next/image'
import { Icon } from '@iconify/react'
import { Aboutdata } from '@/data/site'

const Aboutus = () => {
  return (
    <section id='About' className='bg-cover bg-center overflow-hidden'>
      <div className='container mx-auto max-w-7xl px-4 relative z-1'>
        <div className='p-6 sm:p-10 lg:p-12 bg-grey rounded-2xl sm:rounded-3xl'>
          <Image
            src='/images/aboutus/dots.svg'
            width={100}
            height={100}
            alt='dots-image'
            className='absolute bottom-1 -left-20 hidden lg:block'
          />
          <p className='text-center text-primary text-sm sm:text-lg tracking-widest uppercase mt-4 sm:mt-10'>
            về chúng tôi
          </p>
          <h2 className='text-center pb-8 sm:pb-12'>
            Tìm hiểu thêm về G Project.
          </h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 mt-6 sm:mt-10'>
            {Aboutdata.map((item, i) => (
              <div
                key={i}
                className='hover:bg-darkmode bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl group'>
                <h5 className='group-hover:text-white mb-4 sm:mb-5'>
                  {item.heading}
                </h5>
                <Image
                  src={item.imgSrc}
                  alt={item.heading}
                  width={100}
                  height={100}
                  className='mb-4 sm:mb-5'
                />
                <p className='text-base sm:text-lg font-normal text-black group-hover:text-white mb-4 sm:mb-5'>
                  {item.paragraph}
                </p>
                <Link
                  href={item.href}
                  className='text-base font-semibold text-primary hover-underline flex items-center'>
                  {item.link}
                  <Icon icon='tabler:chevron-right' width='20' height='20' />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Aboutus
