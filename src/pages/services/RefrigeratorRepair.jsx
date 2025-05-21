import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Ac from '/Users/Rk Indora/Desktop/machinesystem/project/src/assets/Ac.jpeg';
import { FaPhoneAlt } from 'react-icons/fa';

const refrigeratorRepairData = [
    { service: "Service/Repair", charge: "349", DDCharge: "399", SDCharge: "499" },
    { service: "Deep Cleaning", charge: "429", DDCharge: "499", SDCharge: "599" },
    { service: "Gas Full Charging R134A", charge: "1650", DDCharge: "2250", SDCharge: "3250" },
    { service: "Gas Full Charging R600A", charge: "1900", DDCharge: "2700", SDCharge: "3550" },
];

const sparePartsData = [
    { part: "Compressor (G1)", price: "2900", charge: "649" },
    { "part": "Compressor (G2)", "price": "3200", "charge": "649" },
    { "part": "Compressor (G3)", "price": "3900", "charge": "649" },
    { "part": "Thermostat", "price": "650", "charge": "S.C." },
    { "part": "Condenser coil (upto 12 Row)", "price": "1100", "charge": "449" },
    { "part": "Condenser coil (upto 14 Row)", "price": "130250", "charge": "449" },
    { "part": "Freezer - Normal", "price": "1250", "charge": "499" },
    { "part": "Freezer + capillary tube + Coper Pipe (Set)", "price": "1900", "charge": "499" },
    { "part": "Filter", "price": "200", "charge": "S.C." },
    { "part": "Capacitor 4 mfd", "price": "170", "charge": "S.C." },
    { "part": "Capacitor 5 mfd", "price": "200", "charge": "S.C." },
    { "part": "Capacitor 6 mfd", "price": "230", "charge": "S.C." },
    { "part": "Overload Relay LP - Normal", "price": "600", "charge": "S.C." },
    { "part": "Overload Relay LP - Set", "price": "830", "charge": "S.C." },
    { "part": "Defrost Timer", "price": "1100", "charge": "S.C." },
    { "part": "Bimetal", "price": "570", "charge": "S.C." },
    { "part": "Fuse", "price": "430", "charge": "S.C." },
    { "part": "Charging Nipple", "price": "140", "charge": "S.C." },
    { "part": "Capillary", "price": "200 - 600", "charge": "S.C." },
    { "part": "Defrost Sensor", "price": "600", "charge": "S.C." },
    { "part": "Coil Sensor", "price": "500", "charge": "S.C." },
    { "part": "Duct Sensor", "price": "1330", "charge": "S.C." },
    { "part": "Heater Coil", "price": "1300", "charge": "S.C." },
    { "part": "Heater glass", "price": "900", "charge": "S.C." },
    { "part": "Condenser Cooling Fan", "price": "1400", "charge": "S.C." },
    { "part": "Fan Motor (AC)", "price": "1450", "charge": "S.C." },
    { "part": "Fan Motor (DC)", "price": "1900", "charge": "S.C." },
    { "part": "Fan Blade", "price": "230", "charge": "S.C." },
    { "part": "LED Light", "price": "310", "charge": "S.C." },
    { "part": "Light Holder Set", "price": "35000", "charge": "S.C." },
    { "part": "Normal Light", "price": "200", "charge": "S.C." },
    { "part": "Lip Switch", "price": "230", "charge": "S.C." },
    { "part": "Chock PCB", "price": "1700", "charge": "S.C." },
    { "part": "Inverter PCB - single Door", "price": "1900 - 2700", "charge": "S.C." },
    { "part": "Inverter PCB - Double Door", "price": "2700 - 3550", "charge": "S.C." },
    { "part": "PCB Repair - Single Door", "price": "1200", "charge": "S.C." },
    { "part": "PCB Repair - Double Door", "price": "2000", "charge": "S.C." },
    { "part": "Compressor Oil Change (134 Oil)", "price": "400", "charge": "S.C." },
    { "part": "Compressor Oil Change (600 Oil)", "price": "500", "charge": "S.C." },
    { "part": "Fridge Stand", "price": "500 - 850", "charge": "S.C." },
    { "part": "Inner Tray", "price": "400 - 600", "charge": "S.C." },
    { "part": "Water Tray", "price": "630", "charge": "S.C." }
];

const RefrigeratorRepair = () => {
    return (
        <div className="mt-16 py-12 px-6 md:px-16 lg:px-24 font-primary">
            <div className="max-w-6xl mx-auto">
                {/* Header Title */}
                <h1 className="text-3xl md:text-4xl text-center font-bold mb-4 text-gray-900">Refrigerator Services</h1>
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
                            “Expert Refrigerator Repair and Maintenance Services for Efficient Cooling Every Day”
                        </h2>
                        <p className="mb-4 text-justify text-gray-900 text-lg">
                            Whether your refrigerator isn’t cooling properly, leaking water, making unusual noises, or refusing to start our certified technicians offer accurate diagnostics and reliable repairs tailored to your fridge type and usage needs. We service all major refrigerator models, including single-door, double-door, side-by-side, and commercial units. Using high-quality spare parts, advanced tools, and time-tested techniques, we restore your refrigerator’s cooling performance and energy efficiency, ensuring your food stays fresh and safe. Our goal is to prevent major breakdowns and maximize appliance life through professional service and timely maintenance. With prompt response times, transparent pricing, and a customer-first approach, we make the entire process hassle-free from the initial inspection to the final cooling check.<br />
                            Trust us to keep your fridge running cold, so you can stay focused on freshness and daily convenience.
                        </p>

                        <h3 className="text-xl font-bold mt-6 mb-2 text-gray-900">Why Choose Us for Refrigerator Services in Jaipur?</h3>

                        <p className="text-gray-900 text-lg text-justify">From expert refrigerator installation to thorough maintenance and urgent repairs, we provide complete refrigeration solutions for homes, offices, retail outlets, and commercial kitchens. Whether it’s a single-door fridge, double-door, side-by-side, or commercial freezer we ensure optimal cooling performance and food safety without delay. No more spoiled food, water leaks, excessive noise, or inconsistent cooling. Our certified technicians use smart diagnostics, genuine parts, and proven repair techniques to keep your refrigerator running smoothly. Because in every household and business, reliable refrigeration isn’t optional it’s essential. Let us handle the cooling, so you can focus on freshness and peace of mind.</p>

                        <ul className="list-disc pl-5 space-y-3 text-gray-900 text-lg mt-4 text-justify">

                            <li><b>Expert Technicians :</b> Our certified fridge technicians in Jaipur specialize in all major brands and models single door, double door, side-by-side. we fix them all with expert care and precision.</li>

                            <li><b>Quick Turnaround : </b>We know how important your refrigerator is in your daily routine. That’s why we offer fast, same-day fridge repair services across Jaipur to keep your kitchen running smoothly.</li>

                            <li><b>Affordable & Transparent Pricing : </b>Looking for affordable refrigerator repair in Jaipur without hidden costs? You’re in the right place. We provide clear estimates and honest service that fits your budget.</li>

                            <li><b>Customer Satisfaction Guaranteed : </b>Every repair is backed by our quality promise. Whether it’s a minor fix or a major part replacement, we offer warranty on both parts and labor to ensure peace of mind.</li>

                            <li><b>Comprehensive Repair Solutions : </b>From cooling issues, gas refilling, to compressor and thermostat faults, our team handles it all. One-stop solution for reliable and long-lasting fridge repairs in Jaipur.</li>
                        </ul>

                        <h3 className="text-xl font-bold mt-6 mb-2 flex flex-raw text-gray-900">Common Refrigerator Issues We Expertly Handle</h3>

                        <p className='text-gray-900 text-lg text-justify'>Refrigerators are essential appliances for preserving food, beverages, and perishables in homes, offices, and commercial establishments especially in warm climates or places with frequent power fluctuations. But like any other appliance, refrigerators can develop issues over time that affect their cooling performance, energy efficiency, and food safety. From poor cooling and unusual noises to gas leaks, thermostat malfunctions, clogged drain lines, or compressor failure these problems, if left unchecked, can lead to food spoilage, increased electricity bills, or complete breakdowns. Regular servicing, timely part replacements, and expert diagnostics are crucial to keeping your refrigerator running efficiently, safely, and reliably all year round.
                        </p>

                        <ul className="list-disc pl-5 space-y-3 text-lg mt-4 text-justify text-gray-900">

                            <li><b>Refrigerator Installation : </b>Need a new fridge installed? Our experts assess your kitchen layout and cooling needs, recommending the right model. We ensure professional installation for smooth performance and energy efficiency.</li>

                            <li><b>No Cooling or Not Cooling Properly : </b>Is your fridge not cooling effectively? If your refrigerator isn’t keeping food fresh, our technicians will diagnose and fix the issue to restore its cooling performance.</li>

                            <li><b>Water Leakage : </b>A leaking fridge can cause water damage and spoil your kitchen floor. We specialize in finding and sealing leaks, preventing further damage and ensuring a dry, safe environment.</li>

                            <li><b>Compressor or Cooling System Failure : </b>Inconsistent cooling or a complete cooling failure? We’ll repair or replace faulty compressors or cooling systems to ensure your fridge is working at full capacity.</li>

                            <li><b>Electrical Malfunctions : </b>Issues with power or electrical components? Whether it’s wiring faults or tripped breakers, we handle all electrical issues safely to keep your fridge running smoothly.</li>

                            <li><b>Frost Build-Up or Freezer Malfunctions : </b>Is your freezer freezing over? Ice build-up can block airflow and reduce cooling efficiency. Our cleaning and de-frosting services restore optimal freezer performance.</li>
                        </ul>


                        <h3 className="text-xl font-bold mt-6 mb-2 text-gray-900">Our Repair Process</h3>
                        <ul className="list-disc pl-5 space-y-3 text-lg mt-4 text-justify text-gray-900">
                            <li><b>Detailed Diagnosis : </b>Our experts begin with a thorough inspection to accurately identify the issue with your <b>Refrigerator.</b>
                            </li>
                            <li><b>Repair or Replacement : </b>Based on the diagnosis, we either repair the damaged components or recommend a replacement if needed.
                            </li>
                            <li><b>Post-Repair Testing : </b> Once the work is done, we run a complete test to ensure your <b>Refrigerator</b> is functioning safely and efficiently.
                            </li>
                            <li><b>Customer Satisfaction Check : </b> We consider the job complete only after you review and are fully satisfied with the service provided.
                            </li>
                        </ul>

                        {/* Service Table */}
                        <div className="mt-10 space-y-8">
                            <div className="w-full px-4">
                                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Refrigerator Repair/Service Prices</h3>
                                <div className="w-full overflow-x-auto">
                                    <table className="w-full min-w-[600px] border font-medium text-gray-900 border-black text-center text-lg">
                                        <thead className="bg-gray-200">
                                            <tr>
                                                <th className="border p-2">Repair & Service</th>
                                                <th className="border p-2">Single Door</th>
                                                <th className="border p-2">Double Door</th>
                                                <th className="border p-2">Side by Side Door</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {refrigeratorRepairData.map((item, i) => (
                                                <tr key={i} className="text-center">
                                                    <td className="border p-2">{item.service}</td>
                                                    <td className="border p-2">{item.charge}</td>
                                                    <td className="border p-2">{item.DDCharge}</td>
                                                    <td className="border p-2">{item.SDCharge}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        {/* Spare Parts Table */}
                        <div className="mb-8 mt-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Refrigerator Spare/Parts Prices</h3>
                            <table className="w-full border font-medium text-gray-900 border-black text-center text-lg">
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
                            <p className="text-md text-gray-500 font-normal mt-4 text-center">
                                Note : Final charges may vary based on model & condition. Technician will confirm after inspection.
                            </p>
                            <h3 className="text-xl text-gray-900 font-bold mt-6 mb-2">Final Thoughts</h3>
                            <p className='pl-5 text-lg mt-4 text-justify text-gray-900'>A well-maintained refrigerator is essential for preserving food freshness, preventing spoilage, and ensuring energy efficiency whether in homes, offices, or commercial kitchens. Regular servicing, proper coolant levels, and timely repairs can significantly extend its lifespan and maintain optimal cooling performance. While basic tasks like cleaning shelves or checking the door seal can be handled at home, complex issues such as gas leakage, faulty compressors, or thermostat failures require professional attention. Trust certified technicians to diagnose and fix these problems, keeping your refrigerator running efficiently, safely, and reliably every day.</p>
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

export default RefrigeratorRepair
