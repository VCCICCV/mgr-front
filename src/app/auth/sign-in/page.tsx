'use client';
import AuthForm from '@/components/auth/AuthForm'
import { signIn } from '@/lib/actions/authAction'
import { useRouter } from 'next/navigation';
import React from 'react'

const page = () => {
  const router = useRouter();

  const handleSignIn = async (values: { identifier: string; password: string }) => {
    const result = await signIn(values);

    if (result.success) {
      // 客户端存储 refresh_token 到 localStorage
      if (typeof window !== 'undefined') {
        localStorage.setItem('refresh_token', result.refreshToken);
      }

      router.push('/admin/dashboard');
    } else {
      alert(result.message);
    }
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
  )
}

export default page
