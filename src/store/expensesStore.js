import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { createJSONStorage, persist } from "zustand/middleware";
import initialExpenseData from "../data/fakedata.json";

const savedExpenses = localStorage.getItem("expenses");

const useExpensesStore = create(
  persist(
    immer((set) => ({
      expenses: savedExpenses ? JSON.parse(savedExpenses) : [],
      addExpense: (newExpense) =>
        set((state) => {
          state.expenses.push(newExpense);
        }),
      updateExpense: (updatedExpense) =>
        set((state) => {
          const index = state.expenses.findIndex(
            (exp) => exp.id === updatedExpense.id
          );
          if (index !== -1) {
            state.expenses[index] = updatedExpense;
          }
        }),
      deleteExpense: (toBeDeletedId) =>
        set((state) => ({
          expenses: state.expenses.filter((exp) => exp.id !== toBeDeletedId),
        })),
    })),
    {
      name: "expenses",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useExpensesStore;
