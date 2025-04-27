import React from "react";
import Input from "../Input";
import Button from "../Button";
import { useDispatch } from "react-redux";
import { addExpense } from "../features/expenses/expenseSlice";

const ExpenseForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = React.useState("");
  const [category, setCategory] = React.useState("");
  const [amount, setAmount] = React.useState("");
  const [date, setDate] = React.useState("");

  const titleOptions = ["food", "travel", "shopping", "rent", "bills"];
  const categoryOptions = ["groceries", "transportation", "clothing", "house rent", "utilities",];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !category || !amount || !date) {
      alert("Please fill in all fields");
      return;
    }
    // Dispatch action to add expense
    dispatch(addExpense({ title, category, amount, date }));

    setTitle("");
    setCategory("");
    setAmount("");
    setDate("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="pt-16 flex flex-col items-center w-full justify-center text-white pb-20">
        <p className="text-6xl pb-5">Add Expense</p>
        <div className="flex flex-col items-center gap-10 w-[50%] text-green-700">
          {/* title select */}
          <select
            className="w-full py-6 px-2 text-3xl rounded-md bg-white"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          >
            <option className="text-gray-500" value="">
              Select Title
            </option>
            {titleOptions.map((item) => (
              <option value={item} className="text-black">
                {item}
              </option>
            ))}
          </select>
          {/* category select */}
          <select
            value={category}
            className="w-full py-6 px-2 text-3xl rounded-md bg-white"
            onChange={(e) => setCategory(e.target.value)}
          >
            <option className="text-gray-500" value="">
              Select Category
            </option>
            {categoryOptions.map((item) => (
              <option value={item} className="text-black">
                {item}
              </option>
            ))}
          </select>
          {/* amount input */}
          <Input
            placeholder="Amount in ₹"
            type="number"
            className="border-none w-full py-5 text-3xl"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          {/* date input */}
          <Input
            placeholder="Date"
            type="date"
            className="border-none w-full py-5 text-3xl"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <Button
          className="bg-green-500 text-white text-3xl mt-10"
          type="submit"
        >
          Add Expense
        </Button>
      </div>
    </form>
  );
};

export default ExpenseForm;
