import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { createJSONStorage, persist, devtools } from "zustand/middleware";

import initialExpenseData from "../data/fakedata.json";

const useExpensesStore = create(
  devtools(
    immer((set) => ({
      expenses: [],
      setExpenses: (expenses) => set({ expenses }),
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
    }))
  )
);

export default useExpensesStore;
