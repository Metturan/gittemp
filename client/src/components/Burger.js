import React from 'react';

const burger = document.getElementsByClassName('burger');

class Burger extends React.Component {
	constructor(props) {
		super(props);
		this.state = {isVisible: true};

		this.burgerClick = this.burgerClick.bind(this);
	}
	burgerClick(event) {
		const overlay = document.getElementsByClassName('overlayMenu')[0];
		const submenu = document.getElementsByClassName('submenu')[0];
		const burgerChildren = document.querySelector('.burger').children;
		const burgerChild = [].slice.call(burgerChildren);
		const array = [...burgerChild, overlay, submenu];

		this.setState({isVisible: !this.state.isVisible})

		if (this.state.isVisible === true) {
			burger[0].classList.add('menu');

			array.forEach(e => {
				e.classList.add('menu')
			});
		} else {
			burger[0].classList.remove('menu');

			array.forEach(e => {
				e.classList.remove('menu')
			});
		}
	}
	render() {
		return (
			<div>
				<div className="burger" onClick={this.burgerClick}>
					<div className="top"></div>
					<div className="middle"></div>
					<div className="bottom"></div>
				</div>
			</div>
		)
	}
}

export default Burger;