function promptX(y,e) {
    e.preventDefault();
    $("#MaskLayer").css('display','block');
    $("#PromptContainer").css('top','40%');
    $("#PromptContainer").css('display','block');
    $("#promptText").text('请填写'+y);
    $("#PromptContainer").animate({top:'30%',opacity:'+=1'},1000);
}

function getValueX(x) {
    if(x === null || x === "")
        return "";
    return x;
}

$(function () {
    var bodyH = parseInt($("body").height()) + 10;
    console.log(bodyH);
    $("#MaskLayer").css('height',bodyH+'px');
    var cresumeId = window.location.search.split("=")[1];
    console.log(cresumeId);
    var cmyid = $("#myId").text();
    console.log("myid",cmyid);
    var cdata = {IDNumber:cmyid,
        resumeId:cresumeId};
    $.ajax({
        type:'post',
        url:'searchPersonalInformation',
        data:cdata
    }).done(function (data) {
        console.log(data);
        if (data.pi == null) return false;
        var cimg = data.pi.avatar;
        if(cimg == null || cimg == ""){
            cimg = '../resources/image/zp/defaultAvatarBF.png';
        }
        else{
            cimg = 'data:'+data.pi.imgType+';base64,'+data.pi.avatar
        }
        $("#defaultImg").attr('src',cimg);
        $("[name='Name']").val(data.pi.name);
        var csex = data.pi.sex;
        if(csex == 1) csex = '男';
        else csex = '女';
        $("[name='Sex']").val(data.pi.sex);
        $("#sexSpan").text(csex);
        var cdateone = data.pi.dateOfBirth.indexOf(" ");
        var cdateofbirth = data.pi.dateOfBirth;
        cdateofbirth = cdateofbirth.substring(0,cdateone);
        $("[name='DateOfBirth']").val(cdateofbirth);
        $("[name='IDnumber']").val(data.pi.idnumber);
        $("[name='PhoneNumber']").val(data.pi.phoneNumber);
        var cdatetwo = data.pi.toWorkTime.lastIndexOf("-");
        var ctoWorkTime = data.pi.toWorkTime;
        ctoWorkTime = ctoWorkTime.substring(0,cdatetwo);
        $("[name='ToWorkTime']").val(ctoWorkTime);
        $("[name='AccountLocation']").val(data.pi.accountLocation);
        $("[name='CurrentCity']").val(data.pi.currentCity);
        $("[name='EmailAddress']").val(data.pi.emailAddress);
        var cmaritalStatus = data.pi.maritalStatus;
        switch (cmaritalStatus){
            case 1:
                cmaritalStatus = '未婚';
                break;
            case 2:
                cmaritalStatus = '已婚';
                break;
            case 3:
                cmaritalStatus = '保密';
                break;
            default:
                cmaritalStatus = '保密';
        }
        $("[name='MaritalStatus']").val(data.pi.maritalStatus);
        $("#maritalStatusSpan").text(cmaritalStatus);
    });
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