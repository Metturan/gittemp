import React, {Component} from 'react';
import Header from './Header';
import Footer from './Footer2';
import {companyAnim} from '../utils/companyHelper';
import './styles/company.scss';

class Company extends Component {
	componentDidMount() {
		companyAnim();
	}
	render() {
		return (
			<div className="companyHolder">
				<Header />
				<div className="companyPage">
					<div className="companyHero">
						<div className="coTitleBox">
							<h1 className="companyTitle">Views</h1>
							<p className="underTitle">Digital Agency</p>
						</div>
						<div className="bottomBox">
							<div className="bottomBoxinner">
								<div className="oh"><span className="o-introTxt">Coming together is a beginning,</span></div>
								<div className="oh"><span className="o-introTxt">keeping together is progress,</span></div>  
								<div className="oh"><span className="o-introTxt">working together is success.</span></div>
								<h3>- Henry Ford</h3>
							</div>
						</div>
					</div>
					<div className="holder">
						<div className="contentContainer">
							<p className="pgsOne">
								Views is a mobile, web app and e-commerce development company. We build web/mobile apps with
								a focus on design, page speed, and functionality (includes cross-browser compatibility). 
								We create experiences with our products and branding. User engagement and ease of use are primary
								concerns when designing an app. <br/><br/>
		
								We are specific with who we work with, we don't want to work with just anyone. If you are interested
								in building high quality products that create experiences then come talk to us. If you are interested
								in getting out your product in 2 weeks, if you aren't concerned with how it looks or how smooth it
								performs, then we would suggest you find another dev shop.
							</p>
						</div>
					</div>
					<div className="ideologyContainer">

						<div className="ideology">
							<div className="ideologyPrint">
								<h1 className="anim">
									Ideology
								</h1>
								<p className="anim">
									We are passionate about what we do. Which is what leads us to be thorough on projects.
								If our name is on the product you already know it's gonna be great.
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className="footerCompany">
					<Footer />
				</div>
			</div>
		)
	}
}



export default Company;
		