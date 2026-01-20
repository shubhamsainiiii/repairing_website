import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { FaPhoneAlt } from 'react-icons/fa';
import slider1 from '../../assets/slider1.jpg';
import slider2 from '../../assets/slider2.png';
import slider3 from '../../assets/slider3.png';
const WaterCoolerRepair = () => {
    return (
        <div className="mt-16 py-12 px-6 md:px-16 lg:px-24">
            <div className="max-w-6xl mx-auto">
                {/* Header Title */}
                <h1 className="text-3xl md:text-4xl text-center font-bold mb-4 text-gray-900">Water Cooler Services</h1>
                <div className="mb-10 shadow-sm rounded-lg shadow-gray-900 overflow-hidden">
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        navigation
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 2000 }}
                        loop={true}
                    >
                        {[
                            slider2, slider1, slider3
                        ].map((img, index) => (
                            <SwiperSlide key={index}>
                                <img
                                    src={img}
                                    alt={`Slide ${index + 1}`}
                                    className="w-full h-116 object-cover"
                                    loading="lazy"
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <div className="flex justify-center">
                    <div className="w-full max-w-6xl">
                        <h2 className="text-xl font-bold mb-4 text-gray-900 text-center">
                            “Expert Water Cooler Repair Keeping Your Cool, Always.”
                        </h2>
                        <p className="mb-4 text-justify text-gray-900 text-lg">
                            We specialize in water cooler repair and maintenance to make sure you always stay cool and comfortable. Whether your cooler isn’t cooling properly, the water flow has stopped, it’s making unusual noise, or it simply needs regular servicing our experienced team takes care of everything with speed and precision. We use only genuine spare parts and carry out every repair or installation with full professionalism. Our goal is to ensure your water cooler works smoothly without interruptions, even during peak heat. With affordable pricing, on-time service, and skilled technicians, we promise a hassle-free experience every time.
                            <br />
                            Trust us  because cooling should bring you comfort, not problems.
                        </p>
                        <h3 className="text-xl font-bold mt-6 mb-2 text-gray-900">Why Choose Us for Water Cooler Services in Jaipur?</h3>
                        <p className="text-gray-900 text-lg text-justify">Looking for dependable water cooler repair services in Jaipur? Your search ends here. We are a trusted name in the city, known for delivering prompt, professional, and cost-effective water cooler maintenance and repair. Whether it’s reduced cooling efficiency, motor issues, or routine servicing, our trained technicians ensure precision-driven solutions using genuine spare parts. Experience seamless service, transparent pricing, and long-lasting results all at your convenience.</p>

                        <ul className="list-disc pl-5 space-y-3 text-gray-900 text-lg mt-4 text-justify">

                            <li><b>Expert Technicians : </b>Our certified water cooler repair specialists in Jaipur are trained to handle all major brands and models from Voltas, Blue Star, Usha to Symphony, Havells, and more. Whether it’s a cooling issue, water leakage, or motor fault  we fix it all with expert precision.</li>

                            <li><b>Quick Turnaround : </b>We understand the need for uninterrupted cooling, especially during summer. That’s why we provide same-day water cooler repair services across Jaipur to ensure minimal downtime.</li>

                            <li><b>Affordable & Transparent Pricing : </b>Looking for affordable water cooler repair in Jaipur? We offer upfront pricing with no hidden charges, delivering quality repair services that fit your budget.</li>

                            <li><b>Customer Satisfaction Guaranteed : </b>Every service is backed by our warranty on both parts and labor, ensuring long-term performance and your complete peace of mind.</li>

                            <li><b>Comprehensive Repair Solutions : </b>From cooling coil replacements, pump and motor issues, to thermostat and electrical faults. we provide complete repair solutions for all types of water coolers (residential, commercial, desert, or portable).</li>
                        </ul>

                        <h3 className="text-xl font-bold mt-6 mb-2 flex flex-raw text-gray-900">Common Water Cooler Issues We Expertly Handle</h3>

                        <p className='text-gray-900 text-lg text-justify'>Washing machines are essential appliances for maintaining hygiene and convenience in homes, laundries, and commercial spaces. However, over time, even the most reliable washing machines can develop issues that affect their performance and efficiency. From water leakage, drum imbalance, and strange noises to motor failures, drainage problems, or electronic control glitches these faults, if left unchecked, can lead to poor cleaning results, interrupted cycles, or complete machine breakdown. Regular maintenance, timely repairs, and expert diagnostics are key to ensuring your washing machine continues to provide effective cleaning, smooth operation, and long-lasting reliability throughout its life.
                        </p>

                        <ul className="list-disc pl-5 space-y-3 text-lg mt-4 text-justify text-gray-900">
                            <li><b>Water Cooler Installation : </b>Got a new water cooler? Our technicians offer professional installation services that include proper setup, secure electrical connections, and water inlet fittings to ensure safe and efficient operation from day one.</li>

                            <li><b>Cooling Not Working : </b>Is your water cooler running but not cooling? Whether it’s due to a gas leak, compressor fault, or cooling coil issue  we accurately diagnose and fix the problem to restore optimal performance.</li>

                            <li><b>Water Leakage : </b>Noticed water pooling around your cooler? We handle all types of leakage  from cracked tanks and loose pipes to faulty valves  ensuring a leak-free and reliable system.</li>

                            <li><b>Motor or Pump Issues : </b>If the pump isn’t circulating water or the motor is making noise, our experts repair or replace faulty components to keep your cooler running smoothly.</li>

                            <li><b>Electrical & Power Problems : </b>Water cooler not turning on or tripping the power? We inspect switches, fuses, wiring, and internal boards to resolve electrical failures safely and effectively.</li>

                            <li><b>Strange Noises or Vibrations : </b>Unusual sounds or heavy vibrations? These often point to fan issues, unbalanced blades, or internal obstructions  all of which our technicians can promptly correct.</li>
                        </ul>


                        <h3 className="text-xl font-bold mt-6 mb-2 text-gray-900">Our Repair Process</h3>
                        <ul className="list-disc pl-5 space-y-3 text-lg mt-4 text-justify text-gray-900">

                            <li><b>Detailed Diagnosis : </b>Our experts begin with a thorough inspection to accurately identify the issue with your <b>Water Cooler</b>.</li>

                            <li><b>Repair or Replacement : </b>Based on the diagnosis, we either repair the damaged components or recommend a replacement if needed.</li>

                            <li><b>Post-Repair Testing : </b> Once the work is done, we run a complete test to ensure your <b>Water Cooler</b> is functioning safely and efficiently.</li>

                            <li><b>Customer Satisfaction Check : </b> We consider the job complete only after you review and are fully satisfied with the service provided.</li>
                        </ul>

                        <h3 className="text-xl text-gray-900 font-bold mt-6 mb-2">Final Thoughts</h3>
                        <p className='pl-5 text-lg mt-4 text-justify text-gray-900'>A well-maintained water cooler is essential for providing clean, refreshing hydration in homes, offices, schools, and commercial spaces. Regular servicing, timely replacement of filters and worn-out components, and checking for cooling or dispensing issues can significantly extend the life of your unit while maintaining optimal performance. While basic upkeep like cleaning the water tank or drip tray can be done at home, more complex problems such as inconsistent cooling, leakage, electrical faults, or compressor issues require professional expertise. Trust certified technicians to accurately diagnose and repair your water cooler, ensuring it operates efficiently, safely, and reliably all year round.
                        </p>

                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center">
                <a href="tel:+917691888950"
                    className="flex bg-blue-700 hover:bg-blue-900 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300">
                    <FaPhoneAlt className="mt-1 text-sm mr-4" />
                    Book Now
                </a>
                <p className="text-md text-gray-500 font-normal mt-4 text-center max-w-md">
                    Note: Final charges may vary based on the device model and condition. The
                    technician will confirm the exact cost after inspection. Visiting charges
                    will also be applicable.
                </p>
            </div>
        </div>
    )
}

export default WaterCoolerRepair;
