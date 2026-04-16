// Import Swiper modules from the correct path for Swiper v11+
import {
  Autoplay,
  EffectCreative,
  EffectFade,
  Grid,
  Mousewheel,
  Navigation,
  Pagination,
  Virtual,
} from 'swiper/modules';

// Export slider configurations with modules included
export const mySlider = {
  portfolio: {
    modules: [
      Navigation,
      Mousewheel,
      EffectFade,
      Grid,
      EffectCreative,
      Virtual,
    ],
    loop: true,
    navigation: {
      nextEl: '.next-item',
      prevEl: '.prev-item',
    },
    breakpoints: {
      320: {
        slidesPerView: 1.2,
        spaceBetween: 30,
        navigation: false,
      },
      768: {
        slidesPerView: 'auto',
        spaceBetween: 0,
      },
      1025: {
        direction: 'vertical',
      },
    },
  },
  clients: {
    modules: [Pagination, Autoplay],
    slidesPerView: 3,
    loop: true,
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1025: {
        slidesPerView: 3,
      },
    },
    spaceBetween: 50,
    grabCursor: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      type: 'bullets',
    },
  },
  portfolioItems: {
    modules: [Pagination],
    slidesPerView: 1,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      type: 'bullets',
    },
  },
};
