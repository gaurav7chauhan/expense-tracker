import React, { useState } from "react";
import Button from "../Button";
import Input from "../Input";

const Filter = () => {
  const [amount, setAmount] = useState("1200");
  const [spentOn, setSpentOn] = useState("Food");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");

  return (
    <main className="flex flex-col pt-10 items-center gap-10 text-gray-800">
      <div className="flex items-center justify-between gap-20">
        <div className="flex flex-col items-start gap-4 border-3 bg-gray-100 py-5 pl-2 pr-20 rounded-xl border-gray-800">
          <p className="text-3xl">This month's total</p>
          <p className="text-5xl font-bold">${amount}</p>
        </div>
        <div className="flex flex-col items-start gap-4 border-3 bg-gray-100 py-5 pl-2 pr-20 rounded-xl border-gray-800">
          <p className="text-3xl">most spent on</p>
          <p className="text-5xl font-bold">{spentOn}</p>
        </div>
      </div>

      <div className="flex items-center w-[33%] gap-3 text-gray-500 text-2xl">
        <Input
          type="date"
          onChange={(e) => setDate(e.target.value)}
          placeholder="Date"
          className="w-[35%] py-4"
        />
        <select
          className="border-2 border-black py-4 rounded-sm cursor-pointer w-[35%] bg-white font-semibold"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">Select a category</option>
          <option value="food">Food</option>
          <option value="travel">Travel</option>
          <option value="shopping">Shopping</option>
          <option value="rent">Rent</option>
          <option value="bills">Bills</option>
        </select>
        <Button
          type="button"
          variant="primary"
          className="py-4 px-3 cursor-pointer font-semibold"
        >
          Add Expense
        </Button>
      </div>
    </main>
  );
};

export default Filter;
