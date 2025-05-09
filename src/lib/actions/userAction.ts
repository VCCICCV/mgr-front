"use server";
// src\lib\actions\userAction.ts
import { cookies } from "next/headers";
// 创建用户
export type UserModel = Pick<
  Api.SystemManage.User,
  | "username"
  | "password"
  | "domain"
  | "nickName"
  | "phoneNumber"
  | "email"
  | "status"
>;

export async function createUser(
  req: UserModel
): Promise<Api.SystemManage.User> {
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
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/user`,
      {
        method: "POST",
        credentials: "include",
        headers,
        body: JSON.stringify(req),
      }
    );

    const responseData = await response.json();
    if (!responseData.success) {
      throw new Error(responseData.msg || "创建用户失败");
    }
    return responseData.data;
  } catch (error) {
    console.error("创建用户错误:", error);
    throw error;
  }
}
// 删除用户
export async function deleteUser(userId: string): Promise<void> {
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
        method: "DELETE",
        credentials: "include",
        headers,
      }
    );

    if (!response.ok) {
      const error = await response.json().catch(() => ({}));
      throw new Error(error.message || "删除用户失败");
    }
  } catch (error) {
    console.error("删除用户错误:", error);
    throw error;
  }
}

// 更新用户
export async function updateUser(
  userId: string,
  req: Partial<Api.SystemManage.User>
): Promise<Api.SystemManage.User> {
  const cookieStore = cookies();
  const token = (await cookieStore).get("token")?.value;
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
        method: "PUT",
        credentials: "include",
        headers,
        body: JSON.stringify(req),
      }
    );

    const responseData = await response.json();
    if (!response.ok) {
      throw new Error(responseData.msg || "更新用户失败");
    }
    return responseData.data;
  } catch (error) {
    console.error("更新用户错误:", error);
    throw error;
  }
}
