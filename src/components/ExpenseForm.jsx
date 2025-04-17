import React from "react";
import Input from "../Input";
import Button from "../Button";

const ExpenseForm = () => {
  return (
    <div className="pt-16 flex flex-col items-start w-[70%] ml-[25%] justify-center">
      <p>Add Expense</p>
      <div className="flex flex-col items-center gap-10 w-[70%]">
        <Input placeholder="Title" type="text" className="w-full py-5 text-2xl" />
        <Input placeholder="Amount" type="text" className="w-full py-5 text-2xl" />
        <Input placeholder="Category" type="text" className="w-full py-5 text-2xl" />
        <Input placeholder="Date" type="text" className="w-full py-5 text-2xl" />
      </div>
      <Button />
    </div>
  );
};

export default ExpenseForm;
