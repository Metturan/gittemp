import React from 'react';
import './styles/section100.scss';
import { Link } from 'react-router-dom';

class Section100 extends React.Component {
	render() {
		return (
			<div>
				<div className="section100">
					<div className="vidCont">
						<div className="vidTitle aniIn">
							<h1 className="vTitle">Be Bold<br />Be Engaging</h1>
							<div className="dash"></div>
							<p className="smalltxt"><Link to="/company">What We Can Do</Link></p>
						</div>
						<video autoPlay loop className="video">
							<source src="https://player.vimeo.com/external/222028912.hd.mp4?s=01486eb52b945dc0a18b5927f4393591640e38b0&profile_id=174&autopause=0"/>
						</video>
					</div>
				</div>
			</div>
		)
	}
}

export default Section100;