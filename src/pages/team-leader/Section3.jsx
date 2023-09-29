import React, { useEffect, useState } from 'react'
import img1 from '../../images/sliderBanner1.webp'
import img2 from '../../images/sliderBanner2.webp'
import img3 from '../../images/sliderBannerEarning.webp'
import imgGirl from '../../images/sliderBannerGirl.webp'
import MimgGirl from '../../images/MsliderBannerGirl.webp'
import Mimg1 from '../../images/MsliderBanner1.webp'
import Mimg2 from '../../images/MsliderBanner2.webp'
import Mimg3 from '../../images/MsliderBannerEarning.webp'
import S from '../../pages/BusinessPage/S'
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
                if (currentScrollPos >= 2200 && scrollY <= 3100) {
                    setToggleState(3)
                } else if (currentScrollPos >= 1900 && scrollY <= 3100) {
                    setToggleState(2)
                }
                else if (currentScrollPos >= 1750 && scrollY <= 3100) {
                    setToggleState(1)
                } else if (currentScrollPos >= 1500 && scrollY <= 3100) {
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

        <section className='container mx-auto md:py-16 md:ps-10 wrap max-w-7xl bg-white'>
            <div className='stick-parallax'>
                <h1 className='text-center relative font-bold md:text-[2.62rem] text-[1.75rem] font-head md:mb-16 mb-12 text-[#3D3E3E] z-40'>How to Become a <span className='text-[#E78353]'>Team Leader </span></h1>
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
                            <img src={data[toggleState].img} className='w-2/3 mx-auto relative' style={{ zIndex: 'auto' }} alt="img" loading='lazy' draggable="false" />
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

                        {/* <ul className='divc p-4 md:px-[102px] rounded-2xl mt-8 md:gap-6 gap-1 grid grid-cols-4 justify-between bg-gradient-to-r from-[#FFA24C] to-[#9F5EFF]'>
                            <li className='items-center md:col-span-1 col-span-2 flex flex-row gap-4 '>
                                <img src={downloadIcon} alt="img" draggable='false' loading='lazy' />
                                <div className='text-white '>
                                    <p className='font-bold md:text-[32px] text-xl'>500+</p>
                                    <p className=' md:text-lg text-xs'>Downloads</p>
                                </div>
                            </li>
                            <li className='items-center md:col-span-1 col-span-2 flex flex-row gap-4'>
                                <img src={bagIcon} alt="img" draggable='false' loading='lazy' />
                                <div className='text-white '>
                                    <p className='font-bold text-[32px] text-xl'>5000+</p>
                                    <p className=' md:text-lg text-xs'>Job oppurtinities</p>
                                </div>
                            </li>
                            <li className='items-center md:col-span-1 col-span-2 flex flex-row gap-4'>
                                <img src={locationIcon} alt="img" draggable='false' loading='lazy' />
                                <div className='text-white '>
                                    <p className='font-bold text-[32px] text-xl'>1700+</p>
                                    <p className=' md:text-lg text-xs'>Pincode</p>
                                </div>
                            </li>
                            <li className='items-center md:col-span-1 col-span-2 flex flex-row gap-4'>
                                <img src={growIcon} alt="img" draggable='false' loading='lazy' />
                                <div className='text-white '>
                                    <p className='font-bold text-[32px] text-xl'>10 crore +</p>
                                    <p className=' md:text-lg text-xs'>User Earnings</p>
                                </div>
                            </li>
                        </ul> */}
                    </div>
                </div>
            </div>
            <S />
        </section>
    )
}

export default Section3