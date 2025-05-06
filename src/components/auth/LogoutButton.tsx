
'use client';
import { signOut } from '@/lib/actions/authAction';
import { useRouter } from 'next/navigation';
import { Button } from '../ui/button';

const SignOutButton = () => {
    const router = useRouter();

    const handleSignOut = async () => {
        const result = await signOut();
        // 清除 localStorage 中的 refresh_token
        if (result.clearRefreshToken && typeof window !== 'undefined') {
            localStorage.removeItem('refresh_token');
        }

        router.push('/auth/sign-in');
    };

    return (
        <Button onClick={handleSignOut} className="text-sm text-gray-600 hover:text-blue-600">
            登出
        </Button>
    );
};

export default SignOutButton;