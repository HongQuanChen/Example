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
    <link rel="stylesheet" href="../resources/css/login.css">
    <title>登陆</title>
</head>
<body class="container">
<div id="main">
    <p id="dl">登陆</p>
    <form action="http://www.baidu.com">
        <label for="username">用户名</label>
        <span id="loginFailed">用户名或密码有误</span>
        <input id="username" type="text" name="username" placeholder="请输入身份证号">
        <p id="tsyhm"><span>请输入用户名</span></p>
        <label for="password">密码</label>
        <input id="password" type="password" name="password" placeholder="请输入密码">
        <p id="tsmm"><span>请输入密码</span></p>
        <input id="submit" type="submit" value="登陆">
        <p id="qt">
            <a id="zuxyh" href="registered.jsp">注册新用户</a>
            <a id="wjmm" href="resetPassword.jsp">忘记密码</a>
        </p>
    </form>
</div>

<script src="../resources/js/jquery-3.0.0.min.js"></script>
<script src="../resources/js/flexible.js"></script>
<script src="../resources/bootstrap/bootstrap-3.3.7-dist/js/bootstrap.min.js"></script>
<script src="../resources/js/login.js"></script>
</body>
</html>