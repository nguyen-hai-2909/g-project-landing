'use client'
import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Image from 'next/image'
import Link from 'next/link'
import { FeaturedData } from '@/data/site'

function SampleNextArrow(props: { className: any; style: any; onClick: any }) {
  const { className, style, onClick } = props
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'black',
        padding: '28px',
        borderRadius: '20px',
      }}
      onClick={onClick}
    />
  )
}

function SamplePrevArrow(props: { className: any; style: any; onClick: any }) {
  const { className, style, onClick } = props
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'black',
        padding: '28px',
        borderRadius: '20px',
      }}
      onClick={onClick}
    />
  )
}
const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  arrows: false,
  autoplay: false,
  speed: 500,
  nextArrow: (
    <SampleNextArrow
      className={undefined}
      style={undefined}
      onClick={undefined}
    />
  ),
  prevArrow: (
    <SamplePrevArrow
      className={undefined}
      style={undefined}
      onClick={undefined}
    />
  ),
  cssEase: 'linear',
  responsive: [
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      },
    },
  ],
}

const Featured = () => {
  return (
    <section id='Projects' className="relative bg-deepSlate dark:bg-darkmode  after:absolute after:w-1/4 after:h-1/4 after:bg-[url('/images/wework/vector.svg')]  after:top-72 after:right-0 after:bg-no-repeat">
      <div className='container mx-auto max-w-7xl px-4 relative'>
        <div className='text-center overflow-hidden'>
          <h3 className='my-5'>Dự án tiêu biểu.</h3>
          <Link
            href='/projects'
            className='inline-block text-primary font-semibold hover:underline mb-8'>
            Xem tất cả dự án →
          </Link>
        </div>

        <Slider {...settings}>
          {FeaturedData.map((items, i) => (
            <div key={i}>
              <div className='bg-transparent m-3 rounded-3xl'>
                <Image
                  src={items.imgSrc}
                  alt={items.heading}
                  width={636}
                  height={620}
                  className='rounded-2xl'
                />
                <div>
                  <h4 className='max-w-sm font-bold text-center sm:text-start my-6 text-black'>
                    {items.heading}
                  </h4>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  )
}
export default Featured
