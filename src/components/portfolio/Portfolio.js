import React from 'react'
import TextContent from '../layout/textContent/TextContent'
import Vector from '../layout/vector/Vector'

function Portfolio() {
    const portfolioText = {
        highlight : "Have a Look We are Amazing 😉",
        heading: "Creative Portfolio is a Beast <br>Boom Boom💥 Yo ✌️",
        text : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid consectetur velit voluptatibus magni. Magnam debitis dignissimos eos explicabo sequi modi incidunt repudiandae, iste facilis vel! Non laboriosam quisquam aliquam nesciunt sed alias consequatur tempora, repudiandae autem a accusantium veritatis dolore fugit voluptatum odit est nulla rem laudantium neque eveniet laborum!",
        btnText : "Explore Us",
        alignment: "yCenter"
    }
    const vectorPortfolioLeft = {
        src : "http://192.168.1.5:3000/images/blue-right.svg",
        height: "660px",
        width: "360px",
        position:"absolute",
        bottom : "-150px",
        right: "0px",
        zIndex:"-9"
    }
  return (
    <div className='position-relative'>
        <Vector vectorData={vectorPortfolioLeft}/>
        <div className="container">
            <div className='row'>
                <TextContent data={portfolioText}/>
                <div className="col-12">
                    <div className="row my-5">
                        <div className="col-sm-4 yCenter">
                            <img className='w-75' src="https://images.unsplash.com/photo-1686864816249-cf111dc4a903?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80" alt="" srcSet="" />
                            <p className='highlight mb-0'>Boom Boss</p>
                            <h4>Yo Yo Feature</h4>
                        </div>
                        <div className="col-sm-4 yCenter">
                            <img className='w-75' src="https://images.unsplash.com/photo-1686864816249-cf111dc4a903?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80" alt="" srcSet="" />
                            <p className='highlight mb-0'>Boom Boss</p>
                            <h4>Yo Yo Feature</h4>
                        </div>
                        <div className="col-sm-4 yCenter">
                            <img className='w-75' src="https://images.unsplash.com/photo-1686864816249-cf111dc4a903?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80" alt="" srcSet="" />
                            <p className='highlight mb-0'>Boom Boss</p>
                            <h4>Yo Yo Feature</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Portfolio