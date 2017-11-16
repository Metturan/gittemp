import React from 'react';
import './styles/section200.scss';
import { Link } from 'react-router-dom';

class Section200 extends React.Component {
	render() {
		return (
				<div className="section2">
					<div>
						<div className="firstHalf">
							<h1 className="cap">Capabilities</h1>
						</div>
						<div className="secondHalf">
							<div>
								<h1 className="titlecap">E-commerce Solutions</h1>
								
							</div>
							<div className="contentdiv">
								<h1 className="titlecap">User Interface Design</h1>
								
							</div>
							<div className="contentdiv">
								<h1 className="titlecap">Mobile App Development</h1>
								<p className="paracap">Whether it's native IOS and Android or a hybrid we can develop a mobile app that your users will feel great about using. Tell us about your project and let's discuss how a mobile app can benefit your business.</p>
							</div>
							<div className="contentdiv">
								<h1 className="titlecap">Web App Development</h1>
								<p className="paracap">Web applications are the most cost efficient and fastest to build. You've probably seen sites like AirBnb or Bonobos, these are web apps. They work on every device the same way and user acquisitions are cheaper than with mobile apps. If you're interested in building a web app let us know.</p>
							</div>
						</div>
						<div className="thirdHalf">
							<p className="paracap">Businesses whether small or big that need to build an e-commerce site or redesign their existing site come to us because they want more sales. Let us show you how.</p>
							<p className="paracap">Have an outdated looking site or want to create a new site and not sure how to design it? We believe at the core of every business the product is most important, however a well-thought out modern UI can drastically help to market your product and build a relationship with your customers to increase sales and we can show you how.</p>
						</div>
						<div className="fClear"></div>
					</div>
					<div className="lineBreak"></div>
					<div className="skillsContainer">
						<div className="multiBox">
							<ul>
								<li>Art Direction</li>
								<li>Web Design</li>
								<li>UX/UI Design</li>
							</ul>
						</div>
						<div className="multiBox">
							<ul>
								<li>Web Development</li>
								<li>Mobile App Development</li>
								<li>E-Commerce solutions</li>
							</ul>
						</div>
					</div>
				</div>
		)
	}
}

export default Section200;