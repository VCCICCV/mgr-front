// src/components/auth/AuthForm.tsx
'use client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent } from '@/components/ui/tabs';
import { Eye, EyeOff, Mail, Smartphone, User } from 'lucide-react';
import type React from 'react';
import { useState } from 'react';

type AuthType = 'SIGN_IN' | 'SIGN_ON' | 'SIGN_UP';
type IdentifierType = 'email' | 'phone' | 'username';

interface AuthFormProps {
    type: AuthType;
    defaultValues: {
        identifier?: string;
        password?: string;
    };
    onSubmit: (values: {
        identifier: string;
        password: string;
    }) => void;
}

const AuthForm = ({ type, defaultValues, onSubmit }: AuthFormProps) => {
    // 表单状态
    const [formValues, setFormValues] = useState({
        identifier: defaultValues.identifier || '',
        password: defaultValues.password || '',
        identifierType: 'username' as IdentifierType, // 默认用户名登录
    });

    // UI 状态
    const [showPassword, setShowPassword] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);
    const [countdown, setCountdown] = useState(0);

    // 处理输入变化
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormValues(prev => ({ ...prev, [name]: value }));
    };

    // 切换标识符类型
    const switchIdentifierType = (type: IdentifierType) => {
        setFormValues(prev => ({ ...prev, identifierType: type }));
    };

    // 发送验证码
    const sendVerificationCode = () => {
        if (countdown > 0) return;
        console.log('发送验证码到:', formValues.identifier);
        setCountdown(60);
        const timer = setInterval(() => {
            setCountdown(prev => {
                if (prev <= 1) clearInterval(timer);
                return prev - 1;
            });
        }, 1000);
    };

    // 提交表单
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit({
            identifier: formValues.identifier,
            password: formValues.password
        });
    };

    // 获取输入框的placeholder和图标
    const getIdentifierInputProps = () => {
        switch (formValues.identifierType) {
            case 'email':
                return {
                    placeholder: '邮箱',
                    icon: <Mail className="h-5 w-5 text-gray-400" />,
                    type: 'email'
                };
            case 'phone':
                return {
                    placeholder: '手机号',
                    icon: <Smartphone className="h-5 w-5 text-gray-400" />,
                    type: 'tel'
                };
            default:
                return {
                    placeholder: '用户名',
                    icon: <User className="h-5 w-5 text-gray-400" />,
                    type: 'text'
                };
        }
    };

    const inputProps = getIdentifierInputProps();

    return (
        <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-purple-100 via-purple-200 to-blue-300 relative overflow-hidden">
            <div className="w-[450px] shadow-lg border-none bg-white rounded-lg">
                <div className="p-6 flex flex-row items-center justify-between border-b">
                    <div className="flex items-center gap-2">
                        <div className="text-blue-500 text-2xl">
                            <i className="fas fa-seedling" />
                        </div>
                        <h2 className="text-xl font-medium text-blue-600">锈化动力商城</h2>
                    </div>
                    <div className="flex items-center gap-2">
                        <button type="button" className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-100 cursor-pointer">
                            <i className="fas fa-sun text-gray-500" />
                        </button>
                        <button type="button" className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-100 cursor-pointer">
                            <i className="fas fa-globe text-gray-500" />
                        </button>
                    </div>
                </div>

                <div className="p-6">
                    <div className="w-full">
                        <div className="mt-0">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-6">
                                    <h3 className="text-base font-medium text-gray-700 mb-4">
                                        {type === 'SIGN_IN' ? '密码登录' :
                                            type === 'SIGN_ON' ? '验证码登录' : '注册账号'}
                                    </h3>

                                    <div className="space-y-4">
                                        {/* 标识符输入 */}
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                                {inputProps.icon}
                                            </div>
                                            <input
                                                type={inputProps.type}
                                                name="identifier"
                                                placeholder={inputProps.placeholder}
                                                value={formValues.identifier}
                                                onChange={handleChange}
                                                className="w-full py-3 pl-10 pr-3 text-sm border border-gray-200 rounded"
                                                required
                                            />
                                            <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex space-x-1">
                                                <button
                                                    type="button"
                                                    onClick={() => switchIdentifierType('username')}
                                                    className={`text-xs px-2 py-1 rounded ${formValues.identifierType === 'username' ? 'bg-blue-100 text-blue-600' : 'text-gray-500 hover:text-blue-600'}`}
                                                >
                                                    用户名
                                                </button>
                                                <button
                                                    type="button"
                                                    onClick={() => switchIdentifierType('email')}
                                                    className={`text-xs px-2 py-1 rounded ${formValues.identifierType === 'email' ? 'bg-blue-100 text-blue-600' : 'text-gray-500 hover:text-blue-600'}`}
                                                >
                                                    邮箱
                                                </button>
                                                <button
                                                    type="button"
                                                    onClick={() => switchIdentifierType('phone')}
                                                    className={`text-xs px-2 py-1 rounded ${formValues.identifierType === 'phone' ? 'bg-blue-100 text-blue-600' : 'text-gray-500 hover:text-blue-600'}`}
                                                >
                                                    手机
                                                </button>
                                            </div>
                                        </div>

                                        {/* 密码输入 */}
                                        {type === 'SIGN_IN' && (
                                            <div className="relative">
                                                <input
                                                    type={showPassword ? 'text' : 'password'}
                                                    name="password"
                                                    placeholder="密码"
                                                    value={formValues.password}
                                                    onChange={handleChange}
                                                    className="w-full py-3 px-3 pr-10 text-sm border border-gray-200 rounded"
                                                    required
                                                />
                                                <button
                                                    type="button"
                                                    onClick={() => setShowPassword(!showPassword)}
                                                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                                >
                                                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* 记住我选项 */}
                                {type === 'SIGN_IN' && (
                                    <div className="flex items-center justify-between mb-6">
                                        <div className="flex items-center space-x-2">
                                            <input
                                                type="checkbox"
                                                id="remember"
                                                checked={rememberMe}
                                                onChange={(e) => setRememberMe(e.target.checked)}
                                                className="h-4 w-4 text-blue-500 rounded border-gray-300 focus:ring-blue-500"
                                            />
                                            <label htmlFor="remember" className="text-sm font-medium leading-none cursor-pointer">
                                                记住我
                                            </label>
                                        </div>
                                        <a href="/forgot-password" className="text-sm text-blue-600 hover:text-blue-800">
                                            忘记密码?
                                        </a>
                                    </div>
                                )}

                                <button
                                    type="submit"
                                    className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded whitespace-nowrap"
                                >
                                    {type === 'SIGN_IN' ? '登录' : '注册'}
                                </button>
                            </form>

                            <div className="flex items-center justify-between mt-4">
                                {type === 'SIGN_IN' ? (
                                    <a href="/sign-up" className="text-sm text-gray-600 hover:text-blue-600 mx-auto">
                                        没有账号？立即注册
                                    </a>
                                ) : (
                                    <a href="/sign-in" className="text-sm text-gray-600 hover:text-blue-600 mx-auto">
                                        已有账号？立即登录
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuthForm;