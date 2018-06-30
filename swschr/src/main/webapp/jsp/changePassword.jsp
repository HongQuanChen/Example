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
    <link rel="stylesheet" href="../resources/css/changePassword.css">
    <title>密码重置</title>
</head>
<body class="container">
<div id="main">
    <h4>修改密码</h4>
    <p id="dl">请输入新密码:</p>
    <form action="changePassword" method="post">
        <div id="oneps">
            <label for="password">密码</label>
            <input id="password" type="password" name="Password1" placeholder="6-16位字母/数字/符号组合">
            <img class="psxschange" src="../resources/image/zp/bxsmm.png" width="20px">
        </div>
        <p id="tsmm"><span>请输入密码</span></p>
        <div id="twops">
            <label for="password1">确认密码</label>
            <input id="password1" type="password" name="Password2" placeholder="请输入和上面相同的密码">
            <img class="psxschange" src="../resources/image/zp/bxsmm.png" width="20px">
        </div>
        <p id="tsmm1"><span>请输入和上面一样的密码</span></p>
        <input style="display: none;" name="IDNumber" value="${snapId}">
        <input id="submit" type="submit" value="确认">
    </form>
</div>

<script src="../resources/js/jquery-3.0.0.min.js"></script>
<script src="../resources/js/flexible.js"></script>
<script src="../resources/bootstrap/bootstrap-3.3.7-dist/js/bootstrap.min.js"></script>
<script src="../resources/js/changePassword.js"></script>
</body>
</html>

