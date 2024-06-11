import { createSlice, current } from "@reduxjs/toolkit";
import initialExpenseData from "../data/fakedata.json";

const initialState = initialExpenseData;

const expensesSlice = createSlice({
  name: "expenses",
  initialState,
  reducers: {
    addExpense: (state, action) => {
      state.push(action.payload);
    },
    updateExpense: (state, action) => {
      const index = state.findIndex((exp) => exp.id === action.payload.id);
      if (index !== -1) {
        state[index] = action.payload;
      }
    },
    deleteExpense: (state, action) => {
      return state.filter((exp) => exp.id !== action.payload);
    },
  },
});

export const { addExpense, updateExpense, deleteExpense } =
  expensesSlice.actions;
export default expensesSlice.reducer;
