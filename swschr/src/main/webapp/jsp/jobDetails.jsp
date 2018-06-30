<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,minimum-scale=1,user-scalable=no"/>
    <link rel="stylesheet" href="../resources/css/reset1.css">
    <link rel="stylesheet" href="../resources/bootstrap/bootstrap-3.3.7-dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="../resources/bootstrap/bootstrap-3.3.7-dist/css/bootstrap-theme.min.css">
    <link rel="stylesheet" href="../resources/css/jobDetails.css">
    <title>职位详情</title>
</head>
<body class="container">
<div id="zptop">
    <div>
        <img src="../resources/image/swsc_logo/logo.png" width="50px" height="50px">
        <span class="glyphicon glyphicon-menu-down zpplace">重庆</span>
    </div>
    <div class="zptopdz">
        <% HttpSession sess = request.getSession();
        String username = (String)sess.getAttribute("username");
        if(username == null)
        out.println("<a class='borderright' href='login.jsp'>登录</a><a href='registered.jsp'>注册</a>");
        else
        out.println("<a id='userID'>欢迎"+username+"</a>");
        %>
    </div>
    <nav>
        <a href="myResume.jsp">我的简历</a>
        <a href="myResume.jsp">我的简历</a>
        <a href="myResume.jsp">我的简历</a>
        <a href="myResume.jsp">我的简历</a>
    </nav>
</div>
<div id="main">
    <div id="jobTop">
    </div>
    <div id="jobMain">
        <p id="zwms"><img src="../resources/image/zp/xxmsyellow.png" width="18px">职位描述</p>
        <p id="rzzg"><img src="../resources/image/zp/xxmsyellow.png" width="18px">任职资格</p>
    </div>
</div>
<div id="bottomfixed">
    <div>
        <span id="apply">申请职位</span>
    </div>
</div>
<!-- 遮罩层 -->
<div id="MaskLayer1"></div>
<!-- 提示 -->
<div id="PromptContainer">
    <ul>
        <li id="promptText"></li>
        <li id="promptButton">确定</li>
    </ul>
</div>


<script src="../resources/js/jquery-3.0.0.min.js"></script>
<script src="../resources/js/flexible.js"></script>
<script src="../resources/bootstrap/bootstrap-3.3.7-dist/js/bootstrap.min.js"></script>
<script src="../resources/js/jobDetails.js"></script>
</body>
</html>
