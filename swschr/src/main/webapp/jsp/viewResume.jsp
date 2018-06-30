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
    <link rel="stylesheet" href="../resources/css/viewResume.css">
    <title>查看简历</title>
</head>
<body class="container">
<div id="main">
    <div id="jlnav">
        <img id="comeback" src="../resources/image/zp/leftArrow.png" width="20px">
        <span>查看简历</span>
    </div>
</div>

<% HttpSession sess = request.getSession();
   String username = (String)sess.getAttribute("username");
   if(username == null || username == ""){
	   response.sendRedirect("login.jsp");
   }
%>
<p id="myId" style="display: none;"><%= username %></p>
<script src="../resources/js/jquery-3.0.0.min.js"></script>
<script src="../resources/js/flexible.js"></script>
<script src="../resources/bootstrap/bootstrap-3.3.7-dist/js/bootstrap.min.js"></script>
<script src="../resources/js/viewResume.js"></script>
</body>
</html>