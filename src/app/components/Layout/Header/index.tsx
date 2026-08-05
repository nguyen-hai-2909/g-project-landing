'use client'
import { Key, useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { HeaderItem } from '@/app/types/menu'
import Logo from './Logo'
import HeaderLink from './Navigation/HeaderLink'
import MobileHeaderLink from './Navigation/MobileHeaderLink'

const Header: React.FC = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)
  const mobileMenuRef = useRef<HTMLDivElement>(null)

  const handleClickOutside = (event: MouseEvent) => {
    if (
      mobileMenuRef.current &&
      !mobileMenuRef.current.contains(event.target as Node) &&
      navbarOpen
    ) {
      setNavbarOpen(false)
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [navbarOpen])

  useEffect(() => {
    if (navbarOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }, [navbarOpen])

  const [headerData, setHeaderData] = useState<HeaderItem[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/data')
        if (!res.ok) throw new Error('Failed to fetch')
        const data = await res.json()
        setHeaderData(data.headerData)
      } catch (error) {
        console.error('Error fetching services:', error)
      }
    }
    fetchData()
  }, [])

  const closeMenu = () => setNavbarOpen(false)

  return (
    <header className='fixed top-0 z-40 w-full border-b border-black/10 bg-white shadow-sm'>
      <div className='container mx-auto max-w-(--breakpoint-xl) flex items-center justify-between gap-3 px-4 py-3 sm:py-4'>
        <div className='min-w-0 shrink-0 lg:pr-8 lg:border-r border-black/10 text-darkmode'>
          <Logo />
        </div>

        <nav className='hidden lg:flex grow items-center gap-5 xl:gap-8 justify-center'>
          {headerData.map((item, index) => (
            <HeaderLink key={index} item={item} />
          ))}
        </nav>

        <div className='flex items-center gap-3 shrink-0 lg:pl-8 lg:border-l border-black/10'>
          <Link
            href='/contact'
            className='hidden lg:inline-flex bg-darkmode text-white hover:bg-transparent hover:text-darkmode border border-darkmode px-5 py-2 rounded-lg text-sm xl:text-base'>
            Liên hệ
          </Link>
          <button
            onClick={() => setNavbarOpen(!navbarOpen)}
            className='lg:hidden p-2 rounded-lg'
            aria-label='Mở menu'
            aria-expanded={navbarOpen}>
            <span className='block w-6 h-0.5 bg-darkmode'></span>
            <span className='block w-6 h-0.5 bg-darkmode mt-1.5'></span>
            <span className='block w-6 h-0.5 bg-darkmode mt-1.5'></span>
          </button>
        </div>
      </div>

      {navbarOpen && (
        <div
          className='fixed inset-0 bg-black/50 z-40 lg:hidden'
          onClick={closeMenu}
        />
      )}

      <div
        ref={mobileMenuRef}
        className={`lg:hidden fixed top-0 right-0 h-full w-[min(100%,20rem)] bg-darkmode shadow-lg transform transition-transform duration-300 z-50 ${
          navbarOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
        <div className='flex items-center justify-between p-5 border-b border-white/10 text-white'>
          <Logo />
          <button
            onClick={closeMenu}
            className='text-white text-3xl leading-none w-10 h-10 flex items-center justify-center'
            aria-label='Đóng menu'>
            ×
          </button>
        </div>
        <nav className='flex flex-col items-stretch p-4 gap-1'>
          {headerData.map(
            (item: HeaderItem, index: Key | null | undefined) => (
              <div key={index} onClick={closeMenu}>
                <MobileHeaderLink item={item} />
              </div>
            )
          )}
          <Link
            href='/contact'
            className='mt-4 bg-primary text-white px-4 py-3 rounded-lg text-center font-semibold'
            onClick={closeMenu}>
            Liên hệ
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
