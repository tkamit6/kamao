import React, { useEffect, useRef, useState } from 'react'
import slider1 from '../../images/landingPage/slider1.png'
import slider2 from '../../images/landingPage/slider2.png'
import slider3 from '../../images/landingPage/slider3.png'
import slider4 from '../../images/landingPage/slider4.png'
import M1 from '../../images/landingPage/M1.png'
import M2 from '../../images/landingPage/M2.png'
import M3 from '../../images/landingPage/M3.png'
import M4 from '../../images/landingPage/M4.png'
import { Link } from 'react-router-dom'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import "swiper/css/autoplay";

// import required modules
import { Pagination } from 'swiper/modules';
import Parrallax from '../Parrallax'

const Section3 = () => {
    // const ExtraIncome = useContext(MyContext)

    const ExtraIncome = [
        { heading: "Apply for Jobs and Earn", para: "At Kamaao we offer you a wide range of jobs opportunity with a pay scale that is higher then the industry standards.", img: slider1, mImg: M1 },
        { heading: "Earn Milestone based Incentive", para: "At Kamaao we offer you a wide range of jobs opportunity with a pay scale that is higher then the industry standards.", img: slider2, mImg: M2 },
        { heading: "Complete small Gigs & Task", para: "At Kamaao we offer you a wide range of jobs opportunity with a pay scale that is higher then the industry standards.", img: slider3, mImg: M3 },
        { heading: "Refer & Earn", para: "At Kamaao we offer you a wide range of jobs opportunity with a pay scale that is higher then the industry standards.", img: slider4, mImg: M4 }
    ]
    const [toggleState, setToggleState] = useState(0);
    const [isTabActive, setIsTabActive] = useState(false);
    const [preState, setPreState] = useState(0);
    const [scale, setScale] = useState(1);

const slider1Ref = useRef()
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;
            // console.log(currentScrollPos);
         

            if (currentScrollPos > preState) {
                if (currentScrollPos >= 4200 && scrollY <= 5200) {
                    setToggleState(3)
                    // console.log("active 2")
                } else if (currentScrollPos >= 3200 && scrollY <= 4200) {
                    setToggleState(2)
                    // console.log("active 2")
                }
                else if (currentScrollPos >= 2200 && scrollY <= 3200) {
                    setToggleState(1)
                    // console.log("active 1")
                } else if (currentScrollPos >= 1150 && scrollY <= 2000) {
                    setToggleState(0)
                    // console.log("active 0")
                }
            }
        }
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [toggleState, isTabActive, preState])

    const handleClick = (index) => {
        setToggleState(index)
        setIsTabActive(true);
    }

    return (
        <section className='landSection2 container mx-auto md:py-32 max-w-7xl wrap bg-[#FFF5EF] rounded-2xl'>
            <div className='stick-para'>
                <div className="grid md:grid-cols-2 md:px-[102px] items-center ">
                    <div className="md:col-span-1 md:text-start text-center mx-auto md:w-[101%]">
                        <h2 className='font-head text-[#E78353] md:w-[100%] w-[90%] md:mx-0 mx-auto font-bold md:text-[2.6rem] text-[1.6rem] leading-8 mb-3 md:leading-normal'>Generate an extra income</h2>
                        <p className='text-[#7C7C7C] mx-2 font-bold md:text-lg text-base -mb-8 md:mb-auto'>Complete small gigs and task and earn an extra income of upto 30,000</p>
                        <div className='md:mt-10 md:block hidden '>
                            {
                                ExtraIncome.map((data, id) => (
                                    <div key={id} onClick={() => handleClick(id)} className={`mb-10 ${toggleState === id ? "inner-tab active-tab" : "inner-tab"}`}  >
                                        <h3 className="text-[#3D3E3E] text-2xl font-bold" >{data.heading}</h3>
                                        <p className={`${toggleState === id ? "block" : "hidden"} font-medium text-[#7C7C7C] text-base`}>{data.para}</p>
                                    </div>
                                ))
                            }
                            <div className='md:mt-8'>
                                <Link to='' className='bg-white rounded-full font-bold text-base border border-[#E78353] text-[#FA6F2C] px-5 py-2.5'>Start Earning Now</Link>
                            </div>
                        </div>
                    </div>
                    <div className="md:col-span-1 md:my-auto  ">
                        {/* <img src={slider1} alt="img" className='z-10' /> */}
                        {/* <img src={ExtraIncome[toggleState].img} alt="img" loading='lazy' className='md:block hidden md:h-[46rem] h-auto md:mx-auto' /> */}
                    </div>
                </div>
            </div>

            {/* formparraalx */}
            <main className='-mt-[37rem]'>
                <ul id="cards">
                    <li className="cardParallax" id="card_1">
                        <div className="card__content  " >
                            <div>

                            </div>
                            <figure >
                                <img src={slider2} alt="img" className='!mb-24' />

                            </figure>
                        </div>
                    </li>
                    <li className="cardParallax" id="card_2">
                        <div className="card__content ">
                            <div>

                            </div>
                            <figure >
                                <img src={slider3} alt="img" className='!mb-24'/>

                            </figure>
                        </div>
                    </li>
                    <li className="cardParallax" id="card_3">
                        <div className="card__content ">
                            <div>

                            </div>
                            <figure>
                                <img src={slider4} alt="img" className='!mb-24'/>

                            </figure>
                        </div>
                    </li>
                    <li className="cardParallax" id="card_4">
                        <div className="card__content ">
                            <div>

                            </div>
                            <figure className=''>
                                <img src={slider1} alt="img" className=' -mb-12' />

                            </figure>
                        </div>
                    </li>
                </ul>
            </main>
            {/* formparraalx  end*/}
            <Swiper
                pagination={{
                    dynamicBullets: true,
                }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                loop={true}

                modules={[Pagination]}
                className="landSection2Swiper md:hidden block"
            >
                {ExtraIncome.map((data, id) => (
                    <SwiperSlide key={id} >
                        <img src={data?.mImg} alt="img" loading='lazy' className='-mb-10 relative' />
                        <div className="absolute top-[40%] left-5 -z-10 w-[60%] h-[30%] bg-[#FFEDE3] rounded-full"></div>
                        <div className="absolute top-[20%] right-5 -z-10 w-[60%] h-[30%] bg-[#FFEDE3] rounded-full"></div>
                        <h3 key={id} className="text-[#3D3E3E] text-2xl font-bold w-[96%]  text-center mx-auto mb-2" >{data.heading}</h3>
                        <p className="font-medium text-[#7C7C7C] text-base w-[96%] mb-6 text-center mx-auto">{data.para}</p>
                        <div className='mx-auto text-center'>
                            <Link to='' className='bg-white rounded-full font-bold text-base border border-[#E78353] text-[#FA6F2C] px-5 py-2.5'>Start Earning Now</Link>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    )
}

export default Section3