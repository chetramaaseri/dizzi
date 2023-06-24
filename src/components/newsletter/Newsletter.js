import React from 'react'
import TextContent from '../layout/textContent/TextContent'
import "./Newsletter.css"
function Newsletter({data}) {
    const newsletterSubmit = (e)=>{
        document.querySelector('.subscription').classList.add('done');
    }
  return (
    <div className="position-relative">
        <div className="container">
            <div className='row'>
                <div className="col-12 my-2">
                    <TextContent data={data.textContent}/>
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