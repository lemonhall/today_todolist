/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'out',
  images: {
    unoptimized: true,
  },
  // 禁用严格模式以避免在Tauri开发中的双重渲染
  reactStrictMode: false,
}

module.exports = nextConfig 