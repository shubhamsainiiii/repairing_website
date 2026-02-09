// import React from 'react';

// const Contact = () => {
//     return (
//         <section className="mt-16 py-12 px-6 md:px-16 lg:px-24">
//             <div className="text-center">
//                 <h1 className="text-4xl font-bold text-gray-900">Contact-Us</h1>
//                 <p className="mt-4 text-lg text-gray-900">
//                     Your Trusted Partner for Home Appliance Repairs & Services.
//                 </p>
//             </div>


//             <div className="flex flex-col lg:flex-row gap-12 px-6 md:px-16 py-12">
//                 <div className="w-full lg:w-1/2 ">
//                     <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28444.827515924062!2d75.74222034750215!3d26.979454748295083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db25790b9e7a7%3A0xb74ecc952741bc1e!2sMurlipura%2C%20Jaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1759130630710!5m2!1sen!2sin" width="100%"
//                         height="450"
//                         allowFullScreen=""
//                         loading="lazy"
//                         className="rounded-xl shadow-sm shadow-gray-900" ></iframe>
//                 </div>

//                 <div className="w-full lg:w-1/2 bg-gray-100 p-8 rounded-xl shadow-sm shadow-gray-900">
//                     <h2 className="text-2xl text-gray-900 font-bold mb-6 text-center">Get in Touch With us</h2>
//                     <form className="space-y-6">
//                         <div className="flex flex-col md:flex-row gap-4">
//                             <input
//                                 type="text"
//                                 placeholder="Your Name"
//                                 className="w-full px-4 py-2 rounded-md shadow-sm shadow-gray-900 focus:outline-none"
//                             />
//                             <input
//                                 type="email"
//                                 placeholder="Email Address"
//                                 className="w-full px-4 py-2 rounded-md shadow-sm shadow-gray-600 focus:outline-none"
//                             />
//                         </div>
//                         <div className="flex flex-col md:flex-row gap-4">
//                             <input
//                                 type="tel"
//                                 placeholder="Phone Number"
//                                 className="w-full px-4 py-2 rounded-md shadow-sm shadow-gray-600 focus:outline-none"
//                             />
//                             <select className="w-full px-4 py-2 rounded-md shadow-sm shadow-gray-600 focus:outline-none">
//                                 <option>Select Your Service</option>
//                                 <option>AC Repair</option>
//                                 <option>Washing Machine Repair</option>
//                                 <option>Microwave Oven Repair</option>
//                                 <option>Geyser Repair</option>
//                                 <option>LED TV Repair</option>
//                                 <option>Washing Machine Repair</option>
//                                 <option>Water Cooler Repair</option>
//                                 <option>Water Dispenser Repair</option>
//                                 <option>CCTV Camera Repair</option>
//                                 <option>RO Water Purifier</option>
//                                 <option>Chimney Repair</option>
//                                 <option>Air Dryer</option>
//                                 <option>Air Compressor</option>
//                             </select>
//                         </div>
//                         <textarea
//                             placeholder="Your Message"
//                             rows="4"
//                             className="w-full px-4 py-2 rounded-md shadow-sm shadow-gray-600 focus:outline-none"
//                         ></textarea>
//                         <div className="flex justify-center">
//                             <button
//                                 type="submit"
//                                 className="bg-blue-800 hover:bg-blue-900 text-white font-semibold px-6 py-2 rounded-md shadow-sm shadow-black transition-all duration-500 cursor-pointer"
//                             >
//                                 SUBMIT NOW
//                             </button>
//                         </div>

//                     </form>
//                 </div>
//             </div>

//             <div className="px-6 md:px-16 mt-10 mb-10 text-center">
//                 <h3 className="text-2xl font-bold mb-2">Our Location</h3>
//                 <p className="font-semibold">Universal Repair Point</p>
//                 <p className="text-gray-900">
//                     Address : Murlipura, Jaipur, Rajasthan 303328
//                 </p>
//                 <p className="font-medium">
//                     Phone No :
//                     <a
//                         href="tel:+918058129195"
//                         className="text-gray-900 font-semibold"
//                     >  +91-8058129195
//                     </a>
//                 </p>
//             </div>
//         </section>
//     );
// };

// export default Contact;


// import React, { useRef } from "react";
// import emailjs from "@emailjs/browser";

// const Contact = () => {
//     const form = useRef();

//     const sendEmail = (e) => {
//         e.preventDefault();

//         emailjs
//             .sendForm(
//                 "service_h0ju4zl",   // Replace with your service ID
//                 "template_7gdouo8",  // Replace with your template ID
//                 form.current,
//                 "DOkhGqLpI6C3HUieG"    // Replace with your public key
//             )
//             .then(
//                 (result) => {
//                     console.log(result.text);
//                     alert("Message sent successfully ✅");
//                     e.target.reset();
//                 },
//                 (error) => {
//                     console.log(error.text);
//                     alert("Something went wrong ❌ Please try again.");
//                 }
//             );
//     };

//     return (
//         <section className="mt-16 py-12 px-6 md:px-16 lg:px-24">
//             <div className="text-center">
//                 <h1 className="text-4xl font-bold text-gray-900">Contact-Us</h1>
//                 <p className="mt-4 text-lg text-gray-900">
//                     Your Trusted Partner for Home Appliance Repairs & Services.
//                 </p>
//             </div>

//             <div className="flex flex-col lg:flex-row gap-12 px-6 md:px-16 py-12">
//                 <div className="w-full lg:w-1/2">
//                     <iframe
//                         src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28444.827515924062!2d75.74222034750215!3d26.979454748295083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db25790b9e7a7%3A0xb74ecc952741bc1e!2sMurlipura%2C%20Jaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1759130630710!5m2!1sen!2sin"
//                         width="100%"
//                         height="450"
//                         allowFullScreen=""
//                         loading="lazy"
//                         className="rounded-xl shadow-sm shadow-gray-900"
//                     ></iframe>
//                 </div>

//                 <div className="w-full lg:w-1/2 bg-gray-100 p-8 rounded-xl shadow-sm shadow-gray-900">
//                     <h2 className="text-2xl text-gray-900 font-bold mb-6 text-center">
//                         Get in Touch With us
//                     </h2>

//                     <form ref={form} onSubmit={sendEmail} className="space-y-6">
//                         <div className="flex flex-col md:flex-row gap-4">
//                             <input
//                                 type="text"
//                                 name="name"
//                                 placeholder="Your Name"
//                                 required
//                                 className="w-full px-4 py-2 rounded-md shadow-sm shadow-gray-900 focus:outline-none"
//                             />
//                             <input
//                                 type="email"
//                                 name="email"
//                                 placeholder="Email Address"
//                                 required
//                                 className="w-full px-4 py-2 rounded-md shadow-sm shadow-gray-600 focus:outline-none"
//                             />
//                         </div>

//                         <div className="flex flex-col md:flex-row gap-4">
//                             <input
//                                 type="tel"
//                                 name="phone"
//                                 placeholder="Phone Number"
//                                 required
//                                 className="w-full px-4 py-2 rounded-md shadow-sm shadow-gray-600 focus:outline-none"
//                             />
//                             <select
//                                 name="service"
//                                 className="w-full px-4 py-2 rounded-md shadow-sm shadow-gray-600 focus:outline-none"
//                             >
//                                 <option>Select Your Service</option>
//                                 <option>AC Repair</option>
//                                 <option>Washing Machine Repair</option>
//                                 <option>Microwave Oven Repair</option>
//                                 <option>Geyser Repair</option>
//                                 <option>LED TV Repair</option>
//                                 <option>Water Cooler Repair</option>
//                                 <option>Water Dispenser Repair</option>
//                                 <option>CCTV Camera Repair</option>
//                                 <option>RO Water Purifier</option>
//                                 <option>Chimney Repair</option>
//                                 <option>Air Dryer</option>
//                                 <option>Air Compressor</option>
//                             </select>
//                         </div>

//                         <textarea
//                             name="message"
//                             placeholder="Your Message"
//                             rows="4"
//                             required
//                             className="w-full px-4 py-2 rounded-md shadow-sm shadow-gray-600 focus:outline-none"
//                         ></textarea>

//                         <div className="flex justify-center">
//                             <button
//                                 type="submit"
//                                 className="bg-blue-800 hover:bg-blue-900 text-white font-semibold px-6 py-2 rounded-md shadow-sm shadow-black transition-all duration-500 cursor-pointer"
//                             >
//                                 SUBMIT NOW
//                             </button>
//                         </div>
//                     </form>
//                 </div>
//             </div>

//             <div className="px-6 md:px-16 mt-10 mb-10 text-center">
//                 <h3 className="text-2xl font-bold mb-2">Our Location</h3>
//                 <p className="font-semibold">Universal Repair Point</p>
//                 <p className="text-gray-900">
//                     Address : Murlipura, Jaipur, Rajasthan 303328
//                 </p>
//                 <p className="font-medium">
//                     Phone No :
//                     <a href="tel:+918058129195" className="text-gray-900 font-semibold">
//                         +91-8058129195
//                     </a>
//                 </p>
//             </div>
//         </section>
//     );
// };

// export default Contact;


import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_h0ju4zl",   // Your EmailJS service ID
                "template_7gdouo8",  // Your EmailJS template ID
                form.current,
                "DOkhGqLpI6C3HUieG"  // Your EmailJS public key
            )
            .then(
                (result) => {
                    console.log(result.text);
                    Swal.fire({
                        icon: "success",
                        title: "Message Sent!",
                        text: "Your message has been sent successfully.",
                        showConfirmButton: false,
                        timer: 2000,
                    });
                    e.target.reset();
                },
                (error) => {
                    console.log(error.text);
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Something went wrong! Please try again later.",
                        confirmButtonColor: "#1e3a8a",
                    });
                }
            );
    };

    return (
        <section className="mt-16 py-12 px-6 md:px-16 lg:px-24">
            <div className="text-center">
                <h1 className="text-4xl font-bold text-gray-900">Contact Us</h1>
                <p className="mt-4 text-lg text-gray-900">
                    Your Trusted Partner for Home Appliance Repairs & Services.
                </p>
            </div>

            <div className="flex flex-col lg:flex-row gap-12 px-6 md:px-16 py-12">
                {/* Google Map */}
                <div className="w-full lg:w-1/2">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28444.827515924062!2d75.74222034750215!3d26.979454748295083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db25790b9e7a7%3A0xb74ecc952741bc1e!2sMurlipura%2C%20Jaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1759130630710!5m2!1sen!2sin"
                        width="100%"
                        height="450"
                        allowFullScreen=""
                        loading="lazy"
                        className="rounded-xl shadow-sm shadow-gray-900"
                    ></iframe>
                </div>

                {/* Contact Form */}
                <div className="w-full lg:w-1/2 bg-gray-100 p-8 rounded-xl shadow-sm shadow-gray-900">
                    <h2 className="text-2xl text-gray-900 font-bold mb-6 text-center">
                        Get in Touch With Us
                    </h2>

                    <form ref={form} onSubmit={sendEmail} className="space-y-6">
                        <div className="flex flex-col md:flex-row gap-4">
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                required
                                className="w-full px-4 py-2 rounded-md shadow-sm shadow-gray-900 focus:outline-none"
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Email Address"
                                required
                                className="w-full px-4 py-2 rounded-md shadow-sm shadow-gray-600 focus:outline-none"
                            />
                        </div>

                        <div className="flex flex-col md:flex-row gap-4">
                            <input
                                type="tel"
                                name="phone"
                                placeholder="Phone Number"
                                required
                                className="w-full px-4 py-2 rounded-md shadow-sm shadow-gray-600 focus:outline-none"
                            />
                            <select
                                name="service"
                                className="w-full px-4 py-2 rounded-md shadow-sm shadow-gray-600 focus:outline-none"
                                required
                            >
                                <option value="">Select Your Service</option>
                                <option>AC Repair</option>
                                <option>Washing Machine Repair</option>
                                <option>Microwave Oven Repair</option>
                                <option>Geyser Repair</option>
                                <option>LED TV Repair</option>
                                <option>Water Cooler Repair</option>
                                <option>Water Dispenser Repair</option>
                                <option>CCTV Camera Repair</option>
                                <option>RO Water Purifier</option>
                                <option>Chimney Repair</option>
                                <option>Air Dryer</option>
                                <option>Air Compressor</option>
                            </select>
                        </div>

                        <textarea
                            name="message"
                            placeholder="Your Message"
                            rows="4"
                            required
                            className="w-full px-4 py-2 rounded-md shadow-sm shadow-gray-600 focus:outline-none"
                        ></textarea>

                        <div className="flex justify-center">
                            <button
                                type="submit"
                                className="bg-blue-800 hover:bg-blue-900 text-white font-semibold px-6 py-2 rounded-md shadow-sm shadow-black transition-all duration-500 cursor-pointer"
                            >
                                SUBMIT NOW
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            {/* Contact Info */}
            <div className="px-6 md:px-16 mt-10 mb-10 text-center">
                <h3 className="text-2xl font-bold mb-2">Our Location</h3>
                <p className="font-semibold">Universal Repair Point</p>
                <p className="text-gray-900">
                    Address: Murlipura, Jaipur, Rajasthan 303328
                </p>
                <p className="font-medium">
                    Phone No:{" "}
                    <a
                        href="tel:+918058129195"
                        className="text-gray-900 font-semibold"
                    >
                        +91-8058129195
                    </a>
                </p>
            </div>
        </section>
    );
};

export default Contact;
