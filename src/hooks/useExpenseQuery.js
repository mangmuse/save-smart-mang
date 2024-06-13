import { useQuery } from "@tanstack/react-query";
import useExpensesStore from "../store/expensesStore";
import expenseApi from "../api/expense.api";
import { useState } from "react";
import useUserStore from "../store/userStore";

export default function useExpenseQuery(productId) {
  const [expense, setExpense] = useState();
  const [isEditable, setIsEditable] = useState();
  const user = useUserStore((state) => state.user);

  useQuery({
    queryKey: ["expense"],
    queryFn: async () => {
      const currentExpense = await expenseApi.getExpense(productId);
      setIsEditable(currentExpense?.createdBy === user.userId);
      setExpense(currentExpense);
      return currentExpense;
    },
  });

  return { expense, isEditable };
}
