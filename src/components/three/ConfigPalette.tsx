import React, { useState } from "react";
import CustomerCard from "./CustomerCard";
import { Button } from "../ui/button";
import { configData } from "@/constant/constant";
import useConfigStore from "@/stores/useConfigStore";

const ConfigPalette = () => {
    const { selectOption, selectedOptions, getTotalPrice } = useConfigStore();
    const [activeTab, setActiveTab] = useState("车身");
    const [forceUpdate, setForceUpdate] = useState(0); // 用于强制重新渲染

    const handleSelect = (item: any) => {
        selectOption({
            id: item.id,
            name: item.name, // 传递纹理名称
            displayName: item.displayName,
            price: item.price,
            color: item.color,
            type: item.type
        });
        setForceUpdate(prev => prev + 1); // 强制重新渲染
    };

    // 计算当前总价
    const totalPrice = getTotalPrice();

    return (
        <div className="flex flex-col gap-6 p-4">
            <h1 className="text-xl font-bold mb-4 text-white">su7</h1>
            <div className="flex flex-row gap-4">
                {Object.keys(configData).map((tab) => (
                    <Button
                        key={tab}
                        variant="link"
                        className={`text-white ${activeTab === tab ? "underline underline-offset-4" : ""}`}
                        onClick={() => setActiveTab(tab)}
                    >
                        {tab}
                    </Button>
                ))}
            </div>
            <div className="grid grid-cols-2 gap-4">
                {configData[activeTab as keyof typeof configData].map((item) => (
                    <CustomerCard
                        key={item.id}
                        id={item.id}
                        description={item.name}
                        price={item.price}
                        image=""
                        isSelected={selectedOptions[item.id] !== undefined}
                        onSelect={() => handleSelect(item)}
                        color={item.color}
                        type={item.type}
                    />
                ))}
            </div>
            <div className="mt-4 p-4 bg-gray-800 rounded-lg">
                <h2 className="text-white text-lg font-semibold">
                    总价: ¥{totalPrice.toLocaleString()}
                </h2>
            </div>
        </div>
    );
};

export default ConfigPalette;