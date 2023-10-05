import React from 'react'
import { Link } from 'react-router-dom'
import mobile from '../../images/mobile1.webp'

const Section11 = () => {
    return (
        <section className='section9 container mx-auto md:py-16 max-w-7xl wrap '>
            <div className="grid md:grid-cols-12 py-5 md:px-[102px]">
                <div className='md:col-span-6 col-span-2'>
                    <div className='space-y-3'>
                        <h1 className='text-[#E78353] font-bold md:text-[2.6rem] text-[1.75rem] md:text-start text-center font-head md:-mt-[36rem]'>Learn New Skills In the Simplest Way Possible </h1>
                        <p className='text-[#7C7C7C] md:font-bold font-medium md:text-start text-center text-base md:text-lg'>Now Get new skills with the help of our specially curated content & increase your salary.</p>
                    </div>
                    <img src={mobile} alt="mobile" className='block md:hidden mx-auto' loading='lazy' />
                    <div className="flex flex-row md:gap-6 md:pt-10 justify-between text-center flex-wrap md:mb-8 mb-6">
                        <div>
                            <h2 className='font-bold text-[#3D3E3E] md:text-[32px] text-[20px]'>1000 +</h2>
                            <p className='font-medium text-[#7C7C7C] md:text-base text-[14px]'>Tutorial Series</p>
                        </div>
                        <div>
                            <h2 className='font-bold text-[#3D3E3E] md:text-[32px] text-[20px]'>50 +</h2>
                            <p className='font-medium text-[#7C7C7C] md:text-base text-[14px]'>Videos Category</p>
                        </div>
                        <div>
                            <h2 className='font-bold text-[#3D3E3E] md:text-[32px] text-[20px]'>250+</h2>
                            <p className='font-medium text-[#7C7C7C] md:text-base text-[14px]'>Watched Hours</p>
                        </div>
                    </div>
                    <p className='text-[#7C7C7C] font-medium text-base md:mb-8 md:text-start text-center mb-6 md:text-lg'>Our Videos have been created in such a way that a 5 minute video will clear all your doubts, weather you want to enter into a different field or just improve your knowledge</p>
                    <div className='md:text-start text-center'>
                        <Link to="/" className='rounded-3xl font-bold bg-white px-4 py-2 border-[#E78353] border-2 text-[#E78353]'>Start Learning Now</Link>
                    </div>
                </div>
                {/* <div className="md:col-span-4 col-span-2"> */}
                    {/* <img src={mobile} alt="mobile" /> */}
                {/* </div> */}
            </div>

        </section>
    )
}

export default Section11