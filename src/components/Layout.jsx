import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Layout = () => {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);
    return (
        <div className='bg-white font-primary'>
            <Header />
            <main className=''>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
