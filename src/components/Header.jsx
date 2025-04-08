import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';


const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
    // Navigation Links
    const navLinks = [
        { name: "Home", path: "/" },
        { name: "About Us", path: "/about" },
        { name: "FAQs", path: "/faq" },
        { name: "Contact", path: "/contact" }
    ];
    // Services Dropdown
    const services = [
        { name: "AC Repair", path: "/services/acrepair" },
        { name: "Geyser Repair", path: "/services/geyser" },
        { name: "Microwave Repair", path: "/services/microwave" },
        { name: "Refrigerator Repair", path: "/services/refrigerator" },
        { name: "LED TV Repair", path: "/services/ledtv" },
        { name: "Washing Machine Repair", path: "/services/washing-machine" },
        { name: "Water Cooler Repair", path: "/services/water-cooler" },
        { name: "Water Dispenser Repair", path: "/services/water-dispenser" },
        { name: "CCTV Camera Repair", path: "/services/cctv" },
        { name: "RO Water Purifier", path: "/services/ro-purifier" },
        { name: "Chimney Repair", path: "/services/chimney" },
    ];

    return (
        <header className="bg-black text-white w-full fixed top-0 z-50 shadow-md">
            <div className="container mx-auto flex justify-between items-center p-5">
                
                <Link to="/" className="text-xl font-bold">
                    <p>A to Z Machine</p>
                </Link>

                {/* Desktop Menu */}
                <nav className="hidden md:flex space-x-6">
                    {navLinks.map((link, index) => (
                        <Link
                            key={index}
                            to={link.path}
                            className="hover:text-red-500 font-semibold transition-all duration-300"
                        >
                            {link.name}
                        </Link>
                    ))}

                    {/* Dropdown on Hover for Desktop */}
                    <div className="relative group">
                        <button className="hover:text-red-500 transition-all font-semibold duration-300 cursor-pointer">
                            Our Services ▼
                        </button>

                        {/* Dropdown Menu */}
                        <div className="absolute left-0 mt-2 bg-white text-black shadow-lg w-56 rounded-md opacity-0 scale-95 transition-all duration-300 ease-in-out invisible group-hover:visible group-hover:opacity-100 group-hover:scale-100">
                            <ul className="py-2">
                                {services.map((service, index) => (
                                    <li key={index} className="px-4 py-2 font-semibold hover:bg-gray-800 transition-all duration-600 hover:text-white">
                                        <Link to={service.path}>{service.name}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </nav>

                {/* Enquiry Button */}
                <Link to="/contact" className="hidden md:block bg-orange-500 font-semibold px-4 py-2 rounded-lg hover:bg-orange-700 transition-all duration-300">
                    Enquiry Now
                </Link>

                {/* Mobile Menu Button */}
                <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <nav className="md:hidden bg-black text-white py-4 px-6 flex flex-col space-y-3">
                    {navLinks.map((link, index) => (
                        <Link
                            key={index}
                            to={link.path}
                            onClick={() => setMenuOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}

                    {/* Mobile Dropdown - Only Opens on Click */}
                    <div className="relative">
                        <button onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)} className="py-2">
                            Our Services ▼
                        </button>
                        {mobileDropdownOpen && (
                            <div className="bg-gray-800 p-2 rounded-md transition-all duration-300 ease-in-out">
                                {services.map((service, index) => (
                                    <Link
                                        key={index}
                                        to={service.path}
                                        className="block px-4 py-2 hover:bg-gray-700 transition-all duration-300"
                                        onClick={() => {
                                            setMobileDropdownOpen(false);
                                            setMenuOpen(false);
                                        }}
                                    >
                                        {service.name}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>

                    <Link to="/contact" className="bg-green-500 px-4 py-2 rounded-md text-center hover:bg-green-600 transition-all duration-300">
                        Enquiry Now
                    </Link>
                </nav>
            )}
        </header>
    );
};

export default Header;
