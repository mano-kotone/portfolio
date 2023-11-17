

//newsのすべてお知らせの切り替え

const link = document.querySelectorAll('.news__link');

link.forEach(function (link) {
    link.addEventListener('click', function () {
        const news = this.getAttribute('data-news');
        console.log(link);

        this.classList.add('before');

        const all = document.querySelector('#all')
        const notice = document.querySelector('#notice');
        const linkAll = document.querySelector('#news__linkAll');
        const linkNotice = document.querySelector('#news__linkNotice');

        if (news === '#all') {
            all.classList.add('display-block');
            notice.classList.add('display-none');
            all.classList.remove('display-none');
            notice.classList.remove('display-block');
            linkNotice.classList.remove('before');
        } else if (news === '#notice') {
            notice.classList.add('display-block');
            all.classList.add('display-none');
            notice.classList.remove('display-none');
            all.classList.remove('display-block');
            linkAll.classList.remove('before');
        }
    });
});