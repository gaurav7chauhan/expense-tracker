import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../Input";
import Button from "../Button";
import Home from "./Home";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.trim() || !password.trim()) {
      alert("Please fill all the fields");
      return;
    }

    if (email.includes("@") && password) {
      navigate("/home");
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <div className="w-full h-screen flex items-center justify-center flex-col gap-10 bg-gray-100">
      <h1 className="font-bold text-6xl text-blue-700 capitalize">
        Expense Tracker
      </h1>
      <div className="w-[30%] h-[40%] bg-gray-300 flex flex-col items-center gap-6 pt-6 rounded-2xl text-white">
        <h1 className="text-3xl text-blue-700">Login to your account</h1>

        <form
          className="w-full h-full flex flex-col items-center"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col gap-6 font-mono w-[80%] ">
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email address or Phone number"
              className="py-5 text-2xl"
            />
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="py-5 text-2xl"
            />
            <Button
              className="text-4xl py-5 font-semibold cursor-pointer"
              type="submit"
            >
              Log in
            </Button>
          </div>
          <div className="flex flex-col items-center mt-6 gap-2 text-blue-700">
            <p className="cursor-pointer hover:text-blue-800">
              Forgot Password?
            </p>
            <p className="cursor-pointer hover:text-blue-800">
              Don't have an account? Sign up
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
