
import { create } from "zustand";

type SelectionConfigState = {
  color: string | null;
  wheel: string | null;
  interior: string | null;
  accessory: string | null;
  setColor: (color: string) => void;
  setWheel: (wheel: string) => void;
  setInterior: (interior: string) => void;
  setAccessory: (accessory: string) => void;
};

export const useSelectionsStore = create<SelectionConfigState>((set) => ({
  color: null,
  wheel: null,
  interior: null,
  accessory: null,
  setColor: (color) => set({ color }),
  setWheel: (wheel) => set({ wheel }),
  setInterior: (interior) => set({ interior }),
  setAccessory: (accessory) => set({ accessory }),
}));
export default useSelectionsStore;