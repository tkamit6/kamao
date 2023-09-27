import React from 'react'
import NavbarLanding from './LandingPage/NavbarLanding';
import Section1 from './team-leader/Section1';
import Section2 from '../pages/BusinessPage/Section2'
import Section3 from './team-leader/Section3';
import Section4 from './team-leader/Section4';
import Section5 from './team-leader/Section5';

export default function TeamLeader() {
  return (
    <>
      <NavbarLanding />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
    </>
  )
}
