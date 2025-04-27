import React from "react";
import Filter from "../components/Filter";
import SummaryCard from "../components/SummaryCard";
import ExpenseForm from "../components/ExpenseForm";
import Nav from "../components/Nav";

const Home = () => {
  return (
    <div className="w-full min-h-screen font-mono bg-blue-950">
      <Nav />

      <Filter />

      <SummaryCard />

      <ExpenseForm />
    </div>
  );
};

export default Home;
