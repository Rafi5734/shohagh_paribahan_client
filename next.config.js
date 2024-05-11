/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // domains: ["hffoodservice.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig
