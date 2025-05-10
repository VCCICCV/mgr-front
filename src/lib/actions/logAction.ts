// lib/actions/logActions.ts
"use server";

import { cookies } from "next/headers";

interface LoginLog {
  id: string;
  user_id: string;
  username: string;
  domain: string;
  login_time: string;
  ip: string;
  port: number;
  address: string;
  user_agent: string;
  request_id: string;
  type: string;
  created_at: string;
  created_by: string;
}

export async function getLoginLogs(
  page: number | 1,
  pageSize: number | 10
): Promise<{
  current: number;
  size: number;
  total: number;
  records: LoginLog[];
}> {
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
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/login-log?current=${page}&size=${pageSize}`,
      {
        method: "GET",
        credentials: "include",
        headers,
      }
    );

    const responseData = await response.json();

    if (!responseData.success) {
      throw new Error(responseData.msg || "获取登录日志失败");
    }

    return responseData.data;
  } catch (error) {
    console.error("获取登录日志错误:", error);
    throw error;
  }
}
