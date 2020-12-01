// Main js file
"use strict";

// import Swiper, { Navigation, Pagination } from 'swiper';
// Swiper.use([Navigation, Pagination]);
// import 'swiper/swiper-bundle.css';

// let swiperSert, swiperReview;

// swiperSert = new Swiper('.sert__slider', {
//     direction: 'vertical',
//     loop: true,
// }); 

// swiperReview = new Swiper('.review__slider', {
//     slidesPerView: 1,
//     slidesPerColumn: 1,
//     spaceBetween: 0
// }); 


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