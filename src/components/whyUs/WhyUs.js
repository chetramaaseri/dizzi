import React from 'react'
import TextContent from '../layout/textContent/TextContent'
import Vector from '../layout/vector/Vector'
function WhyUs({data}) {
    const vectorWhyUsRight = {
        src : "https://dizzi.netlify.app/images/skyblue-right.svg",
        height: "660px",
        width: "360px",
        position:"absolute",
        top : "-100px",
        right: "0px",
        zIndex:"-9"
    }
    const vectorWhyUsLeft = {
        src : "https://dizzi.netlify.app/images/green-left.svg",
        height: "660px",
        width: "360px",
        position:"absolute",
        bottom : "-400px",
        left: "0px",
        zIndex:"-9"
    }
  return (
    <div className='position-relative'>
        <Vector vectorData={vectorWhyUsLeft}/>
        <Vector vectorData={vectorWhyUsRight}/>
        <div className="container">
            <div className='row my-5 gap-4 whyus'>
                <TextContent data={data.textContent}/>
                <div className="col-12">
                    <div className="row mt-4">
                        {data.features.map((feature,index)=>{
                            return (
                                <div key={"feature"+index} className="col-md-4 yCenter">
                                    <h2 className='highlight fw-bold fs-1'>0{index+1}</h2>
                                    <h5 className='px-3'>{feature.title}</h5>
                                    <small className='w-75'>{feature.desc}</small>
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

export default WhyUs