import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Ac from '/Users/Rk Indora/Desktop/machinesystem/project/src/assets/Ac.jpeg';
import { FaPhoneAlt } from 'react-icons/fa';

const data = [
    { size: "Upto 24 Inch", type: "Wall Mount", price: 200 },
    { size: "Upto 24 Inch", type: "Table Mount", price: 170 },
    { size: "25 to 32 Inch", type: "Wall Mount", price: 250 },
    { size: "25 to 32 Inch", type: "Table Mount", price: 200 },
    { size: "33 to 42 Inch", type: "Wall Mount", price: 325 },
    { size: "33 to 42 Inch", type: "Table Mount", price: 250 },
    { size: "43 to 50 Inch", type: "Wall Mount", price: 350 },
    { size: "43 to 50 Inch", type: "Table Mount", price: 250 },
    { size: "51 to 55 Inch", type: "Wall Mount", price: 400 },
    { size: "51 to 55 Inch", type: "Table Mount", price: 300 },
    { size: "56 to 65 Inch", type: "Wall Mount", price: 425 },
    { size: "56 to 65 Inch", type: "Table Mount", price: 300 },
    { size: "Above 65", type: "Wall Mount", price: 450 },
    { size: "Above 65", type: "Table Mount", price: 350 },
    { size: "TV Un-Installation (Upto 32 Inch)", type: "___", price: 170 },
    { size: "TV Un-Installation (33 to 50 Inch)", type: "___", price: 200 },
    { size: "TV Un-Installation (51 to 65 Inch)", type: "___", price: 250 },
    { size: "Repair & Service (Upto 32 Inch)", type: "___", price: 399 },
    { size: "Repair & Service (33 to 50 Inch)", type: "___", price: 449 },
    { size: "Repair & Service (51 to 65 Inch)", type: "___", price: 499 }
];


const LedTvRepair = () => {
    return (
        <div className="mt-16 py-12 px-6 md:px-16 lg:px-24 font-primary">
            <div className="max-w-6xl mx-auto">
                {/* Header Title */}
                <h1 className="text-3xl md:text-4xl text-center font-bold mb-4 text-gray-900">LED TV Services</h1>
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
                            “Expert LED TV Maintenance and Repair Because Your Screen Deserves the Best”
                        </h2>
                        <p className="mb-4 text-justify text-gray-900 text-lg">
                            Whether your LED TV has no picture, distorted visuals, sound issues, or refuses to turn on  our certified technicians provide accurate diagnosis and dependable solutions tailored to your TV brand, type, and viewing needs. We service all major TV models including LED, LCD, Smart TVs, and Android TVs from top brands like Samsung, LG, Sony, MI, and more. Using genuine spare parts, advanced tools, and tested repair techniques, we restore your TV’s visual and sound performance with precision and care  so your entertainment never skips a beat.<br />
                            Our goal is to minimize screen downtime and maximize performance through expert service and preventive care. With quick response times, transparent pricing, and a customer-first approach.
                        </p>
                        <h3 className="text-xl font-bold mt-6 mb-2 text-gray-900">Why Choose Us for LED TV Services in Jaipur?</h3>

                        <p className="text-gray-900 text-lg text-justify">From precise LED TV installation to thorough diagnostics and urgent repairs, we offer complete television servicing solutions for homes, offices, hotels, and retail spaces. Whether it’s an LED, LCD, Smart TV, or Android TV, we restore clear visuals, crisp sound, and smooth functionality without delay. No more screen flickering, no audio, or unresponsive remotes. Our certified technicians use advanced tools, genuine spare parts, and proven repair techniques to bring your TV back to life. Because in today’s digital world, uninterrupted entertainment and information aren’t just wants  they’re essentials. Let us handle your screen problems, so you can sit back and enjoy the show without worry.
                        </p>

                        <ul className="list-disc pl-5 space-y-3 text-gray-900 text-lg mt-4 text-justify">

                            <li><b>Expert Technicians : </b>Our certified LED TV repair specialists in Jaipur are trained to handle all major brands and models  from Samsung, LG, Sony to MI, Panasonic, and more. Whether it’s a display issue, sound problem, or motherboard fault  we fix it all with expert precision.</li>

                            <li><b>Quick Turnaround : </b>We understand how important your entertainment setup is. That’s why we provide same-day LED TV repair services across Jaipur, minimizing your screen downtime and restoring your viewing experience quickly.</li>

                            <li><b>Affordable & Transparent Pricing : </b>Looking for affordable LED TV repair in Jaipur? We offer clear pricing, no hidden fees, and cost-effective solutions tailored to your needs and budget.</li>

                            <li><b>Customer Satisfaction Guaranteed : </b>Every repair is backed by our warranty on parts and labor, giving you peace of mind and lasting performance. Your satisfaction is our top priority.</li>

                            <li><b>Comprehensive Repair Solutions : </b>From screen replacements, HDMI port fixes, to power supply and software issues  we offer complete LED TV repair services for all brands and types (LED, LCD, Smart TVs, Android TVs, etc.)</li>
                        </ul>

                        <h3 className="text-xl font-bold mt-6 mb-2 flex flex-raw text-gray-900">Common LED TV Issues We Expertly Handle</h3>

                        <p className='text-gray-900 text-lg text-justify'>LED TVs are essential for entertainment and information in homes, offices, and commercial spaces. But over time, even the most reliable TVs can develop issues that affect viewing quality and performance. From screen flickering, sound distortion, and HDMI port issues to motherboard failures, backlight problems, or software glitches  these faults, if left unchecked, can lead to poor display, interrupted viewing, or complete device failure. Regular maintenance, timely repairs, and expert diagnostics are key to ensuring your LED TV continues to deliver a sharp picture, clear audio, and reliable performance throughout its life.
                        </p>


                        <ul className="list-disc pl-5 space-y-3 text-lg mt-4 text-justify text-gray-900">

                            <li><b>LED TV Installation : </b>Got a new TV? Our experts provide professional LED TV wall mounting and installation services tailored to your room layout and viewing comfort. We ensure secure setup, optimal angle, and safe wiring for the best experience</li>

                            <li><b>No Display or Black Screen : </b>TV turning on but showing nothing? We quickly diagnose screen, backlight, or motherboard issues and restore your LED TV’s display to perfect working condition.</li>

                            <li><b>Sound But No Picture : </b>If your TV has audio but no visuals, the issue could lie with the panel, inverter, or internal circuitry. Our technicians handle such problems with precision and care.</li>

                            <li><b>Connectivity & Port Issues : </b>Facing problems with HDMI, USB, or AV ports? We repair or replace faulty input ports so you can enjoy uninterrupted streaming, gaming, or viewing on all your connected devices.</li>

                            <li><b>Power or Startup Failure : </b>Is your TV not turning on or stuck on the boot screen? Whether it’s a power supply board, adapter, or internal circuit problem  we fix it safely and efficiently.</li>

                            <li><b>Screen Flickering, Lines, or Color Issues : </b>Distorted images, horizontal lines, or flickering screens? These are often signs of panel or T-Con board failure. We diagnose and fix such display issues to restore crisp, vibrant visuals.</li>
                        </ul>


                        <h3 className="text-xl font-bold mt-6 mb-2 text-gray-900">Our Repair Process</h3>
                        <ul className="list-disc pl-5 space-y-3 text-lg mt-4 text-justify text-gray-900">

                            <li><b>Detailed Diagnosis : </b>Our experts begin with a thorough inspection to accurately identify the issue with your <b>LED TV</b>.</li>

                            <li><b>Repair or Replacement : </b>Based on the diagnosis, we either repair the damaged components or recommend a replacement if needed.</li>

                            <li><b>Post-Repair Testing : </b> Once the work is done, we run a complete test to ensure your <b>LED TV</b> is functioning safely and efficiently.</li>

                            <li><b>Customer Satisfaction Check : </b> We consider the job complete only after you review and are fully satisfied with the service provided.</li>
                        </ul>

                        {/* Service Table */}
                        <div className="mb-8 mt-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">LED TV Repair/Service Prices</h3>
                            <table className="w-full border font-medium text-gray-900 border-black text-center text-lg">
                                <thead className="bg-gray-200">
                                    <tr>
                                        <th className="border p-2">Repair & Service</th>
                                        <th className="border p-2">Type</th>
                                        <th className="border p-2">Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.map((row, i) => (
                                        <tr key={i}>
                                            <td className="border p-2">{row.size}</td>
                                            <td className="border p-2">{row.type}</td>
                                            <td className="border p-2">{row.price}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <p className="text-md text-gray-500 font-normal mt-4 text-center">
                                Note : Final charges may vary based on model & condition. Technician will confirm after inspection.
                            </p>
                            <h3 className="text-xl text-gray-900 font-bold mt-6 mb-2">Final Thoughts</h3>
                            <p className='pl-5 text-lg mt-4 text-justify text-gray-900'>A well-maintained LED TV is essential for uninterrupted entertainment and long-term performance, whether at home, in offices, or commercial setups. Regular servicing, timely screen or circuit repairs, and software updates can significantly extend your TV's lifespan and ensure optimal picture and sound quality. While simple tasks like cleaning the screen or adjusting settings can be done in-house, more complex problems like display issues, audio failure, or motherboard malfunctions require professional attention. Trust certified technicians to accurately diagnose and repair your LED TV, ensuring it operates smoothly, safely, and reliably for years to come.</p>
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

export default LedTvRepair
