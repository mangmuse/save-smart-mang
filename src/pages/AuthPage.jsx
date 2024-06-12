import { useState } from "react";
import AuthForm from "../components/AuthForm";

export default function AuthPage() {
  const [isLoginPage, setIsLoginPage] = useState(true);
  const handleTogglePage = () => setIsLoginPage((prev) => !prev);
  return (
    <div>
      <h3>{isLoginPage ? "로그인" : "회원가입"}</h3>
      <AuthForm isLoginPage={isLoginPage} />
      <span onClick={handleTogglePage}>토글버튼</span>
    </div>
  );
}
