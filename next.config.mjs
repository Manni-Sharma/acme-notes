/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "manni-sharma.github.io",
      },
    ],
  },
};

export default nextConfig;
