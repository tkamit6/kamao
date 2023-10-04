import React from 'react'
import img1 from '../../images/landingPage/Group155.webp'
import closeCircle from '../../images/landingPage/close-circle.svg'
import tickCircle from '../../images/landingPage/tick-circle.svg'
import tickCircleWhite from '../../images/landingPage/tickCircleWhite.svg'
import { Link } from 'react-router-dom'

const Section9 = () => {
    return (
        <section className='landingPageSection9 landingPage9 container mx-auto bg-[#FFF5EF] rounded-3xl md:py-16 max-w-7xl wrap '>
            <div className="grid md:mx-[102px] md:grid-cols-7 gap-2 items-center">
                <div className="col-span-4 md:mx-0 mx-auto w-[90%]">
                    <h3 className='text-[#E78353] md:text-start text-center md:mx-0 mx-auto mb-6 font-head font-bold md:text-[42px] md:leading-[40px] text-[28px]'>Why Choose the Kamaao  App ?</h3>
                    <p className='text-[#7C7C7C] md:text-start text-center font-medium md:text-lg md:leading-[23px] text-[16px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                <div className="md:col-span-3 col-span-4 md:mx-auto">
                    <img src={img1} alt="img" loading='lazy' className='md:w-[auto] w-[70%] md:mx-0 mx-auto' />
                </div>
            </div>
            <div className="md:grid md:grid-cols-4 flex overflow-auto md:mx-[102px] mx-auto md:w-auto w-[90%] mt-16 gap-6">
                <div className="col-span-1 bg-white rounded-lg p-6">
                    <p className='md:mb-9 mb-6 text-[#3D3E3E] font-bold md:text-xl text-base'> Features </p>
                    <ul className='md:w-auto w-[7rem]'>
                        <li className='mb-7 font-bold text-[#7C7C7C] md:text-lg text-sm'>Refer & Earn</li>
                        <li className='mb-7 font-bold text-[#7C7C7C] md:text-lg text-sm'>Extra Incentive</li>
                        <li className='mb-7 font-bold text-[#7C7C7C] md:text-lg text-sm'>Part Time</li>
                        <li className='mb-7 font-bold text-[#7C7C7C] md:text-lg text-sm'>Finance Projects</li>
                        <li className='mb-7 font-bold text-[#7C7C7C] md:text-lg text-sm'>Zero Hiring Cost</li>
                        <li className='font-bold text-[#7C7C7C] md:text-lg text-sm' >Job Contract</li>
                    </ul>
                </div>
                <Link to=''>
                    <div className="col-span-1 text-center p-6 bg-[#FA6F2C] text-white rounded-lg">
                        <p className='md:mb-10 mb-7 text-white font-bold md:text-xl text-base'> Kamaao </p>
                        <ul className='w-fit mx-auto'>
                            <li className='md:mb-8 mb-7'><img src={tickCircleWhite} alt="img" className='md:w-[100%] w-[20px]' /></li>
                            <li className='md:mb-8 mb-7'><img src={tickCircleWhite} alt="img" className='md:w-[100%] w-[20px]' /></li>
                            <li className='md:mb-8 mb-7'><img src={tickCircleWhite} alt="img" className='md:w-[100%] w-[20px]' /></li>
                            <li className='md:mb-8 mb-7'><img src={tickCircleWhite} alt="img" className='md:w-[100%] w-[20px]' /></li>
                            <li className='md:mb-8 mb-7'><img src={tickCircleWhite} alt="img" className='md:w-[100%] w-[20px]' /></li>
                            <li ><img src={tickCircleWhite} alt="img" className='md:w-[100%] w-[20px]' /></li>
                        </ul>
                    </div>
                </Link>
                <Link to=''>
                    <div className="col-span-1 text-center p-6 bg-white rounded-lg">
                        <p className='md:mb-10 mb-7 font-bold md:text-xl text-base'> Employers </p>
                        <ul className='w-fit mx-auto'>
                            <li className='mb-8'><img src={closeCircle} alt="img" className='md:w-[100%] w-[20px]' />
                            </li>
                            <li className='md:mb-8 mb-7'><img src={tickCircle} alt="img" className='md:w-[100%] w-[20px]' /></li>
                            <li className='md:mb-8 mb-7'><img src={closeCircle} alt="img" className='md:w-[100%] w-[20px]' /></li>
                            <li className='md:mb-8 mb-7'><img src={tickCircle} alt="img" className='md:w-[100%] w-[20px]' /></li>
                            <li className='md:mb-8 mb-7'><img src={tickCircle} alt="img" className='md:w-[100%] w-[20px]' /></li>
                            <li ><img src={tickCircle} alt="img" className='md:w-[100%] w-[20px]' /></li>
                        </ul>
                    </div>
                </Link>
                <Link to=''>
                    <div className="col-span-1 text-center md:w-auto w-max p-6 bg-white rounded-lg">
                        <p className='md:mb-10 mb-7 w-fit mx-auto font-bold md:text-xl text-base'> Other Apps </p>
                        <ul className='w-fit mx-auto'>
                            <li className='md:mb-8 mb-7'><img src={closeCircle} alt="img" className='md:w-[100%] w-[20px]' /></li>
                            <li className='md:mb-8 mb-7'><img src={tickCircle} alt="img" className='md:w-[100%] w-[20px]' /></li>
                            <li className='md:mb-8 mb-7'><img src={closeCircle} alt="img" className='md:w-[100%] w-[20px]' /></li>
                            <li className='md:mb-8 mb-7'><img src={tickCircle} alt="img" className='md:w-[100%] w-[20px]' /></li>
                            <li className='md:mb-8 mb-7'><img src={tickCircle} alt="img" className='md:w-[100%] w-[20px]' /></li>
                            <li ><img src={closeCircle} alt="img" className='md:w-[100%] w-[20px]' /></li>
                        </ul>
                    </div>
                </Link>

            </div>
        </section>
    )
}

export default Section9