import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
import './styles/outro.scss';

class Outro extends Component {
	gotoContact() {
		setTimeout(() => {
			this.props.history.push('/contact');
		}, 350);
	}
	render() {
		return (
			<div>
				<div className="outroCont">
					<h1 className="fontStyle aniIn" onClick={this.gotoContact.bind(this)}>Start a Project</h1>
				</div>
				<div className="fw bcgb">
					<div className="bottomHolder">
						<div className="leftFoot">Copyright Views.</div>
						<div className="rightFoot">
							<ul>
								<li><Link to="/company">Company</Link></li>
								<li><Link to="/services">Services</Link></li>
								<li><Link to="/contact">Contact</Link></li>
							</ul>
						</div>
						<div className="fClear"></div>
					</div>
				</div>
			</div>
		)
	}
}

export default withRouter(Outro);