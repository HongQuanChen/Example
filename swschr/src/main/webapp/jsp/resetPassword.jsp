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
    <link rel="stylesheet" href="../resources/css/resetPassword.css">
    <title>密码重置</title>
</head>
<body class="container">
<div id="main">
    <p id="dl">密码重置</p>
    <form action="snapID" method="post">
        <label for="username">用户名</label>
        <input id="username" name="IDNumber" type="text" placeholder="请输入身份证号">
        <img id="userid" src="../resources/image/zp/correct14e2af.png" width="20px">
        <p id="tsyhm"><span>请输入身份证号</span></p>
        <label for="email">邮箱</label>
        <input id="email" type="text" name="Email" placeholder="请输入邮箱地址">
        <img id="emailid" src="../resources/image/zp/correct14e2af.png" width="20px">
        <p id="tsemail"><span>请输入邮箱</span></p>
        <div id="yzcodec">
            <label id="yzlabel" for="yzcode">验证码</label>
            <p id="tsyzcodeImg"><span>点击图片，更换验证码</span></p>
            <input id="yzcode" type="text" placeholder="点击图片可刷新">
            <img id="yzimg" src="VerificationCode" width="100px" height="40px">
            <img id="yzcodeid" src="../resources/image/zp/correct14e2af.png" width="20px">
            <p id="tsyzcode"><span>验证码输入有误</span></p>
        </div>
        <input id="submit" type="submit" value="下一步">
    </form>
</div>

<script src="../resources/js/jquery-3.0.0.min.js"></script>
<script src="../resources/js/flexible.js"></script>
<script src="../resources/bootstrap/bootstrap-3.3.7-dist/js/bootstrap.min.js"></script>
<script src="../resources/js/resetPassword.js"></script>
</body>
</html>
