"use client";
import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import Image from 'next/image';
import { MdArrowRightAlt } from "react-icons/md";


function Skills() {

    const [imgView, setImgView] = useState(3);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const mainControll = useAnimation();

    const imgsList = [
        { id: 0, img: require("@/public/imgs/list/01.jpeg") },
        { id: 1, img: require("@/public/imgs/list/02.jpeg") },
        { id: 2, img: require("@/public/imgs/list/03.jpg") },
        { id: 3, img: require("@/public/imgs/list/04.jpg") },
        { id: 4, img: require("@/public/imgs/list/05.jpg") },
        { id: 5, img: require("@/public/imgs/list/06.jpg") },
    ];

    useEffect(() => {

        if (isInView) {
            mainControll.start("visible");
        }

    }, [isInView, mainControll]);

    return (
        <section
            ref={ref}
            id='skills'
            className='h-screen w-full bg-white mt-4 px-5 pt-14 mb-5'
        >
            <div className='h-[2px] w-full bg-[#658C87] flex items-center'>
                <motion.div
                    className='w-16 h-[10px] bg-[#1c3936] rounded-lg'
                    variants={{
                        hidden: { x: '20vw' },
                        visible: { x: 0 }
                    }}
                    initial="hidden"
                    animate={mainControll}
                    transition={{
                        duration: .20, ease: 'circOut', delay: 1
                    }}
                />
            </div>
            <div className='mt-5'>
                <h2 className='text-2xl font-bold'>Especialidades</h2>

                <div className='w-full flex flex-col gap-5 md:flex-row md:gap-0 items-center justify-around mt-5 max-[372px]:mt-10'>
                    <motion.div
                        variants={{
                            hidden: { x: -10, opacity: 0 },
                            visible: { x: 0, opacity: 1 }
                        }}
                        initial="hidden"
                        animate={mainControll}
                        transition={{
                            duration: .10,
                            delay: .7
                        }}
                    >
                        <Image
                            src={imgsList[imgView].img}
                            alt={`${imgsList[imgView].id}`}
                            className={`
                                w-96 h-96 
                                object-contain lg:gap-3 lg:w-[500px] lg:h-[400px]
                                rounded-md
                            `}
                        />
                    </motion.div>
                    <motion.ul
                        className='flex flex-col gap-1 md:gap-5'
                        variants={{
                            hidden: { x: 50, opacity: 0 },
                            visible: { x: 0, opacity: 1 }
                        }}
                        initial="hidden"
                        animate={mainControll}
                        transition={{
                            duration: .10,
                            delay: .7
                        }}
                    >
                        <li onClick={() => setImgView(3)} className='text-xl flex items-center gap-1 lg:text-3xl font-semibold transition-colors cursor-pointer hover:text-green-600'><MdArrowRightAlt size={15} /> Traumatologia</li>
                        <li onClick={() => setImgView(1)} className='text-xl flex items-center gap-1 lg:text-3xl font-semibold transition-colors cursor-pointer hover:text-green-600'><MdArrowRightAlt size={15} /> Hérnia de disco</li>
                        <li onClick={() => setImgView(5)} className='text-xl flex items-center gap-1 lg:text-3xl font-semibold transition-colors cursor-pointer hover:text-green-600'><MdArrowRightAlt size={15} /> Fraturas e Luxações</li>
                        <li onClick={() => setImgView(3)} className='text-xl flex items-center gap-1 lg:text-3xl font-semibold transition-colors cursor-pointer hover:text-green-600'><MdArrowRightAlt size={15} /> Luxação de patela</li>
                        <li onClick={() => setImgView(2)} className='text-xl flex items-center gap-1 lg:text-3xl font-semibold transition-colors cursor-pointer hover:text-green-600'><MdArrowRightAlt size={15} /> Ruptura de ligamento cruzado</li>
                        <li onClick={() => setImgView(4)} className='text-xl flex items-center gap-1 lg:text-3xl font-semibold transition-colors cursor-pointer hover:text-green-600'><MdArrowRightAlt size={15} /> Cirurgias da coluna vertebral</li>
                    </motion.ul>
                </div>

            </div>
        </section>
    );
};

export default Skills;