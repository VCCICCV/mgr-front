'use client';
import { SelectedOptionsContext } from "@/context/SelectedOptionsContext";
import { useState } from "react";

// 首页布局
export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const [selectedOptions, setSelectedOptions] = useState<{ [key: string]: boolean }>({});
    return (
        <div className="flex items-center justify-center h-full w-full">
            <SelectedOptionsContext.Provider value={{ selectedOptions, setSelectedOptions }}>
                {children}
            </SelectedOptionsContext.Provider>
        </div>
    );
}
