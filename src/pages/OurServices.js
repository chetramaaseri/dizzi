import React from 'react'
import HeroVertical from '../components/hero/vertical/HeroVertical'
import Capabilities from '../components/capabilities/Capabilities'
import Newsletter from '../components/newsletter/Newsletter'
import Testimonials from '../components/testimonials/Testimonials'

function OurServices() {
  return (
    <div className="">
        <HeroVertical/>
        <Testimonials/>
        <Capabilities/>
        <Newsletter/>
    </div>
  )
}

export default OurServices