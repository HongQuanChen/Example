function cleanWhiteSpace(element){
    for(var i=0; i<element.childNodes.length; i++){
        var node = element.childNodes[i];
        if(node.nodeType == 3 && !/\S/.test(node.nodeValue)){
            node.parentNode.removeChild(node);
        }
    }
}

function ListJump(x,y,z) {
    $(x).click(function () {
        window.location.href =z+'.jsp?count='+y;
    })
}

$(function () {
    var jiedianlen = document.getElementsByTagName("div").length;
    var jiedianC = document.getElementsByTagName("div");
    for(i=0;i<jiedianlen;i++){
        cleanWhiteSpace(jiedianC[i]);
    }

    var count = window.location.search.split("=")[1];
    console.log(count);
    //跳转到添加个人信息页面、添加求职意向页面、添加教育背景页面、添加工作经验页面
    ListJump(".createGRXX",count,'createPersonalInformation');
    ListJump(".createQZYX",count,'createCareerObjective');
    ListJump(".createJYBJ",count,'createEducationBackground');
    ListJump(".createGZJY",count,'createWorkExperience');
    $("#comeback").click(function () {
        window.location.href = 'myResume.jsp';
    });

})