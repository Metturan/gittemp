import {TweenMax, Power2} from 'gsap';

export function introContact() {
	const title = document.querySelector('.contactH');
	const dash = document.querySelector('.dash');
	const forms = document.querySelector('.formLayout');
	const boxClose = document.querySelector('.closeBox');
	const arrayContact = [title, dash, forms];

	TweenMax.staggerFrom(arrayContact, 0.6, {y: 60, autoAlpha: 0}, 0.2);

	boxClose.addEventListener('mouseenter', () => {
		console.log('asdf')
		TweenMax.to('.closeBox', 0.3, {color: '#5d5d5d', ease:Power2.easeOut});
	}),
	boxClose.addEventListener('mouseleave', () => {
		TweenMax.to('.closeBox', 0.3, {color: '#fff', ease:Power2.easeOut});
	});
}