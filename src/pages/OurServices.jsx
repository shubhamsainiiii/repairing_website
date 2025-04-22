import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";

import Ac from '../assets/Ac.jpeg';
import washing_machine from '../assets/washing_machine.jpeg';
import refrigerator from '../assets/refrigerator.jpeg';
import oven from '../assets/oven.jpeg';
import gyser_repair from '../assets/gyser_repair.jpeg';
import LED from '../assets/LED.jpeg';
import water_cooler from '../assets/water_cooler.jpeg';
import purifier from '../assets/purifier.jpeg';
import dispenser from '../assets/dispenser.jpeg';
import CCTV from '../assets/CCTV.jpeg';
import chimney from '../assets/chimney.jpeg';

const services = [
    {
        name: 'AC (Air Conditioning)',
        path: '/services/acrepair',
        img: Ac,
        desc: 'A well-maintained AC enhances comfort and cooling efficiency.'
    },
    {
        name: 'Washing Machine',
        path: '/services/washingmachine',
        img: washing_machine,
        desc: 'The unsung hero of laundry, making chores effortless.'
    },
    {
        name: 'Refrigerator',
        path: '/services/refrigerator',
        img: refrigerator,
        desc: 'Preserve perishables and keep your kitchen fresh.'
    },
    {
        name: 'Microwave Oven',
        path: '/services/microwave',
        img: oven,
        desc: 'Quick & easy kitchen essential for cooking and heating.'
    },
    {
        name: 'Gyser',
        path: '/services/gyser',
        img: gyser_repair,
        desc: 'Enjoy warm water anytime with a reliable geyser.'
    },
    {
        name: 'Led',
        path: '/services/ledtv',
        img: LED,
        desc: 'Modern lighting solution to brighten your spaces.'
    },
    {
        name: 'Water Cooler',
        path: '/services/watercooler',
        img: water_cooler,
        desc: 'Essential for easy access to chilled water in summers.'
    },
    {
        name: 'RO Water Purifier',
        path: '/services/ropurifier',
        img: purifier,
        desc: 'Delivers clean, safe, and great-tasting drinking water.'
    },
    {
        name: 'Water Dispenser',
        path: '/services/waterdispenser',
        img: dispenser,
        desc: 'Provides hot & cold water on demand, hygienically.'
    },
    {
        name: 'Camera Repairing',
        path: '/services/cctv',
        img: CCTV,
        desc: 'Protect your home with properly functioning CCTV.'
    },
    {
        name: 'Chimney Repair',
        path: '/services/chimney',
        img: chimney,
        desc: 'Keep your kitchen smoke-free and safe.'
    },
    {
        name: 'Air Dryer',
        path: '/services/dryer',
        img: chimney,
        desc: 'Keep your kitchen smoke-free and safe.'
    },
    {
        name: 'Air Compressor',
        path: '/services/compressor',
        img: chimney,
        desc: 'Keep your kitchen smoke-free and safe.'
    }
];

const OurServices = () => {
    return (
        <div className="mt-16 py-12 px-6 md:px-16 lg:px-24">
            <div className="text-center mb-10">
                <h1 className="text-4xl font-bold text-gray-900">Our Services</h1>
                <p className="mt-4 text-lg text-gray-600">Home & Kitchen Appliance Repair</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2, duration: 0.5 }}
                        viewport={{ once: true }}
                        className="rounded-xl overflow-hidden shadow-sm shadow-gray-900 bg-white">
                        <Link to={service.path}>
                            <img src={service.img} alt={service.name} className="w-full object-cover" />
                        </Link>
                        <div className="p-4 text-center">
                            <h3 className="font-bold mb-2 text-xl text-gray-900">{service.name}</h3>
                            <p className="text-gray-600 text-md font-medium mb-2">{service.desc}</p>
                            <Link
                                to={service.path}
                                className="text-orange-600 font-bold text-lg"
                            >
                                Read More
                            </Link>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default OurServices;
