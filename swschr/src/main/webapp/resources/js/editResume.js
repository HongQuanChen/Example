var clearTime1 = 0,cjybjL=0,cId=0,cId1=0;
window.URL = window.URL || window.webkitURL;
var currYear = (new Date()).getFullYear();
console.log(currYear);
var opt1={};
opt1.date = {preset : 'date'};
opt1.default = {
    theme: 'android-ics light', //皮肤样式
    display: 'bottom', //显示方式
    mode: 'scroller', //日期选择模式
    dateFormat: 'yyyy-mm',
    lang: 'zh',
    showNow: true,
    nowText: "今天",
    startYear: currYear - 80, //开始年份
    endYear: currYear + 10 //结束年份
};
function cleanWhiteSpace(element){
    for(var i=0; i<element.childNodes.length; i++){
        var node = element.childNodes[i];
        if(node.nodeType == 3 && !/\S/.test(node.nodeValue)){
            node.parentNode.removeChild(node);
        }
    }
}


function handleFiles(files) {
    if (!files.length) {
    } else {
        console.log("img");
        console.log(files[0].type);
        for (var i = 0; i < files.length; i++) {
            var cimg = $("#defaultImg");
            
            console.log("url ",window.URL.createObjectURL(files[i]));
            cimg.attr('src',window.URL.createObjectURL(files[i]));
            cimg.onload = function () {
                window.URL.revokeObjectURL(this.src);
            }

        }
    }
}
//新增的入学时间、毕业时间、任职开始时间、任职介绍时间选择
function selectDate1(x) {
    console.log(x);
    $(x).mobiscroll($.extend(opt1['date'], opt1['default']));
    $(x).focus(function () {
        console.log("1");
        clearTime1 = setTimeout(function () {
            $(".dwwc.dwrc table tr td:last-child").css('display','none');
        },50)
    });
    $(x).blur(function () {
        console.log(clearTime1);
        console.log("2");
        clearTimeout(clearTime1);
    });
}
//新增的学历/学位、职位薪金选择
function selectDate2(x,y,z,h) {
    $(x).change(function () {
        var xlText = $(y).val();
        var xlText1 = $(y).text();
        $(z).text(xlText1);
        $(h).val(xlText);
    });
}

$(function () {
    var jiedianlen = document.getElementsByTagName("div").length;
    var jiedianC = document.getElementsByTagName("div");
    for(i=0;i<jiedianlen;i++){
        cleanWhiteSpace(jiedianC[i]);
    }

    var IdInput = window.location.search.split("=")[1];
    $("#PersonalIdInput").val(IdInput);
    $("#CareerObjectiveIdInput").val(IdInput);
    $("#EducationBackgroundIdInput").val(IdInput);
    $("#WorkExperienceIdInput").val(IdInput);

    //保存教育背景
    $("#saveJYBJTJ").click(function () {
        var cjson = new Array($("#editjybj .content.econtent").length);
        console.log($("#editjybj .content.econtent").length);
        $("#editjybj .content.econtent").each(function (i,t) {
            var cscholname = $(t).find("[name='SchoolName']").val();
            var cProfessionalTitle = $(t).find("[name='ProfessionalTitle']").val();
            var cDegree = $(t).find("[name='Degree']").val();
            var cAdmissionTime = $(t).find("[name='AdmissionTime']").val();
            var cGraduationTime = $(t).find("[name='GraduationTime']").val();
            var cEducationBackgroundId = $(t).find("[name='EducationBackgroundId']").val();
            var cIDNumber = $(t).find("[name='IDNumber']").val();
            var cNumber = $(t).find("[name='Number']").val();
            var jybjobj = {};
            jybjobj.SchoolName = cscholname;
            jybjobj.ProfessionalTitle = cProfessionalTitle;
            jybjobj.Degree = cDegree;
            jybjobj.AdmissionTime = cAdmissionTime;
            jybjobj.GraduationTime = cGraduationTime;
            jybjobj.EducationBackgroundId = cEducationBackgroundId;
            jybjobj.IDNumber = cIDNumber;
            jybjobj.Number = cNumber;
            cjson[i] = jybjobj;
        });
        var cjsond = JSON.stringify(cjson);
        console.log(cjsond);
        var cdata = {ctest:cjsond};
        $.ajax({
            type:'post',
            url:'EducationBackground',
            data:cdata
        }).done(function (data) {
            if(data == 'success'){
            	window.location.href = 'myResume.jsp';
            }
        });
    });
    //保存工作经验
    $("#saveGZJYTJ").click(function () {
         var GZJYjson = new Array($("#editgzjy .content.econtent").length);
         console.log($("#editgzjy .content.econtent").length);
         $("#editgzjy .content.econtent").each(function (i,t) {
         var cCompanyName = $(t).find("[name='CompanyName']").val();
         var cJobTitle = $(t).find("[name='JobTitle']").val();
         var cZWStartTime= $(t).find("[name='ZWStartTime']").val();
         var cZWEndTime = $(t).find("[name='ZWEndTime']").val();
         var czwSalary = $(t).find("[name='zwSalary']").val();
         var cWorkExperienceId = $(t).find("[name='WorkExperienceId']").val();
         var cIDNumber = $(t).find("[name='IDNumber']").val();
         var cNumber = $(t).find("[name='Number']").val();
         var czwGzms = $(t).find("[name='zwGzms']").val();
         var GZJYobj = {};
         GZJYobj.CompanyName = cCompanyName;
         GZJYobj.JobTitle = cJobTitle;
         GZJYobj.ZWStartTime = cZWStartTime;
         GZJYobj.ZWEndTime = cZWEndTime;
         GZJYobj.zwSalary = czwSalary;
         GZJYobj.WorkExperienceId = cWorkExperienceId;
         GZJYobj.IDNumber = cIDNumber;
         GZJYobj.Number = cNumber;
         GZJYobj.zwGzms = czwGzms;
         GZJYjson[i] = GZJYobj;
         });
         var cjsond = JSON.stringify(GZJYjson);
         var cdata = {gzjy:cjsond};
         $.ajax({
         type:'post',
         url:'WorkExperience',
         data:cdata
         }).done(function (data) {
        	 if(data == 'success'){
             	window.location.href = 'myResume.jsp';
             }
         });
    });

    //选择性别
    $("#sexSelect").change(function () {
        var sexText = $("#sexSelect option:selected").val();
        var sexText1 = $("#sexSelect option:selected").text();
        $("#sexSpan").text(sexText1);
        $("#sexInput").val(sexText);
    });
    //选择婚姻状态
    $("#maritalStatusSelect").change(function () {
        var maritalText = $("#maritalStatusSelect option:selected").val();
        var maritalText1 = $("#maritalStatusSelect option:selected").text();
        $("#maritalStatusSpan").text(maritalText1);
        $("#maritalStatusInput").val(maritalText);
    });
    //选择工作性质
    $("#gzxzSelect").change(function () {
        var gzxzText = $("#gzxzSelect option:selected").val();
        var gzxzText1 = $("#gzxzSelect option:selected").text();
        $("#gzxzSpan").text(gzxzText1);
        $("#gzxzInput").val(gzxzText);
    });
    //选择期望薪资
    $("#qwxzSelect").change(function () {
        var qwxzText = $("#qwxzSelect option:selected").val();
        var qwxzText1 = $("#qwxzSelect option:selected").text();
        $("#qwxzSpan").text(qwxzText1);
        $("#qwxzInput").val(qwxzText);
    });
    //选择工作状态
    $("#gzztSelect").change(function () {
        var gzztText = $("#gzztSelect option:selected").val();
        var gzztText1 = $("#gzztSelect option:selected").text();
        $("#gzztSpan").text(gzztText1);
        $("#gzztInput").val(gzztText);
    });
    //选择专业名称
    $("#zymcSelect").change(function () {
        var zymcText = $("#zymcSelect option:selected").val();
        var zymcText1 = $("#zymcSelect option:selected").text();
        $("#zymcSpan").text(zymcText1);
        $("#zymcInput").val(zymcText);
    });
    //选择学历/学位
    $("#xlSelect").change(function () {
        var xlText = $("#xlSelect option:selected").val();
        var xlText1 = $("#xlSelect option:selected").text();
        $("#xlSpan").text(xlText1);
        $("#xlInput").val(xlText);
    });
    //选择职位薪金
    $("#zwSalarySelect").change(function () {
        var zymcText = $("#zwSalarySelect option:selected").val();
        var zymcText1 = $("#zwSalarySelect option:selected").text();
        $("#zwSalarySpan").text(zymcText1);
        $("#zwSalaryInput").val(zymcText);
    });

    //选择出生日期
    var opt={};
    opt.date = {preset : 'date'};
    opt.default = {
        theme: 'android-ics light', //皮肤样式
        display: 'bottom', //显示方式
        mode: 'scroller', //日期选择模式
        dateFormat: 'yyyy-mm-dd',
        lang: 'zh',
        showNow: true,
        nowText: "今天",
        startYear: currYear - 80, //开始年份
        endYear: currYear + 10 //结束年份
    };
    $("#csrq").mobiscroll($.extend(opt['date'], opt['default']));
    //选择参加工作,入学、毕业,任职开始、任职结束时间
    $("#cjgzsj,#rxsj,#bysj,#rzkssj,#rzjssj").mobiscroll($.extend(opt1['date'], opt1['default']));
    $("#cjgzsj,#rxsj,#bysj,#rzkssj,#rzjssj").focus(function () {
        console.log("1");
        clearTime1 = setTimeout(function () {
            $(".dwwc.dwrc table tr td:last-child").css('display','none');     
        },50)
    });
    $("#cjgzsj,#rxsj,#bysj,#rzkssj,#rzjssj").blur(function () {  
        console.log(clearTime1);
        console.log("2");
        clearTimeout(clearTime1);
    });


    //添加教育背景
    $("#createJYBJ").click(function () {
        var cjybjL = $("#editjybj .content.econtent").length;
        console.log("cl: ",cjybjL);
        if(cjybjL > 2){
            console.log("no");
            return false;
        }
        var cSelectId="";
        var isOne = $("#editjybj").has("#rxsj1").length;
        if(isOne == 1){
            cId = 2;
            cSelectId = "#rxsj2,#bysj2";
        }
        else {
            cId = 1;
            cSelectId = "#rxsj1,#bysj1";
        }
        var addJYBJ = "<div class='resumeEducationBackground' style='margin-bottom: 30px;'>"+
            "<img class='editimg' src='../resources/image/zp/jianFf8e0d.png' width='20px'>"+
            "<a class='edita'>删除</a>"+
            "<span id='deleteJYBJ"+cId+"'></span>"+
            "</div>"+
            "<div class='content econtent'><ul class='ullist'>"+
            "<li><em class='asterisk'>*</em><span class='asteriskTitle'>学校名称</span>"+
            "<input class='editInput' type='text' name='SchoolName' placeholder='填写学校名称'>"+
            "<img class='rightArrow' src='../resources/image/zp/rightArrowBF.png' width='20px'></li>"+
            "<li><em class='asterisk'>*</em><span class='asteriskTitle'>专业名称</span>"+
            "<input class='editInput' type='text' name='ProfessionalTitle' placeholder='填写专业名称'>"+
            "<img class='rightArrow'  src='../resources/image/zp/rightArrowBF.png' width='20px'>"+
            "</li>"+
            "<li><em class='asterisk'>*</em><span class='asteriskTitle'>学历/学位</span>"+
            "<span id='xlSpan"+cId+"' class='editSpan'>请选择</span>"+
            "<input id='xlInput"+cId+"' class='editInput' type='text' name='Degree'>"+
            "<select id='xlSelect"+cId+"' class='editSelect'>"+
            "<option value='0'>请选择</option>"+
            "<option value='1'>大专</option>"+
            "<option value='2'>本科</option>"+
            "<option value='3'>研究生</option>"+
            "<option value='4'>博士</option>"+
            "</select>"+
            "<img class='rightArrow'  src='../resources/image/zp/rightArrowBF.png' width='20px'>"+
            "</li>"+
            "<li><em class='asterisk'>*</em><span class='asteriskTitle'>入学时间</span>"+
            "<input id='rxsj"+cId+"' class='editInput' type='text' name='AdmissionTime' placeholder='填写入学时间'>"+
            "<img class='rightArrow'  src='../resources/image/zp/rightArrowBF.png' width='20px'>"+
            "</li>"+
            "<li><em class='asterisk'>*</em><span class='asteriskTitle'>毕业时间</span>"+
            "<input id='bysj"+cId+"' class='editInput' type='text' name='GraduationTime' placeholder='毕业时间'>"+
            "<img class='rightArrow'  src='../resources/image/zp/rightArrowBF.png' width='20px'>"+
            "</li>" +
            "<li>" +
            "<input id='EducationBackgroundId"+cId+"' class='editInput' hidden type='text' name='EducationBackgroundId'>" +
            "</li>" +
            "<li>" +
            "<input id='IDNumberInput"+cId+"' class='editInput' hidden type='text' name='IDNumber'>" +
            "</li>" +
            "<li>" +
            "<input id='NumberInput"+cId+"' class='editInput' hidden type='text' name='Number'>" +
            "</li>" +
            "</ul></div>";
        $("#editjybj").append(addJYBJ);
        console.log(cSelectId);
        selectDate1(cSelectId);
        var c1 = "#xlSelect"+cId;
        var c2 = "#xlSelect"+cId+" option:selected";
        var c3 = "#xlSpan"+cId;
        var c4 = "#xlInput"+cId;
        selectDate2(c1,c2,c3,c4);
        var cdeleteId = "#deleteJYBJ"+cId;
        $(cdeleteId).click(function () {
            $(this).parent(".resumeEducationBackground").next().remove();
            $(this).parent(".resumeEducationBackground").remove();
        });
        var cEBID = $("#EducationBackgroundIdInput").val();
        var cIDN = $("#IDNumberInput").val();
        var cebids = "#EducationBackgroundId"+cId;
        $(cebids).val(cEBID);
        var cids = "#IDNumberInput"+cId;
        $(cids).val(cIDN);
        var cnumbers = "#NumberInput"+cId;
        if(cId == 1){
            $(cnumbers).val("2");
        }
        if(cId == 2) {
            $(cnumbers).val("3");
        }
        console.log("number",$(cnumbers).val());
    });

    //添加工作经验
    $("#createGZJY").click(function () {
        var cgzjyL = $("#editgzjy .content.econtent").length;
        console.log("cl: ",cgzjyL);
        if(cgzjyL > 2){
            console.log("no");
            return false;
        }
        var cSelectId="";
        var isOne = $("#editgzjy").has("#rzkssj1").length;
        if(isOne == 1){
            cId1 = 2;
            cSelectId = "#rzkssj2,#rzjssj2";
        }
        else {
            cId1 = 1;
            cSelectId = "#rzkssj1,#rzjssj1";
        }
        var addGZJY = "<div class='resumeEducationBackground' style='margin-bottom: 30px;'>"+
            "<img class='editimg' src='../resources/image/zp/jianFf8e0d.png' width='20px'>"+
            "<a class='edita'>删除</a>"+
            "<span id='deleteGZJY"+cId1+"'></span>"+
            "</div>"+
            "<div class='content econtent'>"+
            "<ul class='ullist'>"+
            "<li><em class='asterisk'>*</em><span class='asteriskTitle'>公司名称</span>"+
            "<input class='editInput' type='text' name='CompanyName' placeholder='填写公司名称'>"+
            "<img class='rightArrow'  src='../resources/image/zp/rightArrowBF.png' width='20px'>"+
            "</li>"+
            "<li><em class='asterisk'>*</em><span class='asteriskTitle'>职位名称</span>"+
            "<input class='editInput' type='text' name='JobTitle' placeholder='填写职位名称'>"+
            "<img class='rightArrow'  src='../resources/image/zp/rightArrowBF.png' width='20px'>"+
            "</li>"+
            "<li><em class='asterisk'>*</em><span class='asteriskTitle'>任职开始时间</span>"+
            "<input id='rzkssj"+cId1+"' class='editInput' type='text' name='ZWStartTime' placeholder='填写任职开始时间'>"+
            "<img class='rightArrow'  src='../resources/image/zp/rightArrowBF.png' width='20px'>"+
            "</li>"+
            "<li><em class='asterisk'>*</em><span class='asteriskTitle'>任职结束时间</span>"+
            "<input id='rzjssj"+cId1+"' class='editInput' type='text' name='ZWEndTime' placeholder='填写任职结束时间'>"+
            "<img class='rightArrow'  src='../resources/image/zp/rightArrowBF.png' width='20px'>"+
            "</li>"+
            "<li><span class='asteriskTitle'>职位薪金(税前)</span>"+
            "<span id='zwSalarySpan"+cId1+"' class='editSpan'>请选择</span>"+
            "<input id='zwSalaryInput"+cId1+"' class='editInput' type='text' name='zwSalary' value='0'>"+
            "<select id='zwSalarySelect"+cId1+"' class='editSelect'>"+
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
            "<input id='WorkExperienceId"+cId1+"' class='editInput' hidden type='text' name='WorkExperienceId'>" +
            "</li>" +
            "<li>" +
            "<input id='IDNumberInput"+cId1+"' class='editInput' hidden type='text' name='IDNumber'>" +
            "</li>" +
            "<li>" +
            "<input id='NumberInput"+cId1+"' class='editInput' hidden type='text' name='Number'>" +
            "</li>"+
            "</ul>"+
            "<textarea class='gzms' name='zwGzms' rows='2' placeholder='填写工作描述'></textarea>"+
            "</div>";
        $("#editgzjy").append(addGZJY);
        console.log(cSelectId);
        selectDate1(cSelectId);
        var c1 = "#zwSalarySelect"+cId1;
        var c2 = "#zwSalarySelect"+cId1+" option:selected";
        var c3 = "#zwSalarySpan"+cId1;
        var c4 = "#zwSalaryInput"+cId1;
        selectDate2(c1,c2,c3,c4);
        var cdeleteId = "#deleteGZJY"+cId1;
        $(cdeleteId).click(function () {
            $(this).parent(".resumeEducationBackground").next().remove();
            $(this).parent(".resumeEducationBackground").remove();
        });
        var cWEID = $("#WorkExperienceIdInput").val();
        var cIDN = $("#IDNumberInput").val();
        var cweids = "#WorkExperienceId"+cId1;
        $(cweids).val(cWEID);
        var cids = "#IDNumberInput"+cId1;
        $(cids).val(cIDN);
        var cnumbers = "#NumberInput"+cId1;
        if(cId1 == 1){
            $(cnumbers).val("2");
        }
        if(cId1 == 2) {
            $(cnumbers).val("3");
        }
        console.log("number",$(cnumbers).val());
    });


})

