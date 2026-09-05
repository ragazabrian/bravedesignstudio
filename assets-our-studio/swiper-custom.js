

//Gallery Slider
var swiper = new Swiper(".carousel-swiper", {
  slidesPerView: 1.1,
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
  breakpoints: {
    // 648px ve üzeri için
    648: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    // 768px ve üzeri için
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    // 1024px ve üzeri için
    1024: {
      slidesPerView: 2.4,
      spaceBetween: 30,
    },
    // 1368px ve üzeri için
    1368: {
      slidesPerView: 3.2,
      spaceBetween: 30,
    },
    // 1536px ve üzeri için
    1536: {
      slidesPerView: 3.1,
      spaceBetween: 30,
    },
    // 1920px ve üzeri için
    1920: {
      slidesPerView: 3.8,
      spaceBetween: 30,
    },
  },
});

//Costumer Slider
var swiper = new Swiper(".costumer-swiper", {
  slidesPerView: 1.1,
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1.1,
      spaceBetween: 20
    },
    // when window width is >= 480px
    768: {
      slidesPerView: 1.8,
      spaceBetween: 30
    },
    // when window width is >= 640px
    1024: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    2560: {
      slidesPerView: 3,
      spaceBetween: 30
    }
  },
});