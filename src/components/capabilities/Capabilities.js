import React from 'react'
import TextContent from "../layout/textContent/TextContent"
import Grid4 from '../services/Grid4/Grid4'
function Capabilities() {
  const capabilityText = {
    highlight : "Have a Look We are Amazing 😉",
    heading: "Creative Portfolio is a Beast <br>Boom Boom💥 Yo ✌️",
    text : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid consectetur velit voluptatibus magni. Magnam debitis dignissimos eos explicabo sequi modi incidunt repudiandae, iste facilis vel! Non laboriosam quisquam aliquam nesciunt sed alias consequatur tempora, repudiandae autem a accusantium veritatis dolore fugit voluptatum odit est nulla rem laudantium neque eveniet laborum!",
    btnText : "Explore Us",
    alignment: "yCenter"
}
  return (
    <div className='row mt-5'>
      <TextContent data={capabilityText}/>
      <div className="col-12 mt-3">
        <Grid4 orientation={{
          main : "d-flex flex-row"
        }}/>
      </div>
    </div>
  )
}

export default Capabilities