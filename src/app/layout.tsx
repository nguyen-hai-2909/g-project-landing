import { Manrope } from 'next/font/google'
import type { Metadata } from 'next'
import './globals.css'
import Header from '@/app/components/Layout/Header'
import Footer from '@/app/components/Layout/Footer'
import ScrollToTop from '@/app/components/ScrollToTop'
import Aoscompo from '@/utils/aos'

const font = Manrope({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'G Project — Giải pháp chuyển đổi số cho doanh nghiệp',
  description:
    'Thiết kế app, website, hệ thống quản lý và tư vấn chuyển đổi số.',
  icons: {
    icon: '/images/logo/gproject-blue.svg',
    shortcut: '/images/logo/gproject-blue.svg',
    apple: '/images/logo/gproject-blue.svg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='vi' suppressHydrationWarning>
      <body className={`${font.className}`}>
        <Aoscompo>
          <Header />
          {children}
          <Footer />
        </Aoscompo>
        <ScrollToTop />
      </body>
    </html>
  )
}
