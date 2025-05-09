'use client';
// src\components\admin\user\UserDialog.tsx
import type React from 'react';
import { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from '@/components/ui/button';
import { createUser, type UserModel } from '@/lib/actions/userAction';
import { Select, SelectContent, SelectItem, SelectTrigger } from '@/components/ui/select';

interface CreateUserFormData extends UserModel { }

const UserDialog = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [formData, setFormData] = useState<CreateUserFormData>({
        username: '',
        password: '',
        domain: "",
        nickName: '',
        phoneNumber: '',
        email: '',
        status: null
    });
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<boolean>(false);

    const handleOpen = () => {
        setIsOpen(true);
        setError(null);
        setSuccess(false);
    };

    const handleClose = () => {
        setIsOpen(false);
        setError(null);
        setSuccess(false);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleDomainChange = (domain: string) => {
        setFormData((prevData) => ({
            ...prevData,
            domain
        }));
    };

    const handleStatusChange = (status: Api.Common.EnableStatus) => {
        setFormData((prevData) => ({
            ...prevData,
            status
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);
        setSuccess(false);

        try {
            await createUser(formData);
            setSuccess(true);

            // 重置表单但保留对话框打开
            setFormData({
                username: '',
                password: '',
                domain: '',
                nickName: '',
                phoneNumber: '',
                email: '',
                status: null
            });

            // 3秒后自动关闭对话框
            setTimeout(() => {
                handleClose();
            }, 3000);

            // biome-ignore lint/suspicious/noExplicitAny: <explanation>
        } catch (err: any) {
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    const handleReset = () => {
        setFormData({
            username: '',
            password: '',
            domain: '',
            nickName: '',
            phoneNumber: '',
            email: '',
            status: null
        });
        setError(null);
        setSuccess(false);
    };

    return (
        <>
            {/* 修正：将触发按钮移到Dialog组件外部 */}
            <Button onClick={handleOpen} className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                创建用户
            </Button>

            <Dialog open={isOpen} onOpenChange={handleClose}>
                <DialogContent className="p-6">
                    <DialogHeader>
                        <DialogTitle className="text-2xl font-bold">创建用户</DialogTitle>
                    </DialogHeader>
                    <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
                        {/* 表单内容保持不变 */}
                        <div>
                            <label htmlFor="username" className="block text-sm font-medium text-gray-700">用户名:</label>
                            <input
                                type="text"
                                id="username"
                                name="username"
                                value={formData.username}
                                onChange={handleChange}
                                required
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">密码:</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            />
                        </div>
                        <div>
                            <label htmlFor="domain" className="block text-sm font-medium text-gray-700">领域:</label>
                            <Select value={formData.domain || ""} onValueChange={handleDomainChange}>
                                <SelectTrigger className="mt-1 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
                                    {formData.domain || 'Select Domain'}
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="built-in">built-in</SelectItem>
                                    <SelectItem value="built-out">built-out</SelectItem>
                                    <SelectItem value="product">product</SelectItem>
                                    <SelectItem value="order">order</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div>
                            <label htmlFor="nickName" className="block text-sm font-medium text-gray-700">昵称:</label>
                            <input
                                type="text"
                                id="nickName"
                                name="nickName"
                                value={formData.nickName}
                                onChange={handleChange}
                                required
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            />
                        </div>
                        <div>
                            <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">手机号:</label>
                            <input
                                type="text"
                                id="phoneNumber"
                                name="phoneNumber"
                                value={formData.phoneNumber}
                                onChange={handleChange}
                                required
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">邮箱:</label>
                            <input
                                type="text"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            />
                        </div>
                        <div>
                            <label htmlFor="status" className="block text-sm font-medium text-gray-700">状态:</label>
                            <Select value={formData.status || undefined} onValueChange={handleStatusChange}>
                                <SelectTrigger className="mt-1 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
                                    {formData.status || 'Select Status'}
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="Enabled">ENABLED</SelectItem>
                                    <SelectItem value="Disabled">DISABLED</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="col-span-2 flex justify-end space-x-2">
                            {error && <p className="text-red-500">{error}</p>}
                            {success && <p className="text-green-500">用户创建成功！</p>}
                            <Button type="submit" disabled={isLoading} className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                                {isLoading ? '创建中...' : '创建'}
                            </Button>
                            <Button onClick={handleReset} disabled={isLoading} className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600">
                                重置
                            </Button>
                        </div>
                    </form>
                </DialogContent>
            </Dialog>
        </>
    );
};

export default UserDialog;
