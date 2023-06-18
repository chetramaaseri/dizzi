import React from 'react'
import TextContent from '../layout/textContent/TextContent'
function WhyUs() {
    const whyUsText = {
        highlight : "WHY US",
        heading: "Experinced<br>Creative, and Helpful",
        text : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid consectetur velit voluptatibus magni. Magnam debitis dignissimos eos explicabo sequi modi incidunt repudiandae, iste facilis vel! Non laboriosam quisquam aliquam nesciunt sed alias consequatur tempora, repudiandae autem a accusantium veritatis dolore fugit voluptatum odit est nulla rem laudantium neque eveniet laborum!",
        btnText : "Learn More",
        alignment : "yCenter"
    }
  return (
    <div className='row my-5 gap-4 whyus'>
        <TextContent data={whyUsText}/>
        <div className="col-12">
            <div className="row">
                <div className="col-md-4 yCenter">
                    <h2 className='highlight'>01</h2>
                    <h5 className='px-3'>High Experienced Team of Creative People</h5>
                    <small className='w-75'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam nostrum error quidem harum porro aut doloribus necessitatibus consectetur inventore possimus est atque dolorum, suscipit odit magnam aperiam dignissimos veniam ratione!</small>
                </div>
                <div className="col-md-4 yCenter">
                    <h2 className='highlight'>01</h2>
                    <h5 className='px-3'>High Experienced Team of Creative People</h5>
                    <small className='w-75'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam nostrum error quidem harum porro aut doloribus necessitatibus consectetur inventore possimus est atque dolorum, suscipit odit magnam aperiam dignissimos veniam ratione!</small>
                </div>
                <div className="col-md-4 yCenter">
                    <h2 className='highlight'>01</h2>
                    <h5 className='px-3'>High Experienced Team of Creative People</h5>
                    <small className='w-75'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam nostrum error quidem harum porro aut doloribus necessitatibus consectetur inventore possimus est atque dolorum, suscipit odit magnam aperiam dignissimos veniam ratione!</small>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WhyUs