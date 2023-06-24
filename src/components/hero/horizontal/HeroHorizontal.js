import React from 'react'
import "./HeroHorizontal.css"
import HeroText from '../HeroText'
import Vector from  "../../layout/vector/Vector"
function HeroHorizontal({data}) {
    const vectorHeroTopLeft = {
        src : "https://dizzi.netlify.app/images/green-left-top.svg",
        height: "360px",
        width: "200px",
        position:"absolute",
        top: "-30px",
        left: "-10px",
        zIndex: "9991",
    }
    const vectorHeroRight = {
        src : "https://dizzi.netlify.app/images/violet-right.svg",
        height: "500px",
        width: "250px",
        position:"absolute",
        top: "160px",
        right: "0",
        zIndex:"-9"
      }
    const vectorHeroLeftBottom = {
        src : "https://dizzi.netlify.app/images/yellow-left.svg",
        height: "660px",
        width: "360px",
        position:"absolute",
        bottom: "-300px",
        left: "-60px",
        zIndex:"-9"
    }
  return (
    <>
        <Vector vectorData={vectorHeroTopLeft}/>
        <Vector vectorData={vectorHeroRight}/>
        <Vector vectorData={vectorHeroLeftBottom}/>
        <div className='container'>
            <div className='heroHorizontal row mt-5'>
                <HeroText data={data.heroText} style={{Zindex:"9999"}}  orientation={{
                    main : "col-12 text-center",
                    content : "w-75 m-auto mt-3"
                }} />
                <div className="col-12 heroHorizontalImages">
                    <div className="row w-75 m-auto gap-3 gap-sm-0">
                        <div className="col-sm-4">
                            <img src={data.heroImages[0]} alt="" srcSet="" />
                        </div>
                        <div className="col-sm-4 pt-0 pt-sm-5">
                            <img className='pt-o pt-sm-5' src={data.heroImages[1]} alt="" srcSet="" />
                        </div>
                        <div className="col-sm-4">
                            <img src={data.heroImages[2]} alt="" srcSet="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default HeroHorizontal