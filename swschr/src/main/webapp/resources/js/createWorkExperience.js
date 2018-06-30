function promptX(y,e) {
    e.preventDefault();
    $("#MaskLayer").css('display','block');
    $("#PromptContainer").css('top','40%');
    $("#PromptContainer").css('display','block');
    $("#promptText").text('请填写'+y);
    $("#PromptContainer").animate({top:'30%',opacity:'+=1'},1000);
}

function tsClick(e) {
    var sn = document.getElementsByName("CompanyName").length;
    console.log(sn);
    for(i=0;i<sn;i++){
        var cvalue = document.getElementsByName("CompanyName")[i].value;
        if(cvalue == ""){
            promptX('公司名称',e);
            return false;
        }
    }
    var pt = document.getElementsByName("JobTitle").length;
    console.log(pt);
    for(i=0;i<pt;i++){
        var cvalue = document.getElementsByName("JobTitle")[i].value;
        if(cvalue == ""){
            promptX('职位名称',e);
            return false;
        }
    }
    var de = document.getElementsByName("ZWStartTime").length;
    console.log(de);
    for(i=0;i<de;i++){
        var cvalue = document.getElementsByName("ZWStartTime")[i].value;
        if(cvalue == ""){
            promptX('任职开始时间',e);
            return false;
        }
    }
    var at = document.getElementsByName("ZWEndTime").length;
    console.log(at);
    for(i=0;i<at;i++){
        var cvalue = document.getElementsByName("ZWEndTime")[i].value;
        if(cvalue == ""){
            promptX('任职结束时间',e);
            return false;
        }
    }
    var gt = document.getElementsByName("zwGzms").length;
    console.log(gt);
    for(i=0;i<gt;i++){
        var cvalue = document.getElementsByName("zwGzms")[i].value;
        if(cvalue == ""){
            promptX('工作描述',e);
            return false;
        }
    }
    $("#saveGZJYTJ").trigger('click');
}

$(function () {
    var bodyH = parseInt($("body").height()) + 10;
    console.log(bodyH);
    $("#MaskLayer").css('height',bodyH+'px');
    $("#promptButton").click(function () {
        $("#PromptContainer").css({display:'none',top:'100%',
            opacity:'0'});
        $("#MaskLayer").css('display','none');
    });
    $("#comeback1").click(function () {
        window.location.href = 'myResume.jsp';
    });

})