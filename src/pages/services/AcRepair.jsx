import React from 'react';
import Ac from '/Users/Rk Indora/Desktop/machinesystem/project/src/assets/Ac.jpeg';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { FaPhoneAlt } from 'react-icons/fa';

const Acrepair = () => {
    const spareParts = [
        { part: "AC Fan Blade", price: "110", serviceCharge: "SC" },
        { part: "Sensor", price: "700", serviceCharge: "SC" },
        { part: "PCB Repair", price: "850", serviceCharge: "SC" },
        { part: "Compressor Relay", price: "450", serviceCharge: "SC" },
        { part: "Overload Protector", price: "400", serviceCharge: "SC" },
        { part: "Starting Relay", price: "350", serviceCharge: "SC" },
        { part: "AC Remote", price: "600", serviceCharge: "SC" },
        { part: "Swing Motor", price: "950", serviceCharge: "SC" },
        { part: "Sensor", price: "550", serviceCharge: "SC" },
        { part: "Blower Motor", price: "1100", serviceCharge: "SC" },
        { part: "Drain Pipe", price: "350", serviceCharge: "SC" },
        { part: "Power Cord", price: "250", serviceCharge: "SC" },
        { part: "Insulation Tape", price: "100", serviceCharge: "SC" },
        { part: "Thermocol Sheet", price: "150", serviceCharge: "SC" },
        { part: "Copper Pipe (per ft)", price: "150", serviceCharge: "SC" },
        { part: "Stand (Indoor/Outdoor)", price: "650", serviceCharge: "SC" },
    ];
    return (
        <div className="mt-16 py-12 px-6 md:px-16 lg:px-24">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-3xl md:text-4xl text-gray-900 font-bold mb-4 text-center">AC (Air Conditioning)</h1>

                {/* Image Slider */}
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
                            Ac,
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

                {/* Main Content */}
                <div className="flex justify-center">
                    <div className="w-full max-w-4xl">
                        <h2 className="text-xl font-bold mb-4 text-gray-900 text-center">
                            “Expert Air Conditioning Services for Your Comfort and Peace of Mind”
                        </h2>
                        <p className="mb-4 text-center text-gray-700 font-medium">
                            We ensure your air conditioner, working health and unmatched comfort & reliability.
                            Whether it's a simple service, gas refilling, or part replacement, we handle it all.
                        </p>

                        <h3 className="text-lg font-bold mt-6 mb-2">Our Comprehensive AC Services:</h3>
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                            <li><b>AC Installation:</b> Professional wall/window/split AC setup with secure mounting and testing.</li>
                            <li><b>Routine Maintenance:</b> Seasonal tune-ups, filter cleaning, and refrigerant checks.</li>
                            <li><b>Emergency Repairs:</b> Same-day troubleshooting and repair by certified technicians.</li>
                            <li><b>Upgrades & Improvements:</b> Remote control replacement, inverter upgrade, duct optimization.</li>
                            <li><b>Air Quality Enhancements:</b> Filter replacement, deodorizer spray, anti-bacterial cleaning.</li>
                            <li><b>Duct Cleaning & Sealing:</b> Clean blocked ducts to boost AC performance.</li>
                            <li><b>Smart Home Integration:</b> Enable AC remote access via smart devices.</li>
                            <li><b>Consultation:</b> Expert advice for buying new or replacing your AC unit.</li>
                        </ul>

                        <h3 className="text-lg font-bold mt-6 mb-2">Why Choose Our AC Services?</h3>
                        <ul className="list-disc pl-5 text-sm space-y-1">
                            <li>Experienced technicians with proper tools</li>
                            <li>Fast same-day service in most cases</li>
                            <li>Transparent pricing & no hidden charges</li>
                            <li>Genuine parts & warranty-backed repairs</li>
                        </ul>

                        {/* Pricing Tables */}
                        <div className="mt-10 space-y-8">
                            <div className="w-full px-4">
                                <h3 className="text-xl font-semibold mb-4 text-center">AC Repair/Service Charges</h3>

                                {/* Added max-w-full and overflow-x-auto inside a relative container */}
                                <div className="w-full overflow-x-auto">
                                    <table className="w-full min-w-[600px] border border-black text-center text-sm sm:text-base">
                                        <thead className="bg-gray-200">
                                            <tr>
                                                <th className="border border-black px-4 py-2 whitespace-nowrap">Repair & Service</th>
                                                <th className="border border-black px-4 py-2 whitespace-nowrap">Window AC</th>
                                                <th className="border border-black px-4 py-2 whitespace-nowrap">Split AC</th>
                                                <th className="border border-black px-4 py-2 whitespace-nowrap">Cassette AC</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {[
                                                ["General Repair/Service Charge", "299", "299", "449"],
                                                ["Water Leakage Issue", "349", "349", "449"],
                                                ["Installation", "599", "1049", "1499"],
                                                ["Un-Installation", "299", "549", "699"],
                                                ["Un-Installation & Installation", "799", "1499", "2099"],
                                                ["Repair Of Cooling Coil", "499", "499", "699"],
                                                ["Repair of Copper Coil Condenser", "499", "499", "699"],
                                                ["Stand Fitting (With Fasteners)", "NA", "200", "300"],
                                                ["Copper Pipe Fitting", "NA", "50/RFT", "50/RFT"],
                                                ["Repair Of Inverter PCB", "1850 - 2250", "1850 - 2250", "2000 - 3000"],
                                                ["Repair Of Non-Inverter PCB", "1500 - 2000", "1500 - 2000", "1850 - 2500"],
                                            ].map(([service, window, split, cassette], i) => (
                                                <tr key={i} className="hover:bg-gray-50">
                                                    <td className="border border-black px-4 py-2 whitespace-nowrap">{service}</td>
                                                    <td className="border border-black px-4 py-2 whitespace-nowrap">{window}</td>
                                                    <td className="border border-black px-4 py-2 whitespace-nowrap">{split}</td>
                                                    <td className="border border-black px-4 py-2 whitespace-nowrap">{cassette}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>


                            <div className="overflow-x-auto">
                                <h3 className="text-xl font-semibold mb-4">AC Gas Refilling Prices</h3>
                                <table className="w-full text-sm border border-black text-center">
                                    <thead className="bg-gray-200">
                                        <tr>
                                            <th className="border border-black p-2">Type Of Gas</th>
                                            <th className="border border-black p-2">Capacity</th>
                                            <th className="border border-black p-2">Split AC</th>
                                            <th className="border border-black p-2">Window AC</th>
                                            <th className="border border-black p-2">Cassette AC</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {/* Gas Refilling */}
                                        <tr>
                                            <td className="border p-2" rowSpan="6">Gas Refilling</td>
                                            <td className="border p-2">R-22 (Upto 2 Ton)</td>
                                            <td className="border p-2">2500</td>
                                            <td className="border p-2">2500</td>
                                            <td className="border p-2">2900</td>
                                        </tr>
                                        <tr>
                                            <td className="border p-2">R-22 (2.5 Ton)</td>
                                            <td className="border p-2">3100</td>
                                            <td className="border p-2">NA</td>
                                            <td className="border p-2">3400</td>
                                        </tr>
                                        <tr>
                                            <td className="border p-2">R-410 (Upto 2 Ton)</td>
                                            <td className="border p-2">2900</td>
                                            <td className="border p-2">2900</td>
                                            <td className="border p-2">3300</td>
                                        </tr>
                                        <tr>
                                            <td className="border p-2">R-410 (2.5 Ton)</td>
                                            <td className="border p-2">3550</td>
                                            <td className="border p-2">NA</td>
                                            <td className="border p-2">3800</td>
                                        </tr>
                                        <tr>
                                            <td className="border p-2">R-32 (Upto 2 Ton)</td>
                                            <td className="border p-2">2900</td>
                                            <td className="border p-2">2900</td>
                                            <td className="border p-2">3300</td>
                                        </tr>
                                        <tr>
                                            <td className="border p-2">R-32 (2.5 Ton)</td>
                                            <td className="border p-2">3550</td>
                                            <td className="border p-2">NA</td>
                                            <td className="border p-2">3800</td>
                                        </tr>

                                        {/* Gas Top-Up */}
                                        <tr>
                                            <td className="border p-2" rowSpan="6">
                                                Gas Top-Up <br />
                                                <span className="text-xs">(Min Gas Level 45%)</span>
                                            </td>
                                            <td className="border p-2">R-22 (RP &lt; 70, Upto 2 Ton)</td>
                                            <td className="border p-2">1520</td>
                                            <td className="border p-2">1520</td>
                                            <td className="border p-2">1760</td>
                                        </tr>
                                        <tr>
                                            <td className="border p-2">R-22 (2.5 Ton)</td>
                                            <td className="border p-2">1880</td>
                                            <td className="border p-2">NA</td>
                                            <td className="border p-2">2060</td>
                                        </tr>
                                        <tr>
                                            <td className="border p-2">R-410 (RP &lt; 140, Upto 2 Ton)</td>
                                            <td className="border p-2">1760</td>
                                            <td className="border p-2">1760</td>
                                            <td className="border p-2">2000</td>
                                        </tr>
                                        <tr>
                                            <td className="border p-2">R-410 (2.5 Ton)</td>
                                            <td className="border p-2">2150</td>
                                            <td className="border p-2">NA</td>
                                            <td className="border p-2">2300</td>
                                        </tr>
                                        <tr>
                                            <td className="border p-2">R-32 (RP &lt; 120, Upto 2 Ton)</td>
                                            <td className="border p-2">1760</td>
                                            <td className="border p-2">1760</td>
                                            <td className="border p-2">2000</td>
                                        </tr>
                                        <tr>
                                            <td className="border p-2">R-32 (2.5 Ton)</td>
                                            <td className="border p-2">2150</td>
                                            <td className="border p-2">NA</td>
                                            <td className="border p-2">2300</td>
                                        </tr>

                                        {/* Gas Leakage Repair */}
                                        <tr>
                                            <td className="border p-2" colSpan="2">Gas Leakage Repair (Complete Machine Checkup)</td>
                                            <td className="border p-2">550</td>
                                            <td className="border p-2">NA</td>
                                            <td className="border p-2">550</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div>
                                <h3 className="text-xl font-semibold mb-2">AC Spare/Parts Prices</h3>
                                <table className="w-full border border-gray-300 text-sm">
                                    <thead className="bg-gray-200">
                                        <tr>
                                            <th className="border p-2">Part</th>
                                            <th className="border p-2">Price</th>
                                            <th className="border p-2">Service Charge</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {spareParts.map((item, index) => (
                                            <tr key={index} className="text-center">
                                                <td className="border p-2">{item.part}</td>
                                                <td className="border p-2">{item.price}</td>
                                                <td className="border p-2">{item.serviceCharge}</td>
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

export default Acrepair;
