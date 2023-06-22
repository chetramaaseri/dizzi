import React from 'react'
import TextContent from "../layout/textContent/TextContent"
import Grid4 from '../services/Grid4/Grid4'
import Vector from '../layout/vector/Vector'
function Capabilities() {
  const capabilityText = {
    highlight : "Have a Look We are Amazing 😉",
    heading: "Creative Portfolio is a Beast <br>Boom Boom💥 Yo ✌️",
    text : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid consectetur velit voluptatibus magni. Magnam debitis dignissimos eos explicabo sequi modi incidunt repudiandae, iste facilis vel! Non laboriosam quisquam aliquam nesciunt sed alias consequatur tempora, repudiandae autem a accusantium veritatis dolore fugit voluptatum odit est nulla rem laudantium neque eveniet laborum!",
    btnText : "Explore Us",
    alignment: "yCenter"
  }
  const vectorCapabilitiesRight = {
    src : "http://192.168.1.5:3000/images/green-left.svg",
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
          <TextContent data={capabilityText}/>
          <div className="col-12 mt-3">
            <Grid4 orientation={{
              main : "d-flex flex-wrap flex-md-nowrap flex-row allCenter"
            }}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Capabilities