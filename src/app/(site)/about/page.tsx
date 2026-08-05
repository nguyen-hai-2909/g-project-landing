import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import PageHero from '@/app/components/SharedComponent/PageHero'

export const metadata: Metadata = {
  title: 'Về chúng tôi — G Project',
  description:
    'G Project là đối tác công nghệ B2B, đồng hành cùng doanh nghiệp trong hành trình chuyển đổi số.',
}

const values = [
  {
    title: 'Chất lượng',
    desc: 'Mỗi dự án đều được đầu tư tâm huyết, đúng tiến độ và vượt kỳ vọng của khách hàng.',
  },
  {
    title: 'Minh bạch',
    desc: 'Cập nhật tiến độ hàng tuần, báo giá rõ ràng, không phát sinh chi phí ẩn.',
  },
  {
    title: 'Đồng hành dài hạn',
    desc: 'Hỗ trợ bảo hành, bảo trì và nâng cấp hệ thống sau khi bàn giao.',
  },
]

export default function AboutPage() {
  return (
    <main>
      <PageHero
        title='Về G Project'
        description='Đối tác công nghệ tin cậy cho hành trình chuyển đổi số của doanh nghiệp Việt Nam.'
        breadcrumb='Về chúng tôi'
      />

      <section className='bg-white'>
        <div className='container mx-auto max-w-7xl px-4'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>
            <div>
              <p className='text-primary text-lg tracking-widest uppercase mb-4'>
                Câu chuyện của chúng tôi
              </p>
              <h2 className='mb-6'>
                Đồng hành cùng doanh nghiệp trên hành trình số hóa.
              </h2>
              <p className='text-lg text-black/60 mb-6'>
                G Project được thành lập với sứ mệnh giúp doanh nghiệp vừa và
                lớn tận dụng công nghệ một cách thực tiễn — không phức tạp hóa,
                không over-engineer, chỉ tập trung vào giải pháp hiệu quả và bền
                vững.
              </p>
              <p className='text-lg text-black/60 mb-8'>
                Với đội ngũ hơn 30 kỹ sư và chuyên gia tư vấn, chúng tôi đã triển
                khai 50+ dự án trong lĩnh vực bán lẻ, logistics, tài chính, giáo
                dục và sản xuất.
              </p>
              <Link
                href='/contact'
                className='inline-block bg-primary text-white text-lg font-semibold py-4 px-10 rounded-full hover:bg-darkmode transition-colors'>
                Liên hệ với chúng tôi
              </Link>
            </div>
            <div>
              <Image
                src='/images/team/team.webp'
                alt='Đội ngũ G Project'
                width={640}
                height={480}
                className='rounded-3xl w-full object-cover'
              />
            </div>
          </div>
        </div>
      </section>

      <section className='bg-grey'>
        <div className='container mx-auto max-w-7xl px-4'>
          <h2 className='text-center mb-14'>Giá trị cốt lõi</h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {values.map((item) => (
              <div
                key={item.title}
                className='bg-white rounded-3xl p-10 shadow-xl'>
                <h5 className='mb-4'>{item.title}</h5>
                <p className='text-lg text-black/60'>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
