import React from 'react'

function HeroText({orientation}) {
  return (
    <div className={orientation.main}>
        <h1 className='mainHeading'>We Are<br></br>building Brands<br></br> Online</h1>
        <p className={orientation.content}>we Ae here to build you up to high in sky and build to to high on earth and take advantagesd of core of world from space</p>
        <div className="m-auto mt-4 mb-4">
            <button className="btn btn-primary rounded-pill">Let's Get Started</button>
        </div>
    </div>
  )
}

export default HeroText