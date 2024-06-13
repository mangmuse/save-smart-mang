import { useEffect, useState } from "react";
import useUserStore from "../store/userStore";
import { useNavigate } from "react-router-dom";
import { validateNickname } from "../utils/checkValidate";
import { useToken } from "../context/TokenContext";
import useAuthMutation from "../hooks/useAuthMutation";
import AuthInput from "../components/AuthPage/AuthInput";

export default function MyPage() {
  const user = useUserStore((state) => state.user);
  const initialUserInfo = { nickname: user?.nickname, avatar: null };
  const [userInfo, setUserInfo] = useState(initialUserInfo);
  const navigate = useNavigate();
  const { token } = useToken();
  const { editUser } = useAuthMutation();

  const handleChange = (e) => {
    const { id, value, files } = e.target;
    if (id === "avatar" && files.length > 0) {
      setUserInfo((prev) => ({ ...prev, avatar: files[0] }));
    } else {
      setUserInfo((prev) => ({ ...prev, nickname: value }));
    }
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

      <div className="w-full flex items-center flex-col">
        <label htmlFor="nickname" className="text-lg self-start ml-5">
          닉네임
        </label>
        <input
          onChange={handleChange}
          id="nickname"
          value={userInfo.nickname}
          type="text"
          className="mb-4 px-2 h-10 border border-gray-400 rounded-md w-11/12"
        />
      </div>
      <div className="w-full flex items-center flex-col gap-2">
        <label htmlFor="avatar" className="text-lg self-start ml-4">
          아바타 이미지
        </label>
        <input
          id="avatar"
          onChange={handleChange}
          className="self-start w-3/4 ml-4 mb-4"
          type="file"
        />
      </div>
      <button className="w-11/12 h-9 rounded-md bg-blue-500 text-white">
        프로필 업데이트
      </button>
    </form>
  );
}
