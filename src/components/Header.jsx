import { useQuery } from "@tanstack/react-query";
import authApi from "../api/auth.api";
import useUserStore from "../store/userStore";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useToken } from "../context/TokenContext";

export default function Header() {
  const { token } = useToken();
  const navigate = useNavigate();
  const signOut = useUserStore((state) => state.signOut);
  const user = useUserStore((state) => state.user);
  // const token = sessionStorage.getItem("token");

  const handleLogout = () => {
    sessionStorage.removeItem("token");
    signOut();
  };
  useEffect(() => {
    if (!token) {
      signOut();
    }
  }, [token]);
  console.log(user);
  return (
    <header className="flex justify-between items-center w-full h-14 px-5 mb-10 bg-gray-800 text-white">
      <ul className="flex gap-5">
        <Link to="/">HOME</Link>
        {user && <Link to="/mypage">내 프로필</Link>}
      </ul>
      <div className="flex gap-5 items-center">
        {user && (
          <>
            <div className="w-10 h-10 rounded-full">
              <img src={user.avatar} alt="" />
            </div>
            <span className="text-ellipsis">{user.nickname}</span>
          </>
        )}
        <button
          className="bg-red-500 rounded-md w-20 h-9"
          onClick={user ? handleLogout : () => navigate("/auth")}
        >
          {user ? "로그아웃" : "로그인"}
        </button>
      </div>
    </header>
  );
}
