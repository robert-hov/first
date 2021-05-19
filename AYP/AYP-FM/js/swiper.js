var swiper = new Swiper('.ayp-shows-swiper', {
    slidesPerView: 4,
    spaceBetween: 30,
    pagination: {
      el: '.ayp-shows-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.shows-swiper-button-next',
      prevEl: '.shows-swiper-button-prev',
    },
    breakpoints: {
      1024: {
        slidesPerView: 4,
        spaceBetween: 30
      },
      667: {
        slidesPerView: 3,
        spaceBetween: 20
      },
      414: {
        slidesPerView: 2.5,
        spaceBetween: 20
      },
      320: {
        slidesPerView: 1.5,
        spaceBetween: 10
      },
    }
});

var swiper = new Swiper('.ayp-podcasts-swiper', {
  // slidesPerView: 7,
  spaceBetween: 30,
  pagination: {
    el: '.ayp-podcasts-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.podcasts-swiper-button-next',
    prevEl: '.podcasts-swiper-button-prev',
  },
  breakpoints: {
    1024: {
      slidesPerView: 7,
      spaceBetween: 30
    },
    900: {
      slidesPerView: 6,
      spaceBetween: 20
    },
    667: {
      slidesPerView: 4,
      spaceBetween: 15
    },
    320: {
      slidesPerView: 3,
      spaceBetween: 15
    }
  },
});

var swiper = new Swiper('.ayp-clips-swiper', {
  slidesPerView: 4,
  spaceBetween: 30,
  pagination: {
    el: '.ayp-clips-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.clips-swiper-button-next',
    prevEl: '.clips-swiper-button-prev',
  },
  breakpoints: {
    1024: {
      slidesPerView: 4,
      spaceBetween: 30
    },
    667: {
      slidesPerView: 3,
      spaceBetween: 20
    },
    414: {
      slidesPerView: 2.5,
      spaceBetween: 20
    },
    320: {
      slidesPerView: 1.5,
      spaceBetween: 10
    },
  }
});