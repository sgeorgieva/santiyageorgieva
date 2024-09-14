/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
  output: "export",
  basePath: "",
  reactStrictMode: true,
  swcMinify: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  optimizeFonts: false,
  images: {
    loader: "custom",
    loaderFile: "./my-loader.ts",
    formats: ["image/webp"],
    unoptimized: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
