const swiper = new Swiper('.swiper', {

    grabCursor: true,
    effect: "creative",
    creativeEffect: {
      prev: {
        shadow: true,
        translate: ["-20%", 0, -1],
      },
      next: {
        translate: ["100%", 0, 0],
      },
    },

    loop: true,

    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },

})

var mixer = mixitup('.works__row', { 
  animation: {
    duration: 300
},

load: {
  filter: '.all'
}
})

let header = document.querySelector('.header');
let nav = document.querySelector('.header__nav');
let navToggle = document.querySelector('.navToggle');

navToggle.addEventListener('click', () => {
  nav.classList.toggle ('header__nav-show');
});