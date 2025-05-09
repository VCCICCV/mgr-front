"use server";
// src\api\auth.ts
import { cookies } from "next/headers";

export async function fetchGetUserInfo(): Promise<Api.Auth.UserInfo> {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;
  const headers: HeadersInit = {
    "Content-Type": "application/json",
  };
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/getUserInfo`,
      {
        method: "GET",
        credentials: "include",
        headers,
      }
    );

    if (!response.ok) {
      const error = await response.json().catch(() => ({}));
      throw new Error(error.message || "获取用户信息失败");
    }
    const responseData = await response.json();
    return responseData.data;
  } catch (error) {
    console.error("获取用户信息错误:", error);
    throw error;
  }
}
export async function fetchGetUserList(
  params?: Api.SystemManage.UserSearchParams
): Promise<Api.SystemManage.UserList> {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;
  const headers: HeadersInit = {
    "Content-Type": "application/json",
  };
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/getUserInfo`,
      {
        method: "GET",
        credentials: "include",
        headers,
      }
    );

    if (!response.ok) {
      const error = await response.json().catch(() => ({}));
      throw new Error(error.message || "获取用户列表失败");
    }
    const responseData = await response.json();
    return responseData.data;
  } catch (error) {
    console.error("获取用户列表错误:", error);
    throw error;
  }
}
