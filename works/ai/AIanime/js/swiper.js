const swiperWorks = new Swiper('.work__swiper', {

    loop: true,
    effect: 'fade',
    slidesPerView: 1,
    centeredSlides: true,
    speed: 1000,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },

    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: 'true'
    },
});

const swiperNews = new Swiper('.news__swiper', {

    effect: 'slide',
    slidesPerView: 1.15,
    spaceBetween: 25,
    slidesOffsetAfter: 65,

    breakpoints: {
        768: {
            slidesPerView: 2.1,
            spaceBetween: 71,
            slidesOffsetBefore: 220,
            slidesOffsetAfter: 300,
        }
    },

    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: 'true'
    },
});

const swiperFooter = new Swiper('.footer__swiper', {

    loop: true,
    effect: 'slide',
    slidesPerView: 1,
    spaceBetween: 20,
    speed: 12000,
    autoplay: {
        delay: 0,
    },
    breakpoints:{
        768:{
            spaceBetween: 40,
        }
    }
});

