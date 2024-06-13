import { useEffect, useState } from "react";
import useUserStore from "../store/userStore";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import authApi from "../api/auth.api";
import { validateNickname } from "../utils/checkValidate";
import { useToken } from "../context/TokenContext";
import useAuthMutation from "../hooks/useAuthMutation";

export default function MyPage() {
  const user = useUserStore((state) => state.user);
  const initialUserInfo = { nickname: user?.nickname, avatar: null };
  const [userInfo, setUserInfo] = useState(initialUserInfo);
  const navigate = useNavigate();
  const { token } = useToken();
  const { editUser } = useAuthMutation();

  // const { mutateAsync: editUser } = useMutation({
  //   mutationFn: (userInfo) => authApi.editUser(userInfo),
  //   onSuccess: (data) => {
  //     alert("변경이 완료되었습니다.");
  //     navigate("/");
  //   },
  //   onError: (e) => alert(e),
  // });
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "avatar" && files.length > 0) {
      setUserInfo((prev) => ({ ...prev, avatar: files[0] }));
    } else {
      setUserInfo((prev) => ({ ...prev, nickname: value }));
    }
    console.log(userInfo);
  };

  const handleEditUser = async (e) => {
    e.preventDefault();

    if (!user) {
      alert("로그인이 필요합니다.");
      navigate("/auth");
      return;
    }
    const edittedUserInfo = {
      token,
      nickname: userInfo.nickname,
      avatar: userInfo.avatar,
    };
    const isValidNickname = validateNickname(edittedUserInfo.nickname);
    if (!isValidNickname) {
      alert("두자리 이상 닉네임!!!");
      return;
    }
    await editUser(edittedUserInfo);
  };
  useEffect(() => {
    if (!user) {
      alert("로그인이 필요한 페이지입니다.");
      navigate("/auth");
    }
  }, [user]);

  if (!user) {
    return null;
  }
  return (
    <form
      onSubmit={handleEditUser}
      className="flex flex-col items-center bg-white w-100  rounded-xl p-5"
    >
      <h3 className="text-xl mb-4">프로필 수정</h3>
      <h4 className="text-lg">닉네임</h4>
      <input
        onChange={handleChange}
        name="nickname"
        value={userInfo.nickname}
        type="text"
        className="mb-4 px-2 h-9 border border-gray-400 rounded-md w-3/4"
      />
      <h4 className="text-lg">아바타 이미지</h4>
      <input
        name="avatar"
        onChange={handleChange}
        className=" w-3/4 mb-4"
        type="file"
      />
      <button className="w-11/12 h-9 rounded-md bg-blue-500 text-white">
        프로필 업데이트
      </button>
    </form>
  );
}
