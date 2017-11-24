import React from 'react';
import {TweenMax, TimelineLite, Circ, Power2} from 'gsap';
import {moveMouse} from '../utils/moveMouse';


class Burger extends React.Component {
	componentDidMount() {
		const menu = document.querySelector('.menuHolder');
		moveMouse(menu);
	}
	constructor(props) {
		super(props);
		this.state = {isVisible: true};

		this.burgerClick = this.burgerClick.bind(this);
	}
	burgerClick(event) {
		
		const overlay = document.querySelector('.overlayMenu');
		const submenu = document.querySelector('.submenu');
		const socialTitle = document.getElementsByClassName('socialTitle');
		const subTitle = document.getElementsByClassName('subTitle');
		const burger = document.getElementsByClassName('lines');
		const burgerArray = [...burger];

		this.setState({isVisible: !this.state.isVisible})

		if (this.state.isVisible === true) {
			burgerArray.forEach(e => {
				e.classList.add('menu');
			})
			TweenMax.to(overlay, 0.1, {autoAlpha: 1, ease:Circ.easeOut})
			TweenMax.to(submenu, 0.02, {autoAlpha:1, ease:Circ.easeOut})
			TweenMax.staggerFrom(subTitle, 1, {y: 30, autoAlpha:0, delay: 0.2, ease:Power2.easeOut}, 0.15);
			TweenMax.staggerFrom(socialTitle, 1, {x: 30, autoAlpha: 0, delay: 0.7, ease:Power2.easeOut}, 0.15);
		} else {
			burgerArray.forEach(e => {
				e.classList.remove('menu');

				TweenMax.to(submenu, 0.02, {autoAlpha:0, ease:Circ.easeOut})
				TweenMax.to(overlay, 0.1, {autoAlpha: 0, ease:Circ.easeOut})
			});
		}
	}
	render() {
		return (
			<div className="menuHolder">
				<div className="burger introAni" onClick={this.burgerClick}>
					<div className="top lines"></div>
					<div className="middle lines"></div>
					<div className="bottom lines"></div>
				</div>
			</div>
		)
	}
}

export default Burger;