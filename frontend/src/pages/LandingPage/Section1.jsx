import React from 'react'
import AppStore from '../../images/AppStore.svg'
import Typewriter from 'typewriter-effect';
import playStore from '../../images/playStore.svg'
import { Link } from 'react-router-dom';
import img146 from '../../images/landingPage/img146.webp';
import { motion } from 'framer-motion';

const Section1 = () => {

    return (
        <section className='landSection1 container mx-auto md:mt-2 md:pb-8 max-w-7xl wrap '>
            <motion.div
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.975, duration: 2, type: "spring" }}>
                <div className='grid sm:grid-cols-2 md:mx-[102px] md:my-[130px] relative md:text-start text-center'>
                    <div className='sm:col-span-1 md:pt-2 pt-72 mx-auto w-[90%] '>
                        <div className='md:w-[90%]'>
                            <h2 className='md:text-[3rem] font-bold font-head text-[#3D3E3E] md:leading-[3.8rem] text-[2rem] leading-[2.5rem] md:mb-0 mb-3 '>Kamaao is a one stop solution to <br /> <span className='text-[#E16428]'>
                                <Typewriter
                                    options={{
                                        strings: ['Apply for jobs', 'complete finance projects', 'Refer and Earn', 'Learn new skills', 'Buy products'],
                                        autoStart: true,
                                        loop: true,
                                        className: 'font-head'
                                    }}
                                />
                            </span></h2>
                            <p className='text-[#7C7C7C] md:mx-0 mx-auto md:text-base font-medium md:pt-6 md:pb-8 w-[86%] md:mb-0 mb-6'>Lorem ipsum dolor sit amet consectetur. Velit luctus pulvinar augue morbi ultricies tristique integer tincidunt pellentesque. Nisi faucibus a justo bibendum.</p>
                            <motion.div initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration:1.50}} className="flex flex-row items-center md:gap-8 gap-4 md:justify-start justify-center flex-wrap">
                                <Link to='#' className='md:w-auto w-[45%]'> <img src={AppStore} alt="logo" loading='lazy' /></Link>
                                <Link to='#' className='md:w-auto md:block hidden w-[45%]'><img src={playStore} alt="logo" loading='lazy' /></Link>
                            </motion.div>

                        </div>
                    </div>
                    <div className='sm:col-span-1'>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 3 }}>
                            <img src={img146} alt="img" className='-ml-12 phoneImg absolute -right-[8%] -top-[25%] md:block hidden' />
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </section>
    )
}

export default Section1