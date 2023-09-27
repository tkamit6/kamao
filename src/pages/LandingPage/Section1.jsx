import React from 'react'
import AppStore from '../../images/AppStore.svg'
import Typewriter from 'typewriter-effect';
import playStore from '../../images/playStore.svg'
import { Link } from 'react-router-dom';

const Section1 = () => {

    return (
        <section className='landSection1 container mx-auto md:mt-2 md:pb-8 max-w-7xl wrap '>
            <div className='grid sm:grid-cols-2 md:mx-[102px] md:my-[130px] md:text-start text-center'>
                <div className='sm:col-span-1 md:pt-2 pt-72 mx-auto w-[90%]'>
                <div className='md:w-[90%]'>
                    <h2 className='md:text-[3rem] font-bold font-head text-[#3D3E3E] md:leading-[3.8rem] text-[2rem] leading-[2.5rem] md:mb-0 mb-3 '>Kamaao is a one stop solution to <br /> <span className='text-[#E16428]'>
                        <Typewriter
                            options={{
                                strings: ['Apply for jobs', 'complete finance projects', 'Refer and Earn', 'Learn new skills', 'Buy products'],
                                autoStart: true,
                                loop: true,
                                className:'font-head'
                            }}
                        />
                    </span></h2>
                    <p className='text-[#7C7C7C] md:text-base font-medium md:pt-6 md:pb-8 w-[86%] md:mb-0 mb-6'>Lorem ipsum dolor sit amet consectetur. Velit luctus pulvinar augue morbi ultricies tristique integer tincidunt pellentesque. Nisi faucibus a justo bibendum.</p>
                    <div className="flex flex-row items-center md:gap-8 gap-4 md:justify-start justify-between flex-wrap">
                        <Link to='/' className='md:w-auto w-[45%]'> <img src={AppStore} alt="logo" loading='lazy' /></Link>
                        <Link to='/' className='md:w-auto w-[45%]'><img src={playStore} alt="logo" loading='lazy' /></Link>
                    </div>

                </div>
                </div>
                <div className='sm:col-span-1'></div>
            </div>
        </section>
    )
}

export default Section1