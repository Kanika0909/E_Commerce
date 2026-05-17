import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const API = import.meta.env.VITE_API_URL;

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
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

    try {
      const response = await axios.post(`${API}/api/auth/login`, {
        email: formData.email,
        password: formData.password,
      });

      console.log("Login successful:", response.data);
      navigate("/home");
    } catch (error) {
      console.error("Login failed:", error);
      alert("Invalid email or password.");
    }
  };

  return (
    <div>
      <section className="bg-gray-100 flex items-center justify-center min-h-screen">
        <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full">
          <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
            Welcome to Minishop👟
          </h2>
          <p className="text-gray-500 text-sm mb-6 text-center">
            Login to your Minishop account
          </p>
          <form onSubmit={handleSubmit} className="space-y-5">
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
            <div className="flex items-center justify-between">
              <label className="flex items-center text-sm">
                <input type="checkbox" className="mr-2 text-yellow-600" />{" "}
                Remember me
              </label>
              <a href="#" className="text-sm text-yellow-600 hover:underline">
                Forgot password?
              </a>
            </div>
            <button
              type="submit"
              className="w-full bg-yellow-600 text-white py-2 rounded-md hover:bg-yellow-700 transition duration-200"
            >
              Login
            </button>
          </form>
          <p className="text-sm text-center mt-6 text-gray-500">
            Don't have an account?{" "}
            <Link to="/signup" className="text-yellow-600 hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
};

export default LoginPage;
