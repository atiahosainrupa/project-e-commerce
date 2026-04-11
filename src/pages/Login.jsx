import React from 'react'
import Input from '../components/UI/Input'
import Button from '../components/UI/Button'
import { Link } from 'react-router'

const Login = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center h-screen">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Login</h2>
        <form className="flex flex-col gap-2">
            <Input type='email' label="Email" placeholder="Enter your email address"  />
            <Input type='password' label="Password" placeholder="Enter your password"/>
          <div className="flex items-center justify-between flex-wrap">
            <Link to="/login" className="text-sm text-blue-500 hover:underline mb-0.5">Forgot password?</Link>
            <p className="text-gray-900 mt-4"> Don't have an account? <Link to="/registration" className="text-sm text-blue-500 -200 hover:underline mt-4">Register</Link></p>
          </div>
        <Button>Create Account </Button>
        </form>
      </div>
    </div>
    </div>
  )
}

export default Login
