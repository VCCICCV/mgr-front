import { create } from "zustand";

interface GoodsState {
  goods: Product[];
  loading: boolean;
  fetchGoods: () => Promise<void>;
}

export const useGoodsStore = create<GoodsState>((set) => ({
  goods: [],
  loading: false,
  fetchGoods: async () => {
    set({ loading: true });
    try {
      const res = await fetch("/api/admin/goods");
      const data = await res.json();
      set({ goods: data });
    } finally {
      set({ loading: false });
    }
  },
}));
