'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import Slider from 'react-slick'
import Link from 'next/link'
import { articles } from '@/app/types/articles'
import ArticlesSkeleton from '../../Skeleton/Articles'

const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 2,
  arrows: false,
  autoplay: false,
  speed: 500,
  cssEase: 'linear',
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      },
    },
  ],
}

const Articles = () => {
  // fetch data

  const [articles, setArticles] = useState<articles[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/data')
        if (!res.ok) throw new Error('Failed to fetch')
        const data = await res.json()
        setArticles(data.ArticlesData)
      } catch (error) {
        console.error('Error fetching services:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  return (
    <section id='Blog' className='relative bg-grey overflow-hidden'>
      <div className='container mx-auto max-w-7xl px-4 relative'>
          <div className='text-center'>
            <p className='text-primary text-xl font-normal tracking-widest'>
              BÀI VIẾT
            </p>
            <h2>Bài viết mới nhất.</h2>
            <Link
              href='/blog'
              className='inline-block text-primary font-semibold hover:underline mt-2'>
              Xem tất cả bài viết →
            </Link>
          </div>

        <Slider {...settings}>
          {loading
            ? Array.from({ length: 3 }).map((_, i) => (
                <ArticlesSkeleton key={i} />
              ))
            : articles.map((items, i) => (
                <div key={i}>
                  <div className='bg-white m-3 px-3 pt-3 pb-8 sm:pb-12 my-6 sm:my-10 shadow-lg rounded-3xl relative'>
                    <Image
                      src={items.imgSrc}
                      alt={items.heading}
                      width={389}
                      height={262}
                      className='w-full rounded-2xl sm:rounded-3xl object-cover'
                    />
                    <Link
                      href={`/blog/${items.slug}`}
                      className='absolute text-xs sm:text-sm bg-primary text-white hover:bg-black py-2 px-4 sm:py-3 sm:px-6 rounded-full top-4 right-6 sm:top-56 sm:right-11'>
                      {items.time} đọc
                    </Link>
                    <div className='px-1 sm:px-2'>
                      <h5 className='font-bold pt-5 sm:pt-6'>{items.heading}</h5>
                      <h5 className='font-bold pt-1'>{items.heading2}</h5>
                      <p className='text-sm font-normal pt-4 pb-1 text-black/75'>
                        {items.name}
                      </p>
                      <p className='text-sm font-normal pb-1 text-black/75'>
                        {items.date}
                      </p>
                      <Link
                        href={`/blog/${items.slug}`}
                        className='inline-block mt-3 text-primary font-semibold hover:underline'>
                        Đọc tiếp →
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
        </Slider>
      </div>
    </section>
  )
}
export default Articles
