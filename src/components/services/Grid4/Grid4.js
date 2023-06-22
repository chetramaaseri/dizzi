import React from 'react'
import "./Grid4.css"
function Grid4({orientation}) {
    const mainOrientation = `Grids ${orientation.main}`;
  return (
    <div className={mainOrientation}>
        <div className="allCenter Grid1">
            <span className='highlight'>HI SEO</span>
            <div className="gridImg py-3 col-5">
                <img className='w-75' src="https://abilitynet.org.uk/sites/abilitynet.org.uk/files/admin/seo-magnifying-glass.png" alt="" />
            </div>
            <h2>Seo To Boost It On Sky</h2>
            <span>Hi am On Sky and Flying WooHooooo</span>
        </div>
        <div className="allCenter Grid2">
            <span className='highlight'>HI SEO</span>
            <div className="gridImg py-3 col-5">
                <img className='w-75' src="https://abilitynet.org.uk/sites/abilitynet.org.uk/files/admin/seo-magnifying-glass.png" alt="" />
            </div>
            <h2>Seo To Boost It On Sky</h2>
            <span>Hi am On Sky and Flying WooHooooo</span>
        </div>
        <div className="allCenter Grid3">
            <span className='highlight'>HI SEO</span>
            <div className="gridImg py-3 col-5">
                <img className='w-75' src="https://abilitynet.org.uk/sites/abilitynet.org.uk/files/admin/seo-magnifying-glass.png" alt="" />
            </div>
            <h2>Seo To Boost It On Sky</h2>
            <span>Hi am On Sky and Flying WooHooooo</span>
        </div>
        <div className="allCenter Grid4">
            <span className='highlight'>HI SEO</span>
            <div className="gridImg py-3 col-5">
                <img className='w-75' src="https://abilitynet.org.uk/sites/abilitynet.org.uk/files/admin/seo-magnifying-glass.png" alt="" />
            </div>
            <h2>Seo To Boost It On Sky</h2>
            <span>Hi am On Sky and Flying WooHooooo</span>
        </div>
    </div>
  )
}

export default Grid4