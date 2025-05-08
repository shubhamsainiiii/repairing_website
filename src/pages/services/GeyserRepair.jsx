import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Ac from '/Users/Rk Indora/Desktop/machinesystem/project/src/assets/Ac.jpeg';
import { FaPhoneAlt, FaTools } from 'react-icons/fa';

const geyserRepairData = [
    { service: "General Repair/Service", charge: "299" },
    { service: "Installation (Up to 10 liters)", charge: "299" },
    { service: "Installation (11 to 25 liters)", charge: "349" },
    { service: "Un-installation", charge: "199" },
    { service: "Un-installation + Installation (Up to 10 liters)", charge: "449" },
    { service: "Un-installation + Installation (11 to 25 liters)", charge: "499" },
];

const sparePartsData = [
    { part: "Heating Element (Coil)", price: "650 – 1900", charge: "S.C." },
    { part: "Thermostat (small) - Normal", price: "300", charge: "S.C." },
    { part: "Thermostat (Large) - Normal", price: "430", charge: "S.C." },
    { part: "Thermostat– Single Capillary", price: "750", charge: "S.C." },
    { part: "Thermostat– Double Capillary", price: "900", charge: "S.C." },
    { part: "Assembly Copper", price: "1900", charge: "S.C." },
    { part: "Assembly stainless steel", price: "1650", charge: "S.C." },
    { part: "Pipe (inlet)", price: "200–300", charge: "S.C." },
    { part: "Pipe (Outlet)", price: "200–300", charge: "S.C." },
    { part: "PRV (Pressure Release Valve)", price: "300", charge: "S.C." },
];

const GeyserRepairPage = () => {
    return (
        <div className="mt-16 py-12 px-6 md:px-16 lg:px-24">
            <div className="max-w-7xl mx-auto">
                {/* Header Title */}
                <h1 className="text-3xl md:text-4xl text-center font-bold mb-4">Geyser Repair Services</h1>
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
                            “Expert Geyser Services for Your Comfort and Daily Hot Water Needs”
                        </h2>
                        <p className="mb-4  text-center  text-gray-700 font-medium">
                            We ensure your geyser’s smooth working, consistent hot water supply, and hassle-free performance. Whether it's regular service, installation, or spare part replacement, we handle it all.
                        </p>
                        <h3 className="text-lg font-bold mt-6 mb-2">Why Choose Us for Geyser Repair in Jaipur?</h3>
                        <p className="text-gray-800 font-medium">Choosing the right service provider for your geyser repair needs is crucial — and that's where we come in.</p>
                        <ul className="list-disc pl-5 space-y-2 text-gray-800 text-md mt-4 text-justify">
                            <li><b>Expert Technicians :</b> Our certified and experienced professionals are skilled in handling all types of geyser issues, ensuring reliable and efficient service every time.</li>
                            <li><b>Quick Turnaround : </b>We value your time. That’s why we strive to provide same-day repair services to get your geyser up and running without delay.</li>
                            <li><b>Affordable & Transparent Pricing : </b>Get top-notch geyser repair services in Jaipur without hidden costs. Our pricing is competitive and honest, giving you value for your money.</li>
                            <li><b>Customer Satisfaction Guaranteed : </b>We stand by the quality of our work. All repairs come with a guarantee on both parts and labor, because your satisfaction is our success.</li>
                            <li><b>Comprehensive Repair Solutions : </b>From minor leaks and thermostat issues to complete system repairs, we offer end-to-end geyser servicing tailored to your needs.</li>
                        </ul>

                        <h3 className="text-xl font-bold mt-6 mb-2 flex flex-raw">Common Geyser Issues We Expertly Handle</h3>
                        <ul className="list-disc pl-5 space-y-2 text-md mt-4 text-justify text-gray-800">
                            <li><b>No Hot Water : </b> Facing cold showers? If your geyser isn’t producing hot water, our technicians will quickly identify and fix the issue to restore your comfort.
                            </li>
                            <li><b>Water Leakage : </b> Leaking geysers can lead to serious water damage. We specialize in locating and sealing leaks to protect your home and prevent future problems.
                            </li>
                            <li><b>Thermostat or Heating Element Failure : </b> Inconsistent or no heating? We’ll repair or replace faulty thermostats or heating elements for optimal geyser performance.
                            </li>
                            <li><b>Electrical Malfunctions : </b> Whether it’s wiring issues or tripped breakers, we handle all electrical faults safely and efficiently to ensure reliable operation.
                            </li>
                            <li><b>Sediment Build-Up : </b> Hard water deposits can clog and damage your geyser. Our descaling and cleaning services remove sediment, improving heating efficiency and prolonging the unit’s lifespan.
                            </li>
                        </ul>


                        <h3 className="text-lg font-bold mt-6 mb-2">Our Repair Process</h3>
                        <ul className="list-disc pl-5 space-y-2 text-md mt-4 text-justify text-gray-800">
                            <li><b>Detailed Diagnosis : </b>Our experts begin with a thorough inspection to accurately identify the issue with your geyser.
                            </li>
                            <li><b>Repair or Replacement : </b>Based on the diagnosis, we either repair the damaged components or recommend a replacement if needed.
                            </li>
                            <li><b>Post-Repair Testing : </b> Once the work is done, we run a complete test to ensure your geyser is functioning safely and efficiently.
                            </li>
                            <li><b>Customer Satisfaction Check : </b> We consider the job complete only after you review and are fully satisfied with the service provided.
                            </li>
                        </ul>

                        {/* Service Table */}
                        <div className="mb-8 mt-8">
                            <h3 className="text-2xl text-center font-bold mb-4 text-gray-900">Geyser Repair/Service Prices</h3>
                            <table className="w-full border border-gray-300 text-sm">
                                <thead className="bg-gray-200">
                                    <tr>
                                        <th className="border p-2">Repair & Service</th>
                                        <th className="border p-2">Service Charge</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {geyserRepairData.map((item, i) => (
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
                            <h3 className="text-2xl text-center text-gray-900 font-bold mb-4">Geyser Spare/Parts Prices</h3>
                            <table className="w-full border border-gray-300 text-sm">
                                <thead className="bg-gray-200">
                                    <tr>
                                        <th className="border p-2">Repair & Service</th>
                                        <th className="border p-2">Spare Parts Price</th>
                                        <th className="border p-2">Service Charge</th>
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

    );
};

export default GeyserRepairPage;
