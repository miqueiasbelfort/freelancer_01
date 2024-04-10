"use client";

import React from 'react';
import Image from 'next/image';

import { IoLogoInstagram, IoLogoWhatsapp } from "react-icons/io5";
import { MdOutlineMail, MdOutlineLocalPhone } from "react-icons/md";

function Footer() {

    return (
        <footer className='w-full h-96 md:h-60 px-10 bg-[#2c4339] pt-3'>
            <div className='w-full flex flex-col md:flex-row md:items-center justify-around'>
                <div className='text-center flex items-center justify-center'>
                    <Image
                        src={require("@/public/imgs/logo.png")}
                        alt='logo tipo'
                        className='w-24'
                    />
                    <h2 className='text-white font-bold text-lg'>Ítalo Rodriguis</h2>
                </div>
                <ul className='flex flex-col md:flex-row items-center gap-2'>
                    <li className='text-white font-light underline hover:text-green-400 transition-colors'>
                        <a href="#home">Home</a>
                    </li>
                    <li className='text-white font-light underline hover:text-green-400 transition-colors'>
                        <a href="#about">Sobre</a>
                    </li>
                    <li className='text-white font-light underline hover:text-green-400 transition-colors'>
                        <a href="#skills">Especialidades</a>
                    </li>
                    <li className='text-white font-light hover:text-green-400 transition-colors flex items-center gap-2'>
                        <MdOutlineMail size={15} /> italoortopediavet@gmail.com
                    </li>
                    <li className='text-white font-light hover:text-green-400 transition-colors flex items-center gap-2'>
                        <MdOutlineLocalPhone size={15} /> (61) 99530-4935
                    </li>
                </ul>
            </div>
            <div className='h-[1px] w-full bg-[#AAD5C2] my-4' />
            <div className='w-full flex items-center gap-4 justify-center mt-4'>
                <a className='text-white border p-2 border-white rounded-full flex items-center justify-center transition-colors hover:border-[#AAD5C2] hover:text-[#AAD5C2]' href="https://www.instagram.com/ortoneuro.vet/">
                    <IoLogoInstagram size={20} />
                </a>
                <a className='text-white border p-2 border-white rounded-full flex items-center justify-center transition-colors hover:border-[#AAD5C2] hover:text-[#AAD5C2]' href="mailto:italoortopediavet@gmail.com">
                    <MdOutlineMail size={20} />
                </a>
                <a className='text-white border p-2 border-white rounded-full flex items-center justify-center transition-colors hover:border-[#AAD5C2] hover:text-[#AAD5C2]' href="https://wa.me/5561995304935?text=Ol%C3%A1%2C+tudo+bem%3F">
                    <IoLogoWhatsapp size={20} />
                </a>
            </div>
            <span className='text-gray-500 text-xs'>&copy; created by <a className='underline' href="https://miqueiasbelfort.netlify.app/">Miqueias Belfor</a></span>
        </footer>
    );
};

export default Footer;