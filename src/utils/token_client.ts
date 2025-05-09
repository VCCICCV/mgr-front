"use client";
// src\utils\token_client.ts
// 客户端设置refreshToken
export const setClientRefreshToken = (refreshToken: string) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("refresh_token", refreshToken);
  }
};

// 客户端获取refreshToken
export const getClientRefreshToken = () => {
  if (typeof window !== "undefined") {
    return localStorage.getItem("refresh_token") || "";
  }
  return "";
};

// 客户端删除refreshToken
export const deleteClientRefreshToken = () => {
  if (typeof window !== "undefined") {
    localStorage.removeItem("refresh_token");
  }
};
