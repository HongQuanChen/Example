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