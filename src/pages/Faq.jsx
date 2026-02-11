import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion } from 'framer-motion';
import slider3 from '../assets/FAQ.jpg';

const faqs = [
    {
        question: 'What types of appliances do you repair?',
        answer:
            'We repair a wide range of appliances, including refrigerators, ovens, dishwashers, washing machines, dryers, and more.',
    },
    {
        question: 'How do I request a repair service?',
        answer:
            'You can request a repair service by contacting us via phone, email, or filling out our enquiry form.',
    },
    {
        question: 'What is your response time for repair requests?',
        answer:
            'Our typical response time is within 24 hours. Emergency services may be available sooner.',
    },
    {
        question: 'Are your technicians certified and experienced?',
        answer:
            'Yes, all our technicians are certified professionals with years of experience in appliance repair.',
    },
    {
        question: 'Do you offer same-day or emergency repair services?',
        answer:
            'Yes, we offer same-day and emergency repair services depending on availability and location.',
    },
    {
        question: 'What is your pricing structure for appliance repairs?',
        answer:
            'Our pricing is competitive and depends on the type of appliance and issue. Contact us for a quote.',
    },
    {
        question: 'How can I prevent future appliance issues?',
        answer:
            'Regular maintenance and proper usage of appliances can help prevent future issues. We also offer maintenance plans.',
    },
];

const Faq = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="text-gray-800 mt-12 py-12 px-6 max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900">
                FAQs for an Appliance Repairing Service
            </h2>
            <div className="flex flex-col items-center gap-8">
                {/* Top Side: Image */}
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="w-full flex justify-center"
                >
                    <img
                        src={slider3}
                        alt="FAQ Support"
                        className="w-full max-w-2xl h-auto object-contain"
                    />
                </motion.div>

                {/* Bottom Side: FAQs */}
                <div className="w-full max-w-4xl space-y-8">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-gray-800 shadow-md shadow-gray-500 rounded-xl overflow-hidden transition-transform duration-400 hover:scale-[1.01] font-medium"
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full flex justify-between items-center px-6 py-4 font-semibold text-gray-900 cursor-pointer bg-white hover:bg-gray-200 transition"
                            >
                                <span>Q {index + 1} : {faq.question}</span>
                                {openIndex === index ? (
                                    <ChevronUp className="w-5 h-5 text-gray-900" />
                                ) : (
                                    <ChevronDown className="w-5 h-5 text-gray-900" />
                                )}
                            </button>
                            <div
                                className={`px-6 text-gray-100 text-justify overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-[500px] py-4' : 'max-h-0'
                                    }`}
                            >
                                {faq.answer}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Faq;
