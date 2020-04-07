$(document).ready(function() {
    new Swiper ('.swiper-container', {
      loop: true,
      slidesPerView: 3,
      centeredSlides: true,
      spaceBetween: 10,
      autoplay: true,
      navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

		
    });
});


var swiper = new Swiper('.swiper-container', {

  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 500px
   500: {
      slidesPerView: 1,
      spaceBetween: 30
    },
   
  }
})
