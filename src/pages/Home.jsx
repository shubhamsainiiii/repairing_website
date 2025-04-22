import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaBook, FaPhoneAlt, FaSearch, FaTools } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import gyser from '../assets/gyser.jpeg'
import Ac from '../assets/Ac.jpeg'
import rahul from '../assets/rahul.png'
import priya from '../assets/priya.avif'
import amit from '../assets/amit.png'
import washing_machine from '../assets/washing_machine.jpeg';
import refrigerator from '../assets/refrigerator.jpeg'

const heroBg = "./assets/gyser.jpeg";
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
    <div className="mt-16 py-12 px-6 md:px-16 lg:px-24">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-900">Wel-Come</h1>
        <p className="mt-4 text-lg text-gray-600">
          Your Trusted Partner for Home Appliance Repairs & Services.
        </p>
      </div>

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

      <div className="py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">Our Best Services</h2>
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
                <img src={service.image} alt={service.title} className="w-full object-cover" />
              </Link>

              <div className="p-4 text-center">
                <h3 className="font-bold mb-2">{service.title}</h3>
                <Link
                  to={service.path}
                  className="text-orange-600 font-semibold"
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
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md font-semibold transition-all duration-300"
          >
            Explore All Services
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <div
        className="bg-cover bg-center h-[400px] flex flex-col justify-center items-center text-white text-center px-4"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundBlendMode: "overlay",
          backgroundColor: "rgba(0,0,0,0.7)",
        }}
      >
        <h1 className="text-3xl md:text-4xl font-bold">
          HOME APPLIANCES REPAIR & SERVICE
        </h1>
        <div className="mt-6 flex gap-4 flex-wrap justify-center">
          <Link
            to="/about"
            className="bg-orange-500 hover:bg-orange-700 text-white px-6 py-3 rounded-md font-semibold transition-all duration-300"
          >
            About More
          </Link>
          <a
            href="tel:7691888950"
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-md font-semibold transition-all duration-300"
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
              className={`relative overflow-hidden rounded-xl shadow-md shadow-gray-600 bg-gradient-to-br ${step.color} text-white p-6 hover:scale-105 transition-transform duration-600`}
            >
              {/* Animated Dots */}
              <span className="absolute top-2 left-2 size-35 bg-white rounded-full opacity-20 animate-[ping_3s_ease-in-out_infinite]"></span>
              <span className="absolute right-2 top-2 size-20 bg-white rounded-full opacity-20 animate-[ping_3s_ease-in-out_infinite]"></span>
              <span className="absolute bottom-2 right-2 size-30 bg-black rounded-full opacity-30 animate-[ping_3s_ease-in-out_infinite] "></span>

              {/* Icon and Text */}
              <div className="text-5xl mb-4 flex justify-center items-center z-10 relative">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-[#50727B] to-[#180161]">
                {step.title}
              </h3>
              <p className="text-md font-medium text-transparent bg-clip-text bg-gradient-to-r to-[#030637] from-[#092635]">
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
                    className="w-20 h-20 rounded-full border-4 border-orange-400 object-cover shadow-md" />
                  <p className="italic text-gray-600 text-lg">"{item.message}"</p>
                  <h4 className="text-lg font-bold text-orange-600">{item.name}</h4>
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
