import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import slider1 from '../assets/slider1.jpg';
import slider2 from '../assets/slider2.png';
import slider3 from '../assets/slider3.png';

const Slider = ({ children }) => {
    return (
        <div className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 2000 }}
                loop={true}
                className="h-full w-full"
            >
                {[
                    slider1, slider2, slider3
                ].map((img, index) => (
                    <SwiperSlide key={index}>
                        <img
                            src={img}
                            alt={`Slide ${index + 1}`}
                            className="w-full h-full object-cover"
                            loading="lazy"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
            {children && (
                <div className="absolute inset-0 z-10 pointer-events-none">
                    {children}
                </div>
            )}
        </div>
    );
};

export default Slider;
