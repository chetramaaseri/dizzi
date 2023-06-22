import React from 'react'

function HeroText({orientation , content}) {
  return (
    <div className={orientation.main}>
        <h1 className=''>We Are<br></br>building Brands<br></br> Online</h1>
        <p className={orientation.content}>we Ae here to build you up to high in sky and build to to high on earth and take advantagesd of core of world from space and i dont know what iam writting but react is awesome Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse inventore vitae eius, quam natus similique, voluptate accusamus temporibus nulla mollitia sequi quo quibusdam tempora laudantium fugit? Deserunt voluptates officia tempora perspiciatis ipsum, ipsam commodi minus hic ea impedit reprehenderit aspernatur placeat dolore totam eius quas cumque eaque sint rerum optio.</p>
        <div className="m-auto mt-4 mb-4">
            <button className="btn btn-primary rounded-pill">Let's Get Started</button>
        </div>
    </div>
  )
}

export default HeroText