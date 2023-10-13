import React from 'react'
import img from '../../images/team-leader/Group148.webp'
import img1 from '../../images/team-leader/Group149.webp'
import img2 from '../../images/team-leader/Group150.webp'
import img3 from '../../images/team-leader/Group151.webp'
import img4 from '../../images/team-leader/Group152.webp'


import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import "swiper/css/autoplay";

// import required modules
import { Autoplay, Pagination } from 'swiper/modules';


export default function Section4() {
    const teamLeaserData = [
        { img: img, heading: "Leadership Opportunity", about: "Lorem ipsum dolor sit amet consectetur. Velit luctus pulvinar augue morbi ultricies Velit luctus pulvinar augue morbi ultricies" },
        { img: img1, heading: "Leadership Opportunity", about: "Lorem ipsum dolor sit amet consectetur. Velit luctus pulvinar augue morbi ultricies Velit luctus pulvinar augue morbi ultricies" },
        { img: img2, heading: "Leadership Opportunity", about: "Lorem ipsum dolor sit amet consectetur. Velit luctus pulvinar augue morbi ultricies Velit luctus pulvinar augue morbi ultricies" },
        { img: img3, heading: "Leadership Opportunity", about: "Lorem ipsum dolor sit amet consectetur. Velit luctus pulvinar augue morbi ultricies Velit luctus pulvinar augue morbi ultricies" },
        { img: img4, heading: "Leadership Opportunity", about: "Lorem ipsum dolor sit amet consectetur. Velit luctus pulvinar augue morbi ultricies Velit luctus pulvinar augue morbi ultricies" },
    ]
    return (
        <section className='container mx-auto md:mb-8 md:mt-2 md:my-8 py-0 max-w-7xl wrap '>
            <h1 className='text-center relative font-bold md:text-[2.62rem] text-[1.75rem] font-head md:mb-16 mb-12 text-[#3D3E3E]'>Why become a <span className='text-[#E78353]'>Team Leader </span>with Kamaao?</h1>
            <div className='md:mx-9 md-0 team-swiper-div relative'>
            <div className="absolute bg-[#6F2ECF] w-8 h-8 left-[9%] rounded-full"></div>
            <div className="absolute bg-[#007CC2] w-7 h-7 left-[11%] bottom-[5%] rounded-full"></div>
            <div className="absolute bg-[#F3C1A9] w-10 h-10 right-[28%] top-12 rounded-full"></div>
            <div className="absolute bg-[#F0B428] w-4 h-4 right-[15%] rounded-full"></div>
            <div className="absolute bg-[#E00086] w-4 h-4 right-[5%] top-[60%] rounded-full"></div>
            <div className="absolute bg-[#00A846] w-4 h-4 right-[13%] bottom-[5%] rounded-full md:block hidden"></div>
                <Swiper
                    pagination={{
                        dynamicBullets: true,
                    }}
                    speed={4000}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    loop={true}

                    modules={[Pagination, Autoplay]}
                    className="teamLeaserSwiper md:mx-44"
                >
                    {
                        teamLeaserData.map((data, id) => (
                            <SwiperSlide key={id}>
                                <div className='grid md:grid-cols-8 mx-auto md:py-2 items-center'>
                                    <div className='col-span-4'>
                                        <img src={data.img} alt="img" className='md:w-[356px]' />
                                    </div>
                                    <div className='col-span-4'>
                                        <h2 className='font-bold md:text-[2.5rem] md:leading-[3.23rem] md:w-[70%] text-[#3D3E3E] md:text-start text-center text-[28px] md:mb-6 mb-1 mt-3'>{data.heading}</h2>
                                        <p className='text-[#7C7C7C] font-medium md:text-start  text-center text-xl md:w-[84%]'>{data.about}</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </section>
    )
}
