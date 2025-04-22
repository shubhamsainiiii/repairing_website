import React from "react";
import { Link } from "react-router-dom";
import { FaClock, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsappSquare, FaArrowUp } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-10">
            <div className="container mx-auto grid md:grid-cols-3 gap-8 px-6">
                {/* Opening Hours */}
                <div>
                    <h2 className="text-lg font-bold mb-4">Opening Hours</h2>
                    <p className="flex items-center gap-2 mt-2"><FaClock /> Mon to Sat: 10.00AM - 6.00PM</p>
                    <p className="flex items-center gap-2 mt-2"><FaClock /> Sunday: 11.00AM - 4.00PM</p>
                    <p className="flex items-center gap-2 mt-2"><FaPhoneAlt /> +91-7737178454</p>
                    <p className="flex items-center gap-2 mt-2"><FaEnvelope /> info@atozmachinistsystem.com</p>
                    <p className="flex items-center gap-2 mt-2"><FaMapMarkerAlt /> Alankar Plaza, Vidyadhar Nagar, Jaipur</p>
                    <button className="mt-5">
                        <Link to="/contact" className="mt-4 px-4 py-2 bg-green-500 rounded cursor-pointer">Enquiry Now</Link>
                    </button>
                </div>

                {/* Our Services */}
                {/* Our Services */}
                <div>
                    <h2 className="text-lg font-bold mb-4">Our Services</h2>
                    <ul className="space-y-2">
                        {[
                            { name: "AC (Air Conditioning)", path: "/services/acrepair" },
                            { name: "Geyser Repair Services", path: "/services/gyser" },
                            { name: "Microwave Oven Repair Services", path: "/services/microwave" },
                            { name: "Refrigerator Repair Services", path: "/services/refrigerator" },
                            { name: "LED TV Repair Services", path: "/services/ledtv" },
                            { name: "Washing Machine Repair Services", path: "/services/washingmachine" },
                            { name: "Water Cooler Repair Services", path: "/services/watercooler" },
                            { name: "Water Dispenser Repair Services", path: "/services/waterdispenser" },
                            { name: "CCTV Camera Repairing Services", path: "/services/cctv" },
                            { name: "RO Water Purifier", path: "/services/ropurifier" },
                            { name: "Chimney Repair Services", path: "/services/chimney" },
                            { name: "Air Dryer", path: "/services/dryer" },
                            { name: "Air Compressor", path: "/services/compressor" }
                        ].map((service, index) => (
                            <li key={index} className="hover:text-green-400 transition-all duration-300">
                                <Link to={service.path}>{service.name}</Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Useful Links */}
                <div>
                    <h2 className="text-lg font-bold mb-4">Useful Links</h2>
                    <ul className="space-y-2">
                        {[
                            { name: "Home", path: "/" },
                            { name: "About Us", path: "/about" },
                            { name: "Our Services", path: "/services" },
                            { name: "FAQs", path: "/faq" },
                            { name: "Contact Us", path: "/contact" },
                        ].map((link, index) => (
                            <li key={index} className="hover:text-green-400 transition-all duration-300">
                                <Link to={link.path}>{link.name}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="mt-8 text-center text-gray-500 text-sm border-t border-gray-700 pt-4 px-6">
                {/* Floating Buttons */}
                <div className="fixed bottom-5 left-5 z-50">
                    <a href="https://wa.me/7691888950" className="text-green-500 text-xl">
                        <FaWhatsappSquare className="size-11" />
                    </a>
                </div>
                <div className="fixed bottom-5 right-5 z-50">
                    <button className="text-red-500 text-md cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                        <FaArrowUp className="size-11 border-2 rounded-full p-1" />
                    </button>
                </div>

                {/* Centered Copyright Section */}
                <div className="w-full flex flex-col items-center py-6 bg-gray-100 dark:bg-gray-900">
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                        &copy; {new Date().getFullYear()} Your Company. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
