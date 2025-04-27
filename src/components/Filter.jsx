import React from "react";
import { useSelector } from "react-redux";

const Filter = () => {
  const { items } = useSelector(state => state.expenses);

  const totalAmount = items.reduce((sum, item) => sum + Number(item.amount), 0);
  const mostSpentOn = items.reduce((prev, current) => {
    return Number(prev.amount) > Number(current.amount)? prev : current;
  }, { amount: 0 })

  return (
    <main className="flex flex-col pt-10 items-center gap-10 bg-blue-950 text-blue-800">
      <div className="flex items-center justify-between gap-20">
        <div className="flex flex-col items-start gap-4 border-3 bg-gray-50 py-5 pl-2 pr-20 rounded-xl border-gray-800">
          <p className="text-3xl">This month's total</p>
          <p className="text-5xl font-bold">{totalAmount}$</p>
        </div>
        <div className="flex flex-col items-start gap-4 border-3 bg-gray-50 py-5 pl-2 pr-20 rounded-xl border-gray-800">
          <p className="text-3xl">most spent on</p>
          <p className="text-5xl font-bold">{mostSpentOn.title}</p>
        </div>
      </div>
    </main>
  );
};

export default Filter;
