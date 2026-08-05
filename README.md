# G Project Landing Page

Landing page công ty công nghệ B2B — giải pháp chuyển đổi số, thiết kế app, website và hệ thống.

Dựa trên template [Desgy](https://github.com/GetNextjsTemplates/desgy-nextjs-tailwind-landing-page-template-free) (Next.js + Tailwind CSS).

## Tech Stack

- **Next.js 15** (App Router)
- **React 19**
- **Tailwind CSS 4**
- **TypeScript**
- **Framer Motion** (animations)

## Các section

- Hero — Giới thiệu chính
- Về chúng tôi — 3 card dịch vụ
- Giá trị cốt lõi & Xây dựng sản phẩm
- Lĩnh vực phục vụ (Retail, Fintech, EdTech...)
- Đội ngũ
- Dự án tiêu biểu
- Gói dịch vụ & báo giá
- FAQ
- Testimonials
- Blog
- Form liên hệ

## Chạy dự án

```bash
npm install
npm run dev
```

Mở [http://localhost:3000](http://localhost:3000)

## Deploy Cloudflare Pages (static)

1. Cloudflare Dashboard → **Workers & Pages** → **Create** → **Pages** → Import GitHub repo `g-project-landing`
2. Build settings:
   - Framework preset: **Next.js (Static HTML Export)**
   - Build command: `npx next build`
   - Build output directory: `out`
   - Node version: `20`
3. Deploy → nhận URL `*.pages.dev`
4. **Custom domains** → thêm domain đã mua (DNS trỏ về Cloudflare hoặc CNAME tới `*.pages.dev`)

## Tùy chỉnh nội dung

- **Dữ liệu chính**: `src/app/api/data/route.ts`
- **Component text**: `src/app/components/Home/`
- **Tên công ty**: `src/app/components/Layout/Header/Logo/index.tsx`

## License

Template gốc từ GetNextjsTemplates. Nội dung G Project tùy chỉnh cho mục đích demo.
