/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        // matching all API routes
        source: "/api/:path*",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: "*" },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET,OPTIONS,PATCH,DELETE,POST,PUT",
          },
          {
            key: "Access-Control-Allow-Headers",
            value:
              "X-CSRF-Token, X-Requested-With, Authorization, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
          },
        ],
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/api/login",
        destination: "https://service-1-lh4l.onrender.com/api/token/",
      },
      {
        source: "/api/movies",
        destination: "https://service-1-lh4l.onrender.com/movies/",
      },
      {
        source: "/api/metrics",
        destination: "https://service-1-lh4l.onrender.com/metrics/",
      },
    ];
  },
};

module.exports = nextConfig;
