import React from 'react'

import ActiveSlider from './components/ActiveSlider';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Jadwal from './components/Jadwal';

function LandingPage() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <ActiveSlider/>
      <Jadwal/>
    </>
  )
}

export default LandingPage