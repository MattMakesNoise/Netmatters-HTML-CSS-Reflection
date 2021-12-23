//=======================================================================================================//
//=======================================================================================================//
//======================================== SLICK CAROUSEL PLUGIN ========================================//
//=======================================================================================================//
//=======================================================================================================//
$(document).ready(function(){
    $('.carousel').slick({
        autoplay: true,
        autoplaySpeed: 5000, //Time between slides
        speed: 300, //Transition speed
        dots: true, //Show dots
        infinite: true, //Loop slides forever
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: false, //Don't show previous arrow
        nextArrow: false //Don't show next arrow
    });
});

//=======================================================================================================//
//=======================================================================================================//
//======================================== STICKY HEADER ================================================//
//=======================================================================================================//
//=======================================================================================================//
const body = document.body;
let lastScroll = 0; 
const sticky = document.querySelector('#static_head');

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
//   console.log(currentScroll);
  if (currentScroll <= 209) {
    body.classList.remove("scroll-up");
    return;
  }

  if (currentScroll > lastScroll && !body.classList.contains("scroll-down")) {
    body.classList.remove("scroll-up");
    body.classList.add("scroll-down");
  } else if (currentScroll < lastScroll && body.classList.contains("scroll-down")) {
    body.classList.remove("scroll-down");
    body.classList.add("scroll-up");
  }
  lastScroll = currentScroll;
})
//=====================================================================================================//
//=====================================================================================================//
//======================================== COOKIES POPUP ==============================================//
//=====================================================================================================//
//=====================================================================================================//
const popup = document.querySelector('.cookies-modal-outer');
const changeSettingsBtn = document.querySelector('.change-settings');
const acceptCookiesBtn = document.querySelector('.accept-cookies');
let cookiesYorN = localStorage.getItem('consent');

//Check to see if cookie consent has been given. If not show the popup
window.onload = function() {
    if(cookiesYorN === "true") {
        popup.style.display = 'none';
    } else {
        popup.style.display = 'block';
    }
};
//Save to users input to storage
function saveCookie () {
    localStorage.setItem('consent', 'true');
    console.log(localStorage);
    cookiesYorN = localStorage.getItem('consent');
    console.log(cookiesYorN);
}
//Check the storage
function cookieCheck () {
    return localStorage.getItem('consent');
}
//Event listener for accept cookies
acceptCookiesBtn.addEventListener('click', () => {
    saveCookie();
    console.log('You accepted the cookies');
    popup.style.display = 'none';
});

//====================================================================================================//
//====================================================================================================//
//======================================== BURGER SPIN ===============================================//
//====================================================================================================//
//====================================================================================================//
const burgerButton = document.querySelector('.menu-btn');
const overlay = document.querySelector('.site-overlay');
let burgerSpin = true;
const hero = document.querySelector('.hero-wrapper'); 
const container = document.querySelector('.page-wrapper');

burgerButton.addEventListener('click', () => {
    burgerButton.classList.add('is-active');
    body.style.overflow = 'hidden';
    burgerSpin = true;
    console.log(lastScroll);
    sticky.classList.add('head-top');
    sticky.style.position = 'sticky';
    body.style.top = '0';
    // if(lastScroll = 0) {
        
    // } 
    // if(lastScroll > 300 && !body.classList.contains("scroll-down")) {
    //     sticky.classList.add('head-top');
    //     sticky.style.position = 'sticky';
    //     console.log(sticky.style.position);
    // } else {
    //     sticky.classList.add('head-push');
    // }
});

overlay.addEventListener('click', () => {
    if(burgerSpin === true) {
        burgerButton.classList.remove('is-active');
        body.style.overflow = 'auto';
        // sticky.classList.remove('head-push');
        sticky.style.position = 'fixed';
        sticky.classList.remove('head-top');
        burgerSpin = false;
        body.style.top = '209px';
    }
})

