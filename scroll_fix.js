//resize landing page per viewport
// Listen to the resize event
window.addEventListener('resize', () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});



//defines colour of drop-shadow ......... nvm, quicker to just style 
// var topHome = document.querySelector('.top_home');

// function ShadowCol() {
//   console.log(topHome.id);
//   topHome.style.filter = `drop-shadow(0 0 0.4rem var(--${topHome.id}))`;
// };

// function noShadowCol(){
//   topHome.style.filter = 'none';
// };


// topHome.addEventListener("mouseenter", ShadowCol);
// topHome.addEventListener("mouseout", noShadowCol);


//defines position at which scroll bar gets sticky
// const nav = document.querySelector('#main_nav');
// const topOfNav = nav.offsetTop; //gets the distance from top

// function fixNav() {
//   console.log(topOfNav, window.scrollY);
//   if (window.scrollY >= topOfNav) {
//     document.querySelector(".main_galleries").style.paddingTop = nav.offsetHeight + 'px';
//     document.body.classList.add('fixed-nav');
//   } else {
//     document.body.classList.remove('fixed-nav');
//     document.querySelector(".main_galleries").style.paddingTop = 0;
//   }
// };

// window.addEventListener('scroll', fixNav);



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



//defines colour of symbol backgrounds on hover
// const hoverArea = document.querySelector('.symbol_list');


// function colourChange(e){
//   console.log(e.target.className);

//   if (e.target.className == 'work_colour') {
//     const cof = [...document.querySelectorAll(e.target.className)];
//     console.log(e.target.className);
//     document.documentElement.style.setProperty('--galcol', '#F13C20');
//   };
//   if (e.target.className == 'film_colour') {
//     const cof = [...document.querySelectorAll(e.target.className)];
//     console.log(e.target.className);
//     document.documentElement.style.setProperty('--galcol', '#D79922');
//   };
//   if (e.target.className == 'party_colour') {
//     const cof = [...document.querySelectorAll(e.target.className)];
//     console.log(e.target.className);
//     document.documentElement.style.setProperty('--galcol', '#565656');
//   };
//   if (e.target.className == 'fav_colour') {
//     const cof = [...document.querySelectorAll(e.target.className)];
//     console.log(e.target.className);
//     document.documentElement.style.setProperty('--galcol', '#E4599A');
//   };
//   if (e.target.className == 'logo fav_logo') {
//     const cof = [...document.querySelectorAll(e.target.className)];
//     console.log(e.target.className);f
//     document.documentElement.style.setProperty('--galcol', '#E4599A');
//   };
//   if (e.target.className == 'cof_colour') {
//     const cof = [...document.querySelectorAll(e.target.className)];
//     console.log(e.target.className);
//     document.documentElement.style.setProperty('--galcol', '#004489');
//   };
//   if (e.target.className == 'com_colour') {
//     const cof = [...document.querySelectorAll(e.target.className)];
//     console.log(e.target.className);
//     document.documentElement.style.setProperty('--galcol', '#66FCF1');
//   };
// };

// hoverArea.addEventListener('mouseover', colourChange);