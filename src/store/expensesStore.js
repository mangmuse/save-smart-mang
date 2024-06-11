import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

const useExpensesStore = create(
  persist(
    immer((set) => ({
      expenses: [],
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
      deleteExpense: (toBeDeletedId) => {
        return state.filter((exp) => exp.id !== toBeDeletedId);
      },
    }))
  )
);

export default useExpensesStore;
