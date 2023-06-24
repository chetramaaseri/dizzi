import React from 'react'
import TextContent from '../layout/textContent/TextContent'
import Vector from '../layout/vector/Vector'

function Clients({data}) {
    const vectorClientsLeft = {
        src : "https://dizzi.netlify.app/images/yellow-left.svg",
        height: "660px",
        width: "360px",
        position:"absolute",
        bottom : "-360px",
        left: "0px",
        zIndex:"-9"
    }
  return (
    <div className="position-relative">
        <Vector vectorData={vectorClientsLeft}/>
        <div className="container">
            <div className='row'>
                <TextContent data={data.textContent}/>
                <div className="col-12">
                    <div className="row align-items-center">
                        {data.imgs.map((img,index)=>{
                            return (
                                <div key={"client"+index} className="col-sm-3 p-5">
                                    <img className='w-100' src={img} alt="" srcSet="" />
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

export default Clients