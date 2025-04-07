'use client'
import React from 'react'
import Image from 'next/image'
import { Button } from './ui/button'
import Link from 'next/link'

const Hero = () => {

    return (
        <div className='flex xl:flex-row flex-col gap-5 relative z-0 max-w-[1440px] mx-auto'>
            <div className='flex-1 pt-36 padding-x'>
                <h1 className='2xl:text-[72px] sm:text-[64px] text-[50px] font-extrabold'>
                    锈化动力，探索世界的可靠伙伴
                </h1>
                <p className='text-[27px] text-black-100 font-light mt-5'>
                    致力于为您提供可靠、实用、省心的汽车购买平台
                </p>
                <Link href="/selection" >
                    <Button className="bg-blue-500 rounded-full mt-10">探索汽车</Button>
                </Link>
            </div>

            <div className='xl:flex-[1.5] flex justify-end items-end w-full xl:h-screen'>
                <div className='relative xl:w-full w-[90%] xl:h-full h-[590px] z-0'>
                    <Image src="/image/home.png"
                        alt='home'
                        fill className='object-contain'
                    />
                </div>
            </div>
        </div>
    )
}

export default Hero