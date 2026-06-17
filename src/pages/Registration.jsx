import React, { useState } from 'react'
import Input from "../components/UI/Input";
import Button from '../components/UI/Button';
import { Link, useNavigate } from 'react-router';
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Registration = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [registerData, setRegisterData] = useState({
    email: "",
    password: "",
  });

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!registerData.email || !registerData.password) {
      toast.warning("Please fill all fields");
      return;
    }

    try {
      setIsLoading(true);

      toast.success("Account Successfully Created! 🎉");
      
      setTimeout(() => {
        navigate("/login");
      }, 2000);

    } catch (error) {
      toast.error(
        error?.data?.message || "Registration Failed. Try again! ❌"
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Registration</h2>
          
          <form onSubmit={handleRegister} className="flex flex-col gap-2">
            
            <Input 
              type='email' 
              label="Email" 
              placeholder="Enter your email address"
              value={registerData.email}
              onChange={(e) =>
                setRegisterData((prev) => ({
                  ...prev,
                  email: e.target.value,
                }))
              }
            />
            
            <div className="relative">
              <Input 
                type={showPassword ? "text" : "password"} 
                label="Password" 
                placeholder="Enter your password"
                value={registerData.password}
                onChange={(e) =>
                  setRegisterData((prev) => ({
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

            <div className="flex items-center justify-between flex-wrap">
              <p className="text-gray-900 mt-4"> 
                Already have an account?{" "}
                <Link to="/login" className="text-sm text-blue-500 hover:underline mt-4">
                  Login
                </Link>
              </p>
            </div>

            <Button type="submit" disabled={isLoading}>
              {isLoading ? "Creating Account..." : "Create Account"}
            </Button>

          </form>
        </div>
      </div>
    </div>
  )
}

export default Registration;