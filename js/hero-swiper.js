const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  lazy: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // mobile breakpoints for number of slides displayed

  breakpoints: {
    820: {
      slidesPerView: 2,
    },
    1400: {
      slidesPerView: 3,
    },
  },

});


// $(document).ready(function () {

//   $('.swiper-slide').mouseenter(function () {
//     $(this).addClass('focused');
//   })

//   $('.swiper-slide').mouseleave(function () {
//     $(this).removeClass('focused');
//   })

// })


$(document).on({
  mouseenter: function () {
    $(this).addClass('focused');

  },
  mouseleave: function () {
    $(this).removeClass('focused');

  }
}, '.swiper-slide')