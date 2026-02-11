import React from 'react';
import Slider from '../../components/Slider';
import { FaPhoneAlt } from 'react-icons/fa';

const Acrepair = () => {
    return (
        <div className="mt-16 font-primary">
            <Slider />
            <div className="py-12 px-6 md:px-16 lg:px-24 pb-0 max-w-6xl mx-auto">
                {/* Header Title */}
                <h1 className="text-3xl md:text-4xl text-center font-bold mb-4 text-gray-900">AC (Air Conditioning) Services</h1>
            </div>
            <div className="py-12 px-6 md:px-16 lg:px-24 pt-10 max-w-6xl mx-auto">
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

                            <li><b>Skilled & Certified Technicians : </b>Our experienced AC specialists are trained to handle all major brands and models using the right tools and updated techniques  ensuring precise diagnosis and reliable service.</li>

                            <li><b>Quick Response & Same-Day Service : </b>We understand how uncomfortable a malfunctioning AC can be. That’s why we offer prompt support and same-day repair or maintenance for most issues, so you’re not left waiting.</li>

                            <li><b>Honest, Transparent Pricing : </b>No surprises here. You’ll get upfront estimates with clear breakdowns  no hidden charges, no last-minute add-ons.</li>

                            <li><b>Genuine Spare Parts & Warranty Support : </b>We use only brand-approved parts for repairs and replacements. All our work is backed by service warranties, giving you peace of mind and long-term reliability.</li>
                        </ul>

                        <h3 className="text-xl font-bold mt-6 mb-2 flex flex-raw text-gray-900">Common Air Conditioning Issues We Expertly Handle</h3>

                        <p className='text-gray-900 text-lg text-justify'>
                            Air conditioners are essential for maintaining comfort in homes and businesses, especially during peak summers. But over time, even the best systems can develop issues that affect cooling performance and energy efficiency. From weak airflow and unusual noises to refrigerant leaks, thermostat malfunctions, clogged filters, or compressor failure  these problems, if ignored, can lead to uneven cooling, rising energy bills, and complete system breakdowns. Regular maintenance, timely repairs, and professional inspections are crucial to keeping your AC running smoothly, safely, and efficiently all year round.
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
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center mt-6 mb-10">
                <a href="tel:+918058129195"
                    className="flex bg-blue-700 hover:bg-blue-900 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300">
                    <FaPhoneAlt className="mt-1 text-sm mr-4" />
                    Book Now
                </a>
                <p className="text-md text-gray-500 font-normal mt-6 text-center max-w-md">
                    Note: Final charges may vary based on the device model and condition. The
                    technician will confirm the exact cost after inspection. Visiting charges
                    will also be applicable.
                </p>
            </div>
        </div>
    );
};

export default Acrepair;
