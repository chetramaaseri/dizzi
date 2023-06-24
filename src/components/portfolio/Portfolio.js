import React from 'react'
import TextContent from '../layout/textContent/TextContent'
import Vector from '../layout/vector/Vector'

function Portfolio({data}) {
    const vectorPortfolioLeft = {
        src : "https://dizzi.netlify.app/images/blue-right.svg",
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
                <TextContent data={data.textContent}/>
                <div className="col-12">
                    <div className="row my-5">
                        {data.portfolio.map((card,index)=>{
                            return (
                                <div key={"portfolio"+index} className="col-sm-4 yCenter mb-5">
                                    <img className='w-75' src={card.img} alt="" srcSet="" />
                                    <p className='highlight mt-4 mb-0'>{card.highlight}</p>
                                    <h4>{card.title}</h4>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Portfolio