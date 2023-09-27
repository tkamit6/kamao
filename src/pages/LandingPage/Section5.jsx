import React from 'react'
import zomato from '../../images/landingPage/zomato.png';
import urbanClap from '../../images/landingPage/urbanClap.png';
import IDFC from '../../images/landingPage/IDFC.svg';
import rapido from '../../images/landingPage/rapido.png'
import paytm from '../../images/landingPage/paytm.png'
import { BsArrowRight } from 'react-icons/bs'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/grid';
import "swiper/css/autoplay";

import { Grid, FreeMode, Pagination, Autoplay } from 'swiper/modules';

import { Link } from 'react-router-dom';


const Section5 = () => {
    const ActiveHiring = [
        { img: zomato, name: "Delivery Executive - Biker", salary: "up to ₹30,000/month", },
        { img: urbanClap, name: "Maintenance Boy", salary: "up to ₹25,000/month" },
        { img: IDFC, name: "Loan Approval", salary: "up to ₹30,000/month" },
        { img: rapido, name: "Bike Driver", salary: "up to ₹20,000/month" },
        { img: paytm, name: "QR Installation", salary: "up to ₹30,000/month" },
        { img: zomato, name: "Delivery Executive - Biker", salary: "up to ₹30,000/month", },
        { img: urbanClap, name: "Maintenance Boy", salary: "up to ₹25,000/month" },
        { img: IDFC, name: "Loan Approval", salary: "up to ₹30,000/month" },
        { img: rapido, name: "Bike Driver", salary: "up to ₹20,000/month" },
        { img: paytm, name: "QR Installation", salary: "up to ₹30,000/month" },
    ]

    return (
        <section className='mx-auto md:py-12 md:my-auto my-4 bg-gradient-to-r from-[#FFF8F8] to-[#FFF8EF] '>
            <h2 className='text-[#3D3E3E] md:text-[2.6rem] mb-8 md:mb-3 text-[28px] font-bold font-head text-center'>We are <span className='text-[#E78353] font-head'> Actively </span>Hiring for</h2>
            <div className=''>
                <Swiper
                    slidesPerView={5}
                    spaceBetween={30}
                    freeMode={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    modules={[FreeMode, Autoplay]}
                    className="activityHiring md:block hidden"
                >
                    {ActiveHiring.map((data, id) => (
                        <SwiperSlide key={id}>
                            <div className='flex flex-row items-center gap-3 py-3 mb-5 md:mt-8 px-4 rounded-lg w-[100%] shadow-md bg-white' >
                                <img src={data.img} alt="img" style={{ height: '40px', width: '40px' }} />
                                <div className='flex flex-col'>
                                    <h5 className='text-[#3D3E3E] text-sm font-bold'>{data.name}</h5>
                                    <p className='text-[#7C7C7C] font-bold text-sm'>{data.salary}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <div className="">
                    <Swiper
                        slidesPerView={1.2}
                        spaceBetween={30}
                        // grid={{
                        //     rows: 1,
                        // }}
                        pagination={{
                            clickable: true,
                        }}
                        // modules={[ ]}
                        className="activityHiring md:hidden block me-6"
                    >

                        {ActiveHiring.map((data, id) => (
                            <SwiperSlide key={id}>
                                <div className='flex flex-row items-center gap-3 py-3 md:mb-5 md:mt-8 px-4 rounded-lg w-[100%] shadow-md bg-white' >
                                    <div>
                                        <img src={data.img} alt="img" style={{ height: '40px', width: '40px' }} />
                                    </div>
                                    <div className='flex flex-col'>
                                        <h5 className='text-[#3D3E3E] text-base font-bold'>{data.name}</h5>
                                        <p className='text-[#7C7C7C] font-bold text-base'>{data.salary}</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}

                    </Swiper>
                </div>

                <div className='mx-auto flex items-center justify-center relative mt-10'>
                    <Link to='' className='text-[#FA6F2C] relative items-center p-5 w-[16%] rounded-full border bg-white border-[#FA6F2C] py-2 font-bold text-base' >Apply to jobs now <BsArrowRight className='absolute  top-3 right-5' /> </Link>
                </div>
            </div>
        </section>
    )
}

export default Section5