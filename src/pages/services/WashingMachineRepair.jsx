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
            <div className="max-w-6xl mx-auto">
                {/* Header Title */}
                <h1 className="text-3xl md:text-4xl text-center font-bold mb-4 text-gray-900">Washing Machine Services</h1>
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
                            “Expert Washing Machine Repair Because Your Clothes Deserve the Best Care”
                        </h2>
                        <p className="mb-4 text-justify text-gray-900 text-lg">
                            Whether your washing machine won’t start, is leaking water, making unusual noises, or failing to complete cycles, our skilled technicians deliver precise diagnostics and reliable repairs customized to your machine’s brand, model, and washing needs. We service all leading washing machine types, including front load, top load, semi-automatic, and fully automatic models from trusted brands like Whirlpool, LG, Samsung, Bosch, and more. By using genuine parts, advanced tools, and proven repair methods, we restore your machine’s efficiency and smooth operation with accuracy and care so your laundry routine stays hassle-free.<br />
                            Our mission is to reduce downtime and enhance your washer’s performance through expert repairs and proactive maintenance. We pride ourselves on fast response times, clear pricing, and a customer-first service approach.
                        </p>
                        <h3 className="text-xl font-bold mt-6 mb-2 text-gray-900">Why Choose Us for Washing Machine Services in Jaipur?</h3>

                        <p className="text-gray-900 text-lg text-justify">From precise washing machine installation to thorough diagnostics and urgent repairs, we offer complete servicing solutions for homes, laundries, hotels, and commercial spaces. Whether it’s a front load, top load, semi-automatic, or fully automatic machine, we restore efficient washing, smooth operation, and reliable performance without delay. No more water leaks, strange noises, or interrupted cycles. Our certified technicians use advanced tools, genuine spare parts, and proven repair techniques to bring your washing machine back to optimal condition. Because in today’s busy world, hassle-free laundry isn’t just a convenience it’s essential. Let us handle your washing machine problems, so you can focus on what matters most without worry.
                        </p>

                        <ul className="list-disc pl-5 space-y-3 text-gray-900 text-lg mt-4 text-justify">

                            <li><b>Expert Technicians : </b>Our certified washing machine specialists are trained to service all top brands LG, Whirlpool, Samsung, IFB, Bosch, and more. From drum issues and water drainage problems to motor failures. we fix it all, the right way.</li>

                            <li><b>Quick Turnaround : </b>We know how essential your washing machine is to your daily routine. That’s why we offer same-day repair service across Jaipur, so your laundry schedule stays uninterrupted.</li>

                            <li><b>Affordable & Transparent Pricing : </b>Get professional repair services at pocket-friendly rates with clear pricing, no hidden charges, and customized repair solutions to suit your needs.</li>

                            <li><b>Customer Satisfaction Guaranteed : </b>All our repairs come with a warranty on both parts and labor. We’re not done until your machine works perfectly and you’re fully satisfied.</li>

                            <li><b>Comprehensive Repair Solutions : </b>Whether it’s a top-load, front-load, semi-automatic, or fully automatic model. we handle installations, part replacements, and major repairs for all washing machines.</li>
                        </ul>

                        <h3 className="text-xl font-bold mt-6 mb-2 flex flex-raw text-gray-900">Common Washing Machine Issues We Expertly Handle</h3>

                        <p className='text-gray-900 text-lg text-justify'>Washing machines are essential appliances for maintaining hygiene and convenience in homes, laundries, and commercial spaces. However, over time, even the most reliable washing machines can develop issues that affect their performance and efficiency. From water leakage, drum imbalance, and strange noises to motor failures, drainage problems, or electronic control glitches these faults, if left unchecked, can lead to poor cleaning results, interrupted cycles, or complete machine breakdown. Regular maintenance, timely repairs, and expert diagnostics are key to ensuring your washing machine continues to provide effective cleaning, smooth operation, and long-lasting reliability throughout its life.
                        </p>

                        <ul className="list-disc pl-5 space-y-3 text-lg mt-4 text-justify text-gray-900">
                            <li><b>Washing Machine Installation : </b>Got a new washing machine? We offer professional installation services for top-load, front-load, and semi-automatic models. Our experts ensure proper water inlet/outlet setup, electrical connections, and smooth running from day one.</li>

                            <li><b>Not Spinning or Draining Water : </b>If your washing machine isn’t spinning clothes properly or water isn’t draining, it could be a motor, belt, or drainage system issue. We’ll quickly diagnose and fix it to get your laundry routine back on track.</li>

                            <li><b>Power Issues or Not Starting : </b>Facing problems turning on your machine or frequent shutdowns? We handle issues related to the power board, wiring, or control panel to restore safe and reliable operation.</li>

                            <li><b>Water Leakage or Overflowing : </b>Water leaking from underneath or overfilling the drum? Our technicians inspect the inlet valves, drum seal, and drainage pipe to prevent water damage and ensure safe usage.</li>

                            <li><b>Drum Not Rotating or Making Noise : </b>A stuck or noisy drum can indicate issues with the motor, bearings, or belt. We service and replace faulty components for a smooth and silent washing cycle.</li>

                            <li><b>Error Codes & Program Failures : </b>Modern machines show error codes when there’s a fault. We decode and fix program errors, sensor faults, or PCB (circuit board) problems across all major brands.</li>
                        </ul>


                        <h3 className="text-xl font-bold mt-6 mb-2 text-gray-900">Our Repair Process</h3>
                        <ul className="list-disc pl-5 space-y-3 text-lg mt-4 text-justify text-gray-900">

                            <li><b>Detailed Diagnosis : </b>Our experts begin with a thorough inspection to accurately identify the issue with your <b>Washing Machine</b>.</li>

                            <li><b>Repair or Replacement : </b>Based on the diagnosis, we either repair the damaged components or recommend a replacement if needed.</li>

                            <li><b>Post-Repair Testing : </b> Once the work is done, we run a complete test to ensure your <b>Washing Machine</b> is functioning safely and efficiently.</li>

                            <li><b>Customer Satisfaction Check : </b> We consider the job complete only after you review and are fully satisfied with the service provided.</li>
                        </ul>

                        {/* Service Table */}
                        <div className="mb-8 mt-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Washing Machine Repair/Service Prices</h3>
                            <table className="w-full border font-medium text-gray-900 border-black text-center text-lg">
                                <thead className="bg-gray-200">
                                    <tr className=''>
                                        <th className="border p-2">Repair & Service</th>
                                        <th className="border p-2">Semi Automatic</th>
                                        <th className="border p-2">Fully Automatic</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.map((item, i) => (
                                        <tr key={i}>
                                            <td className="border p-2">{item.service}</td>
                                            <td className="border p-2">{item.semi}</td>
                                            <td className="border p-2">{item.fully}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="mb-8 mt-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Semi-Automatic Washing Machine Parts/Spare Prices</h3>
                            <table className="w-full border font-medium text-gray-900 border-black text-center text-lg">
                                <thead className="bg-gray-200">
                                    <tr>
                                        <th className="border p-2">Repair & Service</th>
                                        <th className="border p-2">Spare Parts and Price</th>
                                        <th className="border p-2">Service Charge</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {semi.map((acc, i) => (
                                        <tr key={i}>
                                            <td className="border p-2">{acc.item}</td>
                                            <td className="border p-2">{acc.price}</td>
                                            <td className="border p-2">{acc.sc}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="mb-8 mt-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Top-Load Washing Machine Parts/Spare Prices</h3>
                            <table className="w-full border font-medium text-gray-900 border-black text-center text-lg">
                                <thead className="bg-gray-200">
                                    <tr>
                                        <th className="border p-2">Repair & Service</th>
                                        <th className="border p-2">Spare Parts and Price</th>
                                        <th className="border p-2">Service Charge</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {top.map((acc, i) => (
                                        <tr key={i}>
                                            <td className="border p-2">{acc.item}</td>
                                            <td className="border p-2">{acc.price}</td>
                                            <td className="border p-2">{acc.service_charge}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="mb-8 mt-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Front-Load Washing Machine Parts/Spare Prices</h3>
                            <table className="w-full border font-medium text-gray-900 border-black text-center text-lg">
                                <thead className="bg-gray-200">
                                    <tr>
                                        <th className="border p-2">Repair & Service</th>
                                        <th className="border p-2">Spare Parts and Price</th>
                                        <th className="border p-2">Service Charge</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {front.map((acc, i) => (
                                        <tr key={i}>
                                            <td className="border p-2">{acc.item}</td>
                                            <td className="border p-2">{acc.price}</td>
                                            <td className="border p-2">{acc.service_charge}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <p className="text-md text-gray-500 font-normal mt-4 text-center">
                                Note : Final charges may vary based on model & condition. Technician will confirm after inspection.
                            </p>
                            <h3 className="text-xl text-gray-900 font-bold mt-6 mb-2">Final Thoughts</h3>
                            <p className='pl-5 text-lg mt-4 text-justify text-gray-900'>A well-maintained washing machine is essential for smooth, hassle-free laundry care in homes, apartments, and commercial laundry setups. Regular servicing, timely replacement of worn-out parts, and checking for drain or motor issues can greatly extend the life of your appliance while ensuring efficient washing performance. While basic maintenance like cleaning the drum or lint filter can be done at home, complex issues such as water leakage, spin cycle failure, electrical faults, or motor breakdowns require professional attention. Trust certified technicians to accurately diagnose and repair your washing machine, ensuring it runs smoothly, safely, and reliably for years to come.
                            </p>
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
    )
}

export default WashingMachineRepair;
