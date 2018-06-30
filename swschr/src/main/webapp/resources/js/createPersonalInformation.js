function promptX(y,e) {
    e.preventDefault();
    $("#MaskLayer").css('display','block');
    $("#PromptContainer").css('top','40%');
    $("#PromptContainer").css('display','block');
    $("#promptText").text('请填写'+y);
    $("#PromptContainer").animate({top:'30%',opacity:'+=1'},1000);
}
$(function () {
    var bodyH = parseInt($("body").height()) + 10;
    console.log(bodyH);
    $("#MaskLayer").css('height',bodyH+'px');
    $("#submitPI").click(function (e) {
        var cName = $("[name='Name']").val();
        if(cName == ""){
            promptX('姓名',e);
            return false;
        }
        var cSex= $("[name='Sex']").val();
        if(cSex == ""){
            promptX('性别',e);
            return false;
        }
        var cDateOfBirth= $("[name='DateOfBirth']").val();
        if(cDateOfBirth == ""){
            promptX('出生日期',e);
            return false;
        }
        var cIDnumber= $("[name='IDnumber']").val();
        console.log("id",cIDnumber);
        if(cIDnumber == ""){
            promptX('身份证号',e);
            return false;
        }
        var cPhoneNumber= $("[name='PhoneNumber']").val();
        if(cPhoneNumber == ""){
            promptX('手机号',e);
            return false;
        }
        var cToWorkTime= $("[name='ToWorkTime']").val();
        if(cToWorkTime == ""){
            promptX('参加工作时间',e);
            return false;
        }
        var cCurrentCity= $("[name='CurrentCity']").val();
        if(cCurrentCity == ""){
            promptX('现居住城市',e);
            return false;
        }
        var cMaritalStatus= $("[name='MaritalStatus']").val();
        if(cMaritalStatus == ""){
            promptX('婚姻状况',e);
            return false;
        }
    });
    $("#promptButton").click(function () {
        $("#PromptContainer").css({display:'none',top:'100%',
            opacity:'0'});
        $("#MaskLayer").css('display','none');
    });

    $("#comeback1").click(function () {
        window.location.href = 'myResume.jsp';
    });

})