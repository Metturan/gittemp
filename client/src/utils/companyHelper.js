import {TweenMax, TimelineLite, Power4} from 'gsap';
import SplitText from './SplitText';


export function companyAnim() {
	const titleSplit = new SplitText('.companyTitle', {type: "chars"});
	const underTitleSplit = new SplitText('.underTitle', {type: 'chars'});
	const text = new SplitText('.pgsOne', {type: 'words'})
	const quote = document.getElementsByClassName('o-introTxt');
	const elements = document.getElementsByClassName('anim');

	TweenMax.staggerFrom(quote, 1.1, {y: 30, autoAlpha: 0, ease:Power4.easeNone}, 0.3)
	TweenMax.staggerTo(titleSplit.chars, 7, {cycle:{y:[-5, 5]}, autoAlpha: 1, scale:1, ease:Power4.easeOut}, 0.1);
	TweenMax.staggerFrom(underTitleSplit.chars, 0.7, {y: 5, delay: 0.5, autoAlpha: 0, ease:Power4.easeOut}, -0.05);


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

	const textSlide = document.querySelector('.pgsOne');
	const companyTl = new TimelineLite({paused:true});

	companyTl.staggerFrom(text.words, 2, {y: 60, autoAlpha: 0, ease:Power4.easeOut}, 0.02)

	const arrayItems = [textSlide, ...elements];

	function activeAnimate() {
		Array.from(arrayItems).forEach( e => {
			// const slideInAt = (window.scrollY + window.innerHeight);
			const topOfElement = e.getBoundingClientRect().top - window.innerHeight;
			const isTopishShown = topOfElement < 0;

			if(isTopishShown) {
				companyTl.play();
				e.classList.add('active');
			} 
		});
	}

	window.addEventListener('scroll', debounce(activeAnimate));
}
