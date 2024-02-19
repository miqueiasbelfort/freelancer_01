"use client";

import React, {useRef, useEffect} from 'react';
import {motion, useInView, useAnimation} from 'framer-motion';

function Location() {

  const ref = useRef(null);
  const isInView = useInView(ref, {once: true});
  const mainControll = useAnimation();

  useEffect(() => {
    if(isInView){
      mainControll.start("visible");
    }
  }, [isInView, mainControll]);

  return (
    <div ref={ref} className='w-full h-screen'>
        <motion.h1
           className='text-white text-3xl text-center mt-10 font-bold'
           variants={{
            hidden: {x: -50, opacity: 0},
            visible: {x: 0, opacity: 1}
           }}
           initial="hidden"
           animate={mainControll}
           transition={{
            duration: .10,
            delay: .7,
            ease: 'easeOut'
           }}
        >Localização</motion.h1>
        <motion.div
          variants={{
            hidden: {x: -50, opacity: 0},
            visible: {x: 0, opacity: 1}
           }}
           initial="hidden"
           animate={mainControll}
           transition={{
            duration: .10,
            delay: .7,
            ease: 'easeOut'
           }}
        className='w-full overflow-x-hidden mt-10 flex items-center justify-center'>
            <div className='flex flex-col md:flex-row items-start justify-around gap-5'>
                <iframe className='w-full h-96 md:w-[500px] lg:w-[700px] lg:h-[500px]' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3839.9040329254135!2d-47.89627512564565!3d-15.756215222014557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a3bce2e649c5d%3A0xb09b08423bab5ed9!2sCentro%20Veterin%C3%A1rio%20Pet%20Health!5e0!3m2!1spt-BR!2sbr!4v1708308595618!5m2!1spt-BR!2sbr" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                <div className='max-w-72'>
                    <h1 className='text-white text-3xl'>SCLRN 711 Comércio Local 38 LOJA 42 - Asa Norte, Brasília</h1>
                </div>
            </div>
        </motion.div>
    </div>
  );
};

export default Location;