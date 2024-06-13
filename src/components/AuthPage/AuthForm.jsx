import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuthMutation from "../../hooks/useAuthMutation";
import AuthInput from "./AuthInput";

export default function AuthForm({ isLoginPage }) {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");
  const { signUp, login } = useAuthMutation();

  const handleAuth = async (e) => {
    e.preventDefault();
    isLoginPage
      ? await login({ id, password })
      : await signUp({ id, password, nickname });
    navigate("/");
  };
  return (
    <form onSubmit={handleAuth} className="flex flex-col items-center gap-2">
      <AuthInput
        placeholder="아이디를 입력해주세요"
        value={id}
        onChange={(e) => setId(e.target.value)}
        type="text"
      >
        아이디
      </AuthInput>
      <AuthInput
        placeholder="비밀번호를 입력해주세요"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
      >
        비밀번호
      </AuthInput>
      {!isLoginPage && (
        <AuthInput
          placeholder="닉네임을 입력해주세요"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
          type="text"
        >
          닉네임
        </AuthInput>
      )}
      <button className="mt-2 bg-red-500 text-white text-xl w-11/12 h-14 rounded-md">
        {isLoginPage ? "로그인" : "회원가입"}
      </button>
    </form>
  );
}
