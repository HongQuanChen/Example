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
    <title>编辑简历</title>
</head>
<body class="container">
<% HttpSession sess = request.getSession();
   String username = (String)sess.getAttribute("username");
   if(username == null || username == ""){
	   response.sendRedirect("login.jsp");
   }
%>
<!-- 编辑简历 -->
<div id="edit">
    <div id="jlnav1">
        <img id="comeback1" src="../resources/image/zp/leftArrow.png" width="20px">
        <span>编辑简历</span>
    </div>
    <!-- 工作经验 -->
    <div id="editgzjy">
        <div class="resumeWorkExperience">
            <p class="editp"><img class="helpimg" src="../resources/image/zp/gzjy.png" width="25px">工作经验<span class="required">(必填)</span></p>
            <img class="editimg" src="../resources/image/zp/jia.png" width="20px">
            <a class="edita">新增</a>
            <span id="createGZJY" ></span>
        </div>
        <div class="content econtent">
            <ul class="ullist">
                <li><em class="asterisk">*</em><span class="asteriskTitle">公司名称</span>
                    <input class="editInput" type="text" name="CompanyName" placeholder="填写公司名称">
                    <img class="rightArrow"  src="../resources/image/zp/rightArrowBF.png" width="20px">
                </li>
                <li><em class="asterisk">*</em><span class="asteriskTitle">职位名称</span>
                    <input class="editInput" type="text" name="JobTitle" placeholder="填写职位名称">
                    <img class="rightArrow"  src="../resources/image/zp/rightArrowBF.png" width="20px">
                </li>
                <li><em class="asterisk">*</em><span class="asteriskTitle">任职开始时间</span>
                    <input id="rzkssj" class="editInput" type="text" name="ZWStartTime" placeholder="填写任职开始时间">
                    <img class="rightArrow"  src="../resources/image/zp/rightArrowBF.png" width="20px">
                </li>
                <li><em class="asterisk">*</em><span class="asteriskTitle">任职结束时间</span>
                    <input id="rzjssj" class="editInput" type="text" name="ZWEndTime" placeholder="填写任职结束时间">
                    <img class="rightArrow"  src="../resources/image/zp/rightArrowBF.png" width="20px">
                </li>
                <li><span class="asteriskTitle">职位薪金(税前)</span>
                    <span id="zwSalarySpan" class="editSpan">请选择</span>
                    <input id="zwSalaryInput" class="editInput" type="text" name="zwSalary" value="0">
                    <select id="zwSalarySelect" class="editSelect">
                        <option value="0">保密</option>
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
                <li><em class="asterisk">*</em><span class="asteriskTitle">工作描述</span>
                </li>
                <li>
                    <input id="WorkExperienceIdInput" class="editInput" hidden type="text" name="WorkExperienceId">
                </li>
                <li>
                    <input id="IDNumberInput" class="editInput" hidden type="text" name="IDNumber" value="<%= username %>">
                </li>
                <li>
                    <input id="NumberInput" class="editInput" hidden type="text" name="Number" value="1">
                </li>
            </ul>
            <textarea class="gzms" name="zwGzms" rows="2" placeholder="填写工作描述"></textarea>
        </div>
    </div>
    <!-- 保存 -->
    <span id="saveGZJYTJ">提交</span>
    <p id="conditionBottom"><span id="saveGZJY" onclick="tsClick(event)">保存</span></p>
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
<p id="myId" style="display: none;"><%= username %></p>
<script src="../resources/js/jquery-3.0.0.min.js"></script>
<script src="../resources/js/flexible.js"></script>
<script src="../resources/bootstrap/bootstrap-3.3.7-dist/js/bootstrap.min.js"></script>
<script src="../resources/js/mobiscroll/mobiscroll_date.js" charset="gb2312"></script>
<script src="../resources/js/mobiscroll/mobiscroll.js"></script>
<script src="../resources/js/editResume.js"></script>
<script src="../resources/js/editWorkExperience.js"></script>
</body>
</html>