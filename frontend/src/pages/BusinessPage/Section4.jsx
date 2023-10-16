import React, { useEffect, useState } from 'react'
import img from '../../images/sliderBanner.webp'
import img1 from '../../images/sliderBanner1.webp'
import img2 from '../../images/sliderBanner2.webp'
import img3 from '../../images/sliderBanner3.webp'
import img4 from '../../images/sliderBanner4.webp'
import Mimg from '../../images/MsliderBanner.png'
import Mimg1 from '../../images/MsliderBanner1.webp'
import Mimg2 from '../../images/MsliderBanner2.webp'
import Mimg3 from '../../images/MsliderBanner3.webp'
import Mimg4 from '../../images/MsliderBanner4.webp'
import downloadIcon from '../../images/download-Icon.svg'
import bagIcon from '../../images/bagIcon.svg'
import locationIcon from '../../images/locationIcon.svg'
import growIcon from '../../images/growIcon.svg'
import '../../custom.css'


const Section4 = () => {

    const data = [
        { name: "Share your requirement", img: img, Mobileimg: Mimg },
        { name: "Analyzing the requirement", img: img1, Mobileimg: Mimg1 },
        { name: "Signing the contract", img: img2, Mobileimg: Mimg2 },
        { name: "Allocating best resources", img: img3, Mobileimg: Mimg3 },
        { name: "Pay for the outcome", img: img4, Mobileimg: Mimg4 }
    ]
    const [toggleState, setToggleState] = useState(0);
    const [isTabActive, setIsTabActive] = useState(false);
    const [preState, setPreState] = useState(0)

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;
            // console.log(currentScrollPos);
            if (currentScrollPos > preState) {
                if (currentScrollPos >= 6301 && scrollY <= 8500) {
                    setToggleState(4)
                } else if (currentScrollPos >= 5301 && scrollY <= 6300) {
                    setToggleState(3)
                } else if (currentScrollPos >= 4301 && scrollY <= 5300) {
                    setToggleState(2)
                }
                else if (currentScrollPos >= 3301 && scrollY <= 4300) {
                    setToggleState(1)
                } else if (currentScrollPos >= 2300 && scrollY <= 3300) {
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

        <section id='howitworks' className='BusinessSection4 container mx-auto md:py-16 md:ps-10 wrap max-w-7xl bg-white'>
            <div className='stick-para'>
                <h1 className='text-center relative font-bold md:text-5xl text-[1.75rem] font-head md:mb-36 mb-12 text-[#3D3E3E] z-40'>How it  <span className='text-[#E78353]'> Works? </span></h1>
                <div  className="grid md:grid-cols-4 pt-10 md:mx-5 md:-mt-44 items-center">
                    <div className="md:col-span-2 rounded-2xl hidden md:block">
                        <ul className="tabList">
                            {
                                data.map((list, id) => (
                                    <div key={id}>
                                        {toggleState === id && <p className='py-2 text-[#7C7C7C] font-bold text-2xl'> Step <span>{id + 1}</span> </p>}
                                        <p onClick={() => hangeHandle(id)} className={`${toggleState === id ? "text-[#E16428] font-bold text-[42px] transition duration-700 ease-in-out" : "text-[#3D3E3E] font-normal text-[28px] my-12"} cursor-pointer`}>{list.name}</p>
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
                                    <p className="text-center text-[#E78353] font-bold text-[28px] w-[89%] mx-auto pb-5">{list.name}</p>
                                </div>
                            ))
                        }

                        <ul className='divc p-4 md:px-[102px] rounded-2xl mt-8 md:gap-6 gap-1 grid grid-cols-4 justify-between bg-gradient-to-r from-[#FFA24C] to-[#9F5EFF]'>
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
                        </ul>
                    </div>
                </div>
            </div>
            {/* formparraalx */}
            <main className='-mt-[37rem] md:block hidden max-w-7xl'>
                <ul id="cards">
                    <li className="cardParallax " id="card_1">
                        <div className="card__content" >
                            <div>

                            </div>
                            <figure >
                                <img src={img} alt="img" className='!mb-24 -z-50' />

                            </figure>
                        </div>
                    </li>
                    <li className="cardParallax" id="card_2">
                        <div className="card__content ">
                            <div>

                            </div>
                            <figure >
                                <img src={img1} alt="img" className='!mb-24 ' />

                            </figure>
                        </div>
                    </li>
                    <li className="cardParallax" id="card_3">
                        <div className="card__content ">
                            <div>

                            </div>
                            <figure>
                                <img src={img2} alt="img" className='!mb-24' />

                            </figure>
                        </div>
                    </li>
                    <li className="cardParallax" id="card_4">
                        <div className="card__content ">
                            <div>

                            </div>
                            <figure className=''>
                                <img src={img3} alt="img" className=' -mb-12 z-30' />

                            </figure>
                        </div>
                    </li>
                    <li className="cardParallax" id="card_4">
                        <div className="card__content ">
                            <div>
                            </div>
                            <figure className=''>
                                <img src={img4} alt="img" className=' -mb-12 z-30' />
                            </figure>
                        </div>
                    </li>
                </ul>
            </main>
            {/* formparraalx  end*/}
        </section>
    )
}


export default Section4