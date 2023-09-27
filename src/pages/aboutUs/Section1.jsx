import React from 'react'
import img from '../../images/about-us/Group183.png'

export default function Section1() {
    return (
        <section className='container mx-auto bg-[#FFF5EF] md:mb-8 md:mt-2 py-0 max-w-7xl wrap '>
            <div className='text-center md:pt-16 mt-6'>
                <h2 className='font-medium md:text-[3rem] text-[2rem] md:leading-[3.875rem] leading-[2.53rem] text-[#0D0E0E] font-head'>We are changing the shape of gig <br /> <span className='text-[#E78353] font-head'>economy</span></h2>
                <img src={img} alt="img" className='md:h-[486px] h-[189px] mx-auto'  />
            </div>
        </section>
    )
}
