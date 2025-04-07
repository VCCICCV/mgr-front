'use client'
import React from 'react'
import { Card } from '../ui/card'
interface CustomerCardProps {
    id: string
    description: string
    price: number
    image: string
    isSelected: boolean
    onSelect: () => void
}
const CustomerCard = ({
    id,
    description,
    price,
    image,
    isSelected,
    onSelect
}: CustomerCardProps) => {
    return (
        <div className='flex flex-col items-center gap-2'>
            <Card className={`w-full h-24 bg-[rgb(73,73,74)] ${isSelected ? 'border-2 border-blue-500' : ''}`} onClick={onSelect}>
                {/* <Image
                    src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
                /> */}

            </Card>

            <p className='text-white'>{description}</p>
            <p className='text-white'>¥{price}</p>
        </div>
    )
}

export default CustomerCard