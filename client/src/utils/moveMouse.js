import {TweenMax, Back} from 'gsap';
import CustomEase from '../utils/CustomEase';

export function moveMouse(element) {
     var mouse = {x: 0, y: 0};

     element.addEventListener('mousemove', function (event) {
       var x, y;
       if (event.pageX || event.pageY) {
         x = event.pageX;
         y = event.pageY;
       } else {
         x = event.clientX + document.body.scrollLeft +
             document.documentElement.scrollLeft;
         y = event.clientY + document.body.scrollTop +
             document.documentElement.scrollTop;
       }
       x -= element.offsetLeft + window.innerWidth * 0.06;
       y -= element.offsetTop;
       mouse.x = x;
       mouse.y = y;

       TweenMax.to('.burger', 1, {left: x, top: y})
       
     }, false);

     element.addEventListener('mouseleave', function(event) {
        TweenMax.to('.burger', 0.5, {ease:CustomEase.create("custom", "M0,0,C0.128,0.572,0.252,1.08,0.512,1.138,0.692,1.178,0.838,1,1,1"), top:'50%', left:'50%'})
        // TweenMax.to('.burger', 0.6, {ease:Back.easeOut, top:'50%', left:'50%'})
     }, false);

     return mouse;
};