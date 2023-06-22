import React from 'react'
import "./Services.css"
import Grid4 from './Grid4/Grid4'
function Services() {
  return (
    <div className='row services my-5 px-0 px-md-5 gap-5 gap-md-0'>
        <div className="servicesLeft col-md-6">
            <span className='highlight'>WHAT WE DO</span>
            <h2 className='highlightHeading'>We are Team of<br></br> Super Experienced <br></br> Hi MAn</h2>
        </div>
        <div className="col-md-6">
          <Grid4 orientation={{
            main : "d-flex flex-column gap-5 d-sm-grid"
          }}/>
        </div>
    </div>
  )
}

export default Services