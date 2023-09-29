import React from 'react'
import img from '../../images/about-us/Group183.png'

export default function Section2() {
    return (
        <section className='container mx-auto md:py-8 max-w-7xl md:mt-2 py-0 wrap '>
            <div className='md:grid md:grid-cols-12 hidden'>
                <div className='col-span-4'>
                    <div className='relative'>
                        <div className="absolute top-20 w-[160px] h-[182px] items-center flex flex-col justify-center rounded-xl bg-[#F7F1FF]">
                            <h3 className='text-[#6F2ECF] text-[2.5rem] font-bold leading-[52px]'> 150 + </h3>
                            <p className='text-[#6F2ECF] font-bold text-xl'>GIGS</p>
                        </div>

                        <div className="absolute top-2 left-[211px] text-center w-[174px] h-[208px] items-center flex flex-col justify-center rounded-xl bg-[#FCF0D4]">
                            <h3 className='text-[#F8BB34] text-[2.5rem] font-bold leading-[52px]'> 2000 + </h3>
                            <p className='text-[#F8BB34] font-bold text-xl'>REGISTERED GIGGERS</p>
                        </div>

                        <div className="absolute top-[254px] left-[198px] text-center w-[148px] h-[182px] items-center flex flex-col justify-center rounded-xl bg-[#E8F9FF]">
                            <h3 className='text-[#007CC2] text-[2.5rem] font-bold leading-[52px]'> 50 + </h3>
                            <p className='text-[#007CC2] font-bold text-xl'>CLIENTS</p>
                        </div>
                    </div>
                </div>
                <div className='col-span-8 md:py-[3.56rem] md:block hidden'>
                    <h2 className='font-head font-bold text-[2.62rem] text-[#3D3E3E]'>Our <span className='font-head text-[#E78353]'>Story</span></h2>
                    <p className='text-lg font-medium leading-[1.43rem] text-[#7C7C7C]'>Lorem ipsum dolor sit amet consectetur. Velit luctus pulvinar augue morbi ultricies tristique integer tincidunt pellentesque. Nisi faucibus a justo bibendum.Lorem ipsum dolor sit amet consectetur. Velit luctus pulvinar augue mor Lorem ipsum dolor sit amet consectetur ultricies tristique integer tincidunt pellentesque. Nisi faucibus a justo bibendum.Lorem ipsum dolor sit amet consectetur. Velit luctus pulvinar </p> <br />
                    <p className='text-lg font-medium leading-[1.43rem] text-[#7C7C7C]'>Lorem ipsum dolor sit amet consectetur. Velit luctus pulvinar augue morbi ultricies tristique integer tincidunt pellentesque. Nisi faucibus a justo bibendum.Lorem ipsum dolor sit amet consectetur. Velit luctus pulvinar augue mor Lorem ipsum dolor sit amet consectetur ultricies tristique integer tincidunt pellentesque. Nisi faucibus a justo bibendum.Lorem ipsum dolor sit amet consectetur. Velit luctus pulvinar </p>
                </div>
            </div>
            <div className='md:hidden block'>
                <h2 className='font-head font-bold text-[1.75rem] text-center text-[#3D3E3E]'>Our <span className='font-head text-[#E78353]'>Story</span></h2>
                <div className='grid gap-y-6'>
                    <p className='md:text-lg text-base font-medium leading-[1.43rem] text-[#7C7C7C]'>Lorem ipsum dolor sit amet consectetur. Velit luctus pulvinar augue morbi ultricies tristique integer tincidunt pellentesque. Nisi faucibus a justo bibendum.Lorem ipsum dolor sit amet consectetur. Velit luctus pulvinar augue mor Lorem ipsum dolor sit amet consectetur ultricies tristique integer tincidunt pellentesque. Nisi faucibus a justo bibendum.Lorem ipsum dolor sit amet consectetur. Velit luctus pulvinar </p>
                    <div className='flex justify-between gap-4'>
                        <div className=" text-center w-[100%] pb-5 py-3 items-center flex flex-col justify-center rounded-xl bg-[#E8F9FF]">
                            <h3 className='text-[#007CC2] text-2xl font-bold leading-[52px]'> 50 + </h3>
                            <p className='text-[#007CC2] font-bold text-xs'>CLIENTS</p>
                        </div>

                        <div className="text-center w-[100%] pb-5 py-3 items-center flex flex-col justify-center rounded-xl bg-[#FCF0D4]">
                            <h3 className='text-[#F8BB34] text-2xl font-bold leading-[52px]'> 2000 + </h3>
                            <p className='text-[#F8BB34] font-bold text-xs'>REGISTERED GIGGERS</p>
                        </div>
                        <div className="items-center w-[100%] pb-5 py-3 flex flex-col justify-center rounded-xl bg-[#F7F1FF]">
                            <h3 className='text-[#6F2ECF] text-2xl font-bold leading-[52px]'> 150 + </h3>
                            <p className='text-[#6F2ECF] font-bold text-xs'>GIGS</p>
                        </div>
                    </div>
                    <p className='md:text-lg text-base font-medium leading-[1.43rem] text-[#7C7C7C] mb-6'>Lorem ipsum dolor sit amet consectetur. Velit luctus pulvinar augue morbi ultricies tristique integer tincidunt pellentesque. Nisi faucibus a justo bibendum.Lorem ipsum dolor sit amet consectetur. Velit luctus pulvinar augue mor Lorem ipsum dolor sit amet consectetur ultricies tristique integer tincidunt pellentesque. Nisi faucibus a justo bibendum.Lorem ipsum dolor sit amet consectetur. Velit luctus pulvinar </p>
                </div>
            </div>
        </section>
    )
}
