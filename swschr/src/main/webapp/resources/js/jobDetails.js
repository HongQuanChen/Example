function cleanWhiteSpace(element){
    for(var i=0; i<element.childNodes.length; i++){
        var node = element.childNodes[i];
        if(node.nodeType == 3 && !/\S/.test(node.nodeValue)){
            node.parentNode.removeChild(node);
        }
    }
}

function promptX(y,e) {
    e.preventDefault();
    $("#MaskLayer1").css('display','block');
    $("#PromptContainer").css('top','40%');
    $("#PromptContainer").css('display','block');
    $("#promptText").text(y);
    $("#PromptContainer").animate({top:'30%',opacity:'+=1'},1000);
}

$("#promptButton").click(function () {
    $("#PromptContainer").css({display:'none',top:'100%',
        opacity:'0'});
    $("#MaskLayer1").css('display','none');
});

$(function () {

    var searchArray = window.location.search.split("=");
    var cjobDetailsId = searchArray[1];
    console.log(searchArray);
    console.log(cjobDetailsId);

    var jiedianlen = document.getElementsByTagName("div").length;
    var jiedianC = document.getElementsByTagName("div");
    for(i=0;i<jiedianlen;i++){
        cleanWhiteSpace(jiedianC[i]);
    }

    $.ajax({
        type:'get',
        url:'./DescribeJobs',
        data:{
            JobDetailsId:cjobDetailsId
        }
    }).done(function (data) {
        console.log(data);
        //添加职位相关信息
        var cxl =data.job.education;
        switch (cxl){
            case 1:
                cxl = '大专';
                break;
            case 2:
                cxl = '本科';
                break;
            case 3:
                cxl = '研究生'
        }
        var cgzlx = data.job.jobType;
        switch (cgzlx){
            case 1:
                cgzlx = '全职';
                break;
            case 2:
                cgzlx = '兼职';
                break;
        }
        var czplx = data.job.recruitmentActivities;
        switch (czplx){
            case 1:
                czplx = '社会招聘';
                break;
            case 2:
                czplx = '校园招聘';
                break;
            case 3:
                czplx = '内部招聘';
                break;
        }

        var tabletext = "<table class='table'><tr>" +
            "<td id='zwmc'>"+data.job.positionTitle+"</td>"+
            "<td id='fbrq'>"+data.job.releaseDate+"</td>"+
            "</tr><tr>"+
            "<td id='ssgs'>所属公司:"+data.job.company.companyName+"</td>"+
            "<td id='xl'>学历:"+cxl+"及以上</td>"+
            "</tr><tr>"+
            "<td id='gzdd'>工作地点:"+data.job.place+"</td>"+
            "<td id='gzlx'>工作类型:"+cgzlx+"</td>"+
            "</tr><tr>"+
            "<td colspan='2' id='ssbm'>所属部门:"+
            data.job.department+"</td>"+
            "</tr><tr>"+
            "<td colspan='2' id='zphd'>招聘活动:"+czplx+
            "</td></tr></table>"
        $("#jobTop").html(tabletext);
        //添加职位描述
        var jobtextl = data.DescribeText.length;
        console.log(jobtextl);
        var jobtext = "0";
        for(i=0;i<jobtextl;i++){
            if(jobtextl != 0){
                jobtext += "<p>"+data.DescribeText[i]+"</p>";
            }

        }
        cjobOne = jobtext.indexOf("0");
        jobtext = jobtext.substring(cjobOne+1);
        $("#zwms").after("<article>"+jobtext+"</article>");
        //添加任职资格描述
        var quatextl = data.QualificationsText.length;
        console.log(quatextl);
        var quatext = "0";
        for(i=0;i<quatextl;i++){
            if(quatextl != 0){
                quatext += "<p>"+data.QualificationsText[i]+"</p>";
            }

        }
        console.log(quatext);
        cquaOne = quatext.indexOf("0");
        quatext = quatext.substring(cquaOne+1);
        console.log(quatext);
        $("#rzzg").after("<article>"+quatext+"</article>");
        $("#jobMain").css('display','block');

    }).fail(function (e) {
        console.log(e);
    });

    $("#apply").click(function (e) {
        var cuserIDL = $("body").has("#userID").length;
        console.log('cuserIDL',cuserIDL);
        if(cuserIDL == 0) {
        	window.location.href = 'login.jsp'; 
        	return false;
        }
        var cPosition = $("#zwmc").text();
        var cIDNumber = $("#userID").text().substring(2);
        console.log(cIDNumber);
        promptX('申请成功。已发送邮件到您的邮箱中。',e);
        var cdata = {Position:cPosition,IDNumber:cIDNumber};
        $.ajax({
            type:'post',
            url:'../ApplyForPosition',
            data:cdata
        }).done(function (data) {
            console.log(data);
        }).fail(function (e) {
            console.log(e)
        });
    });

})