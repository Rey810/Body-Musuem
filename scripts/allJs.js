/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
        y.className += " responsive";
        z.className += " open";
    } else {
        x.className = "topnav";
        y.className = "gallery_title_area";
        z.classList.remove("open")
    }
}

const y = document.querySelector('.gallery_title_area');
const z = document.querySelector('.navicon-button');

//resize landing page per viewport
// Listen to the page load event
// window.addEventListener('onload', () => {
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);
let vw = window.innerWidth * 0.01;
document.documentElement.style.setProperty('--vw', `${vw}px`);
// });

//defines position at which scroll bar gets sticky
const nav = document.querySelector('#main_nav');
const topOfNav = nav.offsetTop; 

function fixNav() {
    // console.log(topOfNav, window.scrollY);
    if (window.scrollY >= topOfNav) {
        document.querySelector(".main_galleries").style.paddingTop = nav.offsetHeight + 'px';
        document.body.classList.add('fixed-nav');
    } else {
        document.body.classList.remove('fixed-nav');
        document.querySelector(".main_galleries").style.paddingTop = 0;
    }
};

window.addEventListener('scroll', fixNav);



//defines what clicking on BM. does - scrolls smoothly up to home page 
const logo = document.querySelector('.logo');
const home = document.querySelector('.gallery_banner');

function scrollToTop() {
    document.querySelector('.gallery_banner').scrollIntoView(true);
};

logo.addEventListener('click', scrollToTop);


//gallery pic animation on scroll
//debounce applied to checkSlide()
function debounce(func, wait = 10, immediate = true) {
    var timeout;
    return function () {
        var context = this, args = arguments;
        var later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};

const sliderImages = document.querySelectorAll('.pic_block');

function checkSlide() {
    sliderImages.forEach(sliderImage => {
        // half way through the image
        const slideInAt = (window.scrollY + window.innerHeight) - sliderImage.clientHeight / 2;
        // bottom of the image
        const imageBottom = sliderImage.offsetTop + sliderImage.clientHeight;
        const isHalfShown = slideInAt > sliderImage.offsetTop;
        const isNotScrolledPast = window.scrollY < imageBottom;
        if (isHalfShown && isNotScrolledPast) {
            sliderImage.classList.add('active');
            //only add if I want to remove class when pic is scrolled past
            // } else {
            //   sliderImage.classList.remove('active');
            // }
        }
    });
};

window.addEventListener('scroll', debounce(checkSlide));

//click on down arrows move page 100% up so that .gallery_symbols sits at top
const arrow = document.querySelector('#angle_down');
const symbols = document.querySelector('.gallery_symbols');

function scrollDown() {
    document.querySelector('.gallery_symbols').scrollIntoView(true);
};

arrow.addEventListener('click', scrollDown);

/**
 * main.js
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2016, Codrops
 * http://www.codrops.com
 */
; (function (window) {

    'use strict';

    function init() {
        [].slice.call(document.querySelectorAll('.nav')).forEach(function (nav) {
            var navItems = [].slice.call(nav.querySelectorAll('.nav__item')),
                itemsTotal = navItems.length,
                setCurrent = function (item) {
                    // return if already current
                    if (item.classList.contains('nav__item--current')) {
                        return false;
                    }
                    // remove current
                    var currentItem = nav.querySelector('.nav__item--current');
                    currentItem.classList.remove('nav__item--current');

                    // set current
                    item.classList.add('nav__item--current');
                };

            navItems.forEach(function (item) {
                item.addEventListener('click', function () { setCurrent(item); });
            });
        });

        [].slice.call(document.querySelectorAll('.link-copy')).forEach(function (link) {
            link.setAttribute('data-clipboard-text', location.protocol + '//' + location.host + location.pathname + '#' + link.parentNode.id);
            new Clipboard(link);
            link.addEventListener('click', function () {
                link.classList.add('link-copy--animate');
                setTimeout(function () {
                    link.classList.remove('link-copy--animate');
                }, 300);
            });
        });
    }

    init();

})(window);

const cardSection = document.querySelector('.landing_gallery');
const cards = cardSection.querySelector('.main_pic_block#landmovie');

function test() {
    console.log(cards.scrollLeft);
};

window.addEventListener('scroll', test);