import React from 'react'
import { LuArrowUpRight } from "react-icons/lu";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineMyLocation } from "react-icons/md";
import { IoMdCash } from "react-icons/io";

function Hero() {
    return (
        <div className='w-full h-full p-5 sm:px-20'>
            <div className='sm:grid sm:grid-cols-2 items-center'>
                <div>
                    <div className='font-bold text-4xl text-center sm:text-left sm:text-5xl lg:text-6xl mx-2 leading-tight'>
                        Lapangan Badminton Latansa
                    </div>
                    <div className='desc text-zinc-600 text-base lg:text-lg mt-3 text-center sm:text-left'>
                        Juaranya lapangan badminton se-Ponorogo
                    </div>

                    <div className='mx-auto sm:mx-0 group relative flex items-center justify-center mt-5 w-fit h-8 border rounded-xl text-sm hover:cursor-pointer transition-all ease-in overflow-hidden'>
                        <div className='absolute right-0 top-0 bg-black h-full w-0 transition-all ease-in duration-200 group-hover:w-full'></div>
                        <div className='relative px-4 group-hover:text-white transition-all ease-in duration-300'>

                            Pesan Sekarang
                        </div>
                        <div className='relative w-fit h-8 rounded-lg flex justify-center bg-black items-center px-2 py-1 '>
                            <LuArrowUpRight color='white' />
                        </div>
                    </div>

                    <div className='mt-7 w-full h-fit lg:pr-20'>
                        <div className='text-sm text-center sm:text-left text-zinc-600'>Pembayaran Yang Didukung</div>
                        <div className='mt-5 sm:mt-3 flex flex-wrap justify-center sm:justify-start items-center gap-5'>
                            <img src="../../public/assets/logo/gopay.png" className='w-15 md:w-20 h-fit' alt="" />
                            <img src="../../public/assets/logo/qris.png" className='w-15 md:w-20 h-fit' alt="" />
                            <img src="../../public/assets/logo/shopeepay.png" className='w-10 md:w-15 h-fit' alt="" />
                            <img src="../../public/assets/logo/dana.png" className='w-15 md:w-20 h-fit' alt="" />
                            <img src="../../public/assets/logo/bni.png" className='w-15 md:w-20 h-fit' alt="" />
                            <img src="../../public/assets/logo/briva.png" className='w-15 md:w-20 h-fit' alt="" />
                            <img src="../../public/assets/logo/mandiri.png" className='w-15 md:w-20 h-fit' alt="" />
                            <img src="../../public/assets/logo/cimbNiaga.png" className='w-5 md:w-10 h-fit' alt="" />
                            <img src="../../public/assets/logo/mastercard.png" className='w-5 md:w-10 h-fit' alt="" />
                            <div className='flex items-center gap-1'>
                                <IoMdCash size={20} />
                                <div>Cash</div>
                            </div>
                            <div className='p-1 md:p-2 rounded-full bg-zinc-200 text-xs'>
                                10+
                            </div>
                        </div>
                    </div>

                </div>


                <div>
                    <div className='mt-10 sm:mt-0 relative w-full h-95 md:h-120 overflow-hidden rounded-3xl'>
                        <img src="../../public/assets/img/lap1.jpg" alt="" srcset="" className='absolute rounded-3xl w-full h-full object-cover' />

                        <div className='relative h-full bg-gradient-to-t from-black via-transparent to-transparent'>
                            <div className=' text-lg text-center sm:text-left md:text-lg lg:text-2xl px-8 py-7 text-white leading-normal absolute bottom-0'>
                                Lapangan Termurah Terbaik Yang Bisa Anda Temukan
                                <div className=' flex gap-2 items-center text-lg font-semibold mt-3 justify-center md:justify-start'><del className='text-zinc-400 text-sm font-normal'>Rp50.000 </del> Rp30.000<span className='font-normal text-sm ga'>/ Jam</span></div>
                            </div>
                        </div>
                    </div>

                    <div className='bg-black w-full mt-3 sm:mt-3 h-10 md:h-15 flex justify-between items-center rounded-3xl lg:rounded-4xl text-white p-5'>
                        <div className='flex items-center text-xs md:text-xs lg:text-base gap-1 md:gap-3 lg:gap-4'>
                            <FaLocationDot />
                            Jl. Bawean No.1, Ponorogo
                        </div>

                        <a href='https://maps.app.goo.gl/p4E4bYh3qC3gca2H9' target='_blank' className='border border-white  w-fit h-fit px-3 py-1 rounded-2xl text-white transition-all ease-in hover:cursor-pointer hover:bg-white hover:border-black hover:text-black'>
                            <div className='flex items-center gap-2'>
                                <MdOutlineMyLocation />
                                <div className='text-xs lg:text-base'>Google Maps</div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero