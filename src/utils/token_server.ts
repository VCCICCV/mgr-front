// src/utils/token_server.ts
"use server";

import { cookies } from "next/headers";

// 服务端设置token
export const setServerToken = async (token: string) => {
  const cookieStore = await cookies(); // 先await获取cookieStore
  cookieStore.set("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 7, // 7天
  });
};

// 服务端获取token
export const getServerToken = async () => {
  const cookieStore = await cookies();
  return cookieStore.get("token")?.value;
};

// 服务端删除token
export const deleteServerToken = async () => {
  const cookieStore = await cookies();
  cookieStore.delete("token");
};
