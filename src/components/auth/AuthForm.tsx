'use client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent } from '@/components/ui/tabs';
import React, { useState } from 'react'

const AuthForm = (type, defaultValues, onSubmit) => {
    const [showPassword, setShowPassword] = useState(false);
    const [username, setUsername] = useState("mgrAdmin");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    return (
        <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-purple-100 via-purple-200 to-blue-300 relative overflow-hidden">
            <div className="w-[450px] shadow-lg border-none bg-white rounded-lg">
                <div className="p-6 flex flex-row items-center justify-between border-b">
                    <div className="flex items-center gap-2">
                        <div className="text-blue-500 text-2xl">
                            <i className="fas fa-seedling" />
                        </div>
                        <h2 className="text-xl font-medium text-blue-600">
                            Mgr管理系统
                        </h2>
                    </div>
                    <div className="flex items-center gap-2">
                        {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
                        <button className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-100 cursor-pointer">
                            <i className="fas fa-sun text-gray-500" />
                        </button>
                        {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
                        <button className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-100 cursor-pointer">
                            <i className="fas fa-globe text-gray-500" />
                        </button>
                    </div>
                </div>

                <div className="p-6">
                    <div className="w-full">
                        <div className="mt-0">
                            <form onSubmit={(e) => e.preventDefault()}>
                                <div className="mb-6">
                                    <h3 className="text-base font-medium text-gray-700 mb-4">
                                        密码登录
                                    </h3>

                                    <div className="space-y-4">
                                        <div>
                                            <input
                                                type="text"
                                                placeholder="用户名"
                                                className="w-full py-3 px-3 text-sm border border-gray-200 rounded"
                                            />
                                        </div>

                                        <div className="relative">
                                            <input
                                                type="password"
                                                placeholder="密码"
                                                className="w-full py-3 px-3 text-sm border border-gray-200 rounded"
                                            />
                                            <button
                                                type="button"
                                                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer"
                                            >
                                                <i className="fas fa-eye" />
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between mb-6">
                                    <div className="flex items-center space-x-2">
                                        <input
                                            type="checkbox"
                                            id="remember"
                                            className="h-4 w-4 text-blue-500 rounded border-gray-300 focus:ring-blue-500"
                                        />
                                        <label
                                            htmlFor="remember"
                                            className="text-sm font-medium leading-none cursor-pointer"
                                        >
                                            记住我
                                        </label>
                                    </div>

                                    <a
                                        // biome-ignore lint/a11y/useValidAnchor: <explanation>
                                        href="#"
                                        className="text-sm text-blue-600 hover:text-blue-800"
                                    >
                                        忘记密码?
                                    </a>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded whitespace-nowrap"
                                >
                                    确认
                                </button>
                            </form>

                            <div className="flex items-center justify-between mt-4">
                                <a
                                    // biome-ignore lint/a11y/useValidAnchor: <explanation>
                                    href="#"
                                    className="text-sm text-gray-600 hover:text-blue-600"
                                >
                                    验证码登录
                                </a>
                                <div className="w-px h-4 bg-gray-300" />
                                <a
                                    // biome-ignore lint/a11y/useValidAnchor: <explanation>
                                    href="#"
                                    className="text-sm text-gray-600 hover:text-blue-600"
                                >
                                    注册账号
                                </a>
                            </div>

                            <div className="mt-8">
                                <div className="flex items-center justify-center">
                                    <div className="h-px bg-gray-200 flex-grow" />
                                    <span className="px-4 text-sm text-gray-500">
                                        其他账号登录
                                    </span>
                                    <div className="h-px bg-gray-200 flex-grow" />
                                </div>

                                <div className="grid grid-cols-3 gap-3 mt-4">
                                    {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
                                    <button
                                        className="py-2 text-sm bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded whitespace-nowrap cursor-pointer"
                                    >
                                        超级管理员
                                    </button>
                                    {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
                                    <button
                                        className="py-2 text-sm bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded whitespace-nowrap cursor-pointer"
                                    >
                                        管理员
                                    </button>
                                    {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
                                    <button
                                        className="py-2 text-sm bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded whitespace-nowrap cursor-pointer"
                                    >
                                        普通用户
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AuthForm