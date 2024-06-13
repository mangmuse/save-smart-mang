import { useParams } from "react-router-dom";
import ExpenseCard from "../../components/ExpenseCard/ExpenseCard";
import ExpenseSummary from "../../components/ExpenseSummary/ExpenseSummary";
import useExpensesStore from "../../store/expensesStore";
import { useEffect } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import expenseApi from "../../api/expense.api";

export default function Expenses() {
  const { month } = useParams();
  const expenses = useExpensesStore((state) => state.expenses);
  const setExpenses = useExpensesStore((state) => state.setExpenses);
  useQuery({
    queryKey: ["expenses"],
    queryFn: async () => {
      const data = await expenseApi.getExpenses();
      setExpenses(data);
      return res;
    },
  });
  const filteredData = expenses
    .filter((data) => {
      const expenseMonth = new Date(data.date).getMonth() + 1;
      return expenseMonth === parseInt(month, 10);
    })
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  return (
    <article className="w-full">
      <ExpenseSummary expenses={filteredData} />
      <section className="bg-white box-border rounded-2xl p-4 w-full h-full">
        {filteredData.length > 0 &&
          filteredData.map((ex) => (
            <ExpenseCard key={ex.id} data={ex}>
              {ex.item}
            </ExpenseCard>
          ))}
        {filteredData.length === 0 && (
          <div className="flex justify-center items-center text-base text-gray-500 bg-gray-50 p-5 rounded-lg">
            지출이 없습니다.
          </div>
        )}
      </section>
    </article>
  );
}
