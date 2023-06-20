import React from 'react'
import "./HeroHorizontal.css"
import HeroText from '../HeroText'
// import Vector from  "../../layout/vector/Vector"
function HeroHorizontal() {
    // const topVectorData = {
    //     background :"linear-gradient(180deg, #550033 0%, rgba(255, 128, 201, 0.97963) 33.63%, rgba(255, 153, 0, 0.46) 85.42%, rgba(255, 194, 189, 0.713125) 88.02%)",
    //     top: "-50px",
    //     left:"-200px",
    //     height: "350px",
    //     width: "230px",
    //     blur: "100px",
    //     rotate:"-160",
    //     zIndex:"9999"
    //   }
    // const rightVectorData = {
    //     background :"linear-gradient(180deg, #DF6CB1 17.66%, #FF9900 71.61%)",
    //     top: "360px",
    //     right:"-50px",
    //     height: "230px",
    //     width: "180px",
    //     blur: "50px",
    //     rotate:"-190",
    //     zIndex:"9999",
    //   }
  return (
    <div className='heroHorizontal row mt-5'>
        {/* <Vector vectorData={topVectorData} />
        <Vector vectorData={topVectorData} />
        <Vector vectorData={rightVectorData} /> */}
        <HeroText orientation={{
            main : "col-12 text-center",
            content : "w-75 m-auto mt-3"
        }} />
        <div className="col-12 heroHorizontalImages">
            <div className="row w-75 m-auto gap-3 gap-sm-0">
                <div className="col-sm-4">
                    <img src="https://w7.pngwing.com/pngs/1016/354/png-transparent-digital-marketing-social-media-marketing-business-marketing-service-balloon-social-media-marketing.png" alt="" srcSet="" />
                </div>
                <div className="col-sm-4 pt-0 pt-sm-5">
                    <img className='pt-o pt-sm-5' src="https://w7.pngwing.com/pngs/1016/354/png-transparent-digital-marketing-social-media-marketing-business-marketing-service-balloon-social-media-marketing.png" alt="" srcSet="" />
                </div>
                <div className="col-sm-4">
                    <img src="https://w7.pngwing.com/pngs/1016/354/png-transparent-digital-marketing-social-media-marketing-business-marketing-service-balloon-social-media-marketing.png" alt="" srcSet="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default HeroHorizontal