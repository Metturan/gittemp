import {TweenMax, Power0, Power2, Sine, Circ} from 'gsap';

export function introServices() {
	function debounce(func, wait = 5, immediate = true) {
		var timeout;
		return function() {
			var context = this, args = arguments;
			var later = function() {
				timeout = null;
				if (!immediate) func.apply(context, args);
			};
			var callNow = immediate && !timeout;
			clearTimeout(timeout);
			timeout = setTimeout(later, wait);
			if(callNow) func.apply(context.args);
		};
	};
	const elServices = document.getElementsByClassName('anim');

	function activeAnimate() {
		Array.from(elServices).forEach( e => {
			// const slideInAt = (window.scrollY + window.innerHeight);
			const topOfElement = e.getBoundingClientRect().top - window.innerHeight;
			const isTopishShown = topOfElement < 0;

			if(isTopishShown) {
				e.classList.add('active');
			} 
		});
	}

	window.addEventListener('scroll', debounce(activeAnimate) );

	TweenMax.from('.slide', 7, {ease:Power0.easeNone, scale:1.1}, 4);
	TweenMax.staggerFrom('.ani', 1, {ease:Sine.easeOut, autoAlpha: 0, y: 80}, 0.2);

	// mouseenter pricing section
	const sections = document.getElementsByClassName('section');

	for (var i=0; i<sections.length; i++) {
		sections[i].addEventListener('mouseenter', function() {
			TweenMax.to(this.childNodes[1], 0.25, {ease:Sine, autoAlpha: 1, scaleX: 1});
		}),
		sections[i].addEventListener('mouseleave', function() {
			TweenMax.to(this.childNodes[1], 0.25, {ease:Sine, autoAlpha: 0, scaleX: 0});
		});
		
	}

}