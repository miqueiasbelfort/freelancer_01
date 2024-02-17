"use client";

import React, { useState } from 'react';
import Image from 'next/image';
// import { usePathname } from 'next/navigation';

function Header() {

    // const pathname = usePathname();
    const [openMenu, setOpenMenu] = useState(false);

    return (
        <nav className="bg-white z-50 border-gray-200 fixed top-0 left-0 w-screen">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
                <a href="#home" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <Image src={require("@/public/imgs/logo.png")} className="h-8 w-8" alt="Flowbite Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap">ítalo Rodriguis</span>
                </a>
                <button onClick={() => setOpenMenu(!openMenu)} data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden" aria-controls="navbar-default" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white items-center">
                        <li>
                            <a href="#home" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-700 md:p-0 " aria-current="page">Home</a>
                        </li>
                        <li>
                            <a href="#about" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-700 md:p-0">Sobre</a>
                        </li>
                        <li>
                            <a href="#skills" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-700 md:p-0">Especialidades</a>
                        </li>
                        <li>
                            <a href="https://wa.me/5561995304935?text=Ol%C3%A1%2C+tudo+bem%3F" className="block py-2 px-3 ">
                                <button className='px-3 py-1 bg-green-700 rounded-md text-white'>Whatsapp</button>
                            </a>
                        </li>
                    </ul>
                </div>
                {openMenu && (
                    <div className="w-full md:hidden md:w-auto" id="navbar-default">
                        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white">
                            <li>
                                <a onClick={() => setOpenMenu(false)} href="#home" className="block py-2 px-3 text-gray-900 rounded md:bg-transparent md:text-green-700 md:p-0" aria-current="page">Home</a>
                            </li>
                            <li>
                                <a onClick={() => setOpenMenu(false)} href="#about" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-700 md:p-0">Sobre</a>
                            </li>
                            <li>
                                <a onClick={() => setOpenMenu(false)} href="#skills" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-700 md:p-0">Especialidades</a>
                            </li>
                            <li>
                                <a href="https://wa.me/5561995304935?text=Ol%C3%A1%2C+tudo+bem%3F" className="block py-2 px-3 ">
                                    <button className='px-3 py-2 bg-green-700 rounded-md text-white'>Whatsapp</button>
                                </a>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </nav>

    );
};

export default Header;