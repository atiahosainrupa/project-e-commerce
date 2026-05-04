import React, { useState } from "react";
import Input from "../components/UI/Input";
import Button from "../components/UI/Button";
import { Link } from "react-router";
import { useLoginMutation } from "./services/api";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const [login, { isLoading }] = useLoginMutation();

  const [showPassword, setShowPassword] = useState(false);

  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!loginData.username || !loginData.password) {
      toast.warning("Please fill all fields");
      return;
    }

    try {
      await login(loginData).unwrap();
      toast.success("Login Successful");
    } catch (error) {
      toast.error(
        error?.data?.message || "Invalid Username or Password ❌"
      );
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Login
        </h2>

        <form onSubmit={handleLogin} className="flex flex-col gap-3">

          <Input
            type="text"
            label="Username"
            placeholder="Enter your username"
            value={loginData.username}
            onChange={(e) =>
              setLoginData((prev) => ({
                ...prev,
                username: e.target.value,
              }))
            }
          />

       
          <div className="relative">
            <Input
              type={showPassword ? "text" : "password"}
              label="Password"
              placeholder="Enter your password"
              value={loginData.password}
              onChange={(e) =>
                setLoginData((prev) => ({
                  ...prev,
                  password: e.target.value,
                }))
              }
            />

            <div
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-11 cursor-pointer text-gray-600"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </div>
          </div>

       
          <div className="flex justify-between items-center text-sm">
            <Link
              to="/forgot-password"
              className="text-blue-500 hover:underline"
            >
              Forgot password?
            </Link>

            <Link
              to="/registration"
              className="text-blue-500 hover:underline"
            >
              Create account
            </Link>
          </div>

         
          <Button type="submit" disabled={isLoading}>
            {isLoading ? "Logging in..." : "Login"}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Login;