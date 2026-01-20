/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaBook, FaPhoneAlt, FaSearch, FaTools } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
// import gyser from '../assets/gyser.jpeg'
import Ac from '../assets/Ac.jpeg'
import Oven from '../assets/oven.jpeg'
import rahul from '../assets/rahul.png'
import priya from '../assets/priya.avif'
import amit from '../assets/amit.png'
import washing_machine from '../assets/washing_machine.jpeg';
import refrigerator from '../assets/refrigerator.jpeg'
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import slider1 from '../assets/slider1.jpg';
import slider2 from '../assets/slider1.jpg';
import slider3 from '../assets/slider1.jpg';

const services = [
  { title: "AC (Air Conditioning)", image: Ac, path: "/services/acrepair" },
  { title: "Washing Machine", image: washing_machine, path: "/services/washingmachine" },
  { title: "Refrigerator", image: refrigerator, path: "/services/refrigerator" },
];

const steps = [
  {
    title: "Online Booking",
    icon: <FaBook />,
    description: "Book your repair from the comfort of your home.",
    color: "from-[#D91656] to-[#FFB4A2]",
  },
  {
    title: "Inspect & Analyze",
    icon: <FaSearch />,
    description: "Technician visits and diagnoses the issue quickly.",
    color: "from-[#387F39] to-[#A3D1C6] ",
  },
  {
    title: "Solving Problem",
    icon: <FaTools />,
    description: "Instant repair with warranty at an affordable price.",
    color: "from-[#EB5A3C] to-[#F3C623] ",
  },
];

const testimonials = [
  {
    name: "Amit Sharma",
    message: "Great service and quick repair! Highly recommended.",
    image: rahul,
  },
  {
    name: "Priya Mehta",
    message: "Professional team and excellent support. Very happy!",
    image: priya,
  },
  {
    name: "Rahul Verma",
    message: "They fixed my washing machine in no time. Super helpful!",
    image: amit,
  },
];

const Home = () => {
  return (
    <div className="mt-14 py-12 px-6 md:px-16 lg:px-24">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-900">Wel-Come</h1>
        <p className="mt-1 text-lg text-gray-900">
          Your Trusted Partner for Home Appliance Repairs & Services.
        </p>
      </div>

      <div className="shadow-sm rounded-lg shadow-gray-900 overflow-hidden">
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

      <div className="py-16 px-6 max-w-8xl mx-auto">
        <h2 className="text-4xl md:text-3xl font-bold text-center mb-10">Our Best Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.4, duration: 0.6 }}
              viewport={{ once: true }}
              className="rounded-xl overflow-hidden shadow-sm shadow-gray-900 bg-white"
            >
              <Link to={service.path}>
                <LazyLoadImage
                  src={service.image}
                  alt={service.title}
                  effect="blur"
                  wrapperProps={{
                    style: { transitionDelay: "1s" },
                  }}
                  className="w-full object-cover"
                />
              </Link>

              <div className="p-4 text-center">
                <h3 className="font-bold mb-2 text-xl">{service.title}</h3>
                <Link
                  to={service.path}
                  className="text-blue-900 font-bold text-md"
                >
                  Read More
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            to="/services"
            className="bg-blue-800 hover:bg-blue-900 text-white px-6 py-3 rounded-md font-semibold transition-all duration-300"
          >
            Explore All Services
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <div
        className="bg-cover bg-center h-[400px] flex flex-col justify-center items-center text-white text-center px-4"
        style={{
          backgroundImage: `url(${Oven})`,
          backgroundBlendMode: "overlay",
          backgroundColor: "rgba(0,0,0,0.4)",
        }}
      >
        <h1 className="text-3xl md:text-4xl font-bold">
          HOME APPLIANCES REPAIR & SERVICE
        </h1>
        <div className="mt-6 flex gap-4 flex-wrap justify-center">
          <Link
            to="/about"
            className="bg-blue-800 hover:bg-blue-900 text-white px-6 py-3 rounded-md font-semibold transition-all duration-300"
          >
            About More
          </Link>
          <a
            href="tel:7691888950"
            className="bg-gray-100 hover:bg-gray-300 text-gray-900 px-6 py-3 rounded-md font-semibold transition-all duration-300"
          >
            <FaPhoneAlt className="inline mr-2" /> Call Now
          </a>
        </div>
      </div>

      {/* How It Works */}
      <div className="py-16 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12 text-gray-800">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 30 }}
              transition={{
                duration: 0.8,
                delay: index * 0.6,
                ease: "easeInOut",
              }}
              viewport={{ once: false }}
              className={`relative overflow-hidden rounded-xl shadow-sm shadow-gray-900 bg-gradient-to-br ${step.color} text-white p-6 hover:scale-105 transition-transform duration-600`}
            >
              {/* Animated Dots */}
              <span className="absolute top-2 left-2 size-35 bg-white rounded-full opacity-20 animate-[ping_3s_ease-in-out_infinite]"></span>
              <span className="absolute right-2 top-2 size-20 bg-white rounded-full opacity-20 animate-[ping_3s_ease-in-out_infinite]"></span>
              <span className="absolute bottom-2 right-2 size-30 bg-black rounded-full opacity-30 animate-[ping_3s_ease-in-out_infinite] "></span>

              {/* Icon and Text */}
              <div className="text-5xl mb-4 flex justify-center text-gray-900 items-center z-10 relative">
                {step.icon}
              </div>
              <h3 className="text-2xl font-bold mb-2 text-gray-900">
                {step.title}
              </h3>
              <p className="text-md font-medium text-gray-900">
                {step.description}
              </p>

            </motion.div>
          ))}
        </div>
      </div>


      {/* Testimonials Slider */}
      <div className="mt-30 text-center">
        <h2 className="text-3xl font-bold mb-12 text-gray-800">What Our Customers Say</h2>

        <Swiper modules={[Autoplay]} spaceBetween={50} slidesPerView={1} loop autoplay={{ delay: 3000 }} className="max-w-3xl mx-auto px-4 rounded-xl shadow-sm shadow-gray-900">
          {testimonials.map((item, idx) => (
            <SwiperSlide key={idx}>
              <div className="bg-white p-8">
                <div className="flex flex-col items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 rounded-full border-4 border-gray-900 object-cover shadow-md" />
                  <p className="italic text-gray-800 text-lg">"{item.message}"</p>
                  <h4 className="text-lg font-bold text-gray-900">{item.name}</h4>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
export default Home;