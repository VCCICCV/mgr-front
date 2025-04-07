import { create } from "zustand";

// 定义状态类型
interface ControlsState {
  controlsEnabled: boolean;
  canRotate: boolean;
  showAnnotations: boolean;
  activeAnnotationIndex: number;
  setControlsEnabled: (enabled: boolean) => void;
  setRotate: (canRotate: boolean) => void;
  toggleRotation: () => void;
  toggleAnnotations: () => void;
  setActiveAnnotationIndex: (index: number) => void;
  previousAnnotation: () => void;
  nextAnnotation: (maxIndex: number) => void;
}

// 创建 Zustand store
const useControlsStore = create<ControlsState>((set) => ({
  controlsEnabled: true,
  canRotate: true,
  showAnnotations: false,
  activeAnnotationIndex: 1,
  setControlsEnabled: (enabled) => set({ controlsEnabled: enabled }),
  setRotate: (canRotate) => set({ canRotate }),
  // 齐转
  toggleRotation: () =>
    set((state) => {
      if (state.showAnnotations) return state;
      return { canRotate: !state.canRotate };
    }),
  toggleAnnotations: () =>
    set((state) => {
      if (!state.showAnnotations && state.canRotate) {
        return { showAnnotations: !state.showAnnotations, canRotate: false };
      }
      return { showAnnotations: !state.showAnnotations };
    }),
  setActiveAnnotationIndex: (index) => set({ activeAnnotationIndex: index }),
  previousAnnotation: () =>
    set((state) => ({
      activeAnnotationIndex: Math.max(state.activeAnnotationIndex - 1, 1),
    })),
  nextAnnotation: (maxIndex) =>
    set((state) => ({
      activeAnnotationIndex:
        maxIndex === state.activeAnnotationIndex
          ? state.activeAnnotationIndex
          : state.activeAnnotationIndex + 1,
    })),
}));

export default useControlsStore;
