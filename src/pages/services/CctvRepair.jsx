import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Ac from '/Users/Rk Indora/Desktop/machinesystem/project/src/assets/Ac.jpeg';
import { FaPhoneAlt } from 'react-icons/fa';

const CctvRepair = () => {
    return (
        <div className="mt-16 py-12 px-6 md:px-16 lg:px-24">
            <div className="max-w-6xl mx-auto">
                {/* Header Title */}
                <h1 className="text-3xl md:text-4xl text-center font-bold mb-4 text-gray-900">CCTV Camera Services</h1>
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
                            “Advanced Surveillance Solutions with Expert CCTV Installation and Reliable Repairs Your Security, Our Priority.”</h2>

                        <p className="mb-4 text-justify text-gray-900 text-lg">
                            We specialize in CCTV camera installation, repair, and maintenance to ensure your home or business stays protected with sharp, uninterrupted surveillance. Whether your cameras aren't recording properly, have connectivity issues, show blurry footage, or simply require routine servicing, our skilled team handles every issue with precision and care. We use only high-quality, reliable components and approach every job with complete professionalism.
                            Our mission is to provide you with a security system that works flawlessly, day and night, giving you peace of mind in every situation. With affordable rates, on-time service, and experienced technicians, we deliver a   seamless, worry-free experience from consultation to completion.<br />
                            Trust us your safety should be watched over, not left to chance.</p>

                        <h3 className="text-xl font-bold mt-6 mb-2 text-gray-900">Why Choose Us for CCTV Camera Services in Jaipur?</h3>
                        <p className="text-gray-900 text-lg text-justify">Searching for trusted CCTV camera services in Jaipur? You've come to the right place.We offer expert CCTV installation, repair, and maintenance for both homes and businesses. From poor video quality, connection problems, and malfunctioning DVRs to full system setups our skilled technicians handle it all with care and precision. We use top-grade equipment and components to ensure your surveillance system works reliably, day and night.Get timely support, honest pricing, and security solutions that last.Because when it comes to safety, you deserve nothing but the best. Let us keep an eye out for you.</p>

                        <ul className="list-disc pl-5 space-y-3 text-gray-900 text-lg mt-4 text-justify">

                            <li><b>Expert Technicians : </b>Our certified CCTV specialists are trained to work with all major surveillance brands from Hikvision, CP Plus, Dahua to Godrej and beyond. Be it camera malfunctions, DVR/NVR issues, wiring problems, or connectivity faults  we resolve it all with technical expertise and attention to detail.</li>

                            <li><b>Quick Turnaround : </b>We know how critical uninterrupted security is for your home or business. That’s why we offer same-day CCTV installation and repair across Jaipur to ensure your property stays protected without delay.</li>

                            <li><b>Affordable & Transparent Pricing : </b>Looking for dependable yet budget-friendly CCTV service? We offer clear, upfront pricing with no hidden fees you get complete clarity before any work begins.</li>

                            <li><b>Customer Satisfaction Guaranteed : </b>All our services come with a warranty on parts and labor, giving you confidence in the quality and long-term performance of your security system.</li>

                            <li><b>Comprehensive Repair Solutions : </b>From new camera setups, lens or cable replacements, DVR/NVR configuration, to network troubleshooting and system upgrades we handle residential, commercial, and industrial CCTV needs with precision and care.</li>
                        </ul>

                        <h3 className="text-xl font-bold mt-6 mb-2 flex flex-raw text-gray-900">Common CCTV Camera Issues We Expertly Handle</h3>

                        <p className='text-gray-900 text-lg text-justify'>CCTV (Closed-Circuit Television) cameras are essential for modern-day security in homes, offices, shops, and public areas. Over time, these systems may encounter technical faults that affect performance and reliability. This guide offers practical insights into common CCTV camera issues and how to diagnose or repair them effectively.</p>

                        <ul className="list-disc pl-5 space-y-3 text-lg mt-4 text-justify text-gray-900">
                            <li><b>CCTV Installation : </b> Got a new CCTV system? Our technicians provide professional installation with proper camera positioning, secure wiring, power connections, and DVR/NVR setup to ensure smooth operation from day one.</li>

                            <li><b>Blurry or Distorted Video Quality - </b><br /> <b>Possible Causes: </b> Dust or smudges on the lens, poor focusing, or a shifted camera position.<br /> <b>Fix :</b> Gently clean the camera lens using a microfiber cloth. Adjust the focus ring if applicable, and ensure the camera is mounted securely at the right angle.</li>

                            <li><b>No Video Output / Black Screen - </b><br /> <b>Possible Causes : </b> Faulty cables, disconnected power supply, or a damaged camera.<br /> <b>Fix :</b> Check all cable connections, including BNC or RJ45 (Ethernet). Test the power adapter and replace damaged components if necessary. Ensure the camera is receiving sufficient power.</li>

                            <li><b>Night Vision Not Working - </b><br /> <b>Possible Causes : </b> Failing IR LEDs, dirty IR cut filter, or incorrect night settings.<br /> <b>Fix :</b> Inspect IR LEDs for damage. Clean the front glass and filter. Enable IR/night vision mode in the DVR/NVR settings.</li>

                            <li><b>Water or Weather Damage - </b><br /> <b>Possible Causes: </b> Water leakage due to broken seals or improperly installed outdoor units.<br /> <b>Fix :</b> Replace damaged enclosures or seals. Apply waterproof tape or silicone around entry points. Ensure the camera is weather-rated (IP66/IP67) for outdoor use.</li>

                            <li><b>Camera Not Turning On - </b><br /> <b>Possible Causes: </b> Power adapter issues, faulty power supply, or damaged wiring.<br /> <b>Fix :</b> Replace the power adapter, check the voltage, and inspect power cables for damage. Use a multimeter to test power output.</li>

                            <li><b>Flickering or Intermittent Feed - </b><br /> <b>Possible Causes: </b> Voltage drops, poor wiring, or loose connections.<br /> <b>Fix :</b> Tighten connectors and replace low-quality cables. Use power stabilizers or surge protectors to manage inconsistent electricity flow.</li>

                            <li><b>Camera Keeps Rebooting or Freezing - </b><br /> <b>Possible Causes: </b> Overheating, corrupted firmware, or DVR/NVR malfunction.<br /> <b>Fix :</b> Ensure the camera is installed in a ventilated area. Update firmware if available. Test with a different port or DVR/NVR unit.</li>

                            <li><b>Strange Noises or Vibrations (in PTZ cameras) - </b><br /> <b>Possible Causes: </b> Mechanical issues in the motor, loose mount, or internal obstructions.<br /> <b>Fix :</b> Tighten mounts and brackets. If noise persists in PTZ (Pan-Tilt-Zoom) models, the motor may require servicing or replacement</li>
                        </ul>


                        <h3 className="text-xl font-bold mt-6 mb-2 text-gray-900">Our Repair Process</h3>
                        <ul className="list-disc pl-5 space-y-3 text-lg mt-4 text-justify text-gray-900">

                            <li><b>Detailed Diagnosis : </b>Our experts begin with a thorough inspection to accurately identify the issue with your <b>CCTV Camera</b>.</li>

                            <li><b>Repair or Replacement : </b>Based on the diagnosis, we either repair the damaged components or recommend a replacement if needed.</li>

                            <li><b>Post-Repair Testing : </b> Once the work is done, we run a complete test to ensure your <b>CCTV Camera</b> is functioning safely and efficiently.</li>

                            <li><b>Customer Satisfaction Check : </b> We consider the job complete only after you review and are fully satisfied with the service provided.</li>
                        </ul>

                        <h3 className="text-xl text-gray-900 font-bold mt-6 mb-2">Final Thoughts</h3>
                        <p className='pl-5 text-lg mt-4 text-justify text-gray-900'>Keeping your CCTV system in top condition ensures uninterrupted surveillance, enhanced security, and lasting peace of mind. Just like any other electronic system, CCTV cameras and DVR/NVR units require regular upkeep to perform optimally. Routine inspections, lens cleaning, cable checks, and timely firmware updates can prevent small problems from escalating into serious faults. Prompt identification and resolution of issues like blurry footage, signal loss, or storage failure help maintain reliable monitoring and deter potential security threats. While basic troubleshooting such as restarting the system or adjusting camera angles can be done in-house, more advanced problems like hardware malfunctions, power supply issues, or network configuration errors are best handled by trained professionals</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-center my-6">
                <a href="tel:+917691888950"
                    className="flex bg-blue-700 hover:bg-blue-900 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300">
                    <FaPhoneAlt className="mt-1 text-sm mr-4" />
                    Book Now
                </a>
            </div>
        </div>
    )
}

export default CctvRepair
