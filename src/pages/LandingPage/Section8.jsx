import React from 'react'
import partnerImg from '../../images/partnerImg.png'
import MobilepartnerImg from '../../images/mobilepartnerImg.png'

const Section8 = () => {
  return (
    <section className='section2 container mx-auto md:py-16 max-w-7xl wrap '>
        <h1 className='text-center font-bold md:text-5xl text-[1.75rem] font-head md:mb-16 mb-8 text-[#3D3E3E]'>Our <span className='text-[#E78353]'> Client </span> </h1>
        <img src={partnerImg} alt="img" loading='lazy' className='max-w-full hidden md:mx-auto md:block' draggable='false' />
        <img src={MobilepartnerImg} alt="img" loading='lazy' className='max-w-full md:hidden mx-auto' draggable='false' />
    </section>
  )
}

export default Section8