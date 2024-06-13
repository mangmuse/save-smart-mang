import { useQuery } from "@tanstack/react-query";
import useExpensesStore from "../store/expensesStore";
import expenseApi from "../api/expense.api";

export default function useExpenseQuery() {
  const setExpenses = useExpensesStore((state) => state.setExpenses);

  useQuery({
    queryKey: ["expenses"],
    queryFn: async () => {
      const data = await expenseApi.getExpenses();
      setExpenses(data);
      return res;
    },
  });
  return;
}
