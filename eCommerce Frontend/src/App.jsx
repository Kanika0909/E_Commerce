import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";


// Components
import Footer from "./Components/Footer";
import HeroSection from "./Components/HeroSection";
import Navbar from "./Components/NavBar";
import Contact from "./Pages/Contact";
import MainLayout from "./Layouts/MainLayout";
import Home from "./Pages/Home";
import "./App.css";
import LoginPage from './Pages/LoginPage';
import SignUpPage from './Pages/SignUpPage';
import About from './Pages/About';
import Blog from './Pages/Blog';
import Wishlist from './Pages/Wishlist';
import Cart from './Pages/Cart';
import ReturnsExchange from './Pages/ReturnsExchange';
import TermsConditions from "./Pages/TermsConditions";
import PrivacyPolicy from './Pages/PrivacyPolicy';
import Faq from './Pages/Faq';

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />

        <Route element={<MainLayout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/cart" element={<Cart />} />
        </Route>
        <Route path="/returns" element={<ReturnsExchange />} />
        <Route path="/terms" element={<TermsConditions />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/faqs" element={<Faq />} />
      </Routes>
    </>
  );
}

export default App;
