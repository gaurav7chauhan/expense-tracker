import React from "react";
import { IoLogoStencil } from "react-icons/io5";
import { FaCircleUser } from "react-icons/fa6";
import Button from "../Button";

const Nav = () => {
  return (
    <nav className="flex justify-between items-center px-32 py-4 w-full bg-blue-900 text-stone-100">
      <div className="flex items-center gap-5 w-[20%]">
        <IoLogoStencil className="text-6xl" />
        <p className="text-3xl font-semibold">Expense-Tracker</p>
      </div>
      <div className="flex items-center justify-between pl-44 w-[20%]">
        <FaCircleUser className="text-5xl hover:scale-125 transition-all text-white cursor-pointer" />
        <Button
          type="button"
          variant="danger"
          className="text-3xl cursor-pointer hover:bg-blue-700 font-semibold"
        >
          Logout
        </Button>
      </div>
    </nav>
  );
};

export default Nav;
