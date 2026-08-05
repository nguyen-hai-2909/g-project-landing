'use client'
import Link from 'next/link'
import Image from 'next/image'

const Hero = () => {
  return (
    <section className='relative overflow-hidden z-1'>
      <div className='container mx-auto max-w-7xl px-4 pt-28 sm:pt-32 lg:pt-36 pb-8 sm:pb-12'>
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center'>
          <div className='lg:col-span-5 text-center lg:text-left'>
            <div className='py-1.5 px-4 sm:py-2 sm:px-5 bg-primary/15 rounded-full w-fit mx-auto lg:mx-0'>
              <p className='text-primary text-sm sm:text-base lg:text-lg font-bold'>
                CÔNG NGHỆ B2B
              </p>
            </div>
            <h1 className='mt-5 sm:mt-6'>
              Giải pháp chuyển đổi số cho doanh nghiệp của bạn.
            </h1>
            <p className='text-base sm:text-lg text-black/60 mt-4 sm:mt-6 max-w-lg mx-auto lg:mx-0'>
              Thiết kế app, website và hệ thống quản lý — từ ý tưởng đến sản
              phẩm hoàn chỉnh.
            </p>
            <Link
              href='/contact'
              className='inline-flex justify-center items-center bg-primary text-white text-base sm:text-lg lg:text-xl font-semibold py-3.5 sm:py-4 px-8 sm:px-12 rounded-full hover:bg-darkmode mt-8 sm:mt-10 w-full sm:w-auto'>
              Liên hệ tư vấn
            </Link>
          </div>

          <div className='lg:col-span-7'>
            <Image
              src='/images/hero/banner-image.png'
              alt='G Project — giải pháp chuyển đổi số'
              width={600}
              height={600}
              priority
              className='w-full max-w-md mx-auto lg:max-w-none'
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
