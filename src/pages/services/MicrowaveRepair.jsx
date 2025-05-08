import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Ac from '/Users/Rk Indora/Desktop/machinesystem/project/src/assets/Ac.jpeg';
import { FaPhoneAlt } from 'react-icons/fa';

const microwaveRepairData = [
    { service: "Repair & Troubleshooting", charge: "349" },
    { service: "General Check-up & Deep Cleaning", charge: "399" },
];

const sparePartsData = [
    { part: "Bulb", price: "230", charge: "S.C." },
    { part: "Transformer", price: "2300-2900", charge: "S.C." },
    { part: "PCB Repair", price: "1900", charge: "S.C." },
    { part: "Capacitor", price: "400", charge: "S.C." },
    { part: "Magnetron", price: "1900", charge: "S.C." },
    { part: "PCB New", price: "2630-3300", charge: "S.C." },
    { part: "Temp Sensor", price: "300", charge: "S.C." },
    { part: "Fuse Set", price: "200", charge: "S.C." },
    { part: "Iron Paper", price: "170", charge: "S.C." },
    { part: "Fan Motor", price: "900", charge: "S.C." },
    { part: "Motor (Plate)", price: "800", charge: "S.C." },
    { part: "Door Switch", price: "300", charge: "S.C." },
    { part: "Touch Panel", price: "1650-270", charge: "S.C." },
    { part: "Diode - Signle", price: "200", charge: "S.C." },
    { part: "Diode - Double	", price: "230", charge: "S.C." },
];
const MicrowaveRepair = () => {
    return (
        <div className="mt-16 py-12 px-6 md:px-16 lg:px-24">
            <div className="max-w-7xl mx-auto">
                {/* Header Title */}
                <h1 className="text-3xl md:text-4xl text-center font-bold mb-4">Microwave Services</h1>
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
                            “Expert Microwave Repair Services for Your Convenience and Effortless Cooking”
                        </h2>
                        <p className="mb-4  text-center  text-gray-700 font-medium">
                            We make sure your microwave works efficiently, heats evenly, and gives you a smooth cooking experience every day. From regular servicing and installation to replacing damaged parts — we’ve got it all covered with expert care.
                        </p>
                        <h3 className="text-lg font-bold mt-6 mb-2">Trusted Microwave Repair Services in Jaipur – Fast, Reliable & Affordable</h3>
                        <p className="text-gray-800 font-medium">Microwave not heating? Buttons not working? Don’t worry — A to Z Machine is here to make your kitchen stress-free again.</p>
                        <ul className="list-disc pl-5 space-y-2 text-gray-800 text-md mt-4 text-justify">
                            <li><b>Specialized Technicians : </b>Our experts are trained to handle solo, grill, and convection microwaves from all leading brands. Whether it’s a power issue or internal damage — we’ve got you covered.</li>
                            <li><b>Precision Repairs with Genuine Parts : </b>We use only genuine spare parts to ensure long-lasting performance and safety of your microwave.</li>
                            <li> <b>Fast Service, No Delays : </b>Same-day visits available in most cases. We come to you, diagnose the problem quickly, and fix it on the spot.</li>
                            <li><b>Fair & Transparent Pricing : </b>No surprises, no hidden charges — just honest pricing for expert service.</li>
                            <li><b>100% Service Satisfaction : </b>Our work isn’t done until your microwave is back to perfect performance — and you’re happy with the service.</li>
                        </ul>

                        <h3 className="text-xl font-bold mt-6 mb-2 flex flex-raw">What We Offer – Complete Microwave Oven Services</h3>
                        <ul className="list-disc pl-5 space-y-2 text-md mt-4 text-justify text-gray-800">
                            <li><b>Installation with Precision : </b>Need a new microwave setup? We install all types — countertop, built-in, or over-the-range — safely and smartly, customized to your kitchen.</li>
                            <li><b>Routine Tune-Ups : </b>From cleaning the turntable to checking door seals and safety systems — we keep your microwave efficient and breakdown-free.</li>
                            <li><b>Quick Fix, Anytime : </b>Microwave stopped working suddenly? Our emergency repair team is just a call away, fixing all issues — big or small — fast and reliably.</li>
                            <li><b>Performance Upgrades : </b>Boost your microwave’s power and features with upgraded magnetrons, panels, or energy-saving modes. Cook faster, smarter!</li>
                            <li><b>Safety First : </b>We run radiation and electrical safety checks to prevent hazards. Faulty door or leakage? We’ll handle it before it becomes a risk.</li>
                            <li><b>Expert Guidance : </b>Confused between models or repairs? Get honest advice tailored to your cooking needs and budget.</li>
                        </ul>


                        <h3 className="text-lg font-bold mt-6 mb-2">Our Repair Process</h3>
                        <ul className="list-disc pl-5 space-y-2 text-md mt-4 text-justify text-gray-800">
                            <li><b>Detailed Diagnosis : </b>Our experts begin with a thorough inspection to accurately identify the issue with your geyser.
                            </li>
                            <li><b>Repair or Replacement : </b>Based on the diagnosis, we either repair the damaged components or recommend a replacement if needed.
                            </li>
                            <li><b>Post-Repair Testing : </b> Once the work is done, we run a complete test to ensure your <b>Microwave</b> is functioning safely and efficiently.
                            </li>
                            <li><b>Customer Satisfaction Check : </b> We consider the job complete only after you review and are fully satisfied with the service provided.
                            </li>
                        </ul>

                        {/* Service Table */}
                        <div className="mb-8 mt-8">
                            <h3 className="text-2xl text-center font-bold mb-4 text-gray-900">Microwave Oven Repair & Service Pricing</h3>
                            <table className="w-full border border-gray-300 text-sm">
                                <thead className="bg-gray-200">
                                    <tr>
                                        <th className="border p-2">Repair & Service</th>
                                        <th className="border p-2">Service Charge</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {microwaveRepairData.map((item, i) => (
                                        <tr key={i} className="text-center">
                                            <td className="border p-2">{item.service}</td>
                                            <td className="border p-2">{item.charge}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {/* Spare Parts Table */}
                        <div className="mb-8 mt-8">
                            <h3 className="text-2xl text-center text-gray-900 font-bold mb-4">Microwave Spare/Parts Prices</h3>
                            <table className="w-full border border-gray-300 text-sm">
                                <thead className="bg-gray-200">
                                    <tr>
                                        <th className="border p-2">Parts</th>
                                        <th className="border p-2">Spare Parts Price</th>
                                        <th className="border p-2">Service Charges</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {sparePartsData.map((item, i) => (
                                        <tr key={i} className="text-center">
                                            <td className="border p-2">{item.part}</td>
                                            <td className="border p-2">{item.price}</td>
                                            <td className="border p-2">{item.charge}</td>
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

export default MicrowaveRepair
