const { remarkCodeHike } = require("@code-hike/mdx")

const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [[remarkCodeHike, {theme: "slack-dark" }]],
  },
})

/** @type {import('next').NextConfig} */
const nextConfig = {
    // Configure pageExtensions to include md and mdx
    pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
    // Optionally, add any other Next.js config below
    reactStrictMode: true,
  }
   
  // Merge MDX config with Next.js config
  module.exports = withMDX(nextConfig)