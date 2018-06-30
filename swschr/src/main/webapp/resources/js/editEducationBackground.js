function promptX(y,e) {
    e.preventDefault();
    $("#MaskLayer").css('display','block');
    $("#PromptContainer").css('top','40%');
    $("#PromptContainer").css('display','block');
    $("#promptText").text('请填写'+y);
    $("#PromptContainer").animate({top:'30%',opacity:'+=1'},1000);
}

function getTime(x) {
    if(x == null || x =="")
        return "";
    var y = x.lastIndexOf("-");
    var z = x;
    z = z.substring(0,y);
    return z;
}

function getValueX(x) {
    if(x === null || x === "")
        return "";
    return x;
}

function editEducationBackground(data,cebl) {
    if(cebl == 0) return false;
    var cxl = getValueX(data.eb[0].degree);
    $("#xlInput").val(cxl);
    switch (cxl){
        case 1:
            cxl = '大专';
            break;
        case 2:
            cxl = '本科';
            break;
        case 3:
            cxl = '研究生';
            break;
        case 4:
            cxl = '博士';
            break;
    }
    var crxsj = getTime(data.eb[0].admissionTime);
    var cbysj = getTime(data.eb[0].graduationTime);
    $("[name='SchoolName']").val(getValueX(data.eb[0].schoolName));
    $("[name='ProfessionalTitle']").val(getValueX(data.eb[0].professionalTitle));
    $("#xlSpan").text(cxl);
    $("[name='AdmissionTime']").val(crxsj);
    $("#bysj").val(cbysj);
    if(cebl>1){
        for(k=1;k<cebl;k++){
            var j = getValueX(data.eb[k].number) - 1;
            var cxl = getValueX(data.eb[k].degree);
            var cxlinput = getValueX(data.eb[k].degree);
            switch (cxl){
                case 1:
                    cxl = '大专';
                    break;
                case 2:
                    cxl = '本科';
                    break;
                case 3:
                    cxl = '研究生';
                    break;
                case 4:
                    cxl = '博士';
                    break;
            }
            var crxsj = getTime(data.eb[k].admissionTime);
            var cbysj = getTime(data.eb[k].graduationTime);
            var cschoolName = getValueX(data.eb[k].schoolName);
            var cprofessionalTitle = getValueX(data.eb[k].professionalTitle);

            var addJYBJ = "<div class='resumeEducationBackground' style='margin-bottom: 30px;'>"+
                "<img class='editimg' src='../resources/image/zp/jianFf8e0d.png' width='20px'>"+
                "<a class='edita'>删除</a>"+
                "<span id='deleteJYBJ"+j+"'></span>"+
                "</div>"+
                "<div class='content econtent'><ul class='ullist'>"+
                "<li><em class='asterisk'>*</em><span class='asteriskTitle'>学校名称</span>"+
                "<input class='editInput' value='"+cschoolName+"' type='text' name='SchoolName' placeholder='填写学校名称'>"+
                "<img class='rightArrow' src='../resources/image/zp/rightArrowBF.png' width='20px'></li>"+
                "<li><em class='asterisk'>*</em><span class='asteriskTitle'>专业名称</span>"+
                "<input class='editInput' value='"+cprofessionalTitle+"' type='text' name='ProfessionalTitle' placeholder='填写专业名称'>"+
                "<img class='rightArrow'  src='../resources/image/zp/rightArrowBF.png' width='20px'>"+
                "</li>"+
                "<li><em class='asterisk'>*</em><span class='asteriskTitle'>学历/学位</span>"+
                "<span id='xlSpan"+j+"' class='editSpan'>"+cxl+"</span>"+
                "<input id='xlInput"+j+"' value='"+cxlinput+"' class='editInput' type='text' name='Degree'>"+
                "<select id='xlSelect"+j+"' class='editSelect'>"+
                "<option value='0'>请选择</option>"+
                "<option value='1'>大专</option>"+
                "<option value='2'>本科</option>"+
                "<option value='3'>研究生</option>"+
                "<option value='4'>博士</option>"+
                "</select>"+
                "<img class='rightArrow'  src='../resources/image/zp/rightArrowBF.png' width='20px'>"+
                "</li>"+
                "<li><em class='asterisk'>*</em><span class='asteriskTitle'>入学时间</span>"+
                "<input id='rxsj"+j+"' value='"+crxsj+"' class='editInput' type='text' name='AdmissionTime' placeholder='填写入学时间'>"+
                "<img class='rightArrow'  src='../resources/image/zp/rightArrowBF.png' width='20px'>"+
                "</li>"+
                "<li><em class='asterisk'>*</em><span class='asteriskTitle'>毕业时间</span>"+
                "<input id='bysj"+j+"' value='"+cbysj+"' class='editInput' type='text' name='GraduationTime' placeholder='毕业时间'>"+
                "<img class='rightArrow'  src='../resources/image/zp/rightArrowBF.png' width='20px'>"+
                "</li>" +
                "<li>" +
                "<input id='EducationBackgroundId"+j+"' class='editInput' hidden type='text' name='EducationBackgroundId'>" +
                "</li>" +
                "<li>" +
                "<input id='IDNumberInput"+j+"' class='editInput' hidden type='text' name='IDNumber'>" +
                "</li>" +
                "<li>" +
                "<input id='NumberInput"+j+"' class='editInput' hidden type='text' name='Number'>" +
                "</li>" +
                "</ul></div>";
            $("#editjybj").append(addJYBJ);

            if(j == 2){
                cSelectId = "#rxsj2,#bysj2";
            }
            else {
                cSelectId = "#rxsj1,#bysj1";
            }
            console.log(cSelectId);
            selectDate1(cSelectId);
            var c1 = "#xlSelect"+j;
            var c2 = "#xlSelect"+j+" option:selected";
            var c3 = "#xlSpan"+j;
            var c4 = "#xlInput"+j;
            selectDate2(c1,c2,c3,c4);
            var cdeleteId = "#deleteJYBJ"+j;
            $(cdeleteId).click(function () {
                var cid = $(this).attr('id');
                console.log('cid ',cid);
                var cidl = cid.length;
                console.log(cidl);
                var cnumber = cid.substring(cidl-1);
                console.log('cnumber ',cnumber);
                var cselectone = '#EducationBackgroundId'+cnumber;
                console.log(cselectone);
                var cEducationBackgroundId = $(cselectone).val();
                var cselecttwo = '#IDNumberInput'+cnumber;
                var cIDNumber = $(cselecttwo).val();
                var cselectthree = '#NumberInput'+cnumber;
                var cNumber = $(cselectthree).val();
                var cdata = {IDNumber:cIDNumber,Number:cNumber,
                    EducationBackgroundId:cEducationBackgroundId};
                console.log(cdata);
                deleteEducationBackground(cdata,this);


            });
            var cEBID = $("#EducationBackgroundIdInput").val();
            var cIDN = $("#IDNumberInput").val();
            var cebids = "#EducationBackgroundId"+j;
            $(cebids).val(cEBID);
            var cids = "#IDNumberInput"+j;
            $(cids).val(cIDN);
            var cnumbers = "#NumberInput"+j;
            $(cnumbers).val(getValueX(data.eb[k].number));
            console.log("number",$(cnumbers).val());
        }
    }
}

//删除教育背景
function deleteEducationBackground(cdata,thise) {
    $.ajax({
        type:'post',
        url:'deleteEducationBackground',
        data:cdata
    }).done(function (data) {
        console.log(data);
        $(thise).parent(".resumeEducationBackground").next().remove();
        $(thise).parent(".resumeEducationBackground").remove();
    })
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
    var cresumeId = window.location.search.split("=")[1];
    console.log(cresumeId);
    var cmyid = $("#myId").text();
    var cdata = {IDNumber:cmyid,
        resumeId:cresumeId};
    $.ajax({
        type:'post',
        url:'searchEducationBackground',
        data:cdata
    }).done(function (data) {
        console.log(data);
        var cebl = data.eb.length;
        console.log("cwel: ",cebl);
        editEducationBackground(data,cebl);


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