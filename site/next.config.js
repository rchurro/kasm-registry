/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  distDir: '../public',
  env: {
    name: 'rchurro',
    description: 'Community Kasm workspaces by rchurro, including Minecraft: Java Edition with GPU rendering.',
    icon: '/img/logo.svg',
    listUrl: 'https://rchurro.github.io/kasm-registry/',
    contactUrl: 'https://github.com/rchurro/kasm-registry/issues',
  },
  reactStrictMode: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
