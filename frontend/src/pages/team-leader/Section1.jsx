import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion';

export default function Section1() {
    return (
        <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}
        >
            <section className='teamLeaderSection1 container mx-auto md:h-[50rem] h-[33rem] md:mb-8 md:mt-4 py-0 max-w-7xl wrap '>
                <div className='text-center md:pt-16 '>
                    <h2 className='font-bold md:text-[3rem] text-[2rem] md:leading-[3.875rem] leading-[2.53rem] text-[#0D0E0E] font-head md:mb-7 md:w-[70%] w-[90%] mx-auto'>Be an <span className='text-[#E16428] font-head'> Entrepreneur </span> you always  wanted to be.</h2>
                    <p className='text-[#7C7C7C] font-medium text-base leading-[22px] md:mb-9 mb-5'>Lorem ipsum dolor sit amet consectetur. Velit luctus pulvinar augue morbi ul</p>
                    <Link to='#' className='text-base font-bold py-2 px-6 text-[#FA6F2C] border border-[#FA6F2C] rounded-full' >Enroll Now</Link>
                </div>
            </section>
        </motion.div>
    )
}
