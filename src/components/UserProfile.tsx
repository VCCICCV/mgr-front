// components/UserProfile.tsx
"use client";
import { useAuthStore } from "@/stores/authStore";
import { Avatar } from "./ui/avatar";
import { Button } from "./ui/button";

export default function Profile() {
    const { user, logout } = useAuthStore();

    return (
        <div className="flex items-center gap-4">
            {/* <Avatar src={user?.avatar} /> */}
            <Button onClick={logout}>退出登录</Button>
        </div>
    );
}