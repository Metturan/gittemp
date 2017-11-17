import {TweenMax, TimelineLite, Power2, Power4, Circ} from 'gsap';
import SplitText from './SplitText';

function random(min, max){
	return (Math.random() * (max - min)) + min;
}

export function showUp() {
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

	let animateItems = document.getElementsByClassName('aniIn');
	let animateItems2 = document.getElementsByClassName('aniTransform');

	const arrayOfItems = [...animateItems, ...animateItems2]

	function activeAnimate() {
		Array.from(arrayOfItems).forEach( e => {
			// const slideInAt = (window.scrollY + window.innerHeight);
			const TopOfElement = e.getBoundingClientRect().top - window.innerHeight;
			const isTopishShown = TopOfElement < 0;
			// const isNotScrolledPast = window.scrollY < elementBottom;

			if(isTopishShown) {
				e.classList.add('active');
			} 
		});
	}
	window.addEventListener('scroll', debounce(activeAnimate));
}

export function burgerClick() {
	const burger = document.querySelector('.burger'),
		  top = document.querySelector('.top'),
		  bottom = document.querySelector('.bottom'),
		  middle = document.querySelector('.middle');

	burger.classList.add('menu');
	top.classList.add('menu');
	middle.classList.add('menu');
	bottom.classList.add('menu');
}

export function introText() {
	const textStrings = document.getElementsByClassName('o-introTxt');
	const rIntro = document.querySelector('.r-intro');
	const headers = document.getElementsByClassName('introAni');

	const introTextTL = new TimelineLite();

	introTextTL.add('start', 0.4)
	introTextTL.from(headers, 0.5, {delay: 0.5, ease:Circ.easeOut, x: -150, autoAlpha: 0}, 0)
	introTextTL.staggerFrom(textStrings, 1.0, {delay: 0.3, ease:Circ.easeOut, y: 50, autoAlpha: 0}, 0.2, 'start')
	introTextTL.from(rIntro, 0.8, {delay: 0.5, ease:Circ.easeOut, y: 50, autoAlpha: 0}, 'start')
}

export function squiggleLogo() {
		let splitT = new SplitText('.views', {type:'chars'});
}

export function bigTxtAnim() {
	const bigOutro = document.querySelector('.fontStyle');
	// const splitTxt = new SplitText(bigOutro, {type: 'chars'});
	const outroArray = bigOutro.children;
	// var colors = ["red", "blue", "green", "purple", "gray", "yellow", "orange"];
	const tlOutro = new TimelineLite({paused:true});
	tlOutro.staggerTo(outroArray, 0.2, {autoAlpha: 0.5, ease:Power2.easeOut}, 0.02)

	bigOutro.addEventListener('mouseenter', function(){
		tlOutro.play();
	});

	bigOutro.addEventListener('mouseleave', function() {
		tlOutro.reverse();
	});

	bigOutro.addEventListener('click', function() {
		Array.from(outroArray).forEach(e => {
			TweenMax.to(e, 0.7, {
				autoAlpha: 0,
				x: random(-75, 75),
				y: random(-75, 75),
				z: random(-75, 75),
				ease:Power4.easeOut,
			});
		});
		setTimeout(function() {TweenMax.set(outroArray, {display:'none'})}, 400)
	});
}




	