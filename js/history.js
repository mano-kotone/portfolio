//historyページ用フォルダ

//スライドメニュー
const accordion = document.querySelectorAll('.history__btn');

accordion.forEach(show => {

    show.addEventListener('click', () => {
        const btn = show.querySelector('.btn');
        btn.classList.toggle('minus');
    });
});

$(function () {
    $('.history__btn').on('click', function () {
        $(this).next('.accordion').stop().slideToggle(300);
    })
});