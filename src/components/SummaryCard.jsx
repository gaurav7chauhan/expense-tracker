import React from "react";
import { useSelector } from "react-redux";

const SummaryCard = () => {
  const { items } = useSelector((state) => state.expenses);

  return (
    <div className="flex flex-col items-center gap-5 justify-center mt-16 w-full text-blue-900">
      <h1 className="text-5xl font-bold mb-5 mr-[39%] text-blue-600 bg-white px-5 py-3 hover:bg-blue-600 hover:text-white transition-all rounded-2xl">
        Expenses
      </h1>
      <div className="flex w-[50%] px-10 bg-white transition-all justify-between rounded-2xl border-8 py-10 text-3xl font-bold">
        <p>Title</p>
        <p>Category</p>
        <p>Amount</p>
        <p>Date</p>
      </div>

      {items.map((item, idx) => (
        <div
          key={idx}
          className="flex w-[50%] px-10 hover:scale-110 bg-white transition-all justify-between border-2 rounded-2xl py-10 text-3xl"
        >
          <p>{item.title}</p>
          <p>{item.category}</p>
          <p>{item.amount}</p>
          <p>{item.date}</p>
        </div>
      ))}
    </div>
  );
};

export default SummaryCard;
