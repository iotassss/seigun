/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost'], // 使用する画像のホスト名を指定します
  },
}

module.exports = nextConfig
