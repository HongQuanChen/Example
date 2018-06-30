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
    <link rel="stylesheet" href="../resources/css/createNavigation.css">
    <title>创建简历</title>

</head>
<body class="container ">
<% HttpSession sess = request.getSession();
   String username = (String)sess.getAttribute("username");
   if(username == null || username == ""){
	   response.sendRedirect("login.jsp");
   }
%>
<div id="main">
    <div id="jlnav">
        <img id="comeback" src="../resources/image/zp/leftArrow.png" width="20px">
        <span>创建简历</span>
    </div>
    <div id="createGRXX">
        <a class="createGRXX" >+ 添加个人信息</a>
    </div>
    <div id="createQZYX">
        <a class="createQZYX" >+ 添加求职意向</a>
    </div>
    <div id="createJYBJ">
        <a class="createJYBJ" >+ 添加教育背景</a>
    </div>
    <div id="createGZJY">
        <a class="createGZJY" >+ 添加工作经验</a>
    </div>
</div>


<script src="../resources/js/jquery-3.0.0.min.js"></script>
<script src="../resources/js/flexible.js"></script>
<script src="../resources/bootstrap/bootstrap-3.3.7-dist/js/bootstrap.min.js"></script>
<script src="../resources/js/createNavigation.js"></script>
</body>
</html>