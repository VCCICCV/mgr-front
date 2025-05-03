import { create } from "zustand";

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
const useUserStore = create((set: (arg0: { user: any; isLoggedIn: boolean; }) => void) => ({
  user: null,
  // biome-ignore lint/complexity/noUselessTernary: <explanation>
  isLoggedIn: localStorage.getItem("token") ? true : false,
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  login: (user: any) => {
    set({ user, isLoggedIn: true });
  },
  logout: () => {
    localStorage.removeItem("token");
    localStorage.removeItem("refresh_token");
    set({ user: null, isLoggedIn: false });
  },
}));

export default useUserStore;
