
// message__gallery内の要素の記述

const getRandomInt = () => {
    return Math.floor(Math.random() * 36) + 1;
}

// ランダムなクラス名
function assignRandomClass(element) {
    const randomClassName = `message__galleryList${getRandomInt()}`;
    element.classList.add(randomClassName);
}

// container内53個のspan生成
const container = document.getElementById('message__galleryContainer');

const screenWidth = window.innerWidth;

let numberOfElements;
if (screenWidth < 500) {
    numberOfElements = 54;
} else if (screenWidth < 1000) {
    numberOfElements = 90;
} {
    numberOfElements = 162;
};

for (let i = 0; i < numberOfElements; i++) {
    const element = document.createElement('span');

    // クラス名付与
    assignRandomClass(element);
    element.classList.add('message__galleryList');

    container.appendChild(element);
}

//アニメーション用クラス

function assignRandomClassAnime(element) {
    const AnimeName = `message__galleryListAninme${getRandomInt()}`;
    element.classList.add(AnimeName);
};

const galleryList = document.querySelectorAll('#message__galleryContainer span');
const windowHeight = window.innerHeight;
const galleryContainerY = container.getBoundingClientRect().top;


window.addEventListener('scroll', () => {
    ST = window.scrollY;
    galleryList.forEach(galleryListItem => {
        if (ST > galleryContainerY - windowHeight * 0.8) {
            assignRandomClassAnime(galleryListItem)
        }
    });
});



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
    canvas.width = 30;
    canvas.height = 30;
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
        $('#gnavSlider').toggleClass('gnavSlider__slide');
        $('#gnavSlider__btn').toggleClass('gnavSlider-click gnavSlider__btn');
        $('#gnavSlider__btnlineTop').toggleClass('btnTop-click');
        $('#gnavSlider__btnlineBottom').toggleClass('btnBottom-click');
    });
    $('.gnavSlider__list').on('click', function () {
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

