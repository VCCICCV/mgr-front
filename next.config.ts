import type { NextConfig } from "next";
// next.config.ts
const nextConfig: NextConfig = {
  images: {
    domains: ["minio.bytebytebrew.com"],
    // 可选：配置图片优化相关参数
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  transpilePackages: ["three"],

  // 重写规则
  async rewrites() {
    return [
      {
        source: "/api/:path*", // 前端请求的路径（以/api开头）
        destination: `${process.env.NEXT_PUBLIC_API_BASE_URL}/:path*`, // 代理到后端服务器
      },
    ];
  },
  // cors
  async headers() {
    return [
      {
        // 匹配所有路由
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
          {
            key: "Access-Control-Allow-Origin",
            value: process.env.NEXT_PUBLIC_API_BASE_URL || "",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
