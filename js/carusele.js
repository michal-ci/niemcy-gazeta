$(document).ready(function() {
    new Swiper ('.swiper-container', {
      loop: true,
      slidesPerView: 1,
      centeredSlides: true,
      spaceBetween: 10,
      autoplay: true,
		

      navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

		  breakpoints: {
        640: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
			    }
    });
});
