import React from "react";
import { Link } from "react-router-dom";
import { FaClock, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaPhone } from "react-icons/fa";


const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-8 font-primary">
            <div className="container mx-auto grid md:grid-cols-3 gap-8 px-6">
                <div>
                    <h2 className="text-lg font-bold mb-4">Info About Us</h2>
                    <p className="flex items-center gap-2 mt-2"><FaClock />Opening Hours : 24x7</p>
                    <a href="tel:7691888950" className="flex items-center gap-2 mt-2"><FaPhoneAlt /> +91-7691888950</a>
                    <a href="mailto:universalrepairpoints@gmail.com" className="flex items-center gap-2 mt-2"><FaEnvelope /> universalrepairpoints@gmail.com</a>
                    <p className="flex items-center gap-2 mt-2"><FaMapMarkerAlt /> Murlipura, Jaipur</p>
                    <button className="">
                        <a href="tel:7691888950" className="flex justify-around gap-3 items-center mt-4 bg-blue-700 font-semibold px-3.5 py-2.5 rounded-lg hover:bg-blue-800 transition-all duration-500">
                            Enquiry Now <FaPhone />
                        </a>
                    </button>
                </div>
                <div>
                    <h2 className="text-lg font-bold mb-4">Our Services</h2>
                    <select
                        className="p-3 rounded-lg outline-none text-gray-200 border border-gray-600 shadow-md
              transition-all duration-300 appearance-none relative"
                        onChange={(e) => {
                            const selectedPath = e.target.value;
                            if (selectedPath) {
                                window.location.href = selectedPath;
                            }
                        }}
                    >
                        <option value="" className="text-gray-400">
                            Select a Service
                        </option>
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
                            <option key={index} value={service.path} className="text-gray-900">
                                {service.name}
                            </option>
                        ))}
                    </select>
                </div>


                <div>
                    <h2 className="text-lg font-bold mb-4">Useful Links</h2>
                    <ul className="space-y-2">
                        {[
                            { name: "Home", path: "/" },
                            { name: "About Us", path: "/about" },
                            { name: "Our Services", path: "/services" },
                            { name: "FAQs", path: "/faq" },
                            { name: "Contact Us", path: "/contact" },
                            { name: "Privacy Policy", path: "/policy" },

                        ].map((link, index) => (
                            <li key={index} >
                                <Link to={link.path} className="hover:text-orange-600 transition-all duration-500 hover:scale-110">{link.name}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="mt-1 border-t border-gray-100">
                <div className="fixed bottom-9 left-5 z-50">
                    <a href="https://wa.me/7727922769" className="">
                        <FaWhatsapp className="text-green-400 size-11 animate-bounce hover:text-green-500 duration-500" />
                    </a>
                </div>
                <div className="fixed bottom-8 right-5 z-50">
                    <a href="tel:7691888950" className="text-blue-600 text-md cursor-pointer hover:text-blue-700 duration-300">
                        <FaPhone className="size-11 border-2 rounded-full p-1 animate-bounce" />
                    </a>
                </div>
                <div className="w-full flex flex-col items-center">
                    <p className="text-sm text-gray-300 mt-3 font-semibold">
                        &copy; {new Date().getFullYear()} Universal Repair Point - All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;