import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Ac from '/Users/Rk Indora/Desktop/machinesystem/project/src/assets/Ac.jpeg';
import { FaPhoneAlt } from 'react-icons/fa';

const data = [
    { service: "General Service/Repairing", semi: 349, fully: 399 },
    { service: "Installation & Demo", semi: "__", fully: 399 },
    { service: "W/M Cleaning", semi: 349, fully: 399 }
];

const semi = [
    { sc: "S.C.", item: "Filter Normal", price: 230 },
    { sc: "S.C.", item: "Magic Filter Normal", price: 290 },
    { sc: "S.C.", item: "Timer Spin", price: 730 },
    { sc: "S.C.", item: "Timer Wash", price: 800 },
    { sc: "S.C.", item: "Spin Motor", price: "1700 - 2100" },
    { sc: "S.C.", item: "Wash Motor", price: 1900 },
    { sc: "S.C.", item: "Gear Box", price: 1000 },
    { sc: "S.C.", item: "Belt", price: 230 },
    { sc: "S.C.", item: "Cock Rubber", price: 400 },
    { sc: "S.C.", item: "Buffer", price: 200 },
    { sc: "S.C.", item: "Buffer - Universal", price: 230 },
    { sc: "S.C.", item: "Drain Pipe", price: 200 },
    { sc: "S.C.", item: "Drain Selector", price: 170 },
    { sc: "S.C.", item: "Inlet Pipe", price: 200 },
    { sc: "S.C.", item: "Spin Door", price: 830 },
    { sc: "S.C.", item: "Wash Door", price: 850 },
    { sc: "S.C.", item: "Pulley (Spin)", price: 400 },
    { sc: "S.C.", item: "Pulley (Wash)", price: 430 },
    { sc: "S.C.", item: "Capacitor - Single", price: 500 },
    { sc: "S.C.", item: "Capacitor - Double", price: 700 },
    { sc: "S.C.", item: "Plunger", price: 900 },
    { sc: "S.C.", item: "Pulsator", price: "700 - 1100" },
    { sc: "S.C.", item: "Roller Set", price: 290 },
    { sc: "S.C.", item: "Knobs", price: 130 },
    { sc: "S.C.", item: "Lip Switch", price: 170 },
    { sc: "S.C.", item: "Spin Cap", price: 230 },
    { sc: "S.C.", item: "Buzzer", price: 280 }
];

const top = [
    { "item": "Filter Normal", "price": 230, "service_charge": "S.C." },
    { "item": "Magic Filter Normal", "price": 300, "service_charge": "S.C." },
    { "item": "Drain Assembly - Plunger", "price": 900, "service_charge": "S.C." },
    { "item": "Inlet Valve - Single", "price": 700, "service_charge": "S.C." },
    { "item": "Inlet Valve - Double", "price": 1200, "service_charge": "S.C." },
    { "item": "Drain Motor", "price": 1400, "service_charge": "S.C." },
    { "item": "Drain Pipe", "price": 200, "service_charge": "S.C." },
    { "item": "Inlet Pipe", "price": 530, "service_charge": "S.C." },
    { "item": "Main Motor (AC)", "price": "3250 - 4550", "service_charge": "S.C." },
    { "item": "Main Motor (DC)", "price": "3700 - 6550", "service_charge": "S.C." },
    { "item": "PCB – Non-Inverter", "price": "3500 - 5250", "service_charge": "S.C." },
    { "item": "PCB – Inverter", "price": "3900 - 6550", "service_charge": "S.C." },
    { "item": "Belt", "price": 230, "service_charge": "S.C." },
    { "item": "Gear Box", "price": "2900 - 5550", "service_charge": 850 },
    { "item": "Capacitor - Single", "price": 500, "service_charge": "S.C." },
    { "item": "Capacitor - Double", "price": 700, "service_charge": "S.C." },
    { "item": "Pulsator", "price": "700 - 1100", "service_charge": "S.C." },
    { "item": "Pressure Switch", "price": 730, "service_charge": "S.C." }
]

const front = [
    { "item": "Inlet Valve - Single", "price": 700, "service_charge": "S.C." },
    { "item": "Inlet Valve - Double", "price": 1200, "service_charge": "S.C." },
    { "item": "Drain Motor", "price": 1900, "service_charge": "S.C." },
    { "item": "Drain Pipe", "price": 200, "service_charge": "S.C." },
    { "item": "Inlet 2 Meter Pipe", "price": 500, "service_charge": "S.C." },
    { "item": "Inlet 3 Meter Pipe", "price": 900, "service_charge": "S.C." },
    { "item": "Main Motor", "price": "12550 - 18550", "service_charge": "S.C." },
    { "item": "PCB – Non-Inverter", "price": "3700 - 5550", "service_charge": "S.C." },
    { "item": "PCB – Inverter", "price": "4200 - 7550", "service_charge": "S.C." },
    { "item": "Belt", "price": 600, "service_charge": "S.C." },
    { "item": "Spider - Gear Box", "price": "3250 - 5050", "service_charge": 850 },
    { "item": "Pulley", "price": 1500, "service_charge": "S.C." },
    { "item": "Pressure Switch", "price": 730, "service_charge": "S.C." }
]


const WashingMachineRepair = () => {
    return (
        <div className="mt-16 py-12 px-6 md:px-16 lg:px-24">
            <div className="max-w-7xl mx-auto">
                {/* Header Title */}
                <h1 className="text-3xl md:text-4xl text-center font-bold mb-4">Washing Machine Services</h1>
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
                            “Expert Washing Machine Repair – Because Your Clothes Deserve the Best Care”
                        </h2>
                        <p className="mb-4  text-justify text-gray-700 font-medium">
                            We provide expert washing machine repair and maintenance services to ensure smooth operation, efficient cleaning, and a hassle-free laundry experience. From routine servicing and professional installation to genuine spare part replacement — we’ve got it all covered.
                        </p>
                        <h3 className="text-lg font-bold mt-6 mb-2">Why Choose Us for Washing Machine Services in Jaipur?</h3>
                        <p className="text-gray-800 font-medium">Searching for “washing machine repair near me in Jaipur”? You’ve landed in the right place. Here’s why hundreds of families in Jaipur count on us for quick, efficient, and affordable washing machine repairs.</p>
                        <ul className="list-disc pl-5 space-y-2 text-gray-800 text-md mt-4 text-justify">

                            <li><b>Expert Technicians : </b>Our certified washing machine specialists are trained to service all top brands — LG, Whirlpool, Samsung, IFB, Bosch, and more. From drum issues and water drainage problems to motor failures — we fix it all, the right way.</li>

                            <li><b>Quick Turnaround : </b>We know how essential your washing machine is to your daily routine. That’s why we offer same-day repair service across Jaipur, so your laundry schedule stays uninterrupted.</li>

                            <li><b>Affordable & Transparent Pricing : </b>Get professional repair services at pocket-friendly rates — with clear pricing, no hidden charges, and customized repair solutions to suit your needs.</li>

                            <li><b>Customer Satisfaction Guaranteed : </b>All our repairs come with a warranty on both parts and labor. We’re not done until your machine works perfectly and you’re fully satisfied.</li>

                            <li><b>Comprehensive Repair Solutions : </b>Whether it’s a top-load, front-load, semi-automatic, or fully automatic model — we handle installations, part replacements, and major repairs for all washing machines.</li>
                        </ul>

                        <h3 className="text-xl font-bold mt-6 mb-2 flex flex-raw">Common Washing Machine Issues We Expertly Handle</h3>
                        <ul className="list-disc pl-5 space-y-2 text-md mt-4 text-justify text-gray-800">
                            <li><b>Washing Machine Installation : </b>Got a new washing machine? We offer professional installation services for top-load, front-load, and semi-automatic models. Our experts ensure proper water inlet/outlet setup, electrical connections, and smooth running from day one.</li>

                            <li><b>Not Spinning or Draining Water : </b>If your washing machine isn’t spinning clothes properly or water isn’t draining, it could be a motor, belt, or drainage system issue. We’ll quickly diagnose and fix it to get your laundry routine back on track.</li>

                            <li><b>Power Issues or Not Starting : </b>Facing problems turning on your machine or frequent shutdowns? We handle issues related to the power board, wiring, or control panel to restore safe and reliable operation.</li>

                            <li><b>Water Leakage or Overflowing : </b>Water leaking from underneath or overfilling the drum? Our technicians inspect the inlet valves, drum seal, and drainage pipe to prevent water damage and ensure safe usage.</li>

                            <li><b>Drum Not Rotating or Making Noise : </b>A stuck or noisy drum can indicate issues with the motor, bearings, or belt. We service and replace faulty components for a smooth and silent washing cycle.</li>

                            <li><b>Error Codes & Program Failures : </b>Modern machines show error codes when there’s a fault. We decode and fix program errors, sensor faults, or PCB (circuit board) problems across all major brands.</li>
                        </ul>


                        <h3 className="text-lg font-bold mt-6 mb-2">Our Repair Process</h3>
                        <ul className="list-disc pl-5 space-y-2 text-md mt-4 text-justify text-gray-800">
                            <li><b>Detailed Diagnosis : </b>Our experts begin with a thorough inspection to accurately identify the issue with your Washing Machine.</li>

                            <li><b>Repair or Replacement : </b>Based on the diagnosis, we either repair the damaged components or recommend a replacement if needed.</li>

                            <li><b>Post-Repair Testing : </b> Once the work is done, we run a complete test to ensure your Washing Machine is functioning safely and efficiently.</li>

                            <li><b>Customer Satisfaction Check : </b> We consider the job complete only after you review and are fully satisfied with the service provided.</li>
                        </ul>

                        {/* Service Table */}
                        <div className="mt-8 mb-12">
                            <h3 className="text-2xl text-center font-bold mb-4 text-gray-900">Washing Machine Repair/Service Prices</h3>
                            <table className="min-w-full border border-black text-left text-sm">
                                <thead className="">
                                    <tr className=''>
                                        <th className="border border-black px-4 py-2 font-semibold">Repair & Service</th>
                                        <th className="border border-black px-4 py-2 font-semibold">Semi Automatic</th>
                                        <th className="border border-black px-4 py-2 font-semibold">Fully Automatic</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.map((item, i) => (
                                        <tr key={i}>
                                            <td className="border border-black px-4 py-2">{item.service}</td>
                                            <td className="border border-black px-4 py-2">{item.semi}</td>
                                            <td className="border border-black px-4 py-2">{item.fully}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className='mt-10'>
                            <h3 className="text-2xl text-center font-bold mb-4 text-gray-900">Semi-Automatic Washing Machine Parts/Spare Prices</h3>
                            <table className="min-w-full border border-black text-left text-sm">
                                <thead className="">
                                    <tr className=''>
                                        <th className="border border-black px-4 py-2 font-semibold">Repair & Service</th>
                                        <th className="border border-black px-4 py-2 font-semibold">Spare Parts and Price</th>
                                        <th className="border border-black px-4 py-2 font-semibold">Service Charge</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {semi.map((acc, i) => (
                                        <tr key={i}>
                                            <td className="border border-black px-4 py-2">{acc.item}</td>
                                            <td className="border border-black px-4 py-2">{acc.price}</td>
                                            <td className="border border-black px-4 py-2">{acc.sc}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className='mt-10'>
                            <h3 className="text-2xl text-center font-bold mb-4 text-gray-900">Top-Load Washing Machine Parts/Spare Prices</h3>
                            <table className="min-w-full border border-black text-left text-sm">
                                <thead className="">
                                    <tr className=''>
                                        <th className="border border-black px-4 py-2 font-semibold">Repair & Service</th>
                                        <th className="border border-black px-4 py-2 font-semibold">Spare Parts and Price</th>
                                        <th className="border border-black px-4 py-2 font-semibold">Service Charge</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {top.map((acc, i) => (
                                        <tr key={i}>
                                            <td className="border border-black px-4 py-2">{acc.item}</td>
                                            <td className="border border-black px-4 py-2">{acc.price}</td>
                                            <td className="border border-black px-4 py-2">{acc.service_charge}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className='mt-10'>
                            <h3 className="text-2xl text-center font-bold mb-4 text-gray-900">Front-Load Washing Machine Parts/Spare Prices</h3>
                            <table className="min-w-full border border-black text-left text-sm">
                                <thead className="">
                                    <tr className=''>
                                        <th className="border border-black px-4 py-2 font-semibold">Repair & Service</th>
                                        <th className="border border-black px-4 py-2 font-semibold">Spare Parts and Price</th>
                                        <th className="border border-black px-4 py-2 font-semibold">Service Charge</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {front.map((acc, i) => (
                                        <tr key={i}>
                                            <td className="border border-black px-4 py-2">{acc.item}</td>
                                            <td className="border border-black px-4 py-2">{acc.price}</td>
                                            <td className="border border-black px-4 py-2">{acc.service_charge}</td>
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
                    className="flex bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300">
                    <FaPhoneAlt className="mt-1 text-sm mr-4" />
                    Book Now
                </a>
            </div>
        </div>
    )
}

export default WashingMachineRepair;
