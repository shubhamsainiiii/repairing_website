/* eslint-disable no-unused-vars */
import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import slider1 from '../assets/slider1.jpg';
import slider2 from '../assets/slider2.jpg';
import slider3 from '../assets/slider3.jpg';
import sliderMobile1 from '../assets/sliderMobile1.jpg';
import sliderMobile2 from '../assets/sliderMobile2.jpg';
import sliderMobile3 from '../assets/sliderMobile13.jpg';

const Slider = ({ children, slides, slideRenderer, className, swiperClassName, ...swiperProps }) => {
    const defaultSlides = [
        { desktop: slider1, mobile: sliderMobile1 },
        { desktop: slider2, mobile: sliderMobile2 },
        { desktop: slider3, mobile: sliderMobile3 }
    ];
    const items = slides || defaultSlides;

    return (
        <div className={className || "relative w-full mt-16 h-svh md:h-screen overflow-hidden"}>
            <Swiper
                modules={[Navigation, Pagination, Autoplay, EffectFade]}
                slidesPerView={1}
                loop={true}
                effect="fade"
                speed={1200}
                pagination={!slides ? { clickable: true } : false}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                className={swiperClassName || "h-full w-full"}
                {...swiperProps}
            >
                {items.map((item, index) => (
                    <SwiperSlide key={index}>
                        {slideRenderer ? (
                            slideRenderer(item)
                        ) : (
                            <div className="relative w-full h-full">
                                {typeof item === 'object' && item.desktop && item.mobile ? (
                                    <>
                                        {/* Desktop Image */}
                                        <motion.img
                                            src={item.desktop}
                                            alt={`desktop-slide-${index}`}
                                            className="hidden md:block w-full h-full object-cover"
                                            initial={{ scale: 1.1 }}
                                            animate={{ scale: 1 }}
                                            transition={{ duration: 2.5, ease: "easeOut" }}
                                        />

                                        {/* Mobile Image */}
                                        <motion.img
                                            src={item.mobile}
                                            alt={`mobile-slide-${index}`}
                                            className="block md:hidden w-full h-full object-cover"
                                            initial={{ scale: 1.1 }}
                                            animate={{ scale: 1 }}
                                            transition={{ duration: 2.5, ease: "easeOut" }}
                                        />
                                    </>
                                ) : (
                                    <motion.img
                                        src={item}
                                        alt={`Slide ${index + 1}`}
                                        className="w-full h-full object-cover"
                                        initial={{ scale: 1.1 }}
                                        animate={{ scale: 1 }}
                                        transition={{ duration: 2.5, ease: "easeOut" }}
                                    />
                                )}
                                {/* Overlay */}
                                <div className="absolute inset-0 bg-black/10" />
                            </div>
                        )}
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
