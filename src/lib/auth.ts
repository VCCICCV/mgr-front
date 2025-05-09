// src/lib/auth.ts
import { cookies } from "next/headers";

// 获取当前 token
export const getToken = async () => {
  return (await cookies()).get("token")?.value;
};

// 刷新 token
export const refreshToken = async () => {
  if (typeof window === "undefined") return null;

  const refreshToken = localStorage.getItem("refresh_token");
  if (!refreshToken) return null;

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/refresh`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ refresh_token: refreshToken }),
      }
    );

    if (!response.ok) throw new Error("刷新失败");

    const data = await response.json();
    return data.data;
  } catch (error) {
    return null;
  }
};
