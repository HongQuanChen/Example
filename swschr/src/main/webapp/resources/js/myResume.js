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
    $("#MaskLayer").css('display','block');
    $("#PromptContainer").css('top','40%');
    $("#PromptContainer").css('display','block');
    $("#promptText").text(y);
    $("#PromptContainer").animate({top:'30%',opacity:'+=1'},1000);
}

function getTime(x){
    if(x == null || x =="")
        return "";
    var y = x.indexOf(" ");
    var z = x;
    z = z.substring(0,y);
    return z;
}

//跳转到创建简历列表页
function Jump(e) {
    var count = 0;
    var cresume1 =  document.getElementById("resume1");
    var cresume = document.getElementsByClassName("resume").length;
    console.log("cresume ",cresume);
    if(cresume >= 2) {
        promptX('最多创建两份简历',e);
        return false;
    }
    if(cresume1 != null){
        count = 2;
    }
    else{
        count = 1;
    }
    console.log("cid ",cresume1);
    window.location.href = 'createNavigation.jsp?count='+count;
}

$(function () {
    var jiedianlen = document.getElementsByTagName("div").length;
    var jiedianC = document.getElementsByTagName("div");
    for(i=0;i<jiedianlen;i++){
        cleanWhiteSpace(jiedianC[i]);
    }
    var myuser = $("#IDNumber").text();
    console.log("username",myuser);
    var bodyH = parseInt($("body").height()) + 10;
    console.log(bodyH);
    $("#MaskLayer").css('height',bodyH+'px');

    $("#main").on('click','.preview',function (e) {
        console.log($(this).parent().parent().attr('id'));
        var cid = $(this).parent().parent().attr('id');
        if(cid == 'resume1'){
            window.location.href = 'viewResume.jsp?resumeId=1';
        }
        if(cid == 'resume2'){
            window.location.href = 'viewResume.jsp?resumeId=2';
        }
    });

    $("#main").on('click','.edit',function (e) {
        console.log($(this).parent().parent().attr('id'));
        var cid = $(this).parent().parent().attr('id');
        if(cid == 'resume1'){
            window.location.href = 'editNavigation.jsp?resumeId=1';
        }
        if(cid == 'resume2'){
            window.location.href = 'editNavigation.jsp?resumeId=2';
        }
    });
    //删除相应的简历
    $("#main").on('click','.delete',function (e) {
        $("#MaskLayer1").css('display','block');
        $("#PromptContainer1").css('display','block');
        $("#PromptContainer1").css('left','150px');
        console.log($(this).parent().parent().attr('id'));
        var cid = $(this).parent().parent().attr('id');
        var cid2 = "#"+cid;
        var cdataDel;
        if(cid == 'resume1'){
            cdataDel = {IDNumber:myuser,resumeId:'1'};
        }
        if(cid == 'resume2'){
            cdataDel = {IDNumber:myuser,resumeId:'2'};
        }
        $.ajax({
            type:'post',
            url:'deleteResume',
            data:cdataDel
        }).done(function (data) {
            console.log(data);
            $(cid2).remove();
            $("#PromptContainer1,#MaskLayer1").css('display','none');
        }).fail(function (e) {
            console.log(e);
        });
    });

    var cdata = {IDNumber:myuser};
    $.ajax({
        type:'post',
        url:'ResumeStatus',
        data:cdata
    }).done(function (data) {
        console.log(data);
        var cl = data.length;
        console.log(cl);
        for(i=0;i<cl;i++){
            var createTime = getTime(data[i].createTime);
            var updateTime = getTime(data[i].updateTime);
            var ctext = "<div id='resume"+data[i].resumeId+"' class='resume'>"+
                "<h5 class='jltitle'>我的中文简历"+data[i].resumeId+"</h5>"+
                "<p class='jltime'>创建于<span>"+createTime+"</span>&nbsp;&nbsp;" +
                "更新于<span>"+updateTime+"</span></p>"+
                "<div class='jloperational'>"+
                "<a class='edit' >编辑简历</a>"+
                "<a class='preview' >查看简历</a>"+
                "<a class='delete' >删除简历</a>"+
                "</div>"+
                "</div>";
            $("#create").before(ctext);
        }
        $("#main").css('display','block');
    }).fail(function (e) {
        cnsole.log(e);
    });

    $("#promptButton").click(function () {
        $("#PromptContainer").css({display:'none',top:'100%',
            opacity:'0'});
        $("#MaskLayer").css('display','none');
    });

    $("#comeback").click(function () {
        window.location.href = '../index.jsp';
    });
});