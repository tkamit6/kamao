import React, { useEffect, useState } from 'react'
import Section1 from './LandingPage/Section1'
import Section2 from './LandingPage/Section2'
import Section3 from './LandingPage/Section3'
import Section4 from './LandingPage/Section4'
import Section5 from './LandingPage/Section5'
import Section6 from './LandingPage/Section6'
import Section7 from './LandingPage/Section7'
import Section8 from './LandingPage/Section8'
import Section9 from './LandingPage/Section9'
import Section10 from './LandingPage/Section10'
import Section11 from './LandingPage/Section11'
import Section12 from './LandingPage/Section12'
import NavbarLanding from './LandingPage/NavbarLanding';
import { Footer } from '../pages/Footer'
import loadingPage from '../images/loadingPage.svg'

const LandingPage = () => {
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
          <>
            <NavbarLanding />
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
            <Section5 />
            <Section6 />
            <Section7 />
            <Section8 />
            <Section9 />
            <Section10 />
            <Section11 />
            <Section12 />
            <Footer />
          </>
      }
    </>
  )
}

export default LandingPage