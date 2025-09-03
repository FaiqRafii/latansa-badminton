import React from 'react'

function Navbar() {
    return (
        <nav className='navbar lg:sticky lg:top-0 lg:z-20 w-full h-fit px-10 py-5 bg-white'>
            <div className='sm:flex justify-between items-center'>
                <div className='sm:flex gap-20 items-center'>
                    <div className='flex justify-between items-center'>
                        <div className='logo font-bold hover:cursor-pointer'>LatansaField</div>

                        <div className='sm:hidden text-black w-fit h-fit px-4 py-1.5 rounded-lg hover:bg-zinc-100/80 transition-all ease-in text-sm hover:cursor-pointer'>
                            Login
                        </div>
                    </div>
                    <ul className='mt-2 sm:mt-0 flex justify-center items-center gap-5 text-zinc-500'>
                        <li className='hover:text-black border-b-2 border-transparent hover:border-black hover:cursor-pointer transition-all ease-in'>Beranda</li>
                        <li className='hover:text-black border-b-2 border-transparent hover:border-black hover:cursor-pointer transition-all ease-in'>Lokasi</li>
                        <li className='hover:text-black border-b-2 border-transparent hover:border-black hover:cursor-pointer transition-all ease-in'>Fasilitas</li>
                        <li className='hover:text-black border-b-2 border-transparent hover:border-black hover:cursor-pointer transition-all ease-in'>Jadwal</li>
                    </ul>
                </div>

                <div className='flex items-center'>
                    <div className='hidden sm:flex text-black w-fit h-fit px-4 py-1.5 rounded-lg hover:bg-zinc-100/80 transition-all ease-in text-sm hover:cursor-pointer'>
                        Login
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar