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
    <!-- 教育背景 -->
    <div id="editjybj">
        <div class="resumeEducationBackground">
            <p class="editp"><img class="helpimg" src="../resources/image/zp/jyjl.png" width="25px">教育背景<span class="required">(必填)</span></p>
            <img class="editimg" src="../resources/image/zp/jia.png" width="20px">
            <a class="edita">新增</a>
            <span id="createJYBJ" ></span>
        </div>
        <div class="content econtent">
            <ul class="ullist">
                <li><em class="asterisk">*</em><span class="asteriskTitle">学校名称</span>
                    <input class="editInput" type="text" name="SchoolName" placeholder="填写学校名称" >
                    <img class="rightArrow"  src="../resources/image/zp/rightArrowBF.png" width="20px">
                </li>
                <li><em class="asterisk">*</em><span class="asteriskTitle">专业名称</span>
                    <input class="editInput" type="text" name="ProfessionalTitle" placeholder="填写专业名称">
                    <img class="rightArrow"  src="../resources/image/zp/rightArrowBF.png" width="20px">
                </li>
                <li><em class="asterisk">*</em><span class="asteriskTitle">学历/学位</span>
                    <span id="xlSpan" class="editSpan">请选择</span>
                    <input id="xlInput" class="editInput" type="text" name="Degree">
                    <select id="xlSelect" class="editSelect">
                        <option value="0">请选择</option>
                        <option value="1">大专</option>
                        <option value="2">本科</option>
                        <option value="3">研究生</option>
                        <option value="4">博士</option>
                    </select>
                    <img class="rightArrow"  src="../resources/image/zp/rightArrowBF.png" width="20px">
                </li>
                <li><em class="asterisk">*</em><span class="asteriskTitle">入学时间</span>
                    <input id="rxsj" class="editInput" type="text" name="AdmissionTime" placeholder="填写入学时间">
                    <img class="rightArrow"  src="../resources/image/zp/rightArrowBF.png" width="20px">
                </li>
                <li><em class="asterisk">*</em><span class="asteriskTitle">毕业时间</span>
                    <input id="bysj" class="editInput" type="text" name="GraduationTime" placeholder="填写毕业时间">
                    <img class="rightArrow"  src="../resources/image/zp/rightArrowBF.png" width="20px">
                </li>
                <li>
                    <input id="EducationBackgroundIdInput" class="editInput" hidden type="text" name="EducationBackgroundId">
                </li>
                <li>
                    <input id="IDNumberInput" class="editInput" hidden type="text" name="IDNumber" value="<%= username %>">
                </li>
                <li>
                    <input id="NumberInput" class="editInput" hidden type="text" name="Number" value="1">
                </li>
            </ul>
        </div>
    </div>
    <!-- 保存 -->
    <span id="saveJYBJTJ">提交</span>
    <p id="conditionBottom"><span id="saveJYBJ" onclick="tsClick(event)">保存</span></p>
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
<script src="../resources/js/createEducationBackground.js"></script>
</body>
</html>