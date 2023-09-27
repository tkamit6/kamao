import React from 'react'
import imgMan from '../../images/main-group.webp'
import { Link } from 'react-router-dom'

const Section1 = () => {
    return (
        <section className='business container mx-auto bg-[#FFF5EF] mt-2 pb-8 rounded-lg max-w-7xl wrap'>
        <span className='business1'></span>
        <span className='businessBottomRight'></span>
            <div className="md:mx-28 mx-8">
                <div className="grid grid-col-3 md:grid-cols-12 items-center justify-between">
                    <div className="text-center md:text-start col-span-3 md:col-span-6 order-2 md:order-none">
                        <h2 className='font-bold text-[32px] md:text-5xl font-head md:mb-6 mb-3 md:leading-tight text-[#0D0E0E]'>Bridging The Gap <br /> Between <span className='text-[#E16428]'> Business </span> <br /> And <span className='text-[#E16428]'> Gig Workers</span></h2>
                        <p className='text-[#7C7C7C] font-medium text-base md:w-96 mb-6 md:text-justify'>Lorem ipsum dolor sit amet consectetur. Velit luctus pulvinar augue morbi ultricies tristique integer tincidunt pellentesque. Nisi faucibus a justo bibendum.</p>
                        <Link to="/" className='rounded-3xl font-bold bg-white px-4 py-2 border-[#E78353] border-2 text-[#E78353]'>Get Started</Link>
                    </div>
                    <div className="col-span-3 md:col-span-6  order-1 md:order-none">
                        <img src={imgMan} alt="img" loading='lazy' className='md:me-4 mx-auto mb-6' draggable='false' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section1