//スライドメニュー
const accordion = document.querySelectorAll('.history__btn');

accordion.forEach(show => {

    show.addEventListener('click', () => {
        const showItem = show.nextElementSibling;
        const btn = show.querySelector('.btn');

        showItem.classList.toggle('show');
        btn.classList.toggle('minus');
    });
});