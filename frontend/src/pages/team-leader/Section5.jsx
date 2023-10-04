import React from 'react'
import img from '../../images/team-leader/Group196.webp'
import google from '../../images/team-leader/google.svg'
import mobilePerson from '../../images/about-us/mobile-person.webp'
import Slider from "react-slick";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Pagination } from "swiper/modules";

export default function Section5() {
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "220px",
        slidesToShow: 1,
        speed: 500,
        dots: true,
    };
    const Mobilesettings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "0px",
        slidesToShow: 1,
        speed: 500,
        dots: true,
    };

    const onGoingProjectdata = [
        { img: img, mobileImg: mobilePerson, heading: "Google - App Onboarding", about: "Lorem ipsum dolor sit amet consectetur. Velit luctus pulvinar augue morbi ultricies Velit luctus pulvinar augue morbi ultricies Lorem ipsum dolor sit amet consectetur. Velit luctus pulvinar augue morbi ultricies  Velit luctus pulvinar augue morbi ultricies Lorem ipsum dolor sit amet consectetur. Velit luctus pulvinar augue morbi ultricies Velit luctus pulvinar augue morbi ultricies ", social:google },
        { img: img, mobileImg: mobilePerson, heading: "Google - App Onboarding", about: "Lorem ipsum dolor sit amet consectetur. Velit luctus pulvinar augue morbi ultricies Velit luctus pulvinar augue morbi ultricies Lorem ipsum dolor sit amet consectetur. Velit luctus pulvinar augue morbi ultricies  Velit luctus pulvinar augue morbi ultricies Lorem ipsum dolor sit amet consectetur. Velit luctus pulvinar augue morbi ultricies Velit luctus pulvinar augue morbi ultricies " , social:google},
        { img: img, mobileImg: mobilePerson, heading: "Google - App Onboarding", about: "Lorem ipsum dolor sit amet consectetur. Velit luctus pulvinar augue morbi ultricies Velit luctus pulvinar augue morbi ultricies Lorem ipsum dolor sit amet consectetur. Velit luctus pulvinar augue morbi ultricies  Velit luctus pulvinar augue morbi ultricies Lorem ipsum dolor sit amet consectetur. Velit luctus pulvinar augue morbi ultricies Velit luctus pulvinar augue morbi ultricies ", social:google },
        { img: img, mobileImg: mobilePerson, heading: "Google - App Onboarding", about: "Lorem ipsum dolor sit amet consectetur. Velit luctus pulvinar augue morbi ultricies Velit luctus pulvinar augue morbi ultricies Lorem ipsum dolor sit amet consectetur. Velit luctus pulvinar augue morbi ultricies  Velit luctus pulvinar augue morbi ultricies Lorem ipsum dolor sit amet consectetur. Velit luctus pulvinar augue morbi ultricies Velit luctus pulvinar augue morbi ultricies ", social:google },
    ]

    return (
        <section className='team-ongoingProject container mx-auto md:mb-8 md:py-8 md:pb-20 py-16 max-w-7xl wrap '>
            <h1 className='text-center relative font-bold md:text-[2.62rem] text-[1.75rem] font-head md:mb-16 mb-12 text-[#3D3E3E]'>Our Ongoing <span className='text-[#E78353]'>Projects</span></h1>
            <div className=' md:block hidden'>
                <Slider {...settings}>
                {
                    onGoingProjectdata.map((data, id)=>(
                    <div key={id} className=''>
                        <div className='flex bg-[#FFF5EF] md:w-[800px] gap-x-6 md:p-6 rounded-xl mx-10'>
                            <div>
                                <img src={data.img} alt="img" />
                            </div>
                            <div className='flex flex-col justify-between'>
                                <h2 className='text-[#E78353] font-bold text-[2rem] md:mb-1'>{data.heading}</h2>
                                <p className='text-[#7C7C7C] text-base font-medium leading-[23px]'>{data.about} </p>
                                <img src={data.social} alt="svg" className='md:w-[100px]' />
                            </div>
                        </div>
                    </div>
                    ))
                }
                </Slider>
            </div>

            <div className='md:hidden block'>
                <Slider {...Mobilesettings}>
                {
                    onGoingProjectdata.map((data, id)=>(
                    <div key={id} className=''>
                        <div className=' bg-[#FFF5EF] w-full gap-x-6 p-4 rounded-xl mx-auto'>
                            <div>
                                <img src={data.mobileImg} alt="img" />
                            </div>
                            <div className='flex flex-col justify-between'>
                                <h2 className='text-[#E78353] font-bold text-[20px] mb-2 mt-4'>{data.heading}</h2>
                                <p className='text-[#7C7C7C] text-base font-medium mb-3 leading-[23px]'>{data.about} </p>
                                <img src={data.social} alt="svg" className='w-[100px]' />
                            </div>
                        </div>
                    </div>
                    ))
                }
                </Slider>
            </div>



            {/* <Swiper
                slidesPerView={2}
                spaceBetween={80}
                centeredSlides={true}
                pagination={{
                    clickable: true
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='md:w-[725px]'>
                        <div className='flex bg-[#FFF5EF] md:p-6 mx-10'>
                            <div>
                                <img src={img} alt="img" />
                            </div>
                            <div className='flex flex-col'>
                                <h2 className='text-[#E78353] font-bold text-[2rem] md:mb-6'>Google - App Onboarding</h2>
                                <p className='text-[#7C7C7C] text-lg font-medium'>Lorem ipsum dolor sit amet consectetur. Velit luctus pulvinar augue morbi ultricies Velit luctus pulvinar augue morbi ultricies Lorem ipsum dolor sit amet consectetur. Velit luctus pulvinar augue morbi ultricies  Velit luctus pulvinar augue morbi ultricies Lorem ipsum dolor sit amet consectetur. Velit luctus pulvinar augue morbi ultricies
                                    Velit luctus pulvinar augue morbi ultricies </p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='md:w-[725px]'>
                        <div className='flex bg-[#FFF5EF] md:p-6 mx-10'>
                            <div>
                                <img src={img} alt="img" />
                            </div>
                            <div className='flex flex-col'>
                                <h2 className='text-[#E78353] font-bold text-[2rem] md:mb-6'>Google - App Onboarding</h2>
                                <p className='text-[#7C7C7C] text-lg font-medium'>Lorem ipsum dolor sit amet consectetur. Velit luctus pulvinar augue morbi ultricies Velit luctus pulvinar augue morbi ultricies Lorem ipsum dolor sit amet consectetur. Velit luctus pulvinar augue morbi ultricies  Velit luctus pulvinar augue morbi ultricies Lorem ipsum dolor sit amet consectetur. Velit luctus pulvinar augue morbi ultricies
                                    Velit luctus pulvinar augue morbi ultricies </p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='md:w-[725px]'>
                        <div className='flex bg-[#FFF5EF] md:p-6 mx-10'>
                            <div>
                                <img src={img} alt="img" />
                            </div>
                            <div className='flex flex-col'>
                                <h2 className='text-[#E78353] font-bold text-[2rem] md:mb-6'>Google - App Onboarding</h2>
                                <p className='text-[#7C7C7C] text-lg font-medium'>Lorem ipsum dolor sit amet consectetur. Velit luctus pulvinar augue morbi ultricies Velit luctus pulvinar augue morbi ultricies Lorem ipsum dolor sit amet consectetur. Velit luctus pulvinar augue morbi ultricies  Velit luctus pulvinar augue morbi ultricies Lorem ipsum dolor sit amet consectetur. Velit luctus pulvinar augue morbi ultricies
                                    Velit luctus pulvinar augue morbi ultricies </p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='md:w-[725px]'>
                        <div className='flex bg-[#FFF5EF] md:p-6 mx-10'>
                            <div>
                                <img src={img} alt="img" />
                            </div>
                            <div className='flex flex-col'>
                                <h2 className='text-[#E78353] font-bold text-[2rem] md:mb-6'>Google - App Onboarding</h2>
                                <p className='text-[#7C7C7C] text-lg font-medium'>Lorem ipsum dolor sit amet consectetur. Velit luctus pulvinar augue morbi ultricies Velit luctus pulvinar augue morbi ultricies Lorem ipsum dolor sit amet consectetur. Velit luctus pulvinar augue morbi ultricies  Velit luctus pulvinar augue morbi ultricies Lorem ipsum dolor sit amet consectetur. Velit luctus pulvinar augue morbi ultricies
                                    Velit luctus pulvinar augue morbi ultricies </p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                
            </Swiper> */}

        </section>
    )
}
