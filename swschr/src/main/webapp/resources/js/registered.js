var YzCode ="";
//换验证码
function changeImg() {
    var timedate = (new Date).valueOf();
    $("#yzcodeimg").attr('src','VerificationCode?timedate='+timedate);
    getYzCode();
}
//获取验证码数字
function getYzCode(){
    $.ajax({
        type:'get',
        url:'./CodeData'
    }).done(function(data){
        console.log(data);
        if(data.length<4 || data == YzCode){
            getYzCode();
        }
        else{
            YzCode = data;
        }

    });
}

//是否为空
function isNull(x,y,z,e,i){
    if(y == "" || y == null){
        $(x).trigger("blur");
        $(z).css('display','block');
        --i;
        e.preventDefault();
        return false;
    }
}

//是否可以提交表单
function checkForm(e) {
    var i = 1;
    var textu = $("#username").val();
    isNull("#username",textu,"#tsyhm",e,i);
    var textm = $("#password").val();
    isNull("#password",textm,"#tsmm",e,i);
    var textm1 = $("#password1").val();
    isNull("#password1",textm1,"#tsmm1",e,i);
    var textp = $("#phone").val();
    isNull("#phone",textp,"#tsphone",e,i);
    var texte = $("#email").val();
    isNull("#email",texte,"#tsemail",e,i);
    var code = $("#yzcode").val();
    if(code != YzCode){
        $("#yzcode").trigger("blur");
        --i;
        e.preventDefault();
        console.log("no");
    }
    var insertData = {IDNumber:textu,Password1:textm,Password2:textm1,
        PhoneNumber:textp,emailAddress:texte,Code:code};
    if(i == 1){
        $.ajax({
            type:'post',
            url:'insertUser',
            data:insertData
        }).done(function (data) {
            console.log(data);
            if(data == 1)
                window.location.href = '../index.jsp';
        }).fail(function (e) {
            console.log(e);
        });
    }
}

//验证身份证
function isCardNo(card) {
    var pattern = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
    return pattern.test(card);
}
// 验证手机号
function isPhoneNo(phone) {
    var pattern = /^1[34578]\d{9}$/;
    return pattern.test(phone);
}

//查询用户id、手机号、邮箱，是否已经注册
function selectIsZero(curl,x,y,z){
    $.ajax({
        type:'get',
        url:curl,

    }).done(function (data) {
        console.log("data: ",data);
        console.log(typeof data);
        if(data == 0){
            $(x).css('display','inline');
            $(x).attr('src','../resources/image/zp/correct14e2af.png');
            $(y).css('display','none');

        }
        else {
            $(x).css('display','inline');
            $(x).attr('src','../resources/image/zp/wrongd81e06.png');
            $(y).css('display','block').children().text(z);

        }
    }).fail(function (e) {
        console.log(e);
    });
}

$(function () {

    $("#yzcodeimg").click(changeImg);
    getYzCode();
    $("#submit").click(checkForm);
    //查询用户名是否存在
    $("#username").blur(function () {
        var cIDNumber = $("#username").val();
        var cuserid = cIDNumber.trim();
        if(cuserid != ""){
            var cboolean = isCardNo(cuserid);
            if(cboolean){
                selectIsZero('./HasUserId?IDNumber='+cuserid,"#userid",
                    "#tsyhm","该身份证号已经注册");

            }
            else{
                $("#userid").attr('src','../resources/image/zp/wrongd81e06.png');
                $("#tsyhm").css('display','block').children().text("请输入合法的身份证号");

            }

        }
        else{
            $("#userid").attr('src','../resources/image/zp/wrongd81e06.png')
                .css('display','inline');
            $("#tsyhm").css('display','block').children().text("请输入身份证号");
        }

    });
    //查询手机号是否存在
    $("#phone").blur(function () {
        var cPhoneNumber = $("#phone").val();
        var cphoneid = cPhoneNumber.trim();
        if(cphoneid != ""){
            var cboolean = isPhoneNo(cphoneid);
            if(cboolean){
                selectIsZero('./HasPhone?PhoneNumber='+cphoneid,"#phoneid",
                    "#tsphone","该手机号已经注册");
            }
            else{
                $("#phoneid").attr('src','../resources/image/zp/wrongd81e06.png');
                $("#tsphone").css('display','block').children().text("请输入合法的手机号");
            }

        }
        else{
            $("#phoneid").attr('src','../resources/image/zp/wrongd81e06.png')
                .css('display','inline');
            $("#tsphone").css('display','block').children().text("请输入手机号");
        }

    });
    //判断邮箱地址是否正确
    $("#email").blur(function(){
        var cemail = $.trim($("#email").val());
        if(cemail != ""){
            var reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/;
            if (reg.test(cemail)) {
                $("#emailid").attr('src','../resources/image/zp/correct14e2af.png')
                    .css('display','inline');
                $("#tsemail").css('display','none');
            }
            else{
                $("#emailid").attr('src','../resources/image/zp/wrongd81e06.png')
                    .css('display','inline');
                $("#tsemail").css('display','block').children().text("请输入合法的邮箱地址");
            }
        }
        else{
            $("#emailid").attr('src','../resources/image/zp/wrongd81e06.png')
                .css('display','inline');
            $("#tsemail").css('display','block').children().text("请输入邮箱地址");
        }
    });
    //判断密码是否合格
    $("#password").blur(function(){
        var cpassword = $.trim($("#password").val());
        var cl = cpassword.length;
        console.log(cpassword.length);
        if(cpassword != ""){
            if(6<=cl && cl <=16){
                var reg = /([\d]+)/;
                console.log(reg.test(cpassword));
                var reg1 = /([\w]+)/;
                console.log(reg1.test(cpassword));
                var reg2 = /([\W]+)/;
                console.log(reg2.test(cpassword));
                $("#passwordid").attr('src','../resources/image/zp/correct14e2af.png')
                    .css('display','inline');
                $("#tsmm").css('display','none');
            }
            else{
                $("#passwordid").attr('src','../resources/image/zp/wrongd81e06.png')
                    .css('display','inline');
                $("#tsmm").css('display','block').children().text("请输入6-16位字母/数字/符号组合");
            }

        }
        else{
            $("#passwordid").attr('src','../resources/image/zp/wrongd81e06.png')
                .css('display','inline');
            $("#tsmm").css('display','block').children().text("请输入密码");
        }
    });
    //判断两次密码是否一样
    $("#password1").blur(function(){
        var cpassword = $.trim($("#password").val());
        var cpassword1 = $.trim($("#password1").val());
        if(cpassword1 != ""){
            if(cpassword == cpassword1){

                $("#passwordid1").attr('src','../resources/image/zp/correct14e2af.png')
                    .css('display','inline');
                $("#tsmm1").css('display','none');
            }
            else{
                $("#passwordid1").attr('src','../resources/image/zp/wrongd81e06.png')
                    .css('display','inline');
                $("#tsmm1").css('display','block').children().text("请输入与上面一样的密码");
            }

        }
        else{
            $("#passwordid1").attr('src','../resources/image/zp/wrongd81e06.png')
                .css('display','inline');
            $("#tsmm1").css('display','block').children().text("请输入与上面一样的密码");
        }
    });

    //判断验证码输入是否有误
    $("#yzcode").blur(function () {
        var code = $("#yzcode").val();
        if(code != ""){
            if(code == YzCode){
                $("#yzcodeid").attr('src','../resources/image/zp/correct14e2af.png')
                    .css('display','inline');
                $("#tsyzcode").css('display','none');
            }
            else {
                $("#yzcodeid").attr('src','../resources/image/zp/wrongd81e06.png')
                    .css('display','inline');
                $("#tsyzcode").css('display','block').text("验证码输入有误");
            }
        }
        else {
            $("#yzcodeid").attr('src','../resources/image/zp/wrongd81e06.png')
                .css('display','inline');
            $("#tsyzcode").css('display','block').text("请输入验证码");
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