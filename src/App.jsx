import React from "react";
import { Home, Login } from "./index";
import { Route, Routes } from "react-router-dom";
const App = () => {
  return (
    <div className="w-full h-screen">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
