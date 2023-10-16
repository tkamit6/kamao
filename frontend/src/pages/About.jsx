import React, { useEffect, useState } from 'react'
import NavbarLanding from './LandingPage/NavbarLanding';
import Section1 from './aboutUs/Section1';
import Section2 from './aboutUs/Section2';
import Section3 from './aboutUs/Section3';
import Section4 from './aboutUs/Section4';
import Section5 from './aboutUs/Section5';
import { Footer } from '../pages/Footer'
import Section6 from './aboutUs/Section6';
import loadingPage from '../images/loadingPage.svg'

export default function About() {
  const [loading, setloading] =useState(true);

  useEffect(()=>{
    setTimeout(() => {
      setloading(false)
    }, 2000);
  })
  return (
    <>
      {
        loading ? (<img src={loadingPage} alt='loading' className='absolute top-[30%] left-0 right-0 mx-auto' />) :
          <>
            <NavbarLanding />
            <Section1 />
            <Section2 />
            <Section3 />
            <Section6 />
            <Section4 />
            <Section5 />
            <Footer />

          </>
      }
    </>
  )
}
