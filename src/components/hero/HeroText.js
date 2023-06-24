import React from 'react'

function HeroText({orientation,data}) {
  return (
    <div className={orientation.main}>
        <h1 className='mainHeading' dangerouslySetInnerHTML={{ __html: data.title }} />
        <p className={orientation.content}>{data.subTitle}</p>
        <div className="m-auto mt-4 mb-4">
            <button className="btn btn-primary rounded-pill">{data.btnText}</button>
        </div>
    </div>
  )
}

export default HeroText