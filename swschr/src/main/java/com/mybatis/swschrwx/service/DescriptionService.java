package com.mybatis.swschrwx.service;

import java.util.List;

import com.mybatis.swschrwx.pojo.Description;
import com.mybatis.swschrwx.pojo.JobDescription;
import com.mybatis.swschrwx.pojo.Jobdetails;

public interface DescriptionService {
	Jobdetails QueryJobDetails(Long JobDetailsId);
	List<Description> QueryJobDescription(Long JobDetailsId);
	List<JobDescription> QueryQualifications(Long JobDetailsId);

}
