/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'localhost',
      'lh3.googleusercontent.com', // Googleのアバター画像を表示するために追加
    ],
  },
}

module.exports = nextConfig
