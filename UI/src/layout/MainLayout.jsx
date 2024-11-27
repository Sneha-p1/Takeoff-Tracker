import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const MainLayout = () => {
  return (
    <>
    <Navbar/>
    
    <ToastContainer/>
    <Footer/>
    </>
  )
}

export default MainLayout