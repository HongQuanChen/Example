package com.mybatis.swschrwx.service.imp;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.mybatis.swschrwx.model.DescriptionM;
import com.mybatis.swschrwx.pojo.Description;
import com.mybatis.swschrwx.pojo.JobDescription;
import com.mybatis.swschrwx.pojo.Jobdetails;
import com.mybatis.swschrwx.service.DescriptionService;

@Component("DescriptionService")
public class DescriptionServiceImp implements DescriptionService {
	@Autowired
	private DescriptionM des;
	
	public Jobdetails QueryJobDetails(Long JobDetailsId) {
		return this.des.selectById(JobDetailsId);
	};
	
	public List<Description> QueryJobDescription(Long JobDetailsId) {
		return this.des.descriptionById(JobDetailsId);
	};
	
	public List<JobDescription> QueryQualifications(Long JobDetailsId){
		return this.des.descriptionQuaById(JobDetailsId);
	};

}
