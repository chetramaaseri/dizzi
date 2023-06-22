import React from 'react'
import TextContent from '../layout/textContent/TextContent'
import Vector from '../layout/vector/Vector'

function Clients() {
    const clientsText = {
        highlight : "Our People",
        heading: "We Are Growing<br><b>Together</b>",
        alignment:"yCenter"
    }
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
                <TextContent data={clientsText}/>
                <div className="col-12">
                    <div className="row">
                        <div className="col-sm-3 p-5">
                            <img className='w-100 h-100' src="https://learningsessions.in/wp-content/uploads/2020/10/logo_black_retina-300x99.png" alt="" srcSet="" />
                        </div>
                        <div className="col-sm-3 p-5">
                            <img className='w-100 h-100' src="https://learningsessions.in/wp-content/uploads/2020/10/logo_black_retina-300x99.png" alt="" srcSet="" />
                        </div>
                        <div className="col-sm-3 p-5">
                            <img className='w-100 h-100' src="https://learningsessions.in/wp-content/uploads/2020/10/logo_black_retina-300x99.png" alt="" srcSet="" />
                        </div>
                        <div className="col-sm-3 p-5">
                            <img className='w-100 h-100' src="https://learningsessions.in/wp-content/uploads/2020/10/logo_black_retina-300x99.png" alt="" srcSet="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Clients