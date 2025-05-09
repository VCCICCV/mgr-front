// src/components/admin/UserDropdown.tsx
'use client';

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { signOut } from "@/lib/actions/authAction";
import { useRouter } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import useAuthStore from "@/stores/authStore";

export function UserDropdown() {
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);
    const userInfo = useAuthStore((state) => state.userInfo);

    const handleMouseEnter = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
            timeoutRef.current = null;
        }
        setIsOpen(true);
    };

    const handleMouseLeave = () => {
        timeoutRef.current = setTimeout(() => {
            setIsOpen(false);
        }, 1500); // 1.5秒延迟
    };

    const handleSignOut = async () => {
        try {
            await signOut();
            router.push('/auth/sign-in');
        } catch (error) {
            console.error('登出失败:', error);
        }
    };

    // 清除定时器防止内存泄漏
    useEffect(() => {
        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, []);

    return (
        <div
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <Avatar className="cursor-pointer">
                <AvatarImage
                    src={userInfo?.avatar || "https://github.com/shadcn.png"}
                    alt={userInfo?.nickName || "用户头像"}
                />
                <AvatarFallback>
                    {userInfo?.nickName?.charAt(0) || 'U'}
                </AvatarFallback>
            </Avatar>

            {isOpen && (
                <div
                    className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-50"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <div className="py-1">
                        <Button
                            variant="ghost"
                            className="w-full justify-start px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            onClick={handleSignOut}
                        >
                            退出登录
                        </Button>
                    </div>
                </div>
            )}
        </div>
    );
}