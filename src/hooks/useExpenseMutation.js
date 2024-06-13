import { useNavigate } from "react-router-dom";
import expenseApi from "../api/expense.api";
import useExpensesStore from "../store/expensesStore";
import { useMutation } from "@tanstack/react-query";

export default function useExpenseMutation() {
  const navigate = useNavigate();
  const addExpense = useExpensesStore((state) => state.addExpense);
  const updateExpense = useExpensesStore((state) => state.updateExpense);
  const deleteExpense = useExpensesStore((state) => state.deleteExpense);
  const { mutateAsync: postExpense } = useMutation({
    mutationFn: (expense) => expenseApi.postExpense(expense),
    onSuccess: (data) => {
      alert("저장성공");
      addExpense(data);
    },
    onError: (e) => alert(e),
  });

  const { mutateAsync: patchExpense } = useMutation({
    mutationFn: async ({ productId, updatedExpense }) => {
      return await expenseApi.patchExpense(productId, updatedExpense);
    },
    onSuccess: (updatedExpense) => {
      updateExpense(updatedExpense);
      navigate(-1);
    },
    onError: (e) => alert(e),
  });
  const { mutateAsync: removeExpense } = useMutation({
    mutationFn: async (productId) => await expenseApi.removeExpense(productId),
    onSuccess: (data) => {
      deleteExpense(data.id);
      navigate(-1);
    },
    onError: (e) => alert(e),
  });

  return {
    postExpense,
    patchExpense,
    removeExpense,
  };
}
