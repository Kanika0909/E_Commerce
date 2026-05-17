import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const API = import.meta.env.VITE_API_URL;

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const res = await axios.post(`${API}/api/auth/signup`, {
        name: formData.fullName,
        email: formData.email,
        password: formData.password,
      });

      console.log("Signup successful:", res.data);
      navigate("/home"); // redirect to home on success
    } catch (err) {
      console.error("Signup failed:", err);
      alert(err);
    }
  };

  return (
    <div>
      <section className="bg-gray-100 flex items-center justify-center min-h-screen">
        <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full">
          <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
            Create Your Account👟
          </h2>
          <p className="text-gray-500 text-sm mb-6 text-center">
            Join Minishop and step into style
          </p>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block mb-1 text-gray-600 font-medium">
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="John Doe"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-500 focus:outline-none"
                required
              />
            </div>
            <div>
              <label className="block mb-1 text-gray-600 font-medium">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-500 focus:outline-none"
                required
              />
            </div>
            <div>
              <label className="block mb-1 text-gray-600 font-medium">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="********"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-500 focus:outline-none"
                required
              />
            </div>
            <div>
              <label className="block mb-1 text-gray-600 font-medium">
                Confirm Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="********"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-500 focus:outline-none"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-yellow-600 text-white py-2 rounded-md hover:bg-yellow-700 transition duration-200"
            >
              Sign Up
            </button>
          </form>
          <p className="text-sm text-center mt-6 text-gray-500">
            Already have an account?{" "}
            <Link to="/login" className="text-yellow-600 hover:underline">
              Login
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
};

export default SignUpPage;
