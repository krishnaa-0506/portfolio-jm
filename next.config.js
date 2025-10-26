/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  transpilePackages: ['react-parallax-tilt'],
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      'tailwindcss': require.resolve('tailwindcss'),
    }
    return config
  },
}

module.exports = nextConfig