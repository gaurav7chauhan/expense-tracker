import React, { useState } from "react";
import { IoLogoStencil } from "react-icons/io5";
import { FaCircleUser } from "react-icons/fa6";
import { PiHandsPrayingBold } from "react-icons/pi";
import Button from "../Button";
import Input from "../Input";
import Filter from "../components/Filter";
import SummaryCard from "../components/SummaryCard";
import ExpenseForm from "../components/ExpenseForm";

const Home = () => {

  return (
    <div className="w-full min-h-screen font-mono bg-gray-300">
      <nav className="flex justify-between items-center px-32 py-4 w-full bg-gray-600 text-stone-100">
        <div className="flex items-center gap-5 w-[20%]">
          <IoLogoStencil className="text-6xl" />
          <p className="text-3xl font-semibold">Expense-Tracker</p>
        </div>
        <div className="w-[40%] flex items-center gap-2">
          <Input
            className="bg-red-700 w-full py-3 text-2xl"
            placeholder="Enter your expense..."
          />
          <Button
            type="button"
            variant="primary"
            className="hover:scale-105 text-2xl cursor-pointer font-semibold rounded-lg"
          >
            Search
          </Button>
        </div>
        <div className="flex items-center justify-between pl-44 w-[20%]">
          <FaCircleUser className="text-5xl hover:scale-125 transition-all text-white cursor-pointer" />
          <Button
            type="button"
            variant="danger"
            className="text-3xl cursor-pointer hover:bg-white hover:text-blue-700 font-semibold"
          >
            Logout
          </Button>
        </div>
      </nav>
{/* 
      <div className="flex items-center justify-center gap-8 bg-blue-700">
        <p className="text-7xl text-white py-8">Welcome, Gaurav Chauhan</p>
        <PiHandsPrayingBold className=" text-6xl text-gray-300" />
      </div> */}

      <Filter />

      <SummaryCard />

      <ExpenseForm />
    </div>
  );
};

export default Home;
