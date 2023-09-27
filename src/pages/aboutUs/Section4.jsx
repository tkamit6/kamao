import React from 'react'
import img from '../../images/about-us/smiling.png'

export default function Section4() {
    return (
        <section className='container mx-auto bg-[#FFF5EF] md:my-8 md:pt-16 max-w-7xl py-0 wrap '>
            <div className='grid md:grid-cols-12 items-center md:mx-[102px] mx-3 md:py-0 py-6 gap-x-12 '>
                <div className="col-span-6">
                    <h3 className='font-head text-[#E78353] md:text-[2.63rem] md:text-start text-center mb-6 text-[28px] font-bold '>About The Founder</h3>
                    <img src={img} alt="img" className='md:hidden block mb-6' />
                    <p className='font-medium md:text-lg md:leading-23px text-[#7C7C7C]'>Lorem ipsum dolor sit amet consectetur. Turpis sed lectus at nibh non ut felis. Lectus imperdiet odio cursus quis lacus. Nec sagittis nec aliquam erat scelerisque dignissim aliquet faucibus. Pellentesque amet orci sed egestas tortor. Dictum mi id volutpat amet sit ac  Lorem ipsum dolor sit amet consectetur. Turpis sed lectus at nibh non ut felis. Lectus imperdiet odio cursus quis lacu que dignissim aliquet faucibus. Pellentesque amet orci sed egestas tortor. Dictum mi id volutpat amet sit ac  Lorem ipsum dolor sit amet consectetur. Turpis sed lectus at nibh non ut felis. Lectus imperdiet odio cursus quis lacu</p>
                </div>
                <div className="col-span-6 mx-auto md:block hidden">
                    <img src={img} alt="img" />
                </div>
            </div>
        </section>
    )
}
