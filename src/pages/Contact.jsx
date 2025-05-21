import React from 'react';

const Contact = () => {
    return (
        <section className="mt-16 py-12 px-6 md:px-16 lg:px-24">
            <div className="text-center">
                <h1 className="text-4xl font-bold text-gray-900">Contact-us</h1>
                <p className="mt-4 text-lg text-gray-600">
                    Your Trusted Partner for Home Appliance Repairs & Services.
                </p>
            </div>


            <div className="flex flex-col lg:flex-row gap-12 px-6 md:px-16 py-12">
                <div className="w-full lg:w-1/2 ">
                    <iframe
                        title="map-location"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.0464760832186!2d75.77199331504587!3d26.899770283129387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db4c83c032b6d%3A0x4a3b7e5987cb59e0!2sA%20to%20Z%20Machinist%20System!5e0!3m2!1sen!2sin!4v1645511815815!5m2!1sen!2sin"
                        width="100%"
                        height="450"
                        allowFullScreen=""
                        loading="lazy"
                        className="rounded-xl shadow-sm shadow-gray-900"
                    ></iframe>
                </div>

                <div className="w-full lg:w-1/2 bg-gray-100 p-8 rounded-xl shadow-sm shadow-gray-900">
                    <h2 className="text-2xl font-bold mb-6 text-center">Get in Touch With us</h2>
                    <form className="space-y-6">
                        <div className="flex flex-col md:flex-row gap-4">
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="w-full px-4 py-2 rounded-md shadow-sm shadow-gray-900 focus:outline-none"
                            />
                            <input
                                type="email"
                                placeholder="Email Address"
                                className="w-full px-4 py-2 rounded-md shadow-sm shadow-gray-600 focus:outline-none"
                            />
                        </div>
                        <div className="flex flex-col md:flex-row gap-4">
                            <input
                                type="tel"
                                placeholder="Phone Number"
                                className="w-full px-4 py-2 rounded-md shadow-sm shadow-gray-600 focus:outline-none"
                            />
                            <select className="w-full px-4 py-2 rounded-md shadow-sm shadow-gray-600 focus:outline-none">
                                <option>Select Your Service</option>
                                <option>AC Repair</option>
                                <option>Washing Machine Repair</option>
                                <option>Microwave Oven Repair</option>
                                <option>Geyser Repair</option>
                                <option>LED TV Repair</option>
                                <option>Washing Machine Repair</option>
                                <option>Water Cooler Repair</option>
                                <option>Water Dispenser Repair</option>
                                <option>CCTV Camera Repair</option>
                                <option>RO Water Purifier</option>
                                <option>Chimney Repair</option>
                            </select>
                        </div>
                        <textarea
                            placeholder="Your Message"
                            rows="4"
                            className="w-full px-4 py-2 rounded-md shadow-sm shadow-gray-600 focus:outline-none"
                        ></textarea>
                        <div className="flex justify-center">
                            <button
                                type="submit"
                                className="bg-orange-500 hover:bg-orange-700 text-white font-semibold px-6 py-2 rounded-md shadow-sm shadow-black transition-all duration-500 cursor-pointer hover:scale-[1.06]"
                            >
                                SUBMIT NOW
                            </button>
                        </div>

                    </form>
                </div>
            </div>

            <div className="px-6 md:px-16 mt-10 mb-10 text-center">
                <h3 className="text-2xl font-bold mb-2">Our Location</h3>
                <p className="font-semibold">Universal Repair Point</p>
                <p className="text-gray-700">
                    Address : Alankar Plaza, Sector 2, Central Spine, Vidyadhar Nagar, Jaipur, Rajasthan 302039
                </p>
                <p className="font-medium">
                    Phone No :
                    <a
                        href="tel:+917691888950"
                        className="text-red-600 font-semibold hover:underline"
                    >  +91-7691888950
                    </a>
                </p>
            </div>
        </section>
    );
};

export default Contact;
