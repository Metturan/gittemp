import React, {Component} from 'react';
import './styles/outro.scss';

class Outro extends Component {
	render() {
		return (
			<div>
				<div className="outroCont">
					<h1 className="fontStyle aniIn">Start a Project</h1>
				</div>
				<div className="fw bcgb">
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

export default Outro;