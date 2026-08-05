/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Ẩn logo Next.js góc màn hình khi chạy dev
  devIndicators: false,
  trailingSlash: true,
}

export default nextConfig
