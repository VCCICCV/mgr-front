'use client';
import { fetchGetUserInfo } from '@/api/auth';
import { getUserById } from '@/api/users';
import AuthForm from '@/components/auth/AuthForm'
import { signIn } from '@/lib/actions/authAction'
import useAuthStore from '@/stores/authStore';
import { deleteClientRefreshToken, setClientRefreshToken } from '@/utils/token_client';
import { useRouter } from 'next/navigation';
import React from 'react'

const Page = () => {
  const router = useRouter();
  const setUserInfo = useAuthStore((state) => state.setUserInfo);

  // 角色路由映射
  const roleRedirectMap: Record<string, string> = {
    ROLE_SUPER: '/admin/dashboard',
    ROLE_ADMIN: '/admin',
    ROLE_USER: '/dashboard'
  };

  const handleSignIn = async (values: { identifier: string; password: string }) => {
    try {
      // 1. 执行登录
      const result = await signIn(values);
      if (!result.success) {
        alert(result.message);
        return;
      }

      // 2. 存储refresh token
      setClientRefreshToken(result.refreshToken);

      // 3. 获取用户信息
      const userInfo = await fetchGetUserInfo();
      const detailedUserInfo = await getUserById(userInfo.userId);

      // 4. 合并信息并存储
      const combinedUserInfo = {
        ...userInfo,
        ...detailedUserInfo,
        roles: userInfo.roles // 确保roles存在
      };
      setUserInfo(combinedUserInfo);

      // 5. 根据角色跳转
      const redirectPath = getRedirectPath(userInfo.roles);
      router.push(redirectPath);

    } catch (error) {
      console.error('登录流程错误:', error);
      deleteClientRefreshToken(); // 清除可能已存储的token
      alert('登录失败，请重试');
    }
  };

  // 根据角色获取跳转路径
  const getRedirectPath = (roles: string[]): string => {
    // 按优先级检查角色
    if (roles.includes('ROLE_SUPER')) return roleRedirectMap.ROLE_SUPER;
    if (roles.includes('ROLE_ADMIN')) return roleRedirectMap.ROLE_ADMIN;
    if (roles.includes('ROLE_USER')) return roleRedirectMap.ROLE_USER;
    return '/'; // 默认路径
  };

  return (
    <AuthForm
      type="SIGN_IN"
      defaultValues={{
        identifier: "MgrAdmin",
        password: "123456",
      }}
      onSubmit={handleSignIn}
    />
  );
};

export default Page;