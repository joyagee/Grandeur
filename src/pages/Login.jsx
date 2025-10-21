import React, { useState } from "react";
import Input from "./input";
import Layout from "../shared/Navigation/Layout";




const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login form submitted:", formData);
     // Here you can call your API or authentication function
 };
  return ( 
  <Layout>
     <div className="flex items-center justify-center min-h-screen bg-primary">
      <form
        onSubmit={handleSubmit}
        className="bg-teal-950 p-6 rounded-2xl shadow-md w-full max-w-sm"
      >
        <h2 className="text-2xl font-semibold mb-6 text-center">Login</h2>

        <div className="mb-4">
          <Input
            kind="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-4">
          <Input
            kind="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md transition"
        >
          Login
        </button>
      </form>
    </div>
  </Layout> );
}
 
export default Login;

  