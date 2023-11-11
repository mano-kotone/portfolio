//リサイズ時に再読み込み
let originalWidth = window.innerWidth;

window.addEventListener('resize', () => {
    let currentWidth = window.innerWidth;
    let sizeDiffrence = Math.abs(currentWidth - originalWidth);

    if (sizeDiffrence >= 300) {
        location.reload();
    }
});

//スライドメニュー
$(function () {
    $('#gnavSlider__btn').on('click', function () {
        $('body').toggleClass('body');
        $('#header').toggleClass('header');
        $('#header').toggleClass('header__fixed');
        $('#gnavSlider').toggleClass('gnavSlider__slide');
        $('#gnavSlider__btn').toggleClass('gnavSlider-click gnavSlider__btn');
        $('#gnavSlider__btnlineTop').toggleClass('btnTop-click');
        $('#gnavSlider__btnlineBottom').toggleClass('btnBottom-click');
    });
    $('.gnavSlider__list').on('click', function () {
        $('body').addClass('body');
        $('#header').addClass('header');
        $('#header').removeClass('header__fixed');
        $('#gnavSlider').removeClass('gnavSlider-click');
        $('#gnavSlider__btnlineTop').removeClass('btnTop-click');
        $('#gnavSlider__btnlineBottom').removeClass('btnBottom-click');
        $('#gnavSlider__btn').addClass('gnavSlider__btn');
    })
});
