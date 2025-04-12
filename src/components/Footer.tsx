/*
 * @Author: cci
 * @Date: 2024-08-30 05:26:16
 * @LastEditors: cci
 * @LastEditTime: 2024-09-09 21:46:58
 * @Description: 
 * 
 * Copyright (c) 2024 by TGM All Rights Reserved. 
 */

import { footerLinks } from "@/lib/constant";
import Image from "next/image";
import Link from "next/link";

const Footer = () => (
    <footer className='flex flex-col text-black-100  mt-5 border-t border-gray-100'>
        <div className='flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10'>
            <div className='flex flex-col justify-start items-start gap-6'>
                <Image src='/logo.svg' alt='logo' width={28} height={28} className='object-contain' />
                <p className='text-base text-gray-700'>
                    TGM 2025 <br />
                    All Rights Reserved &copy;
                </p>
            </div>

            {/* 链接 */}
            <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
                {footerLinks.map((item) => (
                    <div key={item.title} className="footer_link">
                        <h3 className="font-bold">{item.title}</h3>
                        <div className="flex flex-col gap-5">
                            {item.links.map((link) => (
                                <Link
                                    key={link.title}
                                    href={link.url}
                                    className="text-gray-500"
                                >
                                    {link.title}
                                </Link>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>

        <div className='flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10'>
            <p>@2025 TGM. All rights reserved</p>

            <div className="flex-1 flex sm:justify-end justify-center max-sm:mt-4 gap-10">
                <Link href="/" className="text-gray-500">
                    隐私与政策
                </Link>
                <Link href="/" className="text-gray-500">
                    条款与条件
                </Link>
            </div>
        </div>
    </footer>
);

export default Footer;