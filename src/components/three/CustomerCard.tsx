'use client';
import React from 'react';
import { Card } from '../ui/card';

interface CustomerCardProps {
    id: string;
    description: string;
    price: number;
    image: string;
    isSelected: boolean;
    onSelect: () => void;
    color: string;
    type: string;
}

const CustomerCard = ({
    id,
    description,
    price,
    image,
    isSelected,
    onSelect,
    color,
    type
}: CustomerCardProps) => {
    return (
        // biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
<div
            className='flex flex-col items-center gap-2 group transition-all duration-300 cursor-pointer'
            onClick={onSelect}
        >
            <Card
                className={`w-full h-24 relative overflow-hidden ${isSelected
                        ? 'border-2 border-blue-500 ring-2 ring-blue-400 ring-opacity-500'
                        : 'border border-gray-700 hover:border-gray-500'
                    }`}
                style={{ backgroundColor: color }}
            >
                {isSelected && (
                    <div className='absolute inset-0 flex items-center justify-center bg-black bg-opacity-30'>
                        <div className='w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center'>
                            {/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                        </div>
                    </div>
                )}
            </Card>
            <p className='text-white text-sm font-medium'>
                {description}
            </p>
            <p className={`text-sm ${price > 0 ? 'text-green-400' :
                    price < 0 ? 'text-red-400' : 'text-gray-400'
                }`}>
                {price > 0 ? `+¥${price}` : price < 0 ? `-¥${Math.abs(price)}` : '标准配置'}
            </p>
        </div>
    );
};

export default CustomerCard;