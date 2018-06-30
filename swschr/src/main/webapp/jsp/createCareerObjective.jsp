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
    <link rel="stylesheet" href="../resources/css/mobiscroll/mobiscroll.css">
    <link rel="stylesheet" href="../resources/css/mobiscroll/mobiscroll_date.css">
    <link rel="stylesheet" href="../resources/css/createResume.css">
    <title>创建简历</title>
</head>
<body class="container">
<% HttpSession sess = request.getSession();
   String username = (String)sess.getAttribute("username");
   if(username == null || username == ""){
	   response.sendRedirect("login.jsp");
   }
%>
<!-- 创建简历 -->
<div id="edit">
    <div id="jlnav1">
        <img id="comeback1" src="../resources/image/zp/leftArrow.png" width="20px">
        <span>创建简历</span>
    </div>
    <!-- 求职意向 -->
    <div id="editqzyx">
        <div class="resumeCareerObjective">
            <p class="editp"><img class="helpimg" src="../resources/image/zp/qzyx.png" width="20px">求职意向<span class="required">(必填)</span></p>
        </div>
        <div class="content econtent">
            <form id="formCO" method="post" action="CareerObjective">
                <ul class="ullist">
                    <li><span class="asteriskTitle">工作性质</span>
                        <span id="gzxzSpan" class="editSpan">请选择</span>
                        <input id="gzxzInput" class="editInput" type="text" placeholder="请选择" name="NatureOfTheWork">
                        <select id="gzxzSelect" class="editSelect">
                            <option value="0">请选择</option>
                            <option value="1">全职</option>
                            <option value="2">兼职</option>
                        </select>
                        <img class="rightArrow"  src="../resources/image/zp/rightArrowBF.png" width="20px">
                    </li>
                    <li><em class="asterisk">*</em><span class="asteriskTitle">工作地点</span>
                        <input id="gzddInput" class="editInput" placeholder="填写工作地点" type="text" name="WorkPlace">
                        <img class="rightArrow"  src="../resources/image/zp/rightArrowBF.png" width="20px">
                    </li>
                    <li><em class="asterisk">*</em><span class="asteriskTitle">期望薪资</span>
                        <span id="qwxzSpan" class="editSpan">面议</span>
                        <input id="qwxzInput" class="editInput" type="text" name="ExpectedSalary">
                        <select id="qwxzSelect" class="editSelect">
                            <option value="0">面议</option>
                            <option value="1">1000-1999</option>
                            <option value="2">2000-2999</option>
                            <option value="3">3000-3999</option>
                            <option value="4">4000-4999</option>
                            <option value="5">5000-5999</option>
                            <option value="6">6000-6999</option>
                            <option value="7">7000-7999</option>
                            <option value="8">8000-8999</option>
                            <option value="9">9000-9999</option>
                            <option value="10">10000-19999</option>
                            <option value="11">20000-29999</option>
                        </select>
                        <img class="rightArrow"  src="../resources/image/zp/rightArrowBF.png" width="20px">
                    </li>
                    <li><span class="asteriskTitle">工作状态</span>
                        <span id="gzztSpan" class="editSpan">请选择</span>
                        <input id="gzztInput" class="editInput" type="text" name="WorkStatus">
                        <select id="gzztSelect" class="editSelect">
                            <option value="1">暂无跳槽打算</option>
                            <option value="2">已离职</option>
                            <option value="3">有跳槽打算，一个月后可以到岗</option>
                        </select>
                        <img class="rightArrow"  src="../resources/image/zp/rightArrowBF.png" width="20px">
                    </li>
                    <li>
                        <input id="CareerObjectiveIdInput" class="editInput" hidden type="text" name="CareerObjectiveId">
                    </li>
                    <li>
                        <input id="IDNumberInput" class="editInput" hidden type="text" name="IDNumber" value="<%= username %>">
                    </li>
                </ul>
                <input id="submitCO" type="submit" value="保存">
            </form>
        </div>
    </div>
</div>
<!-- 遮罩层 -->
<div id="MaskLayer"></div>
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
<script src="../resources/js/mobiscroll/mobiscroll_date.js" charset="gb2312"></script>
<script src="../resources/js/mobiscroll/mobiscroll.js"></script>
<script src="../resources/js/createResume.js"></script>
<script src="../resources/js/createCareerObjective.js"></script>
</body>
</html>