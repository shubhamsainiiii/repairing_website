import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";  // Current page check karne ke liye
import { motion } from "framer-motion";

const QuickServiceForm = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();  // Get current page URL

    useEffect(() => {
        if (location.pathname === "/") { // Sirf Home Page par check hoga
            const homeRefreshCount = parseInt(localStorage.getItem("homeRefreshCount")) || 0;
            localStorage.setItem("homeRefreshCount", homeRefreshCount + 1);
            
            if (homeRefreshCount > 0) { // Agar user dubara refresh kare to modal show hoga
                setIsOpen(true);
            }
        }
    }, [location.pathname]);

    return (
        <>
            {isOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 backdrop-blur-md z-50">
                    <motion.div
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="bg-black/80 text-white p-6 rounded-lg shadow-lg w-96 relative"
                    >
                        {/* Close Button */}
                        <button 
                            className="absolute top-3 right-3 text-white text-2xl"
                            onClick={() => setIsOpen(false)}
                        >
                            &times;
                        </button>

                        {/* Form Heading */}
                        <h2 className="text-2xl font-bold text-center mb-4">Get Quick Service</h2>

                        {/* Form Fields */}
                        <form className="space-y-4">
                            <input type="text" placeholder="Your Name" className="w-full p-2 border-b border-gray-400 bg-transparent focus:outline-none" />
                            <input type="text" placeholder="Phone Number" className="w-full p-2 border-b border-gray-400 bg-transparent focus:outline-none" />
                            <input type="text" placeholder="Your Address" className="w-full p-2 border-b border-gray-400 bg-transparent focus:outline-none" />

                            <select className="w-full p-2 border-b border-gray-400 bg-transparent focus:outline-none">
                                <option>Select Your Service</option>
                                <option>AC Repair</option>
                                <option>Geyser Repair</option>
                                <option>Washing Machine Repair</option>
                                <option>Refrigerator Repair</option>
                            </select>

                            {/* Submit Button */}
                            <button className="w-full bg-red-600 text-white py-2 rounded-lg">BOOK NOW</button>
                        </form>

                        {/* Call Now */}
                        <p className="text-center mt-4 text-lg font-bold">
                            Call Now: <span className="text-red-500">+91-7737178454</span>
                        </p>
                    </motion.div>
                </div>
            )}
        </>
    );
};

export default QuickServiceForm;
