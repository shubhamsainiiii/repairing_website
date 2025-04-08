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
                <div>
                    <h2 className="text-lg font-bold mb-4">Our Services</h2>
                    <ul className="space-y-2">
                        {[
                            "AC (Air Conditioning)", "Geyser Repair Services", "Microwave Oven Repair Services",
                            "Refrigerator Repair Services", "LED TV Repair Services", "Washing Machine Repair Services",
                            "Water Cooler Repair Services", "Water Dispenser Repair Services",
                            "CCTV Camera Repairing Services", "RO Water Purifier", "Chimney Repair Services"
                        ].map((service, index) => (
                            <li key={index} className="hover:text-green-400 transition-all duration-400"><Link to="/services">{service}</Link></li>
                        ))}
                    </ul>
                </div>

                {/* Useful Links */}
                <div>
                    <h2 className="text-lg font-bold mb-4">Useful Links</h2>
                    <ul className="space-y-2">
                        {[
                            "About Us", "Our Services", "Blog", "FAQs",
                            "Privacy Policy", "Terms & Conditions", "Site Map", "Contact Us"
                        ].map((link, index) => (
                            <li key={index} className="hover:text-green-400 trasition-all duration-400">
                                <Link to={`/${link.replace(/\s+/g).toLowerCase()}`}>{link}</Link>
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
