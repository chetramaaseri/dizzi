import React from 'react'
import TextContent from '../layout/textContent/TextContent'
import "./Newsletter.css"
function Newsletter() {
    const newsletterSubmit = (e)=>{
        document.querySelector('.subscription').classList.add('done');
    }
    const NewsletterText = {
        highlight : "What People Think",
        heading: "Subscribe Weekly News<br> Get Updated for Tech",
        alignment: "allCenter",
        text : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid consectetur velit tempora, repudiandae autem a accusantium veritatis dolore fugit voluptatum odit est nulla rem laudantium neque eveniet laborum!",
    }
  return (
    <div className="position-relative">
        <div className="container">
            <div className='row'>
                <div className="col-12 my-2">
                    <TextContent data={NewsletterText}/>
                </div>
                <div className="col-12">
                    <div className="my-3 m-auto allCenter">
                        <div className="content">
                            <form className="subscription">
                            <input className="add-email" type="email" placeholder="subscribe@me.now" />
                            <button className="submit-email" onClick={()=>{newsletterSubmit()}} type="button">
                                <span className="before-submit">Subscribe</span>
                                <span className="after-submit">Thank you for subscribing!</span>
                            </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Newsletter