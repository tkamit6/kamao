import React from 'react'
import downloadIcon from '../../images/download.svg'
import bagIcon from '../../images/bag.svg'
import locationIcon from '../../images/location.svg'
import growIcon from '../../images/graph.svg';
import {motion} from 'framer-motion';

const Section2 = () => {
    return (
        <motion.section initial={{opacity:0, y:100}} animate={{opacity:1, y:0}} transition={{delay:0.950}} className='landSection2 container mx-auto md:py-16 max-w-7xl wrap '>
            <h1 className='text-center mx-auto font-bold md:text-5xl text-[1.75rem] leading-9 font-head  text-[#3D3E3E]'>We Believe that<span className='text-[#E78353] font-head'> outstanding customer <br /> experience </span> are a direct result</h1>
            <ul className='divc p-4 md:px-[102px] rounded-2xl mt-8 md:gap-6 gap-1 grid grid-cols-4 justify-between'>
                <li className='items-center md:col-span-1 col-span-2 flex flex-row gap-4 '>
                    <img src={downloadIcon} alt="img" draggable='false' loading='lazy' className='md:h-[49px] h-[48px]' />
                    <div>
                        <p className='font-bold md:text-[32px] md:text-3xl text-xl text-[#6F2ECF]'>500 +</p>
                        <p className='md:text-base md:font-bold font-medium text-sm text-[#7C7C7C]'>Downloads</p>
                    </div>
                </li>
                <li className='items-center md:col-span-1 col-span-2 flex flex-row gap-4'>
                    <img src={bagIcon} alt="img" draggable='false' loading='lazy' className='md:h-[49px] h-[48px]' />
                    <div>
                        <p className='font-bold text-[32px] md:text-3xl text-xl text-[#007CC2]'>5000 +</p>
                        <p className='md:text-base md:font-bold font-medium text-sm text-[#7C7C7C]'>Job oppurtinities</p>
                    </div>
                </li>
                <li className='items-center md:col-span-1 col-span-2 flex flex-row gap-4'>
                    <img src={locationIcon} alt="img" draggable='false' loading='lazy' className='md:md:h-[49px] h-[48px]' />
                    <div>
                        <p className='font-bold text-[32px] md:text-3xl text-xl text-[#F8BB34]'>1700 +</p>
                        <p className='md:text-base md:font-bold font-medium text-sm text-[#7C7C7C]'>Pincode</p>
                    </div>
                </li>
                <li className='items-center md:col-span-1 col-span-2 flex flex-row gap-4'>
                    <img src={growIcon} alt="img" draggable='false' loading='lazy' className='md:md:h-[49px] h-[48px]' />
                    <div>
                        <p className='font-bold text-[32px] md:text-3xl text-xl text-[#00A271]'>10 crore +</p>
                        <p className='md:text-base md:font-bold font-medium text-sm text-[#7C7C7C]'>User Earnings</p>
                    </div>
                </li>
            </ul>
        </motion.section>
    )
}

export default Section2