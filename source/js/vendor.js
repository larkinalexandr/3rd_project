// Swiper 7.4.1
import './vendor/swiper';

/* eslint-disable no-new */
/* eslint-disable no-undef */

new Swiper('.trainers__swiper', {

  navigation: {
    nextEl: '.trainers__slide-button--next',
    prevEl: '.trainers__slide-button--prev',
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  },
});

new Swiper('.reviews__swiper', {

  navigation: {
    nextEl: '.reviews__slide-button--next',
    prevEl: '.reviews__slide-button--prev',
  },

  spaceBetween: 80,
});
