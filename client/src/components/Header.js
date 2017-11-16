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
			<div>
				<div className="navWrap">
					<Link to="/"><h1 className="views introAni">Views</h1></Link>
					<Burger />
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