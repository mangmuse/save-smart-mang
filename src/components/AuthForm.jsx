import { useMutation } from "@tanstack/react-query";
import authApi from "../api/auth.api";
import { useState } from "react";
import useUserStore from "../store/userStore";
import { useNavigate } from "react-router-dom";

export default function AuthForm({ isLoginPage }) {
  const navigate = useNavigate();
  const signIn = useUserStore((state) => state.signIn);
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");
  const { mutateAsync: signUp } = useMutation({
    mutationFn: (userInfo) => authApi.signUp(userInfo),
    onSuccess: (data) => {
      alert(data.message);
    },
    onError: (e) => {
      alert(e);
      console.log(e);
    },
  });
  const { mutateAsync: login } = useMutation({
    mutationFn: (userInfo) => authApi.login(userInfo),
    onSuccess: (data) => {
      alert("럭인성공");
      sessionStorage.setItem("token", data.accessToken);
      signIn(data);
    },
    onError: (e) => {
      console.log(e);
    },
  });
  const handleAuth = async (e) => {
    e.preventDefault();
    isLoginPage
      ? await login({ id, password })
      : await signUp({ id, password, nickname });
    navigate("/");
  };
  return (
    <form onSubmit={handleAuth} className="flex gap-1">
      <input value={id} onChange={(e) => setId(e.target.value)} type="text" />
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
      />
      {!isLoginPage && (
        <input
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
          type="text"
        />
      )}
      <button className="bg-gray-600">
        {isLoginPage ? "로그인!" : "회원가입!"}
      </button>
    </form>
  );
}
