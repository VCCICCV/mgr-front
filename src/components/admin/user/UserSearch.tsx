// src/components/admin/user/UserSearch.tsx
'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useState } from 'react';

interface UserSearchFormProps {
    onSearch: (params: Api.SystemManage.UserSearchParams) => void;
    onReset: () => void;
}

const UserSearch = ({ onSearch, onReset }: UserSearchFormProps) => {
    const [searchParams, setSearchParams] = useState<Api.SystemManage.UserSearchParams>({
        current: 1,
        size: 10,
        username: undefined,
        nickName: undefined,
        phoneNumber: undefined,
        email: undefined,
        status: undefined,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        // biome-ignore lint/suspicious/noExplicitAny: <explanation>
        setSearchParams((prev: any) => ({
            ...prev,
            [name]: value || undefined,
        }));
    };

    const handleStatusChange = (value: string) => {
        // biome-ignore lint/suspicious/noExplicitAny: <explanation>
        setSearchParams((prev: any) => ({
            ...prev,
            status: value as Api.Common.EnableStatus || undefined,
        }));
    };

    const handleSearch = () => {
        onSearch({ ...searchParams, current: 1 });
    };

    const handleReset = () => {
        setSearchParams({
            current: 1,
            size: 10,
            username: undefined,
            nickName: undefined,
            phoneNumber: undefined,
            email: undefined,
            status: undefined,
        });
        onReset();
    };

    return (
        <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
                <div>
                    {/* biome-ignore lint/a11y/noLabelWithoutControl: <explanation> */}
                    <label className="block text-sm font-medium text-gray-700 mb-1">用户名</label>
                    <Input
                        type="text"
                        name="username"
                        value={searchParams.username || ''}
                        onChange={handleChange}
                        placeholder="请输入用户名"
                    />
                </div>
                <div>
                    {/* biome-ignore lint/a11y/noLabelWithoutControl: <explanation> */}
                    <label className="block text-sm font-medium text-gray-700 mb-1">昵称</label>
                    <Input
                        type="text"
                        name="nickName"
                        value={searchParams.nickName || ''}
                        onChange={handleChange}
                        placeholder="请输入昵称"
                    />
                </div>
                <div>
                    {/* biome-ignore lint/a11y/noLabelWithoutControl: <explanation> */}
                    <label className="block text-sm font-medium text-gray-700 mb-1">手机号</label>
                    <Input
                        type="text"
                        name="phoneNumber"
                        value={searchParams.phoneNumber || ''}
                        onChange={handleChange}
                        placeholder="请输入手机号"
                    />
                </div>
                <div>
                    {/* biome-ignore lint/a11y/noLabelWithoutControl: <explanation> */}
                    <label className="block text-sm font-medium text-gray-700 mb-1">邮箱</label>
                    <Input
                        type="text"
                        name="email"
                        value={searchParams.email || ''}
                        onChange={handleChange}
                        placeholder="请输入邮箱"
                    />
                </div>
                <div>
                    {/* biome-ignore lint/a11y/noLabelWithoutControl: <explanation> */}
                    <label className="block text-sm font-medium text-gray-700 mb-1">状态</label>
                    <Select
                        value={searchParams.status || ''}
                        onValueChange={handleStatusChange}
                    >
                        <SelectTrigger>
                            <SelectValue placeholder="全部状态" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="Enabled">启用</SelectItem>
                            <SelectItem value="Disabled">禁用</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div className="flex items-end gap-2">
                    <Button onClick={handleSearch} className="flex-1">
                        搜索
                    </Button>
                    <Button onClick={handleReset} variant="outline" className="flex-1">
                        重置
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default UserSearch;