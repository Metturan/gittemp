import {TweenMax, Power0, Sine} from 'gsap';

export function introServices() {
	function debounce(func, wait = 10, immediate = true) {
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
	console.log(elServices);

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
}