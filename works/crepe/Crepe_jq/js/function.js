$(function () {
    // スムーススクロール
    $('.gnav__link').on('click', function () {
        const target = $(this).attr('href');
        const targetPos = $(target).offset().top - 100;
        $('html, body').animate({ scrollTop: targetPos }, 300);
        return false;
    });

    //リサイズヘッダー
    const h1 = $('#header__ttl').offset().top;
    const mvh = $('#mv').height();

    $(window).on('scroll', function () {
        const ST = $(this).scrollTop();

        if (ST > h1 + 50) {
            $('#header').addClass('resizeheader');
            $('#header__ttl').addClass('resizeTtl');
        } else {
            $('#header').removeClass('resizeheader');
            $('#header__ttl').removeClass('resizeTtl');
        }


        if (ST >= mvh) {
            $('#gnav__ul').addClass('recolor');
            $('.gnav__link').addClass('recolorLink');
            $('#gnav__btnTop').addClass('recolorBtn');
            $('#gnav__btnMiddle').addClass('recolorBtn');
            $('#gnav__btnBottom').addClass('recolorBtn');
        } else {
            $('#gnav__ul').removeClass('recolor');
            $('.gnav__link').removeClass('recolorLink');
            $('#gnav__btnTop').removeClass('recolorBtn');
            $('#gnav__btnMiddle').removeClass('recolorBtn');
            $('#gnav__btnBottom').removeClass('recolorBtn');
        }
    });


    // ハンバーガーボタンのアニメーション
    $('#gnav__btn').on('click', function () {
        $('#gnav__btnTop').toggleClass('rotateTop');
        $('#gnav__btnMiddle').toggleClass('hideMiddle');
        $('#gnav__btnBottom').toggleClass('rotateBottom');

        // スライドメニュー
        $('#gnav__ul').toggleClass('nav');
    });


    //モーダルウィンドウ
    $('.menu__click').on('click', function () {
        const modal = $(this).attr('data-modal');
        $(modal).fadeIn(300, function () {
            $(this).on('click', function () {
                $(this).fadeOut(300);
            });
        });
    });

})