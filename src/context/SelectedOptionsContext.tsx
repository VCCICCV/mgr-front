// src/context/SelectedOptionsContext.tsx
// src/context/SelectedOptionsContext.tsx
import { createContext, useContext, type Dispatch, type SetStateAction } from 'react';

// 定义上下文值的类型
type SelectedOptionsContextType = {
    selectedOptions: { [key: string]: boolean };
    setSelectedOptions: Dispatch<SetStateAction<{ [key: string]: boolean }>>;
};

// 创建上下文
export const SelectedOptionsContext = createContext<SelectedOptionsContextType | undefined>(undefined);

// 创建自定义钩子来使用上下文
export const useSelectedOptions = () => {
    const context = useContext(SelectedOptionsContext);
    if (context === undefined) {
        throw new Error('useSelectedOptions must be used within a SelectedOptionsProvider');
    }
    return context;
};
