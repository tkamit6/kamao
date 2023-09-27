import React from 'react'
import img from '../../images/about-us/Frame2609273.png'
import target from '../../images/about-us/target.svg'
import eye from '../../images/about-us/eye.svg'
import diomond from '../../images/about-us/diomond.svg'

export default function Section3() {
    return (
        <section className='container mx-auto bg-[#FFF5EF] md:my-8 max-w-7xl md:py-16 py-6 wrap '>
            <div className='grid md:grid-cols-12 items-center mx-3'>
                <div className="col-span-6 md:mb-auto mb-4">
                    <img src={img} alt="img" className='md:h-[354px] h-[238px] mx-auto' draggable='false' />
                </div>
                <div className="col-span-6 grid gap-9 ">
                    <div className='flex items-center space-x-9'>
                        <img src={target} alt="svg" draggable='false' className='md:h-[64px] h-[48px]' />
                        <div className='md:w-[58%] w-auto'>
                            <h3 className='text-[#3D3E3E] font-bold md:text-[2rem] text-xl'>Our Mission</h3>
                            <p className='text-[#7C7C7C] md:text-lg text-base  leading-[23px] font-medium'>Lorem ipsum dolor sit amet consectetur. Velit luctus pulvinar augue morbi ultricies </p>
                        </div>
                    </div>
                    <div className='flex items-center space-x-9'>
                        <img src={eye} alt="svg" draggable='false' className='md:h-[64px] h-[48px]' />
                        <div className='md:w-[58%] w-auto'>
                            <h3 className='text-[#3D3E3E] font-bold md:text-[2rem] text-xl'>Our Mission</h3>
                            <p className='text-[#7C7C7C] md:text-lg text-base leading-[23px] font-medium'>Lorem ipsum dolor sit amet consectetur. Velit luctus pulvinar augue morbi ultricies </p>
                        </div>
                    </div>
                    <div className='flex items-center space-x-9'>
                        <img src={diomond} alt="svg" draggable='false' className='md:h-[64px] h-[48px]' />
                        <div className='md:w-[58%] w-auto'>
                            <h3 className='text-[#3D3E3E] font-bold md:text-[2rem] text-xl'>Our Mission</h3>
                            <p className='text-[#7C7C7C] md:text-lg text-base leading-[23px] font-medium'>Lorem ipsum dolor sit amet consectetur. Velit luctus pulvinar augue morbi ultricies </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
