import React from 'react'
import "./Footer.css"

function Footer() {
  return (
    <footer className='mt-5' id="contactus">
		<div className="container-fluid py-5 px-3 px-sm-5">
			<div className="row">
				<div className="col-md-4 order-md-1 blogger-normal mb-5 mb-md-0">
					<h2 className="mb-4">Get Assitance</h2>
					<form id="leadform" className="leadform" action="" method="post">
						<input name="fid" type="hidden" value="4"/>
							<select name="choose me" className="form-select" >
								<option value="kuch nhi">111</option>
								<option value="kuch nhi">111</option>
								<option value="kuch nhi">111</option>
								<option value="kuch nhi">111</option>
							</select>
							<select name="choose me" className="form-select" >
								<option value="kuch nhi">111</option>
								<option value="kuch nhi">111</option>
								<option value="kuch nhi">111</option>
								<option value="kuch nhi">111</option>
							</select>
							<div className="form-group">
								<input type="text" name="nothing" className="form-control" placeholder="Enter Value Here"/>
							</div>
							<div className="form-group">
								<input type="text" name="nothing" className="form-control" placeholder="Enter Value Here"/>
							</div>
							<div className="form-group">
								<input type="text" name="nothing" className="form-control" placeholder="Enter Value Here"/>
							</div>
						<button name="putLead" type="submit" className="btn btn-theme">Submit</button>
					</form>
				</div>
				<div className="col-md-4 order-md-0 blogger-normal px-3 gap-2 gap-sm-5 flex-row flex-wrap flex-md-nowrap flex-md-column" style={{display: "flex",justifyContent: "space-between"}}>
					<div className="address-inform" style={{fontSize:"1.1rem"}}>
						<div className="address">
							<span className="mb-4">THE ADDRESS</span>
							<span className="mb-2">Firozpur road Left Side<br></br> Get Call Back</span>
							<span>Come Once Here</span>
						</div>
						<div className="contact">
							<span>96460000000</span>
						</div>
					</div>
					<div className="address-map">
						<iframe title='learningSessionsMap' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3423.4843774118667!2d75.82786167528589!3d30.901082274503462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a81ebc7e4454d%3A0x8a8c15fa9ecfe92f!2sBest%20Digital%20Marketing%20Course%2FServices%20%7C%20SEO%2C%20SMM%2C%20GOOGLE%20ADS%2C%20FB%2FINSTA%20ADS%2C%20EMAIL%20%2F%20MOBILE%20MARKETING%20%7C%20LEARNING%20SESSIONS!5e0!3m2!1sen!2sin!4v1687116317742!5m2!1sen!2sin" width="200" height="200" style={{border:"0"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
					</div>
				</div>
				<div className="col-md-4 order-md-2 ps-2 pe-5 mt-4 mt-md-1">
					<p style={{fontSize: "1.2rem",lineHeight: "30px"}} className="blogger-normal px-1 px-md-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. In iste, cum non voluptatum necessitatibus obcaecati!</p>
				</div>
			</div>
		</div>
	</footer>
  )
}

export default Footer