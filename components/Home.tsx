"use client";

import React, {useRef, useEffect} from 'react';
import Image from 'next/image';
import { motion, useInView, useAnimation } from "framer-motion"

function Home() {

  const ref = useRef(null);
  const isInView = useInView(ref, {once: true});
  const mainControlls = useAnimation();

  useEffect(() => {
    if(isInView){
      console.log(isInView);
      mainControlls.start("visible");
    }
  }, [isInView, mainControlls]);

  return (
    <section 
      id='home' 
      className={`
        bg-[url("../public/imgs/capahome.svg")] 
        bg-center bg-cover bg-no-repeat w-full 
        mt-10
        h-[100vh] flex flex-col items-center justify-center lg:flex-row lg:items-center 
        lg:px-10 px-4
        mb-6
      `}
      ref={ref}
    >
        <motion.div 
          className='w-full items-center justify-center text-center lg:items-start lg:justify-start lg:text-left'
          variants={{
            hidden: {x: -200, opacity: 0},
            visible: {x: 0, opacity: 1}
          }}
          initial="hidden"
          animate={mainControlls}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            duration: .10,
            delay: .8
          }}
        >
          <h2 className='text-3xl lg:text-5xl text-[#AAD5C2] font-bold'>Pequenos animais</h2>
          <h1 className='text-5xl lg:text-8xl text-white font-bold'>Ortopedia <span className='text-[#AAD5C2]'>&</span> Neurocirurgia</h1>
        </motion.div>
        <motion.div
          variants={{
            hidden: {scale: 0, rotate: 180},
            visible: {rotate: 0, scale: 1}
          }}
          initial="hidden"
          animate={mainControlls}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            duration: .10,
            delay: .8
          }}
        >
          <Image 
            src={require("@/public/imgs/logo.png")}
            alt='Logo'
            className='w-96'
          />
        </motion.div>
    </section>
  );
};

export default Home;