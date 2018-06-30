var pageNum =1,nowPageNum=1;
var goPage = {};
goPage.ctitle = '';
goPage.cReleaseDate = '';
goPage.cEducation = '';
goPage.cjobType = '';
goPage.cRecruitmentActivities = '';
goPage.cPlace = '';
goPage.cpage = '';
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

//根据条件查询数据
function searchAll(){
    $(".teams").empty();
    $("#pageNum").empty();
    var cPlace = $("#workPlace").text();
    if(cPlace == '全国'){
        cPlace = '';
    }
    goPage.cPlace = cPlace;
    var ctitle = $("#searchValue").val();
    var cpTitle = $("#positionTitle span").text();
    switch (cpTitle){
        case '岗位名称':
            cpTitle = '';
            break;
        case '所有':
            cpTitle = '';
            break;
    }
    console.log('cpTitle',cpTitle);
    if(ctitle != ""){
        ctitle = ctitle+","+cpTitle;
    }else{
        ctitle = ctitle+cpTitle;
    }
    goPage.ctitle = ctitle;
    console.log("searcht: ",ctitle);
    var cReleaseDate = $("#positionfbsj span").text();
    switch (cReleaseDate){
        case '所有':
            cReleaseDate = '';
            break;
        case '24小时内':
            cReleaseDate = 1;
            break;
        case '近三天':
            cReleaseDate = 3;
            break;
        case '近一周':
            cReleaseDate = 7;
            break;
        case '近一月':
            cReleaseDate = 30;
            break;
    }
    goPage.cReleaseDate = cReleaseDate;
    var cjobType = $("#positiongzlx span").text();
    switch (cjobType){
        case '工作类型':
            cjobType = '';
            break;
        case '所有':
            cjobType = '';
            break;
        case '全职':
            cjobType = 1;
            break;
        case '兼职':
            cjobType = 2;
            break;
    }
    goPage.cjobType = cjobType;
    var cEducation = $("#positionxl span").text();
    switch (cEducation){
        case '学历':
            cEducation = '';
            break;
        case '所有':
            cEducation = '';
            break;
        case '大专':
            cEducation = 1;
            break;
        case '本科':
            cEducation = 2;
            break;
        case '研究生':
            cEducation = 3;
            break;
    }
    goPage.cEducation = cEducation;
    var cRecruitmentActivities = $("#positionzplx span").text();
    switch (cRecruitmentActivities){
        case '所有':
            cRecruitmentActivities = '';
            break;
        case '社会招聘':
            cRecruitmentActivities = 1;
            break;
        case '校园招聘':
            cRecruitmentActivities = 2;
            break;
        case '内部招聘':
            cRecruitmentActivities = 3;
            break;
    }
    goPage.cRecruitmentActivities = cRecruitmentActivities;
    var cpage = 1;
    researchAll(ctitle,cReleaseDate,
        cEducation,cjobType,
        cRecruitmentActivities,cPlace,cpage,1,true);

}

//查询form表单提交事件
function searchForm() {
    console.log("form");
    searchAll();
}

//能否翻页
function isGoPage(c){
    //有无下一页判断
    if(pageNum>c){
        $(".pspanr").css('color','#ff8e0d');
        $("#pageNext").attr('src','resources/image/zp/xxractive.png');
    }
    else{
        $(".pspanr").css('color','#868686');
        $("#pageNext").attr('src','resources/image/zp/xxr.png');
    }
    //有无上一页判断
    if(c>1){
        $(".pspanl").css('color','#ff8e0d');
        $("#pagePrev").attr('src','resources/image/zp/xxlactive.png');
    }
    else{
        $(".pspanl").css('color','#868686');
        $("#pagePrev").attr('src','resources/image/zp/xxl.png');
    }
}

//向下翻页
function NextPage() {
    var nowPage = $(".pagem span").text();
    var pageFirst = nowPage.substring(1,2);
    console.log("pageFirst ",pageFirst);
    var nextPage = parseInt(pageFirst) + 1;
    console.log("nextPage ",nextPage);
    if(nextPage >pageNum ) return false;
    console.log(nowPage);
    console.log(pageNum);
    isGoPage(nextPage);
    if(nextPage < pageNum+1){
        console.log("dsa");
        $(".teams").empty();
        $("#pageNum").empty();
        $(".pagem span").text("第"+nextPage+"页");
        researchAll(goPage.ctitle,goPage.cReleaseDate,
            goPage.cEducation,goPage.cjobType,
            goPage.cRecruitmentActivities,
            goPage.cPlace,nextPage,nextPage,false);
    }
}

//向上翻页
function PrevPage() {
    var nowPage = $(".pagem span").text();
    var pageFirst = nowPage.substring(1,2);
    console.log("pageFirst ",pageFirst);
    var prevPage = parseInt(pageFirst) - 1;
    console.log("prevPage ",prevPage);
    if(prevPage == 0 ) return false;
    console.log(nowPage);
    console.log(pageNum);
    isGoPage(prevPage);
    if(prevPage > 0){
        console.log("dsa");
        $(".teams").empty();
        $("#pageNum").empty();
        $(".pagem span").text("第"+prevPage+"页");
        researchAll(goPage.ctitle,goPage.cReleaseDate,
            goPage.cEducation,goPage.cjobType,
            goPage.cRecruitmentActivities,
            goPage.cPlace,prevPage,prevPage,false);
    }
}

//跳转到指定页面
function GoToPage() {
    var c = $("#pageNum option:selected").text();
    console.log("c: ",c);
    $("#pageNum").prev().text("第"+c+"页");
    isGoPage(c);
    $(".teams").empty();
    $("#pageNum").empty();
    researchAll(goPage.ctitle,goPage.cReleaseDate,
        goPage.cEducation,goPage.cjobType,
        goPage.cRecruitmentActivities,
        goPage.cPlace,c,c);

}


function researchAll(ctitle,cReleaseDate,
                     cEducation,cjobType,
                     cRecruitmentActivities,cPlace,
                     cpage,cselected,cgoPage) {
    $.ajax(
        {
            type:'get',
            url:'./search',
            data:{
                title:ctitle,
                ReleaseDate:cReleaseDate,
                Education:cEducation,
                jobType:cjobType,
                Department:'',
                RecruitmentActivities:cRecruitmentActivities,
                Place:cPlace,
                CompanyName:ctitle,
                page:cpage

            }
        }
    ).done(function (data) {
        console.log(data);
        var resultdata = data.result;
        var cdatal = resultdata.length;
        console.log(cdatal);
        for(i=0;i<cdatal;i++){
            var ceducation = resultdata[i].education;
            switch (ceducation){
                case 1:
                    ceducation = '大专';
                    break;
                case 2:
                    ceducation = '本科';
                    break;
                case 3:
                    ceducation = '研究生';
                    break;
            }


            var ctext = "<a class='team' href='jsp/jobDetails.jsp?jobDetailsId="+
                resultdata[i].jobDetailsId+"'>" +
                "<ul class='ul0'>"+
                "<li class='lifx'>"+
                "<img src='resources/image/zp/checkbox.png' width='20px'></li>"+
                "<li class='li0'><span>"+resultdata[i].positionTitle+"</span></li>"+
                "<li class='right0 li1'><span>"+ceducation+"及以上</span></li>"+
                "<li class='li2'><span>"+resultdata[i].place+"</span></li></ul></a>";
            $(".teams").append(ctext);
        }
        var cpagenum = data.count;
        pageNum = cpagenum;
        for(i=0;i<cpagenum;i++){
            var num = i+1;
            var coptionNum = "<option value='"+num+"'>"+num+"</option>";
            if(num == cselected){
                coptionNum = "<option selected='selected' value='"+num+"'>"+num+"</option>";
            }
            $("#pageNum").append(coptionNum);
        }
        if(cgoPage){
            if(pageNum>1){
                $(".pspanr").css('color','#ff8e0d');
                $("#pageNext").attr('src','resources/image/zp/xxractive.png');
                $(".pspanl").css('color','#868686');
                $("#pagePrev").attr('src','resources/image/zp/xxl.png');
            }
            else{
                $(".pspanr").css('color','#868686');
                $("#pageNext").attr('src','resources/image/zp/xxr.png');
                $(".pspanl").css('color','#868686');
                $("#pagePrev").attr('src','resources/image/zp/xxl.png');
            }
        }

    }).fail(function (e) {
        console.log(e);
    });
}

$(function () {

    var jiedianlen = document.getElementsByTagName("div").length;
    var jiedianC = document.getElementsByTagName("div");
    for(i=0;i<jiedianlen;i++){
        cleanWhiteSpace(jiedianC[i]);
    }
    //申请职位
    $("#apply").click(function (e) {
        var cuserIDL = $("body").has("#userID").length;
        console.log('cuserIDL',cuserIDL);
        if(cuserIDL == 0){
            window.location.href = 'jsp/login.jsp';
            return false;
        }
        var capplyL = $(".checkboxActive").length;
        console.log('capplyL',capplyL);
        var cPosition = "0";
        if(capplyL > 0){
            $(".checkboxActive").each(function (i,t) {
                cPosition +=","+$(t).next().children().text();
            });
        }
        promptX('申请成功。已发送邮件到您的邮箱中。',e);
        console.log(cPosition);
        cPosition = cPosition.substring(2);
        console.log(cPosition);
        var cIDNumber = $("#userID").text().substring(2);
        console.log(cIDNumber);
        var cdata = {Position:cPosition,IDNumber:cIDNumber};
        $.ajax({
            type:'post',
            url:'ApplyForPosition',
            data:cdata
        }).done(function (data) {
            console.log(data);
        }).fail(function (e) {
            console.log(e)
        });
    });

    //页面跳转、翻页
    $("#nextPage").click(NextPage);
    $("#prevPage").click(PrevPage);
    $("#pageNum").change(GoToPage);

    //点击搜索图片的，条件搜索
    $(".researchAll").click(function () {
        console.log("img");
        searchAll();

    });
    //确定条件
    $("#define").click(function () {
        var cgwmc = $("#gwmcz").text();
        var cxlz = $("#xlz").text();
        var cgzlxz = $("#gzlxz").text();
        var czplxz = $("#zplxz").text();
        var cfbsjz = $("#fbsjz").text();
        $("#positionTitle span").text(cgwmc);
        $("#positionxl span").text(cxlz);
        $("#positiongzlx span").text(cgzlxz);
        $("#positionzplx span").text(czplxz);
        $("#positionfbsj span").text(cfbsjz);
    });
    //清空条件
    $("#empty").click(function () {
        $("#gwmcz").text('所有');
        $("#xlz").text('所有');
        $("#gzlxz").text('所有');
        $("#zplxz").text('所有');
        $("#fbsjz").text('所有');
        $("#positionTitle span").text('岗位名称');
        $("#positionxl span").text('学历');
        $("#positiongzlx span").text('工作类型');
        $("#positionzplx span").text('所有');
        $("#positionfbsj span").text('所有');
    });


    $(".teams").on('click','.lifx',function (e) {
        e.preventDefault();
        console.log("on");
        var c = $(this).hasClass("checkboxActive");
        if(!c){
            $(this).addClass("checkboxActive");
            $(this).children().attr('src','resources/image/zp/checkboxxz.png');
        }
        else {
            $(this).removeClass("checkboxActive");
            $(this).children().attr('src','resources/image/zp/checkbox.png');
        }

    });



    //选择地区
    $(".xzdq").each(function (i,t) {
        $(t).click(function () {
            $("#unfoldMaps").css('display','block');
            $("#main").css('display','none');
        });
    });
    //设置遮罩层的高度
    $("#positionTitle,#positionxl,#positiongzlx,#positiongd").click(function () {
    	var h = window.screen.height;
        var one = parseInt(h);
        var three = parseInt(one+10);
        $("#maskLayer").css('display','block');
        $("#unfoldCondition").css('display','block');
    });

    //返回查询结果页面
    $("#gohome,#define,#empty").click(function () {
        $("#maskLayer").css('display','none');
        $("#unfoldCondition").css('display','none');
    });
    //选择岗位名称
    $("#gwmc").click(function () {
        $("#unfoldCondition").css('display','none');
        $("#unfoldTitle").css('display','block');
    });
    var count = 0;
    $("#unfoldTitle .conditionValue li").each(function (i,t) {
        $(t).click(function () {
            var b = $(t).hasClass("conditionValueActive");
            if(b){
                $(t).removeClass("conditionValueActive");
                if(count > 0){
                    count -=1;
                }
            }
            else {
                if(count < 5){
                    $(t).addClass("conditionValueActive");
                    count +=1;
                }
            }


        });
    });
    //返回条件搜索
    $("#gogwmc").click(function () {
        $("#unfoldCondition").css('display','block');
        $("#unfoldTitle").css('display','none');
    });
    $("#comeback").click(function () {
        $("#unfoldMaps").css('display','none');
        $("#main").css('display','block');
        $(document).scrollTop(0);
    });
    //确定岗位名称
    $("#qdgwmc").click(function () {
        $("#unfoldCondition").css('display','block');
        $("#unfoldTitle").css('display','none');
        var cpostionTile = '0';
        $(".conditionValueActive").each(function (i,t) {
            cpostionTile +=","+$(t).text();

        });
        $("#gwmcz").text(cpostionTile.substring(2));
    });
    //获取学历、工作类型、招聘类型、发布时间选择的值
    $("#unfoldxl").click(function () {
        var c = $("#unfoldxl option:selected").val();
        $("#xlz").text(c);
    });
    $("#unfoldgzlx").click(function () {
        var c = $("#unfoldgzlx option:selected").val();
        $("#gzlxz").text(c);
    });
    $("#unfoldzplx").click(function () {
        var c = $("#unfoldzplx option:selected").val();
        $("#zplxz").text(c);
    });
    $("#unfoldfbsj").click(function () {
        var c = $("#unfoldfbsj option:selected").val();
        $("#fbsjz").text(c);
    });
    //展开省份城市列表
    $(".province").each(function (i,t) {
        $(t).click(function () {

            $(t).next().toggle();
            var c = $(t).hasClass('provinceActive');
            if(!c){
                $(t).addClass('provinceActive');
                $(t).children().attr('src','resources/image/zp/shangla.png');
            }
            else {
                $(t).removeClass('provinceActive');
                $(t).children().attr('src','resources/image/zp/xiala.png');
            }

        });
    });
    //点击城市
    $(".marginbottom0 tr td").each(function (i,t) {
        $(t).click(function () {
            var c = $(t).text();
            $(".xzdq").text(c);
            $("#dqdqvalue").text(c);
            $("#unfoldMaps").css('display','none');
            $("#main").css('display','block');
            $(document).scrollTop(0);
        });
    });
})