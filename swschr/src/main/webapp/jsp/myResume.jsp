<%@ page language="java" contentType="text/html; charset=UTF-8"
pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,minimum-scale=1,user-scalable=no"/>
    <link rel="stylesheet" href="../resources/css/reset1.css">
    <link rel="stylesheet" href="../resources/bootstrap/bootstrap-3.3.7-dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="../resources/bootstrap/bootstrap-3.3.7-dist/css/bootstrap-theme.min.css">
    <link rel="stylesheet" href="../resources/css/myResume.css">
    <title>我的简历</title>

</head>
<body class="container ">
<div id="main" style="display:none;">
    <div id="jlnav">
        <img id="comeback" src="../resources/image/zp/leftArrow.png" width="20px">
        <span>我的简历</span>
    </div>
    <div id="create">
        <a class="create" onclick="Jump(event)" >+ 创建简历</a>
    </div>
</div>
<% HttpSession sess = request.getSession();
   String username = (String)sess.getAttribute("username");
   if(username == null || username == ""){
	   response.sendRedirect("login.jsp");
   }  
%>
<p id="IDNumber" style="display: none;"><%= username %></p>
<!-- 遮罩层 -->
<div id="MaskLayer"></div>
<!-- 提示 -->
<div id="PromptContainer">
    <ul>
        <li id="promptText"></li>
        <li id="promptButton">确定</li>
    </ul>
</div>
<!-- 遮罩层 -->
<div id="MaskLayer1"></div>
<!-- 提示删除 -->
<div id="PromptContainer1">删除中<span id="promptDel"></span></div>

<script src="../resources/js/jquery-3.0.0.min.js"></script>
<script src="../resources/js/flexible.js"></script>
<script src="../resources/bootstrap/bootstrap-3.3.7-dist/js/bootstrap.min.js"></script>
<script src="../resources/js/myResume.js"></script>
</body>
</html>