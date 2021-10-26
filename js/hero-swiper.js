const swiper = new Swiper('.swiper', {
    slidesPerView: 3,
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

  });