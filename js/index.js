$(function () {
    $('.menu').click(function () {
        $('.footer').toggle();
        if($('section').attr('class')!=='on'){
            $('section').addClass('on');
            $('header').addClass('fixed');
            $('.consumer_web').addClass('fixed');
            $('header').css('top',0)
        }else{
            $('section').removeClass('on');
            $('header').removeClass('fixed');
            $('.consumer_web').removeClass('fixed');
        }
        $('.hide_box').slideToggle('slow');
        $('.wrap').slideToggle('slow')
    })
    $('.consumer_web').click(function () {
        $('.hideCnt01').toggle();
        $('.hideCnt02').slideDown('slow')
    })
})