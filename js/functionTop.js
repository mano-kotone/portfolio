//mvビデオ再生速度
const video01 = document.querySelector('#mv__swiper-video-01');
const video02 = document.querySelector('#mv__swiper-video-02');
const video03 = document.querySelector('#mv__swiper-video-03');
video01.playbackRate = 0.7;
video02.playbackRate = 0.9;
video03.playbackRate = 0.75;


$(function () {
    //worksのswich用クラス
    $('#works__switchLine').on('click', function () {

        if ($('#works__ul').hasClass('works__ulLine')) {
        } else {
            $('#works__ul').addClass('works__ulLine');
            $('#works__ul').removeClass('works__ulBlock')
        }
    });

    $('#works__switchBlock').on('click', function () {
        if ($('#works__ul').hasClass('works__ulBlock')) {
        } else {
            $('#works__ul').addClass('works__ulBlock');
            $('#works__ul').removeClass('works__ulLine')
        }
    })

});