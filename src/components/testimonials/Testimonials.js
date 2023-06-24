import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import TextContent from '../layout/textContent/TextContent'
import Vector from '../layout/vector/Vector';

function Testimonials({data}) {
    
    const vectorTestimonial = {
      src : "https://dizzi.netlify.app/images/skyblue-right.svg",
      height: "660px",
      width: "360px",
      position:"absolute",
      bottom : "-300px",
      right: "0px",
      zIndex:"-9"
    }
  return (
    <div className='position-relative'>
      <Vector vectorData={vectorTestimonial}/>
      <div className='container pt-5'>
        <div className='row mt-5 mb-3'>
            <div className="col-sm-4">
              <div className="textBoxCover w-75 m-auto">
                <TextContent data={data.textContent}/>
              </div>
            </div>
            <div className="col-sm-8 px-md-3 py-5" >
              <Splide options={{autoplay:"true",loop:true}}>
                {data.testimonials.map((testimonial,index)=>{
                  return (
                    <SplideSlide key={"testimonial"+index}>
                      <div className="testimonial row w-75 m-auto">
                        <div className="col-md-6 py-2">
                          <p className='pe-md-5'>{testimonial[0].text}</p>
                          <h4 className='h2 mt-3'>{testimonial[0].clientName}</h4>
                          <h6>{testimonial[0].rating}</h6>
                        </div>
                        <div className="col-md-6 py-2">
                          <p className='pe-md-5'>{testimonial[1].text}</p>
                          <h4 className='h2 mt-3'>{testimonial[1].clientName}</h4>
                          <h6>{testimonial[1].rating}</h6>
                        </div>
                      </div>
                    </SplideSlide>
                  )
                })}
              </Splide>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials