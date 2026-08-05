import { HeaderItem } from '@/app/types/menu'
import { aboutdata } from '@/app/types/aboutdata'
import { workdata } from '@/app/types/workdata'
import { featureddata } from '@/app/types/featureddata'
import { testimonials } from '@/app/types/testimonials'
import { articles } from '@/app/types/articles'
import { footerlinks } from '@/app/types/footerlinks'

export const headerData: HeaderItem[] = [
  { label: 'Về chúng tôi', href: '/about' },
  { label: 'Dịch vụ', href: '/services' },
  { label: 'Dự án', href: '/projects' },
  { label: 'FAQ', href: '/faq' },
]

export const Aboutdata: aboutdata[] = [
  {
    heading: 'Về chúng tôi.',
    imgSrc: '/images/aboutus/imgOne.svg',
    paragraph:
      'G Project là đối tác công nghệ B2B, đồng hành cùng doanh nghiệp trong hành trình chuyển đổi số với giải pháp thực tiễn và hiệu quả.',
    link: 'Tìm hiểu thêm',
    href: '/about',
  },
  {
    heading: 'Dịch vụ.',
    imgSrc: '/images/aboutus/imgTwo.svg',
    paragraph:
      'Thiết kế app, website, hệ thống quản lý và tích hợp công nghệ — từ ý tưởng đến sản phẩm hoàn chỉnh, sẵn sàng vận hành.',
    link: 'Xem dịch vụ',
    href: '/services',
  },
  {
    heading: 'Dự án.',
    imgSrc: '/images/aboutus/imgThree.svg',
    paragraph:
      'Hơn 50+ dự án đã triển khai cho doanh nghiệp vừa và lớn trong lĩnh vực bán lẻ, logistics, tài chính và giáo dục.',
    link: 'Xem dự án',
    href: '/projects',
  },
]

export const WorkData: workdata[] = [
  {
    profession: 'Y tế công',
    name: 'HSSK Hà Nội',
    imgSrc: '/images/wework/avatar.svg',
  },
  {
    profession: 'Cấp nước',
    name: 'DNP Water',
    imgSrc: '/images/wework/avatar3.svg',
  },
  {
    profession: 'Vận tải',
    name: 'Tiên Rồng',
    imgSrc: '/images/wework/avatar4.svg',
  },
  {
    profession: 'E-commerce',
    name: 'Fordeer',
    imgSrc: '/images/wework/avatar2.svg',
  },
]

export const FeaturedData: featureddata[] = [
  {
    heading: 'Hệ thống quản lý kho & logistics cho doanh nghiệp vận tải.',
    imgSrc: '/images/featured/feat1.jpg',
  },
  {
    heading: 'Ứng dụng mobile banking & ví điện tử.',
    imgSrc: '/images/featured/feat2.jpg',
  },
  {
    heading: 'Website thương mại điện tử đa kênh.',
    imgSrc: '/images/featured/feat1.jpg',
  },
  {
    heading: 'Nền tảng LMS & quản lý đào tạo doanh nghiệp.',
    imgSrc: '/images/featured/feat2.jpg',
  },
]

export const PlansData = [
  {
    heading: 'Khởi đầu',
    price: {
      monthly: 5,
      yearly: 5,
    },
    user: 'triệu VNĐ / dự án',
    features: {
      profiles: 'Website landing page',
      posts: 'Thiết kế UI/UX cơ bản',
      templates: 'Responsive mobile',
      view: 'Hỗ trợ 1 tháng',
      support: 'Bàn giao source code',
    },
  },
  {
    heading: 'Doanh nghiệp',
    price: {
      monthly: 15,
      yearly: 15,
    },
    user: 'triệu VNĐ / dự án',
    features: {
      profiles: 'App + Website + Admin',
      posts: 'Thiết kế UI/UX chuyên nghiệp',
      templates: 'Tích hợp API & thanh toán',
      view: 'Hỗ trợ 6 tháng',
      support: 'Đào tạo vận hành',
    },
    popular: true,
  },
  {
    heading: 'Enterprise',
    price: {
      monthly: 30,
      yearly: 30,
    },
    user: 'triệu VNĐ / dự án',
    features: {
      profiles: 'Hệ thống tùy chỉnh toàn diện',
      posts: 'Kiến trúc microservices',
      templates: 'DevOps & CI/CD',
      view: 'Hỗ trợ 12 tháng',
      support: 'Dedicated team & SLA',
    },
  },
]

export const TestimonialsData: testimonials[] = [
  {
    name: 'Nguyễn Văn Minh',
    profession: 'CEO, TechRetail Vietnam',
    comment:
      'G Project đã giúp chúng tôi xây dựng hệ thống e-commerce hoàn chỉnh trong 3 tháng. Đội ngũ chuyên nghiệp, giao tiếp rõ ràng và đúng tiến độ.',
    imgSrc: '/images/testimonial/user1.svg',
    rating: 5,
  },
  {
    name: 'Trần Thị Hương',
    profession: 'CTO, LogiFast Corp',
    comment:
      'Giải pháp quản lý kho và vận chuyển của G Project giúp giảm 40% thời gian xử lý đơn hàng. Rất hài lòng với chất lượng sản phẩm.',
    imgSrc: '/images/testimonial/user2.svg',
    rating: 5,
  },
  {
    name: 'Lê Hoàng Nam',
    profession: 'Giám đốc, EduPro Academy',
    comment:
      'Nền tảng LMS được thiết kế đẹp, dễ sử dụng. Học viên và giảng viên đều phản hồi tích cực. Đối tác đáng tin cậy cho chuyển đổi số.',
    imgSrc: '/images/testimonial/user3.svg',
    rating: 5,
  },
  {
    name: 'Phạm Quốc Bảo',
    profession: 'Founder, FinPay Solutions',
    comment:
      'App mobile banking được phát triển đúng chuẩn bảo mật. G Project hiểu rõ yêu cầu ngành tài chính và triển khai rất chuyên nghiệp.',
    imgSrc: '/images/testimonial/user1.svg',
    rating: 5,
  },
  {
    name: 'Võ Thị Mai',
    profession: 'COO, HealthCare Plus',
    comment:
      'Hệ thống quản lý bệnh nhân và lịch hẹn hoạt động ổn định. Đội support phản hồi nhanh, luôn sẵn sàng hỗ trợ khi cần.',
    imgSrc: '/images/testimonial/user2.svg',
    rating: 5,
  },
  {
    name: 'Đặng Văn Tuấn',
    profession: 'Director, SmartFactory VN',
    comment:
      'Giải pháp IoT và giám sát sản xuất giúp tối ưu hóa quy trình. G Project là đối tác công nghệ lâu dài của chúng tôi.',
    imgSrc: '/images/testimonial/user3.svg',
    rating: 5,
  },
]

export const ArticlesData: articles[] = [
  {
    time: '5 phút',
    heading: '5 xu hướng chuyển đổi số',
    heading2: 'doanh nghiệp cần biết năm 2026',
    name: 'Đăng bởi G Project Team',
    date: '15 tháng 1, 2026',
    imgSrc: '/images/articles/article.png',
    slug: 'xu-huong-chuyen-doi-so-2026',
  },
  {
    time: '8 phút',
    heading: 'Làm sao chọn đối tác',
    heading2: 'phát triển phần mềm phù hợp?',
    name: 'Đăng bởi G Project Team',
    date: '8 tháng 1, 2026',
    imgSrc: '/images/articles/article2.png',
    slug: 'chon-doi-tac-phat-trien-phan-mem',
  },
  {
    time: '6 phút',
    heading: 'Từ ý tưởng đến MVP:',
    heading2: 'Quy trình phát triển app hiệu quả',
    name: 'Đăng bởi G Project Team',
    date: '2 tháng 1, 2026',
    imgSrc: '/images/articles/article3.png',
    slug: 'tu-y-tuong-den-mvp',
  },
  {
    time: '4 phút',
    heading: 'Website hay App?',
    heading2: 'Nên bắt đầu từ đâu cho doanh nghiệp',
    name: 'Đăng bởi G Project Team',
    date: '20 tháng 12, 2025',
    imgSrc: '/images/articles/article.png',
    slug: 'website-hay-app',
  },
  {
    time: '7 phút',
    heading: 'Bảo mật dữ liệu',
    heading2: 'trong hệ thống doanh nghiệp',
    name: 'Đăng bởi G Project Team',
    date: '10 tháng 12, 2025',
    imgSrc: '/images/articles/article2.png',
    slug: 'bao-mat-du-lieu-doanh-nghiep',
  },
  {
    time: '5 phút',
    heading: 'Case study: E-commerce',
    heading2: 'tăng 200% doanh thu online',
    name: 'Đăng bởi G Project Team',
    date: '1 tháng 12, 2025',
    imgSrc: '/images/articles/article3.png',
    slug: 'case-study-ecommerce',
  },
]

export const FooterLinksData: footerlinks[] = [
  {
    section: 'Menu',
    links: [
      { label: 'Về chúng tôi', href: '/about' },
      { label: 'Dịch vụ', href: '/services' },
      { label: 'Dự án', href: '/projects' },
      { label: 'FAQ', href: '/faq' },
    ],
  },
  {
    section: 'Dịch vụ',
    links: [
      { label: 'Thiết kế App', href: '/services' },
      { label: 'Website', href: '/services' },
      { label: 'Hệ thống ERP/CRM', href: '/services' },
      { label: 'Tư vấn CĐS', href: '/services' },
    ],
  },
  {
    section: 'Công ty',
    links: [
      { label: 'Liên hệ', href: '/contact' },
      { label: 'FAQ', href: '/faq' },
      { label: 'Dự án', href: '/projects' },
    ],
  },
  {
    section: 'Liên hệ',
    links: [
      { label: 'giangpc727@gmail.com', href: 'mailto:giangpc727@gmail.com' },
      { label: '0346 980 569 (Zalo)', href: 'tel:+84346980569' },
      {
        label: '513 H9, Ng. 475 Nguyễn Trãi, Thanh Liệt, Hà Nội',
        href: '/contact',
      },
    ],
  },
]
