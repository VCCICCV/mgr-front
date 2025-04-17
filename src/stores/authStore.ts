// stores/authStore.ts
import { create } from "zustand";

interface AuthState {
  user: null | User;
  initialize: () => Promise<void>;
  logout: () => Promise<void>;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,

  initialize: async () => {
    try {
      const res = await fetch("/api/auth/me");
      const user = await res.json();
      set({ user });
    } catch (error) {
      set({ user: null });
    }
  },

  logout: async () => {
    await fetch("/api/logout", { method: "POST" });
    set({ user: null });
  },
}));
