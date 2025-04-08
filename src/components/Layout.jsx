import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import QuickServiceForm from '../pages/QuickServiceForm ';

const Layout = () => {
    return (
        <>
            <Header />
            {/* <QuickServiceForm /> */}
            <main className=''>
                <Outlet />
            </main>
            <Footer />
        </>
    );
};

export default Layout;
