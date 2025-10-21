import React, { useState } from "react";
import Input from "./input";
import { Link } from "react-router-dom";
import Layout from "../Shared/Layout/Layout";



export default function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    // Clear errors
    setError("");

    // You can now send `formData` to your API
    console.log("Signup form submitted:", formData);
  };

  return (
  <Layout>
     <div className="bg-primary">
         <div className="flex items-center justify-center min-h-screen bg-primary">
      <form
        onSubmit={handleSubmit}
        className="bg-teal-950 p-6 rounded-2xl shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-semibold mb-6 text-center text-green-700">
          Create an Account
        </h2>

        {error && (
          <div className="bg-red-100 text-red-700 p-2 rounded-md mb-4 text-center">
            {error}
          </div>
        )}

        <div className="mb-4">
          <Input
            kind="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

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
            kind="contact"
            value={formData.contact}
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

        <div className="mb-4">
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm your password"
            minLength={6}
            value={formData.confirmPassword}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-md transition"
        >
          Sign Up
        </button>

        <p className="text-center text-gray-600 mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-green-700 font-medium hover:underline">
            Login here
          </Link>
        </p>
      </form>
    </div>
     </div>
  </Layout>
  );
}