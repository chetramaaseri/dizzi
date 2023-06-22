import React from 'react'
import HeroText from '../HeroText'
import Breadcrum from '../../layout/Breadcrum'
import Grid4 from '../../services/Grid4/Grid4'

function HeroVertical() {
  return (
    <div className='HeroVertical row mt-5'>
        <Breadcrum page={"What WE Do?"}/>
        <span className='highlight mt-5'>WHAT WE DO</span>
        <HeroText orientation={{
            main : "col-sm-6 mt-3",
            content : "w-75 mt-3"
        }} />
        <div className="col-sm-6">
            <Grid4 orientation={{
              main : "d-flex flex-column gap-5 d-sm-grid"
            }}/>
        </div>
    </div>
  )
}

export default HeroVertical