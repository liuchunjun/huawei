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
        $('.hideCnt02').toggle()
    });

    $('.hide_menu').click(function () {
        $(this).next().slideToggle('slow');
        if($(this).children('i').hasClass('down')){
            $(this).children('i').attr('class','up')
        }else{
            $(this).children('i').attr('class','down')
        }
    })

    $('.consumer_web').click(function () {
        if($(this).children('i').hasClass('down')){
            $(this).children('i').attr('class','up')
            $(this).children('i').css('borderColor','transparent')
            $(this).children('i').css('borderTopColor','white')
        }else{
            $(this).children('i').attr('class','down');
            $(this).children('i').css('borderColor','transparent')
            $(this).children('i').css('borderBottomColor','white')
        }
    })

    $('.menu_tit').click(function () {
        if($(this).children('i').hasClass('down')){
            $(this).children('i').attr('class','up')
        }else{
            $(this).children('i').attr('class','down');
        }

        $(this).next().toggle()
    })

    $('.news_arrow').click(function () {
        $('.newsList').toggle();
        $('.white').toggle();
        $('.news_hide').slideToggle('slow');
        $('.footer').toggle();
        if($('.news_arrow').hasClass('in')){
            $('.news_arrow').removeClass('in');
            $('.news_arrow').css('backgroundImage','url("img/news_down.png")');
            $('.wrap').removeClass('on');
            $('.wrap').css('height','auto')
        }else{
            $('.news_arrow').addClass('in');
            $('.news_arrow').css('backgroundImage','url("img/news_up.png")');
            $('.wrap').addClass('on');
            $('.wrap').css('height','6rem')
        }
    })

    if($(".white")){
        $('.white').click(function () {
            $('.news_arrow').trigger('click')
        })
    }

})