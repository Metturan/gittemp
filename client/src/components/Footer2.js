import React from 'react';
import mac3 from './imgs/mac3.jpg';
import './styles/footer2.scss';

const Footer2 = () => {
	return (
		<div className="footer">
			<div className="topft">
				<div className="imgLeft aniTransform"><img src={mac3} alt=""/></div>
				<div className="blockRight aniTransform">
					<div className="wrap">
						<p>Were creative explorers that build digital products.</p>
						<ul>
							<li className="subTitle">Email Us</li>
							<li>inquiry@views.ca</li>
						</ul>
						<ul className="middleSpace">
							<li className="subTitle">Phone</li>
							<li>1+ 647 390 6634</li>
						</ul>
						<div className="social">
							<ul>
								<li className="subTitle">Social</li>
								<li>Facebook</li>
								<li>Instagram</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="fClear"></div>
			</div>
		</div>
	)
}

export default Footer2;