"use client";

import React, {useEffect} from 'react';
import ImageNext from 'next/image';
import {motion, useAnimation} from 'framer-motion';

interface Props {
    img: any,
    id: number
};

function Image({img = require("@/public/imgs/logo.png"), id = 0}: Props) {

    const mailControll = useAnimation();

    useEffect(() => {
        mailControll.start('visible');
    }, [id, mailControll]);

    return (
        <motion.div
            variants={{
                hidden: {x: -100, opacity: 0},
                visible: {x: 0, opacity: 1}
            }}
            initial="hidden"
            animate={mailControll}
            transition={{
                duration: .5
            }}
        >
            <ImageNext
                src={img}
                alt={`${id}`}
                className={`
                    w-96 h-96 
                    object-contain lg:gap-3 lg:w-[500px] lg:h-[400px]
                    rounded-md
                `}
            />
        </motion.div>
    );
};

export default Image;