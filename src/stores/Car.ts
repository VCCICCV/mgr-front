import { create } from "zustand";

// 定义状态存储
interface CarState {
  bodyColor: string;
  wheelTexture: string;
  interiorColor: string;
  setBodyColor: (color: string) => void;
  setWheelTexture: (texture: string) => void;
  setInteriorColor: (color: string) => void;
}

const useStore = create<CarState>((set) => ({
  bodyColor: "#026856",
  wheelTexture: "M_Wheel_ALL_002_baseColor.webp",
  interiorColor: "#333333",
  setBodyColor: (color) => set({ bodyColor: color }),
  setWheelTexture: (texture) => set({ wheelTexture: texture }),
  setInteriorColor: (color) => set({ interiorColor: color }),
}));
