//去除空白字符
function cleanWhiteSpace(element){
    for(var i=0; i<element.childNodes.length; i++){
        var node = element.childNodes[i];
        if(node.nodeType == 3 && !/\S/.test(node.nodeValue)){
            node.parentNode.removeChild(node);
        }
    }
}

$(function () {
    var jiedianlen = document.getElementsByTagName("div").length;
    var jiedianC = document.getElementsByTagName("div");
    for(i=0;i<jiedianlen;i++){
        cleanWhiteSpace(jiedianC[i]);
    }
    //判断用户名是否输入
    $("#username").blur(function () {
        var cname = $("#username").val();
        if(cname !=""){
            $("#tsyhm").css('display','none');
        }
        else {
            $("#tsyhm").css('display','block');
        }
    });
    //判断密码是否输入
    $("#password").blur(function () {
        var cpassword = $("#password").val();
        if(cpassword !=""){
            $("#tsmm").css('display','none');
        }
        else {
            $("#tsmm").css('display','block');
        }
    });

    $("#submit").click(function (e) {
        e.preventDefault();
        var cname = $("#username").val();
        console.log(cname);
        var cpassword = $("#password").val();
        var cdata = {IDNumber:cname,password:cpassword};
        $.ajax({
            type:'post',
            url:'./Login',
            data:cdata
        }).done(function (data) {
            if(data == 0){
                $("#loginFailed").css('display','inline-block');
            }
            else{
                $("#loginFailed").css('display','none');
                window.location.href = '../index.jsp';
            }
        });
        var textu = $("#username").val();
        if(textu == "" || textu == null){
            $("#tsyhm").css('display','block');
            e.preventDefault();
        }
        var textm = $("#password").val();
        if(textm == "" || textm == null){
            $("#tsmm").css('display','block');
            e.preventDefault();
        }
    });
})