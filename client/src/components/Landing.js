import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './styles/landing.scss';
import Header from './Header';
// import Article from './Article';
import Section100 from './Section100';
import Section2v0 from './Section2v0';
import Footer2 from './Footer2';
import Outro from './Outro';
import {introText, showUp, bigTxtAnim} from '../utils/helpers';
import {effect} from '../utils/blips';



class Landing extends Component {
  componentDidMount() {
  	effect();
  	showUp();
  	introText();
  	bigTxtAnim();
  }
  render() {
    return (
		<div>
			<div className="contentHero">
				<Header />
				<canvas id="bubble"></canvas>
				<div className="titleWrap">
					<span className="o-headline">
					<div className="introTitle"> 
						<div className="t-holder oh">
							<span className="db o-introTxt">We design for an</span>
						</div>
						<div className="t-holder oh"> 
							<span className="db o-introTxt">experience, build it to be</span>
						</div>
						<div className="t-holder oh">
							<span className="db o-introTxt">fast and intelligently market</span>
						</div>
						<div className="t-holder oh">
							<span className="db o-introTxt">your brand to grow.</span>
						</div>
					</div>
					</span>
				</div>
				<div className="r-intro">
					<p className="r-t-intro">If your looking to build your company site or integrate an ecommerce online, you can shoot us an email or click the contact button and fill out the form to get started right away.</p>
					<div className="quotebutton"><Link to="/contact"><p>CONTACT</p><i className="fa fa-long-arrow-right"></i></Link></div>
				</div>
			</div>
			<div className="sectionHolder">
				<Section100 />
			</div>
			<Section2v0 />
			<div className="footerMain">
				<Footer2 />
				<Outro />
			</div>
		</div>
    );
  }
}

export default Landing;
