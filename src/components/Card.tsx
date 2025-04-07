'use client';
import type { CarProps } from '@/types';
import Image from 'next/image'
import React from 'react'
import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from 'next/link';
import { Checkbox } from './ui/checkbox';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';

interface CardProps {
    car: CarProps,
}
const Card = ({ car }: CardProps) => {
    const { name, carConfiguration, info, image } = car;
    const router = useRouter();
    return (
        <div className="flex flex-col items-center justify-center border border-gray-300 rounded-md p-4">
            <h2 className=''>{name}</h2>
            <div className='flex justify-between w-full p-2.5'>
                <div className='text-center'>
                    <h3>续航</h3>
                    <p>{carConfiguration.range}</p>
                </div>
                <div className='text-center'>
                    <h3>最高速度</h3>
                    <p>{carConfiguration.topSpeed}</p>
                </div>
                <div className='text-center'>
                    <h3>百公里加速</h3>
                    <p>{carConfiguration.acceleration}</p>
                </div>
            </div>
            <div>
                <p>
                    {info}
                </p>
            </div>
            <Image src={image} alt={name} width={300} height={200} />
            <div className='flex flex-row items-center justify-center gap-4'>
                <Link href={'/selection'}>
                    <Button variant="outline" size="icon">
                        <ChevronRight />
                    </Button>
                </Link>
                <Checkbox
                    onClick={() =>
                        toast("车型对比", {
                            description: "选择两种以上车型进行对比",
                            action: {
                                label: "对比",
                                onClick: () => {
                                    router.push('/compare');;
                                }, 
                            },
                        })
                    } />
                <p>添加对比</p>
            </div>
        </div>
    )
}

export default Card