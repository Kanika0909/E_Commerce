import React from 'react'
import Navbar from './../Components/NavBar';
import { Outlet } from 'react-router-dom';
import Footer from './../Components/Footer';

const MainLayout = () => {
  return (
    <>
    <Navbar />
    <Outlet/>
    <Footer />
    </>
  )
}

export default MainLayout