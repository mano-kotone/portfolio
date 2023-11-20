gsap.registerPlugin(ScrollTrigger);


//worksページ
//worksのswitchボタンの追従
gsap.to('#works__switch', {
    scrollTrigger: {
        trigger: '#works__switch',
        start: 'bottom 50%',
        end: 'top 106%',
        endTrigger: '#skill',
        pin: true,
    }
});