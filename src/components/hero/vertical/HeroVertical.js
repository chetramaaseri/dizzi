import React from 'react'
import HeroText from '../HeroText'
import Breadcrum from '../../layout/Breadcrum'
import Grid4 from '../../services/Grid4/Grid4'
import Vector from '../../layout/vector/Vector'

function HeroVertical() {
  const vectorHeroLeftTop = {
    src : "http://192.168.1.5:3000/images/yellow-left.svg",
    height: "360px",
    width: "200px",
    position:"absolute",
    top: "-200px",
    left: "-10px",
    zIndex: "9991",
  }
  const vectorHeroRight = {
    src : "http://192.168.1.5:3000/images/skyblue-right.svg",
    height: "660px",
    width: "200px",
    position:"absolute",
    top: "50px",
    right: "0px",
    zIndex: "9991",
  }
  return (
    <div className="position-relative">
      <Vector vectorData={vectorHeroLeftTop}/>
      <Vector vectorData={vectorHeroRight}/>
      <div className="container">
        <div className='HeroVertical row mt-5'>
            <Breadcrum page={"What WE Do?"}/>
            <span className='highlight mt-5'>WHAT WE DO</span>
            <HeroText orientation={{
                main : "col-sm-6 mt-3",
                content : "w-75 mt-3"
            }} />
            <div className="col-sm-6">
                <Grid4 orientation={{
                  main : "d-flex flex-column text-center text-sm-start gap-5 d-sm-grid"
                }}/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default HeroVertical