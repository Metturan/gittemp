import React from 'react';
import '../css/app.scss';
import { Link } from 'react-router-dom';
import Header from './header';
import Section100 from './section100';
import Section200 from './section200';
import Article from './Article';
import Footer from './footer';
import {bubble} from '../utils/bubble';
import {showUp} from '../utils/helpers';

class Main extends React.Component {
	componentDidMount() {
		bubble();
		showUp();
	}
	render() {
		return (
			<div>
				<div className="contentHero">
					<div className="overlayMenu">
						<div className="submenu">
							<p>Company</p>
							<p>Capabilities</p>
							<p>Contact</p>
						</div>
						<div className="socialOverlay"></div>
					</div>
					<Header />
					<canvas className="bubble"></canvas>
					<div className="titleWrap">
						<div className="introTitle">Views Digital</div>
						<p className="introText">We build high quality sites that look good. If you have a project that you would like to discuss, let us know.</p>
					</div>
					<div className="quote">
						<div className="quotebutton">GET QUOTE</div>
					</div>
				</div>
				<div className="sectionHolder">
					<Article />
					<Section100 />
				</div>
				<Section200 />
				<div className="footerMain">
					<Footer />
				</div>
			</div>
		)
	}
}

export default Main;