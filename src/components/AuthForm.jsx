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
    <form onSubmit={handleAuth} className="flex flex-col items-center gap-2">
      <div className="w-full flex flex-col items-center">
        <label htmlFor="id">아이디</label>
        <input
          placeholder="id"
          id="id"
          className="border px-2 border-gray-500 w-11/12 rounded-md h-10"
          value={id}
          onChange={(e) => setId(e.target.value)}
          type="text"
        />
      </div>
      <div className="w-full flex flex-col items-center ">
        <label className="text-start" htmlFor="password">
          비밀번호
        </label>
        <input
          placeholder="password"
          id="password"
          className="border px-2 border-gray-500 w-11/12 rounded-md  h-10"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
        />
      </div>
      {!isLoginPage && (
        <div className="w-full flex flex-col items-center ">
          <label className="text-start" htmlFor="password">
            닉네임
          </label>
          <input
            className="border px-2 border-gray-500 w-11/12 rounded-md  h-10"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            type="text"
          />
        </div>
      )}
      <button className="mt-16 bg-red-500 text-white text-xl w-11/12 h-12 rounded-md">
        {isLoginPage ? "로그인" : "회원가입"}
      </button>
    </form>
  );
}
