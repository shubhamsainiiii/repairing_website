import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Ac from '/Users/Rk Indora/Desktop/machinesystem/project/src/assets/Ac.jpeg';
import { FaPhoneAlt } from 'react-icons/fa';

const WaterCoolerRepair = () => {
    return (
        <div className="mt-16 py-12 px-6 md:px-16 lg:px-24">
            <div className="max-w-7xl mx-auto">
                {/* Header Title */}
                <h1 className="text-3xl md:text-4xl text-center font-bold mb-4">Water Cooler Services</h1>
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
                            “Expert Water Cooler Repair – Keeping Your Cool, Always.”
                        </h2>
                        <p className="mb-4  text-justify text-gray-700 font-medium">
                            We specialize in water cooler repair and maintenance to make sure you always stay cool and comfortable. Whether your cooler isn’t cooling properly, the water flow has stopped, it’s making unusual noise, or it simply needs regular servicing our experienced team takes care of everything with speed and precision. We use only genuine spare parts and carry out every repair or installation with full professionalism. Our goal is to ensure your water cooler works smoothly without interruptions, even during peak heat. With affordable pricing, on-time service, and skilled technicians, we promise a hassle-free experience every time.
                            <br />
                            Trust us  because cooling should bring you comfort, not problems.
                        </p>
                        <h3 className="text-lg font-bold mt-6 mb-2">Why Choose Us for Water Cooler Services in Jaipur?</h3>
                        <p className="text-gray-800 font-medium text-justify">Looking for dependable water cooler repair services in Jaipur? Your search ends here. We are a trusted name in the city, known for delivering prompt, professional, and cost-effective water cooler maintenance and repair. Whether it’s reduced cooling efficiency, motor issues, or routine servicing, our trained technicians ensure precision-driven solutions using genuine spare parts. Experience seamless service, transparent pricing, and long-lasting results all at your convenience.</p>
                        <ul className="list-disc pl-5 space-y-2 text-gray-800 text-md mt-4 text-justify">

                            <li><b>Expert Technicians : </b>Our certified water cooler repair specialists in Jaipur are trained to handle all major brands and models from Voltas, Blue Star, Usha to Symphony, Havells, and more. Whether it’s a cooling issue, water leakage, or motor fault  we fix it all with expert precision.</li>

                            <li><b>Quick Turnaround : </b>We understand the need for uninterrupted cooling, especially during summer. That’s why we provide same-day water cooler repair services across Jaipur to ensure minimal downtime.</li>

                            <li><b>Affordable & Transparent Pricing : </b>Looking for affordable water cooler repair in Jaipur? We offer upfront pricing with no hidden charges, delivering quality repair services that fit your budget.</li>

                            <li><b>Customer Satisfaction Guaranteed : </b>Every service is backed by our warranty on both parts and labor, ensuring long-term performance and your complete peace of mind.</li>

                            <li><b>Comprehensive Repair Solutions : </b>From cooling coil replacements, pump and motor issues, to thermostat and electrical faults. we provide complete repair solutions for all types of water coolers (residential, commercial, desert, or portable).</li>
                        </ul>

                        <h3 className="text-xl font-bold mt-6 mb-2 flex flex-raw">Common Water Cooler Issues We Expertly Handle</h3>
                        <ul className="list-disc pl-5 space-y-2 text-md mt-4 text-justify text-gray-800">
                            <li><b>Water Cooler Installation : </b>Got a new water cooler? Our technicians offer professional installation services that include proper setup, secure electrical connections, and water inlet fittings to ensure safe and efficient operation from day one.</li>

                            <li><b>Cooling Not Working : </b>Is your water cooler running but not cooling? Whether it’s due to a gas leak, compressor fault, or cooling coil issue  we accurately diagnose and fix the problem to restore optimal performance.</li>

                            <li><b>Water Leakage : </b>Noticed water pooling around your cooler? We handle all types of leakage  from cracked tanks and loose pipes to faulty valves  ensuring a leak-free and reliable system.</li>

                            <li><b>Motor or Pump Issues : </b>If the pump isn’t circulating water or the motor is making noise, our experts repair or replace faulty components to keep your cooler running smoothly.</li>

                            <li><b>Electrical & Power Problems : </b>Water cooler not turning on or tripping the power? We inspect switches, fuses, wiring, and internal boards to resolve electrical failures safely and effectively.</li>

                            <li><b>Strange Noises or Vibrations : </b>Unusual sounds or heavy vibrations? These often point to fan issues, unbalanced blades, or internal obstructions  all of which our technicians can promptly correct.</li>
                        </ul>


                        <h3 className="text-lg font-bold mt-6 mb-2">Our Repair Process</h3>
                        <ul className="list-disc pl-5 space-y-2 text-md mt-4 text-justify text-gray-800">

                            <li><b>Detailed Diagnosis : </b>Our experts begin with a thorough inspection to accurately identify the issue with your <b>Water Cooler</b>.</li>

                            <li><b>Repair or Replacement : </b>Based on the diagnosis, we either repair the damaged components or recommend a replacement if needed.</li>

                            <li><b>Post-Repair Testing : </b> Once the work is done, we run a complete test to ensure your <b>Water Cooler</b> is functioning safely and efficiently.</li>

                            <li><b>Customer Satisfaction Check : </b> We consider the job complete only after you review and are fully satisfied with the service provided.</li>

                        </ul>


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

export default WaterCoolerRepair;
