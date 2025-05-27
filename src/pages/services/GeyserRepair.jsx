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
            <div className="max-w-6xl mx-auto">
                {/* Header Title */}
                <h1 className="text-3xl md:text-4xl text-center font-bold mb-4 text-gray-900">Geyser Repair Services</h1>
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
                            “Expert Geyser Services for Your Comfort and Daily Hot Water Needs”
                        </h2>
                        <p className="mb-4 text-justify text-gray-900 text-lg">
                            Whether your geyser isn't heating water, leaking, tripping power, or showing inconsistent performance, our certified technicians deliver precise diagnostics and reliable repairs suited to your geyser’s make and usage. We service all major brands and types including instant, storage, gas, and electric geysers.
                            Using durable replacement parts, the right tools, and proven repair methods, we restore your geyser’s efficiency and safety. so you get hot water when you need it most.
                            Our focus is on minimizing downtime and preventing future issues through expert service and routine maintenance.
                            With prompt response, transparent pricing, and genuine customer support, we ensure a hassle-free experience from initial inspection to post-repair testing.<br />
                            Trust us to keep your geyser running hot, so your daily routine stays uninterrupted.
                        </p>
                        <h3 className="text-xl font-bold mt-6 mb-2 text-gray-900">Why Choose Us for Geyser Repair in Jaipur?</h3>
                        <p className="text-gray-900 text-lg text-justify">From expert geyser installation to timely repairs and preventive maintenance, we offer complete water heating solutions for homes, apartments, hostels, and commercial spaces. Whether it’s an instant geyser, storage model, or gas/electric unit  we ensure safe, efficient performance all year round. No more lukewarm water, electrical tripping, leakage, or heating delays. Our trained technicians use accurate diagnostics, genuine spare parts, and proven techniques to restore your geyser’s reliability and safety. Because when temperatures drop, a working geyser isn’t a luxury it’s a necessity. Let us handle the repairs while you enjoy uninterrupted hot water when it matters most.
                        </p>
                        <ul className="list-disc pl-5 space-y-3 text-gray-900 text-lg mt-4 text-justify">

                            <li><b>Expert Technicians : </b>Our team consists of certified and highly experienced professionals who specialize in diagnosing and repairing all types of geysers. whether it’s electric, gas, instant, or storage models. From temperature inconsistencies to complete breakdowns, we handle every issue with technical precision and attention to safety, ensuring long-term reliability.</li>

                            <li><b>Quick Turnaround : </b>We understand the inconvenience of cold water, especially during winters. That’s why we prioritize same-day service whenever possible, so your geyser is back in working condition without unnecessary delays. Our efficient workflow ensures fast diagnosis and swift repairs because your comfort shouldn’t have to wait.</li>

                            <li><b>Affordable & Transparent Pricing : </b>No surprises, no inflated charges. We believe in honest pricing and full transparency. Our services are designed to be budget-friendly while maintaining high-quality standards. You’ll receive a clear estimate before any work begins, ensuring complete peace of mind.</li>

                            <li><b>Customer Satisfaction Guaranteed : </b>Your satisfaction is our top priority. That’s why we back every repair job with a warranty on both parts and labor, offering you confidence and assurance in the quality of our workmanship. We’re not happy until your geyser is performing perfectly.</li>

                            <li><b>Comprehensive Repair Solutions : </b>Whether you're facing leaking tanks, faulty thermostats, heating element failures, tripping issues, or inconsistent water temperature, we offer end-to-end repair solutions tailored to your geyser's brand and model. We also provide regular maintenance to extend the life of your appliance and improve energy efficiency.</li>

                        </ul>

                        <h3 className="text-xl font-bold mt-6 mb-2 flex flex-raw text-gray-900">Common Geyser Issues We Expertly Handle</h3>
                        <p className='text-gray-900 text-lg text-justify'>
                            Geysers are essential for providing hot water comfort in homes, offices, and commercial spaces  especially during cold months or in areas with hard water. But like any appliance, they can develop issues over time that affect safety, efficiency, and performance. From slow heating and water leakage to thermostat failures, electrical faults, sediment buildup, or pressure valve issues  these problems, if neglected, can lead to higher electricity bills, inconsistent water temperature, or even system damage. Regular servicing, timely repairs, and expert inspections are key to ensuring your geyser remains safe, energy-efficient, and reliable throughout the year.
                        </p>

                        <ul className="list-disc pl-5 space-y-3 text-lg mt-4 text-justify text-gray-900">

                            <li><b>Geyser Installation : </b>Expert installation of storage, instant, or gas geysers with secure wall mounting, correct plumbing connections, and proper electrical setup ensuring safe, leak-free operation and efficient heating from day one.</li>

                            <li><b>No Hot Water : </b>Tired of cold showers? Faulty heating elements or thermostats can stop your geyser from heating properly. We quickly diagnose and repair these issues to restore hot water when you need it most.</li>

                            <li><b>Water Leakage : </b>Leaking water from your geyser can damage walls and flooring. Whether it’s from a loose valve, cracked tank, or worn seals, we detect the exact source and stop the leak for good.</li>

                            <li><b>Thermostat or Heating Element Failure : </b>Inconsistent or no heating is often due to a failed thermostat or heating rod. We diagnose the root cause and replace only what’s needed for optimal performance.</li>

                            <li><b>Electrical Malfunctions : </b>Geyser not turning on or tripping the circuit? We safely handle all internal electrical faults, from faulty switches to damaged wiring and control panel issues.</li>

                            <li><b>Sediment Build-Up : </b> Hard water deposits can clog and damage your geyser. Our descaling and cleaning services remove sediment, improving heating efficiency and prolonging the unit’s lifespan.</li>

                        </ul>


                        <h3 className="text-xl font-bold mt-6 mb-2 text-gray-900">Our Repair Process</h3>
                        <ul className="list-disc pl-5 space-y-3 text-lg mt-4 text-justify text-gray-900">

                            <li><b>Detailed Diagnosis : </b>Our experts begin with a thorough inspection to accurately identify the issue with your <b>Geyser</b>.</li>

                            <li><b>Repair or Replacement : </b>Based on the diagnosis, we either repair the damaged components or recommend a replacement if needed.</li>

                            <li><b>Post-Repair Testing : </b> Once the work is done, we run a complete test to ensure your <b>Geyser</b> is functioning safely and efficiently.</li>

                            <li><b>Customer Satisfaction Check : </b> We consider the job complete only after you review and are fully satisfied with the service provided.</li>
                        </ul>

                        {/* Service Table */}
                        <div className="mt-10 space-y-8">
                            <div className="w-full px-4">
                                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Geyser Repair/Service Prices</h3>
                                <table className="w-full border font-medium text-gray-900 border-black text-center text-lg">
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
                        </div>

                        {/* Spare Parts Table */}
                        <div className="mb-8 mt-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Geyser Spare/Parts Prices</h3>
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
                            <p className='pl-5 text-lg mt-4 text-justify text-gray-900'>A well-maintained geyser is essential for reliable hot water supply and energy efficiency, whether in homes, offices, or commercial facilities. Regular servicing, timely part replacements, and safety checks can significantly extend its lifespan while preventing unexpected breakdowns. While simple maintenance like cleaning the outer body or checking power connections can be handled in-house, more complex issues such as thermostat failure, heating element damage, or water leakage demand professional attention. Trust certified technicians to accurately diagnose and resolve problems, ensuring your geyser operates safely, efficiently, and consistently all year round.
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
