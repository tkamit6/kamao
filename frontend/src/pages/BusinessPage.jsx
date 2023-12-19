import React, { useEffect, useState } from 'react'
import Section1 from './BusinessPage/Section1'
import Section2 from './BusinessPage/Section2'
import Section3 from './BusinessPage/Section3'
import vector from '../images/aside/vector.svg'
import vector1 from '../images/aside/vector1.svg'
import vector2 from '../images/aside/vector2.svg'
import vector3 from '../images/aside/vector3.svg'
import vector4 from '../images/aside/vector4.svg'
import vector5 from '../images/aside/vector5.svg'
import vector6 from '../images/aside/vector6.svg'
import vector7 from '../images/aside/vector7.svg'
import Section4 from './BusinessPage/Section4'
import Section5 from './BusinessPage/Section5'
import Section6 from './BusinessPage/Section6'
import Section7 from './BusinessPage/Section7'
import Section8 from './BusinessPage/Section8'
import Section9 from './BusinessPage/Section9'
import Section10 from './BusinessPage/Section10'
import ContextProvider from './BusinessPage/ContextProvider'
import Navbar from './Navbar'
import { Footer } from '../pages/Footer'
import loadingPage from '../images/loadingPage.svg'

const tabList = [
  { id: 1, name: "Delivery Partner Sourcing", link: "#", img: vector, content: "11" },
  { id: 2, name: "Driver Partner Onboarding", link: "#", img: vector1, content: "21" },
  { id: 3, name: "Merchant Onboarding", link: "#", img: vector2, content: "31" },
  { id: 4, name: "Financial Services", link: "#", img: vector3, content: "41" },
  { id: 5, name: "Banking Services", link: "#", img: vector4, content: "51" },
  { id: 6, name: "Field Marketing & Promotions", link: "#", img: vector5, content: "61" },
  { id: 7, name: "Offroll On - Demand Workforce", link: "#", img: vector6, content: "71" },
  { id: 8, name: "Other Manpower Sourcing", link: "#", img: vector7, content: "81" }
];
export const BusinessPage = () => {
  const [loading, setloading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setloading(false)
    }, 1500);
  })


  return (
    <>
      {
        loading ? (<img src={loadingPage} alt='loading' className='absolute top-[30%] left-0 right-0 mx-auto' />) :
          <ContextProvider>
            <Navbar />
            <Section1 />
            <Section2 />
            <Section3 tabList={tabList} />
            <Section4 />
            <Section5 />
            <Section6 />
            <Section7 />
            <Section8 />
            <Section9 />
            <Section10 />
            <Footer />
          </ContextProvider>
      }
    </>
  )
}
