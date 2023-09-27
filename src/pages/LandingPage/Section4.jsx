import React from 'react'
import deliveryBoy from '../../images/landingPage/deliveryBoy.png';
import warehouseBoy from '../../images/landingPage/warehouseBoy.png';
import carDriver from '../../images/landingPage/carDriver.png';
import dataEntry from '../../images/landingPage/dataEntry.png'
import kycBoy from '../../images/landingPage/kycBoy.png';
import salesBoy from '../../images/landingPage/salesBoy.png';
import electrician from '../../images/landingPage/electrician.png';
import assistant from '../../images/landingPage/assistant.png'
import { Link } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs'

const Section4 = () => {
    const offerData = [
        { name: "Delivery Jobs", img: deliveryBoy },
        { name: "Warehouse", img: warehouseBoy },
        { name: "Cab/Bike Drivers", img: carDriver },
        { name: "Data Entry", img: dataEntry },
        { name: "KYC Field Executive", img: kycBoy },
        { name: "Sales", img: salesBoy },
        { name: "Electrician", img: electrician },
        { name: "Office Assitant", img: assistant },
    ]
    return (
        <section className='container mx-auto md:py-16 wrap max-w-7xl'>
            <h1 className='text-center mx-auto font-bold md:text-5xl text-[1.75rem] leading-9 font-head md:w-auto w-[90%] text-[#3D3E3E]'>We Offer<span className='text-[#E78353] font-head'> Multiple Job </span>Opportunities</h1>

            <div className='md:py-14 md:flex flex-wrap md:gap-y-16 md:gap-x-36 justify-evenly hidden'>
                {offerData.map((data, id) => (
                    <div key={id} className='text-center'>
                        <img src={data.img} alt="img" loading='lazy' style={{ width: '195px', height: '200px' }} />
                        <p className='font-bold md:text-xl md:pt-6 text-[#7C7C7C]'>{data.name}</p>
                    </div>
                ))}
            </div>
            <div className='md:py-14 py-8 md:hidden flex-wrap md:gap-40 gap-8 justify-between flex'>
                {offerData.slice(0, 4).map((data, id) => (
                    <div key={id} className='text-center md:w-auto w-[45%]'>
                        <img src={data.img} alt="img" loading='lazy' />
                        <p className='font-bold md:text-xl text-lg pt-6 text-[#7C7C7C]'>{data.name}</p>
                    </div>
                ))}
            </div>
            <div className='mx-auto text-center items-center flex justify-center '>
                <Link to='' className='text-[#FA6F2C] w-[12%] p-5 flex relative rounded-full items-center border border-[#FA6F2C] py-2  font-bold text-base' >Apply Now <BsArrowRight className='absolute items-center top-3 right-6' /> </Link>
            </div>
        </section>
    )
}

export default Section4