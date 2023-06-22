import React from 'react'
import "./Services.css"
import Grid4 from './Grid4/Grid4'
import Vector from '../layout/vector/Vector'
function Services() {
  const vectorServicesRight = {
    src : "https://dizzi.netlify.app/images/skyblue-right.svg",
    height: "560px",
    width: "360px",
    position:"absolute",
    top : "-100px",
    right: "0px",
    zIndex:"-9"
  }
  const vectorServicesLeft = {
    src : "https://dizzi.netlify.app/images/orange-left.svg",
    height: "660px",
    width: "360px",
    position:"absolute",
    bottom : "-300px",
    left: "0px",
    zIndex:"-9"
  }
  return (
    <div className='position-relative'>
    <Vector vectorData={vectorServicesRight}/>
    <Vector vectorData={vectorServicesLeft}/>
      <div className="container">
        <div className='row services my-5 px-0 px-md-5 gap-5 gap-md-0'>
            <div className="servicesLeft col-md-6">
                <span className='highlight'>WHAT WE DO</span>
                <h2 className='highlightHeading'>We are Team of<br></br> Super Experienced <br></br> Hi MAn</h2>
            </div>
            <div className="col-md-6">
              <Grid4 orientation={{
                main : "d-flex flex-column text-center text-sm-start gap-5 d-sm-grid"
              }}/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Services