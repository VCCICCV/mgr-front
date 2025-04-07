// import type { Car } from "@/types";
// import { create } from "zustand";

// // 定义状态接口
// interface SelectionsState {
//   activeCar: Car | undefined;
//   activeBodyColor: string | undefined;
//   activeBrakeCaliperColor: string | undefined;
//   activeSeatColor: string | undefined;
//   activeWheelColor: string | undefined;
//   activeWindowTint: string | undefined;
//   suspensionHeight: number;
//   setActiveCar: (car: Car | undefined) => void;
//   setActiveBodyColor: (color: string | undefined) => void;
//   setActiveBrakeCaliperColor: (color: string | undefined) => void;
//   setActiveSeatColor: (color: string | undefined) => void;
//   setActiveWheelColor: (color: string | undefined) => void;
//   setActiveWindowTint: (tint: string | undefined) => void;
//   setSuspensionHeight: (height: number) => void;
// }

// // 创建 Zustand store
// const useSelectionsStore = create<SelectionsState>((set) => ({
//   activeCar: undefined,
//   activeBodyColor: undefined,
//   activeBrakeCaliperColor: undefined,
//   activeSeatColor: undefined,
//   activeWheelColor: undefined,
//   activeWindowTint: undefined,
//   suspensionHeight: 0,
//   setActiveCar: (car) => set({ activeCar: car }),
//   setActiveBodyColor: (color) => set({ activeBodyColor: color }),
//   setActiveBrakeCaliperColor: (color) =>
//     set({ activeBrakeCaliperColor: color }),
//   setActiveSeatColor: (color) => set({ activeSeatColor: color }),
//   setActiveWheelColor: (color) => set({ activeWheelColor: color }),
//   setActiveWindowTint: (tint) => set({ activeWindowTint: tint }),
//   setSuspensionHeight: (height) => set({ suspensionHeight: height }),
// }));

// export default useSelectionsStore;
import { create } from "zustand";

type ConfigState = {
  color: string | null;
  wheel: string | null;
  interior: string | null;
  accessory: string | null;
  setColor: (color: string) => void;
  setWheel: (wheel: string) => void;
  setInterior: (interior: string) => void;
  setAccessory: (accessory: string) => void;
};

export const useConfigStore = create<ConfigState>((set) => ({
  color: null,
  wheel: null,
  interior: null,
  accessory: null,
  setColor: (color) => set({ color }),
  setWheel: (wheel) => set({ wheel }),
  setInterior: (interior) => set({ interior }),
  setAccessory: (accessory) => set({ accessory }),
}));