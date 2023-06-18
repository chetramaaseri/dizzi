import React from 'react'
import "./Services.css"
function Services() {
  return (
    <div className='row services my-5 px-0 px-md-5 gap-5 gap-md-0'>
        <div className="servicesLeft col-md-6">
            <span className='highlight'>WHAT WE DO</span>
            <h2 className='highlightHeading'>We are Team of<br></br> Super Experienced <br></br> Hi MAn</h2>
        </div>
        <div className="col-md-6">
            <div className="servicesGrids d-flex flex-column gap-5 d-sm-grid">
                <div className="allCenter servicesGrid1">
                    <span className='highlight'>HI SEO</span>
                    <h2>Seo To Boost It On Sky</h2>
                    <span>Hi am On Sky and Flying WooHooooo</span>
                </div>
                <div className="allCenter servicesGrid2">
                    <span className='highlight'>HI SEO</span>
                    <h2>Seo To Boost It On Sky</h2>
                    <span>Hi am On Sky and Flying WooHooooo</span>
                </div>
                <div className="allCenter servicesGrid3">
                    <span className='highlight'>HI SEO</span>
                    <h2>Seo To Boost It On Sky</h2>
                    <span>Hi am On Sky and Flying WooHooooo</span>
                </div>
                <div className="allCenter servicesGrid4">
                    <span className='highlight'>HI SEO</span>
                    <h2>Seo To Boost It On Sky</h2>
                    <span>Hi am On Sky and Flying WooHooooo</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Services