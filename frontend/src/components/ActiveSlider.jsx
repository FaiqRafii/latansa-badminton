"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export default function Carousel() {
    return (
        <div className="w-full max-w-4xl md:max-w-full mx-auto px-5 md:px-15 lg:px-15 lg:py-5">
                        <Swiper
                modules={[Autoplay]}
                loop={true}
                autoplay={{ delay: 2500 }}
                centeredSlides={true}
                slidesPerView={1}
                className="w-full h-60 lg:h-120 rounded-3xl"
            >
                <SwiperSlide>
                    <div className="flex justify-center items-center h-full bg-red-500  rounded-2xl overflow-hidden">

                        <div className="absolute rounded-2xl overflow-hidden flex justify-center items-center">
                            <img src="../public/assets/img/lap1.jpg" alt="" srcset="" className="rounded-2xl overflow-hidden w-full h-full object-cover" />
                        </div>
                        <div className="relative bg-gradient-to-t from-black via-transparent to-transparent h-full w-full">
                            <div className="absolute w-full bottom-4 text-white flex justify-center items-center">
                                Pencahayaan Terang
                            </div>
                        </div>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex justify-center items-center h-full rounded-3xl">
                        <div className="absolute  rounded-2xl overflow-hidden flex justify-center items-center">
                            <img src="../public/assets/img/lap1.jpg" alt="" srcset="" className="rounded-2xl overflow-hidden w-full h-full object-cover" />
                        </div>
                        <div className="relative bg-gradient-to-t from-black via-transparent to-transparent h-full w-full">
                            <div className="absolute w-full bottom-4 text-white flex justify-center items-center">
                                Are Istirahat Nyaman
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex justify-center items-center h-full rounded-3xl">
                        <div className="absolute rounded-2xl overflow-hidden flex justify-center items-center">
                            <img src="../public/assets/img/lap1.jpg" alt="" srcset="" className="rounded-2xl overflow-hidden w-full h-full object-cover" />
                        </div>
                        <div className="relative bg-gradient-to-t from-black via-transparent to-transparent h-full w-full">
                            <div className="absolute w-full bottom-4 text-white flex justify-center items-center">
                                Parkir Luas
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div >
    );
}
