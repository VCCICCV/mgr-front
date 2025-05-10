import { create } from "zustand";

interface ConfigOption {
  id: string;
  name: string; // 对应纹理目录名
  displayName: string; // 显示名称
  price: number;
  color: string;
  type: string;
}

interface ConfigStore {
  basePrice: number;
  selectedOptions: Record<string, ConfigOption>;
  selectOption: (option: ConfigOption) => void;
  getTotalPrice: () => number;
  getSelectedTextureName: () => string;
}

const useConfigStore = create<ConfigStore>((set, get) => ({
  basePrice: 219999,
  selectedOptions: {},

  selectOption: (option) => {
    set((state) => {
      const newOptions = { ...state.selectedOptions };

      // 移除同类型旧选项
      // biome-ignore lint/complexity/noForEach: <explanation>
      Object.keys(newOptions).forEach((key) => {
        if (newOptions[key].type === option.type) {
          delete newOptions[key];
        }
      });

      // 添加新选项
      newOptions[option.id] = option;

      return { selectedOptions: newOptions };
    });
  },

  getTotalPrice: () => {
    const state = get();
    return (
      state.basePrice +
      Object.values(state.selectedOptions).reduce(
        (sum, option) => sum + option.price,
        0
      )
    );
  },

  getSelectedTextureName: () => {
    const colorOption = Object.values(get().selectedOptions).find(
      (option) => option.type === "color"
    );
    return colorOption?.name || "blue"; // 默认蓝色
  },
}));

export default useConfigStore;
