import React from 'react'
import img from '../../images/chooseUs.png'
import MImg from '../../images/MchooseUs.png'
import downloadIcon from '../../images/download-Icon.svg'
import bagIcon from '../../images/bagIcon.svg'
import locationIcon from '../../images/locationIcon.svg'
import growIcon from '../../images/growIcon.svg'

const Section5 = () => {
    return (
        <section className='container mx-auto md:py-10 max-w-7xl wrap '>
            <h1 className='text-center font-bold md:text-5xl text-[1.75rem] font-head mb-16 text-[#3D3E3E]'>Why  <span className='text-[#E78353]'> Choose Us? </span></h1>
            <img src={img} alt="img" loading='lazy' draggable='false' className='mx-auto md:block hidden' />
            <img src={MImg} alt="img" loading='lazy' draggable='false' className='mx-auto md:hidden block' />
            <ul className='p-4 md:px-[102px] md:py-12 rounded-2xl mt-8 md:mt-16 gap-6 md:grid md:grid-cols-4 grid-cols-4 justify-between bg-gradient-to-r from-[#FFA24C] to-[#9F5EFF] hidden '>
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
        </section>
    )
}

export default Section5