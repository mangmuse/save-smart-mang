import { useEffect } from "react";
import useUserStore from "../store/userStore";
import { useNavigate } from "react-router-dom";

export default function MyPage() {
  const isLoggedin = useUserStore((state) => state.isLoggedin);

  console.log(isLoggedin);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedin) {
      alert("로그인이 필요한 페이지입니다.");
      navigate("/auth");
    }
  }, [isLoggedin]);

  if (!isLoggedin) {
    return null;
  }
  return <div>dsadsa asdsa</div>;
}
