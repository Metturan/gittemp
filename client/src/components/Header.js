import React from 'react';
import { Link } from 'react-router-dom';
import './styles/header.scss';
import Burger from './Burger';
import {squiggleLogo} from '../utils/helpers';

class Header extends React.Component {
	componentDidMount() {
		squiggleLogo();
	}
	render() {
		return (
			<div className="openingHead">
				<Burger />
				<div className="overlayMenu">
					<div className="submenu">
						<ul>
							<Link to="/company"><li className="m-over subTitle">Company</li></Link>
							<Link to="/services"><li className="widths m-over subTitle">Services</li></Link>
							<Link to="/contact"><li className="widths m-over subTitle">Contact</li></Link>
						</ul>
						<div className="socialSubmenu">
							<i className="socialTitle fa fa-facebook"></i>
							<i className="socialTitle fa fa-twitter"></i>
							<i className="socialTitle fa fa-instagram"></i>
						</div>
					</div>
					<div className="socialOverlay"></div>
				</div>
				<div className="navWrap">
					<Link to="/"><h1 className="views introAni">Views</h1></Link>
					
					<ul className="rightNav introAni">
						<li><Link className="m-over" to="/company">Company</Link></li>
						<li><Link className="m-over" to="/services">Services</Link></li>
						<li><Link className="m-over" to="/contact">Contact</Link></li>
					</ul>
				</div>
				<div className="openMenu"></div>
			</div>
		)
	}
}

export default Header;