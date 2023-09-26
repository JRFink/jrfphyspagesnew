/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  math: {
    every_page: true,
    engine: mathjax, 

    mathjax: {
      enable: true, 

      tags: none
    }
      
  }
}

module.exports = nextConfig
