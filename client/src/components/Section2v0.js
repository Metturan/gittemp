import React from 'react';
import './styles/section2v0.scss';

class Section2v0 extends React.Component {
	render() {
		return (
			<div className="section2">
				<div className="section2Wrap">
					<div className="firstSec aniTransform">
						<div className="fl">Capabilities</div>
						<div className="fClear"></div>
					</div>
					<div className="secSec">
						<div className="rows aniTransform">
							<div className="cols fl"><h2>E-commerce Solutions</h2></div>
							<div className="cols fr"><p className="paracap">Businesses whether small or big that need to build an e-commerce site or redesign their existing site come to us because they want more sales. Let us show you how.</p></div>
							<div className="fClear"></div>
						</div>
						<div className="rows aniTransform">
							<div className="cols fl"><h2>User Interface Design</h2></div>
							<div className="cols fr"><p className="paracap">Have an outdated looking site or want to create a new site and not sure how to design it? We believe at the core of every business the product is most important, however a well-thought out modern UI can drastically help to market your product and build a relationship with your customers to increase sales and we can show you how.</p></div>
							<div className="fClear"></div>
						</div>
						<div className="rows aniTransform">
							<div className="cols fl"><h2>Mobile App Development</h2></div>
							<div className="cols fr"><p className="paracap">Whether it's native IOS and Android or a hybrid we can develop a mobile app that your users will feel great about using. Tell us about your project and let's discuss how a mobile app can benefit your business.</p></div>
							<div className="fClear"></div>
						</div>
						<div className="rows aniTransform">
							<div className="cols fl"><h2>Web App Development</h2></div>
							<div className="cols fr"><p className="paracap">Web applications are the most cost efficient and fastest to build. You've probably seen sites like AirBnb or Bonobos, these are web apps. They work on every device the same way and user acquisitions are cheaper than with mobile apps. If you're interested in building a web app let us know.</p></div>
							<div className="fClear"></div>
						</div>
					</div>
					<div className="fClear"></div>
				</div>
			</div>
		)
	}
}

export default Section2v0;