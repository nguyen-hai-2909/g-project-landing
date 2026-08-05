import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import PageHero from '@/app/components/SharedComponent/PageHero'

const posts: Record<
  string,
  {
    title: string
    subtitle: string
    date: string
    time: string
    img: string
    content: string[]
  }
> = {
  'xu-huong-chuyen-doi-so-2026': {
    title: '5 xu hướng chuyển đổi số',
    subtitle: 'doanh nghiệp cần biết năm 2026',
    date: '15 tháng 1, 2026',
    time: '5 phút',
    img: '/images/articles/article.png',
    content: [
      'Chuyển đổi số không còn là lựa chọn — đó là điều kiện để doanh nghiệp cạnh tranh. Năm 2026, một số xu hướng đang định hình rõ hơn.',
      'Thứ nhất, AI được tích hợp vào quy trình vận hành hàng ngày: chăm sóc khách hàng, phân tích dữ liệu và tự động hóa báo cáo.',
      'Thứ hai, doanh nghiệp ưu tiên nền tảng cloud và hệ thống linh hoạt thay vì phần mềm đóng kín.',
      'Thứ ba, trải nghiệm khách hàng đa kênh (omnichannel) trở thành chuẩn mực — website, app và offline phải liền mạch.',
      'Thứ tư, bảo mật dữ liệu và tuân thủ quy định được đầu tư ngang tầm với tính năng sản phẩm.',
      'Thứ năm, đo lường ROI của từng sáng kiến số hóa giúp lãnh đạo quyết định đầu tư đúng chỗ.',
    ],
  },
  'chon-doi-tac-phat-trien-phan-mem': {
    title: 'Làm sao chọn đối tác',
    subtitle: 'phát triển phần mềm phù hợp?',
    date: '8 tháng 1, 2026',
    time: '8 phút',
    img: '/images/articles/article2.png',
    content: [
      'Chọn đúng đối tác phát triển phần mềm quyết định phần lớn thành công của dự án số hóa.',
      'Hãy xem xét kinh nghiệm ngành: đối tác từng làm retail, fintech hay logistics sẽ hiểu nhanh hơn yêu cầu của bạn.',
      'Yêu cầu minh bạch về quy trình, milestone và cách báo cáo tiến độ — tránh những cam kết mơ hồ.',
      'Kiểm tra portfolio và hỏi tham chiếu từ khách hàng cũ. Một cuộc gọi ngắn thường tiết lộ nhiều hơn slide đẹp.',
      'Cuối cùng, ưu tiên đội ngũ sẵn sàng đồng hành sau bàn giao: bảo hành, bảo trì và nâng cấp dài hạn.',
    ],
  },
  'tu-y-tuong-den-mvp': {
    title: 'Từ ý tưởng đến MVP:',
    subtitle: 'Quy trình phát triển app hiệu quả',
    date: '2 tháng 1, 2026',
    time: '6 phút',
    img: '/images/articles/article3.png',
    content: [
      'MVP (Minimum Viable Product) giúp bạn kiểm chứng ý tưởng nhanh với chi phí hợp lý trước khi mở rộng.',
      'Bắt đầu bằng việc xác định vấn đề cốt lõi và một nhóm người dùng mục tiêu rõ ràng.',
      'Thiết kế UI/UX tập trung vào luồng chính — bỏ qua tính năng “hay nhưng chưa cần”.',
      'Phát triển theo sprint ngắn, demo thường xuyên để nhận feedback sớm.',
      'Sau khi ra mắt MVP, đo lường hành vi người dùng rồi mới quyết định tính năng tiếp theo.',
    ],
  },
  'website-hay-app': {
    title: 'Website hay App?',
    subtitle: 'Nên bắt đầu từ đâu cho doanh nghiệp',
    date: '20 tháng 12, 2025',
    time: '4 phút',
    img: '/images/articles/article.png',
    content: [
      'Nhiều doanh nghiệp phân vân giữa website và app khi mới bắt đầu số hóa.',
      'Website phù hợp khi cần hiện diện thương hiệu, SEO, bán hàng online hoặc quy trình đơn giản trên trình duyệt.',
      'App phù hợp khi cần trải nghiệm thường xuyên, thông báo đẩy, offline hoặc tính năng gắn sâu với thiết bị.',
      'Với ngân sách hạn chế, thường nên bắt đầu bằng website hoặc PWA, rồi mở rộng app khi đã có người dùng trung thành.',
      'G Project sẽ giúp bạn đánh giá nhu cầu thực tế trước khi chọn hướng đầu tư.',
    ],
  },
  'bao-mat-du-lieu-doanh-nghiep': {
    title: 'Bảo mật dữ liệu',
    subtitle: 'trong hệ thống doanh nghiệp',
    date: '10 tháng 12, 2025',
    time: '7 phút',
    img: '/images/articles/article2.png',
    content: [
      'Dữ liệu là tài sản — mất mát hoặc lộ lọt có thể ảnh hưởng uy tín và hoạt động kinh doanh.',
      'Áp dụng phân quyền theo vai trò (RBAC), mã hóa dữ liệu nhạy cảm và ghi nhật ký truy cập.',
      'Sao lưu định kỳ và có kế hoạch phục hồi thảm họa (disaster recovery).',
      'Đào tạo nhân viên về phishing và mật khẩu mạnh — lỗ hổng con người thường lớn hơn lỗ hổng kỹ thuật.',
      'Khi thuê đối tác phát triển, hãy yêu cầu tuân thủ chuẩn bảo mật ngay từ giai đoạn thiết kế.',
    ],
  },
  'case-study-ecommerce': {
    title: 'Case study: E-commerce',
    subtitle: 'tăng 200% doanh thu online',
    date: '1 tháng 12, 2025',
    time: '5 phút',
    img: '/images/articles/article3.png',
    content: [
      'Một khách hàng bán lẻ của G Project muốn mở rộng kênh online nhưng hệ thống cũ chậm và khó quản lý.',
      'Chúng tôi xây dựng website thương mại điện tử mới, tối ưu tốc độ, UX và tích hợp quản lý kho – đơn hàng.',
      'Sau 6 tháng vận hành, doanh thu online tăng khoảng 200% so với cùng kỳ, tỷ lệ bỏ giỏ hàng giảm rõ rệt.',
      'Bài học: đầu tư đúng vào trải nghiệm mua hàng và vận hành hậu đài mang lại ROI nhanh hơn quảng cáo đơn thuần.',
    ],
  },
}

type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = posts[slug]
  if (!post) return { title: 'Bài viết — G Project' }
  return {
    title: `${post.title} ${post.subtitle} — G Project`,
    description: post.content[0],
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = posts[slug]
  if (!post) notFound()

  return (
    <main>
      <PageHero
        title={`${post.title} ${post.subtitle}`}
        description={`${post.date} · ${post.time} đọc`}
        breadcrumb='Blog'
      />

      <section className='bg-white'>
        <div className='container mx-auto max-w-3xl px-4'>
          <Image
            src={post.img}
            alt={post.title}
            width={800}
            height={450}
            className='w-full rounded-3xl mb-10 object-cover'
          />
          <div className='space-y-6'>
            {post.content.map((paragraph, i) => (
              <p key={i} className='text-lg text-black/70 leading-relaxed'>
                {paragraph}
              </p>
            ))}
          </div>
          <div className='mt-12 pt-8 border-t border-border flex flex-wrap gap-4 justify-between items-center'>
            <Link
              href='/blog'
              className='text-primary font-semibold hover:underline'>
              ← Quay lại Blog
            </Link>
            <Link
              href='/contact'
              className='bg-primary text-white font-semibold py-3 px-8 rounded-full hover:bg-darkmode transition-colors'>
              Liên hệ tư vấn
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
