// src\api\users.ts
"use server";
import { cookies } from "next/headers";
export async function fetchGetAllUsers(
  params: Api.SystemManage.UserSearchParams = { current: 1, size: 10 }
): Promise<Api.SystemManage.UserList> {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;
  const headers: HeadersInit = {
    "Content-Type": "application/json",
  };
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  // 构建查询参数
  const queryParams = new URLSearchParams();
  // biome-ignore lint/complexity/noForEach: <explanation>
  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null) {
      queryParams.append(key, value.toString());
    }
  });

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/user?${queryParams.toString()}`,
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

    // 解析完整响应结构
    const responseData = await response.json();
    return responseData.data;
  } catch (error) {
    console.error("获取用户信息错误:", error);
    throw error;
  }
}
// src\api\users.ts
// 用户
export async function getUserById(
  userId: string
): Promise<Api.SystemManage.User> {
  console.log("用户id", userId);
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
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/user/${userId}`,
      {
        method: "GET",
        credentials: "include",
        headers,
      }
    );

    const responseData = await response.json();

    if (!response.ok || responseData.success === false) {
      // 根据响应的msg字段抛出相应的错误信息
      throw new Error(responseData.msg || "获取用户失败");
    }

    return responseData.data;
  } catch (error) {
    console.error("获取id用户错误:", error);
    throw error;
  }
}