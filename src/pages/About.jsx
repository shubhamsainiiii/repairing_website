import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import gyser from '../assets/gyser.jpeg'
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import CountUp from "react-countup";
import { FaAward, FaPhoneAlt, FaRegCalendarAlt, FaSmileBeam, FaTools } from 'react-icons/fa';
import { motion } from 'framer-motion';




const About = () => {
    const statsData = [
        { value: 1.250, label: "Happy Customers", icon: <FaSmileBeam className="size-10 mb-4" /> },
        { value: 1.100, label: "Service Done", icon: <FaTools className="size-10 mb-4" /> },
        { value: 700, label: "Client Appreciations", icon: <FaAward className="size-10 mb-4 " /> },
        { value: 10, label: "Years of Experience", icon: <FaRegCalendarAlt className="size-10 mb-4" /> },
    ];
    return (
        <div className="text-gray-800 mt-16 py-12 px-6 md:px-16 lg:px-24">
            {/* Header Section */}
            <div className="text-center mb-10">
                <h1 className="text-4xl font-bold text-gray-900">About Us</h1>
                <p className="mt-4 text-lg text-gray-600">
                    Your Trusted Partner for Home Appliance Repairs & Services.
                </p>
            </div>

            {/* Image Slider Without Custom CSS */}
            <div className="mb-10 shadow-sm rounded-lg shadow-gray-900 overflow-hidden">
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    navigation
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 2000 }}
                    loop={true}
                >
                    {[
                        gyser,
                        gyser,
                        gyser,
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

            {/* Company Overview */}
            <div className="grid md:grid-cols-2 gap-8 items-center mt-20">
                <div>
                    <h2 className="text-2xl font-bold text-gray-900">Who We Are</h2>
                    <p className="mt-4 text-gray-700 leading-relaxed font-medium text-justify">
                        <b>Universal Repair Point</b> is a platform offering home appliance repair services at your home. Whether you need Washing Machine repair, AC service, TV installation and many more, Our thousands of qualified service professionals based throughout the india. Customer use our platform to book doorstep repair services.
                        These services are delivered in the comfort of their home and at a time of their choosing. We promise to provide a reliable guaranteed super fast home service with quality and workmanship. To fulfill this promise, We work closely with service partners, enabling them with technology, training, products, tools and brand helping them succeed and deliver on this promise.We repair all major brands, makes and models. There is no matter where you bought it, we can fix it.
                    </p>
                </div>
                <img
                    src={gyser}
                    alt="About Us"
                    className="rounded-lg shadow-sm shadow-gray-900 w-full h-64 object-cover"
                />
            </div>
            <div className="grid md:grid-cols-2 mt-10 gap-8 items-center mt-20">
                <img
                    src={gyser}
                    alt="About Us"
                    className="rounded-lg shadow-sm shadow-gray-900 w-full h-64 object-cover"
                />
                <div>
                    <h2 className="text-2xl font-bold text-gray-900">Home Repair & Services</h2>
                    <p className="mt-4 text-gray-700 leading-relaxed font-medium text-justify">
                        Universal Repair Point provides professional and expert Home Appliance Repair & Services in Jaipur. We pride ourselves on our superior customer service and on going above and beyond to ensure our customers are 100 percent satisfied. Our experienced and skilled team uses the highest quality tools and materials to ensure your appliance performs at its optimum level. In addition, we strive to help you save money by repairing your appliance rather than replacing it.

                        Whether you’re in need of a simple or extensive appliance repair, you can trust the experts at Universal Repair Point to fix the problem in a timely manner.
                    </p>
                </div>
            </div>
            <motion.div
                className="text-white py-12 mt-20 bg-blue-900 shadow-sm shadow-gray-900"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.1 }} // Animate jab 20% visible ho
                variants={{
                    visible: { transition: { staggerChildren: 0.6 } }, // Ek card complete hone ke baad dusra start hoga
                }}
            >
                <div className="max-w-4xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
                    {statsData.map((stat, index) => (
                        <motion.div
                            key={index}
                            variants={{
                                hidden: { opacity: 0, y: 50 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeIn" } },
                            }}
                            className="p-6 rounded-xl bg-blue-900 transition-all duration-500 shadow-sm shadow-black transform hover:scale-105 hover:shadow-gray-300 hover:shadow-sm"
                        >
                            <div className="flex flex-col items-center">
                                {stat.icon}
                                <h2 className="text-4xl font-bold mt-2 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-yellow-400">
                                    <CountUp
                                        start={0}
                                        end={stat.value}
                                        duration={6}
                                        separator=","
                                        decimals={stat.value % 1 !== 0 ? 2 : 0}
                                        decimal="."
                                        suffix={stat.label.includes("Years") ? "+" : "k"}
                                    />
                                </h2>
                                <p className="text-lg mt-2 font-semibold text-transparent bg-clip-text bg-gradient-to-l from-pink-500 to-yellow-400">
                                    {stat.label}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 50 }} // Start hidden, slightly below
                whileInView={{ opacity: 1, y: 0 }} // Animate to visible when in view
                transition={{ duration: 1 }} // Smooth transition
                viewport={{ once: false }} // Trigger animation only once
                className="relative bg-cover bg-center h-[400px] flex flex-col items-center justify-center text-center text-white mt-30"
                style={{
                    backgroundImage: `url(${gyser})`,
                    backgroundBlendMode: "overlay",
                    backgroundColor: "rgba(0,0,0,0.8)", // Dark overlay effect
                }}
            >
                {/* Heading */}
                <h1 className="text-3xl md:text-4xl font-bold mt-4 ">
                    Are Your Home Appliances Not Working Properly? <br /> Contact Us Now!
                </h1>

                {/* Buttons */}
                <div className="mt-10 flex gap-4">
                    <a
                        href="tel:7691888950"
                        className="bg-teal-600 hover:bg-teal-700 tarnsition-all duration-500 flex items-center text-white px-6 py-3 rounded-md font-semibold gap-2"
                    >
                        <FaPhoneAlt />
                        Call Now
                    </a>

                    <a
                        href="mailto:shubhamthoi27@gmail.com"
                        className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md font-semibold transition-all duration-300"
                    >
                        Contact Us
                    </a>
                </div>
            </motion.div>

        </div>
    );
};

export default About;
