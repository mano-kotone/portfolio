
//mv動画
const mvSwiper = new Swiper('.mv__swiper', {

    slidesPerGroup: 1,
    loop: true,
    effect: 'fade',


    autoplay: {
        delay: 7000,
        disableOnInteraction: false,
    },


    pagination: {
        el: '.mv__swiper-pagination',
        type: 'bullets',
        clickable: 'true'
    },

    on: {
        transitionStart: function () {

            var videos = document.querySelectorAll('video');

            Array.prototype.forEach.call(videos, function (video) {
                video.pause();
            });
        },

        transitionEnd: function () {

            var activeIndex = this.activeIndex;
            var activeSlide = document.getElementsByClassName('mv__swiper-slide')[activeIndex];
            var activeSlideVideo = activeSlide.getElementsByTagName('video')[0];
            activeSlideVideo.play();

        },

    }
});



