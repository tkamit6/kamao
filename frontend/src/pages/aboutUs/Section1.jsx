import React from 'react'
import banner from '../../images/about-us/banner.webp'
import { motion } from 'framer-motion'

export default function Section1() {
    return (
        <motion.div
            initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 2, delay:0.550 }}
        >
            <section className='container mx-auto bg-[#FFF5EF] md:mb-8 md:mt-2 py-0 max-w-7xl wrap '>
                <div className='text-center md:pt-16 mt-6 relative'>
                    <h2 className='md:font-medium font-bold md:text-[3rem] text-[2rem] md:leading-[3.875rem] leading-[2.53rem] text-[#0D0E0E] font-head'>We are changing the shape of gig <br /> <span className='text-[#E78353] font-head'>economy</span></h2>
                    {/* <div className="absolute bg-[#F1B598] z-20 md:w-24 md:h-24 w-6 h-6 rounded-full md:right-[22%] right-[15%] "></div> */}
                    <div className="absolute bg-[#6F2ECF] md:w-8 md:h-8 w-3 h-3 rounded-full md:left-[10%] md:bottom-[65%] bottom-[84%] left-[20%]"></div>
                    <div className="absolute bg-[#007CC2] md:w-6 md:h-6 w-3 h-3 rounded-full md:left-[15%] bottom-[28%] left-[10%]"></div>
                    <div className="absolute bg-[#F0B428] md:w-4 md:h-4 w-2 h-2 rounded-full md:right-[15%] md:top-[15%] right-[50%]"></div>
                    <div className="absolute bg-[#E00086] md:w-4 md:h-4 w-2 h-2 rounded-full md:right-[10%] md:top-[50%] top-0 right-[10%]"></div>
                    <div className="absolute bg-[#00A846] md:w-4 md:h-4 w-2 h-2 rounded-full right-[14%] md:bottom-[15%] top-[25%] "></div>
                    <img src={banner} alt="img" className='md:w-[880px] w-[343px] z-40 mx-auto' />
                </div>
            </section>
        </motion.div>
    )
}
