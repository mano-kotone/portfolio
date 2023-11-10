//mvビデオ再生速度
const video01 = document.querySelector('#mv__swiper-video-01');
const video02 = document.querySelector('#mv__swiper-video-02');
const video03 = document.querySelector('#mv__swiper-video-03');
video01.playbackRate = 0.85;
video02.playbackRate = 0.9;
video03.playbackRate = 0.8;

// 画面下部の砂嵐の生成
// const fixSunaarashi = document.querySelector('#fixed__sunaarashi');
const sliderSunaarashi = document.querySelector('#gnavSlider');


function sunaarashi() {
    if (!!!document.createElement('canvas').getContext) {
        return false;
    }
    var canvas = document.createElement('canvas'),
        ctx = canvas.getContext('2d'),
        x, y, c

    animationInterval = 30
    canvas.width = 100;
    canvas.height = 100;
    let arry = [55, 100, 155]

    function draw() {
        for (x = 0; x < canvas.width; x++) {
            for (y = 0; y < canvas.height; y++) {
                c = arry[Math.floor(Math.random() * arry.length)];
                ctx.fillStyle = 'rgb(' + c + ',' + c + ',' + c + ')';
                ctx.fillRect(x, y, 3, 3);
            }
        }
        // fixSunaarashi.style.backgroundImage = "url(" + canvas.toDataURL("image/png") + ")";
        sliderSunaarashi.style.backgroundImage = "url(" + canvas.toDataURL("image/png") + ")";
        // requestAnimationFrame(draw);
        setTimeout(() => {
            requestAnimationFrame(draw);
        }, animationInterval);
    }

    draw();
}

sunaarashi()


//スライドメニュー
// const btn = getElementById('gnavSlider__btn');

$(function () {
    $('#gnavSlider__btn').on('click', function () {
        $('#header').toggleClass('header');
        $('#header').toggleClass('header__fixed');
        $('#gnavSlider').toggleClass('gnavSlider__slide');
        $('#gnavSlider__btn').toggleClass('gnavSlider-click gnavSlider__btn');
        $('#gnavSlider__btnlineTop').toggleClass('btnTop-click');
        $('#gnavSlider__btnlineBottom').toggleClass('btnBottom-click');
    });
    $('.gnavSlider__list').on('click', function () {
        $('#header').addClass('header');
        $('#header').removeClass('header__fixed');
        $('#gnavSlider').removeClass('gnavSlider-click');
        $('#gnavSlider__btnlineTop').removeClass('btnTop-click');
        $('#gnavSlider__btnlineBottom').removeClass('btnBottom-click');
        $('#gnavSlider__btn').addClass('gnavSlider__btn');
    })


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


// message__gallery内の要素の記述
let flg = 1;

// ランダムなクラス名
const assignRandomClass = (int) => {
    return `message__galleryList${int}`;
}

const generateAndAppendElements = () => {
    for (let i = 0; i < numberOfElements; i++) {
        const int = Math.floor(Math.random() * 36) + 1;
        const element = document.createElement('span');
        // クラス名付与        
        const numAssignRandomClass = assignRandomClass(int);
        element.classList.add(numAssignRandomClass);
        container.appendChild(element);
    }
    flg = 0;
}


// container内53個のspan生成
const container = document.getElementById('message__galleryContainer');
const galleryContainerY = container.getBoundingClientRect().top;
const screenWidth = window.innerWidth;
const windowHeight = window.innerHeight;

let numberOfElements;
if (screenWidth < 500) {
    numberOfElements = 62;
} else if (screenWidth < 800) {
    numberOfElements = 100;
} else {
    numberOfElements = 196;
};


let isElementsGenerated = false;

window.addEventListener('scroll', () => {
    const ST = window.scrollY;
    if (ST > galleryContainerY - windowHeight * 0.8 && !isElementsGenerated) {
        if (flg) { generateAndAppendElements(); }
    }
});