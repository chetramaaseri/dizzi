import React from 'react'
import HeroVertical from '../components/hero/vertical/HeroVertical'
import Capabilities from '../components/capabilities/Capabilities'
import Newsletter from '../components/newsletter/Newsletter'
import Portfolio from '../components/portfolio/Portfolio'

function WhatWeDo() {
  return (
    <div className="">
        <HeroVertical  />
        <Capabilities/>
        <Portfolio/>
        <Newsletter/>
    </div>
  )
}

export default WhatWeDo