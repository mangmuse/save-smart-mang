import { useMutation } from "@tanstack/react-query";
import authApi from "../api/auth.api";
import useUserStore from "../store/userStore";
import { useNavigate } from "react-router-dom";

export default function useAuthMutation() {
  const signIn = useUserStore((state) => state.signIn);
  const navigate = useNavigate();

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
      alert("로그인이 완료되었습니다.");
      sessionStorage.setItem("token", data.accessToken);
      signIn(data);
    },
    onError: (e) => {
      console.log(e);
    },
  });

  const { mutateAsync: editUser } = useMutation({
    mutationFn: (userInfo) => authApi.editUser(userInfo),
    onSuccess: (data) => {
      signIn(data);
      alert(data.message);
      navigate("/");
    },
    onError: (e) => alert(e),
  });

  return {
    signUp,
    login,
    editUser,
  };
}
