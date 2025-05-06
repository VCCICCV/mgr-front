"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const signIn = async (formData: {
  identifier?: string;
  password?: string;
}) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          identifier: formData.identifier,
          password: formData.password,
        }),
      }
    );

    const data = await response.json();
    if (data.success) {
      // 设置 token cookie (httpOnly)
      (await
            // 设置 token cookie (httpOnly)
            cookies()).set("token", data.data.token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        path: "/",
        maxAge: 60 * 60 * 24 * 7, // 7天
      });

      // 返回 refresh_token 给客户端存储
      return {
        success: true,
        message: "登录成功",
        refreshToken: data.data.refresh_token,
      };
    }
    return { success: false, message: data.msg || "登录失败" };
  } catch (error) {
    console.error("登录错误:", error);
    return { success: false, message: "网络错误，请稍后重试" };
  }
};

export const signOut = async () => {
  // 清除 token cookie
  (await
        // 清除 token cookie
        cookies()).delete("token");

  // 返回指令让客户端清除 refresh_token
  return { clearRefreshToken: true };
};

export const signUp = async () => {};
