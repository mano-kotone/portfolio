
//ローディングアニメーション
const animetionWrap = document.querySelector('#header__ttlWrap');
const animetionttl = document.querySelector('#header__ttl');
const header__bgBlur01 = document.querySelector('#header__bgBlur--01');
const bodyHidden = document.querySelector('body');
const htmlHidden = document.querySelector('html');

window.addEventListener('load', () => {
    animetionWrap.classList.add('loadWrap');
    animetionttl.classList.add('loadTtl');
    header__bgBlur01.classList.add('loadBlur');
    bodyHidden.classList.add('hidden');
    htmlHidden.classList.add('hidden');
})


//オープニングアニメーション
animetionWrap.addEventListener('animationend', () => {
    bodyHidden.classList.remove('hidden');
    htmlHidden.classList.remove('hidden');
    const nav = document.querySelectorAll('nav');
    const headerBox = document.querySelector('#header__box');
    const headerTxt = document.querySelector('#header__txt');
    const headerCopy01 = document.querySelector('#header__copy--01')

    nav.forEach(nav => {
        nav.classList.add('showFadeIn');
    })

    headerBox.classList.add('showFadeDown');
    headerTxt.classList.add('showFadeScaleX');
    headerCopy01.classList.add('showFadeScale');
})


//スライドメニュー
const gnavSlide = document.querySelector('#gnavSlide__ul');
const gnavSlideNone = document.querySelector('.gnavSlide__ulNone');
const gnavSlideBtn = document.querySelector('#gnavSlide__btn');

const gnavWidth = gnavSlide.clientWidth;

gnavSlide.style.marginLeft = -gnavWidth + 'px'


gnavSlideBtn.addEventListener('click', () => {
    gnavSlide.classList.toggle('gnavSlide__ulNone');
    gnavSlide.classList.toggle('gnavSlide__ulShow');

    if (gnavSlide.classList.contains('gnavSlide__ulNone')) {
        gnavSlide.style.marginLeft = -gnavWidth + 'px';

    } if (gnavSlide.classList.contains('gnavSlide__ulShow')) {
        gnavSlide.style.marginLeft = '0px';
    };
});


// //フェードアニメーション
class FadeAnimation {
    constructor(elements, prefix) {
        this.elements = elements;
        this.prefix = prefix;
        this.windowHeight = window.innerHeight;
        this.handleScroll();
        window.addEventListener('scroll', this.handleScroll.bind(this));
    }

    handleScroll() {
        const ST = window.scrollY;

        this.elements.forEach(element => {
            const target = element.getBoundingClientRect().top + window.scrollY;;

            if (ST > target - this.windowHeight + 100) {
                element.classList.add(`show${this.prefix}`);
            }
        });
    }
}

const fadeScaleX = document.querySelectorAll('.FadeScaleX');
const fadeUp = document.querySelectorAll('.FadeUp');
const fadeScale = document.querySelectorAll('.FadeScale');
const fadeIn = document.querySelectorAll('.FadeIn');
const fadeRotate = document.querySelectorAll('.FadeRotate');
const fadeTxt = document.querySelectorAll('.FadeTxt');

new FadeAnimation(fadeScaleX, 'FadeScaleX');
new FadeAnimation(fadeUp, 'FadeUp');
new FadeAnimation(fadeScale, 'FadeScale');
new FadeAnimation(fadeIn, 'FadeIn');
new FadeAnimation(fadeRotate, 'FadeRotate');
new FadeAnimation(fadeTxt, 'FadeTxt');


//teamセクションのホバーアニメーション
const picItem = document.querySelectorAll('.team__pic');
const picWrap = document.querySelectorAll('.team__container');
const minmax = (num) => {
    return Math.min(30, Math.max(-30, num));
}

picWrap.forEach((picWrap, index) => {
    picWrap.addEventListener('mousemove', e => {
        const rect = picItem[index];
        const current = rect.getBoundingClientRect();
        const currentX = current.x + (current.width / 2)
        const currentY = current.y + (current.height / 2)

        const y = minmax(e.clientY - currentY);
        const x = minmax(e.clientX - currentX);

        rect.style.transform = `scale(1.12) rotateY(${y}deg) rotateX(${x}deg)`;
    });
});
