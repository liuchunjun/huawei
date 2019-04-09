$(function () {
    let compareArr=[];

    $('.checkBtn').click(function () {
        if(!$(this).attr('checked')){
            $(this).attr('checked',true)
        }else{
            $(this).attr('checked',false)
        }
        console.log($(this).attr('checked'))

        if(compareArr.length<2){
            if(compareArr.indexOf($(this).parent().parent().children('.phone_name').children('b').text())<0){
                compareArr.push($(this).parent().parent().children('.phone_name').children('b').text())
            }else{
                compareArr.splice(compareArr.indexOf($(this).parent().parent().children('.phone_name').children('b').text()), 1)
            }
        }else{
        }
        if($('input:checked').length>=2){
            $('input:not(:checked)').attr("disabled",true);
        }else{
            $('input:not(:checked)').attr("disabled",false);
        }

        console.log(compareArr)
    })
})





        // }else{
        //     compareArr.push($(this).parent().parent().children('.phone_name').children('b').text())
        // }
        // console.log(compareArr)

        // if(compareArr.length!==0){
        //     $('.compare_result').css('display','block');
        // }