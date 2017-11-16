import React, {Component} from 'react';
import Header from './Header';
import Footer from './Footer2';
import './styles/service.scss';
import Slides from './Slides';
import {introServices} from '../utils/servicesHelper';

class Services extends Component {
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
				<div className="servicesInfo">
					<div className="section1serve">
						<div className="sectionTitle anim">
							<p className="sectionT">Strategy</p>
							<div className="numStock">
								<svg id="Layer_1" data-name="Layer 1" viewBox="0 0 76.7 174.29">
								  <defs>
								  </defs>
								  <title>numstockOne</title>
								  <g>
								    <path className="cls-1" d="M95.56,58a22.14,22.14,0,0,0,6.16-15.59c0,.08,0,.15,0,.23a22.21,22.21,0,0,0-44.43,0V96.12a22.27,22.27,0,0,0,6-4.44Z" transform="translate(-25.02 -20.4)"/>
								    <path className="cls-2" d="M57.3,42.61a22.14,22.14,0,0,1,6.33-15.52l-.16.16L31.19,61A22.22,22.22,0,0,0,57.3,96.12Z" transform="translate(-25.02 -20.4)"/>
								    <path className="cls-3" d="M101.72,42.38A22.14,22.14,0,0,1,95.56,58L63.28,91.68a22.27,22.27,0,0,1-6,4.44v76.35a22.21,22.21,0,1,0,44.43,0V42.61C101.72,42.53,101.72,42.46,101.72,42.38Z" transform="translate(-25.02 -20.4)"/>
								  </g>
								</svg>
							</div>
						</div>
						<div className="bodyService">
							<p className="anim">
								Give us a shout to discuss your project and idea. We’ll go through it with you to see what you need in order for it to get finished. We’ll sign NDA and disclosure agreements.
							</p>
						</div>
					</div>

					<div className="section2serve">
						<div className="sectionTitle anim">
							<p className="sectionT">Design & UX</p>
							<div className="numStock">
								<svg id="Layer_1" data-name="Layer 1" viewBox="0 0 120.55 175.79">
								  <defs>
								  </defs>
								  <title>numStock2</title>
								  <g>
								    <path className="cls-1" d="M104,138.29H76.15L42.1,176A20.83,20.83,0,0,1,28,182.79c.48,0,1,.05,1.45.05H104a22.28,22.28,0,1,0,0-44.55Z" transform="translate(-5.73 -7.06)"/>
								    <path className="cls-2" d="M29.43,138.29a22.21,22.21,0,0,0-14.19,5.11L11.12,148a20.87,20.87,0,0,0,12.59,34.69c1.22.08,2.49.14,3.81.17A20.85,20.85,0,0,0,42.1,176l34.05-37.67Z" transform="translate(-5.73 -7.06)"/>
								    <path className="cls-3" d="M121,62.61C121,34.83,101.6,7.06,60.67,7.06,34.28,7.06,16.62,24,10.9,32,3.76,42,8,56.69,17,62.9c8.45,5.83,20.84,6,31-6.08C51.77,52.25,56.75,49,62.52,49a17.14,17.14,0,0,1,9.15,2.7C79,56.26,82.1,68.24,74.87,76.28L29.68,127.42l-14.44,16a22.21,22.21,0,0,1,14.19-5.11H76.15l18.5-20.41C111.78,99.4,121,84.48,121,62.61Z" transform="translate(-5.73 -7.06)"/>
								  </g>
								</svg>
							</div>
						</div>
						<div className="bodyService">
							<p className="anim">
								Proceeding, we’ll provide you with mockups for your project, so were on the same page. 
							</p>
						</div>
					</div>

					<div className="section3serve">
						<div className="sectionTitle anim">
							<p className="sectionT">Development</p>
							<div className="numStock">
								<svg id="Layer_1" data-name="Layer 1" viewBox="0 0 122.57 178.4">
								  <defs>
								  </defs>
								  <title>numstock3</title>
								  <g>
								    <path className="cls-1" d="M110.12,89.38l.83.86a54.86,54.86,0,0,0,8.84-29.36A51.09,51.09,0,0,0,102,22,58.06,58.06,0,0,0,63.65,7.82c-16.31,0-31.31,5.43-42.23,15.28a54.87,54.87,0,0,0-7,7.59,21.53,21.53,0,1,0,34.31,26,11.88,11.88,0,0,1,1.51-1.64c1.09-1,5.28-4.2,13.39-4.2,6.42,0,13.07,4.08,13.07,10.68,0,7.74-6.37,11.71-9.81,11.81H67C84.31,73.38,100,79.31,110.12,89.38Z" transform="translate(-4.14 -7.82)"/>
								    <path className="cls-2" d="M110.95,90.24a51.64,51.64,0,0,1-44.17,24.15c5.61,0,10.22,1.45,13.15,4.33a12.77,12.77,0,0,1,3.72,9.35c0,9.68-9.78,14.92-19.43,15.08-9.84.17-16.75-5-19-9.89A21.53,21.53,0,0,0,6.13,151.34c9.85,21.28,32.37,34.87,57.62,34.87h1.19c16.25-.28,31.44-6,42.78-16.09a55.65,55.65,0,0,0,19-42C126.71,113.16,121,100.67,110.95,90.24Z" transform="translate(-4.14 -7.82)"/>
								    <path className="cls-3" d="M110.95,90.24l-.83-.86C100,79.31,84.31,73.38,67,73.38h-.26c-11.89,0-21.53,8.27-21.53,20.16s9.64,20.85,21.53,20.85A51.64,51.64,0,0,0,110.95,90.24Z" transform="translate(-4.14 -7.82)"/>
								  </g>
								</svg>
							</div>
						</div>
						<div className="bodyService">
							<p className="anim">
								We start working on the project immediately, which we’ll keep you posted every week, to demonstrate or show what breakthroughs we’ve made in the project. 
							</p>
						</div>
					</div>

					<div className="section4serve">
						<div className="sectionTitle anim">
							<p className="sectionT">Testing & QA</p>
							<div className="numStock">
								<svg id="Layer_1" data-name="Layer 1" viewBox="0 0 115.52 174.29">
								  <defs>
								  </defs>
								  <title>numstock4</title>
								  <g>
								    <path className="cls-1" d="M67.34,77.12A13.67,13.67,0,0,1,53.67,63.48V29.61a22.21,22.21,0,0,0-44.43,0V63.48a58.15,58.15,0,0,0,58.11,58.07h13V77.12Z" transform="translate(-9.24 -7.4)"/>
								    <path className="cls-2" d="M102.55,7.4A22.21,22.21,0,0,0,80.33,29.61V77.12H93.26a22.21,22.21,0,0,1,0,44.43H80.33v37.93a22.21,22.21,0,1,0,44.43,0V29.61A22.21,22.21,0,0,0,102.55,7.4Z" transform="translate(-9.24 -7.4)"/>
								    <path className="cls-3" d="M115.47,99.33A22.21,22.21,0,0,0,93.26,77.12H80.33v44.43H93.26A22.21,22.21,0,0,0,115.47,99.33Z" transform="translate(-9.24 -7.4)"/>
								  </g>
								</svg>

							</div>
						</div>
						<div className="bodyService">
							<p className="anim">
								Once were done there are things we can continue with doing for further improvements. Helping with recruitment. further extending of project. 
							</p>
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

export default Services;