import React from 'react'
import { Link } from 'react-router-dom'
import tick from '../../images/tick.svg'
import tick1 from '../../images/growth.svg'
import tick2 from '../../images/tick2.svg'
import tick3 from '../../images/tick3.svg'
import AppStoreImg from '../../images/AppStore.png'
import playStoreImg from '../../images/playStore.png'
import mobile from '../../images/mobile.png'

const Section9 = () => {
    return (
        <section className='section9 container mx-auto md:py-16 max-w-7xl wrap '>
            <div className="grid md:grid-cols-4 py-5 md:px-[102px]">
                <div className='col-span-2'>
                <div className='md:mb-12 mb-auto'>
                    <h1 className='text-[#E78353] font-bold md:text-[2.6rem] text-[1.75rem] md:text-start text-center font-head md:-mt-[36rem]'>India Best Job Finding Platform</h1>
                    <p className='text-[#7C7C7C] md:font-bold font-medium text-base md:text-lg'>Earn via referencing Kamaao jobs as well Earn via referencing Kamaao jobs as wellEarn via referencing Kamaao jobs as well.</p>
                    <img src={mobile} alt="mobile" className='block md:hidden mx-auto' loading='lazy' />
                </div>
                    <ul className='flex flex-row flex-wrap md:gap-x-10 md:gap-y-6 md:gap-0 gap-3 md:justify-start justify-center'>
                        <li className='text-[#000000] md:text-base text-xs font-normal md:w-[36%] w-[45%] gap-3 bg-[#FFFFFF] flex items-center shadow-lg md:p-4 p-2 rounded-lg'><img src={tick} alt="img" loading='lazy' /> End to End Excecution</li>
                        <li className='text-[#000000] md:text-base text-xs font-normal md:w-[36%] w-[45%] gap-3 bg-[#FFFFFF] flex items-center shadow-lg md:p-4 p-2 rounded-lg'><img src={tick2} alt="img" loading='lazy' /> Pay only for results </li>
                        <li className='text-[#000000] md:text-base text-xs font-normal md:w-[36%] w-[45%] gap-3 bg-[#FFFFFF] flex items-center shadow-lg md:p-4 p-2 rounded-lg'><img src={tick1} alt="img" loading='lazy' /> Scale faster</li>
                        <li className='text-[#000000] md:text-base text-xs font-normal md:w-[36%] w-[45%] gap-3 bg-[#FFFFFF] flex items-center shadow-lg md:p-4 p-2 rounded-lg'><img src={tick3} alt="img" loading='lazy' /> Zero fixed cost</li>
                        <li className='text-[#000000] md:mt-10 mt-2 md:w-[37%] w-[45%] gap-3  flex items-center rounded-lg'><Link to='#'><img src={AppStoreImg} alt="img" loading='lazy'  /></Link></li>
                        <li className='text-[#000000] md:mt-10 mt-2 md:w-[40%] w-[45%] gap-3  flex items-center rounded-lg'><Link to='#'><img src={playStoreImg} alt="img" loading='lazy' /></Link></li>
                    </ul>
                </div>
                {/* <div className="col-span-2">
s
            </div> */}
            </div>

        </section>
    )
}

export default Section9