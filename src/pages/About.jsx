import React from 'react'
import NavbarLanding from './LandingPage/NavbarLanding';
import Section1 from './aboutUs/Section1';
import Section2 from './aboutUs/Section2';
import Section3 from './aboutUs/Section3';
import Section4 from './aboutUs/Section4';
import Section5 from './aboutUs/Section5';
import { Footer } from '../pages/Footer'

export default function About() {
  return (
    <>
      <NavbarLanding />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Footer />
    </>
  )
}
