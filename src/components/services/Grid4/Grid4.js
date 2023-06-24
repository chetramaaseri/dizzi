import React from 'react'
import "./Grid4.css"
function Grid4({orientation,data}) {
    const mainOrientation = `Grids ${orientation.main}`;
  return (
    <div className={mainOrientation}>
        <div className=" Grid1">
            <span className='highlight'>{data[0].highlight}</span>
            <div className="gridImg m-auto py-3 col-5">
                <img className='w-75' src={data[0].img} alt="" />
            </div>
            <h2>{data[0].title}</h2>
            <span>{data[0].desc}</span>
        </div>
        <div className="Grid2">
            <span className='highlight'>{data[1].highlight}</span>
            <div className="gridImg m-auto py-3 col-5">
                <img className='w-75' src={data[1].img} alt="" />
            </div>
            <h2>{data[1].title}</h2>
            <span>{data[1].desc}</span>
        </div>
        <div className="Grid3">
            <span className='highlight'>{data[2].highlight}</span>
            <div className="gridImg m-auto py-3 col-5">
                <img className='w-75' src={data[2].img} alt="" />
            </div>
            <h2>{data[2].title}</h2>
            <span>{data[2].desc}</span>
        </div>
        <div className=" Grid4">
            <span className='highlight'>{data[3].highlight}</span>
            <div className="gridImg m-auto py-3 col-5">
                <img className='w-75' src={data[3].img} alt="" />
            </div>
            <h2>{data[3].title}</h2>
            <span>{data[3].desc}</span>
        </div>
    </div>
  )
}

export default Grid4