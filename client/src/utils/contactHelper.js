import {TweenMax} from 'gsap';

export function introContact() {
	const title = document.querySelector('.contactH');
	const dash = document.querySelector('.dash');
	const forms = document.querySelector('.formLayout');

	const arrayContact = [title, dash, forms];

	TweenMax.staggerFrom(arrayContact, 0.6, {y: 60, autoAlpha: 0}, 0.2);

}