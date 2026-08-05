const projects = [
  {
    name: 'Hồ sơ sức khỏe điện tử Hà Nội',
    short: 'HSSK Hà Nội',
    desc: 'Hệ thống Hồ sơ sức khỏe điện tử Thành phố Hà Nội',
  },
  {
    name: 'DNP Water',
    short: 'DNP Water',
    desc: 'Giải pháp quản lý nước và hạ tầng SWM',
  },
  {
    name: 'Tiên Rồng',
    short: 'Tiên Rồng',
    desc: 'Ứng dụng đặt xe ghép, xe sân bay và dịch vụ vận chuyển',
  },
  {
    name: 'Fordeer Commerce',
    short: 'Fordeer',
    desc: 'Nền tảng thương mại điện tử & Fordeer Journal',
  },
]

const Work = () => {
  return (
    <section
      id='Projects'
      className='relative bg-cover bg-center overflow-hidden'>
      <div className='container mx-auto max-w-7xl px-4'>
        <div className='text-center mb-8 sm:mb-12 lg:mb-14'>
          <p className='text-primary text-sm sm:text-lg tracking-widest uppercase mb-3'>
            Dự án
          </p>
          <h3 className='text-black'>Dự án đã triển khai.</h3>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6'>
          {projects.map((project) => (
            <div
              key={project.name}
              className='bg-white border border-border rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl'>
              <p className='text-xs sm:text-sm font-semibold tracking-widest uppercase text-primary mb-3'>
                {project.short}
              </p>
              <h6 className='text-lg sm:text-xl text-black font-bold mb-3 leading-snug'>
                {project.name}
              </h6>
              <p className='text-sm sm:text-base text-black/60'>
                {project.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Work
