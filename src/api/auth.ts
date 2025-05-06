// src/api/auth.ts
import { customFetch } from "../utils/api";

/**
 * 用户登录
 */
export async function fetchLogin(identifier: string, password: string) {
  return customFetch<Api.Auth.LoginToken>("/auth/login", {
    method: "POST",
    data: { identifier, password },
  });
}

/**
 * 获取用户信息
 */
export function fetchGetUserInfo() {
  return customFetch<Api.Auth.UserInfo>("/auth/getUserInfo", {
    method: "GET",
  });
}

/**
 * 刷新Token
 */
export async function fetchRefreshToken(refreshToken: string) {
  return customFetch<Api.Auth.LoginToken>("/auth/refreshToken", {
    method: "POST",
    data: { refreshToken },
  });
}

/**
 * 触发自定义错误
 */
export function fetchCustomBackendError(code: string, msg: string) {
  return customFetch("/auth/error", {
    params: { code, msg },
  });
}
