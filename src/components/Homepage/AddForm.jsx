import { useState } from "react";
import { v4 as uuid } from "uuid";
import { checkValidate } from "../../utils/checkValidate";
import InputContainer from "../InputContainer";
import Button from "../Button";
import useUserStore from "../../store/userStore";
import { useNavigate } from "react-router-dom";
import useExpenseMutation from "../../hooks/useExpenseMutation";

const initialFormState = {
  date: "",
  item: "",
  amount: "",
  description: "",
};

export default function AddForm() {
  const navigate = useNavigate();
  const user = useUserStore((state) => state.user);
  const { postExpense } = useExpenseMutation();

  const [formState, setFormState] = useState(initialFormState);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormState((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    if (!user) {
      alert("로그인 후에 가능합니다.");
      navigate("/auth");
      return;
    }
    e.preventDefault();

    if (!checkValidate(formState)) {
      alert("asd");
      return;
    }
    const newExpense = {
      id: uuid(),
      createdBy: user?.userId,
      ...formState,
      amount: parseFloat(formState.amount),
    };

    await postExpense(newExpense);
    setFormState(initialFormState);
  };

  return (
    <form
      className="flex justify-center items-end w-full  flex-wrap box-border p-5 gap-3 rounded-2xl mb-5 bg-white"
      onSubmit={handleSubmit}
    >
      <InputContainer
        onChange={handleChange}
        id="date"
        value={formState.date}
        type="date"
        labelText="날짜"
      />
      <InputContainer
        onChange={handleChange}
        id="item"
        value={formState.item}
        type="text"
        labelText="항목"
        placeHolder="지출 항목"
      />
      <InputContainer
        onChange={handleChange}
        id="amount"
        value={formState.amount}
        type="number"
        labelText="금액"
        placeHolder="지출 금액"
      />
      <InputContainer
        onChange={handleChange}
        id="description"
        value={formState.description}
        type="text"
        labelText="내용"
        placeHolder="지출 내용"
      />
      <Button name="submit">저장</Button>
    </form>
  );
}
