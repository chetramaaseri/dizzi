import React from 'react'
import HeroVertical from '../components/hero/vertical/HeroVertical'
import Capabilities from '../components/capabilities/Capabilities'
import Newsletter from '../components/newsletter/Newsletter'
import Grid4 from '../components/services/Grid4/Grid4'
import Testimonials from '../components/testimonials/Testimonials'

function OurServices() {
  return (
    <div className="container" style={{marginTop:"90px"}}>
        <HeroVertical/>
        <div className="col-12 my-5 pt-5">
            <Grid4 orientation={{
                main : "d-flex my-5 py-5 text-start"
            }}/>
        </div>
        <Testimonials/>
        <Capabilities/>
        <Newsletter/>
    </div>
  )
}

export default OurServices