import React from 'react'

function FormPesan() {
    return (
        <div className='w-full h-fit bg-zinc-50 rounded-xl p-10'>
            <div className='text-2xl'>Pesan Lapangan</div>
            <div className='hidden'>
                <div className='mt-10 w-full h-full flex flex-col justify-center items-center'>
                    <div className="">Anda Belum Login</div>
                    <div className='text-zinc-500 text-sm'><a href="#" className='hover:text-teal-400 text-teal-500'>Login</a> Disini</div>
                </div>
            </div>

            <div className=''>
                <div className='mt-5 grid grid-cols-3 gap-1 w-full h-fit justify-center items-center'>
                    {/* <div className='inline-flex justify-center items-center h-fit w-full rounded-md md:rounded-xl bg-teal-500 text-xs md:text-base whitespace-nowrap text-white px-3 py-1'>
                        Pilih Jadwal
                    </div>
                    <div className='inline-flex justify-center items-center h-fit w-full rounded-md md:rounded-xl bg-zinc-500 text-xs md:text-base whitespace-nowrap text-white px-3 py-1'>
                        Isi Data Diri
                    </div>
                    <div className='inline-flex justify-center items-center h-fit w-full rounded-md md:rounded-xl bg-zinc-500 text-xs md:text-base whitespace-nowrap text-white px-3 py-1'>
                        Pembayaran
                    </div>
                     */}

                    <div className='flex flex-col justify-center items-center gap-1'>
                        <div className='text-teal-500 text-xs md:text-sm'>Pilih Jadwal</div>
                        <div className='w-full h-0.5 bg-teal-500'></div>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-1'>
                        <div className='text-teal-500 text-xs md:text-sm opacity-0'>Pilih Jadwal</div>
                        <div className='w-full h-0.5 bg-zinc-500'></div>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-1'>
                        <div className='text-teal-500 text-xs md:text-sm opacity-0'>Pembayaran</div>
                        <div className='w-full h-0.5 bg-zinc-500'></div>
                    </div>
                </div>
            </div>

            <div className='w-full h-80 bg-white rounded-2xl mt-5 border border-zinc-100'>

            </div>
        </div>
    )
}

export default FormPesan