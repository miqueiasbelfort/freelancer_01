"use client";

import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import { motion, useInView, useAnimation } from 'framer-motion';

import { BsChatRightHeart } from "react-icons/bs";

function Sobre() {

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControll = useAnimation();

  useEffect(() => {
    if (isInView) {
      console.log(isInView);
      mainControll.start("visible");
    }
  }, [isInView, mainControll]);

  return (
    <section
      ref={ref}
      id='about'
      className={`w-full h-[100vh] flex justify-between`}
    >
      <motion.div
        className='w-[50%] p-4'
        variants={{
          hidden: { x: -10, opacity: 0 },
          visible: { x: 0, opacity: 1 }
        }}
        initial="hidden"
        animate={mainControll}
        transition={{ duration: .10, ease: 'easeIn', delay: .8 }}
      >
        <div className='mt-10 mb-2 w-full h-[2px] bg-[#AAD5C2] rounded-xl flex items-center'>
          <motion.div
            className='w-16 h-[10px] bg-white rounded-lg'
            variants={{
              hidden: { x: '100%' },
              visible: { x: 0 }
            }}
            initial="hidden"
            animate={mainControll}
            transition={{
              duration: .20, ease: 'circOut', delay: 1
            }}
          />
        </div>
        <h3 className='text-white font-light mb-10'>Sobre o Dr. Ítalo Rodriguis</h3>
        <p className='text-lg sm:text-xl md:text-3xl lg:text-4xl font-semibold text-white mb-4'>
          Formado pela UPIS-DF, com residência em clínica cirúrgica na Hvet UPIS-DF e aperfeiçoamento em neurocirurgia de pequenos animais pela UNESP, Jaboticabal-SP.
        </p>
        <div className='flex'>
          <a href="https://www.instagram.com/italociruvet/" className='px-5 flex items-center gap-2 py-3 text-white border border-[#AAD5C2] rounded-md hover:bg-[#AAD5C2] hover:text-gray-900 transition-colors'>
            Saber mais
            <BsChatRightHeart size={15} />
          </a>
        </div>
      </motion.div>
      <motion.div
        className='w-[50%]'
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 }
        }}
        initial="hidden"
        animate={mainControll}
        transition={{ duration: .10, delay: .8 }}
      >
        <Image
          src={require("@/public/imgs/about.jpeg")}
          alt='Ítalo Rodriguis'
          className='w-full h-screen object-cover rounded-l-2xl'
        />
      </motion.div>
    </section>
  );
};

export default Sobre;