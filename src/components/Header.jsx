import { useQuery } from "@tanstack/react-query";
import authApi from "../api/auth.api";
import useUserStore from "../store/userStore";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Header() {
  const navigate = useNavigate();
  const signOut = useUserStore((state) => state.signOut);
  const user = useUserStore((state) => state.user);
  const token = sessionStorage.getItem("token");
  console.log(token);

  const handleLogout = () => {
    sessionStorage.removeItem("token");
    signOut();
  };
  useEffect(() => {
    if (!token) {
      signOut();
    }
  }, [token]);
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
