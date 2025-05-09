// 'use server'
// // src\app\admin\user\page.tsx
// import { fetchGetAllUsers } from "@/api/users";
// import UserDialog from "@/components/admin/user/UserDialog";
// import UserTable from "@/components/admin/user/UserTable";

// export default async function UserManagementPage() {
//     const usersPromise = await fetchGetAllUsers(); // 获取Promise
//     return (
//         <div className="container mx-auto py-8 px-4">
//             <div className="flex justify-between items-center mb-6 bg-white p-4 rounded-md shadow-md">
//                 <h1 className="text-2xl font-bold text-gray-800">用户管理</h1>
//                 <div className="flex gap-4">
//                     <UserDialog />
//                 </div>
//             </div>
//             {/* 将Promise传递给UserTable组件 */}
//             <div className="bg-white p-4 rounded-md shadow-md">
//                 <UserTable users={usersPromise} onPageChange={function (page: number): void {
//                     throw new Error("Function not implemented.");
//                 }} onSizeChange={function (size: number): void {
//                     throw new Error("Function not implemented.");
//                 }} onEdit={function (userId: string): void {
//                     throw new Error("Function not implemented.");
//                 }} onDelete={function (userId: string): void {
//                     throw new Error("Function not implemented.");
//                 }} />
//             </div>
//         </div>
//     );
// }
// src/app/admin/users/page.tsx
'use client';

import { useState, useEffect } from 'react';
import { fetchGetAllUsers } from '@/api/users';
import UserSearch from '@/components/admin/user/UserSearch';
import UserTable from '@/components/admin/user/UserTable';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

export default function UserManagementPage() {
    const router = useRouter();
    const [users, setUsers] = useState<Api.SystemManage.UserList>({
        current: 1,
        size: 10,
        total: 0,
        records: [],
        length: 0,
    });
    const [loading, setLoading] = useState(true);

    const fetchUsers = async (params: Api.SystemManage.UserSearchParams = { current: 1, size: 10 }) => {
        setLoading(true);
        try {
            const data = await fetchGetAllUsers(params);
            setUsers(data);
        } catch (error) {
            toast.error("获取用户列表失败");
            console.error("获取用户列表错误:", error);
        } finally {
            setLoading(false);
        }
    };

    // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
    useEffect(() => {
        fetchUsers();
    }, []);

    const handleSearch = (params: Api.SystemManage.UserSearchParams) => {
        fetchUsers(params);
    };

    const handleReset = () => {
        fetchUsers();
    };

    const handlePageChange = (page: number) => {
        fetchUsers({ ...users, current: page });
    };

    const handleSizeChange = (size: number) => {
        fetchUsers({ ...users, size, current: 1 });
    };

    const handleEdit = (userId: string) => {
        router.push(`/admin/users/edit/${userId}`);
    };

    const handleDeleteSuccess = () => {
        fetchUsers({
            current: users.current,
            size: users.size,
        });
    };

    return (
        <div className="container mx-auto py-6">
            <div className="flex items-center justify-between mb-6">
                <h1 className="text-2xl font-bold">用户管理</h1>
                <Button onClick={() => router.push('/admin/users/create')}>
                    创建用户
                </Button>
            </div>

            <UserSearch
                onSearch={handleSearch}
                onReset={handleReset}
            />

            {loading ? (
                <div className="flex justify-center items-center h-64">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900" />
                </div>
            ) : (
                <UserTable
                    users={users}
                    onPageChange={handlePageChange}
                    onSizeChange={handleSizeChange}
                    onEdit={handleEdit}
                    onDelete={handleDeleteSuccess}
                />
            )}
        </div>
    );
}