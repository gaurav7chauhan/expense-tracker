import React from "react";

const SummaryCard = () => {
  return (
    <div className="flex flex-col items-center justify-center my-16 w-full text-gray-900">
      <h1 className="text-5xl font-bold mb-5 mr-[39%] text-blue-600 bg-white px-5 py-3 hover:bg-blue-600 hover:text-white transition-all rounded-2xl">Expenses</h1>
      <div className="flex w-[50%] px-10 hover:scale-110 transition-all hover:border-l-2 hover:border-b-8 justify-between border-2 rounded-2xl border-l-8 border-b-0 py-10 text-3xl font-bold">
        <p>Title</p>
        <p>Category</p>
        <p>Amount</p>
        <p>Date</p>
      </div>
      <div className="flex w-[50%] px-10 hover:scale-110 transition-all hover:border-l-2 hover:border-b-8 justify-between border-2  rounded-2xl border-l-8 border-b-0 py-10 text-3xl">
        <p>food</p>
        <p>groceries</p>
        <p>$50</p>
        <p>14/11/02</p>
      </div>
      <div className="flex w-[50%] px-10 hover:scale-110 transition-all hover:border-l-2 hover:border-b-8 justify-between border-l-8 border-2  rounded-2xl py-10 border-b-0 text-3xl">
        <p>rent</p>
        <p>house rent</p>
        <p>$550</p>
        <p>14/11/02</p>
      </div>
      <div className="flex w-[50%] px-10 hover:scale-110 transition-all hover:border-l-2 hover:border-b-8 justify-between border-l-8 border-2  rounded-2xl py-10 text-3xl">
        <p>travel</p>
        <p>bus ticket</p>
        <p>$500</p>
        <p>14/11/02</p>
      </div>
    </div>
  );
};

export default SummaryCard;
