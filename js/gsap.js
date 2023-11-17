gsap.registerPlugin(ScrollTrigger);


//topページ
//messageフェードインアニメーション
//テキスト部分
const fadeInBox = document.querySelectorAll('#message__ttl')

fadeInBox.forEach(target => {
    const fadeIn01 = gsap.utils.toArray(target.querySelectorAll('.fadeIn01'));

    gsap.fromTo(fadeIn01,
        {
            autoAlpha: 0,
            y: '100%',
        },
        {
            autoAlpha: 1,
            y: 0,
            duration: 2,
            stagger: 0.2,

            scrollTrigger: {
                trigger: target,
                start: 'top 70%',
            }
        })
}); gsap.registerPlugin(ScrollTrigger);

const fadeIn = document.querySelectorAll('.fadeIn')

fadeIn.forEach(target => {
    gsap.fromTo(target,
        {
            autoAlpha: 0,
            y: '20%',
        },
        {
            autoAlpha: 1,
            y: 0,
            duration: 2,

            scrollTrigger: {
                trigger: target,
                start: 'top 70%',
            }
        })
});
//circle部分
gsap.fromTo(
    '#scaleAnimation',
    {
        scale: 0,
        backgroundColor: '#e8e8e8',
    },
    {
        scale: 1,
        duration: 1.5,
        backgroundColor: 'transparent',

        scrollTrigger: {
            trigger: '#message__container',
            start: 'top 70%',
        }
    }
);

const circlePic = document.querySelectorAll('.message__circlePic');
circlePic.forEach(target => {
    gsap.fromTo(
        target,
        {
            autoAlpha: 0,
        },
        {
            autoAlpha: 1,
            duration: 0,
            delay: 0.8,

            scrollTrigger: {
                trigger: '#message__container',
                start: 'top 70%',
            }
        }
    )
});



//sectionタイトルアニメーション
const secTtl = document.querySelectorAll('.h2');

secTtl.forEach(target => {
    const secTtlTxt = gsap.utils.toArray(target.querySelectorAll('span'));

    //1回目の表示
    gsap.fromTo(
        secTtlTxt,
        {
            autoAlpha: 0,
            y: '20%',
        },
        {
            autoAlpha: 1,
            y: 0,
            stagger: 0.2,

            scrollTrigger: {
                trigger: target,
                start: 'top 80%',
                // markers: true,
            },
        },
    );
});


//worksのswitchボタンの追従
gsap.to('#works__switch', {
    scrollTrigger: {
        trigger: '#works__switch',
        start: 'bottom 95%',
        end: 'top 106%',
        endTrigger: '#skill',
        pin: true,
    }
});



