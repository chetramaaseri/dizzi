import React from 'react'
import TextContent from "../layout/textContent/TextContent"
import Grid4 from '../services/Grid4/Grid4'
import Vector from '../layout/vector/Vector'
function Capabilities({data}) {
  const vectorCapabilitiesRight = {
    src : "https://dizzi.netlify.app/images/green-left.svg",
    height: "660px",
    width: "360px",
    position:"absolute",
    top: "-200px",
    left: "0",
    zIndex:"-9"
}
  return (
    <div className="position-relative">
      <Vector vectorData={vectorCapabilitiesRight}/>
      <div className="container">
        <div className='row mt-5'>
          <TextContent data={data.textContent}/>
          <div className="col-12 mt-3">
            <Grid4 data={data.grid} orientation={{
              main : "d-flex flex-wrap flex-md-nowrap flex-row xCenter"
            }}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Capabilities