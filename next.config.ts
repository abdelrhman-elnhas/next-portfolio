/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/v1",
        destination: "/v1/index.html",
      },
      {
        source: "/v1/:path*",
        destination: "/v1/index.html",
      },
    ];
  },
};

module.exports = nextConfig;