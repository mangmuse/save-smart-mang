import React, { useRef, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { checkValidate } from "../../utils/checkValidate";
import InputContainer from "../../components/\bInputContainer/InputContainer";
import Button from "../../components/Button/Button";
import useExpensesStore from "../../store/expensesStore";
import useUserStore from "../../store/userStore";
import { useQuery } from "@tanstack/react-query";
import expenseApi from "../../api/expense.api";
import useExpenseMutation from "../../hooks/useExpenseMutation";
import useExpenseQuery from "../../hooks/useExpenseQuery";

export default function EditExpense() {
  const { productId } = useParams();
  const { expense, isEditable } = useExpenseQuery(productId);
  const expenses = useExpensesStore((state) => state.expenses);
  const navigate = useNavigate();
  const { patchExpense, removeExpense } = useExpenseMutation();

  const refs = useRef({
    date: null,
    item: null,
    amount: null,
    description: null,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formState = {
      ...expense,
      id: productId,
      date: refs.current.date.value,
      item: refs.current.item.value,
      amount: refs.current.amount.value,
      description: refs.current.description.value,
    };
    if (!checkValidate(formState)) {
      alert("asd");
      return;
    }
    patchExpense({ productId, updatedExpense: formState });
  };

  const handleDelete = (e) => {
    e.preventDefault();
    const currentDescription = refs.current.description.value;
    const description = prompt(
      `삭제할 내용을 입력해주세요 "${currentDescription}"`
    );
    if (description !== currentDescription) {
      alert("asd");
      return;
    }

    removeExpense(productId);
    navigate("/");
  };

  useEffect(() => {
    const foundExpense = expenses.find((exp) => exp.id === productId);
    if (!foundExpense) {
      navigate("/");
      return;
    } else {
      const { date, item, amount, description } = refs.current;
      date.value = foundExpense.date;
      item.value = foundExpense.item;
      amount.value = foundExpense.amount;
      description.value = foundExpense.description;
    }
  }, [expenses, productId, navigate]);
  return (
    <form
      className="flex flex-col items-stretch bg-white rounded-2xl p-5 w-200 h-100"
      onSubmit={handleSubmit}
    >
      <InputContainer
        isEditable={isEditable}
        id="date"
        type="date"
        labelText="날짜"
        ref={(el) => (refs.current.date = el)}
        isEditPage
      />
      <InputContainer
        isEditable={isEditable}
        id="item"
        type="text"
        labelText="항목"
        ref={(el) => (refs.current.item = el)}
        isEditPage
      />
      <InputContainer
        isEditable={isEditable}
        id="amount"
        type="number"
        labelText="금액"
        ref={(el) => (refs.current.amount = el)}
        isEditPage
      />
      <InputContainer
        isEditable={isEditable}
        id="description"
        type="text"
        labelText="내용"
        ref={(el) => (refs.current.description = el)}
        isEditPage
      />

      <div className="flex gap-2">
        {isEditable && (
          <>
            <Button type="submit" name="submit">
              저장
            </Button>
            <Button type="button" name="delete" onClick={handleDelete}>
              삭제
            </Button>
          </>
        )}
        <Button type="button" name="go-back" onClick={() => navigate(-1)}>
          뒤로가기
        </Button>
      </div>
    </form>
  );
}
