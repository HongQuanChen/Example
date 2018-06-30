var YzCode ="",cisName=false,cisEmail=false,cisYzCode=false;
//换验证码
function changeImg() {
    var timedate = (new Date).valueOf();
    $("#yzimg").attr('src','VerificationCode?timedate='+timedate);
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

//验证身份证 
function isCardNo(card) {
    var pattern = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
    return pattern.test(card);
}
//验证邮箱
function isEmail(email){
    var reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/;
    return reg.test(email);
}

//查询用户id、邮箱，是否存在
function selectIsZero(curl,x,y,z,h){
    $.ajax({
        type:'get',
        url:curl,

    }).done(function (data) {
        console.log("data: ",data);
        console.log(typeof data);
        console.log("h ",h);
        if(data == 0){
            $(x).css('display','inline');
            $(x).attr('src','../resources/image/zp/wrongd81e06.png');
            $(y).css('display','block').children().text(z);
            switch (h){
                case 1:
                    cisName = false;
                    break;
                case 2:
                    cisEmail = false;
                    break;
            }


        }
        else {
            $(x).css('display','inline');
            $(x).attr('src','../resources/image/zp/correct14e2af.png');
            $(y).css('display','none');
            switch (h){
                case 1:
                    cisName = true;
                    break;
                case 2:
                    cisEmail = true;
                    break;
            }

        }
    }).fail(function (e) {
        console.log(e);
    });
}

//是否可以提交表单
function checkForm(e) {
    console.log("isName ",cisName);
    console.log("isEmail ",cisEmail);
    console.log("isYzCode ",cisYzCode);
    if(cisName==true && cisEmail==true && cisYzCode==true){
        //window.location.href = 'changePassword.jsp';
    }
    else {
        e.preventDefault();
        $("#username,#email,#yzcode").trigger("blur");
        console.log("no");
    }
}

$(function () {
    $("#yzimg").click(changeImg);
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
                    "#tsyhm","该身份证号没有注册",1);

            }
            else{
                $("#userid").attr('src','../resources/image/zp/wrongd81e06.png');
                $("#tsyhm").css('display','block').children().text("请输入合法的身份证号");
                cisName = false;

            }

        }
        else{
            $("#userid").attr('src','../resources/image/zp/wrongd81e06.png')
                .css('display','inline');
            $("#tsyhm").css('display','block').children().text("请输入身份证号");
            cisName = false;
        }

    });

    //查询邮箱地址是否存在，指定的用户中
    $("#email").blur(function () {
        var cemail = $("#email").val();
        var cemailid = cemail.trim();
        var cIDNumber = $.trim($("#username").val());
        if(cemailid != ""){
            var cboolean = isEmail(cemailid);
            if(cboolean){
                selectIsZero('./HasEmail?IDNumber='+cIDNumber+'&Email='+cemailid,"#emailid",
                    "#tsemail","该用户没有这个邮箱",2);

            }
            else{
                $("#emailid").attr('src','../resources/image/zp/wrongd81e06.png');
                $("#tsemail").css('display','block').children().text("请输入合法的邮箱地址");
                cisEmail = false;

            }

        }
        else{
            $("#emailid").attr('src','../resources/image/zp/wrongd81e06.png')
                .css('display','inline');
            $("#tsemail").css('display','block').children().text("请输入邮箱地址");
            cisEmail = false;
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
                cisYzCode = true;
            }
            else {
                $("#yzcodeid").attr('src','../resources/image/zp/wrongd81e06.png')
                    .css('display','inline');
                $("#tsyzcode").css('display','block').text("验证码输入有误");
                cisYzCode = false;
            }
        }
        else {
            $("#yzcodeid").attr('src','../resources/image/zp/wrongd81e06.png')
                .css('display','inline');
            $("#tsyzcode").css('display','block').text("请输入验证码");
            cisYzCode = false;
        }
    });

})