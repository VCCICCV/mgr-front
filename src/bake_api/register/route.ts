// api/register.ts
import { LoginRequest } from "../types/auth";
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const register = async (data: LoginRequest): Promise<any> => {
  try {
    const response = await fetch(`${API_BASE_URL}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error("注册失败");
    }
    return await response.json();
  } catch (error) {
    console.error("注册错误:", error);
    throw error;
  }
};
