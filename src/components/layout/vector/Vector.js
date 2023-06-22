import React from 'react'
function Vector({vectorData}) {
  return (
    <div className='vector gx-0' style={{...vectorData}}>
      <img className='w-100 h-100 gx-0' src={vectorData.src} alt="" srcSet="" />
    </div>
  )
}

export default Vector