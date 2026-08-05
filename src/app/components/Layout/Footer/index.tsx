'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { footerlinks } from '@/app/types/footerlinks'

const Footer = () => {
  const [footerLinks, setFooterLinks] = useState<footerlinks[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/data')
        if (!res.ok) throw new Error('Failed to fetch')
        const data = await res.json()
        setFooterLinks(data.FooterLinksData)
      } catch (error) {
        console.error('Error fetching services:', error)
      }
    }
    fetchData()
  }, [])

  return (
    <footer className='bg-black'>
      <div className='container mx-auto max-w-7xl px-4 pt-16 sm:pt-20 lg:pt-24 pb-12'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8'>
          <div className='sm:col-span-2 lg:col-span-4'>
            <Link
              href='/'
              className='inline-flex items-center gap-2.5 text-white mb-4'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 32 32'
                className='h-8 w-8 shrink-0 fill-primary'
                aria-hidden='true'>
                <path d='M0 23.63l2.703 4.672c0.552 1.094 1.667 1.781 2.885 1.781h17.943l-3.724-6.453zM32 23.661c0-0.641-0.193-1.245-0.516-1.75l-10.516-18.276c-0.557-1.057-1.656-1.719-2.854-1.719h-5.557l16.24 28.135 2.563-4.432c0.5-0.849 0.641-1.224 0.641-1.958zM17.161 19.047l-7.255-12.568-7.26 12.568z' />
              </svg>
              <span className='text-2xl sm:text-3xl font-semibold'>
                G Project
              </span>
            </Link>
            <p className='text-white/60 text-sm sm:text-base mb-6 max-w-sm'>
              Giải pháp chuyển đổi số cho doanh nghiệp.
            </p>
            <div className='flex items-center gap-4'>
              <Link href='https://facebook.com' aria-label='Facebook'>
                <Image
                  src='/images/footer/vec.svg'
                  alt=''
                  width={15}
                  height={20}
                />
              </Link>
              <Link href='https://twitter.com' aria-label='Twitter'>
                <Image
                  src='/images/footer/twitter.svg'
                  alt=''
                  width={25}
                  height={20}
                />
              </Link>
              <Link href='https://instagram.com' aria-label='Instagram'>
                <Image
                  src='/images/footer/instagram.svg'
                  alt=''
                  width={25}
                  height={20}
                />
              </Link>
            </div>
          </div>

          {footerLinks.map((item, i) => (
            <div key={i} className='lg:col-span-2'>
              <p className='text-white text-lg font-extrabold mb-5'>
                {item.section}
              </p>
              <ul className='space-y-3'>
                {item.links.map((link, j) => (
                  <li key={j}>
                    <Link
                      href={link.href ?? '#'}
                      className='text-white/80 text-sm sm:text-base hover:text-white hover:underline break-words'>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className='border-t border-white/30'>
        <div className='container mx-auto max-w-7xl px-4 py-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between'>
          <p className='text-center sm:text-start text-white/80 text-sm sm:text-base'>
            © 2026 G Project — Giải pháp chuyển đổi số cho doanh nghiệp
          </p>
          <div className='flex justify-center sm:justify-end gap-6'>
            <Link
              href='/contact'
              className='text-sm text-white/80 hover:text-white hover:underline'>
              Chính sách bảo mật
            </Link>
            <Link
              href='/contact'
              className='text-sm text-white/80 hover:text-white hover:underline'>
              Điều khoản sử dụng
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
