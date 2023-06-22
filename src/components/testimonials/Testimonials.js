import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import TextContent from '../layout/textContent/TextContent'
import Vector from '../layout/vector/Vector';

function Testimonials() {
    const portfolioText = {
        highlight : "What People Think",
        heading: "They Said<br>We Are Amazing",
        alignment: "xCenterContent"
    }
    const vectorTestimonial = {
      src : "http://192.168.1.5:3000/images/skyblue-right.svg",
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
                <TextContent data={portfolioText}/>
              </div>
            </div>
            <div className="col-sm-8 px-md-3 py-5" >
              <Splide options={{autoplay:"true",loop:true}} aria-label="My Favorite Images">
                <SplideSlide>
                  <div className="testimonial row w-75 m-auto">
                    <div className="col-md-6 py-2">
                      <p className='pe-md-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus nisi facere cupiditate iste nulla aspernatur eum neque velit, nobis dolore rem error quidem deserunt reprehenderit, blanditiis obcaecati, quibusdam inventore libero?</p>
                      <h4 className='h2 mt-3'>Nobita Kumar</h4>
                      <h6>⭐⭐⭐⭐⭐</h6>
                    </div>
                    <div className="col-md-6 py-2">
                      <p className='pe-sm-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus nisi facere cupiditate iste nulla aspernatur eum neque velit, nobis dolore rem error quidem deserunt reprehenderit, blanditiis obcaecati, quibusdam inventore libero?</p>
                      <h4 className='h2 mt-3'>Nobita Kumar</h4>
                      <h6>⭐⭐⭐⭐⭐</h6>
                    </div>
                  </div>
                </SplideSlide>
                <SplideSlide>
                  <div className="testimonial row w-75 m-auto">
                    <div className="col-md-6 py-2">
                      <p className='pe-md-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus nisi facere cupiditate iste nulla aspernatur eum neque velit, nobis dolore rem error quidem deserunt reprehenderit, blanditiis obcaecati, quibusdam inventore libero?</p>
                      <h4 className='h2 mt-3'>Nobita Kumar</h4>
                      <h6>⭐⭐⭐⭐⭐</h6>
                    </div>
                    <div className="col-md-6 py-2">
                      <p className='pe-sm-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus nisi facere cupiditate iste nulla aspernatur eum neque velit, nobis dolore rem error quidem deserunt reprehenderit, blanditiis obcaecati, quibusdam inventore libero?</p>
                      <h4 className='h2 mt-3'>Nobita Kumar</h4>
                      <h6>⭐⭐⭐⭐⭐</h6>
                    </div>
                  </div>
                </SplideSlide>
              </Splide>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials