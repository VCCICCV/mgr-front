import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import Image from 'next/image'
// 顶部
const Navbar = () => {
    return (
        <header className='w-full absolute z-10'>
            <nav className='max-width flex justify-between items-center sm:px-16 px-6 py-4'>
                <Link href="/" className='flex justify-center items-center'>
                    <Image
                        src="/logo.svg"
                        alt='TGM logo'
                        width={28}
                        height={28}
                        className='object-contain'
                    />
                </Link>
                <div className="flex justify-end space-x-4 pr-8">
                    <Link href="/sign-up">
                        <Button className="bg-blue-500 rounded-full mt-10">注册</Button>
                    </Link>
                    <Link href="/sign-in">
                        <Button className="bg-blue-500 rounded-full mt-10">登录</Button>
                    </Link>
                </div>
            </nav>

        </header>
    )
}

export default Navbar