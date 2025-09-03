"use client";
import React from 'react'
import FormPesan from './FormPesan'

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

function Jadwal() {
    return (
        <div className='w-full h-full p-5 md:px-15'>
            <div className="md:grid md:grid-cols-2 gap-5">
                <div className="w-full h-full bg-white border border-zinc-300 rounded-3xl md:p-10 p-7 flex-col flex gap-1.5">
                    <div className="flex justify-between w-full">
                        <div>
                            <div className='text-xl md:text-2xl'>Jadwal Hari Ini</div>
                            <div className="text-teal-600 text-md md:text-2xl md:mb-5 mb-2">Selasa, 2 September 2025</div>
                        </div>
                        <div className='bg-red-500 w-fit h-5 rounded-lg text-white flex justify-center items-center p-2 text-xs'>
                            • Live
                        </div>
                    </div>

                    <div className=''>
                        <Swiper className='flex flex-col justify-center items-center'
                            modules={[Autoplay]}
                            loop={true}
                            autoplay={{ delay: 3000 }}
                            centeredSlides={true}
                            slidesPerView={1}>
                            <SwiperSlide>
                                <div className='flex flex-col gap-1 justify-center items-center px-2'>
                                    <div>Lapangan 1</div>
                                    <div className='w-full h-8 md:h-10 bg-teal-600 rounded-lg flex gap-3 items-center text-white text-xs md:text-sm'>
                                        <div className="h-full w-30 bg-teal-700 rounded-l-lg flex justify-center items-center text-white text-xs md:text-sm font-semibold">
                                            07:00 - 08:00
                                        </div>
                                        Ramadhani Firdaus
                                    </div>
                                    <div className='w-full h-8 md:h-10 bg-teal-600 rounded-lg flex gap-3 items-center text-white text-xs md:text-sm'>
                                        <div className="h-full w-30 bg-teal-700 rounded-l-lg flex justify-center items-center text-white text-xs md:text-sm font-semibold">
                                            07:00 - 08:00
                                        </div>
                                        Ramadhani Firdaus
                                    </div>
                                    <div className='w-full h-7 md:h-10 bg-white border border-zinc-200 rounded-lg flex gap-3 items-center text-zinc-800 text-xs md:text-sm text-center'>
                                        <div className="h-full w-30 bg-zinc-200 rounded-l-lg flex justify-center items-center text-zinc-800 text-xs md:text-sm font-semibold">
                                            07:00 - 08:00
                                        </div>
                                        Ramadhani Firdaus
                                    </div>
                                    <div className='w-full h-8 md:h-10 bg-teal-600 rounded-lg flex gap-3 items-center text-white text-xs md:text-sm'>
                                        <div className="h-full w-30 bg-teal-700 rounded-l-lg flex justify-center items-center text-white text-xs md:text-sm font-semibold">
                                            07:00 - 08:00
                                        </div>
                                        Ramadhani Firdaus
                                    </div>
                                    <div className='w-full h-8 md:h-10 bg-teal-600 rounded-lg flex gap-3 items-center text-white text-xs md:text-sm'>
                                        <div className="h-full w-30 bg-teal-700 rounded-l-lg flex justify-center items-center text-white text-xs md:text-sm font-semibold">
                                            07:00 - 08:00
                                        </div>
                                        Ramadhani Firdaus
                                    </div>
                                    <div className='w-full h-7 md:h-10 bg-white border border-zinc-200 rounded-lg flex gap-3 items-center text-zinc-800 text-xs md:text-sm text-center'>
                                        <div className="h-full w-30 bg-zinc-200 rounded-l-lg flex justify-center items-center text-zinc-800 text-xs md:text-sm font-semibold">
                                            07:00 - 08:00
                                        </div>
                                        Ramadhani Firdaus
                                    </div>
                                    <div className='w-full h-8 md:h-10 bg-teal-600 rounded-lg flex gap-3 items-center text-white text-xs md:text-sm'>
                                        <div className="h-full w-30 bg-teal-700 rounded-l-lg flex justify-center items-center text-white text-xs md:text-sm font-semibold">
                                            07:00 - 08:00
                                        </div>
                                        Ramadhani Firdaus
                                    </div>
                                    <div className='w-full h-8 md:h-10 bg-teal-600 rounded-lg flex gap-3 items-center text-white text-xs md:text-sm'>
                                        <div className="h-full w-30 bg-teal-700 rounded-l-lg flex justify-center items-center text-white text-xs md:text-sm font-semibold">
                                            07:00 - 08:00
                                        </div>
                                        Ramadhani Firdaus
                                    </div>
                                    <div className='w-full h-7 md:h-10 bg-white border border-zinc-200 rounded-lg flex gap-3 items-center text-zinc-800 text-xs md:text-sm text-center'>
                                        <div className="h-full w-30 bg-zinc-200 rounded-l-lg flex justify-center items-center text-zinc-800 text-xs md:text-sm font-semibold">
                                            07:00 - 08:00
                                        </div>
                                        Ramadhani Firdaus
                                    </div>
                                    <div className='w-full h-8 md:h-10 bg-teal-600 rounded-lg flex gap-3 items-center text-white text-xs md:text-sm'>
                                        <div className="h-full w-30 bg-teal-700 rounded-l-lg flex justify-center items-center text-white text-xs md:text-sm font-semibold">
                                            07:00 - 08:00
                                        </div>
                                        Ramadhani Firdaus
                                    </div>
                                    <div className='w-full h-8 md:h-10 bg-teal-600 rounded-lg flex gap-3 items-center text-white text-xs md:text-sm'>
                                        <div className="h-full w-30 bg-teal-700 rounded-l-lg flex justify-center items-center text-white text-xs md:text-sm font-semibold">
                                            07:00 - 08:00
                                        </div>
                                        Ramadhani Firdaus
                                    </div>
                                    <div className='w-full h-7 md:h-10 bg-white border border-zinc-200 rounded-lg flex gap-3 items-center text-zinc-800 text-xs md:text-sm text-center'>
                                        <div className="h-full w-30 bg-zinc-200 rounded-l-lg flex justify-center items-center text-zinc-800 text-xs md:text-sm font-semibold">
                                            07:00 - 08:00
                                        </div>
                                        Ramadhani Firdaus
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className='flex flex-col gap-1 justify-center items-center px-2'>
                                    <div>Lapangan 2</div>
                                    <div className='w-full h-8 md:h-10 bg-teal-600 rounded-lg flex gap-3 items-center text-white text-xs md:text-sm'>
                                        <div className="h-full w-30 bg-teal-700 rounded-l-lg flex justify-center items-center text-white text-xs md:text-sm font-semibold">
                                            07:00 - 08:00
                                        </div>
                                        Ramadhani Firdaus
                                    </div>
                                    <div className='w-full h-8 md:h-10 bg-teal-600 rounded-lg flex gap-3 items-center text-white text-xs md:text-sm'>
                                        <div className="h-full w-30 bg-teal-700 rounded-l-lg flex justify-center items-center text-white text-xs md:text-sm font-semibold">
                                            07:00 - 08:00
                                        </div>
                                        Ramadhani Firdaus
                                    </div>
                                    <div className='w-full h-7 md:h-10 bg-white border border-zinc-200 rounded-lg flex gap-3 items-center text-zinc-800 text-xs md:text-sm text-center'>
                                        <div className="h-full w-30 bg-zinc-200 rounded-l-lg flex justify-center items-center text-zinc-800 text-xs md:text-sm font-semibold">
                                            07:00 - 08:00
                                        </div>
                                        Ramadhani Firdaus
                                    </div>
                                    <div className='w-full h-8 md:h-10 bg-teal-600 rounded-lg flex gap-3 items-center text-white text-xs md:text-sm'>
                                        <div className="h-full w-30 bg-teal-700 rounded-l-lg flex justify-center items-center text-white text-xs md:text-sm font-semibold">
                                            07:00 - 08:00
                                        </div>
                                        Ramadhani Firdaus
                                    </div>
                                    <div className='w-full h-8 md:h-10 bg-teal-600 rounded-lg flex gap-3 items-center text-white text-xs md:text-sm'>
                                        <div className="h-full w-30 bg-teal-700 rounded-l-lg flex justify-center items-center text-white text-xs md:text-sm font-semibold">
                                            07:00 - 08:00
                                        </div>
                                        Ramadhani Firdaus
                                    </div>
                                    <div className='w-full h-7 md:h-10 bg-white border border-zinc-200 rounded-lg flex gap-3 items-center text-zinc-800 text-xs md:text-sm text-center'>
                                        <div className="h-full w-30 bg-zinc-200 rounded-l-lg flex justify-center items-center text-zinc-800 text-xs md:text-sm font-semibold">
                                            07:00 - 08:00
                                        </div>
                                        Ramadhani Firdaus
                                    </div>
                                    <div className='w-full h-8 md:h-10 bg-teal-600 rounded-lg flex gap-3 items-center text-white text-xs md:text-sm'>
                                        <div className="h-full w-30 bg-teal-700 rounded-l-lg flex justify-center items-center text-white text-xs md:text-sm font-semibold">
                                            07:00 - 08:00
                                        </div>
                                        Ramadhani Firdaus
                                    </div>
                                    <div className='w-full h-8 md:h-10 bg-teal-600 rounded-lg flex gap-3 items-center text-white text-xs md:text-sm'>
                                        <div className="h-full w-30 bg-teal-700 rounded-l-lg flex justify-center items-center text-white text-xs md:text-sm font-semibold">
                                            07:00 - 08:00
                                        </div>
                                        Ramadhani Firdaus
                                    </div>
                                    <div className='w-full h-7 md:h-10 bg-white border border-zinc-200 rounded-lg flex gap-3 items-center text-zinc-800 text-xs md:text-sm text-center'>
                                        <div className="h-full w-30 bg-zinc-200 rounded-l-lg flex justify-center items-center text-zinc-800 text-xs md:text-sm font-semibold">
                                            07:00 - 08:00
                                        </div>
                                        Ramadhani Firdaus
                                    </div>
                                    <div className='w-full h-8 md:h-10 bg-teal-600 rounded-lg flex gap-3 items-center text-white text-xs md:text-sm'>
                                        <div className="h-full w-30 bg-teal-700 rounded-l-lg flex justify-center items-center text-white text-xs md:text-sm font-semibold">
                                            07:00 - 08:00
                                        </div>
                                        Ramadhani Firdaus
                                    </div>
                                    <div className='w-full h-8 md:h-10 bg-teal-600 rounded-lg flex gap-3 items-center text-white text-xs md:text-sm'>
                                        <div className="h-full w-30 bg-teal-700 rounded-l-lg flex justify-center items-center text-white text-xs md:text-sm font-semibold">
                                            07:00 - 08:00
                                        </div>
                                        Ramadhani Firdaus
                                    </div>
                                    <div className='w-full h-7 md:h-10 bg-white border border-zinc-200 rounded-lg flex gap-3 items-center text-zinc-800 text-xs md:text-sm text-center'>
                                        <div className="h-full w-30 bg-zinc-200 rounded-l-lg flex justify-center items-center text-zinc-800 text-xs md:text-sm font-semibold">
                                            07:00 - 08:00
                                        </div>
                                        Ramadhani Firdaus
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className='flex flex-col gap-1 justify-center items-center px-2'>
                                    <div>Lapangan 3</div>
                                    <div className='w-full h-8 md:h-10 bg-teal-600 rounded-lg flex gap-3 items-center text-white text-xs md:text-sm'>
                                        <div className="h-full w-30 bg-teal-700 rounded-l-lg flex justify-center items-center text-white text-xs md:text-sm font-semibold">
                                            07:00 - 08:00
                                        </div>
                                        Ramadhani Firdaus
                                    </div>
                                    <div className='w-full h-8 md:h-10 bg-teal-600 rounded-lg flex gap-3 items-center text-white text-xs md:text-sm'>
                                        <div className="h-full w-30 bg-teal-700 rounded-l-lg flex justify-center items-center text-white text-xs md:text-sm font-semibold">
                                            07:00 - 08:00
                                        </div>
                                        Ramadhani Firdaus
                                    </div>
                                    <div className='w-full h-7 md:h-10 bg-white border border-zinc-200 rounded-lg flex gap-3 items-center text-zinc-800 text-xs md:text-sm text-center'>
                                        <div className="h-full w-30 bg-zinc-200 rounded-l-lg flex justify-center items-center text-zinc-800 text-xs md:text-sm font-semibold">
                                            07:00 - 08:00
                                        </div>
                                        Ramadhani Firdaus
                                    </div>
                                    <div className='w-full h-8 md:h-10 bg-teal-600 rounded-lg flex gap-3 items-center text-white text-xs md:text-sm'>
                                        <div className="h-full w-30 bg-teal-700 rounded-l-lg flex justify-center items-center text-white text-xs md:text-sm font-semibold">
                                            07:00 - 08:00
                                        </div>
                                        Ramadhani Firdaus
                                    </div>
                                    <div className='w-full h-8 md:h-10 bg-teal-600 rounded-lg flex gap-3 items-center text-white text-xs md:text-sm'>
                                        <div className="h-full w-30 bg-teal-700 rounded-l-lg flex justify-center items-center text-white text-xs md:text-sm font-semibold">
                                            07:00 - 08:00
                                        </div>
                                        Ramadhani Firdaus
                                    </div>
                                    <div className='w-full h-7 md:h-10 bg-white border border-zinc-200 rounded-lg flex gap-3 items-center text-zinc-800 text-xs md:text-sm text-center'>
                                        <div className="h-full w-30 bg-zinc-200 rounded-l-lg flex justify-center items-center text-zinc-800 text-xs md:text-sm font-semibold">
                                            07:00 - 08:00
                                        </div>
                                        Ramadhani Firdaus
                                    </div>
                                    <div className='w-full h-8 md:h-10 bg-teal-600 rounded-lg flex gap-3 items-center text-white text-xs md:text-sm'>
                                        <div className="h-full w-30 bg-teal-700 rounded-l-lg flex justify-center items-center text-white text-xs md:text-sm font-semibold">
                                            07:00 - 08:00
                                        </div>
                                        Ramadhani Firdaus
                                    </div>
                                    <div className='w-full h-8 md:h-10 bg-teal-600 rounded-lg flex gap-3 items-center text-white text-xs md:text-sm'>
                                        <div className="h-full w-30 bg-teal-700 rounded-l-lg flex justify-center items-center text-white text-xs md:text-sm font-semibold">
                                            07:00 - 08:00
                                        </div>
                                        Ramadhani Firdaus
                                    </div>
                                    <div className='w-full h-7 md:h-10 bg-white border border-zinc-200 rounded-lg flex gap-3 items-center text-zinc-800 text-xs md:text-sm text-center'>
                                        <div className="h-full w-30 bg-zinc-200 rounded-l-lg flex justify-center items-center text-zinc-800 text-xs md:text-sm font-semibold">
                                            07:00 - 08:00
                                        </div>
                                        Ramadhani Firdaus
                                    </div>
                                    <div className='w-full h-8 md:h-10 bg-teal-600 rounded-lg flex gap-3 items-center text-white text-xs md:text-sm'>
                                        <div className="h-full w-30 bg-teal-700 rounded-l-lg flex justify-center items-center text-white text-xs md:text-sm font-semibold">
                                            07:00 - 08:00
                                        </div>
                                        Ramadhani Firdaus
                                    </div>
                                    <div className='w-full h-8 md:h-10 bg-teal-600 rounded-lg flex gap-3 items-center text-white text-xs md:text-sm'>
                                        <div className="h-full w-30 bg-teal-700 rounded-l-lg flex justify-center items-center text-white text-xs md:text-sm font-semibold">
                                            07:00 - 08:00
                                        </div>
                                        Ramadhani Firdaus
                                    </div>
                                    <div className='w-full h-7 md:h-10 bg-white border border-zinc-200 rounded-lg flex gap-3 items-center text-zinc-800 text-xs md:text-sm text-center'>
                                        <div className="h-full w-30 bg-zinc-200 rounded-l-lg flex justify-center items-center text-zinc-800 text-xs md:text-sm font-semibold">
                                            07:00 - 08:00
                                        </div>
                                        Ramadhani Firdaus
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>

                    </div>



                    <div className='flex px-5 py-2 gap-5'>
                        <div className='flex items-center gap-2'>
                            <div className='w-2 h-2 rounded-full bg-teal-600'></div>
                            <div className='text-xs'>Terpesan</div>
                        </div>
                        <div className='flex items-center gap-2'>
                            <div className='w-2 h-2 rounded-full bg-zinc-300'></div>
                            <div className='text-xs'>Tersedia</div>
                        </div>
                    </div>
                </div>

                <FormPesan />
            </div>
        </div>
    )
}

export default Jadwal