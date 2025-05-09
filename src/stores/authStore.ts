// src\stores\authStore.ts
import { create } from "zustand";

// 定义用户信息类型
type UserInfo = Api.SystemManage.User & {
  roles: string[]; // 合并基础用户信息中的roles字段
};

// 定义身份验证状态类型
type AuthState = {
  userInfo: UserInfo | null;
  setUserInfo: (info: UserInfo) => void;
  clearUserInfo: () => void;
  getRoles: () => string[];
};


const useAuthStore = create<AuthState>((set,get) => ({
  userInfo: null,
  setUserInfo: (info) => set({ userInfo: info }),
  clearUserInfo: () => set({ userInfo: null }),
  getRoles: () => get().userInfo?.roles || [],
}));

export default useAuthStore;
