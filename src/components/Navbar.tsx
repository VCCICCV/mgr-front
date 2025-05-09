'use client';
import Link from 'next/link';
import React from 'react';
import { Button } from './ui/button';
import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import useAuthStore from '@/stores/authStore';
import { signOut } from '@/lib/actions/authAction';
import { useRouter } from 'next/navigation';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';

const Navbar = () => {
    const router = useRouter();
    const userInfo = useAuthStore((state) => state.userInfo);
    const clearUserInfo = useAuthStore((state) => state.clearUserInfo);

    const handleSignOut = async () => {
        try {
            await signOut(); // 调用服务端登出
            clearUserInfo(); // 清除客户端状态
            router.push('/auth/sign-in'); // 跳转到登录页
        } catch (error) {
            console.error('登出失败:', error);
        }
    };

    return (
        <header className='w-full absolute z-10'>
            <nav className='max-width flex justify-between items-center sm:px-16 px-6 py-4'>
                <Link href="/" className='flex justify-center items-center'>
                    <Image src="/logo.svg" alt='Logo' width={28} height={28} />
                </Link>

                <div className="flex items-center gap-4">
                    {userInfo ? (
                        <Popover>
                            <PopoverTrigger asChild>
                                {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
                                <button className="flex items-center gap-2 focus:outline-none">
                                    <Avatar>
                                        <AvatarImage
                                            src={userInfo.avatar || "/default-avatar.png"}
                                            alt={userInfo.nickName || "User"}
                                        />
                                        <AvatarFallback>
                                            {userInfo.nickName?.charAt(0) || "U"}
                                        </AvatarFallback>
                                    </Avatar>
                                    <span className="hidden sm:inline text-sm font-medium">
                                        {userInfo.nickName || "User"}
                                    </span>
                                </button>
                            </PopoverTrigger>
                            <PopoverContent className="w-40 p-2" align="end">
                                <Button
                                    variant="ghost"
                                    className="w-full justify-start"
                                    onClick={handleSignOut}
                                >
                                    登出
                                </Button>
                            </PopoverContent>
                        </Popover>
                    ) : (
                        <>
                            <Link href="/auth/sign-up">
                                <Button variant="outline">注册</Button>
                            </Link>
                            <Link href="/auth/sign-in">
                                <Button>登录</Button>
                            </Link>
                        </>
                    )}
                </div>
            </nav>
        </header>
    );
};

export default Navbar;