<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,minimum-scale=1,user-scalable=no"/>
    <link rel="stylesheet" href="resources/css/reset1.css">
    <link rel="stylesheet" href="resources/bootstrap/bootstrap-3.3.7-dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="resources/bootstrap/bootstrap-3.3.7-dist/css/bootstrap-theme.min.css">
    <link rel="stylesheet" href="resources/css/society.css">
    <script src="http://api.map.baidu.com/api?v=2.0&ak=HocPi77WupNQfcWkXpAWZblU"></script>
    <title>西证招聘</title>
</head>
<body class="container">
<div id="main">
    <div id="zptop">
        <div>
            <img src="resources/image/swsc_logo/logo.png" width="50px" height="50px">
            <span class="glyphicon glyphicon-menu-down zpplace">重庆</span>
        </div>
        <div class="zptopdz">
        <% HttpSession sess = request.getSession();
           String username = (String)sess.getAttribute("username");
           if(username == null)
        	   out.println("<a class='borderright' href='jsp/login.jsp'>登录</a><a href='jsp/registered.jsp'>注册</a>");
           else
        	   out.println("<a id='userID'>欢迎"+username+"</a>");
        %>
        </div>
        <nav>
            <a href="jsp/myResume.jsp">我的简历</a>
            <a href="jsp/myResume.jsp">我的简历</a>
            <a href="jsp/myResume.jsp">我的简历</a>
            <a href="jsp/myResume.jsp">我的简历</a>
        </nav>
    </div>
    <div id="search">
        <div id="searchtextc">
            <div id="searchtext">
                <span id="workPlace" class="xzdq">北京</span><img class="xzdq" src="resources/image/zp/xiala.png" width="20px">
                <form action="javascript:void(0);" onsubmit="searchForm()">
                <input id="searchValue" value="" type="text" placeholder="请输入关键字">
                <img class="researchAll" src="resources/image/zp/search.png" width="20px">
                </form>
            </div>
        </div>
        <div id="searchconditionc">
            <ul>
                <li id="positionTitle"><span>岗位名称</span><img src="resources/image/zp/xiala.png" width="20px"></li>
                <li id="positionxl"><span>学历</span><img src="resources/image/zp/xiala.png" width="20px"></li>
                <li id="positiongzlx"><span>工作类型</span><img src="resources/image/zp/xiala.png" width="20px"></li>
                <li id="positiongd"><span>更多</span><img src="resources/image/zp/xiala.png" width="20px"></li>
                <li id="positionzplx" style="display: none;"><span></span></li>
                <li id="positionfbsj" style="display: none;"><span></span></li>
            </ul>
        </div>
    </div>
    <div class="teams">
        
    </div>
    <div id="page">
        <div id="prevPage"><img id="pagePrev" src="resources/image/zp/xxl.png" width="20px"><span class="pspanl">上一页</span></div>
        <div class="pagem">
            <span>第1页</span>
            <select id="pageNum"></select>
        </div>
        <div id="nextPage"><span class="pspanr">下一页</span><img id="pageNext" src="resources/image/zp/xxr.png" width="20px"></div>
    </div>
    <div id="bottomfixed">
        <div>
            <span id="apply">申请职位</span>
        </div>
    </div>
</div>
<!-- 遮罩层 -->
<div id="maskLayer"></div>
<!-- 展开搜索条件 -->
<div id="unfoldCondition">
    <p id="conditionTop"><img id="gohome" src="resources/image/zp/leftArrow.png" width="20px">条件搜索</p>
    <ul class="conditionNav">
        <li id="gwmc">岗位名称<span id="gwmcz">所有</span><img src="resources/image/zp/rightArrowBF.png" width="15px"></li>
        <li id="xl">学历<span id="xlz">所有</span><img src="resources/image/zp/rightArrowBF.png" width="15px">
            <select id="unfoldxl">
                <option value="所有">所有</option>
                <option value="大专">大专</option>
                <option value="本科">本科</option>
                <option value="研究生">研究生</option>
                <option value="博士">博士</option>
            </select>
        </li>
        <li id="gzlx">工作类型<span id="gzlxz">所有</span><img src="resources/image/zp/rightArrowBF.png" width="15px">
            <select id="unfoldgzlx">
                <option value="所有">所有</option>
                <option value="全职">全职</option>
                <option value="兼职">兼职</option>
            </select>
        </li>
        <li id="zplx">招聘类型<span id="zplxz">所有</span><img src="resources/image/zp/rightArrowBF.png" width="15px">
            <select id="unfoldzplx">
                <option value="所有">所有</option>
                <option value="社会招聘">社会招聘</option>
                <option value="校园招聘">校园招聘</option>
                <option value="内部招聘">内部招聘</option>
            </select>
        </li>
        <li id="fbsj">发布时间<span id="fbsjz">所有</span><img src="resources/image/zp/rightArrowBF.png" width="15px">
            <select id="unfoldfbsj">
                <option value="所有">所有</option>
                <option value="24小时内">24小时内</option>
                <option value="近三天">近三天</option>
                <option value="近一周">近一周</option>
                <option value="近一月">近一月</option>
            </select>
        </li>
    </ul>
    <p id="conditionBottom"><span id="empty">清空条件</span><span id="define">确定</span></p>
</div>
<!-- 展开岗位名称-->
<div id="unfoldTitle">
    <p><img id="gogwmc" src="resources/image/zp/leftArrow.png" width="20px">选择岗位名称<span id="qdgwmc">确定</span></p>
    <ul class="conditionValue">
        <li>所有</li>
        <li>主任</li>
        <li>ui</li>
        <li>厂长</li>
        <li>组长</li>
        <li>项目经理</li>
        <li>c++</li>
        <li>大数据工程师</li>
        <li>交易分析师</li>
        <li>java</li>
        <li>h5</li>
        <li>前端工程师</li>
        <li>人力资源主管</li>
        <li>总经理</li>
        <li>金融分析师</li>
        <li>护士</li>
    </ul>
</div>
<!-- 展开地区 -->
<div id="unfoldMaps">
    <p><img id="comeback" src="resources/image/zp/leftArrow.png" width="20px">选择地区</p>
    <div id="dqdq">
        <div>当前地区</div>
        <div><img src="resources/image/zp/map.png" width="20px"><span id="dqdqvalue">重庆</span></div>
    </div>
    <div id="rmcs">
        <div>热门城市</div>
        <table class="table marginbottom0">
            <tr>
                <td>全国</td>
                <td>北京</td>
                <td>上海</td>
                <td>广州</td>
            </tr>
            <tr>
                <td>深圳</td>
                <td>重庆</td>
                <td>武汉</td>
                <td>成都</td>
            </tr>
            <tr>
                <td>南京</td>
                <td>天津</td>
                <td>西安</td>
                <td>杭州</td>
            </tr>
        </table>
    </div>
    <div id="qtcs">
        <div>按省份选择城市</div>
        <div class="province">广东省<img src="resources/image/zp/xiala.png" width="20px"></div>
        <table class="table marginbottom0 pink">
            <tr>
                <td>广州</td>
                <td>深圳</td>
                <td>珠海</td>
                <td>汕头</td>
            </tr>
            <tr>
                <td>佛山</td>
                <td>韶关</td>
                <td>湛江</td>
                <td>肇庆</td>
            </tr>
            <tr>
                <td>江门</td>
                <td>茂名</td>
                <td>惠州</td>
                <td>梅州</td>
            </tr>
            <tr>
                <td>汕尾</td>
                <td>河源</td>
                <td>阳江</td>
                <td>清远</td>
            </tr>
            <tr>
                <td>东莞</td>
                <td>中山</td>
                <td>潮州</td>
                <td>揭阳</td>
            </tr>
            <tr>
                <td colspan="4">云浮</td>
            </tr>
        </table>

        <div class="province">广东省<img src="resources/image/zp/xiala.png" width="20px"></div>
        <table class="table marginbottom0 pink">
            <tr>
                <td>广州</td>
                <td>深圳</td>
                <td>珠海</td>
                <td>汕头</td>
            </tr>
            <tr>
                <td>佛山</td>
                <td>韶关</td>
                <td>湛江</td>
                <td>肇庆</td>
            </tr>
            <tr>
                <td>江门</td>
                <td>茂名</td>
                <td>惠州</td>
                <td>梅州</td>
            </tr>
            <tr>
                <td>汕尾</td>
                <td>河源</td>
                <td>阳江</td>
                <td>清远</td>
            </tr>
            <tr>
                <td>东莞</td>
                <td>中山</td>
                <td>潮州</td>
                <td>揭阳</td>
            </tr>
            <tr>
                <td colspan="4">云浮</td>
            </tr>
        </table>
    </div>
</div>
<!-- 遮罩层 -->
<div id="MaskLayer1"></div>
<!-- 提示 -->
<div id="PromptContainer">
    <ul>
        <li id="promptText"></li>
        <li id="promptButton">确定</li>
    </ul>
</div>

<script src="resources/js/jquery-3.0.0.min.js"></script>
<script src="resources/js/flexible.js"></script>
<script src="resources/bootstrap/bootstrap-3.3.7-dist/js/bootstrap.min.js"></script>
  <script type="text/javascript">
    // 百度地图API功能
    var map = new BMap.Map("allmap");
    var point = new BMap.Point(116.331398,39.897445);
    function myFun(result){
        var cityName = result.name;
        var cone = cityName.indexOf("市");
        cityName = cityName.substring(0,cone);
        $("#workPlace").text(cityName);
        $(".zpplace").text(cityName);
    }
    var myCity = new BMap.LocalCity();
    myCity.get(myFun);
</script>
<script src="resources/js/society.js"></script>
</body>
</html>



