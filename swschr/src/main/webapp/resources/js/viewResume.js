function cleanWhiteSpace(element){
    for(var i=0; i<element.childNodes.length; i++){
        var node = element.childNodes[i];
        if(node.nodeType == 3 && !/\S/.test(node.nodeValue)){
            node.parentNode.removeChild(node);
        }
    }
}

function addPI(ctext,data) {
    var csex = data.pi.sex;
    if(csex == 1){
        csex = '男';
    }
    else {
        csex = '女';
    }
    var ctimeone = data.pi.dateOfBirth.indexOf(" ");
    var cdateTime = data.pi.dateOfBirth;
    cdateTime = cdateTime.substring(0,ctimeone);
    var ctimetwo = data.pi.toWorkTime.lastIndexOf("-");
    var ctoWorkTime = data.pi.toWorkTime;
    ctoWorkTime = ctoWorkTime.substring(0,ctimetwo);
    var cavatar = data.pi.avatar;
    if(cavatar == null || cavatar == ""){
        cavatar = '../resources/image/zp/defaultAvatarBF.png';
    }
    else{
        cavatar = 'data:image/jpeg;base64,'+data.pi.avatar;
    }
    ctext = ctext + "<div class='content'>"+
        "<table class='table'><tr>"+
        "<td id='grimg'><img src='"+cavatar+"' width='80px' height='80px'></td>"+
        "<td id='grimgright'><ul>"+
        "<li id='grname'>"+data.pi.name+"</li>"+
        "<li><span id='grsex'>"+csex+"</span><span>"+cdateTime+"</span></li>"+
        "</ul></td></tr><tr >"+
        "<td id='grcols2' colspan='2'>"+
        "<table class='table innertable'>"+
        "<tr><td>参加工作时间:</td><td class='innercolor'>"+ctoWorkTime+"</td></tr>"+
        "<tr><td>户口所在地:</td><td class='innercolor'>"+data.pi.accountLocation+"</td></tr>"+
        "<tr><td>现居住城市:</td><td class='innercolor'>"+data.pi.currentCity+"</td></td></tr>"+
        "<tr><td>手机号码:</td><td class='innercolor'>"+data.pi.phoneNumber+"</td></tr>"+
        "<tr><td>邮箱:</td><td class='innercolor'>"+data.pi.emailAddress+"</td></tr>"+
        "</table></td></tr></table>"+
        "</div>"+
        "<div id='resumeCareerObjective'>"+
        "<p class='editp'><img class='helpimg' src='../resources/image/zp/qzyx.png' width='20px'>求职意向</p></div>";
    return ctext;
}

function addCO(ctext,data) {
    var cgzxz = data.co.natureOfTheWork;
    if(cgzxz == 1){
        cgzxz = '全职';
    }
    else {
        cgzxz = '兼职';
    }
    var cqwxz = data.co.expectedSalary;
    switch (cqwxz){
        case 1:
            cqwxz = '1000-1999';
            break;
        case 2:
            cqwxz = '2000-2999';
            break;
        case 3:
            cqwxz = '3000-3999';
            break;
        case 4:
            cqwxz = '4000-4999';
            break;
        case 5:
            cqwxz = '5000-5999';
            break;
        case 6:
            cqwxz = '6000-6999';
            break;
        case 7:
            cqwxz = '7000-7999';
            break;
        case 8:
            cqwxz = '8000-8999';
            break;
        case 9:
            cqwxz = '9000-9999';
            break;
        case 10:
            cqwxz = '10000-19999';
            break;
        case 11:
            cqwxz = '20000-29999';
            break;
        default:
            cqwxz = '面议';
    }
    console.log(cqwxz);
    var cgzzt = data.co.workStatus;
    switch (cgzzt){
        case 1:
            cgzzt = '暂无跳槽打算';
            break;
        case 2:
            cgzzt = '已离职';
            break;
        case 3:
            cgzzt = '有跳槽打算，一个月后可以到岗';
            break;
    }
    ctext = ctext + "<div class='content'><table class='table'><tr ><td id='grcols1' colspan='2'>"+
        "<table class='table innertable'>"+
        "<tr><td>工作性质:</td><td class='innercolor'>"+cgzxz+"</td></tr>"+
        "<tr><td>工作地点:</td><td class='innercolor'>"+data.co.workPlace+"</td></tr>"+
        "<tr><td>期望薪资:</td><td class='innercolor'>"+cqwxz+"</td></tr>"+
        "<tr><td>工作状态:</td><td class='innercolor'>"+cgzzt+"</td></tr>"+
        "</table></td></tr></table></div>"+
        "<div id='resumeEducationBackground'>"+
        "<p class='editp'><img class='helpimg' src='../resources/image/zp/jyjl.png' width='25px'>教育背景</p>"+
        "</div>";
    return ctext;
}

function addEB(cebl,cebtext,data) {
    for(i=0;i<cebl;i++){
        var cxl = data.eb[i].degree;
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
        var conetime = data.eb[i].admissionTime.indexOf(" ");
        var crxsj = data.eb[i].admissionTime;
        crxsj = crxsj.substring(0,conetime);
        var ctwotime = data.eb[i].graduationTime.indexOf(" ");
        var cbysj = data.eb[i].graduationTime;
        cbysj = cbysj.substring(0,ctwotime);
        var cbh = i+1,ctd='';
        if(i>0) ctd = 'nonetdtop';
        cebtext += "<div class='content'><table class='table'><tr>"+
            "<td id='grcols3' colspan='2'><table class='table innertable'>"+
            "<tr><td colspan='2' class='"+ctd+"'>"+cbh+"</td></tr>"+
            "<tr><td>学校名称:</td><td class='innercolor'>"+data.eb[i].schoolName+"</td></tr>"+
            "<tr><td>专业名称:</td><td class='innercolor'>"+data.eb[i].professionalTitle+"</td></tr>"+
            "<tr><td>学历/学位:</td><td class='innercolor'>"+cxl+"</td></tr>"+
            "<tr><td>入学时间:</td><td class='innercolor'>"+crxsj+"</td></tr>"+
            "<tr><td>毕业时间:</td><td class='innercolor'>"+cbysj+"</td></tr>"+
            "</table></td></tr></table></div>";
    }
    return cebtext;
}

function addWE(cwel,cwetext,data) {
    for(i=0;i<cwel;i++){
        var conetime = data.we[i].zwstartTime.indexOf(" ");
        var crzkssj = data.we[i].zwstartTime;
        crzkssj = crzkssj.substring(0,conetime);
        var ctwotime = data.we[i].zwendTime.indexOf(" ");
        var crzjssj = data.we[i].zwendTime;
        crzjssj = crzjssj.substring(0,ctwotime);
        var zwxj = data.we[i].zwsalary;
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
        var cbh = i+1,ctd='';
        if(i>0) ctd = 'nonetdtop';
        cwetext += "<div class='content'><table class='table'>"+
            "<tr><td id='grcols4' colspan='2'>"+
            "<table class='table innertable'>"+
            "<tr><td colspan='2' class='"+ctd+"'>"+cbh+"</td></tr>"+
            "<tr><td>公司名称:</td><td class='innercolor'>"+data.we[i].companyName+"</td></tr>"+
            "<tr><td>职位薪金(税前):</td><td class='innercolor'>"+zwxj+"</td></tr>"+
            "<tr><td>任职开始时间:</td><td class='innercolor'>"+crzkssj+"</td></tr>"+
            "<tr><td>任职结束时间:</td><td class='innercolor'>"+crzkssj+"</td></tr>"+
            "<tr><td>职位名称:</td><td class='innercolor'>"+data.we[i].jobTitle+"</td></tr>"+
            "<tr><td colspan='2'><ul><li>工作描述</li>"+
            "<li class='innercolor'>"+data.we[i].zwgzms+"</li>"+
            "</ul></td></tr></table></td></tr></table></div>"

    }
    return cwetext;
}

$(function () {
    var jiedianlen = document.getElementsByTagName("div").length;
    var jiedianC = document.getElementsByTagName("div");
    for(i=0;i<jiedianlen;i++){
        cleanWhiteSpace(jiedianC[i]);
    }

    var cresumeId = window.location.search.split("=")[1];
    console.log(cresumeId);
    var cmyid = $("#myId").text();
    var cdata = {IDNumber:cmyid,
        resumeId:cresumeId};
    $.ajax({
        type:'post',
        url:'ResumeInformation',
        data:cdata
    }).done(function (data) {
        console.log(data);
        var ctext = "<div id='resumePersonalInformation'>"+
            "<p class='editp'>"+
            "<img class='helpimg' src='../resources/image/zp/zj.png' width='25px'>个人信息</p>"+
            "</div>";
        var cpil = data.pi;
        if(cpil != null){
            ctext = addPI(ctext,data);
        }
        else {
            ctext = ctext + "<div id='resumeCareerObjective'>"+
                "<p class='editp'><img class='helpimg' src='../resources/image/zp/qzyx.png' width='20px'>求职意向</p></div>";
        }
        var ccol = data.co;

        if(ccol != null){
            ctext = addCO(ctext,data);
        }
        else {
            ctext = ctext + "<div id='resumeEducationBackground'>"+
                "<p class='editp'><img class='helpimg' src='../resources/image/zp/jyjl.png' width='25px'>教育背景</p>"+
                "</div>";
        }
        var cebl = data.eb.length;
        console.log("cebl: ",cebl);
        var cebtext = 0;
        if(cebl > 0){
            cebtext = addEB(cebl,cebtext,data);
            cebtext = cebtext.substring(1);
            ctext = ctext + cebtext + "<div id='resumeWorkExperience'>"+
                "<p class='editp'><img class='helpimg' src='../resources/image/zp/gzjy.png' width='25px'>工作经验</p>"+
                "</div>";
        }
        else {
            ctext = ctext + "<div id='resumeWorkExperience'>"+
                "<p class='editp'><img class='helpimg' src='../resources/image/zp/gzjy.png' width='25px'>工作经验</p>"+
                "</div>";
        }

        var cwel = data.we.length;
        console.log('cwel: ',cwel);
        var cwetext = 0;
        if(cwel>0){
            cwetext = addWE(cwel,cwetext,data);
            cwetext = cwetext.substring(1);
            ctext = ctext + cwetext;
        }
        $("#jlnav").after(ctext);
    }).fail(function (e) {
        console.log(e);
    });

    $("#comeback").click(function () {
        window.location.href = 'myResume.jsp';
    });


})