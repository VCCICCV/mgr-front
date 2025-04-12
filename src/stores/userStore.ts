import { create } from "zustand";
import { User, ApiResponse } from "@/types/user";

interface UserState {
  users: User[];
  loading: boolean;
  error: string | null;
  fetchUsers: () => Promise<void>;
  toggleUserStatus: (userId: string) => void;
  deleteUser: (userId: string) => void;
}

const useUserStore = create<UserState>((set) => ({
  users: [],
  loading: false,
  error: null,

  fetchUsers: async () => {
    set({ loading: true, error: null });
    try {
      const response = await fetch("http://localhost:8080/api/users");
      if (!response.ok) throw new Error("Failed to fetch users");
      const data: ApiResponse = await response.json();
      set({ users: data.data, loading: false });
    } catch (err) {
      set({
        error: err instanceof Error ? err.message : "Failed to load users",
        loading: false,
      });
    }
  },

  toggleUserStatus: (userId) => {
    set((state) => ({
      users: state.users.map((user) =>
        user.id === userId
          ? {
              ...user,
              status: user.status === "Enabled" ? "Disabled" : "Enabled",
            }
          : user
      ),
    }));
  },

  deleteUser: (userId) => {
    set((state) => ({
      users: state.users.filter((user) => user.id !== userId),
    }));
  },
}));

export default useUserStore;
