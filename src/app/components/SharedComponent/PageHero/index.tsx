import Link from 'next/link'

interface PageHeroProps {
  title: string
  description?: string
  breadcrumb: string
}

const PageHero = ({ title, description, breadcrumb }: PageHeroProps) => {
  return (
    <section className='relative overflow-hidden bg-darkmode !pt-28 sm:!pt-32 lg:!pt-36 !pb-12 sm:!pb-16 lg:!pb-20'>
      <div className='container mx-auto max-w-7xl px-4'>
        <div className='flex flex-wrap items-center gap-2 text-white/60 text-sm sm:text-base mb-4 sm:mb-6'>
          <Link href='/' className='hover:text-white transition-colors'>
            Trang chủ
          </Link>
          <span>/</span>
          <span className='text-white'>{breadcrumb}</span>
        </div>
        <h1 className='text-white text-[1.75rem] sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-3xl'>
          {title}
        </h1>
        {description && (
          <p className='text-white/70 text-base sm:text-lg mt-4 sm:mt-6 max-w-2xl'>
            {description}
          </p>
        )}
      </div>
    </section>
  )
}

export default PageHero
