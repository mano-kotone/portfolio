
$(function () {
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