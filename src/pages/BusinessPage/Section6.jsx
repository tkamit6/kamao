import React, { useEffect, useState } from 'react';
import img from '../../images/amazon.png'
import S from '../../pages/BusinessPage/S'
import '../../custom.css'

const Section6 = () => {
  const [toggleState, setToggleState] = useState(0);
  const [isTabActive, setIsTabActive] = useState(false);
  const [preState, setPreState] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      // console.log(currentScrollPos);
      if (currentScrollPos > preState) {
        if (currentScrollPos >= 5800 && scrollY <= 6000) {
          setToggleState(2)
        }
        else if (currentScrollPos >= 5500 && scrollY <= 6000) {
          setToggleState(1)
        } else if (currentScrollPos >= 5200 && scrollY <= 6000) {
          setToggleState(0)
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [toggleState, isTabActive, preState])

  const handleChange = (index) => {
    setToggleState(index)
    setIsTabActive(true);
  }

  const data = [
    { name: "Project", para: "End to end customer support service for the world’s largest e - commerce platform", img: img },
    { name: "Problem statement", para: "Lorem ipsum dolor sit amet consectetur. Velit luctus pulvinar augue morbi ultricies Velit luctus pulvinar augue morbi ultricies Lorem ipsum dolor sit amet consectetur. Velit luctus", img: img },
    { name: "Solution", para: "Lorem ipsum dolor sit amet consectetur. Velit luctus pulvinar augue morbi ultricies Velit luctus pulvinar augue morbi ultricies Lorem ipsum dolor sit amet consectetur. Velit luctus", img: img }
  ]

  return (
    <section className=' container mx-auto md:py-10 pt-0 max-w-7xl wrap '>
      <div className='ongoing-project stick-parallax'>
        <h1 className='text-center font-bold md:text-5xl text-[1.75rem] font-head md:mb-16 mb-12 text-[#3D3E3E]'>Our Ongoing <span className='text-[#E78353]'>Projects </span></h1>

        <div className='bg-[#FFF5EF] md:px-[102px] rounded-3xl md:py-16 p-4'>
          <div className="grid md:grid-cols-10 gap-6 ">
            <div className="md:col-span-6 md:order-none order-2">
              {
                data.map((list, id) => (
                  <div key={id} onClick={() => handleChange(id)} className='bg-white p-4 gap-2 mb-4 cursor-pointer rounded-xl'>
                    <h6 className="text-[#3D3E3E] font-bold md:text-xl text-base uppercase">{list.name}</h6>
                    <p className={`text-[#7C7C7C]  md:text-lg text-sm ${toggleState === id ? "text-[#E78353] font-bold" : "font-medium"}`}>{list.para}</p>
                  </div>
                ))
              }
            </div>
            <div className="md:col-span-4">
              <img src={data[toggleState]?.img} alt="img" loading='lazy' draggable="false" className='backdropImg' />
            </div>
          </div>
          <div className='p-4 md:mt-0 mt-0 md:px-8 bg-white rounded-2xl md:order-none order-1'>
            <p className='font-bold text-xl mb-3 uppercase'>Outcome</p>
            <ul className='ongingProjctTab gap-6 grid md:grid-cols-4 grid-cols-4 justify-between'>
              <li className='items-center md:col-span-1 col-span-2 flex flex-row  '>
                <div className='pl-4'>
                  <h5 className='text-[#E78353] font-bold md:text-[32px] text-xl py-[6px]'>5X</h5>
                  <p className='font-medium md:text-lg text-xs text-[#7C7C7C]'>Customer Tickets managed</p>
                </div>
              </li>
              <li className='items-center md:col-span-1 col-span-2 flex flex-row gap-4'>
                <div className='pl-4'>
                  <p className='text-[#E78353] font-bold md:text-[32px] text-xl py-[6px]'>30%</p>
                  <p className='font-medium md:text-lg text-xs text-[#7C7C7C]'>Improve NPS</p>
                </div>
              </li>
              <li className='items-center md:col-span-1 col-span-2 flex flex-row gap-4'>
                <div className=' pl-4'>
                  <p className='text-[#E78353] font-bold md:text-[32px] text-xl py-[6px]'>+25%</p>
                  <p className='font-medium md:text-lg text-xs text-[#7C7C7C]'>LTV of customers</p>
                </div>
              </li>
              <li className='items-center md:col-span-1 col-span-2 flex flex-row gap-4'>
                <div className='pl-4 '>
                  <p className='text-[#E78353] font-bold md:text-[32px] text-xl py-[6px]'>+25%</p>
                  <p className='font-medium md:text-lg text-xs text-[#7C7C7C]'>LTV of customers</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className='mx-auto w-fit mt-6 flex gap-2'>
          <input
            type="radio"
            name="myRadio" readOnly
            className='accent-[#E78353] focus:border-[#E78353]'
            checked={toggleState === 0}
          />
          <input
            type="radio"
            name="myRadio" readOnly
            className='accent-[#E78353] focus:border-[#E78353]'
            checked={toggleState === 1}
          />
          <input
            type="radio"
            name="myRadio" readOnly
            className='accent-[#E78353] focus:border-[#E78353]'
            checked={toggleState === 2}
          />
        </div>
      </div>
      <S />
    </section>
  )
}

export default Section6