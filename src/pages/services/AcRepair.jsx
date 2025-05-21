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
        <div className="mt-16 py-12 px-6 md:px-16 lg:px-24 font-primary">
            <div className="max-w-6xl mx-auto">
                {/* Header Title */}
                <h1 className="text-3xl md:text-4xl text-center font-bold mb-4 text-gray-900">AC (Air Conditioning) Services</h1>
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

                {/* Main Content */}
                <div className="flex justify-center">
                    <div className="w-full max-w-6xl">
                        <h2 className="text-xl font-bold mb-4 text-gray-900 text-center">
                            “Expert Air Conditioning Services for Your Comfort and Peace of Mind”
                        </h2>
                        <p className="mb-4 text-justify text-gray-900 text-lg">
                            Whether your air conditioner is not cooling properly, leaking water, making strange noises, or failing to start our certified technicians provide accurate diagnosis and dependable solutions tailored to your AC type and usage needs. We service all major AC models, including split, window, and inverter systems.Using high-quality parts, advanced tools, and proven repair techniques, we restore your AC’s cooling efficiency and reliability. so your space stays comfortable, even in peak heat. Our goal is to minimize breakdowns and maximize performance through professional service and regular maintenance. With quick response times, clear pricing, and genuine customer care, we make the entire process smooth. from initial inspection to final performance check.<br />
                            Trust us to keep your AC running cool, so you can stay focused on comfort and productivity.</p>

                        <h3 className="text-xl font-bold mt-6 mb-2 text-gray-900">Why Choose Us for Air Conditioning Services in Jaipur?</h3>

                        <p className="text-gray-900 text-lg text-justify">
                            From precision AC installation to routine maintenance and urgent repairs, we deliver complete air conditioning solutions for homes, offices, retail spaces, and commercial buildings. Whether it’s a split AC, window unit, or advanced inverter system. we restore cooling efficiency and comfort without delay. No more poor airflow, noisy operation, or uneven cooling. Our certified technicians use smart diagnostics, genuine parts, and time-tested repair methods to keep your system running at its best. Because in harsh summers, reliable cooling isn’t a luxury. it’s a necessity. Let us take care of the heat, so you can focus on what truly matters.
                        </p>

                        <ul className="list-disc pl-5 space-y-3 text-gray-900 text-lg mt-4 text-justify">

                            <li><b>Skilled & Certified Technicians : </b>Our experienced AC specialists are trained to handle all major brands and models using the right tools and updated techniques — ensuring precise diagnosis and reliable service.</li>

                            <li><b>Quick Response & Same-Day Service : </b>We understand how uncomfortable a malfunctioning AC can be. That’s why we offer prompt support and same-day repair or maintenance for most issues, so you’re not left waiting.</li>

                            <li><b>Honest, Transparent Pricing : </b>No surprises here. You’ll get upfront estimates with clear breakdowns — no hidden charges, no last-minute add-ons.</li>

                            <li><b>Genuine Spare Parts & Warranty Support : </b>We use only brand-approved parts for repairs and replacements. All our work is backed by service warranties, giving you peace of mind and long-term reliability.</li>
                        </ul>

                        <h3 className="text-xl font-bold mt-6 mb-2 flex flex-raw text-gray-900">Common Air Conditioning Issues We Expertly Handle</h3>

                        <p className='text-gray-900 text-lg text-justify'>
                            Air conditioners are essential for maintaining comfort in homes and businesses, especially during peak summers. But over time, even the best systems can develop issues that affect cooling performance and energy efficiency. From weak airflow and unusual noises to refrigerant leaks, thermostat malfunctions, clogged filters, or compressor failure — these problems, if ignored, can lead to uneven cooling, rising energy bills, and complete system breakdowns. Regular maintenance, timely repairs, and professional inspections are crucial to keeping your AC running smoothly, safely, and efficiently all year round.
                        </p>

                        <ul className="list-disc pl-5 space-y-3 text-lg mt-4 text-justify text-gray-900">
                            <li><b>AC Installation : </b> Expert installation of split, window, or central AC units with precise wall mounting, proper electrical connection, and airflow testing. ensuring your cooling system is ready to perform from day one without leaks or performance issues.</li>

                            <li><b>Routine Maintenance : </b> Seasonal AC servicing that includes deep filter cleaning, refrigerant level checks, coil inspection, and overall system tuning to maintain cooling efficiency and extend unit lifespan.</li>

                            <li><b>Emergency Repairs : </b>Fast-response AC troubleshooting and repair services by certified technicians for urgent issues like gas leaks, cooling failure, unusual noise, or water dripping. often resolved on the same day.</li>


                            <li><b>System Upgrades & Enhancements : </b>Upgrade your existing AC with inverter technology, energy-saving components, or enhanced ducting systems. We also replace remotes, thermostats, and improve airflow for better performance.</li>

                            <li><b>Air Quality Enhancements : </b>Improve indoor air quality with professional filter replacements, anti-bacterial coil cleaning, deodorizing spray treatments, and allergen-removal services for healthier air inside your space.</li>

                            <li><b>Duct Cleaning & Sealing : </b>We clean and seal AC ducts to remove accumulated dust, allergens, and blockages. Boosting airflow efficiency, reducing energy bills, and improving overall system health.</li>

                            <li><b>Smart Home Integration : </b>Convert your traditional AC into a smart appliance. We install and configure smart controllers for mobile access, scheduling, and remote temperature management via your smartphone or voice assistants.</li>

                            <li><b>New AC Consultation : </b>Planning to buy or replace your AC? Get expert guidance on choosing the right capacity, energy rating, and brand for your room or commercial space based on budget, usage, and layout.</li>
                        </ul>

                        <h3 className="text-xl font-bold mt-6 mb-2 text-gray-900">Our Repair Process</h3>
                        <ul className="list-disc pl-5 space-y-3 text-lg mt-4 text-justify text-gray-900">

                            <li><b>Detailed Diagnosis : </b>Our experts begin with a thorough inspection to accurately identify the issue with your <b>AC</b>.</li>

                            <li><b>Repair or Replacement : </b>Based on the diagnosis, we either repair the damaged components or recommend a replacement if needed.</li>

                            <li><b>Post-Repair Testing : </b> Once the work is done, we run a complete test to ensure your <b>AC</b> is functioning safely and efficiently.</li>

                            <li><b>Customer Satisfaction Check : </b> We consider the job complete only after you review and are fully satisfied with the service provided.</li>
                        </ul>

                        {/* Pricing Tables */}
                        <div className="mt-10 space-y-8">
                            <div className="w-full px-4">
                                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">AC Repair/Service Charges</h3>

                                {/* Added max-w-full and overflow-x-auto inside a relative container */}
                                <div className="w-full overflow-x-auto">
                                    <table className="w-full min-w-[600px] border font-medium text-gray-900 border-black text-center text-lg">
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
                                                <tr key={i} >
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
                                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">AC Gas Refilling Prices</h3>
                                <table className="w-full border border-black text-center text-lg text-gray-900 font-medium">
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
                                                <span className="text-sm">(Min Gas Level 45%)</span>
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

                            <div className="mb-8 mt-8">
                                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">AC Spare/Parts Prices</h3>
                                <table className="w-full border font-medium text-gray-900 border-black text-center text-lg">
                                    <thead className="bg-gray-200">
                                        <tr>
                                            <th className="border p-2"> Part</th>
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
                                <p className="text-md text-gray-500 font-normal mt-4 text-center">
                                    Note : Final charges may vary based on model & condition. Technician will confirm after inspection.
                                </p>
                                <h3 className="text-xl text-gray-900 font-bold mt-6 mb-2">Final Thoughts</h3>
                                <p className='pl-5 text-lg mt-4 text-justify text-gray-900'>A well-maintained air conditioner is essential for comfort and efficiency whether at home, in offices, or in large commercial spaces. Regular servicing, proper refrigerant levels, and timely repairs can significantly extend its lifespan and ensure optimal cooling performance. While basic upkeep like cleaning filters or checking the thermostat can be managed in-house, more complex issues require professional expertise. Trust certified technicians to diagnose and resolve electrical faults, refrigerant leaks, or compressor issues and keep your AC system running smoothly, safely, and reliably.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center">
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
