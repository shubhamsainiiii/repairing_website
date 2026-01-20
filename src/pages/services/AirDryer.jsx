import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { FaPhoneAlt } from 'react-icons/fa';
import slider1 from '../../assets/slider1.jpg';
import slider2 from '../../assets/slider2.png';
import slider3 from '../../assets/slider3.png';

const AirDryer = () => {
    return (
        <div className="mt-16 py-12 px-6 md:px-16 lg:px-24">
            <div className="max-w-6xl mx-auto">
                {/* Header Title */}
                <h1 className="text-3xl md:text-4xl text-center font-bold mb-4 text-gray-900">Air Dryer Services</h1>
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
                            Breathe Easy, Stay Cool  Air Dryer Care That Keeps Your Home Comfortable and Safe
                        </h2>

                        <p className="mb-4 text-justify text-gray-900 text-lg">
                            We specialize in Air Dryer installation, deep cleaning, and repair services to ensure your home stays comfortable, moisture-free, and safe. Whether your air dryer is not working, producing unusual noise, has reduced airflow, or simply needs routine maintenance, our skilled technicians diagnose and resolve every issue with care and precision. We use industry-grade tools and safe cleaning agents to restore your air dryer’s efficiency, extending its life and performance. Our mission is to keep your air clean, your space dry, and your maintenance worries minimal. With timely service, transparent pricing, and a customer-first approach, we make the entire process smooth from the initial inspection to the final check.<br />
                            Trust us to take care of your air dryer, so you can breathe easy and stay comfortable at home every day.</p>

                        <h3 className="text-xl font-bold mt-6 mb-2 text-gray-900">Why Choose Us for Air Dryer Services in Jaipur?</h3>
                        <p className="text-gray-900 text-lg text-justify">
                            Tired of humid, uncomfortable spaces and malfunctioning air dryers? We’ve got you covered. From expert installation to deep cleaning and timely repairs, we provide end-to-end air dryer solutions for homes and businesses. Whether your air dryer is emitting strange noises, losing airflow, or hasn't been serviced in months, our trained professionals bring it back to life with care, precision, and genuine parts. No shortcuts, no surprises. We believe a comfortable, dry space isn’t just luxury. it’s a necessity. That’s why we focus on reliable service, fair pricing, and results that last. Your space deserves to stay cool, and so do you. Let the experts handle the moisture, so you can focus on what really matters comfort and peace of mind.
                        </p>

                        <ul className="list-disc pl-5 space-y-3 text-gray-900 text-lg mt-4 text-justify">

                            <li><b>Trained & Trusted Technicians : </b>Our skilled air dryer service experts are experienced with all major brands and models. Whether it’s low airflow, loud noise, faulty heating elements, or electrical faults, we inspect, clean, and fix every issue with accuracy and attention to detail.</li>

                            <li><b>Quick & Hassle-Free Visits : </b>We understand how important a dry and comfortable space is. That’s why we provide fast and same-day air dryer repair and cleaning services to ensure you don’t have to wait to breathe easy again.</li>

                            <li><b>Clear Pricing, No Surprises : </b>We stand by the quality of our service. Every job is backed by a warranty on parts and labor, so your air dryer works like new and stays that way.</li>

                            <li><b>Work You Can Rely On : </b>All services are backed by a warranty on parts and workmanship, so you can trust that your air dryer is in safe hands and built to perform over the long term.</li>

                            <li><b>Complete Chimney Care : </b>From new air dryer installations and routine deep cleaning to motor servicing and annual maintenance contracts (AMC), we handle everything with professionalism and reliability for both residential and commercial spaces.</li>
                        </ul>

                        <h3 className="text-xl font-bold mt-6 mb-2 flex flex-raw text-gray-900">Common Air Dryer Issues We Expertly Handle</h3>

                        <p className='text-gray-900 text-lg text-justify'>
                            Air dryers play an essential role in maintaining comfort by ensuring moisture-free indoor spaces. However, like any appliance, air dryers can experience issues that impact their performance and your indoor air quality. From weak airflow and overheating to unusual noises, malfunctioning motors, or faulty heating elementsthese issues, if ignored, can lead to decreased efficiency and discomfort.
                        </p>

                        <ul className="list-disc pl-5 space-y-3 text-lg mt-4 text-justify text-gray-900">
                            <li><b>Air Dryer Installation : </b>We ensure precise air dryer installation with proper electrical setup, airflow alignment, moisture drainage configuration, and safety checks,so your system runs efficiently, safely, and without hiccups from day one.</li>

                            <li><b>No Hot Air or Inadequate Heating : </b>If your air dryer is blowing cold or barely warm air, the heating element or thermostat may be failing. We test and fix heating components so you get consistent drying results every time.</li>

                            <li><b>Weak or Interrupted Airflow :  </b>Low or fluctuating airflow often means blocked vents, clogged filters, or motor issues. We inspect and restore smooth ventilation to keep performance steady and efficient.</li>

                            <li><b>Dryer Not Turning On or Shutting Off Unexpectedly : </b>From faulty power cords to internal circuit issues or overload cutoffswe diagnose startup failures and restore reliable function without delay.</li>

                            <li><b>Dust, Lint, or Debris Build-Up : </b>Internal lint build-up reduces efficiency and increases fire risk. We perform deep internal cleaning and duct clearing for safe, smooth airflow.</li>

                            <li><b>Excess Moisture Retention After Drying : </b>If clothes or air feel damp even after a cycle, we check moisture sensors, airflow systems, and heating levels to fix incomplete drying performance.</li>

                        </ul>


                        <h3 className="text-xl font-bold mt-6 mb-2 text-gray-900">Our Repair Process</h3>
                        <ul className="list-disc pl-5 space-y-3 text-lg mt-4 text-justify text-gray-900">

                            <li><b>Detailed Diagnosis : </b>Our experts begin with a thorough inspection to identify the exact issue, whether it’s low airflow, overheating, or a faulty motor, ensuring we address the root cause.</li>

                            <li><b>Repair or Replacement : </b>Based on our diagnosis, we either repair the damaged components or suggest a replacement if necessary. We use high-quality, brand-approved parts to restore your air dryer’s performance.</li>

                            <li><b>Post-Repair Testing : </b>Once the repair is complete, we conduct thorough testing to ensure the air dryer is working efficiently, checking airflow, temperature, and noise levels, and making adjustments if necessary.</li>

                            <li><b>Customer Satisfaction Check : </b>We believe in transparency and customer satisfaction. After the repair, we review the work with you to ensure you’re fully satisfied with the service, leaving your space comfortable and dry.</li>
                        </ul>

                        <h3 className="text-xl text-gray-900 font-bold mt-6 mb-2">Final Thoughts</h3>
                        <p className='pl-5 text-lg mt-4 text-justify text-gray-900'>Maintaining your air dryer in top condition ensures a comfortable, dry, and safe indoor environment. Regular servicing, timely filter replacements, and early detection of issues like weak airflow or overheating can prevent major malfunctions. While basic tasks like cleaning the filters can be done at home, it’s best to call a certified technician for electrical faults, motor issues, or duct blockages. This way, you avoid further damage and ensure your air dryer keeps your space fresh and dry for years to come.</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center my-6">
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

export default AirDryer
