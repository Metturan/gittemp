import React, {Component} from 'react';
import Header from './Header';
import Footer from './Footer2';
import './styles/services2.scss';
import Slides from './Slides';
import {introServices} from '../utils/servicesHelper';

class Services2 extends Component {
	componentDidMount() {
		introServices();
	}
	render() {
		return (
			<div>
				<div className="oh topSectServices">
					<div className="navBarServices">
						<Header />
					</div>
					<div className="titleServices">
						<h1 className="ani">Design + Development</h1>
						<div className="dash ani"></div>
						<p className="servicesDesc ani">We create high quality mobile and web products that look good. Any project, any size, let's talk.</p>
					</div>
					<Slides />
				</div>
				
				<div className="gridSection">
					<div className="gridContainer">
						<div className="grids"></div>
						<div className="grids"></div>
						<div className="grids"></div>
						<div className="grids"></div>
						<div className="fClear"></div>
					</div>
					<div className="contentSection">
			          <div className="whatWeDo">
			            <h3 className="anim"><span></span>SERVICES & PRICING</h3>
			            <p className="anim">We’re an experience design agency that builds brands, platforms,
			& eCommerce flagships that help businesses succeed in digital culture.</p>
			            <div className="whatButton anim">OUR SERVICES <i className="fa fa-long-arrow-right "></i></div>
			          </div>
			          <div className="servicesList">
			          	<div className="section anim">
			          		<div className="center">
				          		<h1>Landing Pages</h1>
				          		<p>We build a site about the features and specialties of your product or service</p>
			          		</div>
			          		<div className="rightGrad"></div>
			          		<div className="rightShade">
			          			<p className="rightCenter">FROM <span className="price">5,000</span> USD</p>
			          		</div>
			          	</div>
			          	<div className="section anim">
			          		<div className="center">
				          		<h1>Corporate Websites</h1>
				          		<p>We'll build your company of any size to make it functional and pleasing</p>
			          		</div>
			          		<div className="rightGrad"></div>
			          		<div className="rightShade">
			          			<p className="rightCenter">FROM <span className="price">15,000</span> USD</p>
			          		</div>
			          	</div>
			          	<div className="section anim">
			          		<div className="center">
				          		<h1>E-commerce Store</h1>
				          		<p>We'll help you build an online store that drives sales</p>
			          		</div>
			          		<div className="rightGrad"></div>
			          		<div className="rightShade">
			          			<p className="rightCenter">FROM <span className="price">15,000</span> USD</p>
			          		</div>
			          	</div>
			          	<div className="section anim">
			          		<div className="center">
				          		<h1>Special Creative Sites</h1>
				          		<p>We'll design an beautiful interactive website to make you stand out</p>
			          		</div>
			          		<div className="rightGrad"></div>
			          		<div className="rightShade">
			          			<p className="rightCenter">FROM <span className="price">10,000</span> USD</p>
			          		</div>
			          	</div>
			          	<div className="section anim">
			          		<div className="center">
				          		<h1>Full-Brand Solution</h1>
				          		<p>Everything. From a website to content creation and brand marketing</p>
			          		</div>
			          		<div className="rightGrad"></div>
			          		<div className="rightShade">
			          			<p className="rightCenter">FROM <span className="price">40,000</span> USD</p>
			          		</div>
			          	</div>
			          	<div className="section anim">
			          		<div className="center">
				          		<h1>Mobile and Web Apps</h1>
				          		<p>We'll build you an app that makes your users love you</p>
			          		</div>
			          		<div className="rightGrad"></div>
			          		<div className="rightShade">
			          			<p className="rightCenter"><span className="discuss">Let's Discuss</span></p>
			          		</div>
			          	</div>
			          	<div className="section anim">
			          		<div className="center">
				          		<h1>AR/VR Apps</h1>
				          		<p>Build AR/VR apps for your brand and it's consumers</p>
			          		</div>
			          		<div className="rightGrad"></div>
			          		<div className="rightShade">
			          			<p className="rightCenter"><span className="discuss">Let's Discuss</span></p>
			          		</div>
			          	</div>
			          </div>
					</div>
				</div>
				<div className="bcg">
					<Footer />
				</div>
			</div>
		)
	}
}

export default Services2;