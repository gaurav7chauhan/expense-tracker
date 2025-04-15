import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
});

// /src
//   /components
//   - ExpenseForm.jsx
//   - ExpenseList.jsx
//   - Filter.jsx
//   - SummaryCard.jsx
// /features
//   /expenses
//     - expenseSlice.js
// /pages
//   - Home.jsx
//   - Login.jsx
// /redux
//   - store.js
// App.jsx
// index.js
