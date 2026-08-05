import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import PageHero from '@/app/components/SharedComponent/PageHero'

export const metadata: Metadata = {
  title: 'Blog — G Project',
  description:
    'Bài viết về chuyển đổi số, phát triển phần mềm và xu hướng công nghệ từ G Project.',
}

const posts = [
  {
    slug: 'xu-huong-chuyen-doi-so-2026',
    time: '5 phút',
    heading: '5 xu hướng chuyển đổi số',
    heading2: 'doanh nghiệp cần biết năm 2026',
    date: '15 tháng 1, 2026',
    img: '/images/articles/article.png',
  },
  {
    slug: 'chon-doi-tac-phat-trien-phan-mem',
    time: '8 phút',
    heading: 'Làm sao chọn đối tác',
    heading2: 'phát triển phần mềm phù hợp?',
    date: '8 tháng 1, 2026',
    img: '/images/articles/article2.png',
  },
  {
    slug: 'tu-y-tuong-den-mvp',
    time: '6 phút',
    heading: 'Từ ý tưởng đến MVP:',
    heading2: 'Quy trình phát triển app hiệu quả',
    date: '2 tháng 1, 2026',
    img: '/images/articles/article3.png',
  },
  {
    slug: 'website-hay-app',
    time: '4 phút',
    heading: 'Website hay App?',
    heading2: 'Nên bắt đầu từ đâu cho doanh nghiệp',
    date: '20 tháng 12, 2025',
    img: '/images/articles/article.png',
  },
  {
    slug: 'bao-mat-du-lieu-doanh-nghiep',
    time: '7 phút',
    heading: 'Bảo mật dữ liệu',
    heading2: 'trong hệ thống doanh nghiệp',
    date: '10 tháng 12, 2025',
    img: '/images/articles/article2.png',
  },
  {
    slug: 'case-study-ecommerce',
    time: '5 phút',
    heading: 'Case study: E-commerce',
    heading2: 'tăng 200% doanh thu online',
    date: '1 tháng 12, 2025',
    img: '/images/articles/article3.png',
  },
]

export default function BlogPage() {
  return (
    <main>
      <PageHero
        title='Blog & bài viết'
        description='Chia sẻ kiến thức về chuyển đổi số, phát triển sản phẩm và xu hướng công nghệ.'
        breadcrumb='Blog'
      />

      <section className='bg-grey'>
        <div className='container mx-auto max-w-7xl px-4'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {posts.map((post) => (
              <article
                key={post.slug}
                className='bg-white px-3 pt-3 pb-10 shadow-lg rounded-4xl relative'>
                <Image
                  src={post.img}
                  alt={post.heading}
                  width={389}
                  height={262}
                  className='w-full rounded-3xl object-cover'
                />
                <span className='absolute text-base bg-primary text-white py-2 px-5 rounded-full top-52 right-8'>
                  {post.time} đọc
                </span>
                <div className='px-4'>
                  <h5 className='font-bold pt-8'>{post.heading}</h5>
                  <h5 className='font-bold pt-1'>{post.heading2}</h5>
                  <p className='text-sm font-normal pt-4 text-black/60'>
                    Đăng bởi G Project Team
                  </p>
                  <p className='text-sm font-normal pt-1 text-black/60'>
                    {post.date}
                  </p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className='inline-block mt-4 text-primary font-semibold hover:underline'>
                    Đọc tiếp →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
