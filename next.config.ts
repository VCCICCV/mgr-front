import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["minio.bytebytebrew.com"],
    // 可选：配置图片优化相关参数
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  /* config options here */
  transpilePackages: ["three"],
  // cors
  async headers() {
    return [
      {
        // 匹配所有API路由
        source: "/api/:path*",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET,POST,PUT,DELETE,OPTIONS",
          },
          {
            key: "Access-Control-Allow-Headers",
            value: "Content-Type, Authorization, Accept",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
