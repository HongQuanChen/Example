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
    <!-- 个人信息 -->
    <div id="editgsxx">
        <div class="resumePersonalInformation">
            <p class="editp">
                <img class="helpimg" src="../resources/image/zp/zj.png" width="25px">个人信息<span class="required">(必填)</span></p>
        </div>
        <div class="content econtent">
            <form id="formPI" method="post" action="PersonalInformation" enctype="multipart/form-data">
                <ul class="ullist">
                    <li id="xztx">
                        <span>头像</span>
                        <input id="scimage" type="file" onchange="handleFiles(this.files)" accept="image/*" name="Avatar">
                        <img id="defaultImg" src="../resources/image/zp/defaultAvatarBF.png" width="50px" height="50px">
                        <img class="rightArrow txImgArrow"  src="../resources/image/zp/rightArrowBF.png" width="20px">
                    </li>
                    <li><em class="asterisk">*</em><span class="asteriskTitle">姓名</span>
                        <input class="editInput" type="text" placeholder="填写姓名" name="Name">
                        <img class="rightArrow"  src="../resources/image/zp/rightArrowBF.png" width="20px">
                    </li>
                    <li><em class="asterisk">*</em><span class="asteriskTitle">性别</span>
                        <span id="sexSpan" class="editSpan">请选择</span>
                        <input id="sexInput" class="editInput" type="text" placeholder="请选择" name="Sex">
                        <select id="sexSelect" class="editSelect">
                            <option value="0">请选择</option>
                            <option value="1">男</option>
                            <option value="2">女</option>
                        </select>
                        <img class="rightArrow"  src="../resources/image/zp/rightArrowBF.png" width="20px">
                    </li>
                    <li><em class="asterisk">*</em><span class="asteriskTitle">出生日期</span>
                        <input id="csrq" class="editInput" type="text" placeholder="填写出生日期" name="DateOfBirth">
                        <img class="rightArrow"  src="../resources/image/zp/rightArrowBF.png" width="20px">
                    </li>
                    <li><em class="asterisk">*</em><span class="asteriskTitle">身份证号</span>
                        <input class="editInput" type="text" placeholder="填写身份证号" name="IDnumber" readonly="readonly" value="<%= username %>">
                        <img class="rightArrow"  src="../resources/image/zp/rightArrowBF.png" width="20px">
                    </li>
                    <li><em class="asterisk">*</em><span class="asteriskTitle">手机号</span>
                        <input class="editInput" type="text" placeholder="填写手机号" name="PhoneNumber">
                        <img class="rightArrow"  src="../resources/image/zp/rightArrowBF.png" width="20px">
                    </li>
                    <li><em class="asterisk">*</em><span class="asteriskTitle">参加工作时间</span>
                        <input id="cjgzsj" class="editInput" type="text" placeholder="填写参加工作时间" name="ToWorkTime">
                        <img class="rightArrow"  src="../resources/image/zp/rightArrowBF.png" width="20px">
                    </li>
                    <li><span class="asteriskTitle">户口所在地</span>
                        <!--<span class="editSpan">重庆</span>  -->
                        <input class="editSpan" type="text" placeholder="填写户口所在地" name="AccountLocation">
                        <img class="rightArrow"  src="../resources/image/zp/rightArrowBF.png" width="20px">
                    </li>
                    <li><em class="asterisk">*</em><span class="asteriskTitle">现居住城市</span>
                        <input class="editSpan" type="text" placeholder="填写现居住城市" name="CurrentCity">
                        <img class="rightArrow"  src="../resources/image/zp/rightArrowBF.png" width="20px">
                    </li>
                    <li><span class="asteriskTitle">邮箱</span>
                        <input class="editInput" type="text" placeholder="填写邮箱" name="EmailAddress">
                        <img class="rightArrow"  src="../resources/image/zp/rightArrowBF.png" width="20px">
                    </li>
                    <li><em class="asterisk">*</em><span class="asteriskTitle">婚姻状况</span>
                        <span id="maritalStatusSpan" class="editSpan">请选择</span>
                        <input id="maritalStatusInput" class="editInput" type="text" placeholder="请选择" name="MaritalStatus">
                        <select id="maritalStatusSelect" class="editSelect">
                            <option value="0">请选择</option>
                            <option value="1">未婚</option>
                            <option value="2">已婚</option>
                            <option value="3">保密</option>
                        </select>
                        <img class="rightArrow"  src="../resources/image/zp/rightArrowBF.png" width="20px">
                    </li>
                    <li>
                        <input id="PersonalIdInput" class="editInput" hidden type="text" name="PersonalId">
                    </li>
                </ul>
                <input id="submitPI" type="submit" value="保存">
            </form>
        </div>
    </div>
    <!-- 保存 
    <p id="conditionBottom"><span id="define">保存</span></p>
    -->
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
<script src="../resources/js/createPersonalInformation.js"></script>
</body>
</html>