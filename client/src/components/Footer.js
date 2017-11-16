import React from 'react';
import { Link } from 'react-router-dom';
import './styles/footer.scss';

class Footer extends React.Component {
	render() {
		return (
			<div className="footer">
				<div className="footerHolder">
					<div className="getInTouch">get in touch to start a project</div>
					<div className="getInTouchInput">
						HIRE US	
					</div>
					<div className="topFoot">Views</div>
					<div className="lineBreak"></div>
					<div className="bottomHolder">
						<div className="leftFoot">Copyright Views.</div>
						<div className="rightFoot">
							<ul>
								<li>Company</li>
								<li>Services</li>
								<li>Contact</li>
							</ul>
						</div>
						<div className="fClear"></div>
					</div>
				</div>
			</div>
		)
	}
}

export default Footer;