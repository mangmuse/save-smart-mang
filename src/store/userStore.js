import { devtools } from "zustand/middleware";
import { create } from "zustand";

const savedUser = localStorage.getItem("user");
const token = sessionStorage.getItem("token");

const useUserStore = create((set) => ({
  user: savedUser ? JSON.parse(savedUser) : null,
  isLoggedin: token ? true : false,
  signIn: (user) => {
    localStorage.setItem("user", JSON.stringify(user));
    set({ user });
  },
  signOut: () => {
    localStorage.removeItem("user");
    sessionStorage.removeItem("token");
    set({ user: null, isLoggedin: false });
  },
}));

export default useUserStore;
