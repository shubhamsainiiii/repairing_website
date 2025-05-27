import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Ac from '/Users/Rk Indora/Desktop/machinesystem/project/src/assets/Ac.jpeg';
import { FaPhoneAlt } from 'react-icons/fa';

const RoPurifierRepair = () => {
    return (
        <div className="mt-16 py-12 px-6 md:px-16 lg:px-24">
            <div className="max-w-6xl mx-auto">
                {/* Header Title */}
                <h1 className="text-3xl md:text-4xl text-center font-bold mb-4 text-gray-900">Ro Purifier Services</h1>
                <div className="mb-10 shadow-sm rounded-lg shadow-gray-900 overflow-hidden">
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        navigation
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 2000 }}
                        loop={true}
                    >
                        {[
                            Ac,
                            Ac,
                            Ac
                        ].map((img, index) => (
                            <SwiperSlide key={index}>
                                <img
                                    src={img}
                                    alt={`Slide ${index + 1}`}
                                    className="w-full h-96 object-cover"
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <div className="flex justify-center">
                    <div className="w-full max-w-6xl">
                        <h2 className="text-xl font-bold mb-4 text-gray-900 text-center">
                            "Pure Water, Expert Care Professional RO Installation and Trusted Repair Services to Keep Every Drop Clean and Safe."</h2>

                        <p className="mb-4 text-justify text-gray-900 text-lg">
                            We specialize in RO water purifier installation, repair, and maintenance to ensure your family or business always has access to clean, safe, and great-tasting water. Whether your RO system is leaking, making noise, not purifying properly, or simply due for a service check, our skilled technicians diagnose and resolve every issue with care and precision. We use only high-quality filters and parts to restore your purifier’s performance and longevity.Our mission is to keep your water pure and your worries minimal. With timely service, transparent pricing, and a customer-first approach, we make the process easy and dependable from first consultation to final check.<br />
                            Trust us to take care of your water, so you can take care of what matters most.</p>

                        <h3 className="text-xl font-bold mt-6 mb-2 text-gray-900">Why Choose Us for RO Purifier Services in Jaipur?</h3>
                        <p className="text-gray-900 text-lg text-justify">Looking for Reliable RO Water Purifier Services in Jaipur? You're in the Right Place.<br /> We specialize in RO purifier installation, repair, and regular maintenance for homes and businesses across Jaipur. Whether you're facing issues like low water flow, unusual taste, filter replacement needs, or complete system breakdown. our experienced technicians handle it all with care and precision. We use genuine parts and trusted techniques to ensure your purifier delivers safe, clean, and great-tasting water every day. With prompt service, transparent pricing, and a focus on long-term performance, we make sure your water is always pure and your system runs flawlessly.<br />
                            Because clean drinking water isn’t a luxury it’s a necessity. Let us help keep your water safe.</p>

                        <ul className="list-disc pl-5 space-y-3 text-gray-900 text-lg mt-4 text-justify">

                            <li><b>Skilled Technicians : </b>Our certified RO service experts are trained to work with all leading purifier brands like Kent, Aquaguard, Livpure, Pureit, and more. Whether it's poor filtration, low water pressure, foul taste, or filter/membrane replacement  we diagnose and fix every issue with precision and care.</li>

                            <li><b>Fast & Hassle-Free Service : </b>We understand how essential clean drinking water is. That’s why we offer same-day RO installation and repair throughout Jaipur to keep your family or workplace safe and hydrated without delay.</li>

                            <li><b>Affordable, Honest Pricing : </b>Want high-quality service without overpaying? We provide transparent, budget-friendly pricing with no hidden charges. you'll always know the cost upfront before we begin work.</li>

                            <li><b>Satisfaction Guaranteed : </b>All services are backed by a warranty on parts and workmanship, so you can trust that your RO purifier is in safe hands and built to perform over the long term.</li>

                            <li><b>End-to-End RO Solutions : </b>From complete new installations, filter or membrane changes, tank cleaning, to AMC (Annual Maintenance Contracts). we handle residential and commercial RO service needs with professionalism and reliability.</li>
                        </ul>

                        <h3 className="text-xl font-bold mt-6 mb-2 flex flex-raw text-gray-900">Common RO Purifier Issues We Expertly Handle</h3>

                        <p className='text-gray-900 text-lg text-justify'>RO (Reverse Osmosis) water purifiers have become essential for ensuring safe, clean drinking water in homes, offices, and commercial spaces. However, like any appliance, they can face technical issues over time that affect water quality and system performance. This guide provides practical insights into common RO purifier problems and how to identify or fix them effectively for uninterrupted, healthy hydration.</p>

                        <ul className="list-disc pl-5 space-y-3 text-lg mt-4 text-justify text-gray-900">
                            <li><b>RO Water Purifier Installation : </b>Getting a new RO purifier? Our experts ensure proper wall mounting, water inlet/outlet connections, and secure power setup so your system runs smoothly from day one no leaks, no hassles.</li>

                            <li><b>Water Leakage Problems : </b>Leaks under the sink or around the purifier? From loose pipe fittings and cracked housings to faulty valves or O-rings, we fix every possible leak point for a mess-free, reliable system.</li>

                            <li><b>Low Water Flow or No Water Output :  </b>If your purifier has slow or no output, our technicians check and replace blocked filters, malfunctioning pumps, or pressure valves to bring back proper water pressure and flow.</li>

                            <li><b>Power or Indicator Issues : </b>Not turning on, lights not blinking, or strange beeping? We troubleshoot all electrical components wiring, adapter, SMPS, switches to ensure safe and uninterrupted operation.</li>

                            <li><b>Unusual Sounds or Vibrations : </b>Buzzing or vibrating RO units may indicate faulty pumps or internal blockages. Our team quickly finds and fixes the root cause to restore smooth, quiet functioning.</li>

                        </ul>


                        <h3 className="text-xl font-bold mt-6 mb-2 text-gray-900">Our Repair Process</h3>
                        <ul className="list-disc pl-5 space-y-3 text-lg mt-4 text-justify text-gray-900">

                            <li><b>Detailed Diagnosis : </b>Our experts begin with a thorough inspection to accurately identify the issue with your <b>RO Purifier</b>.</li>

                            <li><b>Repair or Replacement : </b>Based on the diagnosis, we either repair the damaged components or recommend a replacement if needed.</li>

                            <li><b>Post-Repair Testing : </b> Once the work is done, we run a complete test to ensure your <b>RO Purifier</b> is functioning safely and efficiently.</li>

                            <li><b>Customer Satisfaction Check : </b> We consider the job complete only after you review and are fully satisfied with the service provided.</li>
                        </ul>

                        <h3 className="text-xl text-gray-900 font-bold mt-6 mb-2">Final Thoughts</h3>
                        <p className='pl-5 text-lg mt-4 text-justify text-gray-900'>Keeping your RO water purifier in peak condition ensures safe, clean drinking water and long-term system reliability. Regular servicing, timely filter replacements, and early detection of performance issues can prevent major breakdowns. While basic upkeep like cleaning and checking for leaks can be done at home, it's best to call a certified RO technician for electrical faults, pump failures, or internal malfunctionsso you avoid further damage and ensure your purifier runs smoothly for years to come.</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-center my-10">
                <a href="tel:+917691888950"
                    className="flex bg-blue-700 hover:bg-blue-900 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300">
                    <FaPhoneAlt className="mt-1 text-sm mr-4" />
                    Book Now
                </a>
            </div>
        </div>
    )
}

export default RoPurifierRepair
