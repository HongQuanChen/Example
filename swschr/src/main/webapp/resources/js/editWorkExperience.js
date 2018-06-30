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

function editWorkExperience(data,cwel) {
    if(cwel == 0) return false;
    var crzkssj = getTime(data.we[0].zwstartTime);
    var crzjssj = getTime(data.we[0].zwendTime);
    var zwxj = getValueX(data.we[0].zwsalary);
    $("#zwSalaryInput").val(zwxj);
    switch (zwxj){
        case 0:
            zwxj = '保密';
            break;
        case 1:
            zwxj = '1000-1999';
            break;
        case 2:
            zwxj = '2000-2999';
            break;
        case 3:
            zwxj = '3000-3999';
            break;
        case 4:
            zwxj = '4000-4999';
            break;
        case 5:
            zwxj = '5000-5999';
            break;
        case 6:
            zwxj = '6000-6999';
            break;
        case 7:
            zwxj = '7000-7999';
            break;
        case 8:
            zwxj = '8000-8999';
            break;
        case 9:
            zwxj = '9000-9999';
            break;
        case 10:
            zwxj = '10000-19999';
            break;
        case 11:
            zwxj = '20000-29999';
            break;
    }
    $("[name='CompanyName']").val(getValueX(data.we[0].companyName));
    $("[name='JobTitle']").val(getValueX(data.we[0].jobTitle));
    $("#rzkssj").val(crzkssj);
    $("#rzjssj").val(crzjssj);
    $("#zwSalarySpan").text(zwxj);
    $("[name='zwGzms']").val(getValueX(data.we[0].zwgzms));
    if(cwel>1){
        for(k=1;k<cwel;k++){
            var j = getValueX(data.we[k].number) - 1;
            var crzkssj = getTime(data.we[k].zwstartTime);
            var crzjssj = getTime(data.we[k].zwendTime);
            var zwxjinput = getValueX(data.we[k].zwsalary);
            var zwxj = getValueX(data.we[k].zwsalary);
            switch (zwxj){
                case 0:
                    zwxj = '保密';
                    break;
                case 1:
                    zwxj = '1000-1999';
                    break;
                case 2:
                    zwxj = '2000-2999';
                    break;
                case 3:
                    zwxj = '3000-3999';
                    break;
                case 4:
                    zwxj = '4000-4999';
                    break;
                case 5:
                    zwxj = '5000-5999';
                    break;
                case 6:
                    zwxj = '6000-6999';
                    break;
                case 7:
                    zwxj = '7000-7999';
                    break;
                case 8:
                    zwxj = '8000-8999';
                    break;
                case 9:
                    zwxj = '9000-9999';
                    break;
                case 10:
                    zwxj = '10000-19999';
                    break;
                case 11:
                    zwxj = '20000-29999';
                    break;
            }
            var ccompanyName = getValueX(data.we[k].companyName);
            var cjobTitle = getValueX(data.we[k].jobTitle);
            var czwgzms = getValueX(data.we[k].zwgzms);

            var addGZJY = "<div class='resumeEducationBackground' style='margin-bottom: 30px;'>"+
                "<img class='editimg' src='../resources/image/zp/jianFf8e0d.png' width='20px'>"+
                "<a class='edita'>删除</a>"+
                "<span id='deleteGZJY"+j+"'></span>"+
                "</div>"+
                "<div class='content econtent'>"+
                "<ul class='ullist'>"+
                "<li><em class='asterisk'>*</em><span class='asteriskTitle'>公司名称</span>"+
                "<input class='editInput' type='text' value='"+ccompanyName+"' name='CompanyName' placeholder='填写公司名称'>"+
                "<img class='rightArrow'  src='../resources/image/zp/rightArrowBF.png' width='20px'>"+
                "</li>"+
                "<li><em class='asterisk'>*</em><span class='asteriskTitle'>职位名称</span>"+
                "<input class='editInput' value='"+cjobTitle+"' type='text' name='JobTitle' placeholder='填写职位名称'>"+
                "<img class='rightArrow'  src='../resources/image/zp/rightArrowBF.png' width='20px'>"+
                "</li>"+
                "<li><em class='asterisk'>*</em><span class='asteriskTitle'>任职开始时间</span>"+
                "<input id='rzkssj"+j+"' value='"+crzkssj+"' class='editInput' type='text' name='ZWStartTime' placeholder='填写任职开始时间'>"+
                "<img class='rightArrow'  src='../resources/image/zp/rightArrowBF.png' width='20px'>"+
                "</li>"+
                "<li><em class='asterisk'>*</em><span class='asteriskTitle'>任职结束时间</span>"+
                "<input id='rzjssj"+j+"' value='"+crzjssj+"' class='editInput' type='text' name='ZWEndTime' placeholder='填写任职结束时间'>"+
                "<img class='rightArrow'  src='../resources/image/zp/rightArrowBF.png' width='20px'>"+
                "</li>"+
                "<li><span class='asteriskTitle'>职位薪金(税前)</span>"+
                "<span id='zwSalarySpan"+j+"' class='editSpan'>"+zwxj+"</span>"+
                "<input id='zwSalaryInput"+j+"' value='"+zwxjinput+"' class='editInput' type='text' name='zwSalary' value='0'>"+
                "<select id='zwSalarySelect"+j+"' class='editSelect'>"+
                "<option value='0'>保密</option>"+
                "<option value='1'>1000-1999</option>"+
                "<option value='2'>2000-2999</option>"+
                "<option value='3'>3000-3999</option>"+
                "<option value='4'>4000-4999</option>"+
                "<option value='5'>5000-5999</option>"+
                "<option value='6'>6000-6999</option>"+
                "<option value='7'>7000-7999</option>"+
                "<option value='8'>8000-8999</option>"+
                "<option value='9'>9000-9999</option>"+
                "<option value='10'>10000-19999</option>"+
                "<option value='11'>20000-29999</option>"+
                "</select>"+
                "<img class='rightArrow'  src='../resources/image/zp/rightArrowBF.png' width='20px'>"+
                "</li>"+
                "<li><em class='asterisk'>*</em><span class='asteriskTitle'>工作描述</span>"+
                "</li>"+
                "<li>" +
                "<input id='WorkExperienceId"+j+"' class='editInput' hidden type='text' name='WorkExperienceId'>" +
                "</li>" +
                "<li>" +
                "<input id='IDNumberInput"+j+"' class='editInput' hidden type='text' name='IDNumber'>" +
                "</li>" +
                "<li>" +
                "<input id='NumberInput"+j+"' class='editInput' hidden type='text' name='Number'>" +
                "</li>"+
                "</ul>"+
                "<textarea class='gzms' name='zwGzms' rows='2' placeholder='填写工作描述'>"+czwgzms+"</textarea>"+
                "</div>";
            $("#editgzjy").append(addGZJY);
            if(j == 2){
                cSelectId = "#rzkssj2,#rzjssj2";
            }
            else {
                cSelectId = "#rzkssj1,#rzjssj1";
            }
            console.log(cSelectId);
            selectDate1(cSelectId);
            var c1 = "#zwSalarySelect"+j;
            var c2 = "#zwSalarySelect"+j+" option:selected";
            var c3 = "#zwSalarySpan"+j;
            var c4 = "#zwSalaryInput"+j;
            selectDate2(c1,c2,c3,c4);
            var cdeleteId = "#deleteGZJY"+j;
            $(cdeleteId).click(function () {
                var cid = $(this).attr('id');
                console.log('cid ',cid);
                var cidl = cid.length;
                console.log(cidl);
                var cnumber = cid.substring(cidl-1);
                console.log('cnumber ',cnumber);
                var cselectone = '#WorkExperienceId'+cnumber;
                console.log(cselectone);
                var cWorkExperienceId = $(cselectone).val();
                var cselecttwo = '#IDNumberInput'+cnumber;
                var cIDNumber = $(cselecttwo).val();
                var cselectthree = '#NumberInput'+cnumber;
                var cNumber = $(cselectthree).val();
                var cdata = {IDNumber:cIDNumber,Number:cNumber,
                    WorkExperienceId:cWorkExperienceId};
                console.log(cdata);
                deleteWorkExperience(cdata,this);


            });
            var cWEID = $("#WorkExperienceIdInput").val();
            var cIDN = $("#IDNumberInput").val();
            var cweids = "#WorkExperienceId"+j;
            $(cweids).val(cWEID);
            var cids = "#IDNumberInput"+j;
            $(cids).val(cIDN);
            var cnumbers = "#NumberInput"+j;
            $(cnumbers).val(getValueX(data.we[k].number));
            console.log("number",$(cnumbers).val());
        }
    }
}

//删除工作经验
function deleteWorkExperience(cdata,thise) {
    $.ajax({
        type:'post',
        url:'deleteWorkExperience',
        data:cdata
    }).done(function (data) {
        console.log(data);
        $(thise).parent(".resumeEducationBackground").next().remove();
        $(thise).parent(".resumeEducationBackground").remove();
    })
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
    var cresumeId = window.location.search.split("=")[1];
    console.log(cresumeId);
    var cmyid = $("#myId").text();
    var cdata = {IDNumber:cmyid,
        resumeId:cresumeId};
    $.ajax({
        type:'post',
        url:'searchWorkExperience',
        data:cdata
    }).done(function (data) {
        console.log(data);
        var cwel = data.we.length;
        console.log("cwel: ",cwel);
        editWorkExperience(data,cwel);


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