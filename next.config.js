/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  math: {
    every_page: true,

    mathjax: {
      enable: true, 
    }
      
  }
}

module.exports = nextConfig
