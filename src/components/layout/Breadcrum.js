import React from 'react'
import { Link } from 'react-router-dom'
function Breadcrum({page}) {
  return (
    <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
            <li className="breadcrumb-item active" ariaCurrent="page">{page}</li>
        </ol>
    </nav>
  )
}

export default Breadcrum