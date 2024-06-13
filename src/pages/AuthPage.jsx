import { useEffect, useState } from "react";
import AuthForm from "../components/AuthPage/AuthForm";
import useUserStore from "../store/userStore";
import { useNavigate } from "react-router-dom";

export default function AuthPage() {
  const navigate = useNavigate();
  const user = useUserStore((state) => state.user);
  const [isLoginPage, setIsLoginPage] = useState(true);
  const handleTogglePage = () => setIsLoginPage((prev) => !prev);
  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, []);
  return (
    <div className=" bg-white w-120  rounded-2xl p-5 ">
      <h3 className="mb-5 text-center text-2xl font-bold">
        {isLoginPage ? "로그인" : "회원가입"}
      </h3>
      <AuthForm isLoginPage={isLoginPage} />
      <div className="flex items-center justify-center  mt-4 font-bold gap-2">
        <span className="">
          {isLoginPage ? "회원이 아니신가요?" : "이미 회원이신가요?"}
        </span>
        <span
          onClick={handleTogglePage}
          className="text-blue-700 cursor-pointer"
        >
          {isLoginPage ? "회원가입" : "로그인"}
        </span>
      </div>
    </div>
  );
}
