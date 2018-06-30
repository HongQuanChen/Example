$(function () {

    //判断两次密码是否一样
    $("#password1").blur(function(){
        var cpassword = $.trim($("#password").val());
        var cpassword1 = $.trim($("#password1").val());
        if(cpassword1 != ""){
            if(cpassword == cpassword1){
                $("#tsmm1").css('display','none');
            }
            else{
                $("#tsmm1").css('display','block').children().text("请输入与上面一样的密码");
            }

        }
        else{
            $("#tsmm1").css('display','block').children().text("请输入与上面一样的密码");
        }
    });

    $("#submit").click(function (e) {
        var textm = $("#password").val();
        if(textm == "" || textm == null){
            $("#tsmm").css('display','block');
            e.preventDefault();
        }
        else{
            $("#tsmm").css('display','none');
        }
        var textm1 = $("#password1").val();
        if(textm1 == "" || textm1 == null){
            $("#tsmm1").css('display','block');
            e.preventDefault();
        }
        else{
            $("#tsmm1").css('display','none');
        }

    });

    $(".psxschange").each(function (i,t) {
        $(t).click(function () {
            var a = $(t).hasClass("bxmm");
            if(!a){
                $(t).addClass("bxmm").attr('src','../resources/image/zp/xsmm.png').prev().attr('type','text');

            }
            else{
                $(t).removeClass("bxmm").attr('src','../resources/image/zp/bxsmm.png').prev().attr('type','password');
            }
        });
    });
})