// api/login.ts
import { LoginRequest, LoginResponse } from "../types/auth";
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const login = async (data: LoginRequest): Promise<LoginResponse> => {
  try {
    const response = await fetch(`${API_BASE_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error("登录失败");
    }
    return (await response.json()) as LoginResponse;
  } catch (error) {
    console.error("登录错误:", error);
    throw error;
  }
};
