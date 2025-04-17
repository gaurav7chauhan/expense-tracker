import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const expenseSlice = createSlice({
  name: "expenses",
  initialState,
  reducers: {
    addExpense: (state, action) => {
      const newExpense = {
        id: nanoid(),
        ...action.payload,
      };
      state.items.push(newExpense);
    },
    deleteExpense: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addExpense, deleteExpense } = expenseSlice.actions;
export default expenseSlice.reducer;