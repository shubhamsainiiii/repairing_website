import React from "react";
import { Link } from "react-router-dom";
import { FaClock, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaArrowUp, FaWhatsapp } from "react-icons/fa";


const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-10 font-primary">
            <div className="container mx-auto grid md:grid-cols-3 gap-8 px-6">
                {/* Opening Hours */}
                <div>
                    <h2 className="text-lg font-bold mb-4">Opening Hours</h2>
                    <p className="flex items-center gap-2 mt-2"><FaClock /> Mon to Sat: 10.00AM - 6.00PM</p>
                    <p className="flex items-center gap-2 mt-2"><FaClock /> Sunday: 11.00AM - 4.00PM</p>
                    <p className="flex items-center gap-2 mt-2"><FaPhoneAlt /> +91-7691888950</p>
                    <p className="flex items-center gap-2 mt-2"><FaEnvelope /> info@universalrepairpoint.com</p>
                    <p className="flex items-center gap-2 mt-2"><FaMapMarkerAlt /> Alankar Plaza, Vidyadhar Nagar, Jaipur</p>
                    <button className="mt-8 mb-6">
                        <Link to="/contact" className="mt-4 bg-blue-700 font-semibold px-4 py-3 rounded-lg hover:bg-blue-900 transition-all duration-300">
                            Enquiry Now
                        </Link>
                    </button>
                </div>

                {/* Our Services */}
                {/* <div>
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
                </div> */}
                <div>
                    <h2 className="text-lg font-bold mb-4">Our Services</h2>
                    <select
                        className="max-w-full p-2 border rounded text-gray-70"
                        onChange={(e) => {
                            const selectedPath = e.target.value;
                            if (selectedPath) {
                                window.location.href = selectedPath; // or use `navigate(selectedPath)` if you're using React Router's useNavigate
                            }
                        }}
                    ><div className="text-gray-600">
                            <option value="">Select a Service</option></div>
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
                            <option key={index} value={service.path} className="text-gray-800" >
                                {service.name} 
                            </option>
                        ))}
                    </select>
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
                            { name: "Privacy Policy", path: "/policy" },

                        ].map((link, index) => (
                            <li key={index} className="hover:text-blue-600 transition-all duration-300">
                                <Link to={link.path}>{link.name}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="mt-4 border-t border-gray-100">
                {/* Floating Buttons */}
                <div className="fixed bottom-9 left-5 z-50">
                    <a href="https://wa.me/7691888950" className="">
                        <FaWhatsapp className="text-green-500 size-11 animate-bounce" />
                    </a>
                </div>
                <div className="fixed bottom-8 right-5 z-50">
                    <button className="text-blue-700 text-md cursor-pointer animate-bounce" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                        <FaArrowUp className="size-11 border-2 rounded-full p-1" />
                    </button>
                </div>

                {/* Centered Copyright Section */}
                <div className="w-full flex mt-5 flex-col items-center">
                    <p className="text-sm text-gray-300 font-semibold">
                        &copy; {new Date().getFullYear()} Your Company. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;