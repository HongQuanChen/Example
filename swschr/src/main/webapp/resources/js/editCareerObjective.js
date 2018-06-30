function promptX(y,e) {
    e.preventDefault();
    $("#MaskLayer").css('display','block');
    $("#PromptContainer").css('top','40%');
    $("#PromptContainer").css('display','block');
    $("#promptText").text('请填写'+y);
    $("#PromptContainer").animate({top:'30%',opacity:'+=1'},1000);
}
function editCareerObjective(data) {
    var cnatureOfTheWork = data.co.natureOfTheWork;
    $("#gzxzInput").val(cnatureOfTheWork);
    if(cnatureOfTheWork == 1){
        cnatureOfTheWork = '全职';
    }
    else {
        cnatureOfTheWork = '兼职';
    }
    $("#gzxzSpan").text(cnatureOfTheWork);
    var cworkPlace = data.co.workPlace;
    $("[name='WorkPlace']").val(cworkPlace);
    var cexpectedSalary = data.co.expectedSalary;
    $("#qwxzInput").val(cexpectedSalary);
    switch (cexpectedSalary){
        case 1:
            cexpectedSalary = '1000-1999';
            break;
        case 2:
            cexpectedSalary = '2000-2999';
            break;
        case 3:
            cexpectedSalary = '3000-3999';
            break;
        case 4:
            cexpectedSalary = '4000-4999';
            break;
        case 5:
            cexpectedSalary = '5000-5999';
            break;
        case 6:
            cexpectedSalary = '6000-6999';
            break;
        case 7:
            cexpectedSalary = '7000-7999';
            break;
        case 8:
            cexpectedSalary = '8000-8999';
            break;
        case 9:
            cexpectedSalary = '9000-9999';
            break;
        case 10:
            cexpectedSalary = '10000-19999';
            break;
        case 11:
            cexpectedSalary = '20000-29999';
            break;
        default:
            cexpectedSalary = '面议';
    }
    $("#qwxzSpan").text(cexpectedSalary);
    var cworkStatus = data.co.workStatus;
    $("#gzztInput").val(cworkStatus);
    switch (cworkStatus){
        case 1:
            cworkStatus = '暂无跳槽打算';
            break;
        case 2:
            cworkStatus = '已离职';
            break;
        case 3:
            cworkStatus = '有跳槽打算，一个月后可以到岗';
            break;
    }
    $("#gzztSpan").text(cworkStatus);
}

$(function () {
    var bodyH = parseInt($("body").height()) + 10;
    console.log(bodyH);
    $("#MaskLayer").css('height',bodyH+'px');
    var cresumeId = window.location.search.split("=")[1];
    console.log(cresumeId);
    var cmyid = $("#myId").text();
    var cdata = {IDNumber:cmyid,
        resumeId:cresumeId};
    $.ajax({
        type:'post',
        url:'searchCareerObjective',
        data:cdata
    }).done(function (data) {
        console.log(data);
        if(data.co == null || data.co == "")
            return false;
        else{
            editCareerObjective(data);
        }

    });
    $("#submitCO").click(function (e) {
        var cWorkPlace = $("[name='WorkPlace']").val();
        if(cWorkPlace == ""){
            promptX('工作地点',e);
            return false;
        }
        var cExpectedSalary= $("[name='ExpectedSalary']").val();
        if(cExpectedSalary == ""){
            promptX('期望薪资',e);
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