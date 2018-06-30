function promptX(y,e) {
    e.preventDefault();
    $("#MaskLayer").css('display','block');
    $("#PromptContainer").css('top','40%');
    $("#PromptContainer").css('display','block');
    $("#promptText").text('请填写'+y);
    $("#PromptContainer").animate({top:'30%',opacity:'+=1'},1000);
}

function tsClick(e) {
    var sn = document.getElementsByName("SchoolName").length;
    console.log(sn);
    for(i=0;i<sn;i++){
        var cvalue = document.getElementsByName("SchoolName")[i].value;
        if(cvalue == ""){
            promptX('学校名称',e);
            return false;
        }
    }
    var pt = document.getElementsByName("ProfessionalTitle").length;
    console.log(pt);
    for(i=0;i<pt;i++){
        var cvalue = document.getElementsByName("ProfessionalTitle")[i].value;
        if(cvalue == ""){
            promptX('专业名称',e);
            return false;
        }
    }
    var de = document.getElementsByName("Degree").length;
    console.log(de);
    for(i=0;i<de;i++){
        var cvalue = document.getElementsByName("Degree")[i].value;
        if(cvalue == ""){
            promptX('学历/学位',e);
            return false;
        }
    }
    var at = document.getElementsByName("AdmissionTime").length;
    console.log(at);
    for(i=0;i<at;i++){
        var cvalue = document.getElementsByName("AdmissionTime")[i].value;
        if(cvalue == ""){
            promptX('入学时间',e);
            return false;
        }
    }
    var gt = document.getElementsByName("GraduationTime").length;
    console.log(gt);
    for(i=0;i<gt;i++){
        var cvalue = document.getElementsByName("GraduationTime")[i].value;
        if(cvalue == ""){
            promptX('毕业时间',e);
            return false;
        }
    }
    $("#saveJYBJTJ").trigger('click');
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