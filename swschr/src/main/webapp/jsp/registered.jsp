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
    <link rel="stylesheet" href="../resources/css/registered.css">
    <title>账号注册</title>
</head>
<body class="container">
<div id="main">
    <p id="dl">账号注册</p>
    <form action="javascript:void(0);">
        <label for="username">用户ID</label>
        <input id="username" type="text" name="IDNumber" placeholder="请输入身份证号">
        <img id="userid" src="../resources/image/zp/correct14e2af.png" width="20px">
        <p id="tsyhm"><span>请输入身份证号</span></p>
        <div id="oneps">
            <label for="password">密码</label>
            <input id="password" type="password" name="Password1" placeholder="6-16位字母/数字/符号组合">
            <img class="psxschange" src="../resources/image/zp/bxsmm.png" width="20px">
            <img id="passwordid" src="../resources/image/zp/correct14e2af.png" width="20px">
        </div>
        <p id="tsmm"><span>请输入密码</span></p>
        <div id="twops">
            <label for="password1">确认密码</label>
            <input id="password1" type="password" name="Password2" placeholder="请输入和上面相同的密码">
            <img class="psxschange" src="../resources/image/zp/bxsmm.png" width="20px">
            <img id="passwordid1" src="../resources/image/zp/correct14e2af.png" width="20px">
        </div>
        <p id="tsmm1"><span>请输入与上面一样的密码</span></p>
        <label for="phone">手机号</label>
        <input id="phone" type="text" name="PhoneNumber" placeholder="请输入手机号">
        <img id="phoneid" src="../resources/image/zp/correct14e2af.png" width="20px">
        <p id="tsphone"><span>请输入手机号</span></p>
        <label for="email">邮箱</label>
        <input id="email" type="text" name="emailAddress" placeholder="请输入邮箱地址">
        <img id="emailid" src="../resources/image/zp/correct14e2af.png" width="20px">
        <p id="tsemail"><span>请输入邮箱地址</span></p>
        <label for="yzcode" id="yzcodelable">验证码</label>
        <p id="tsyzcodeImg"><span>点击图片，更换验证码 ${Code}</span></p>
        <input id="yzcode" type="text" name="Code" placeholder="请输入验证码">
        <img id="yzcodeimg" src="VerificationCode" width="100px" height="40px">
        <img id="yzcodeid" src="../resources/image/zp/correct14e2af.png" width="20px">
        <p id="tsyzcode"><span>验证码输入有误</span></p>
        <input id="submit" type="submit" value="注册">
    </form>
</div>

<script src="../resources/js/jquery-3.0.0.min.js"></script>
<script src="../resources/js/flexible.js"></script>
<script src="../resources/bootstrap/bootstrap-3.3.7-dist/js/bootstrap.min.js"></script>
<script src="../resources/js/registered.js"></script>
</body>
</html>