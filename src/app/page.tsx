import React from 'react'
import Hero from '@/app/components/Home/Hero'
import Aboutus from '@/app/components/Home/AboutUs'
import Dedicated from '@/app/components/Home/Dedicated'
import Digital from '@/app/components/Home/Digital'
import Beliefs from '@/app/components/Home/Beliefs'
import Work from '@/app/components/Home/Work'
import Team from '@/app/components/Home/Team'
import Manage from '@/app/components/Home/Manage'
import FAQ from '@/app/components/Home/FAQ'
import Join from '@/app/components/Home/Joinus'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'G Project — Giải pháp chuyển đổi số cho doanh nghiệp',
  description:
    'Thiết kế app, website, hệ thống quản lý và tư vấn chuyển đổi số. Đối tác công nghệ B2B tin cậy tại Việt Nam.',
}

export default function Home() {
  return (
    <main>
      <Hero />
      <Aboutus />
      <Dedicated />
      <Digital />
      <Beliefs />
      <Work />
      <Team />
      <Manage />
      <FAQ />
      <Join />
    </main>
  )
}
