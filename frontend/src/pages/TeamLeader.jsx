import React, { useEffect, useState } from 'react'
import NavbarLanding from './LandingPage/NavbarLanding';
import Section1 from './team-leader/Section1';
import Section2 from '../pages/BusinessPage/Section2'
import Section3 from './team-leader/Section3';
import Section4 from './team-leader/Section4';
import Section5 from './team-leader/Section5';
import { Footer } from '../pages/Footer'
import Section6 from './team-leader/Section6';
import loadingPage from '../images/loadingPage.svg'

export default function TeamLeader() {
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
            <Footer />
          </>
      }
    </>
  )
}
