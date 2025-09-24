import React from 'react';
import ScrollToTop from '../components/ScrollToTop';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MainLayout = () => {
    return (
        <>
            <ScrollToTop />
            <Navbar />
            <Outlet />
            <ToastContainer />
        </>
    )
}

export default MainLayout;
