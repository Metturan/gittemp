import React from 'react';
import '../utils/servicesHelper';
import './styles/slides.scss';
import mac4 from './imgs/mac4change1.jpg';

const Slides = () => {
	return (
		<div className="slideContainer">
			<div className="imgHolder slide">
				<img src={mac4} alt=""/>
			</div>
		</div>
	)
}

export default Slides;