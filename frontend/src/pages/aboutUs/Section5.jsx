import React from 'react'
import a from '../../images/about-us/a.webp'
import b from '../../images/about-us/b.webp'
import c from '../../images/about-us/c.webp'
import d from '../../images/about-us/d.webp'
import { FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import lifAtKamao from '../../images/about-us/Group191.webp'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';


// import required modules
import { FreeMode, Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom'

export default function Section5() {

    const data = [
        { image: b, name: "Mr. Jesse Shelton", designation: "Founder & CEO" },
        { image: c, name: "Mr. Richard Hoover", designation: "CTO" },
        { image: a, name: "Miss. Anne Barnett", designation: "COO" },
        { image: d, name: "Mr. Jordan Ray", designation: "CFO" },

    ]

    return (
        <>

            <section className='container mx-auto md:my-8 md:pt-16 max-w-7xl py-0 wrap '>
                <div>
                    <h1 className='font-head md:mb-16 mb-9 md:text-[42px] text-[28px] text-center font-bold text-[#3D3E3E]'>Our <span className='font-head text-[#E78353]'>Team</span></h1>

                    <div className='md:flex gap-x-6 hidden'>
                        {
                            data.map((data, id) => (
                                <div key={id} className='relative'>
                                    <img src={data.image} alt="img" />
                                    <span className='absolute bottom-3 w-[92%] left-[4%] backdrop-blur-md p-4 rounded-xl'><h5 className='font-bold text-xl text-white mb-1'> {data.name} </h5>
                                        <h6 className='font-medium text-lg text-white mb-2'>{data.designation}</h6>
                                        <div className='flex gap-x-2'>
                                            <Link to='#'>
                                                <FaTwitter className='text-white' />
                                            </Link>
                                            <Link to='#'>
                                                <FaLinkedinIn className='text-white' />
                                            </Link>
                                        </div>
                                    </span>
                                </div>
                            ))
                        }
                    </div>
                    <Swiper
                        slidesPerView={1.4}
                        spaceBetween={30}
                        freeMode={true}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[FreeMode]}
                        className="our-team md:hidden"
                    >
                        {
                            data.map((data, id) => (
                                <SwiperSlide key={id} className='relative'>
                                    <img src={data.image} alt="img" />
                                    <span className='absolute bottom-3 w-[92%] left-[4%] backdrop-blur-md p-4 rounded-xl'><h5 className='font-bold text-xl text-white mb-1'> {data.name} </h5>
                                        <h6 className='font-medium text-lg text-white mb-2'>{data.designation}</h6>
                                        <div className='flex gap-x-2'>
                                            <FaTwitter className='text-white' />
                                            <FaLinkedinIn className='text-white' />
                                        </div>
                                    </span>
                                </SwiperSlide>
                            ))
                        }
                        {/* <SwiperSlide>Slide 1</SwiperSlide> */}
                    </Swiper>
                </div>
            </section>
            <section className='container mx-auto md:my-8 md:pt-16 max-w-7xl py-0 wrap '>
                <div>
                    <h1 className='font-head md:mb-16 mb-9 md:text-[42px] text-[28px] text-center font-bold text-[#3D3E3E]'>Life at <span className='font-head text-[#E78353]'>Kamaao</span></h1>

                    <div className='flex gap-x-6 '>
                        <img src={lifAtKamao} alt="lifAtKamao" />
                    </div>
                </div>
            </section>
        </>

    )
}
