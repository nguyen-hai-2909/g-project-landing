import { Metadata } from 'next'
import Link from 'next/link'
import PageHero from '@/app/components/SharedComponent/PageHero'

export const metadata: Metadata = {
  title: 'Dịch vụ — G Project',
  description:
    'Thiết kế app, website, hệ thống quản lý và tư vấn chuyển đổi số cho doanh nghiệp.',
}

const services = [
  {
    title: 'Thiết kế & phát triển App',
    desc: 'Ứng dụng iOS và Android (native hoặc cross-platform) — từ MVP đến sản phẩm quy mô lớn, tích hợp API, thanh toán và thông báo đẩy.',
    features: [
      'UI/UX chuyên nghiệp',
      'iOS & Android',
      'Tích hợp API',
      'App Store / Play Store',
    ],
  },
  {
    title: 'Website doanh nghiệp',
    desc: 'Landing page, website giới thiệu, cổng thông tin và thương mại điện tử — tối ưu SEO, tốc độ và trải nghiệm người dùng.',
    features: [
      'Responsive',
      'SEO-friendly',
      'CMS quản trị',
      'Tích hợp thanh toán',
    ],
  },
  {
    title: 'Hệ thống ERP / CRM',
    desc: 'Hệ thống quản lý nội bộ tùy chỉnh: kho, bán hàng, nhân sự, khách hàng — phù hợp quy trình thực tế của doanh nghiệp.',
    features: [
      'Tùy chỉnh quy trình',
      'Báo cáo & dashboard',
      'Phân quyền',
      'Tích hợp bên thứ 3',
    ],
  },
  {
    title: 'Tư vấn chuyển đổi số',
    desc: 'Đánh giá hiện trạng, lập lộ trình số hóa, lựa chọn công nghệ và hỗ trợ triển khai từng giai đoạn.',
    features: [
      'Khảo sát & audit',
      'Lộ trình CĐS',
      'Lựa chọn tech stack',
      'Đào tạo vận hành',
    ],
  },
]

const packages = [
  {
    name: 'Khởi đầu',
    price: 5,
    unit: 'triệu VNĐ / dự án',
    popular: false,
    items: [
      'Website landing page',
      'Thiết kế UI/UX cơ bản',
      'Responsive mobile',
      'Hỗ trợ 1 tháng',
      'Bàn giao source code',
    ],
  },
  {
    name: 'Doanh nghiệp',
    price: 15,
    unit: 'triệu VNĐ / dự án',
    popular: true,
    items: [
      'App + Website + Admin',
      'Thiết kế UI/UX chuyên nghiệp',
      'Tích hợp API & thanh toán',
      'Hỗ trợ 6 tháng',
      'Đào tạo vận hành',
    ],
  },
  {
    name: 'Enterprise',
    price: 30,
    unit: 'triệu VNĐ / dự án',
    popular: false,
    items: [
      'Hệ thống tùy chỉnh toàn diện',
      'Kiến trúc microservices',
      'DevOps & CI/CD',
      'Hỗ trợ 12 tháng',
      'Dedicated team & SLA',
    ],
  },
]

export default function ServicesPage() {
  return (
    <main>
      <PageHero
        title='Dịch vụ của chúng tôi'
        description='Từ ý tưởng đến sản phẩm hoàn chỉnh — thiết kế app, website, hệ thống và tư vấn chuyển đổi số.'
        breadcrumb='Dịch vụ'
      />

      <section className='bg-white'>
        <div className='container mx-auto max-w-7xl px-4'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8'>
            {services.map((s) => (
              <div
                key={s.title}
                className='border border-border rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 hover:shadow-xl transition-shadow'>
                <h4 className='mb-3 sm:mb-4'>{s.title}</h4>
                <p className='text-base sm:text-lg text-black/60 mb-5'>
                  {s.desc}
                </p>
                <ul className='space-y-2'>
                  {s.features.map((f) => (
                    <li
                      key={f}
                      className='flex items-center gap-3 text-black/80 text-sm sm:text-base'>
                      <span className='w-2 h-2 rounded-full bg-primary shrink-0' />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className='bg-grey' id='packages'>
        <div className='container mx-auto max-w-7xl px-4'>
          <div className='text-center max-w-2xl mx-auto mb-10 sm:mb-14'>
            <p className='text-primary text-sm tracking-widest uppercase font-semibold mb-3'>
              Báo giá
            </p>
            <h2 className='mb-4'>Gói dịch vụ</h2>
            <p className='text-black/50 text-base sm:text-lg'>
              Giá tham khảo theo dự án. Liên hệ để nhận báo giá chi tiết.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch'>
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`relative flex flex-col rounded-3xl p-7 sm:p-9 text-center ${
                  pkg.popular
                    ? 'bg-darkmode text-white shadow-xl md:-translate-y-2'
                    : 'bg-white border border-border shadow-manage-shadow'
                }`}>
                {pkg.popular && (
                  <span className='absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold tracking-wide uppercase px-4 py-1.5 rounded-full'>
                    Phổ biến nhất
                  </span>
                )}
                <h5 className={`mb-5 ${pkg.popular ? 'text-white' : ''}`}>
                  {pkg.name}
                </h5>
                <p
                  className={`text-sm mb-1 ${
                    pkg.popular ? 'text-white/70' : 'text-black/50'
                  }`}>
                  từ
                </p>
                <p
                  className={`text-5xl sm:text-6xl font-extrabold mb-2 leading-none ${
                    pkg.popular ? 'text-white' : 'text-black'
                  }`}>
                  {pkg.price}
                </p>
                <p
                  className={`text-sm font-medium mb-7 ${
                    pkg.popular ? 'text-white/70' : 'text-black/50'
                  }`}>
                  {pkg.unit}
                </p>
                <Link href='/contact' className='mb-8'>
                  <span
                    className={`inline-flex w-full justify-center text-sm font-bold rounded-full py-3.5 px-8 transition-colors ${
                      pkg.popular
                        ? 'bg-primary text-white hover:bg-white hover:text-darkmode'
                        : 'text-primary border-2 border-primary hover:bg-primary hover:text-white'
                    }`}>
                    Nhận báo giá
                  </span>
                </Link>
                <ul className='space-y-3 text-left mt-auto'>
                  {pkg.items.map((item) => (
                    <li
                      key={item}
                      className={`flex items-start gap-3 text-sm font-medium ${
                        pkg.popular ? 'text-white/85' : 'text-black/60'
                      }`}>
                      <span className='mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0' />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
