/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // static HTML in ./out — deployable by nginx
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
