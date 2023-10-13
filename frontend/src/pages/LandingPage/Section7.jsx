import React, { useEffect, useState } from 'react'
import slider1 from '../../images/landingPage/1.webp'
import slider2 from '../../images/landingPage/2.webp'
import slider3 from '../../images/landingPage/3.webp'
import { Link } from 'react-router-dom'
import imgage1 from '../../images/landingPage/1.webp'
import S from '../../pages/BusinessPage/S'

import { SwiperSlide, Swiper } from 'swiper/react'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import "swiper/css/autoplay";

// import required modules
import { Pagination } from 'swiper/modules';

const Section7 = () => {
    // const ExtraIncome = useContext(MyContext)


    const ExtraIncome = [
        { heading: "Earn an extra incentive via kamaao jobs", para: "At Kamaao we offer you a wide range of jobs opportunity with a pay scale that is higher then the industry standards.", img: slider1 },
        { heading: "Refer Kamaao Jobs and get rewarded", para: "At Kamaao we offer you a wide range of jobs opportunity with a pay scale that is higher then the industry standards.", img: slider2 },
        { heading: "Refer Kamaao App", para: "At Kamaao we offer you a wide range of jobs opportunity with a pay scale that is higher then the industry standards.", img: slider3 },
    ]
    const [toggleState, setToggleState] = useState(0);
    const [isTabActive, setIsTabActive] = useState(false);
    const [preState, setPreState] = useState(0)

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;
            console.log(currentScrollPos + " sec7");
            if (currentScrollPos > preState) {
                if (currentScrollPos >= 10500 && scrollY <= 11000) {
                    setToggleState(2)
                } else if (currentScrollPos >= 9800 && scrollY <= 10500) {
                    setToggleState(1)
                } else if (currentScrollPos >= 9000 && scrollY <= 9800) {
                    setToggleState(0)
                }
            }
        }
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [toggleState, isTabActive, preState])

    const handleClick = (index) => {
        // console.log(index);
        setToggleState(index)
        setIsTabActive(true);
    }

    return (
        <section className='landSection7 bg-[#FFF5EF] container mx-auto md:py-4 max-w-7xl wrap rounded-2xl'>
            <div className='stick-para'>
                <div className="grid md:grid-cols-2 landSection7-bg md:px-[102px] md:py-16 py-6 items-center ">
                    <div className="md:col-span-1 md:my-auto -my-10 ">
                        {/* <img src={ExtraIncome[toggleState]?.img} alt="img" loading='lazy' className='md:block hidden md:h-[41rem]' /> */}
                    </div>
                    <div className="md:col-span-1 md:text-start text-center md:w-[94%] mx-auto w-[90%]">
                        <h2 className='font-head w-[97%] mx-auto mb-3 text-[#E78353] font-bold md:text-[2.6rem] text-[1.7rem]'>Earn more with Kamaao Jobs</h2>
                        <p className='text-[#7C7C7C] font-bold md:text-lg text-base'>Earn via refereing kamaao jobs as well </p>
                        <div className='md:mt-10 my-4 '>
                            {
                                ExtraIncome.map((data, id) => (
                                    <div key={id} onClick={() => handleClick(id)} className={`md:block hidden mb-10 cursor-pointer ${toggleState === id ? "inner-tab active-tab" : "inner-tab"}`}  >
                                        <h3 className="text-[#3D3E3E] text-2xl font-bold" >{data?.heading}</h3>
                                        <p className={`${toggleState === id ? "block" : "hidden"} font-medium text-[#7C7C7C] text-base`}>{data?.para}</p>
                                    </div>
                                ))
                            }

                            {/* mobile */}
                            <div className='md:hidden block  mb-4'>

                                {/* <Swiper
                                    pagination={{
                                        dynamicBullets: true,
                                    }}
                                    autoplay={{
                                        delay: 2500,
                                        disableOnInteraction: false,
                                    }}
                                    loop={true}

                                    modules={[Pagination]}
                                    className="mySwiperr"
                                >

                                    <SwiperSlide>l</SwiperSlide>
                                    <SwiperSlide>l</SwiperSlide>
                                    <SwiperSlide>l</SwiperSlide>
                                </Swiper> */}
                                <img src={imgage1} alt="img" className='mb-3' />
                                <h3 className='text-[#3D3E3E] font-bold text-xl w-[90%] mx-auto leading-6 text-center mb-2'>Earn an extra incentive via Kamaao jobs</h3>
                                <p className='text-[#7C7C7C] mb-6 font-medium text-sm text-center'>At Kamaao we offer you a wide range of jobs opportunity with a pay scale that is higher then the industry standards.</p>
                            </div>
                            <div className='md:mt-8'>
                                <Link to='' className='bg-white rounded-full font-bold text-base border border-[#E78353] text-[#FA6F2C] px-5 py-2.5'>Explore Now</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <S /> */}

            {/* formparraalx */}
            <main className='-mt-[37rem] md:block hidden' >
                <ul id="cards ">
                    <li className="cardParallax" id="card_1">
                        <div className="card__content  " >
                            <figure >
                                <img src={slider1} alt="img" className='!mb-24' />
                            </figure>
                            <div>

                            </div>
                        </div>
                    </li>
                    <li className="cardParallax" id="card_2">
                        <div className="card__content ">
                            <figure >
                                <img src={slider2} alt="img" className='!mb-24' />
                            </figure>
                            <div>

                            </div>
                        </div>
                    </li>
                    <li className="cardParallax" id="card_3">
                        <div className="card__content ">
                            <figure>
                                <img src={slider3} alt="img" className='' />
                            </figure>
                            <div></div>
                        </div>
                    </li>

                </ul>
            </main>
            {/* formparraalx  end*/}
        </section>
    )
}

export default Section7