import { Metadata } from 'next'
import Link from 'next/link'
import PageHero from '@/app/components/SharedComponent/PageHero'

export const metadata: Metadata = {
  title: 'Dự án — G Project',
  description: 'Các dự án G Project đã triển khai.',
}

const projects = [
  {
    name: 'Hồ sơ sức khỏe điện tử Hà Nội',
    short: 'HSSK Hà Nội',
    desc: 'Hệ thống Hồ sơ sức khỏe điện tử Thành phố Hà Nội',
  },
  {
    name: 'DNP Water',
    short: 'DNP Water',
    desc: 'Giải pháp quản lý nước và hạ tầng SWM',
  },
  {
    name: 'Tiên Rồng',
    short: 'Tiên Rồng',
    desc: 'Ứng dụng đặt xe ghép, xe sân bay và dịch vụ vận chuyển',
  },
  {
    name: 'Fordeer Commerce',
    short: 'Fordeer',
    desc: 'Nền tảng thương mại điện tử & Fordeer Journal',
  },
]

export default function ProjectsPage() {
  return (
    <main>
      <PageHero
        title='Dự án đã triển khai'
        description='Một số dự án tiêu biểu G Project đã hoàn thành và đưa vào vận hành.'
        breadcrumb='Dự án'
      />

      <section className='bg-white'>
        <div className='container mx-auto max-w-7xl px-4'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            {projects.map((p) => (
              <article
                key={p.name}
                className='rounded-3xl border border-border p-10'>
                <p className='text-primary text-sm font-semibold tracking-widest uppercase mb-3'>
                  {p.short}
                </p>
                <h4 className='mb-3'>{p.name}</h4>
                <p className='text-black/60 text-lg'>{p.desc}</p>
              </article>
            ))}
          </div>

          <div className='text-center mt-16'>
            <p className='text-lg text-black/50 mb-6'>
              Có dự án tương tự? Hãy để chúng tôi tư vấn miễn phí.
            </p>
            <Link
              href='/contact'
              className='inline-block bg-primary text-white text-lg font-semibold py-4 px-10 rounded-full hover:bg-darkmode transition-colors'>
              Liên hệ tư vấn
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
