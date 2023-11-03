import React, { useEffect, useState } from 'react'
import img1 from '../../images/sliderBanner1.webp'
import img2 from '../../images/sliderBanner2.webp'
import img3 from '../../images/sliderBannerEarning.webp'
import imgGirl from '../../images/sliderBannerGirl.webp'
import MimgGirl from '../../images/MsliderBannerGirl.webp'
import Mimg1 from '../../images/MsliderBanner1.webp'
import Mimg2 from '../../images/MsliderBanner2.webp'
import Mimg3 from '../../images/MsliderBannerEarning.webp'
import '../../custom.css'


const Section3 = () => {

    const data = [
        { name: "Fill the Enrollment form", img: imgGirl, Mobileimg: MimgGirl },
        { name: "One - time expert guidance", img: img1, Mobileimg: Mimg1 },
        { name: "Build or get a team assigned", img: img2, Mobileimg: Mimg2 },
        { name: "Start earning", img: img3, Mobileimg: Mimg3 },
    ]
    const [toggleState, setToggleState] = useState(0);
    const [isTabActive, setIsTabActive] = useState(false);
    const [preState, setPreState] = useState(0)

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;
            // console.log(currentScrollPos);
            if (currentScrollPos > preState) {
                if (currentScrollPos >= 4400 && scrollY <= 5000) {
                    setToggleState(3)
                } else if (currentScrollPos >= 3400 && scrollY <= 4400) {
                    setToggleState(2)
                }
                else if (currentScrollPos >= 2400 && scrollY <= 3400) {
                    setToggleState(1)
                } else if (currentScrollPos >= 1500 && scrollY <= 2400) {
                    setToggleState(0)
                }
            }
        }
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [toggleState, isTabActive, preState])

    const hangeHandle = (index) => {
        setToggleState(index)
        setIsTabActive(true);
    }

    return (

        <section className='container teamLeaderSection3 mx-auto md:py-16 md:ps-10 wrap md:mb-20 max-w-7xl bg-white'>
            <div className='stick-para'>
                <h1 className='text-center relative font-bold md:text-[2.62rem] text-[1.75rem] font-head md:mb-[13rem] mb-12 text-[#3D3E3E]'>How to Become a <span className='text-[#E78353] font-head'>Team Leader </span></h1>
                <div className="grid md:grid-cols-4 pt-10 md:mx-5 md:-mt-44 items-center">
                    <div className="md:col-span-2 rounded-2xl hidden md:block">
                        <ul className="tabList">
                            {
                                data.map((list, id) => (
                                    <div key={id}>
                                        {toggleState === id && <p className='py-2 text-[#7C7C7C] font-bold text-2xl'> Step <span>{id + 1}</span> </p>}
                                        <p onClick={() => hangeHandle(id)} className={`${toggleState === id ? "text-[#E16428] font-bold text-[40px]" : "text-[#3D3E3E] font-normal text-[28px] my-12"} cursor-pointer `}>{list.name}</p>
                                    </div>
                                ))
                            }
                        </ul>
                    </div>

                    <div className="md:col-span-2 rounded-2xl hidden md:block">
                        <div className="content ">
                            {/* <img src={data[toggleState].img} className='w-2/3 mx-auto relative' style={{ zIndex: 'auto' }} alt="img" loading='lazy' draggable="false" /> */}
                        </div>
                    </div>

                    <div className='items-center md:hidden block'>
                        {/* for mobile */}
                        {
                            data.map((list, id) => (
                                <div key={id}>
                                    <img src={list?.Mobileimg} alt="img" loading='lazy' className='mx-auto' />
                                    <p className='text-center font-bold text-lg text-[#7C7C7C] pt-4'>{`Step ${id + 1}`}</p>
                                    <p className="text-center text-[#E16428] w-[98%] mx-auto font-bold text-[28px] pb-5">{list.name}</p>
                                </div>
                            ))
                        }


                    </div>
                </div>
            </div>
            {/* formparraalx */}
            <main className='-mt-[37rem] md:block hidden'>
                <ul id="cards ">
                    <li className="cardParallax" id="card_1">
                        <div className="card__content  " >
                            <img src={img1} alt="img" className='!mb-24' />
                            <div>
                            </div>
                        </div>
                    </li>
                    <li className="cardParallax" id="card_2">
                        <div className="card__content ">
                            <img src={img2} alt="img" className='!mb-24' />
                            <div>
                            </div>
                        </div>
                    </li>
                    <li className="cardParallax" id="card_3">
                        <div className="card__content ">
                            <img src={img3} alt="img" className='' />
                            <div></div>
                        </div>
                    </li>
                    <li className="cardParallax" id="card_3">
                        <div className="card__content ">
                            <figure>
                                <img src={imgGirl} alt="img" className='' />
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

export default Section3