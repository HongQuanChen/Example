package com.swschrwx.app;

import java.awt.Color;
import java.awt.Font;
import java.awt.Graphics;
import java.awt.image.BufferedImage;
import java.io.IOException;
import java.io.OutputStream;
import java.net.URLEncoder;
import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Base64;
import java.util.Collection;
import java.util.Collections;
import java.util.Date;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Locale;
import java.util.Map;
import java.util.Random;

import javax.imageio.ImageIO;
import javax.servlet.ServletException;
import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import javax.servlet.http.Part;

import org.apache.ibatis.annotations.Param;
import org.json.JSONArray;
import org.json.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Primary;
import org.springframework.mail.MailSender;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.JavaMailSenderImpl;
import org.springframework.stereotype.Controller;
import org.springframework.stereotype.Service;
import org.springframework.ui.Model;
import org.springframework.util.DigestUtils;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.mybatis.swschrwx.pojo.CareerObjective;
import com.mybatis.swschrwx.pojo.Description;
import com.mybatis.swschrwx.pojo.EducationBackground;
import com.mybatis.swschrwx.pojo.JobDescription;
import com.mybatis.swschrwx.pojo.Jobdetails;
import com.mybatis.swschrwx.pojo.PersonalInformation;
import com.mybatis.swschrwx.pojo.PersonalInformation2;
import com.mybatis.swschrwx.pojo.PersonalInformation3;
import com.mybatis.swschrwx.pojo.Registered;
import com.mybatis.swschrwx.pojo.ResumeStatus;
import com.mybatis.swschrwx.pojo.WorkExperience;
import com.mybatis.swschrwx.service.CareerObjectiveService;
import com.mybatis.swschrwx.service.DescriptionService;
import com.mybatis.swschrwx.service.EducationBackgroundService;
import com.mybatis.swschrwx.service.JobdetailsService;
import com.mybatis.swschrwx.service.LoginService;
import com.mybatis.swschrwx.service.PersonalInformationService;
import com.mybatis.swschrwx.service.RegisteredService;
import com.mybatis.swschrwx.service.ResumeStatusService;
import com.mybatis.swschrwx.service.WorkExperienceService;


/**
 * Handles requests for the application home page.
 */
@Controller
public class HomeController {
	private String token = "hellotoken";
	private int width = 90;//定义图片的width  
    private int height = 20;//定义图片的height  
    private int codeCount = 4;//定义图片上显示验证码的个数  
    private int xx = 15;  
    private int fontHeight = 18;  
    private int codeY = 16;  
    private StringBuffer randomCode = new StringBuffer(); 
    char[] codeSequence = { 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',  
            'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W',  
            'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9' };  
	
	@Autowired
	private CheckSecret checkSecret;
	@Autowired
	private CheckToken checkToken;
    @Autowired
    private JobdetailsService jbse;
    @Autowired
    private DescriptionService dese;
    @Autowired
    private RegisteredService regse;
    @Autowired
    private LoginService loginse;
    @Autowired
    private PersonalInformationService pise;
    @Autowired
    private CareerObjectiveService cobs;
    @Autowired
    private EducationBackgroundService ebse;
    @Autowired
    private WorkExperienceService wese;
    @Autowired
    private ResumeStatusService rsse;
    @Autowired
    @Qualifier("myMail")
    JavaMailSender ms;
	/**
	 * Simply selects the home view to render by returning its name.
	 * @throws IOException 
	 */
	@RequestMapping(value = "/token", method = RequestMethod.GET)
	@ResponseBody
	public String home(@RequestParam("signature") String signature,
			@RequestParam("echostr") String echostr,
			@RequestParam("timestamp") String timestamp,
			@RequestParam("nonce") String nonce, 
			HttpServletResponse res,Model model) throws IOException {
	            String signatureb = signature;
            		String echostrb = echostr;
            	    String timestampb = timestamp;
            	    String nonceb = nonce;
            	    Boolean istrue = false;
            	    istrue = checkSecret.CheckSignatureb(signatureb, timestampb, nonceb);
            	    if(istrue) {
            	    	  return echostrb;
            	    }
            	    
		   return "home";
	}
	
	@RequestMapping(value="/testToken",method= RequestMethod.GET)
	@ResponseBody
	public String getTestToken(@RequestParam("signature") String signature,
			@RequestParam("echostr") String echostr,
			@RequestParam("timestamp") String timestamp,
			@RequestParam("nonce") String nonce, 
			HttpServletResponse res,Model model) throws IOException {
	                String signatureb = signature;
            		String echostrb = echostr;
            	    String timestampb = timestamp;
            	    String nonceb = nonce;
            	    Boolean istrue = false;
            	    	  return echostrb;
		
	}
	
	/*
	 * 获取验证码
	 */
	@RequestMapping(value="/jsp/VerificationCode",method=RequestMethod.GET)
	public void getCode(HttpServletRequest req,HttpServletResponse rep,Model model) throws IOException {
		// 定义图像buffer  
        BufferedImage buffImg = new BufferedImage(width, height,  
                BufferedImage.TYPE_INT_RGB);  

        Graphics gd = buffImg.getGraphics();  
        // 创建一个随机数生成器类  
        Random random = new Random();  
        // 将图像填充为白色  
        gd.setColor(Color.WHITE);  
        gd.fillRect(0, 0, width, height);  
  
        // 创建字体，字体的大小应该根据图片的高度来定。  
        Font font = new Font("Fixedsys", Font.BOLD, fontHeight);  
        // 设置字体。  
        gd.setFont(font);  
  
        // 画边框。  
        gd.setColor(Color.BLACK);  
        gd.drawRect(0, 0, width - 1, height - 1);  
  
        // 随机产生40条干扰线，使图象中的认证码不易被其它程序探测到。  
        gd.setColor(Color.BLACK);  
        for (int i = 0; i < 40; i++) {  
            int x = random.nextInt(width);  
            int y = random.nextInt(height);  
            int xl = random.nextInt(12);  
            int yl = random.nextInt(12);  
            gd.drawLine(x, y, x + xl, y + yl);  
        }  
  
        // randomCode用于保存随机产生的验证码，以便用户登录后进行验证。  
         
        int red = 0, green = 0, blue = 0;  
        this.randomCode.setLength(0);
        // 随机产生codeCount数字的验证码。  
        for (int i = 0; i < codeCount; i++) {  
            // 得到随机产生的验证码数字。  
            String code = String.valueOf(codeSequence[random.nextInt(36)]);  
            // 产生随机的颜色分量来构造颜色值，这样输出的每位数字的颜色值都将不同。  
            red = random.nextInt(255);  
            green = random.nextInt(255);  
            blue = random.nextInt(255);  
  
            // 用随机产生的颜色将验证码绘制到图像中。  
            gd.setColor(new Color(red, green, blue));  
            gd.drawString(code, (i + 1) * xx, codeY);  
  
            // 将产生的四个随机数组合在一起。  
            this.randomCode.append(code);  
        }
     // 将四位数字的验证码保存到Session中。  
        HttpSession session = req.getSession();  
        System.out.println("randomCode "+randomCode);  
        session.setAttribute("code", randomCode.toString());  
        System.out.println("sessioncode "+session.getAttribute("code"));
        model.addAttribute("Code", randomCode);
  
        // 禁止图像缓存。  
        rep.setHeader("Pragma", "no-cache");  
        rep.setHeader("Cache-Control", "no-cache");  
        rep.setDateHeader("Expires", 0);  
        rep.setContentType("image/png");  
  
        // 将图像输出到Servlet输出流中。  
        ServletOutputStream out = rep.getOutputStream();  
        ImageIO.write(buffImg, "jpeg", out);  
        out.close(); 
	}
	
	/*
	 * 获得验证码数字
	 */
	@RequestMapping(value="/jsp/CodeData",method = RequestMethod.GET)
	@ResponseBody
	public StringBuffer getCodeData() {
		return this.randomCode;
	}
	
	/*
	 * 登录
	 */
	@RequestMapping(value="/jsp/Login",method=RequestMethod.POST)
	@ResponseBody
	public int Login(@RequestParam("IDNumber") String IDNumber,
			@RequestParam("password") String password,HttpServletRequest req) {
	    int count = this.loginse.selectUser(IDNumber, password);
	    if(count == 1) {
	    	   HttpSession session = req.getSession();
	    	   session.setAttribute("username",IDNumber);
	    }
	return count;
	}
	
	/*
	 * 根据条件查询职位信息
	 */
	@RequestMapping(value="/search",method= RequestMethod.GET)
	@ResponseBody
	public Map<String,Object> getTitle(@RequestParam("title") String title,
			@RequestParam("ReleaseDate") String ReleaseDate,
			@RequestParam("Education") Long Education,
			@RequestParam("jobType") Long jobType,
			@RequestParam("Department") String Department,
			@RequestParam("RecruitmentActivities") Long RecruitmentActivities,
			@RequestParam("Place") String Place,
			@RequestParam("CompanyName") String CompanyName,
			@RequestParam("page") int page,
			Model model) throws IOException, ParseException {
		                        
		            String[] ctitle	 = title.split(",");
		            if(title == "")
		            	ctitle = null;
		            String[] cCompanyName = CompanyName.split(",");
		            if(CompanyName == "")
		            	cCompanyName = null;
		            PageHelper.startPage(page, 10);
	                List<Jobdetails> joblist = this.jbse.searchJobdetails(ctitle,
	                		ReleaseDate,
	            			Education,
	            			jobType,
	            			Department,
	            			RecruitmentActivities,
	            			Place,
	            			cCompanyName);
	                PageInfo<Jobdetails> pageinfo = new PageInfo<Jobdetails>(joblist);
	                int pages = pageinfo.getPages();
	                JSONObject resultjson = new JSONObject();
	                resultjson.put("count", pages);
	                resultjson.put("result", joblist);
	                Map<String,Object> ms = new HashMap<String, Object>();
	                ms.put("count", pages);
	                ms.put("result", joblist);

	                
            	    	  return ms;
		
	}
	
	/*
	 * 插入用户的注册信息
	 */
	@RequestMapping(value="/jsp/insertUser",method = RequestMethod.POST)
	@ResponseBody
	public int insertUserData(@RequestParam("IDNumber") String IDNumber,
			@RequestParam("Password1") String Password1,
			@RequestParam("Password2") String Password2,
			@RequestParam("PhoneNumber") String PhoneNumber,
			@RequestParam("emailAddress") String emailAddress,
			@RequestParam("Code") String Code,
			HttpServletRequest req) {
		HttpSession seeion = req.getSession();
		String code = seeion.getAttribute("code").toString();
		System.out.println("Code "+Code);
		System.out.println("code "+code);
		int count = 0;
		if(Code.equals(code)) {
			System.out.println("Ok");
			 count = this.regse.Registered(IDNumber, Password1, Password2, PhoneNumber, emailAddress);
	        seeion.setAttribute("username", IDNumber);
			return count;	
		}
		else {
			System.out.println("No");
		}
		return count;
	}
	/*
	 * 查询用户ID是否存在
	 */
	@RequestMapping(value="/jsp/HasUserId",method=RequestMethod.GET)
	@ResponseBody
	public int hasUserId(@RequestParam("IDNumber") String IDNumber) {
		int count = this.regse.HasUserId(IDNumber);
		return count;
	}
	/*
	 * 查询电话号码是否存在
	 */
	@RequestMapping(value="/jsp/HasPhone",method=RequestMethod.GET)
	@ResponseBody
	public int hasPhone(@RequestParam("PhoneNumber") String PhoneNumber) {
		int count = this.regse.hasPhone(PhoneNumber);
		return count;
	}
	/*
	 * 查询邮箱地址是否存在，指定的用户中
	 */
	@RequestMapping(value="/jsp/HasEmail",method=RequestMethod.GET)
	@ResponseBody
	public int hasEmail(@RequestParam("IDNumber") String IDNumber,
			@RequestParam("Email") String Email) {
		int count = this.regse.hasEmail(IDNumber, Email);
		return count;
	}
	/*
	 * 修改密码时，存储临时的ID
	 */
	@RequestMapping(value="/jsp/snapID",method=RequestMethod.POST)
	public String emailAuthentication(@RequestParam("IDNumber") String IDNumber,Model model) {
		model.addAttribute("snapId", IDNumber);
		return "changePassword";
	}
	
	/*
	 * 修改密码
	 */
	@RequestMapping(value="/jsp/changePassword",method=RequestMethod.POST)
	public String updatePassword(@RequestParam("IDNumber") String IDNumber,
			@RequestParam("Password1") String Password1,
			@RequestParam("Password2") String Password2) {
		this.regse.updatePassword(IDNumber, Password1, Password2);
		return "login";
	}
	
	/*
	 * 职位申请
	 */
	@RequestMapping(value="/ApplyForPosition",method=RequestMethod.POST)
	@ResponseBody
	public int Apply(@RequestParam("Position") String Position,
			@RequestParam("IDNumber") String IDNumber) {
		int count = 0,cindex = 0;
		Registered myreg = this.regse.selectXX(IDNumber);
		String myemail = myreg.getEmailAddress();
		System.out.println(myreg.getEmailAddress());
		ToEmail email = new ToEmail();
		email.sendMail(myemail,Position,ms);
		return count;
	}
	
	/*
	 * 获得职位相关信息、职位描述、任职资格描述
	 */
	@RequestMapping(value="/jsp/DescribeJobs",method = RequestMethod.GET)
	@ResponseBody
	public Map<String,Object> getJobDetails(@RequestParam("JobDetailsId") Long JobDetailsId,
			Model model) throws ParseException{
		//获得职位的相关信息
		Jobdetails job = this.dese.QueryJobDetails(JobDetailsId);
		int cone = job.getReleaseDate().indexOf(" ");
		String cjob = job.getReleaseDate().substring(0, cone);
		job.setReleaseDate(cjob);
		//获得职位描述
		List<Description> deslist = this.dese.QueryJobDescription(JobDetailsId);
		ArrayList<String> textArray = new ArrayList<String>();
		for(Iterator<Description> it = deslist.iterator();it.hasNext();) {
			Description des = it.next();
			System.out.println(des.getDoj().getDescriptionOfJobText());
			textArray.add(des.getDoj().getDescriptionOfJobText());
		}
		//获得任职资格描述
		List<JobDescription> qualist = this.dese.QueryQualifications(JobDetailsId);
		ArrayList<String> quaArray = new ArrayList<String>();
		for(Iterator<JobDescription> it = qualist.iterator();it.hasNext();) {
			JobDescription jobd = it.next();
			System.out.println(jobd.getQua().getQualificationsText());
			quaArray.add(jobd.getQua().getQualificationsText());
		}
		Map<String,Object> desmap = new HashMap<String, Object>();
		desmap.put("job", job);
		desmap.put("DescribeText", textArray);
		desmap.put("QualificationsText", quaArray);
		return desmap;
	}
	/*
	 * 查询该用户的所有简历的创建时间、更新时间
	 */
	@RequestMapping(value="/jsp/ResumeStatus",method = RequestMethod.POST)
	@ResponseBody
	public List<ResumeStatus> selectResumeStatus(@RequestParam("IDNumber") String IDNumber){
		return this.rsse.selectResumeStatus(IDNumber);
	}
	/*
	 * 查询该用户相应简历的信息
	 */
	@RequestMapping(value="/jsp/ResumeInformation",method = RequestMethod.POST)
	@ResponseBody
	public Map<String, Object> selectResumeInformation(@RequestParam("IDNumber") String IDNumber,
			@RequestParam("resumeId") Long resumeId){
		PersonalInformation2 pi2 = this.pise.selectPersonalInformationAll(resumeId, IDNumber);
		List<WorkExperience> we = this.wese.selectWorkExperienceAll(IDNumber, resumeId);
		CareerObjective co = this.cobs.selectCareerObjectiveAll(resumeId, IDNumber);
		List<EducationBackground> eb = this.ebse.selectEducationBackgroundAll(resumeId, IDNumber);
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("pi", pi2);
		map.put("co", co);
		map.put("we", we);	
		map.put("eb", eb);
		return map;
	}
	/*
	 * 保存个人信息
	 */
	@RequestMapping(value="/jsp/PersonalInformation",method = RequestMethod.POST)
	public String insertPersonalInformation(			
			@RequestPart("Avatar") MultipartFile Avatar,
			@RequestParam("Name") String Name,
			@RequestParam("Sex") Long Sex,
			@RequestParam("DateOfBirth") String DateOfBirth,
			@RequestParam("IDnumber") String IDnumber,
			@RequestParam("PhoneNumber") String PhoneNumber,
			@RequestParam("ToWorkTime") String ToWorkTime,
			@RequestParam("AccountLocation") String AccountLocation,
			@RequestParam("CurrentCity") String CurrentCity,
			@RequestParam("EmailAddress") String EmailAddress,
			@RequestParam("MaritalStatus") Long MaritalStatus,
			@RequestParam("PersonalId") Long PersonalId) throws IOException, ServletException {
		byte[] cAvatar = Avatar.getBytes();
		String ImgType = Avatar.getContentType();
		if(Avatar.getSize() == 0 ) {
			cAvatar = "".getBytes();
			ImgType = "";
		}
		System.out.println(cAvatar);
		System.out.println("imgtype: "+Avatar.getContentType());
		System.out.println("Name: "+Name);
		ToWorkTime = ToWorkTime +"-01";
		int count = this.pise.selectPersonalInformation(PersonalId.longValue(), IDnumber);
		if(count == 0) {
			Date nowdate = new Date();
			SimpleDateFormat datef = new SimpleDateFormat("yyyy-MM-dd");
			String nowtime = datef.format(nowdate);
			this.pise.insertPersonalInformation(PersonalId.longValue(), cAvatar,ImgType, Name, Sex, DateOfBirth, IDnumber, PhoneNumber, ToWorkTime, AccountLocation, CurrentCity, EmailAddress, MaritalStatus,nowtime);
		}
		else {
			Date update = new Date();
			SimpleDateFormat datef = new SimpleDateFormat("yyyy-MM-dd");
			String uptime = datef.format(update);
			if(Avatar.getSize() == 0 ) {
				this.pise.updatePersonalInformation1(PersonalId, Name, Sex, DateOfBirth, IDnumber, PhoneNumber, ToWorkTime, AccountLocation, CurrentCity, EmailAddress, MaritalStatus, uptime);
			}
			else {
				int updateCount = this.pise.updatePersonalInformation(PersonalId, cAvatar,ImgType, Name, Sex, DateOfBirth, IDnumber, PhoneNumber, ToWorkTime, AccountLocation, CurrentCity, EmailAddress, MaritalStatus,uptime);
			}
			
		}
		
		return "myResume";
	}
	
	/*
	 * 保存求职意向
	 */
	@RequestMapping(value="/jsp/CareerObjective",method = RequestMethod.POST)
	public String insertCareerObjective(@RequestParam("NatureOfTheWork") Long NatureOfTheWork,
			@RequestParam("WorkPlace") String WorkPlace,
			@RequestParam("ExpectedSalary") Long ExpectedSalary,
			@RequestParam("WorkStatus") Long WorkStatus,
			@RequestParam("IDNumber") String IDNumber,
			@RequestParam("CareerObjectiveId") Long CareerObjectiveId) {
		int count = this.cobs.selectCareerObjective(CareerObjectiveId, IDNumber);
		if(count == 0) {
			Date nowdate = new Date();
			SimpleDateFormat datef = new SimpleDateFormat("yyyy-MM-dd");
			String nowtime = datef.format(nowdate);
			this.cobs.insertCareerObjective(CareerObjectiveId, IDNumber, NatureOfTheWork, WorkPlace, ExpectedSalary, WorkStatus, nowtime);
		}
		else {
			Date update = new Date();
			SimpleDateFormat datef = new SimpleDateFormat("yyyy-MM-dd");
			String uptime = datef.format(update);
			this.cobs.updateCareerObjective(CareerObjectiveId, IDNumber, NatureOfTheWork, WorkPlace, ExpectedSalary, WorkStatus, uptime);
		}
		
		return "myResume";
	}
	/*
	 * 保存教育背景
	 */
	@RequestMapping(value="/jsp/EducationBackground",method = RequestMethod.POST)
	@ResponseBody
	public String insertEducationBackground(@RequestParam("ctest") String[] ctest) {
		System.out.println(ctest.length);
		String array ="";
		for(int i=0;i<ctest.length;i++) {
			array += ctest[i];
			if(i == ctest.length )
				return "fail";
			array += ",";
		}
		System.out.println(array);
		JSONArray json = new JSONArray(array);
		System.out.println(json);
		System.out.println(json.length());
		System.out.println(json.get(0));
		System.out.println(json.getJSONObject(0).get("SchoolName"));
		for(int i=0;i<json.length();i++) {
			String SchoolName = json.getJSONObject(i).getString("SchoolName");
			String ProfessionalTitle = json.getJSONObject(i).getString("ProfessionalTitle");
			Long Degree = json.getJSONObject(i).getLong("Degree");
			String AdmissionTime = json.getJSONObject(i).getString("AdmissionTime");
			AdmissionTime = AdmissionTime + "-01";
			String GraduationTime = json.getJSONObject(i).getString("GraduationTime");
			GraduationTime = GraduationTime + "-01";
			Long EducationBackgroundId = json.getJSONObject(i).getLong("EducationBackgroundId");
			String IDNumber = json.getJSONObject(i).getString("IDNumber");
			Long Number = json.getJSONObject(i).getLong("Number");
			int count = this.ebse.selectEducationBackground(EducationBackgroundId, IDNumber, Number);
			if(count == 0) {
				Date nowdate = new Date();
				SimpleDateFormat datef = new SimpleDateFormat("yyyy-MM-dd");
				String nowtime = datef.format(nowdate);
				this.ebse.insertEducationBackground(EducationBackgroundId, SchoolName, ProfessionalTitle, Degree, AdmissionTime, GraduationTime, IDNumber, Number, nowtime);
			}
			else {
				Date update = new Date();
				SimpleDateFormat datef = new SimpleDateFormat("yyyy-MM-dd");
				String uptime = datef.format(update);
				this.ebse.updateEducationBackground(EducationBackgroundId, SchoolName, ProfessionalTitle, Degree, AdmissionTime, GraduationTime, IDNumber, Number, uptime);
			}
			
		}
		return "success";
	}
	
	/*
	 * 保存工作经验
	 */
	@RequestMapping(value="/jsp/WorkExperience",method = RequestMethod.POST)
	@ResponseBody
	public String insertWorkExperience(@RequestParam("gzjy") String[] gzjy) {
		System.out.println(gzjy.length);
		String array ="";
		for(int i=0;i<gzjy.length;i++) {
			array += gzjy[i];
			if(i == gzjy.length )
				return "fail";
			array += ",";
		}
		System.out.println(array);
		JSONArray json = new JSONArray(array);
		System.out.println(json);
		System.out.println(json.length());
		System.out.println(json.get(0));
		System.out.println(json.getJSONObject(0).get("CompanyName"));
		for(int i=0;i<json.length();i++) {
			String CompanyName = json.getJSONObject(i).getString("CompanyName");
			String JobTitle = json.getJSONObject(i).getString("JobTitle");
			String ZWStartTime = json.getJSONObject(i).getString("ZWStartTime");
			ZWStartTime = ZWStartTime + "-01";
			String ZWEndTime = json.getJSONObject(i).getString("ZWEndTime");
			ZWEndTime = ZWEndTime + "-01";
			Long ZWSalary = json.getJSONObject(i).getLong("zwSalary");
			String ZWGzms = json.getJSONObject(i).getString("zwGzms");
			Long WorkExperienceId = json.getJSONObject(i).getLong("WorkExperienceId");
			String IDNumber = json.getJSONObject(i).getString("IDNumber");
			Long Number = json.getJSONObject(i).getLong("Number"); 
			int count = this.wese.selectWorkExperience(WorkExperienceId, IDNumber, Number);
			if(count == 0) {
				Date nowdate = new Date();
				SimpleDateFormat datef = new SimpleDateFormat("yyyy-MM-dd");
				String nowtime = datef.format(nowdate);
				this.wese.insertWorkExperience(WorkExperienceId, CompanyName, JobTitle, ZWStartTime, ZWEndTime, ZWSalary, ZWGzms, IDNumber, Number, nowtime);
			}
			else {
				Date update = new Date();
				SimpleDateFormat datef = new SimpleDateFormat("yyyy-MM-dd");
				String uptime = datef.format(update);
				this.wese.updateWorkExperience(WorkExperienceId, CompanyName, JobTitle, ZWStartTime, ZWEndTime, ZWSalary, ZWGzms, IDNumber, Number, uptime);
			}
		}
		return "success";
	}
	/*
	 * 查询个人信息
	 */
	@RequestMapping(value="/jsp/searchPersonalInformation",method = RequestMethod.POST)
	@ResponseBody
	public Map<String, Object> searchPersonalInformation(@RequestParam("IDNumber") String IDNumber,
			@RequestParam("resumeId") Long resumeId){
		PersonalInformation2 pi2 = this.pise.selectPersonalInformationAll(resumeId, IDNumber);
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("pi", pi2);
		return map;
	}
	/*
	 * 查询求职意向信息
	 */
	@RequestMapping(value="/jsp/searchCareerObjective",method = RequestMethod.POST)
	@ResponseBody
	public Map<String, Object> searchCareerObjective(@RequestParam("IDNumber") String IDNumber,
			@RequestParam("resumeId") Long resumeId){
		CareerObjective co = this.cobs.selectCareerObjectiveAll(resumeId, IDNumber);
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("co", co);
		return map;
	}
	/*
	 * 查询教育背景信息
	 */
	@RequestMapping(value="/jsp/searchEducationBackground",method = RequestMethod.POST)
	@ResponseBody
	public Map<String, Object> searchEducationBackground(@RequestParam("IDNumber") String IDNumber,
			@RequestParam("resumeId") Long resumeId){
		List<EducationBackground> eb = this.ebse.selectEducationBackgroundAll(resumeId, IDNumber);
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("eb", eb);
		return map;
	}
	
	/*
	 * 删除该用户的某份简历下的某条教育背景信息
	 */
	@RequestMapping(value="/jsp/deleteEducationBackground",method = RequestMethod.POST)
	@ResponseBody
	public int deleteEducationBackground(@RequestParam("IDNumber") String IDNumber,
			@RequestParam("Number") Long Number,
			@RequestParam("EducationBackgroundId") Long EducationBackgroundId){
		int count = this.ebse.deleteEducationBackground(EducationBackgroundId, IDNumber, Number);
		return count;
	}
	/*
	 * 查询工作经验
	 */
	@RequestMapping(value="/jsp/searchWorkExperience",method = RequestMethod.POST)
	@ResponseBody
	public Map<String, Object> searchWorkExperience(@RequestParam("IDNumber") String IDNumber,
			@RequestParam("resumeId") Long resumeId){
		List<WorkExperience> we = this.wese.selectWorkExperienceAll(IDNumber, resumeId);
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("we", we);
		return map;
	}
	/*
	 * 删除该用户的某份简历下的某条工作经验信息
	 */
	@RequestMapping(value="/jsp/deleteWorkExperience",method = RequestMethod.POST)
	@ResponseBody
	public int deleteWorkExperience(@RequestParam("IDNumber") String IDNumber,
			@RequestParam("Number") Long Number,
			@RequestParam("WorkExperienceId") Long WorkExperienceId){
		int count = this.wese.deleteWorkExperience(WorkExperienceId, IDNumber, Number);
		return count;
	}
	
	/*
	 * 删除该用户的某份简历
	 */
	@RequestMapping(value="/jsp/deleteResume",method=RequestMethod.POST)
	@ResponseBody
	public int deleteResume(@RequestParam("IDNumber") String IDNumber,
			@RequestParam("resumeId") Long resumeId) {
		int count = 0;
		count += this.pise.deletePersonalInformation(resumeId, IDNumber);
		count += this.cobs.deleteCareerObjective(resumeId, IDNumber);
		count += this.ebse.deleteEducationBackgroundAll(resumeId, IDNumber);
		count += this.wese.deleteWorkExperienceAll(resumeId, IDNumber);
		return count;
	}
	
	
}
