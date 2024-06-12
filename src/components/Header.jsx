import { useQuery } from "@tanstack/react-query";
import authApi from "../api/auth.api";
import useUserStore from "../store/userStore";
import { Link, useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const signOut = useUserStore((state) => state.signOut);
  const user = useUserStore((state) => state.user);

  const handleLogout = () => {
    sessionStorage.removeItem("token");
    signOut();
  };
  return (
    <header className="w-full mb-10 bg-gray-800 text-white">
      {user && user.nickname}
      <button
        className="text-white"
        onClick={user ? handleLogout : () => navigate("/auth")}
      >
        {user ? "로그아웃" : "로그인"}
      </button>
    </header>
  );
}
