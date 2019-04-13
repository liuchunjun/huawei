$(function () {
    let compareArr=[];
    $('.checkBtn').click(function () {
        if(!$(this).attr('checked')){
            $(this).attr('checked',true)
        }else{
            $(this).attr('checked',false)
        }
        console.log($(this).attr('checked'))

        if(compareArr.indexOf($(this).parent().parent().children('.phone_name').children('b').text())<0){
            if(compareArr.length<2) {
                compareArr.push($(this).parent().parent().children('.phone_name').children('b').text())
            }
        }else{
            compareArr.splice(compareArr.indexOf($(this).parent().parent().children('.phone_name').children('b').text()), 1)
        }

        if($('input:checked').length>=2){
            $('input:not(:checked)').attr("disabled",true);
        }else{
            $('input:not(:checked)').attr("disabled",false);
        }

        $('.compare_result').show();

        $('.interface_phone').children('.p1').text("");
        compareArr.forEach((item,index)=>{
            $('.interface_phone').eq(index).children('.p1').text(compareArr[index])
        })

    })

    $('.del').on('touchend',function () {
        console.log(1)
        let text = $(this).prev().text();
        compareArr.splice($(this).prev().text(),1);
        $(this).prev().text("");

        $('.phone_name').children(`b:contains(${text})`).parent().parent().children('.compare').children('input:checked').attr('checked',false)
        console.log(compareArr)

        if(compareArr.length==0){
            $('.compare_result').hide()
        }
    })
})
