// src/lib/actions/authAction.ts
"use server";

import { setServerToken, deleteServerToken } from "@/utils/token_server";

export const signIn = async (formData: {
  identifier: string;
  password: string;
}) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );

    const data = await response.json();

    if (data?.success) {
      await setServerToken(data.data.token); // 添加await
      return {
        success: true,
        message: data.msg,
        refreshToken: data.data.refresh_token,
      };
    }
    return { success: false, message: data?.msg || "登录失败" };
  } catch (error) {
    console.error("登录错误:", error);
    return { success: false, message: "网络错误，请稍后重试" };
  }
};
export const signUp = async (formData: {
  identifier: string;
  password: string;
}) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );

    const data = await response.json();

    if (data?.success) {
      await setServerToken(data.data.token); // 添加await
      return {
        success: true,
        message: data.msg,
        refreshToken: data.data.refresh_token,
      };
    }
    return { success: false, message: data?.msg || "登录失败" };
  } catch (error) {
    console.error("登录错误:", error);
    return { success: false, message: "网络错误，请稍后重试" };
  }
};
export const signOut = async () => {
  try {
    await deleteServerToken();
    return { success: true };
  } catch (error) {
    console.error("登出失败:", error);
    return { success: false };
  }
};
