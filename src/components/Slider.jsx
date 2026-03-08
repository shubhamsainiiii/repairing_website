/* eslint-disable no-unused-vars */
import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import slider1 from '../assets/optimized/slider1.webp';
import slider2 from '../assets/optimized/slider2.webp';
import slider3 from '../assets/optimized/slider3.webp';
import sliderMobile1 from '../assets/optimized/sliderMobile1.webp';
import sliderMobile2 from '../assets/optimized/sliderMobile2.webp';
import sliderMobile3 from '../assets/optimized/sliderMobile13.webp';

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
