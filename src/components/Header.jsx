// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { FaBars, FaPhone, FaTimes } from 'react-icons/fa';
// import logo from '../assets/logo.png'

// const Header = () => {
//     const [menuOpen, setMenuOpen] = useState(false);

//     const navLinks = [
//         { name: "Home", path: "/" },
//         { name: "About Us", path: "/about" },
//         { name: "FAQs", path: "/faq" },
//         { name: "Privacy Policy", path: "/policy" },
//         { name: "Contact", path: "/contact" }
//     ];

//     const services = [
//         { name: "AC Repair", path: "/services/acrepair" },
//         { name: "Geyser Repair", path: "/services/gyser" },
//         { name: "Microwave Repair", path: "/services/microwave" },
//         { name: "Refrigerator Repair", path: "/services/refrigerator" },
//         { name: "LED TV Repair", path: "/services/ledtv" },
//         { name: "Washing Machine Repair", path: "/services/washingmachine" },
//         { name: "Water Cooler Repair", path: "/services/watercooler" },
//         { name: "Water Dispenser Repair", path: "/services/waterdispenser" },
//         { name: "CCTV Camera Repair", path: "/services/cctv" },
//         { name: "RO Water Purifier", path: "/services/ropurifier" },
//         { name: "Chimney Repair", path: "/services/chimney" },
//         { name: "Air Dryer", path: "/services/dryer" },
//         { name: "Air Compressor", path: "/services/compressor" }
//     ];

//     return (
//         <header className="bg-black text-white w-full fixed top-0 z-50 shadow-md h-20 font-primary">
//             <div className="container mx-auto flex justify-between items-center p-5">
//                 <Link to="/" className="text-xl font-bold">
//                     <img src={logo} alt='logo' className='h-12 w-auto object-contain' />
//                 </Link>

//                 <nav className="hidden md:flex space-x-6">
//                     {navLinks.map((link, index) => (
//                         <Link
//                             key={index}
//                             to={link.path}
//                             className="text-gray-100 hover:text-gray-300 font-semibold transition-all duration-300"
//                         >
//                             {link.name}
//                         </Link>
//                     ))}

//                     {/* Desktop Dropdown */}
//                     <div className="relative group">
//                         <Link to="/services" className="hover:text-gray-300 transition-all font-semibold duration-300 cursor-pointer">
//                             Our Services
//                         </Link>
//                         <div className="absolute left-0 mt-2 bg-white text-black shadow-lg w-56 rounded-md opacity-0 scale-95 transition-all duration-300 ease-in-out invisible group-hover:visible group-hover:opacity-100 group-hover:scale-100">
//                             <ul className="py-2">
//                                 {services.map((service, index) => (
//                                     <li key={index} className="px-4 py-2 font-semibold hover:bg-gray-800 transition-all duration-600 hover:text-white">
//                                         <Link to={service.path}>{service.name}</Link>
//                                     </li>
//                                 ))}
//                             </ul>
//                         </div>
//                     </div>
//                 </nav>
//                 <button className="">
//                     <a href="tel:8058129195" className="hidden md:flex items-center bg-blue-700 font-semibold px-4 py-2 rounded-lg hover:bg-blue-800 transition-all duration-500">
//                         Enquiry Now <FaPhone className='ml-2' />
//                     </a>
//                 </button>

//                 {/* Mobile Menu Button */}
//                 <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
//                     {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
//                 </button>
//             </div>

//             {/* Mobile Menu */}
//             {menuOpen && (
//                 <nav className="md:hidden bg-black text-white py-4 px-6 flex flex-col space-y-3">
//                     {navLinks.map((link, index) => (
//                         <Link
//                             key={index}
//                             to={link.path}
//                             onClick={() => setMenuOpen(false)}
//                         >
//                             {link.name}
//                         </Link>
//                     ))}

//                     {/* Mobile: Direct Our Services Link */}
//                     <Link
//                         to="/services"
//                         className="py-2"
//                         onClick={() => setMenuOpen(false)}
//                     >
//                         Our Services
//                     </Link>
//                 </nav>
//             )}
//         </header>
//     );
// };

// export default Header;



/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaPhone } from "react-icons/fa";
import { Twirl as Hamburger } from "hamburger-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo.png";

/* ================== ANIMATION VARIANTS ================== */

const menuVariants = {
    hidden: {
        y: "100%",
    },
    show: {
        y: 0,
        transition: {
            duration: 0.5,
            ease: "easeInOut",
            staggerChildren: 0.08,
            when: "beforeChildren",
        },
    },
    exit: {
        y: "100%",
        transition: {
            duration: 0.4,
            ease: "easeInOut",
        },
    },
};

const itemVariants = {
    hidden: {
        y: 30,
        opacity: 0,
    },
    show: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.4,
            ease: "easeOut",
        },
    },
};

/* ================== COMPONENT ================== */

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const navLinks = [
        { name: "Home", path: "/" },
        { name: "About Us", path: "/about" },
        { name: "Contact", path: "/contact" },
        { name: "Privacy Policy", path: "/policy" },
        { name: "FAQs", path: "/faq" },
    ];

    const services = [
        { name: "AC Repair", path: "/services/acrepair" },
        { name: "Geyser Repair", path: "/services/gyser" },
        { name: "Microwave Repair", path: "/services/microwave" },
        { name: "Refrigerator Repair", path: "/services/refrigerator" },
        { name: "LED TV Repair", path: "/services/ledtv" },
        { name: "Washing Machine Repair", path: "/services/washingmachine" },
        { name: "Water Cooler Repair", path: "/services/watercooler" },
        { name: "Water Dispenser Repair", path: "/services/waterdispenser" },
        { name: "CCTV Camera Repair", path: "/services/cctv" },
        { name: "RO Water Purifier", path: "/services/ropurifier" },
        { name: "Chimney Repair", path: "/services/chimney" },
        { name: "Air Dryer", path: "/services/dryer" },
        { name: "Air Compressor", path: "/services/compressor" },
    ];

    return (
        <>
            {/* ================= HEADER ================= */}
            <header className="bg-black text-white fixed top-0 w-full z-50 h-20 shadow-md font-primary">
                <div className="container mx-auto flex justify-between items-center px-5 h-full">
                    {/* Logo */}
                    <Link to="/">
                        <img
                            src={logo}
                            alt="logo"
                            className="h-12 w-auto object-contain"
                            loading="lazy"
                        />
                    </Link>

                    {/* ================= DESKTOP NAV ================= */}
                    <nav className="hidden md:flex items-center space-x-6">
                        {navLinks.map((link, index) => (
                            <Link
                                key={index}
                                to={link.path}
                                className="font-semibold hover:text-gray-300 transition"
                            >
                                {link.name}
                            </Link>
                        ))}

                        {/* Desktop Services Dropdown */}
                        <div className="relative group">
                            <Link to="/services" className="cursor-pointer font-semibold hover:text-gray-300">
                                Our Services
                            </Link>

                            <div className="absolute left-0 mt-2 w-60 bg-white text-black rounded-md shadow-lg opacity-0 invisible scale-95 group-hover:opacity-100 group-hover:visible group-hover:scale-100 transition-all duration-300">
                                <ul className="py-2">
                                    {services.map((service, index) => (
                                        <li
                                            key={index}
                                            className="px-4 py-2 hover:bg-black hover:text-white transition font-semibold"
                                        >
                                            <Link to={service.path}>{service.name}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Enquiry Button */}
                        <a
                            href="tel:8058129195"
                            className="flex items-center bg-blue-700 px-4 py-2 rounded-lg font-semibold hover:bg-blue-800 transition"
                        >
                            Enquiry Now <FaPhone className="ml-2" />
                        </a>
                    </nav>

                    {/* ================= MOBILE HAMBURGER ================= */}
                    <div className="md:hidden z-50">
                        <Hamburger toggled={menuOpen} toggle={setMenuOpen} size={24} />
                    </div>
                </div>
            </header>

            {/* ================= MOBILE MENU ================= */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.nav
                        variants={menuVariants}
                        initial="hidden"
                        animate="show"
                        exit="exit"
                        className="fixed inset-0 bg-black text-white flex flex-col items-center justify-center space-y-6 md:hidden z-40"
                    >
                        {navLinks.map((link, index) => (
                            <motion.div key={index} variants={itemVariants}>
                                <Link
                                    to={link.path}
                                    className="text-2xl font-semibold"
                                    onClick={() => setMenuOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            </motion.div>
                        ))}

                        <motion.div variants={itemVariants}>
                            <Link
                                to="/services"
                                className="text-2xl font-semibold"
                                onClick={() => setMenuOpen(false)}
                            >
                                Our Services
                            </Link>
                        </motion.div>

                        <motion.a
                            variants={itemVariants}
                            href="tel:8058129195"
                            className="flex items-center bg-blue-700 px-6 py-3 rounded-lg font-semibold"
                        >
                            Enquiry Now <FaPhone className="ml-2" />
                        </motion.a>
                    </motion.nav>
                )}
            </AnimatePresence>
        </>
    );
};

export default Header;
