$(function () {
    $('.item_menu').click(function () {
        if($(this).next().css('display')=='block'){
            $(this).next().slideToggle()
            $(this).children('i').attr('class','show');
            return
        }else{
            $('.hide_p').css('display','none');
            $('.item_menu').children('i').attr('class','show');
            if($(this).children('i').hasClass('hide')){
                $(this).children('i').attr('class','show')
            }else{
                $(this).children('i').attr('class','hide')
            }
            $(this).next().slideToggle();
        }


    })
})