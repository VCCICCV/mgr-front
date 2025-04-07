import React, { useState } from 'react'
import CustomerCard from './CustomerCard'
import { Button } from '../ui/button'
import { configData } from '@/constant';

const ConfigPalette = () => {
    const [activeTab, setActiveTab] = useState('车身'); // 默认选中"车身"

    const tabs = ['车身', '车轮', '内饰', '选装'];

    return (
        <div className='flex flex-col gap-6 p-4'>
            <h1 className='text-xl font-bold mb-4 text-white'>su7</h1>

            <div className='flex flex-row gap-4'>
                {tabs.map((tab) => (
                    <Button
                        key={tab}
                        variant="link"
                        className={`text-white ${activeTab === tab ? 'underline underline-offset-4' : ''}`}
                        onClick={() => setActiveTab(tab)}
                    >
                        {tab}
                    </Button>
                ))}
            </div>

            <div className='grid grid-cols-2 gap-4'>
                {configData[activeTab as keyof typeof configData].map((item) => (
                    <CustomerCard
                        key={item.id}
                        id={item.id}
                        description={item.name}
                        price={item.price}
                        image={item.value}
                        // isSelected={getSelectedValue() === item.id}
                        // onSelect={() => handleSelect(item.id)}
                    />
                ))}
            </div>
        </div>
    )
}

export default ConfigPalette