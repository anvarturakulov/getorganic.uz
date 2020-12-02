// Main js file
"use strict";

import Swiper, { Navigation, Pagination } from 'swiper';
Swiper.use([Navigation, Pagination]);
import 'swiper/swiper-bundle.css';

let swiperSert, swiperReview;

swiperSert = new Swiper('.sert__slider', {
    direction: 'vertical',
    loop: true,
}); 

swiperReview = new Swiper('.review__slider', {
    slidesPerView: 1,
    slidesPerColumn: 1,
    spaceBetween: 0
}); 


let menuBtn = document.querySelector('.menu__btn');
let menu = document.querySelector('.top__menu');
let topMenuBox = document.querySelector('.top__menu-box');

menuBtn.addEventListener('click',()=>{
    if (menu.style.display == 'block') {
        menu.style.display = 'none';
        topMenuBox.style.height = '60px';
        topMenuBox.style.opacity = '0.8';
    } else {
        menu.style.display = 'block';
        topMenuBox.style.height = '240px';
        topMenuBox.style.opacity = '1';
    }
});


let flag = document.querySelector('.flag');
let flagBox = document.querySelector('.flag__box');

flag.addEventListener('click', ()=>{
    let coords1 = flag.getBoundingClientRect();
    flagBox.style.left = coords1.left-105+"px";
    flagBox.style.top = coords1.top+26+18+window.pageYOffset+"px";
    if (flagBox.style.display == 'block') {
        flagBox.style.display = 'none';    
    } else {
        flagBox.style.display = 'block';
    }
});

document.addEventListener('click', (e)=> {
    if (e.target != flag && e.target.parentNode.parentNode.parentNode != flagBox) {
        if (flagBox.style.display == 'block') {
            flagBox.style.display = 'none';    
        }   
    } 
})

document.addEventListener('scroll', ()=> {
    if (flagBox.style.display == 'block') {
        flagBox.style.display = 'none';    
    }
});

document.querySelectorAll('a[href^="#"').forEach(link => {

    link.addEventListener('click', function(e) {
        e.preventDefault();
        let href = this.getAttribute('href').substring(1);
        const scrollTarget = document.getElementById(href);
        const topOffset = document.querySelector('.top__menu-box').offsetHeight;
        const elementPosition = scrollTarget.getBoundingClientRect().top;
        let offsetPosition = elementPosition - topOffset-40;
        if (href == 'contacts') {
            offsetPosition = elementPosition;
            console.log(href);
        }

        window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
});

