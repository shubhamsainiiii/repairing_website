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
            <div className="max-w-6xl mx-auto">
                {/* Header Title */}
                <h1 className="text-3xl md:text-4xl text-center font-bold mb-4 text-gray-900">Microwave Services</h1>
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
                            “Expert Microwave Repair Services for Your Convenience and Effortless Cooking”
                        </h2>
                        <p className="mb-4 text-justify text-gray-900 text-lg">
                            Microwave ovens have become an essential part of modern kitchens helping you cook, reheat, and defrost food quickly and efficiently. But like any other appliance, they require regular maintenance to function safely and smoothly. Whether your microwave is not heating properly, making unusual noises, displaying error codes, or has a broken door or buttons, our skilled technicians are equipped to handle all types of issues across solo, grill, and convection models.
                            We offer complete microwave solutions, including expert installation, deep cleaning, magnetron replacement, control board repairs, and more using only genuine spare parts and reliable tools. Our goal is not just to fix the problem, but to optimize your microwave’s performance for long-term reliability. With prompt service, clear pricing, and a focus on customer satisfaction, we make sure your microwave remains a dependable companion in your kitchen, day after day.
                        </p>
                        <h3 className="text-xl font-bold mt-6 mb-2 text-gray-900">Why Choose Us for Microwave Oven Services in Jaipur?</h3>
                        <p className="text-gray-900 text-lg text-justify">From expert microwave installation to routine servicing and urgent repairs, we provide end-to-end microwave solutions for homes, offices, restaurants, and commercial kitchens. Whether it’s a solo, grill, or convection microwave, we restore full heating functionality and ease of use without delay. No more uneven heating, unresponsive controls, or strange noises. Our certified technicians use advanced diagnostic tools, genuine spare parts, and proven repair techniques to keep your microwave working like new. In a busy kitchen, a reliable microwave isn’t a luxury it’s a necessity. Let us handle the technical issues, so you can focus on what really matters hassle-free cooking and convenience.
                        </p>

                        <ul className="list-disc pl-5 space-y-3 text-gray-900 text-lg mt-4 text-justify">
                            <li><b> Skilled Technicians : </b>Our certified microwave repair experts specialize in all major brands like LG, Samsung, IFB, Panasonic, and more. Whether it's uneven heating, a broken door latch, sparking issues, or a faulty magnetron. we deliver precise diagnostics and reliable fixes every time.</li>

                            <li><b> Fast & Hassle-Free Service : </b>We know how important a functional microwave is in your daily routine. That’s why we provide quick, same-day service across Jaipur to ensure your cooking convenience is never interrupted.</li>

                            <li><b> Affordable & Honest Pricing : </b>Enjoy expert microwave repair at prices that are clear and budget-friendly. With no hidden charges and upfront cost estimates, you always know what you're paying for before we begin.</li>

                            <li><b> Satisfaction Guaranteed : </b>All our services come with a warranty on replaced parts and labor, so you can cook with confidence knowing your appliance is restored to safe, efficient operation.</li>

                            <li><b> Complete Microwave Solutions : </b>From solo, grill to convection microwave repairs, door switch or control panel fixes, new installations to routine maintenance. we handle all residential and commercial microwave needs with care and commitment.</li>

                        </ul>

                        <h3 className="text-xl font-bold mt-6 mb-2 flex flex-raw text-gray-900">Common Microwave Oven Issues We Expertly Handle</h3>

                        <p className='text-gray-900 text-lg text-justify'>
                            Microwave ovens are a vital part of modern kitchens whether at home, in offices, or commercial establishments offering quick and convenient cooking, reheating, and defrosting solutions. However, over time, they can develop issues that impact performance, safety, and energy usage. From uneven heating and sparking to faulty control panels, broken door latches, magnetron failure, or unusual noises these problems, if left unchecked, can disrupt your daily routine and pose safety risks. Regular maintenance, timely repairs, and expert servicing are essential to ensure your microwave operates efficiently, safely, and reliably for years to come.
                        </p>

                        <ul className="list-disc pl-5 space-y-3 text-lg mt-4 text-justify text-gray-900">

                            <li><b>Microwave Oven Installation: </b>Setting up a new microwave? Our experts handle safe countertop placement or wall mounting, proper electrical connections, and operational checks to ensure your oven is ready for daily use without any complications.</li>

                            <li><b> Not Heating or Uneven Cooking : </b>Food coming out cold or only partially cooked? We inspect and repair faulty magnetrons, high-voltage diodes, or capacitors to restore even and efficient heating performance.</li>

                            <li><b> Sparking or Burning Smell : </b>Noticing sparks, smoke, or a burning odor inside your microwave? This may be caused by a damaged waveguide cover, burnt food debris, or internal arcing. we identify and fix the issue safely.</li>

                            <li><b> Door or Latch Issues : </b>A microwave door that doesn’t close properly or won't start could signal broken latches or switch alignment problems. Our technicians repair or replace parts to ensure safety and correct operation.</li>

                            <li><b> Buttons or Display Not Working : </b>If the control panel is unresponsive or the display is blank or blinking, we check and fix membrane pads, control boards, or power issues for seamless user interaction.</li>

                            <li><b> Unusual Noises or Vibrations : </b>Loud humming, buzzing, or rattling noises could be a sign of a malfunctioning turntable motor, fan, or other internal components. We diagnose and restore smooth, quiet performance.</li>
                        </ul>


                        <h3 className="text-xl font-bold mt-6 mb-2 text-gray-900">Our Repair Process</h3>
                        <ul className="list-disc pl-5 space-y-3 text-lg mt-4 text-justify text-gray-900">

                            <li><b>Detailed Diagnosis : </b>Our experts begin with a thorough inspection to accurately identify the issue with your <b>Microwave Oven</b>.</li>

                            <li><b>Repair or Replacement : </b>Based on the diagnosis, we either repair the damaged components or recommend a replacement if needed.</li>

                            <li><b>Post-Repair Testing : </b> Once the work is done, we run a complete test to ensure your <b>Microwave Oven</b> is functioning safely and efficiently.</li>

                            <li><b>Customer Satisfaction Check : </b> We consider the job complete only after you review and are fully satisfied with the service provided.</li>
                        </ul>

                        {/* Service Table */}
                        <div className="mt-10 space-y-8">
                            <div className="w-full">
                                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Microwave Oven Repair & Service Pricing</h3>
                                <table className="w-full border font-medium text-gray-900 border-black text-center text-lg">
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
                        </div>

                        {/* Spare Parts Table */}
                        <div className="mb-8 mt-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Microwave Spare/Parts Prices</h3>
                            <table className="w-full border font-medium text-gray-900 border-black text-center text-lg">
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
                            <p className="text-md text-gray-500 font-normal mt-4 text-center">
                                Note : Final charges may vary based on model & condition. Technician will confirm after inspection.
                            </p>
                            <h3 className="text-xl text-gray-900 font-bold mt-6 mb-2">Final Thoughts</h3>
                            <p className='pl-5 text-lg mt-4 text-justify text-gray-900'>A well-maintained microwave oven is essential for quick, efficient, and hassle-free cooking, whether at home, in offices, or in commercial kitchens. Regular servicing, timely replacement of worn components, and internal safety checks help extend the appliance’s life and prevent sudden malfunctions. While basic care like cleaning the interior or checking the power cord can be done at home, more complex issues like heating failure, turntable problems, or electrical faults require expert handling. Trust certified technicians to accurately diagnose and fix these problems, ensuring your microwave operates safely, heats evenly, and remains dependable every day.
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
