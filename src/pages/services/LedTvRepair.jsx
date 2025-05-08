import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Ac from '/Users/Rk Indora/Desktop/machinesystem/project/src/assets/Ac.jpeg';
import { FaPhoneAlt } from 'react-icons/fa';

const data = [
    { size: "Upto 24 Inch", type: "Wall Mount", price: 200 },
    { size: "Upto 24 Inch", type: "Table Mount", price: 170 },
    { size: "25 to 32 Inch", type: "Wall Mount", price: 250 },
    { size: "25 to 32 Inch", type: "Table Mount", price: 200 },
    { size: "33 to 42 Inch", type: "Wall Mount", price: 325 },
    { size: "33 to 42 Inch", type: "Table Mount", price: 250 },
    { size: "43 to 50 Inch", type: "Wall Mount", price: 350 },
    { size: "43 to 50 Inch", type: "Table Mount", price: 250 },
    { size: "51 to 55 Inch", type: "Wall Mount", price: 400 },
    { size: "51 to 55 Inch", type: "Table Mount", price: 300 },
    { size: "56 to 65 Inch", type: "Wall Mount", price: 425 },
    { size: "56 to 65 Inch", type: "Table Mount", price: 300 },
    { size: "Above 65", type: "Wall Mount", price: 450 },
    { size: "Above 65", type: "Table Mount", price: 350 },
    { size: "TV Un-Installation (Upto 32 Inch)", type: "___", price: 170 },
    { size: "TV Un-Installation (33 to 50 Inch)", type: "___", price: 200 },
    { size: "TV Un-Installation (51 to 65 Inch)", type: "___", price: 250 },
    { size: "Repair & Service (Upto 32 Inch)", type: "___", price: 399 },
    { size: "Repair & Service (33 to 50 Inch)", type: "___", price: 449 },
    { size: "Repair & Service (51 to 65 Inch)", type: "___", price: 499 }
];


const LedTvRepair = () => {
    return (
        <div className="mt-16 py-12 px-6 md:px-16 lg:px-24">
            <div className="max-w-7xl mx-auto">
                {/* Header Title */}
                <h1 className="text-3xl md:text-4xl text-center font-bold mb-4">LED TV Services</h1>
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
                    <div className="w-full max-w-4xl">
                        <h2 className="text-xl font-bold mb-4 text-gray-900 text-center">
                            “Expert LED TV Maintenance and Repair – Because Your Screen Deserves the Best”
                        </h2>
                        <p className="mb-4  text-justify text-gray-700 font-medium">
                            We provide expert LED TV repair and maintenance services to ensure smooth performance, vibrant picture quality, and a hassle-free entertainment experience. From regular servicing and professional installation to genuine spare part replacement — we’ve got it all covered.
                        </p>
                        <h3 className="text-lg font-bold mt-6 mb-2">Why Choose Us for LED TV Services in Jaipur?</h3>
                        <p className="text-gray-800 font-medium">Searching for “LED TV repair near me in Jaipur”? Look no further. Here’s why hundreds of customers trust us for fast, reliable, and affordable TV repair services in the city.</p>
                        <ul className="list-disc pl-5 space-y-2 text-gray-800 text-md mt-4 text-justify">

                            <li><b>Expert Technicians :</b>Our certified LED TV repair specialists in Jaipur are trained to handle all major brands and models — from Samsung, LG, Sony to MI, Panasonic, and more. Whether it’s a display issue, sound problem, or motherboard fault — we fix it all with expert precision.</li>

                            <li><b>Quick Turnaround : </b>We understand how important your entertainment setup is. That’s why we provide same-day LED TV repair services across Jaipur, minimizing your screen downtime and restoring your viewing experience quickly.</li>

                            <li><b>Affordable & Transparent Pricing : </b>Looking for affordable LED TV repair in Jaipur? We offer clear pricing, no hidden fees, and cost-effective solutions tailored to your needs and budget.</li>

                            <li><b>Customer Satisfaction Guaranteed : </b>Every repair is backed by our warranty on parts and labor, giving you peace of mind and lasting performance. Your satisfaction is our top priority.</li>

                            <li><b>Comprehensive Repair Solutions : </b>From screen replacements, HDMI port fixes, to power supply and software issues — we offer complete LED TV repair services for all brands and types (LED, LCD, Smart TVs, Android TVs, etc.)</li>
                        </ul>

                        <h3 className="text-xl font-bold mt-6 mb-2 flex flex-raw">Common LED TV Issues We Expertly Handle</h3>
                        <ul className="list-disc pl-5 space-y-2 text-md mt-4 text-justify text-gray-800">
                            <li><b>LED TV Installation : </b>Got a new TV? Our experts provide professional LED TV wall mounting and installation services tailored to your room layout and viewing comfort. We ensure secure setup, optimal angle, and safe wiring for the best experience</li>

                            <li><b>No Display or Black Screen : </b>TV turning on but showing nothing? We quickly diagnose screen, backlight, or motherboard issues and restore your LED TV’s display to perfect working condition.</li>

                            <li><b>Sound But No Picture : </b>If your TV has audio but no visuals, the issue could lie with the panel, inverter, or internal circuitry. Our technicians handle such problems with precision and care.</li>

                            <li><b>Connectivity & Port Issues : </b>Facing problems with HDMI, USB, or AV ports? We repair or replace faulty input ports so you can enjoy uninterrupted streaming, gaming, or viewing on all your connected devices.</li>

                            <li><b>Power or Startup Failure : </b>Is your TV not turning on or stuck on the boot screen? Whether it’s a power supply board, adapter, or internal circuit problem — we fix it safely and efficiently.</li>

                            <li><b>Screen Flickering, Lines, or Color Issues : </b>Distorted images, horizontal lines, or flickering screens? These are often signs of panel or T-Con board failure. We diagnose and fix such display issues to restore crisp, vibrant visuals.</li>
                        </ul>


                        <h3 className="text-lg font-bold mt-6 mb-2">Our Repair Process</h3>
                        <ul className="list-disc pl-5 space-y-2 text-md mt-4 text-justify text-gray-800">
                            <li><b>Detailed Diagnosis : </b>Our experts begin with a thorough inspection to accurately identify the issue with your LED TV.
                            </li>
                            <li><b>Repair or Replacement : </b>Based on the diagnosis, we either repair the damaged components or recommend a replacement if needed.
                            </li>
                            <li><b>Post-Repair Testing : </b> Once the work is done, we run a complete test to ensure your LED TV is functioning safely and efficiently.
                            </li>
                            <li><b>Customer Satisfaction Check : </b> We consider the job complete only after you review and are fully satisfied with the service provided.
                            </li>
                        </ul>

                        {/* Service Table */}
                        <div className="mb-8 mt-8">
                            <h3 className="text-2xl text-center font-bold mb-4 text-gray-900">Refrigerator Repair/Service Prices</h3>
                            <table className="min-w-full border border-black text-left text-sm">
                                <thead className="">
                                    <tr className=''>
                                        <th className="border border-black px-4 py-2 font-semibold">Repair & Service</th>
                                        <th className="border border-black px-4 py-2 font-semibold">Type</th>
                                        <th className="border border-black px-4 py-2 font-semibold">Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.map((row, i) => (
                                        <tr key={i}>
                                            <td className="border border-black px-4 py-2">{row.size}</td>
                                            <td className="border border-black px-4 py-2">{row.type}</td>
                                            <td className="border border-black px-4 py-2">{row.price}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <p className="text-sm text-gray-500 font-medium mt-4 text-center">
                                Note : Final charges may vary based on model & condition. Technician will confirm after inspection.
                            </p>
                        </div>
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

export default LedTvRepair
