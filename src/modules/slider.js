"use strict";
import Swiper, { Navigation, Pagination } from "swiper";

// const swiperButton = document.querySelector(".services-arrow");
// const swiperButtonPrev = swiperButton.querySelector(".arrow-left");
// const swiperButtonNext = swiperButton.querySelector(" .arrow-right");

const slider = () => {
  const swiper = new Swiper(".swiper", {
    modules: [Navigation, Pagination],
    slidesPerView: 1,
    pagination: {
      el: ".swiper-pagination",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      375: {
        slidesPerView: 1,
        spaceBetween: 40,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      850: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      960: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      1050: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      1170: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 40,
      },

      1250: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      1290: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      1410: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      1477: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      1490: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      1920: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
    },
  });
};
export default slider;
